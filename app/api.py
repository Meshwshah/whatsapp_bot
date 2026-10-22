import json
import random
from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, Query, status
from pydantic import BaseModel, ConfigDict
from sqlalchemy.orm import Session
from sqlalchemy import or_

from app.database import get_db
from app.models import Product, Category, RepairTicket, Reservation, RepairStatus, DeviceType, Order, ConciergeBooking
from app.config import get_settings

settings = get_settings()
router = APIRouter(prefix="/api", tags=["Website & Store API"])

# -----------------------------------------------------------------------------
# Pydantic Schemas for Requests / Responses
# -----------------------------------------------------------------------------

class CategoryResponse(BaseModel):
    id: int
    name: str
    slug: str
    icon: Optional[str] = "📦"
    type: str
    description: Optional[str] = None
    product_count: Optional[int] = 0

    model_config = ConfigDict(from_attributes=True)

class ProductResponse(BaseModel):
    id: int
    category_id: int
    name: str
    brand: str
    model_number: Optional[str] = None
    description: Optional[str] = None
    price: float
    mrp: Optional[float] = None
    discount_percent: Optional[int] = 0
    in_stock: bool
    stock_quantity: int
    is_featured: bool
    warranty_info: Optional[str] = None
    specifications: Optional[str] = None
    image_url: Optional[str] = None
    whatsapp_order_link: Optional[str] = None

    model_config = ConfigDict(from_attributes=True)

class ProductCreateUpdate(BaseModel):
    category_id: int
    name: str
    brand: str
    model_number: Optional[str] = None
    description: Optional[str] = None
    price: float
    mrp: Optional[float] = None
    in_stock: bool = True
    stock_quantity: int = 5
    is_featured: bool = False
    warranty_info: Optional[str] = "1 Year Brand Warranty"
    specifications: Optional[str] = None
    image_url: Optional[str] = None

class RepairTicketResponse(BaseModel):
    id: int
    ticket_number: str
    customer_name: str
    customer_phone: str
    device_type: str
    device_model: str
    issue_description: str
    status: str
    estimated_cost: Optional[float] = None
    final_cost: Optional[float] = None
    technician_notes: Optional[str] = None
    created_at: str

    model_config = ConfigDict(from_attributes=True)

class RepairTicketCreate(BaseModel):
    customer_name: str
    customer_phone: str
    device_type: str = "mobile"
    device_model: str
    issue_description: str
    estimated_cost: Optional[float] = None
    technician_notes: Optional[str] = None

class RepairTicketUpdate(BaseModel):
    status: Optional[str] = None
    final_cost: Optional[float] = None
    technician_notes: Optional[str] = None

class ReservationCreate(BaseModel):
    product_id: int
    customer_name: str
    customer_phone: str

class ReservationResponse(BaseModel):
    id: int
    reservation_code: str
    customer_name: Optional[str] = None
    customer_phone: str
    product_id: int
    product_name: Optional[str] = None
    product_price: Optional[float] = None
    status: str
    created_at: str

    model_config = ConfigDict(from_attributes=True)

class OrderItem(BaseModel):
    id: Optional[str] = None
    title: str
    price: float
    quantity: int = 1
    finish: Optional[str] = None
    storage: Optional[str] = None
    image: Optional[str] = None

class OrderCreate(BaseModel):
    customer_name: str
    customer_phone: str
    customer_email: Optional[str] = None
    shipping_address: str
    city: Optional[str] = "Ahmedabad"
    pincode: Optional[str] = "380015"
    items: List[OrderItem]
    subtotal: float
    total_amount: float
    payment_method: Optional[str] = "UPI Instant"
    payment_status: Optional[str] = "paid"
    source: Optional[str] = "website"

class OrderUpdate(BaseModel):
    order_status: Optional[str] = None
    payment_status: Optional[str] = None
    tracking_number: Optional[str] = None

