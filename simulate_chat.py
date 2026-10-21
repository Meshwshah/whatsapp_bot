import asyncio
import sys

if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

from app.database import init_db, SessionLocal
from app.seed_data import seed_database
from app.services.whatsapp_client import WhatsAppClient
from app.services.flow_handler import FlowHandler

class TerminalWhatsAppClient(WhatsAppClient):
    """
    Subclass of WhatsAppClient that prints formatted messages to terminal
    instead of calling Meta's remote API.
    """
    async def send_text(self, to: str, text: str, preview_url: bool = False):
        print(f"\n🤖 [BOT TO {to}]:")
        print(f"{text}\n")
        return {"status": "simulated_sent"}

    async def send_interactive_buttons(self, to: str, body_text: str, buttons: list, header_text: str = None, footer_text: str = None):
        print(f"\n🤖 [BOT TO {to}]:")
        if header_text:
            print(f"--- {header_text} ---")
        print(f"{body_text}")
        if footer_text:
            print(f"_{footer_text}_")
        print("\n🔘 [INTERACTIVE BUTTONS]:")
        for idx, btn in enumerate(buttons, 1):
            print(f"  [{idx}] {btn['title']}  (action_id: {btn['id']})")
        print()
        return {"status": "simulated_sent"}

    async def send_interactive_list(self, to: str, body_text: str, button_text: str, sections: list, header_text: str = None, footer_text: str = None):
        print(f"\n🤖 [BOT TO {to}]:")
        if header_text:
            print(f"--- {header_text} ---")
        print(f"{body_text}\n")
        print(f"📋 [LIST MENU: '{button_text}']:")
        counter = 1
        for sec in sections:
            print(f"  == {sec.get('title', 'Category')} ==")
            for row in sec.get("rows", []):
                desc = f" - {row['description']}" if row.get('description') else ""
                print(f"    [{counter}] {row['title']}{desc} (id: {row['id']})")
                counter += 1
        if footer_text:
            print(f"_{footer_text}_")
        print()
        return {"status": "simulated_sent"}

async def run_simulator():
    init_db()
    seed_database()

    sim_client = TerminalWhatsAppClient()
    handler = FlowHandler(client=sim_client)
    db = SessionLocal()

    test_phone = "+919876543210"

    print("=" * 65)
    print("  ELECTROMOBILE STORE - WHATSAPP BOT LOCAL SIMULATOR")
    print(f"  Simulating user phone: {test_phone}")
    print("=" * 65)
    print("Commands:")
    print(" - Type any message (e.g. 'hi', 'offers', 'repair', 'REP-1001')")
    print(" - Type an action id or button name (e.g. 'btn_mobiles', 'res_1')")
    print(" - Type 'quit' or 'exit' to exit.")
    print("-" * 65)

    # Trigger initial greeting
    await handler.send_main_menu(test_phone)

    try:
        while True:
            try:
                user_input = input("You > ").strip()
            except (EOFError, KeyboardInterrupt):
                break

            if not user_input:
                continue

            if user_input.lower() in ["quit", "exit", "q"]:
                print("Exiting simulator. Goodbye!")
                break

            # Check if user typed an action ID directly (e.g. btn_mobiles or cat_smartphones or res_1)
            if user_input.startswith("btn_") or user_input.startswith("cat_") or user_input.startswith("prod_") or user_input.startswith("res_"):
                await handler.process_action(db, test_phone, user_input)
            else:
                # Normal text message payload
                msg_payload = {
                    "type": "text",
                    "text": {"body": user_input}
                }
                await handler.handle_incoming(db, test_phone, msg_payload)

    finally:
        db.close()

if __name__ == "__main__":
    asyncio.run(run_simulator())
