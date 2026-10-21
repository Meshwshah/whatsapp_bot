import sys
import re
import os
import shutil

# Add paths
sys.path.append(r'C:\Users\meshw shah\OneDrive\Desktop\mobile')
import mobile_data

from app.database import SessionLocal, init_db
from app.models import Category, Product

def parse_price_info(raw_price: str):
    nums = [int(x.replace(',', '')) for x in re.findall(r'[\d,]+', raw_price) if len(x.replace(',', '')) >= 4]
    if not nums:
        return 15000.0, 17500.0
    if len(nums) == 1:
        price = float(nums[0])
        mrp = float(round(price * 1.15))
        return price, mrp
    # If 2 numbers, usually NEP (lower) and MOP (higher)
    if 'NEP' in raw_price:
        # e.g. MOP 15999 (NEP 13999) -> price=13999, mrp=15999
        price = float(min(nums))
        mrp = float(max(nums))
        return price, mrp
    # E.g. 19999 / 21999 / 25999 -> base price is first
    price = float(nums[0])
    mrp = float(max(nums)) if max(nums) > price else float(round(price * 1.12))
    return price, mrp

def run_import():
    init_db()
    db = SessionLocal()

    print("Step 1: Setting up Brand Categories...")
    category_map = {
        "Samsung": {
            "name": "Samsung Galaxy Phones",
            "slug": "samsung-phones",
            "icon": "📱",
            "type": "mobile",
            "description": "Galaxy S26, Fold8, Flip8 & A-Series"
        },
        "Motorola": {
            "name": "Motorola Phones",
            "slug": "motorola-phones",
            "icon": "📱",
            "type": "mobile",
            "description": "Razr 60 Flip, Edge 70 & Moto G series"
        },
        "Vivo": {
            "name": "Vivo Phones",
            "slug": "vivo-phones",
            "icon": "📱",
            "type": "mobile",
            "description": "X Fold6, X300 Ultra, V80 & T5 series"
        }
    }

    db_cats = {}
    for brand, info in category_map.items():
        cat = db.query(Category).filter(Category.slug == info["slug"]).first()
        if not cat:
            cat = Category(
                name=info["name"],
                slug=info["slug"],
                icon=info["icon"],
                type=info["type"],
                description=info["description"]
            )
            db.add(cat)
            db.commit()
            db.refresh(cat)
            print(f"  Created category: {cat.name} (id={cat.id})")
        else:
            print(f"  Found category: {cat.name} (id={cat.id})")
        db_cats[brand] = cat

    # Also keep generic smartphones category if exists
    general_cat = db.query(Category).filter(Category.slug == "smartphones").first()

    print("\nStep 2: Copying static images...")
    src_img_dir = r"C:\Users\meshw shah\OneDrive\Desktop\mobile\images"
    dest_img_dir = os.path.join(os.getcwd(), "static", "images")
    os.makedirs(dest_img_dir, exist_ok=True)
    for sub in ["motorola", "samsung", "vivo"]:
        s = os.path.join(src_img_dir, sub)
        d = os.path.join(dest_img_dir, sub)
        if os.path.exists(s):
            shutil.copytree(s, d, dirs_exist_ok=True)
    print("  Static images synchronized to static/images/")

    print("\nStep 3: Importing Mobile Models...")
    dataset = [
        ("Samsung", mobile_data.SAMSUNG_DATA),
        ("Motorola", mobile_data.MOTOROLA_DATA),
        ("Vivo", mobile_data.VIVO_DATA)
    ]

    total_added = 0
    total_updated = 0

    for brand, items in dataset:
        target_cat = db_cats[brand]
        for item in items:
            model_name = item["model"].strip()
            variant = item.get("variants", "").strip()
            display_name = f"{model_name} ({variant})" if variant else model_name

            price, mrp = parse_price_info(item.get("price", ""))
            badge = item.get("badge", "")
            is_feat = bool(badge and any(w in badge.lower() for w in ["flagship", "best", "new", "pro", "ultra", "fold", "flip"]))

            specs = (
                f"• Series: {item.get('series', '')}\n"
                f"• Variant: {variant}\n"
                f"• Badge: {badge or 'Standard'}\n"
                f"• Highlights: {item.get('desc', '')}"
            )

            rel_img = item.get("image", "")
            img_url = f"/static/{rel_img}" if rel_img else None

            # Check if product already exists by model_number or name
            existing = db.query(Product).filter(
                (Product.brand == brand) & 
                ((Product.name == display_name) | (Product.model_number == model_name))
            ).first()

            if existing:
                existing.category_id = target_cat.id
                existing.name = display_name
                existing.description = item.get("desc", existing.description)
                existing.price = price
                existing.mrp = mrp
                existing.specifications = specs
                existing.image_url = img_url
                existing.is_featured = is_feat
                total_updated += 1
            else:
                new_prod = Product(
                    category_id=target_cat.id,
                    name=display_name,
                    brand=brand,
                    model_number=model_name,
                    description=item.get("desc", ""),
                    price=price,
                    mrp=mrp,
                    in_stock=True,
                    stock_quantity=5,
                    is_featured=is_feat,
                    warranty_info=f"1 Year Official {brand} India Warranty",
                    specifications=specs,
                    image_url=img_url
                )
                db.add(new_prod)
                total_added += 1

    db.commit()
    print(f"\nImport Complete! Added: {total_added}, Updated: {total_updated}")
    
    total_prods = db.query(Product).count()
    print(f"Total products now in database: {total_prods}")
    db.close()

if __name__ == "__main__":
    run_import()