class BookingCreate(BaseModel):
    customer_name: str
    customer_phone: str
    consultation_type: Optional[str] = "Private Suite Consultation"
    preferred_date: Optional[str] = None
    preferred_time: Optional[str] = None
    notes: Optional[str] = None

class ClientConfigUpdate(BaseModel):
    store_name: Optional[str] = None
    store_tagline: Optional[str] = None
    store_phone: Optional[str] = None
    store_address: Optional[str] = None
    store_hours: Optional[str] = None
    store_upi_id: Optional[str] = None
    store_map_link: Optional[str] = None

# -----------------------------------------------------------------------------
# Helper
# -----------------------------------------------------------------------------

def build_product_response(p: Product) -> dict:
    savings = 0
    percent = 0
    if p.mrp and p.mrp > p.price:
        savings = int(p.mrp - p.price)
        percent = int((savings / p.mrp) * 100)

    clean_store_phone = settings.STORE_PHONE.replace("+", "").replace(" ", "").replace("-", "")
    msg = f"Hi Rishabh Communications! I would like to enquire about: {p.name}. Please share your best offer price, warranty, and availability!"
    wa_link = f"https://wa.me/{clean_store_phone}?text={msg.replace(' ', '%20')}"

    return {
        "id": p.id,
        "category_id": p.category_id,
        "name": p.name,
        "brand": p.brand,
        "model_number": p.model_number,
        "description": p.description,
        "price": p.price,
        "mrp": p.mrp,
        "discount_percent": percent,
        "in_stock": p.in_stock,
        "stock_quantity": p.stock_quantity,
        "is_featured": p.is_featured,
        "warranty_info": p.warranty_info,
        "specifications": p.specifications,
        "image_url": p.image_url,
        "whatsapp_order_link": wa_link
    }

# -----------------------------------------------------------------------------
# Categories API
# -----------------------------------------------------------------------------

@router.get("/categories")
def list_categories(type: Optional[str] = None, db: Session = Depends(get_db)):
    """List all categories with product counts for website navigation."""
    query = db.query(Category)
    if type:
        query = query.filter(Category.type == type)
    cats = query.all()
    results = []
    for c in cats:
        count = db.query(Product).filter(Product.category_id == c.id).count()
        results.append({
            "id": c.id,
            "name": c.name,
            "slug": c.slug,
            "icon": c.icon,
            "type": c.type,
            "description": c.description,
            "product_count": count
        })
    return results

# -----------------------------------------------------------------------------
# Products API
# -----------------------------------------------------------------------------

@router.get("/products")
def list_products(
    category_id: Optional[int] = None,
    category_slug: Optional[str] = None,
    brand: Optional[str] = None,
    search: Optional[str] = None,
    is_featured: Optional[bool] = None,
    in_stock: Optional[bool] = None,
    limit: int = Query(50, ge=1, le=200),
    offset: int = Query(0, ge=0),
    db: Session = Depends(get_db)
):
    """
    Search and filter products for website catalog.
    Supports filtering by category, brand, search keyword, and featured status.
    """
    query = db.query(Product)

    if category_id:
        query = query.filter(Product.category_id == category_id)
    elif category_slug:
        cat = db.query(Category).filter(Category.slug == category_slug).first()
        if cat:
            query = query.filter(Product.category_id == cat.id)

    if brand:
        query = query.filter(Product.brand.ilike(brand))

    if is_featured is not None:
        query = query.filter(Product.is_featured == is_featured)

    if in_stock is not None:
        query = query.filter(Product.in_stock == in_stock)

    if search:
        s = f"%{search}%"
        query = query.filter(
            or_(
                Product.name.ilike(s),
                Product.brand.ilike(s),
                Product.model_number.ilike(s),
                Product.description.ilike(s),
                Product.specifications.ilike(s)
            )
        )

    total = query.count()
    products = query.order_by(Product.is_featured.desc(), Product.id.asc()).offset(offset).limit(limit).all()

    return {
        "total": total,
        "limit": limit,
        "offset": offset,
        "items": [build_product_response(p) for p in products]
    }

