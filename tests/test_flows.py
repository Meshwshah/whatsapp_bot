import pytest
from unittest.mock import AsyncMock
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.database import Base, get_db
from app.models import Category, Product, RepairTicket, RepairStatus, DeviceType
from app.seed_data import seed_database
from app.services.whatsapp_client import WhatsAppClient
from app.services.flow_handler import FlowHandler
from app.main import app

# Test database in memory
SQLALCHEMY_TEST_DATABASE_URL = "sqlite:///:memory:"
test_engine = create_engine(SQLALCHEMY_TEST_DATABASE_URL, connect_args={"check_same_thread": False})
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=test_engine)

@pytest.fixture(scope="session", autouse=True)
def setup_test_db():
    Base.metadata.create_all(bind=test_engine)
    db = TestingSessionLocal()
    seed_database(db)
    db.close()
    yield
    Base.metadata.drop_all(bind=test_engine)

@pytest.fixture
def db_session():
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()

@pytest.fixture
def mock_client():
    client = WhatsAppClient()
    client.send_text = AsyncMock(return_value={"status": "sent"})
    client.send_interactive_buttons = AsyncMock(return_value={"status": "sent"})
    client.send_interactive_list = AsyncMock(return_value={"status": "sent"})
    client.send_location = AsyncMock(return_value={"status": "sent"})
    return client

@pytest.fixture
def handler(mock_client):
    return FlowHandler(client=mock_client)

# -------------------------------------------------------------
# Webhook Endpoint Tests
# -------------------------------------------------------------

def test_health_endpoint():
    client = TestClient(app)
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "online"

def test_webhook_verification_success():
    client = TestClient(app)
    params = {
        "hub.mode": "subscribe",
        "hub.verify_token": "my_secure_store_webhook_token_123",
        "hub.challenge": "1158201244"
    }
    response = client.get("/webhook", params=params)
    assert response.status_code == 200
    assert response.text == "1158201244"

def test_webhook_verification_invalid_token():
    client = TestClient(app)
    params = {
        "hub.mode": "subscribe",
        "hub.verify_token": "wrong_token",
        "hub.challenge": "1158201244"
    }
    response = client.get("/webhook", params=params)
    assert response.status_code == 403

def test_webhook_post_event():
    client = TestClient(app)
    payload = {
        "object": "whatsapp_business_account",
        "entry": [
            {
                "id": "1000",
                "changes": [
                    {
                        "value": {
                            "messaging_product": "whatsapp",
                            "messages": [
                                {
                                    "from": "919876543210",
                                    "id": "wamid.123",
                                    "type": "text",
                                    "text": {"body": "hi"}
                                }
                            ]
                        }
                    }
                ]
            }
        ]
    }
    response = client.post("/webhook", json=payload)
    assert response.status_code == 200
    assert response.json() == {"status": "EVENT_RECEIVED"}

# -------------------------------------------------------------
# Conversation Flow Tests
# -------------------------------------------------------------

@pytest.mark.asyncio
async def test_greeting_triggers_main_menu(db_session, handler, mock_client):
    phone = "+919999988888"
    msg = {"type": "text", "text": {"body": "hello"}}
    await handler.handle_incoming(db_session, phone, msg)

    # Main menu sends interactive list
    assert mock_client.send_interactive_list.called
    call_args = mock_client.send_interactive_list.call_args[1]
    assert call_args["to"] == phone
    assert "ElectroMobile" in call_args["body_text"] or "Welcome" in call_args["body_text"]

@pytest.mark.asyncio
async def test_browse_mobile_categories(db_session, handler, mock_client):
    phone = "+919999988888"
    await handler.process_action(db_session, phone, "btn_mobiles")

    assert mock_client.send_interactive_list.called
    call_args = mock_client.send_interactive_list.call_args[1]
    sections = call_args["sections"]
    # Check that categories like Smartphones are in rows
    row_titles = [row["title"] for sec in sections for row in sec["rows"]]
    assert any("Smartphone" in t for t in row_titles)

@pytest.mark.asyncio
async def test_browse_appliances_categories(db_session, handler, mock_client):
    phone = "+919999988888"
    await handler.process_action(db_session, phone, "btn_appliances")

    assert mock_client.send_interactive_list.called
    call_args = mock_client.send_interactive_list.call_args[1]
    sections = call_args["sections"]
    row_titles = [row["title"] for sec in sections for row in sec["rows"]]
    assert any("Kitchen" in t or "Fan" in t for t in row_titles)

@pytest.mark.asyncio
async def test_product_detail_and_reservation(db_session, handler, mock_client):
    phone = "+919999988888"
    product = db_session.query(Product).first()
    assert product is not None

    # View product detail
    await handler.show_product_detail(db_session, phone, product.id)
    assert mock_client.send_interactive_buttons.called
    call_kwargs = mock_client.send_interactive_buttons.call_args[1]
    assert product.name in call_kwargs["body_text"]

    # Reserve product
    mock_client.send_interactive_buttons.reset_mock()
    await handler.reserve_product(db_session, phone, product.id)
    assert mock_client.send_interactive_buttons.called
    res_kwargs = mock_client.send_interactive_buttons.call_args[1]
    assert "Reservation Confirmed" in res_kwargs["body_text"]
    assert "RES-" in res_kwargs["body_text"]

@pytest.mark.asyncio
async def test_repair_status_by_ticket_number(db_session, handler, mock_client):
    phone = "+919999988888"
    # Seed contains REP-1001
    await handler.lookup_repair_ticket(db_session, phone, "REP-1001")
    assert mock_client.send_interactive_buttons.called
    kwargs = mock_client.send_interactive_buttons.call_args[1]
    assert "REP-1001" in kwargs["body_text"]
    assert "Samsung Galaxy A52" in kwargs["body_text"]
    assert "Ready for Pickup" in kwargs["body_text"]

@pytest.mark.asyncio
async def test_repair_status_by_phone_number(db_session, handler, mock_client):
    # Rahul Sharma's phone in seed is +919876543210
    phone = "+919876543210"
    await handler.handle_repair_menu(db_session, phone)
    assert mock_client.send_interactive_buttons.called
    kwargs = mock_client.send_interactive_buttons.call_args[1]
    assert "Repair Record" in kwargs["body_text"]
    assert "REP-1001" in kwargs["body_text"]

@pytest.mark.asyncio
async def test_product_search(db_session, handler, mock_client):
    phone = "+919999988888"
    await handler.search_products(db_session, phone, "charger")
    assert mock_client.send_interactive_list.called
    kwargs = mock_client.send_interactive_list.call_args[1]
    assert "Found" in kwargs["body_text"]
    sections = kwargs["sections"]
    row_titles = [row["title"] for sec in sections for row in sec["rows"]]
    assert any("Portronics" in t or "Fast" in t for t in row_titles)

def test_api_products_and_categories():
    client = TestClient(app)
    # Categories API
    cat_res = client.get("/api/categories")
    assert cat_res.status_code == 200
    assert len(cat_res.json()) >= 1

    # Products API
    prod_res = client.get("/api/products")
    assert prod_res.status_code == 200
    data = prod_res.json()
    assert "total" in data
    assert "items" in data
    assert len(data["items"]) >= 1

    # Repair API
    repair_res = client.get("/api/repairs/REP-1001")
    assert repair_res.status_code == 200
    assert repair_res.json()["ticket_number"] == "REP-1001"

    # Stats API
    stats_res = client.get("/api/stats")
    assert stats_res.status_code == 200
    assert "total_products" in stats_res.json()

    # Admin page
    admin_res = client.get("/admin")
    assert admin_res.status_code == 200
