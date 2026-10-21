import os
import logging
from contextlib import asynccontextmanager
from fastapi import FastAPI, Request, Response, Depends, Query, HTTPException, status
from fastapi.responses import PlainTextResponse, JSONResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from app.config import get_settings
from app.database import get_db, init_db
from app.seed_data import seed_database
from app.services.flow_handler import flow_handler
from app.api import router as api_router

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s"
)
logger = logging.getLogger("whatsapp_bot")
settings = get_settings()

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: ensure tables exist and seed default catalog if empty
    init_db()
    seed_database()
    logger.info("Application started. Database verified and ready.")
    yield
    logger.info("Application shutting down.")

app = FastAPI(
    title=f"{settings.STORE_NAME} - WhatsApp Bot & Store API",
    description="Official Meta WhatsApp Cloud API Bot & Unified E-Commerce Backend",
    version="2.0.0",
    lifespan=lifespan
)

# Enable CORS for website frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static files (product images, assets)
static_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "static")
if os.path.exists(static_dir):
    app.mount("/static", StaticFiles(directory=static_dir), name="static")

# Include website & store REST APIs
app.include_router(api_router)

@app.get("/admin", response_class=HTMLResponse)
@app.get("/dashboard", response_class=HTMLResponse)
def admin_dashboard():
    """Interactive visual dashboard for store counter & website inventory management."""
    template_path = os.path.join(os.path.dirname(__file__), "templates", "admin.html")
    if os.path.exists(template_path):
        with open(template_path, "r", encoding="utf-8") as f:
            return f.read()
    return "<h1>Admin Dashboard Template not found</h1>"

@app.get("/health")
def health_check():
    return {
        "status": "online",
        "store": settings.STORE_NAME,
        "api_version": settings.META_API_VERSION
    }

@app.get("/privacy", response_class=PlainTextResponse)
def privacy_policy():
    return f"""Privacy Policy for {settings.STORE_NAME} WhatsApp Assistant
Last updated: September 2026

1. Information We Collect:
We only process customer messages sent to our WhatsApp bot to answer inquiries regarding mobile devices, electric appliances, and repair job status.

2. How We Use Information:
Your phone number and messages are used solely to provide catalog browsing, reservation tokens, and repair updates. We do not sell or share your personal data with third parties.

3. Contact:
For any privacy concerns, contact {settings.STORE_NAME} at {settings.STORE_PHONE}.
"""

@app.get("/webhook")
def verify_webhook(
    hub_mode: str = Query(None, alias="hub.mode"),
    hub_verify_token: str = Query(None, alias="hub.verify_token"),
    hub_challenge: str = Query(None, alias="hub.challenge"),
):
    """
    Meta Webhook Verification Endpoint.
    When you configure your webhook URL in the Meta Developer Portal, Meta sends a GET
    request with hub.mode, hub.verify_token, and hub.challenge.
    """
    logger.info("Webhook verification check: mode=%s, token=%s", hub_mode, hub_verify_token)
    if hub_mode == "subscribe" and hub_verify_token == settings.VERIFY_TOKEN:
        logger.info("Webhook verification SUCCESS.")
        return PlainTextResponse(content=hub_challenge, status_code=200)

    logger.warning("Webhook verification FAILED. Token mismatch.")
    raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Verification token mismatch")

@app.post("/webhook")
async def receive_webhook(request: Request, db: Session = Depends(get_db)):
    """
    Meta Webhook Event Ingestion Endpoint.
    Receives incoming messages, delivery statuses, and button clicks from Meta.
    """
    try:
        body = await request.json()
    except Exception:
        return JSONResponse(content={"status": "invalid_json"}, status_code=400)

    logger.info("Inbound Webhook payload received: %s", body)

    # Validate that this is a WhatsApp Business Account message event
    if body.get("object") != "whatsapp_business_account":
        return JSONResponse(content={"status": "ignored_non_whatsapp"}, status_code=200)

    entries = body.get("entry", [])
    for entry in entries:
        changes = entry.get("changes", [])
        for change in changes:
            value = change.get("value", {})
            messages = value.get("messages", [])

            for message in messages:
                from_number = message.get("from")
                if not from_number:
                    continue

                try:
                    await flow_handler.handle_incoming(
                        db=db,
                        from_number=from_number,
                        message_data=message
                    )
                except Exception as e:
                    logger.error("Error processing message from %s: %s", from_number, e, exc_info=True)

    # Always return 200 OK immediately so Meta doesn't retry message delivery
    return JSONResponse(content={"status": "EVENT_RECEIVED"}, status_code=200)
