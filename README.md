# 📱 WhatsApp Bot for Mobile & Electric Appliance Shop

An official **Meta WhatsApp Cloud API** chatbot built with **Python (FastAPI)** and **SQLite**, designed specifically for electronics, mobile phone, and home electric appliance retailers and repair centers.

---

## ✨ Key Features

1. **📦 Product Catalog & Category Browsing:**
   - Interactive WhatsApp List menus for **Smartphones, Accessories, Kitchen Appliances, Fans, Heating & Geysers**.
   - View detailed product cards with Specifications, MRP vs Shop Price, Savings %, and Warranty information.

2. **🏷️ Hold & Reserve for In-Store Pickup:**
   - Customers can tap **"Hold for 24 Hours"** on any in-stock product.
   - Generates a unique reservation voucher code (`RES-XXXX`) to show at the store counter.

3. **🔧 Real-Time Repair Job Tracker:**
   - Customers can check repair status by entering their Job Sheet / Token # (e.g. `REP-1001`).
   - Automatically detects and lists open repair tickets matching the customer's phone number!
   - Shows milestone progress: `Received ➔ Diagnosing ➔ In Repair ➔ Ready for Pickup ✅`.
   - Displays estimated vs final bill and technician diagnostic notes.

4. **🔍 Instant Inventory Search:**
   - Customers can type product names or brands (e.g., *"Samsung"*, *"65W charger"*, *"Mixer"*, *"Iron"*).

5. **📍 Store Info, Hours & Live Counter Connect:**
   - One-click Google Maps pin, operating hours, accepted payments (UPI, Cards, Bajaj Finserv EMI).
   - Direct button to chat or call store counter staff.

6. **💻 Interactive Local Terminal Simulator:**
   - Test and chat with the bot engine in your terminal without needing Meta developer keys or ngrok.

---

## 🚀 Quick Start (Local Simulator)

You don't need a Meta account to test the conversation flows!

```powershell
# 1. Install dependencies
pip install -r requirements.txt

# 2. Seed database with default products and repair tickets
python manage.py seed

# 3. Launch interactive terminal simulator
python simulate_chat.py
```

---

## 🛠️ Management CLI (`manage.py`)

Manage your store inventory and repair jobs right from the command line:

```powershell
# List all products and stock
python manage.py list-products

# List all repair jobs
python manage.py list-repairs

# Update a repair ticket status and final bill
python manage.py update-repair --ticket REP-1001 --status ready_for_pickup --cost 2400 --notes "Screen replacement complete"

# Register a new customer repair job
python manage.py create-repair --name "Vikram Singh" --phone "+919876500000" --device "OnePlus Nord" --issue "Battery replacement" --cost 1800
```

---

## 🌐 Connecting to Official Meta WhatsApp Cloud API

When you are ready to connect to a live WhatsApp Business number:

### Step 1: Create Meta Developer App
1. Go to [Meta for Developers](https://developers.facebook.com/) and log in.
2. Click **My Apps** > **Create App**.
3. Select **Other** > **Business** as the app type.
4. Add the **WhatsApp** product to your app.

### Step 2: Configure `.env`
Open `.env` in this directory and populate:
```env
META_API_VERSION=v20.0
WHATSAPP_TOKEN=your_permanent_or_temporary_token_from_meta_dashboard
PHONE_NUMBER_ID=your_phone_number_id_from_meta_dashboard
VERIFY_TOKEN=my_secure_store_webhook_token_123

STORE_NAME=ElectroMobile Store & Repairs
STORE_PHONE=+91 98765 43210
STORE_ADDRESS=Shop #12, Tech Square Market, Main City Road
STORE_MAP_LINK=https://maps.google.com/?q=Tech+Square+Market
STORE_HOURS=Mon - Sat: 10:00 AM - 9:30 PM | Sunday: 11:00 AM - 6:00 PM
STORE_UPI_ID=electromobile@upi
```

### Step 3: Start the Bot Server
```powershell
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

### Step 4: Expose Local Port to Public URL
For local development, use [ngrok](https://ngrok.com/):
```powershell
ngrok http 8000
```
Copy your forwarding HTTPS URL (e.g. `https://xyz-123.ngrok-free.app`).

### Step 5: Configure Webhook in Meta Dashboard
1. In the Meta App Dashboard, navigate to **WhatsApp** > **Configuration**.
2. Click **Edit** next to **Webhook**:
   - **Callback URL:** `https://xyz-123.ngrok-free.app/webhook`
   - **Verify Token:** `my_secure_store_webhook_token_123` (must match `VERIFY_TOKEN` in `.env`)
3. Click **Verify and Save**.
4. In Webhook fields, subscribe to **`messages`**.
5. Send a WhatsApp message (like *"Hi"* or *"Repair"*) from your registered test phone number to the test business number!

---

## 📂 Project Structure

```
whatsapp_bot/
├── app/
│   ├── __init__.py
│   ├── config.py              # Environment and store configuration
│   ├── database.py            # SQLite connection & session maker
│   ├── models.py              # SQLAlchemy ORM models (Product, Category, RepairTicket, etc.)
│   ├── main.py                # FastAPI app with Meta Webhook GET/POST endpoints
│   ├── seed_data.py           # Catalog & sample repair tickets
│   └── services/
│       ├── __init__.py
│       ├── whatsapp_client.py # Meta Cloud API client (interactive buttons, lists, text)
│       └── flow_handler.py    # Conversation state machine and business logic
├── tests/
│   ├── __init__.py
│   └── test_flows.py          # Automated test suite (11 test cases)
├── manage.py                  # CLI to seed, list products, and update repair jobs
├── simulate_chat.py           # Local interactive terminal chat simulator
├── requirements.txt           # Python dependencies
├── .env.example               # Template environment variables
├── .env                       # Local active environment configuration
└── store.db                   # SQLite database
```

---

## 🧪 Running Automated Tests

Run the full test suite with `pytest`:
```powershell
python -m pytest -v
```
