from sqlalchemy.orm import Session
from app.database import SessionLocal, init_db
from app.models import Category, Product, RepairTicket, RepairStatus, DeviceType

import sys

if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

def seed_database(db: Session = None):
    close_when_done = False
    if db is None:
        init_db()
        db = SessionLocal()
        close_when_done = True

    try:
        # Check if already seeded
        if db.query(Category).first():
            print("[INFO] Database already contains data. Skipping seed.")
            return

        print("Seeding Categories...")
        categories = [
            # Mobile Categories
            Category(name="Smartphones", slug="smartphones", icon="📱", type="mobile", description="Latest 5G Android & iOS phones"),
            Category(name="Fast Chargers & Cables", slug="chargers-cables", icon="⚡", type="mobile", description="GaN fast adapters, braided PD cables"),
            Category(name="Audio & Wearables", slug="audio-wearables", icon="🎧", type="mobile", description="TWS Earbuds, neckbands & smartwatches"),
            Category(name="Power Banks & Cases", slug="power-cases", icon="🔋", type="mobile", description="High capacity power banks & tough cases"),

            # Appliance Categories
            Category(name="Kitchen Appliances", slug="kitchen-appliances", icon="🍲", type="appliance", description="Mixer grinders, kettles, blenders"),
            Category(name="Home Comfort & Fans", slug="fans-coolers", icon="🌀", type="appliance", description="BLDC energy saving ceiling & table fans"),
            Category(name="Irons & Heating", slug="irons-heating", icon="👔", type="appliance", description="Steam irons, room heaters & geysers")
        ]
        db.add_all(categories)
        db.commit()

        # Map by slug
        cat_map = {c.slug: c.id for c in db.query(Category).all()}

        print("Seeding Products...")
        products = [
            # Smartphones
            Product(
                category_id=cat_map["smartphones"],
                name="Samsung Galaxy M34 5G (6GB/128GB)",
                brand="Samsung",
                model_number="SM-M346B",
                description="6000mAh Battery, 120Hz sAMOLED Display, 50MP OIS Camera",
                price=14999.0,
                mrp=18999.0,
                in_stock=True,
                stock_quantity=6,
                is_featured=True,
                warranty_info="1 Year Samsung India Warranty",
                specifications="• 6.5\" 120Hz sAMOLED\n• 50MP No Shake OIS Camera\n• 6000mAh Monster Battery\n• 5G with 12 Bands"
            ),
            Product(
                category_id=cat_map["smartphones"],
                name="OnePlus Nord CE 4 (8GB/128GB)",
                brand="OnePlus",
                model_number="CPH2613",
                description="Snapdragon 7 Gen 3, 100W SUPERVOOC Fast Charge, Sony LYT-600 Camera",
                price=24999.0,
                mrp=26999.0,
                in_stock=True,
                stock_quantity=4,
                is_featured=True,
                warranty_info="1 Year Official Warranty",
                specifications="• 100W SuperVOOC (1-100% in 28 mins)\n• 5500mAh Battery\n• Sony LYT-600 OIS Camera\n• Snapdragon 7 Gen 3"
            ),
            Product(
                category_id=cat_map["smartphones"],
                name="Redmi Note 13 5G (6GB/128GB)",
                brand="Xiaomi",
                model_number="2312DRAABG",
                description="108MP Pro-grade camera, Slim design, 33W Fast charging",
                price=15999.0,
                mrp=19999.0,
                in_stock=True,
                stock_quantity=5,
                is_featured=False,
                warranty_info="1 Year Brand Warranty",
                specifications="• 108MP 3X In-sensor Zoom Camera\n• Ultra-thin 7.6mm body\n• 5000mAh Battery with 33W Charger\n• Mediatek Dimensity 6080"
            ),

            # Chargers & Cables
            Product(
                category_id=cat_map["chargers-cables"],
                name="Portronics 65W GaN Fast Charger",
                brand="Portronics",
                model_number="Adapto 65",
                description="Dual Type-C + USB-A GaN fast charger. Powers laptops, iPhones & Androids",
                price=1399.0,
                mrp=2499.0,
                in_stock=True,
                stock_quantity=15,
                is_featured=True,
                warranty_info="12 Months Replacement Warranty",
                specifications="• 65W Power Delivery 3.0\n• Triple Port (2x Type-C + 1x USB-A)\n• GaN III Tech: Cool & Compact\n• Overheat & Surge Protection"
            ),
            Product(
                category_id=cat_map["chargers-cables"],
                name="Ambrane 100W Braided Type-C Cable (1.5m)",
                brand="Ambrane",
                model_number="EP-100",
                description="Tough nylon braided 100W rapid charging data cable",
                price=299.0,
                mrp=699.0,
                in_stock=True,
                stock_quantity=30,
                is_featured=False,
                warranty_info="6 Months Warranty",
                specifications="• 100W Fast Power Delivery\n• 10,000+ Bend Tested\n• 480 Mbps Data Transfer"
            ),

            # Audio
            Product(
                category_id=cat_map["audio-wearables"],
                name="Realme Buds Air 5 Pro TWS",
                brand="Realme",
                model_number="RMA2120",
                description="50dB Active Noise Cancellation, Hi-Res Audio, 40hr Battery",
                price=4499.0,
                mrp=5999.0,
                in_stock=True,
                stock_quantity=8,
                is_featured=True,
                warranty_info="1 Year Brand Warranty",
                specifications="• 50dB Hybrid Active Noise Cancellation\n• Dual Drivers (11mm bass + 6mm micro-planar)\n• LDAC Hi-Res Audio\n• 40 Hours Total Playback"
            ),
            Product(
                category_id=cat_map["power-cases"],
                name="Mi 20000mAh 18W Fast Power Bank",
                brand="Xiaomi",
                model_number="PB200LZM",
                description="High density Lithium Polymer battery with 18W dual input/output",
                price=1799.0,
                mrp=2499.0,
                in_stock=True,
                stock_quantity=10,
                is_featured=False,
                warranty_info="6 Months Warranty",
                specifications="• 20000mAh Real Capacity\n• 18W Fast Charging Output\n• 12 Layer Advanced Circuit Protection\n• Dual USB Output"
            ),

            # Kitchen Appliances
            Product(
                category_id=cat_map["kitchen-appliances"],
                name="Bajaj Rex 750W Mixer Grinder (3 Jars)",
                brand="Bajaj",
                model_number="Rex 750",
                description="Heavy duty 750W copper motor with 3 stainless steel jars & overload protection",
                price=2899.0,
                mrp=4199.0,
                in_stock=True,
                stock_quantity=8,
                is_featured=True,
                warranty_info="2 Years Warranty on Product & Motor",
                specifications="• 750W 100% Copper Motor\n• 3 SS Jars (1.5L, 1.0L, 0.4L)\n• 3-Speed Control with Incher\n• Nutri-Pro Feature for optimal grinding"
            ),
            Product(
                category_id=cat_map["kitchen-appliances"],
                name="Pigeon by Stovekraft 1.8L Electric Kettle",
                brand="Pigeon",
                model_number="Acro 1.8L",
                description="Stainless steel rapid boiling cordless electric kettle with auto-cutoff",
                price=699.0,
                mrp=1245.0,
                in_stock=True,
                stock_quantity=20,
                is_featured=False,
                warranty_info="1 Year Manufacturer Warranty",
                specifications="• 1.8 Litre Large Capacity\n• 1500W Fast Boiling\n• Automatic Shut-Off & Boil Dry Protection\n• 360° Swivel Base"
            ),

            # Home Comfort & Fans
            Product(
                category_id=cat_map["fans-coolers"],
                name="Havells Stealth Air 1200mm BLDC Fan",
                brand="Havells",
                model_number="Stealth BLDC",
                description="Super silent BLDC energy saving fan with remote control. Saves up to 65% power",
                price=3699.0,
                mrp=5199.0,
                in_stock=True,
                stock_quantity=5,
                is_featured=True,
                warranty_info="3 Years Comprehensive Warranty",
                specifications="• 28W High Efficiency BLDC Motor\n• Smart Remote Control with Timer\n• 1200mm Aerodynamic Blades\n• 240 m³/min High Air Delivery"
            ),

            # Irons & Heating
            Product(
                category_id=cat_map["irons-heating"],
                name="Philips GC1905 1440W Steam Iron",
                brand="Philips",
                model_number="GC1905",
                description="Fast crease removal with non-stick soleplate and continuous steam spray",
                price=1499.0,
                mrp=1995.0,
                in_stock=True,
                stock_quantity=12,
                is_featured=False,
                warranty_info="2 Years Brand Warranty",
                specifications="• 1440W for quick heat up\n• Continuous steam up to 13 g/min\n• Non-stick Golden American Heritage soleplate\n• Easy water filling and emptying"
            ),
            Product(
                category_id=cat_map["irons-heating"],
                name="Crompton Arno Neo 15L Water Heater (Geyser)",
                brand="Crompton",
                model_number="Arno Neo 15L",
                description="5-Star rated storage water heater with titanium enamel coating & 8 bar pressure",
                price=5899.0,
                mrp=8999.0,
                in_stock=True,
                stock_quantity=3,
                is_featured=True,
                warranty_info="5 Years Tank Warranty + 2 Years Heating Element",
                specifications="• 15 Litres Storage Capacity\n• 5-Star Energy Efficient\n• 8 Bar Pressure (Suitable for High-Rise)\n• Advanced 3-Level Safety"
            )
        ]
        db.add_all(products)
        db.commit()

        print("Seeding Sample Repair Tickets...")
        tickets = [
            RepairTicket(
                ticket_number="REP-1001",
                customer_name="Rahul Sharma",
                customer_phone="+919876543210",
                device_type=DeviceType.MOBILE,
                device_model="Samsung Galaxy A52",
                issue_description="Broken display screen & touch unresponsive",
                status=RepairStatus.READY_FOR_PICKUP,
                estimated_cost=2400.0,
                final_cost=2400.0,
                technician_notes="Original AMOLED display assembly replaced. Tested ok."
            ),
            RepairTicket(
                ticket_number="REP-1002",
                customer_name="Amit Patel",
                customer_phone="+919876543210",
                device_type=DeviceType.APPLIANCE,
                device_model="Bajaj Rex 750W Mixer",
                issue_description="Heavy spark and smoke from bottom motor",
                status=RepairStatus.IN_REPAIR,
                estimated_cost=650.0,
                final_cost=None,
                technician_notes="Carbon brushes worn out and armature commutator polished. Re-assembly in progress."
            ),
            RepairTicket(
                ticket_number="REP-1003",
                customer_name="Priya Desai",
                customer_phone="+919988776655",
                device_type=DeviceType.MOBILE,
                device_model="iPhone 12",
                issue_description="Battery draining rapidly, shutting down at 30%",
                status=RepairStatus.DIAGNOSING,
                estimated_cost=3200.0,
                final_cost=None,
                technician_notes="Battery health at 71%. Testing charging IC prior to battery replacement."
            ),
            RepairTicket(
                ticket_number="REP-1004",
                customer_name="Suresh Verma",
                customer_phone="+919123456780",
                device_type=DeviceType.APPLIANCE,
                device_model="Havells Ceiling Fan",
                issue_description="Running very slow at speed 5",
                status=RepairStatus.RECEIVED,
                estimated_cost=350.0,
                final_cost=None,
                technician_notes="Initial intake done. Likely 2.5uF capacitor dry out."
            )
        ]
        db.add_all(tickets)
        db.commit()
        print("[SUCCESS] Database successfully seeded with categories, products, and repair tickets!")

    finally:
        if close_when_done:
            db.close()

if __name__ == "__main__":
    seed_database()
