import random
from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, Query, status
from pydantic import BaseModel, ConfigDict
from sqlalchemy.orm import Session
from sqlalchemy import or_

from app.database import get_db
from app.models import Product, Category, RepairTicket, Reservation, RepairStatus, DeviceType
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
    msg = f"Hi, I am interested in {p.name} (Price: Rs.{int(p.price):,}). Is it available?"
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

    brands = [r[0] for r in db.query(Product.brand).distinct().all()]

    return {
        "store_name": settings.STORE_NAME,
        "total_products": total_products,
        "total_categories": total_categories,
        "brands_count": len(brands),
        "brands": brands,
        "active_repairs": active_repairs,
        "ready_for_pickup_repairs": ready_repairs,
        "active_reservations": active_reservations
    }
