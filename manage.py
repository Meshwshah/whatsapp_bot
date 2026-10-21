import sys
import argparse
import csv

if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

from app.database import init_db, SessionLocal
from app.seed_data import seed_database
from app.models import Product, Category, RepairTicket, RepairStatus, DeviceType, Reservation

def cmd_init():
    init_db()
    print("[SUCCESS] Database tables created successfully.")

def cmd_seed():
    init_db()
    seed_database()

def cmd_list_products(brand_filter: str = None):
    db = SessionLocal()
    try:
        query = db.query(Product)
        if brand_filter:
            query = query.filter(Product.brand.ilike(f"%{brand_filter}%"))
        products = query.order_by(Product.id.asc()).all()

        print(f"\n{'ID':<5} | {'Name':<40} | {'Brand':<12} | {'Price':<10} | {'MRP':<10} | {'Stock'}")
        print("-" * 90)
        for p in products:
            stock = f"In Stock ({p.stock_quantity})" if p.in_stock else "Out of Stock"
            mrp_str = f"Rs.{int(p.mrp):,}" if p.mrp else "-"
            print(f"{p.id:<5} | {p.name[:40]:<40} | {p.brand[:12]:<12} | Rs.{int(p.price):<8,} | {mrp_str:<10} | {stock}")
        print(f"\nTotal Products: {len(products)}")
    finally:
        db.close()

def cmd_update_price(prod_id: int, price: float, mrp: float = None, stock: int = None, in_stock: bool = None):
    db = SessionLocal()
    try:
        product = db.query(Product).filter(Product.id == prod_id).first()
        if not product:
            print(f"[ERROR] Product with ID {prod_id} not found!")
            return

        old_price = product.price
        product.price = price
        if mrp is not None:
            product.mrp = mrp
        if stock is not None:
            product.stock_quantity = stock
        if in_stock is not None:
            product.in_stock = in_stock

        db.commit()
        print(f"[SUCCESS] Updated '{product.name}' (ID: {product.id})")
        print(f"  Old Price: Rs.{int(old_price):,} -> New Price: Rs.{int(product.price):,}")
        if product.mrp:
            print(f"  MRP: Rs.{int(product.mrp):,}")
        print(f"  Stock: {product.stock_quantity} (in_stock={product.in_stock})")
        print("  -> WhatsApp bot and website will now immediately reply with this updated price!")
    finally:
        db.close()

def cmd_add_product(brand: str, name: str, price: float, mrp: float = None, category_id: int = 1, desc: str = "", specs: str = "", stock: int = 5):
    db = SessionLocal()
    try:
        cat = db.query(Category).filter(Category.id == category_id).first()
        if not cat:
            cat = db.query(Category).filter(Category.slug.like(f"%{brand.lower()}%")).first()
            if not cat:
                cat = db.query(Category).first()

        mrp_val = mrp if mrp else round(price * 1.15)
        new_prod = Product(
            category_id=cat.id if cat else 1,
            brand=brand,
            name=name,
            model_number=name,
            description=desc or f"{brand} smartphone with official warranty.",
            price=price,
            mrp=mrp_val,
            in_stock=True,
            stock_quantity=stock,
            is_featured=True,
            warranty_info=f"1 Year {brand} Warranty",
            specifications=specs or f"• Model: {name}\n• Brand: {brand}"
        )
        db.add(new_prod)
        db.commit()
        db.refresh(new_prod)
        print(f"[SUCCESS] Added product: {new_prod.name} (ID: {new_prod.id}) under category: {cat.name if cat else 'Default'}")
        print(f"  Price: Rs.{int(new_prod.price):,} | MRP: Rs.{int(new_prod.mrp):,}")
    finally:
        db.close()

