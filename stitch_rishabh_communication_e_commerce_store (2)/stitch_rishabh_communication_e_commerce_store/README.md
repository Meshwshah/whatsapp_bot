# Rishabh Communication — Authorized Flagship Tech Boutique

A luxury, warm minimalist e-commerce web application created using the exact designs and brand guidelines generated via **Stitch (Sahara Theme)**.

---

## 🌟 Highlights & Features

- **Sun-Baked Warm Minimalist Aesthetics (Sahara Theme)**:
  - Burnt sienna accents (`#c2652a`), warm linen backgrounds (`#faf5ee`), dusty rose highlights (`#8c3c3c`).
  - Editorial typography: `EB Garamond` serif headlines paired with `Manrope` geometric sans-serif body text.
  - Soft elevation, delicate warm borders, frosted glass blur ribbons.

- **Client-Side Architecture (No Backend or Database required)**:
  - Powered by comprehensive mock data (`js/data.js`) including Apple, Samsung, Sony, UNISKS, and DJI devices.
  - State persisted across sessions and pages via `localStorage` through `js/store.js`.

- **5 Interconnected Pages**:
  1. **Home (`index.html`)**:
     - Ambient **Hero Background Video** (`Background_video/Video Project 3.mp4`) with warm Sahara tint overlay and bottom-left Mute / Unmute audio toggle.
     - Dual-device hero showcase (iPhone Titanium Pro Series + Apple Watch Ultra).
     - Trust & Service Triad (100% OEM Direct, VIP Concierge, Insured Armored Express).
     - Curated Portfolios (Flagships, Studio Acoustics, Precision Wearables, Creator Optics).
     - Featured Authorized Editions with instant "Add to Bag" and "View Details".
     - Interactive **Tamper-Proof Serial Verification Portal** (validates IMEI tokens with real-time feedback).
     - Interactive **VIP Consultation Appointment Booking Form**.
  2. **Catalog & Categories (`catalog.html`)**:
     - Dynamic category switcher pills with hardware counts.
     - Sidebar filters: Fulfillment Assurance, Brand checkboxes, Price Spectrum slider (up to ₹1,60,000), Sort Precision.
     - Live keyword search and responsive product grid.
     - Wishlist bookmarking and Cart additions.
  3. **Product Detail (`product.html`)**:
     - Dynamic loading based on URL parameter (`?id=...`, defaults to iPhone 15 Pro Max).
     - Interactive image gallery with thumbnail preview switching.
     - Finish & Color swatches (Natural Titanium, Blue Titanium, White Titanium, Black Titanium).
     - Storage capacity selector (256GB, 512GB, 1TB) with live price recalculation.
     - Curated White-Glove Add-ons (9H Privacy Glass Shield, Braided PD Cable) with bundle discount calculation.
     - Metro Pincode delivery check with 4-hour VIP courier verification.
     - Technical Blueprint Bento grid (Display, Chipset, Optics, Chassis & Battery).
  4. **Secure Escrow Checkout (`checkout.html`)**:
     - 3-step visual checkout progress stepper.
     - Destination details with in-place modification support.
     - Dispatch Velocity selection (Complimentary White-Glove vs Insured Armored Express).
     - Payment Terminal tabs: UPI Instant (with QR code), Cards & EMI, Net Banking, Escrow on Handover.
     - Real-time Order Summary reflecting active cart items, quantity adjusters, and promo codes (`VIP10`, `RISHABH15`).
     - Biometric escrow authorization animation leading to instant Order Confirmation with unique tracking waybill.
  5. **VIP Dashboard & Profile (`profile.html`)**:
     - Customer identity header for Aarav Sharma (Tier 1 VIP).
     - Privilege Reward Points wallet (₹1,450 store credit) & Guaranteed Buyback Valuation (₹1,12,000).
     - Active Orders Telemetry with 4-checkpoint live tracking timeline.
     - OEM Hardware Vault: Registered devices, warranty validity progress bars, and printable warranty certificate modals.
     - Device registration modal & Concierge appointment tracker.

- **Universal Experience**:
  - Global Slide-Over **Cart Drawer** with itemized totals and direct checkout link.
  - Global Slide-Over **Wishlist Drawer** with instant transfer to bag.
  - Interactive **Toast Notification System** for all micro-actions.

---

## 🚀 How to Run the Website

### Option 1: Double-click or open directly
Open [`index.html`](file:///c:/Users/Vihang%20Mistry/OneDrive/Desktop/stitch_rishabh_communication_e_commerce_store/index.html) in Google Chrome, Microsoft Edge, or any modern web browser.

### Option 2: Run via local HTTP server
In PowerShell or Terminal:
```bash
npx serve .
# or
npm start
```
Then visit `http://localhost:3000` in your browser.