@router.get("/products/{product_id}")
def get_product(product_id: int, db: Session = Depends(get_db)):
    """Get single product details with specs, pricing, and WhatsApp order link."""
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return build_product_response(product)

@router.post("/products", status_code=status.HTTP_201_CREATED)
def create_product(data: ProductCreateUpdate, db: Session = Depends(get_db)):
    """Add a new product to inventory from website admin panel."""
    cat = db.query(Category).filter(Category.id == data.category_id).first()
    if not cat:
        raise HTTPException(status_code=400, detail="Invalid category_id")

    product = Product(**data.model_dump())
    db.add(product)
    db.commit()
    db.refresh(product)
    return build_product_response(product)

@router.put("/products/{product_id}")
def update_product(product_id: int, data: ProductCreateUpdate, db: Session = Depends(get_db)):
    """Update product details, pricing, or stock."""
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    for field, val in data.model_dump().items():
        setattr(product, field, val)
    db.commit()
    db.refresh(product)
    return build_product_response(product)

@router.delete("/products/{product_id}")
def delete_product(product_id: int, db: Session = Depends(get_db)):
    """Remove a product from inventory."""
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    db.delete(product)
    db.commit()
    return {"status": "success", "message": f"Product {product_id} deleted"}

# -----------------------------------------------------------------------------
# Repair Tracking API
# -----------------------------------------------------------------------------

@router.get("/repairs/{ticket_number}")
def get_repair_ticket(ticket_number: str, db: Session = Depends(get_db)):
    """Lookup repair status by ticket number for website tracker."""
    ticket = db.query(RepairTicket).filter(
        RepairTicket.ticket_number.ilike(ticket_number.strip())
    ).first()
    if not ticket:
        raise HTTPException(status_code=404, detail=f"No repair ticket found matching '{ticket_number}'")

    milestones = ["received", "diagnosing", "in_repair", "ready_for_pickup", "delivered"]
    curr_status = str(ticket.status.value).lower()
    progress = 20
    if curr_status in milestones:
        progress = (milestones.index(curr_status) + 1) * 20

    return {
        "id": ticket.id,
        "ticket_number": ticket.ticket_number,
        "customer_name": ticket.customer_name,
        "customer_phone_masked": ticket.customer_phone[:3] + "******" + ticket.customer_phone[-2:],
        "device_type": str(ticket.device_type.value),
        "device_model": ticket.device_model,
        "issue_description": ticket.issue_description,
        "status": curr_status,
        "progress_percent": progress,
        "estimated_cost": ticket.estimated_cost,
        "final_cost": ticket.final_cost,
        "technician_notes": ticket.technician_notes,
        "created_at": ticket.created_at.strftime("%Y-%m-%d %H:%M"),
        "updated_at": ticket.updated_at.strftime("%Y-%m-%d %H:%M")
    }

@router.post("/repairs", status_code=status.HTTP_201_CREATED)
def create_repair_ticket(data: RepairTicketCreate, db: Session = Depends(get_db)):
    """Register a new customer repair job sheet."""
    ticket_num = f"REP-{random.randint(1000, 9999)}"
    while db.query(RepairTicket).filter(RepairTicket.ticket_number == ticket_num).first():
        ticket_num = f"REP-{random.randint(1000, 9999)}"

    ticket = RepairTicket(
        ticket_number=ticket_num,
        customer_name=data.customer_name,
        customer_phone=data.customer_phone,
        device_type=DeviceType(data.device_type.lower()) if data.device_type.lower() in [d.value for d in DeviceType] else DeviceType.MOBILE,
        device_model=data.device_model,
        issue_description=data.issue_description,
        status=RepairStatus.RECEIVED,
        estimated_cost=data.estimated_cost,
        technician_notes=data.technician_notes
    )
    db.add(ticket)
    db.commit()
    db.refresh(ticket)
    return {
        "status": "created",
        "ticket_number": ticket.ticket_number,
        "ticket_id": ticket.id
    }