def cmd_export_csv(file_path: str = "products_catalog.csv"):
    db = SessionLocal()
    try:
        products = db.query(Product).order_by(Product.id.asc()).all()
        with open(file_path, "w", newline="", encoding="utf-8") as f:
            writer = csv.writer(f)
            writer.writerow(["id", "brand", "name", "price", "mrp", "in_stock", "stock_quantity", "description", "image_url"])
            for p in products:
                writer.writerow([p.id, p.brand, p.name, p.price, p.mrp, p.in_stock, p.stock_quantity, p.description, p.image_url])
        print(f"[SUCCESS] Exported {len(products)} products to '{file_path}'")
        print("You can open this in Excel, edit any prices or stock, and re-import using 'python manage.py import-csv'!")
    finally:
        db.close()

def cmd_import_csv(file_path: str = "products_catalog.csv"):
    db = SessionLocal()
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            reader = csv.DictReader(f)
            updated = 0
            for row in reader:
                prod_id = int(row["id"])
                p = db.query(Product).filter(Product.id == prod_id).first()
                if p:
                    p.price = float(row["price"])
                    p.mrp = float(row["mrp"]) if row.get("mrp") else p.mrp
                    p.stock_quantity = int(row.get("stock_quantity", p.stock_quantity))
                    p.in_stock = str(row.get("in_stock", "true")).lower() in ["true", "1", "yes"]
                    if row.get("description"):
                        p.description = row["description"]
                    updated += 1
            db.commit()
            print(f"[SUCCESS] Updated {updated} products from '{file_path}'!")
    finally:
        db.close()

def cmd_list_repairs():
    db = SessionLocal()
    try:
        tickets = db.query(RepairTicket).all()
        print(f"\n{'Ticket #':<10} | {'Device':<24} | {'Customer Phone':<15} | {'Status':<18} | {'Cost'}")
        print("-" * 80)
        for t in tickets:
            cost = f"Rs.{int(t.final_cost or t.estimated_cost or 0)}"
            print(f"{t.ticket_number:<10} | {t.device_model[:24]:<24} | {t.customer_phone:<15} | {t.status.value:<18} | {cost}")
        print(f"\nTotal Tickets: {len(tickets)}")
    finally:
        db.close()

def cmd_update_repair(ticket_no: str, status_str: str, final_cost: float = None, notes: str = None):
    db = SessionLocal()
    try:
        ticket = db.query(RepairTicket).filter(RepairTicket.ticket_number == ticket_no.upper()).first()
        if not ticket:
            print(f"[ERROR] Ticket '{ticket_no}' not found!")
            return

        try:
            new_status = RepairStatus(status_str.lower())
            ticket.status = new_status
        except ValueError:
            print(f"[ERROR] Invalid status '{status_str}'. Allowed: {[s.value for s in RepairStatus]}")
            return

        if final_cost is not None:
            ticket.final_cost = final_cost
        if notes:
            ticket.technician_notes = notes

        db.commit()
        print(f"[SUCCESS] Updated {ticket.ticket_number}: Status -> {ticket.status.value}, Final Bill -> Rs.{ticket.final_cost}")
    finally:
        db.close()

def cmd_create_repair(name: str, phone: str, device: str, issue: str, dtype: str = "mobile", est_cost: float = 0.0):
    db = SessionLocal()
    try:
        count = db.query(RepairTicket).count()
        ticket_no = f"REP-{1001 + count}"
        try:
            device_type = DeviceType(dtype.lower())
        except ValueError:
            device_type = DeviceType.MOBILE

        ticket = RepairTicket(
            ticket_number=ticket_no,
            customer_name=name,
            customer_phone=phone,
            device_type=device_type,
            device_model=device,
            issue_description=issue,
            status=RepairStatus.RECEIVED,
            estimated_cost=est_cost
        )
        db.add(ticket)
        db.commit()
        print(f"[SUCCESS] Created Repair Ticket: {ticket_no} for {name} ({device})")
    finally:
        db.close()

