import enum
from datetime import datetime
from sqlalchemy import Column, Integer, String, Text, Float, Boolean, DateTime, ForeignKey, Enum
from sqlalchemy.orm import relationship
from app.database import Base

class RepairStatus(str, enum.Enum):
    RECEIVED = "received"
    DIAGNOSING = "diagnosing"
    WAITING_PARTS = "waiting_parts"
    IN_REPAIR = "in_repair"
    READY_FOR_PICKUP = "ready_for_pickup"
    DELIVERED = "delivered"
    CANCELLED = "cancelled"

class DeviceType(str, enum.Enum):
    MOBILE = "mobile"
    APPLIANCE = "appliance"
    ACCESSORY = "accessory"
    OTHER = "other"

class Category(Base):
    __tablename__ = "categories"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    slug = Column(String(100), unique=True, index=True, nullable=False)
    icon = Column(String(10), default="📦")
    type = Column(String(50), default="mobile")  # mobile or appliance
    description = Column(String(255), nullable=True)

    products = relationship("Product", back_populates="category", cascade="all, delete-orphan")

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    category_id = Column(Integer, ForeignKey("categories.id"), nullable=False)
    name = Column(String(150), nullable=False, index=True)
    brand = Column(String(100), nullable=False, index=True)
    model_number = Column(String(100), nullable=True)
    description = Column(Text, nullable=True)
    price = Column(Float, nullable=False)           # Store discounted/sale price
    mrp = Column(Float, nullable=True)              # Original retail price
    in_stock = Column(Boolean, default=True)
    stock_quantity = Column(Integer, default=5)
    is_featured = Column(Boolean, default=False)    # Featured in today's offers
    warranty_info = Column(String(100), default="1 Year Brand Warranty")
    specifications = Column(Text, nullable=True)     # Bullet points or key specs
    image_url = Column(String(500), nullable=True)   # Local or hosted image URL

    category = relationship("Category", back_populates="products")
    reservations = relationship("Reservation", back_populates="product")

class RepairTicket(Base):
    __tablename__ = "repair_tickets"

    id = Column(Integer, primary_key=True, index=True)
    ticket_number = Column(String(50), unique=True, index=True, nullable=False)  # e.g., REP-1001
    customer_name = Column(String(100), nullable=False)
    customer_phone = Column(String(25), nullable=False, index=True)
    device_type = Column(Enum(DeviceType), default=DeviceType.MOBILE)
    device_model = Column(String(150), nullable=False)                           # e.g. "Samsung Galaxy M34" or "Prestige 750W Mixer"
    issue_description = Column(Text, nullable=False)
    status = Column(Enum(RepairStatus), default=RepairStatus.RECEIVED, index=True)
    estimated_cost = Column(Float, nullable=True)
    final_cost = Column(Float, nullable=True)
    technician_notes = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class Reservation(Base):
    __tablename__ = "reservations"

    id = Column(Integer, primary_key=True, index=True)
    reservation_code = Column(String(20), unique=True, index=True, nullable=False)
    customer_phone = Column(String(25), nullable=False, index=True)
    customer_name = Column(String(100), nullable=True)
    product_id = Column(Integer, ForeignKey("products.id"), nullable=False)
    status = Column(String(30), default="active")  # active, completed, cancelled, expired
    created_at = Column(DateTime, default=datetime.utcnow)

    product = relationship("Product", back_populates="reservations")

class CustomerSession(Base):
    __tablename__ = "customer_sessions"

    phone_number = Column(String(25), primary_key=True, index=True)
    current_state = Column(String(50), default="IDLE")  # IDLE, WAITING_REPAIR_TICKET, WAITING_SEARCH_QUERY, etc.
    context_data = Column(Text, nullable=True)          # JSON string if needed
    last_interaction = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