@router.patch("/repairs/{ticket_number}")
def update_repair_status(ticket_number: str, data: RepairTicketUpdate, db: Session = Depends(get_db)):
    """Update repair status, notes, or final cost from store counter."""
    ticket = db.query(RepairTicket).filter(RepairTicket.ticket_number.ilike(ticket_number.strip())).first()
    if not ticket:
        raise HTTPException(status_code=404, detail="Repair ticket not found")

    if data.status:
        try:
            ticket.status = RepairStatus(data.status.lower())
        except ValueError:
            raise HTTPException(status_code=400, detail=f"Invalid status '{data.status}'")

    if data.final_cost is not None:
        ticket.final_cost = data.final_cost

    if data.technician_notes is not None:
        ticket.technician_notes = data.technician_notes

    db.commit()
    db.refresh(ticket)
    return {"status": "success", "ticket_number": ticket.ticket_number, "current_status": ticket.status.value}

# -----------------------------------------------------------------------------
# Reservations API
# -----------------------------------------------------------------------------

@router.post("/reservations", status_code=status.HTTP_201_CREATED)
def create_reservation(data: ReservationCreate, db: Session = Depends(get_db)):
    """Create in-store pickup reservation from website."""
    product = db.query(Product).filter(Product.id == data.product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    code = f"RES-{random.randint(1000, 9999)}"
    while db.query(Reservation).filter(Reservation.reservation_code == code).first():
        code = f"RES-{random.randint(1000, 9999)}"

    res = Reservation(
        reservation_code=code,
        customer_name=data.customer_name,
        customer_phone=data.customer_phone,
        product_id=data.product_id,
        status="active"
    )
    db.add(res)
    db.commit()
    db.refresh(res)

    return {
        "status": "confirmed",
        "reservation_code": code,
        "product_name": product.name,
        "price": product.price,
        "pickup_hours": "24 Hours",
        "store_address": settings.STORE_ADDRESS
    }

@router.get("/reservations")
def list_reservations(limit: int = 50, db: Session = Depends(get_db)):
    """List recent reservations for store counter staff."""
    res_list = db.query(Reservation).order_by(Reservation.id.desc()).limit(limit).all()
    results = []
    for r in res_list:
        p = db.query(Product).filter(Product.id == r.product_id).first()
        results.append({
            "id": r.id,
            "reservation_code": r.reservation_code,
            "customer_name": r.customer_name,
            "customer_phone": r.customer_phone,
            "product_id": r.product_id,
            "product_name": p.name if p else "Unknown",
            "product_price": p.price if p else 0,
            "status": r.status,
            "created_at": r.created_at.strftime("%Y-%m-%d %H:%M")
        })
    return results

# -----------------------------------------------------------------------------
# Website Checkout Orders API
# -----------------------------------------------------------------------------

@router.post("/orders", status_code=status.HTTP_201_CREATED)
def create_order(data: OrderCreate, db: Session = Depends(get_db)):
    """Save an e-commerce order from the website checkout."""
    order_num = f"RC-{random.randint(10000, 99999)}"
    while db.query(Order).filter(Order.order_number == order_num).first():
        order_num = f"RC-{random.randint(10000, 99999)}"

    # Generate tracking code
    tracking = f"WAYBILL-RC-{random.randint(100000, 999999)}"

    items_dump = json.dumps([item.model_dump() for item in data.items])

    new_order = Order(
        order_number=order_num,
        customer_name=data.customer_name,
        customer_phone=data.customer_phone,
        customer_email=data.customer_email,
        shipping_address=data.shipping_address,
        city=data.city or "Ahmedabad",
        pincode=data.pincode or "380015",
        items_json=items_dump,
        subtotal=data.subtotal,
        total_amount=data.total_amount,
        payment_method=data.payment_method or "UPI Instant",
        payment_status=data.payment_status or "paid",
        order_status="confirmed",
        tracking_number=tracking,
        source=data.source or "website"
    )
    db.add(new_order)
    db.commit()
    db.refresh(new_order)

    # Generate WhatsApp Click-to-Confirm Link
    clean_phone = settings.STORE_PHONE.replace("+", "").replace(" ", "").replace("-", "")
    items_summary = ", ".join([f"{i.title} (x{i.quantity})" for i in data.items])
    msg = (
        f"Hello {settings.STORE_NAME}! I just placed order #{new_order.order_number} on your website.\n"
        f"• Customer: {new_order.customer_name}\n"
        f"• Total: Rs.{int(new_order.total_amount):,}\n"
        f"• Items: {items_summary}\n"
        "Please confirm my order dispatch."
    )
    wa_link = f"https://wa.me/{clean_phone}?text={msg.replace(' ', '%20').replace('#', '%23')}"

    return {
        "status": "success",
        "order_number": new_order.order_number,
        "tracking_number": new_order.tracking_number,
        "total_amount": new_order.total_amount,
        "customer_name": new_order.customer_name,
        "whatsapp_confirm_link": wa_link
    }

@router.get("/orders")
def list_orders(limit: int = 50, offset: int = 0, status_filter: Optional[str] = None, db: Session = Depends(get_db)):
    """List orders for the Unified Admin panel."""
    query = db.query(Order)
    if status_filter:
        query = query.filter(Order.order_status == status_filter)
    total = query.count()
    orders = query.order_by(Order.id.desc()).offset(offset).limit(limit).all()

    items_out = []
    for o in orders:
        try:
            cart_items = json.loads(o.items_json)
        except Exception:
            cart_items = []
        items_out.append({
            "id": o.id,
            "order_number": o.order_number,
            "customer_name": o.customer_name,
            "customer_phone": o.customer_phone,
            "shipping_address": f"{o.shipping_address}, {o.city} - {o.pincode}",
            "items": cart_items,
            "total_amount": o.total_amount,
            "payment_method": o.payment_method,
            "payment_status": o.payment_status,
            "order_status": o.order_status,
            "tracking_number": o.tracking_number,
            "source": o.source,
            "created_at": o.created_at.strftime("%Y-%m-%d %H:%M")
        })

    return {"total": total, "items": items_out}

@router.patch("/orders/{order_number}")
def update_order_status(order_number: str, data: OrderUpdate, db: Session = Depends(get_db)):
    """Update order status (Confirmed, Dispatched, Delivered, Cancelled) from Admin."""
    order = db.query(Order).filter(Order.order_number == order_number).first()
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")

    if data.order_status:
        order.order_status = data.order_status
    if data.payment_status:
        order.payment_status = data.payment_status
    if data.tracking_number:
        order.tracking_number = data.tracking_number

    db.commit()
    db.refresh(order)
    return {"status": "success", "order_number": order.order_number, "order_status": order.order_status}

# -----------------------------------------------------------------------------
# VIP Concierge Bookings API
# -----------------------------------------------------------------------------

@router.post("/bookings", status_code=status.HTTP_201_CREATED)
def create_booking(data: BookingCreate, db: Session = Depends(get_db)):
    """Save VIP consultation booking from index.html form."""
    b_num = f"VIP-{random.randint(1000, 9999)}"
    while db.query(ConciergeBooking).filter(ConciergeBooking.booking_number == b_num).first():
        b_num = f"VIP-{random.randint(1000, 9999)}"

    booking = ConciergeBooking(
        booking_number=b_num,
        customer_name=data.customer_name,
        customer_phone=data.customer_phone,
        consultation_type=data.consultation_type or "Private Suite Consultation",
        preferred_date=data.preferred_date,
        preferred_time=data.preferred_time,
        notes=data.notes,
        status="new"
    )
    db.add(booking)
    db.commit()
    db.refresh(booking)

    # WhatsApp Link to notify store staff
    clean_phone = settings.STORE_PHONE.replace("+", "").replace(" ", "").replace("-", "")
    msg = f"VIP Appointment Request #{booking.booking_number} for {booking.customer_name} ({booking.customer_phone}) on {booking.preferred_date} at {booking.preferred_time}."
    wa_link = f"https://wa.me/{clean_phone}?text={msg.replace(' ', '%20')}"

    return {
        "status": "success",
        "booking_number": booking.booking_number,
        "whatsapp_notify_link": wa_link
    }

@router.get("/bookings")
def list_bookings(limit: int = 50, db: Session = Depends(get_db)):
    """List VIP bookings for Unified Admin panel."""
    bookings = db.query(ConciergeBooking).order_by(ConciergeBooking.id.desc()).limit(limit).all()
    return [
        {
            "id": b.id,
            "booking_number": b.booking_number,
            "customer_name": b.customer_name,
            "customer_phone": b.customer_phone,
            "consultation_type": b.consultation_type,
            "preferred_date": b.preferred_date,
            "preferred_time": b.preferred_time,
            "status": b.status,
            "created_at": b.created_at.strftime("%Y-%m-%d %H:%M")
        }
        for b in bookings
    ]

# -----------------------------------------------------------------------------
# Store & Client WhatsApp Configuration API
# -----------------------------------------------------------------------------

@router.get("/config/client")
def get_client_config():
    """Returns store contact details and WhatsApp connection info for the website."""
    clean_phone = settings.STORE_PHONE.replace("+", "").replace(" ", "").replace("-", "")
    return {
        "store_name": settings.STORE_NAME,
        "store_tagline": settings.STORE_TAGLINE,
        "store_phone": settings.STORE_PHONE,
        "clean_phone": clean_phone,
        "whatsapp_link": f"https://wa.me/{clean_phone}?text=Hi%20{settings.STORE_NAME.replace(' ', '%20')},%20I%20need%20assistance",
        "store_address": settings.STORE_ADDRESS,
        "store_map_link": settings.STORE_MAP_LINK,
        "store_hours": settings.STORE_HOURS,
        "store_upi_id": settings.STORE_UPI_ID
    }

# -----------------------------------------------------------------------------
# Store Overview & Stats API
# -----------------------------------------------------------------------------

@router.get("/stats")
def get_store_stats(db: Session = Depends(get_db)):
    """Get dashboard stats for store overview."""
    total_products = db.query(Product).count()
    total_categories = db.query(Category).count()
    active_repairs = db.query(RepairTicket).filter(
        RepairTicket.status.in_([RepairStatus.RECEIVED, RepairStatus.DIAGNOSING, RepairStatus.IN_REPAIR])
    ).count()
    ready_repairs = db.query(RepairTicket).filter(RepairTicket.status == RepairStatus.READY_FOR_PICKUP).count()
    active_reservations = db.query(Reservation).filter(Reservation.status == "active").count()
    total_orders = db.query(Order).count()
    total_revenue = sum([o.total_amount for o in db.query(Order).all()]) if total_orders > 0 else 0
    total_bookings = db.query(ConciergeBooking).count()

    brands = [r[0] for r in db.query(Product.brand).distinct().all()]

    return {
        "store_name": settings.STORE_NAME,
        "total_products": total_products,
        "total_categories": total_categories,
        "brands_count": len(brands),
        "brands": brands,
        "active_repairs": active_repairs,
        "ready_for_pickup_repairs": ready_repairs,
        "active_reservations": active_reservations,
        "total_orders": total_orders,
        "total_revenue": total_revenue,
        "total_bookings": total_bookings
    }
