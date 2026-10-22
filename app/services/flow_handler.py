import random
import logging
from typing import Optional, Dict, Any, List
from datetime import datetime
from sqlalchemy.orm import Session

from app.config import get_settings
from app.models import Category, Product, RepairTicket, Reservation, CustomerSession, RepairStatus
from app.services.whatsapp_client import WhatsAppClient, whatsapp_client

logger = logging.getLogger("flow_handler")
settings = get_settings()

class FlowHandler:
    def __init__(self, client: Optional[WhatsAppClient] = None):
        self.client = client or whatsapp_client

    def get_or_create_session(self, db: Session, phone_number: str) -> CustomerSession:
        session = db.query(CustomerSession).filter(CustomerSession.phone_number == phone_number).first()
        if not session:
            session = CustomerSession(phone_number=phone_number, current_state="IDLE")
            db.add(session)
            db.commit()
            db.refresh(session)
        return session

    def update_session(self, db: Session, phone_number: str, state: str, context_data: Optional[str] = None):
        session = self.get_or_create_session(db, phone_number)
        session.current_state = state
        session.context_data = context_data
        session.last_interaction = datetime.utcnow()
        db.commit()

    async def handle_incoming(self, db: Session, from_number: str, message_data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Entrypoint for parsing WhatsApp webhook payloads:
        - text message
        - interactive button reply
        - interactive list reply
        """
        msg_type = message_data.get("type")
        session = self.get_or_create_session(db, from_number)

        # 1. Check for interactive button replies
        if msg_type == "interactive":
            interactive = message_data.get("interactive", {})
            itype = interactive.get("type")

            if itype == "button_reply":
                button_id = interactive.get("button_reply", {}).get("id", "")
                return await self.process_action(db, from_number, button_id)

            elif itype == "list_reply":
                row_id = interactive.get("list_reply", {}).get("id", "")
                return await self.process_action(db, from_number, row_id)

        # 2. Check for normal text message
        elif msg_type == "text":
            text = message_data.get("text", {}).get("body", "").strip()
            return await self.process_text(db, from_number, text, session)

        # Default fallback
        return await self.send_main_menu(from_number)

    async def process_text(self, db: Session, from_number: str, text: str, session: CustomerSession) -> Dict[str, Any]:
        normalized = text.lower()

        # Check for stateful waiting prompts first
        if session.current_state == "WAITING_REPAIR_TICKET":
            self.update_session(db, from_number, "IDLE")
            return await self.lookup_repair_ticket(db, from_number, text)

        if session.current_state == "WAITING_SEARCH_QUERY":
            self.update_session(db, from_number, "IDLE")
            return await self.search_products(db, from_number, text)

        # Standard navigation keywords
        if normalized in ["hi", "hello", "hey", "start", "menu", "help", "namaste", "hola"]:
            self.update_session(db, from_number, "IDLE")
            return await self.send_main_menu(from_number)

        if normalized in ["repair", "status", "job", "track"]:
            return await self.handle_repair_menu(db, from_number)

        if normalized in ["offers", "deals", "discount"]:
            return await self.show_featured_offers(db, from_number)

        if normalized in ["store", "location", "address", "timing", "hours"]:
            return await self.show_store_info(from_number)

        if normalized in ["search", "find"]:
            self.update_session(db, from_number, "WAITING_SEARCH_QUERY")
            return await self.client.send_text(
                from_number,
                "🔍 What product are you looking for?\n\n"
                "Type product name or brand (e.g., *Samsung, 65W charger, Mixer, Iron*):"
            )

        # Direct ticket search detection (e.g. user typed "REP-1001" or "1001")
        if text.upper().startswith("REP-") or (len(text) >= 3 and text.isdigit()):
            return await self.lookup_repair_ticket(db, from_number, text)

        # -------------------------------------------------------------
        # Website & Direct Model Enquiry Detection
        # (Triggered when customer clicks "Enquire on WhatsApp" on website)
        # -------------------------------------------------------------
        if any(k in normalized for k in ["enquire", "inquire", "interested in", "price of", "offer on", "how much for"]):
            extracted = text
            for trigger in ["enquire about:", "enquire about", "inquire about:", "inquire about", "interested in:", "interested in", "price of", "offer on"]:
                if trigger in normalized:
                    idx = normalized.find(trigger) + len(trigger)
                    extracted = text[idx:].strip()
                    break

            for sep in [".", "\n", "please", "kindly", "price", "is it"]:
                if sep in extracted.lower():
                    extracted = extracted[:extracted.lower().find(sep)].strip()

            clean_query = extracted.split("(")[0].strip() if "(" in extracted else extracted.strip()

            matched_prod = None
            if clean_query:
                matched_prod = db.query(Product).filter(Product.name.ilike(f"%{clean_query}%")).first()
                if not matched_prod:
                    words = clean_query.split()
                    if len(words) >= 2:
                        partial = f"{words[0]} {words[1]}"
                        matched_prod = db.query(Product).filter(Product.name.ilike(f"%{partial}%")).first()

            if matched_prod:
                self.update_session(db, from_number, "IDLE")
                return await self.handle_product_enquiry(db, from_number, matched_prod, text)

        # Fallback: treat unknown message as product search attempt, or offer menu
        results = db.query(Product).filter(
            (Product.name.ilike(f"%{text}%")) |
            (Product.brand.ilike(f"%{text}%")) |
            (Product.description.ilike(f"%{text}%"))
        ).limit(5).all()

        if results:
            return await self.display_search_results(from_number, text, results)

        # Unrecognized: Show welcome & main menu
        return await self.client.send_interactive_buttons(
            from_number,
            body_text=(
                f"👋 Welcome to *{settings.STORE_NAME}*!\n\n"
                "I didn't quite catch that. How can we assist you today?"
            ),
            buttons=[
                {"id": "btn_mobiles", "title": "📱 Mobiles & Acc."},
                {"id": "btn_appliances", "title": "⚡ Appliances"},
                {"id": "btn_repairs", "title": "🔧 Track Repair"}
            ],
            footer_text="Select an option below:"
        )

    async def process_action(self, db: Session, from_number: str, action_id: str) -> Dict[str, Any]:
        """Dispatch button clicks and list selections."""
        logger.info("Processing action: %s for %s", action_id, from_number)

        if action_id in ["btn_main_menu", "menu_home"]:
            self.update_session(db, from_number, "IDLE")
            return await self.send_main_menu(from_number)

        # Mobile department
        if action_id == "btn_mobiles":
            return await self.show_categories_list(db, from_number, category_type="mobile")

        # Appliance department
        if action_id == "btn_appliances":
            return await self.show_categories_list(db, from_number, category_type="appliance")

        # Category selected: e.g. "cat_smartphones" or "cat_1"
        if action_id.startswith("cat_"):
            cat_id_or_slug = action_id[4:]
            return await self.show_products_in_category(db, from_number, cat_id_or_slug)

        # Product selected: e.g. "prod_2"
        if action_id.startswith("prod_"):
            prod_id = int(action_id[5:])
            return await self.show_product_detail(db, from_number, prod_id)

        # Product reserve request: e.g. "res_2"
        if action_id.startswith("res_"):
            prod_id = int(action_id[4:])
            return await self.reserve_product(db, from_number, prod_id)

        # Repair tracking
        if action_id == "btn_repairs":
            return await self.handle_repair_menu(db, from_number)

        # Search prompt
        if action_id == "btn_search":
            self.update_session(db, from_number, "WAITING_SEARCH_QUERY")
            return await self.client.send_text(
                from_number,
                "🔍 What are you searching for?\n\nType the product name, brand, or model:"
            )

        # Deals / Offers
        if action_id == "btn_offers":
            return await self.show_featured_offers(db, from_number)

        # Store Info / Location
        if action_id == "btn_store_info":
            return await self.show_store_info(from_number)

        # Staff Connect
        if action_id == "btn_staff":
            return await self.show_staff_contact(from_number)

        # Default fallback
        return await self.send_main_menu(from_number)

    # -------------------------------------------------------------
    # Menu & Screen Renderers
    # -------------------------------------------------------------

    async def send_main_menu(self, to: str) -> Dict[str, Any]:
        """Display store greeting and interactive navigation."""
        welcome_text = (
            f"🏬 *Welcome to {settings.STORE_NAME}!*\n"
            f"_{settings.STORE_TAGLINE}_\n\n"
            "✨ *How may we help you today?*\n"
            "• 📱 Latest Smartphones & Accessories\n"
            "• ⚡ Home & Kitchen Appliances\n"
            "• 🔧 Check Device Repair Status\n"
            "• 🏷️ Special Deals & Discounts\n"
            "• 📍 Store Location & Working Hours\n"
            "• 💬 Connect with Counter Staff"
        )

        sections = [
            {
                "title": "Shop & Browse",
                "rows": [
                    {"id": "btn_mobiles", "title": "📱 Mobiles & Accessories", "description": "Phones, chargers, earbuds & covers"},
                    {"id": "btn_appliances", "title": "⚡ Electric Appliances", "description": "Mixers, irons, fans, kettles & TVs"},
                    {"id": "btn_offers", "title": "🏷️ Today's Best Deals", "description": "Special discounts & offers"},
                    {"id": "btn_search", "title": "🔍 Search Inventory", "description": "Find by brand or product name"}
                ]
            },
            {
                "title": "Customer Support",
                "rows": [
                    {"id": "btn_repairs", "title": "🔧 Track Repair Status", "description": "Check job sheet or token status"},
                    {"id": "btn_store_info", "title": "📍 Store Info & Timings", "description": "Address, map & hours"},
                    {"id": "btn_staff", "title": "💬 Talk to Staff", "description": "Call or chat with sales counter"}
                ]
            }
        ]

        return await self.client.send_interactive_list(
            to=to,
            body_text=welcome_text,
            button_text="📌 Open Store Menu",
            sections=sections,
            header_text=f"👋 Hello!",
            footer_text="Tap 'Open Store Menu' to explore"
        )

    async def show_categories_list(self, db: Session, to: str, category_type: str) -> Dict[str, Any]:
        """Show categories for either mobile or electric appliances."""
        categories = db.query(Category).filter(Category.type == category_type).all()
        if not categories:
            categories = db.query(Category).all()

        type_title = "Mobiles & Accessories" if category_type == "mobile" else "Home & Electric Appliances"
        rows = []
        for cat in categories:
            rows.append({
                "id": f"cat_{cat.id}",
                "title": f"{cat.icon} {cat.name}"[:24],
                "description": cat.description or f"Browse {cat.name}"
            })

        sections = [{"title": type_title[:24], "rows": rows}]

        return await self.client.send_interactive_list(
            to=to,
            header_text=f"📦 {type_title}",
            body_text=f"Select a category below to browse our current in-store collection:",
            button_text="View Categories",
            sections=sections,
            footer_text="Select an option to view products"
        )

    async def show_products_in_category(self, db: Session, to: str, cat_identifier: str) -> Dict[str, Any]:
        """Display list of products in a category."""
        if cat_identifier.isdigit():
            category = db.query(Category).filter(Category.id == int(cat_identifier)).first()
        else:
            category = db.query(Category).filter(Category.slug == cat_identifier).first()

        if not category:
            return await self.client.send_text(to, "❌ Category not found. Sending you back to main menu...")

        total_count = db.query(Product).filter(Product.category_id == category.id).count()
        products = db.query(Product).filter(Product.category_id == category.id).order_by(Product.is_featured.desc(), Product.id.asc()).limit(10).all()

        if not products:
            return await self.client.send_interactive_buttons(
                to=to,
                body_text=f"ℹ️ No items currently listed under *{category.name}*.",
                buttons=[
                    {"id": "btn_mobiles", "title": "📱 Mobiles"},
                    {"id": "btn_appliances", "title": "⚡ Appliances"},
                    {"id": "btn_main_menu", "title": "🔙 Main Menu"}
                ]
            )

        rows = []
        for p in products:
            stock_badge = "✅" if p.in_stock else "❌ Sold Out"
            rows.append({
                "id": f"prod_{p.id}",
                "title": f"{p.name}"[:24],
                "description": f"₹{int(p.price):,} | {p.brand} | {stock_badge}"[:72]
            })

        sections = [{"title": category.name[:24], "rows": rows}]
        footer_msg = f"Showing 10 of {total_count}. Type any model to search!" if total_count > 10 else f"{settings.STORE_NAME}"

        return await self.client.send_interactive_list(
            to=to,
            header_text=f"{category.icon} {category.name}",
            body_text=f"Here are top models in *{category.name}* ({total_count} total). Tap below to view full specs & reserve:",
            button_text="Select Product",
            sections=sections,
            footer_text=footer_msg[:60]
        )

    async def handle_product_enquiry(self, db: Session, to: str, product: Product, original_text: str = "") -> Dict[str, Any]:
        """Respond to website model enquiries with detailed specs, offer pricing, and instant assistance."""
        mrp = product.mrp or int(product.price * 1.15)
        savings = int(mrp - product.price) if mrp > product.price else 0
        discount_pct = int((savings / mrp) * 100) if savings > 0 else 0

        stock_badge = "🟢 In Stock at Vadodara Store (Ready for Pickup)" if product.in_stock else "⏳ High Demand - Order Allocation Available"

        specs_summary = ""
        if product.specifications:
            specs_summary = f"\n📋 *Key Specifications:*\n{product.specifications}\n"
        elif product.description:
            specs_summary = f"\n📋 *Highlights:*\n• {product.description}\n"

        pricing_text = f"🔥 *Rishabh Special Offer Price:* *₹{int(product.price):,}*"
        if savings > 0:
            pricing_text += f"\n🏷️ *Official MRP:* ~₹{int(mrp):,}~ *(Save ₹{savings:,} • {discount_pct}% OFF)*"

        body = (
            f"👋 *Namaste! Welcome to {settings.STORE_NAME}* (Manjalpur, Vadodara)\n\n"
            f"Thank you for enquiring about:\n"
            f"📱 *{product.name}*\n"
            f"🏷️ Brand: *{product.brand}*\n\n"
            f"{pricing_text}\n"
            f"📦 *Store Stock:* {stock_badge}\n"
            f"🛡️ *Warranty:* {product.warranty_info or '1 Year Official Brand Warranty'}\n"
            f"{specs_summary}\n"
            f"🎁 *Complimentary In-Store Privileges:*\n"
            f"• ✅ 100% Brand-Sealed Box with Serial Audit\n"
            f"• ✅ Free 9H Screen Guard & Doorstep Data Migration\n"
            f"• ✅ Best Exchange Value for your old smartphone\n"
            f"• ✅ 0% Downpayment / Cardless EMI Available\n\n"
            f"📍 *Store:* {settings.STORE_ADDRESS}\n"
            f"⏰ *Hours:* {settings.STORE_HOURS}\n\n"
            f"💡 _Tap *Hold for 24h* to lock this price & reserve the unit, or tap *Talk to Specialist* for further questions!_"
        )

        buttons = [
            {"id": f"res_{product.id}", "title": "📦 Hold for 24h"},
            {"id": "btn_staff", "title": "👨‍💼 Talk to Specialist"},
            {"id": "btn_offers", "title": "🏷️ Other Deals"}
        ]

        return await self.client.send_interactive_buttons(
            to=to,
            header_text=f"Enquiry: {product.brand}",
            body_text=body,
            buttons=buttons,
            footer_text=settings.STORE_NAME
        )

    async def show_product_detail(self, db: Session, to: str, prod_id: int) -> Dict[str, Any]:
        """Display detailed card of a product with reservation action."""
        product = db.query(Product).filter(Product.id == prod_id).first()
        if not product:
            return await self.client.send_text(to, "❌ Product not found.")

        stock_text = "🟢 In Stock (Available for Store Pickup)" if product.in_stock else "🔴 Temporarily Out of Stock"
        discount_text = ""
        if product.mrp and product.mrp > product.price:
            savings = int(product.mrp - product.price)
            percent = int((savings / product.mrp) * 100)
            discount_text = f"\n🏷️ *MRP:* ~₹{int(product.mrp):,}~  👉 *Deal:* ₹{int(product.price):,} *(Save {percent}%)*"
        else:
            discount_text = f"\n💰 *Store Price:* ₹{int(product.price):,}"

        specs_text = f"\n📋 *Specifications:*\n{product.specifications}" if product.specifications else ""

        body = (
            f"📱 *{product.name}*\n"
            f"🏢 Brand: *{product.brand}*\n"
            f"{discount_text}\n"
            f"📦 Stock: {stock_text}\n"
            f"🛡️ Warranty: {product.warranty_info}\n"
            f"{specs_text}\n\n"
            "💡 _Want to hold this item? Tap 'Hold for 24 Hours' below to reserve it at the store!_"
        )

        buttons = []
        if product.in_stock:
            buttons.append({"id": f"res_{product.id}", "title": "📦 Hold for 24h"})
        buttons.append({"id": "btn_offers", "title": "🏷️ Other Deals"})
        buttons.append({"id": "btn_main_menu", "title": "🔙 Main Menu"})

        return await self.client.send_interactive_buttons(
            to=to,
            header_text="Product Details",
            body_text=body,
            buttons=buttons,
            footer_text=settings.STORE_NAME
        )

    async def reserve_product(self, db: Session, to: str, prod_id: int) -> Dict[str, Any]:
        """Reserve a product for 24 hours for in-store pickup."""
        product = db.query(Product).filter(Product.id == prod_id).first()
        if not product:
            return await self.client.send_text(to, "❌ Product not found.")

        # Generate unique reservation token
        code = f"RES-{random.randint(1000, 9999)}"
        reservation = Reservation(
            reservation_code=code,
            customer_phone=to,
            product_id=prod_id,
            status="active"
        )
        db.add(reservation)
        db.commit()

        body = (
            f"🎉 *Reservation Confirmed!*\n\n"
            f"📌 *Reservation Code:* `{code}`\n"
            f"📦 *Item:* {product.name}\n"
            f"💰 *Pay at Counter:* ₹{int(product.price):,}\n\n"
            "⏱️ We will hold this item for you for *24 hours*.\n\n"
            f"📍 *Pickup Location:*\n{settings.STORE_NAME}\n{settings.STORE_ADDRESS}\n\n"
            f"🕒 *Timings:* {settings.STORE_HOURS}\n"
            f"📞 *Helpdesk:* {settings.STORE_PHONE}"
        )

        return await self.client.send_interactive_buttons(
            to=to,
            body_text=body,
            buttons=[
                {"id": "btn_store_info", "title": "📍 View Store Map"},
                {"id": "btn_main_menu", "title": "🔙 Main Menu"}
            ]
        )

    # -------------------------------------------------------------
    # Repair Tracking Flow
    # -------------------------------------------------------------

    async def handle_repair_menu(self, db: Session, to: str) -> Dict[str, Any]:
        """Check if customer has open tickets or ask for ticket number."""
        # Sanitize phone to check for existing customer tickets
        clean_phone = to.replace("+", "").replace(" ", "").replace("-", "")
        tickets = db.query(RepairTicket).filter(
            (RepairTicket.customer_phone.ilike(f"%{clean_phone[-10:]}%"))
        ).all()

        if tickets:
            ticket_summaries = []
            for t in tickets:
                ticket_summaries.append(self._format_ticket_card(t))
            body = (
                f"🔧 *Found {len(tickets)} Repair Record(s) for your number:*\n\n" +
                "\n\n---\n\n".join(ticket_summaries)
            )
            return await self.client.send_interactive_buttons(
                to=to,
                body_text=body,
                buttons=[
                    {"id": "btn_main_menu", "title": "🔙 Main Menu"},
                    {"id": "btn_staff", "title": "💬 Talk to Tech"}
                ]
            )

        # No tickets found automatically -> Ask for ticket number
        self.update_session(db, to, "WAITING_REPAIR_TICKET")
        return await self.client.send_text(
            to=to,
            text=(
                "🔧 *Track Repair Job Sheet*\n\n"
                "Please enter your **Job Sheet Number** or **Token Number** (e.g., `REP-1001` or `1001`):"
            )
        )

    async def lookup_repair_ticket(self, db: Session, to: str, query: str) -> Dict[str, Any]:
        """Look up a ticket by ID/ticket_number."""
        clean_query = query.strip().upper()
        if not clean_query.startswith("REP-") and clean_query.isdigit():
            clean_query = f"REP-{clean_query}"

        ticket = db.query(RepairTicket).filter(
            (RepairTicket.ticket_number == clean_query) |
            (RepairTicket.ticket_number == query.strip().upper())
        ).first()

        if not ticket:
            return await self.client.send_interactive_buttons(
                to=to,
                body_text=(
                    f"❌ No repair job sheet found matching *'{query}'*.\n\n"
                    "Please double check the receipt given at the counter or contact our service desk."
                ),
                buttons=[
                    {"id": "btn_repairs", "title": "🔄 Try Again"},
                    {"id": "btn_staff", "title": "💬 Call Support"},
                    {"id": "btn_main_menu", "title": "🔙 Main Menu"}
                ]
            )

        card_text = self._format_ticket_card(ticket)
        return await self.client.send_interactive_buttons(
            to=to,
            body_text=card_text,
            buttons=[
                {"id": "btn_store_info", "title": "📍 Store Pickup Info"},
                {"id": "btn_staff", "title": "💬 Talk to Technician"},
                {"id": "btn_main_menu", "title": "🔙 Main Menu"}
            ]
        )

    def _format_ticket_card(self, t: RepairTicket) -> str:
        """Render a formatted repair progress badge."""
        status_map = {
            RepairStatus.RECEIVED: ("📥 Received", "Device safely checked into our repair lab."),
            RepairStatus.DIAGNOSING: ("🔍 Diagnosing", "Our technician is inspecting the fault."),
            RepairStatus.WAITING_PARTS: ("⏳ Waiting Parts", "Original replacement component ordered."),
            RepairStatus.IN_REPAIR: ("🛠️ In Repair", "Work is currently in progress on your device."),
            RepairStatus.READY_FOR_PICKUP: ("✅ Ready for Pickup!", "Repairs completed and quality checked! Ready at store counter."),
            RepairStatus.DELIVERED: ("📦 Delivered", "Handed over to customer."),
            RepairStatus.CANCELLED: ("❌ Cancelled", "Repair cancelled or returned unrepaired.")
        }

        badge, desc = status_map.get(t.status, ("⚙️ In Progress", "Under review"))

        cost_text = ""
        if t.final_cost:
            cost_text = f"\n💰 *Final Bill:* ₹{int(t.final_cost):,}"
        elif t.estimated_cost:
            cost_text = f"\n💰 *Estimated Cost:* ₹{int(t.estimated_cost):,}"

        notes = f"\n📝 *Notes:* _{t.technician_notes}_" if t.technician_notes else ""

        # Visual progress bar
        progress_tracker = (
            "Status: " + badge + "\n" +
            ("🟢" if t.status in [RepairStatus.RECEIVED, RepairStatus.DIAGNOSING, RepairStatus.WAITING_PARTS, RepairStatus.IN_REPAIR, RepairStatus.READY_FOR_PICKUP, RepairStatus.DELIVERED] else "⚪") +
            "───" +
            ("🟢" if t.status in [RepairStatus.DIAGNOSING, RepairStatus.WAITING_PARTS, RepairStatus.IN_REPAIR, RepairStatus.READY_FOR_PICKUP, RepairStatus.DELIVERED] else "⚪") +
            "───" +
            ("🟢" if t.status in [RepairStatus.IN_REPAIR, RepairStatus.READY_FOR_PICKUP, RepairStatus.DELIVERED] else "⚪") +
            "───" +
            ("🟢" if t.status in [RepairStatus.READY_FOR_PICKUP, RepairStatus.DELIVERED] else "⚪")
        )

        return (
            f"🔧 *Job Sheet: {t.ticket_number}*\n"
            f"📱 *Device:* {t.device_model}\n"
            f"⚠️ *Reported Issue:* {t.issue_description}\n"
            f"{progress_tracker}\n"
            f"ℹ️ {desc}"
            f"{cost_text}"
            f"{notes}"
        )

    # -------------------------------------------------------------
    # Offers, Search & Store Info
    # -------------------------------------------------------------

    async def show_featured_offers(self, db: Session, to: str) -> Dict[str, Any]:
        """Display today's hot featured deals."""
        deals = db.query(Product).filter(Product.is_featured == True).limit(6).all()
        if not deals:
            deals = db.query(Product).limit(5).all()

        deal_items = []
        for d in deals:
            mrp_part = f"~₹{int(d.mrp):,}~ " if d.mrp else ""
            deal_items.append(f"🔥 *{d.name}*\n   {mrp_part}👉 *₹{int(d.price):,}* (Code: `prod_{d.id}`)")

        body = (
            "🏷️ *TODAY'S SPECIAL STORE OFFERS* 🏷️\n"
            "Exclusive in-store discounts available this week:\n\n" +
            "\n\n".join(deal_items) +
            "\n\n_Reply with the product name or click below to browse!_"
        )

        return await self.client.send_interactive_buttons(
            to=to,
            body_text=body,
            buttons=[
                {"id": "btn_mobiles", "title": "📱 Mobiles"},
                {"id": "btn_appliances", "title": "⚡ Appliances"},
                {"id": "btn_main_menu", "title": "🔙 Main Menu"}
            ]
        )

    async def search_products(self, db: Session, to: str, query: str) -> Dict[str, Any]:
        """Perform keyword search across name, brand, specs, description."""
        results = db.query(Product).filter(
            (Product.name.ilike(f"%{query}%")) |
            (Product.brand.ilike(f"%{query}%")) |
            (Product.description.ilike(f"%{query}%"))
        ).limit(10).all()

        return await self.display_search_results(to, query, results)

    async def display_search_results(self, to: str, query: str, results: List[Product]) -> Dict[str, Any]:
        if not results:
            return await self.client.send_interactive_buttons(
                to=to,
                body_text=f"🔍 No products found matching *'{query}'*.\n\nTry searching with a broader word (e.g. *Samsung, Charger, Fan, Iron*).",
                buttons=[
                    {"id": "btn_search", "title": "🔍 Search Again"},
                    {"id": "btn_main_menu", "title": "🔙 Main Menu"}
                ]
            )

        rows = []
        for p in results:
            rows.append({
                "id": f"prod_{p.id}",
                "title": p.name[:24],
                "description": f"₹{int(p.price):,} | {p.brand}"[:72]
            })

        sections = [{"title": f"Results for '{query}'"[:24], "rows": rows}]

        return await self.client.send_interactive_list(
            to=to,
            header_text=f"Search Results",
            body_text=f"Found {len(results)} matching item(s) for *'{query}'*:",
            button_text="View Items",
            sections=sections,
            footer_text=settings.STORE_NAME
        )

    async def show_store_info(self, to: str) -> Dict[str, Any]:
        """Send store hours, address, and Google Maps info."""
        info_text = (
            f"📍 *{settings.STORE_NAME}*\n"
            f"_{settings.STORE_TAGLINE}_\n\n"
            f"🏢 *Address:*\n{settings.STORE_ADDRESS}\n\n"
            f"🗺️ *Google Maps Pin:*\n{settings.STORE_MAP_LINK}\n\n"
            f"🕒 *Business Hours:*\n{settings.STORE_HOURS}\n\n"
            f"📞 *Call / WhatsApp:* {settings.STORE_PHONE} / 0265-2644678\n"
            f"💳 *Payments Accepted:* Cash, UPI ({settings.STORE_UPI_ID}), Cards, Bajaj Finserv EMI"
        )

        return await self.client.send_interactive_buttons(
            to=to,
            body_text=info_text,
            buttons=[
                {"id": "btn_mobiles", "title": "📱 Browse Store"},
                {"id": "btn_repairs", "title": "🔧 Track Repair"},
                {"id": "btn_main_menu", "title": "🔙 Main Menu"}
            ]
        )

    async def show_staff_contact(self, to: str) -> Dict[str, Any]:
        """Provide direct phone and counter staff contact options."""
        text = (
            f"👨‍💼 *Talk to Pranavbhai & Store Specialists*\n\n"
            f"For immediate assistance, custom pricing, smartphone exchange value, or repair consultations:\n\n"
            f"📞 *Call Direct:* {settings.STORE_PHONE} / 0265-2644678\n"
            f"💬 *WhatsApp Desk:* {settings.STORE_PHONE}\n"
            f"🏢 *Address:* {settings.STORE_ADDRESS}\n"
            f"🕒 *Hours:* {settings.STORE_HOURS}\n\n"
            "Feel free to reply right here with any questions, or tap 'Main Menu' below!"
        )
        return await self.client.send_interactive_buttons(
            to=to,
            body_text=text,
            buttons=[
                {"id": "btn_main_menu", "title": "🔙 Main Menu"}
            ]
        )

flow_handler = FlowHandler()