def main():
    parser = argparse.ArgumentParser(description="ElectroMobile WhatsApp Bot Management CLI")
    subparsers = parser.add_subparsers(dest="command")

    subparsers.add_parser("init-db", help="Create database tables")
    subparsers.add_parser("seed", help="Seed default catalog and repair data")
    
    # Products
    lp = subparsers.add_parser("list-products", help="List all products in stock")
    lp.add_argument("--brand", help="Filter by brand (e.g. Samsung, Motorola, Vivo)")

    up_p = subparsers.add_parser("update-price", help="Update product price, mrp, or stock")
    up_p.add_argument("--id", type=int, required=True, help="Product ID")
    up_p.add_argument("--price", type=float, required=True, help="New selling price in Rs.")
    up_p.add_argument("--mrp", type=float, help="New MRP in Rs.")
    up_p.add_argument("--stock", type=int, help="Stock quantity")
    up_p.add_argument("--in-stock", type=lambda x: (str(x).lower() == 'true'), help="True/False")

    ap = subparsers.add_parser("add-product", help="Add a new product/model to catalog")
    ap.add_argument("--brand", required=True, help="e.g. Samsung, Motorola, Vivo, OnePlus")
    ap.add_argument("--name", required=True, help="Full product name, e.g. 'Samsung Galaxy S27 Ultra (12GB+256GB)'")
    ap.add_argument("--price", type=float, required=True, help="Selling price in Rs.")
    ap.add_argument("--mrp", type=float, help="MRP in Rs.")
    ap.add_argument("--desc", default="", help="Short description")
    ap.add_argument("--specs", default="", help="Specifications bullet points")
    ap.add_argument("--stock", type=int, default=5, help="Stock quantity")

    # CSV Bulk
    exp = subparsers.add_parser("export-csv", help="Export products to CSV for Excel editing")
    exp.add_argument("--file", default="products_catalog.csv", help="File name to export")

    imp = subparsers.add_parser("import-csv", help="Import products from CSV after editing in Excel")
    imp.add_argument("--file", default="products_catalog.csv", help="File name to import")

    # Repairs
    subparsers.add_parser("list-repairs", help="List all repair jobs")

    up_parser = subparsers.add_parser("update-repair", help="Update status of a repair ticket")
    up_parser.add_argument("--ticket", required=True, help="Ticket number, e.g. REP-1001")
    up_parser.add_argument("--status", required=True, help="e.g. diagnosing, waiting_parts, in_repair, ready_for_pickup, delivered")
    up_parser.add_argument("--cost", type=float, help="Final repair cost")
    up_parser.add_argument("--notes", help="Technician remarks")

    cr_parser = subparsers.add_parser("create-repair", help="Register a new repair ticket")
    cr_parser.add_argument("--name", required=True, help="Customer name")
    cr_parser.add_argument("--phone", required=True, help="Customer phone number")
    cr_parser.add_argument("--device", required=True, help="Device model (e.g. iPhone 13, Mixer Grinder)")
    cr_parser.add_argument("--issue", required=True, help="Issue description")
    cr_parser.add_argument("--type", default="mobile", choices=["mobile", "appliance", "accessory"], help="Device category")
    cr_parser.add_argument("--cost", type=float, default=0.0, help="Estimated cost")

    args = parser.parse_args()

    if args.command == "init-db":
        cmd_init()
    elif args.command == "seed":
        cmd_seed()
    elif args.command == "list-products":
        cmd_list_products(args.brand)
    elif args.command == "update-price":
        cmd_update_price(args.id, args.price, args.mrp, args.stock, args.in_stock)
    elif args.command == "add-product":
        cmd_add_product(args.brand, args.name, args.price, args.mrp, desc=args.desc, specs=args.specs, stock=args.stock)
    elif args.command == "export-csv":
        cmd_export_csv(args.file)
    elif args.command == "import-csv":
        cmd_import_csv(args.file)
    elif args.command == "list-repairs":
        cmd_list_repairs()
    elif args.command == "update-repair":
        cmd_update_repair(args.ticket, args.status, args.cost, args.notes)
    elif args.command == "create-repair":
        cmd_create_repair(args.name, args.phone, args.device, args.issue, args.type, args.cost)
    else:
        parser.print_help()

if __name__ == "__main__":
    main()
