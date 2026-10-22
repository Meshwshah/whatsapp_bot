/**
 * Rishabh Communications - Official Product Catalog Database
 * Total Verified Products: 102
 */

const MOCK_PRODUCTS = [
  {
    "id": "iphone-15-pro-max",
    "title": "Apple iPhone 15 Pro Max",
    "shortTitle": "iPhone Pro Titanium",
    "category": "smartphones",
    "brand": "Apple",
    "price": 134900,
    "originalPrice": 159900,
    "rating": 4.9,
    "reviewsCount": 428,
    "modelNumber": "Model A3106 (Global 5G)",
    "provenanceBadge": "Authorized Flagship Architecture",
    "tagline": "Grade 5 Titanium architecture with unthrottled A17 Pro silicon.",
    "description": "Grade 5 Titanium chassis, Direct OEM allocation with A17 Pro silicon, Action button, 5x optical zoom, and ceramic shield display. Sourced directly from Apple authorized Indian channels with factory seals.",
    "image": "assets/iphone_15_pro_max_natural.png",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Natural Titanium",
        "label": "Rear Finish",
        "src": "assets/iphone_15_pro_max_natural.png"
      },
      {
        "name": "Pastel Blue",
        "label": "Studio Perspective",
        "src": "assets/iphone_15_pastel_blue.png"
      }
    ],
    "finishes": [
      {
        "id": "natural",
        "name": "Natural Titanium",
        "color": "#bfb6aa",
        "subtitle": "Raw Brushed"
      },
      {
        "id": "blue",
        "name": "Blue Titanium",
        "color": "#3d4a58",
        "subtitle": "Deep Anodized"
      },
      {
        "id": "white",
        "name": "White Titanium",
        "color": "#e3e4e5",
        "subtitle": "Pearl Sheen"
      },
      {
        "id": "black",
        "name": "Black Titanium",
        "color": "#2a2c2d",
        "subtitle": "Space Matte"
      }
    ],
    "storageOptions": [
      {
        "size": "256 GB",
        "price": 124900,
        "label": "Standard Pro"
      },
      {
        "size": "512 GB",
        "price": 134900,
        "label": "ProRes 4K Ready",
        "recommended": true
      },
      {
        "size": "1 TB",
        "price": 154900,
        "label": "Cinema Master"
      }
    ],
    "specs": {
      "display": "6.7-inch Super Retina XDR with ProMotion 120Hz, 2000 nits peak brightness",
      "processor": "A17 Pro silicon (3nm architecture, 6-core GPU)",
      "camera": "Pro camera system: 48MP Main, 12MP Ultra Wide, 12MP 5x Telephoto",
      "chassis": "Aerospace Grade 5 Titanium with brushed finish and ceramic shield",
      "battery": "Up to 29 hours video playback, MagSafe wireless charging"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "3591-8812-4029-A15",
    "batch": "RC-2024-APL"
  },
  {
    "id": "iphone-15-pastel-blue",
    "title": "Apple iPhone 15 Pastel Blue",
    "shortTitle": "iPhone 15 Pastel Blue",
    "category": "smartphones",
    "brand": "Apple",
    "price": 72990,
    "originalPrice": 79900,
    "rating": 4.8,
    "reviewsCount": 215,
    "modelNumber": "Model A3090",
    "provenanceBadge": "Infused Color Glass",
    "tagline": "Dynamic Island, 48MP Main camera, and USB-C in durable color-infused glass.",
    "description": "Dynamic Island, 48MP main camera, 2x Telephoto, all-day battery life, and aerospace-grade aluminum enclosure with color-infused glass back.",
    "image": "assets/iphone_15_pastel_blue.png",
    "cloudFallback": "assets/iphone_15_pastel_blue.png",
    "gallery": [
      {
        "name": "Pastel Blue",
        "label": "Main Perspective",
        "src": "assets/iphone_15_pastel_blue.png"
      }
    ],
    "finishes": [
      {
        "id": "blue",
        "name": "Pastel Blue",
        "color": "#c6d7e0",
        "subtitle": "Color-Infused"
      }
    ],
    "storageOptions": [
      {
        "size": "128 GB",
        "price": 72990,
        "label": "Base Spec",
        "recommended": true
      },
      {
        "size": "256 GB",
        "price": 82990,
        "label": "Power User"
      }
    ],
    "specs": {
      "display": "6.1-inch Super Retina XDR display with Dynamic Island",
      "processor": "A16 Bionic chip with 5-core GPU",
      "camera": "Advanced dual-camera system: 48MP Main, 12MP Ultra Wide",
      "chassis": "Aluminum with color-infused glass back",
      "battery": "Up to 20 hours video playback, USB-C connector"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "3591-8812-4029-A14",
    "batch": "RC-2024-APL"
  },
  {
    "id": "apple-watch-ultra",
    "title": "Apple Watch Ultra 2 Cellular",
    "shortTitle": "Watch Ultra 2",
    "category": "smartwatches",
    "brand": "Apple",
    "price": 89900,
    "originalPrice": 89900,
    "rating": 4.9,
    "reviewsCount": 112,
    "modelNumber": "Model A2986",
    "provenanceBadge": "Extreme Telemetry Certified",
    "tagline": "49mm aerospace titanium case, 3000 nits display, precision dual-frequency GPS.",
    "description": "The most rugged and capable Apple Watch. Engineered for endurance, exploration, and adventure. 49mm aerospace-grade titanium case, 100m water resistance, and up to 72 hours battery life.",
    "image": "assets/apple_watch_ultra.png",
    "cloudFallback": "assets/apple_watch_ultra.png",
    "gallery": [
      {
        "name": "Titanium Alpine",
        "label": "Front Perspective",
        "src": "assets/apple_watch_ultra.png"
      }
    ],
    "finishes": [
      {
        "id": "natural",
        "name": "Natural Titanium",
        "color": "#bfb6aa",
        "subtitle": "Satin Finish"
      }
    ],
    "storageOptions": [
      {
        "size": "49mm GPS + Cellular",
        "price": 89900,
        "label": "Standard Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Always-On Retina display up to 3000 nits, flat sapphire crystal front",
      "processor": "S9 SiP with 64-bit dual-core processor, 4-core Neural Engine",
      "camera": "Dual speakers and three-microphone array with beamforming",
      "chassis": "49mm Aerospace-grade Titanium case with customizable Action button",
      "battery": "Up to 36 hours normal use, up to 72 hours in Low Power Mode"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "AW-ULTRA-8841-IND",
    "batch": "RC-2024-APL"
  },
  {
    "id": "aeropod-studio-tws",
    "title": "AeroPod Studio Pro ANC Earbuds",
    "shortTitle": "AeroPod Studio ANC",
    "category": "earbuds",
    "brand": "Apple",
    "price": 24900,
    "originalPrice": 26900,
    "rating": 4.8,
    "reviewsCount": 94,
    "modelNumber": "AP-STD-99",
    "provenanceBadge": "Acoustic Laboratory Grade",
    "tagline": "Active Noise Cancellation with Transparency Mode and Spatial Audio.",
    "description": "Custom high-excursion driver, high dynamic range amplifier, active noise cancellation, adaptive transparency, personalized spatial audio with dynamic head tracking.",
    "image": "assets/aeropod_studio_tws.png",
    "cloudFallback": "assets/aeropod_studio_tws.png",
    "gallery": [
      {
        "name": "Ceramic White",
        "label": "Studio View",
        "src": "assets/aeropod_studio_tws.png"
      }
    ],
    "finishes": [
      {
        "id": "white",
        "name": "Ceramic White",
        "color": "#f8f9fa",
        "subtitle": "Gloss Finish"
      }
    ],
    "storageOptions": [
      {
        "size": "MagSafe Wireless Case",
        "price": 24900,
        "label": "Standard Edition",
        "recommended": true
      }
    ],
    "specs": {
      "display": "MagSafe Charging Case with speaker and lanyard loop",
      "processor": "H2 headphone chip, U1 chip in MagSafe Charging Case",
      "camera": "Dual beamforming microphones, inward-facing microphone",
      "chassis": "IP54 sweat and water resistant for earbuds and case",
      "battery": "Up to 6 hours listening time with ANC on, up to 30 hours total"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "AP-8820-TWS",
    "batch": "RC-2024-AUD"
  },
  {
    "id": "unisks-studio-headphone",
    "title": "Unisks Reference Studio Headphones",
    "shortTitle": "Unisks Studio Wireless",
    "category": "headphones",
    "brand": "Unisks",
    "price": 38900,
    "originalPrice": 42000,
    "rating": 4.9,
    "reviewsCount": 63,
    "modelNumber": "UNS-REF-800",
    "provenanceBadge": "Audiophile Master Series",
    "tagline": "Custom 40mm beryllium drivers with lossless Bluetooth 5.4 transmission.",
    "description": "Anodized aluminum earcups, memory foam ear cushions wrapped in breathable lambskin, digital crown volume control, active noise cancellation with three modes.",
    "image": "assets/unisks_studio_headphone.png",
    "cloudFallback": "assets/unisks_studio_headphone.png",
    "gallery": [
      {
        "name": "Midnight Matte",
        "label": "Studio Profile",
        "src": "assets/unisks_studio_headphone.png"
      }
    ],
    "finishes": [
      {
        "id": "midnight",
        "name": "Midnight Obsidian",
        "color": "#1a1a1a",
        "subtitle": "Anodized"
      }
    ],
    "storageOptions": [
      {
        "size": "Wireless ANC Edition",
        "price": 38900,
        "label": "Master Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Laser-etched status telemetry indicator",
      "processor": "Dedicated dual 32-bit audio DSP engines with LDAC & aptX HD",
      "camera": "8-microphone array for ultra-clarity voice calls and ANC",
      "chassis": "CNC-machined aluminum with stainless steel telescoping arms",
      "battery": "Up to 40 hours continuous playback with fast USB-C charge"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "UNS-9912-AUD",
    "batch": "RC-2024-AUD"
  },
  {
    "id": "braided-pd-cable",
    "title": "Braided 100W PD Fast Charging Cable",
    "shortTitle": "100W Braided Cable",
    "category": "chargers",
    "brand": "Portronics",
    "price": 899,
    "originalPrice": 1499,
    "rating": 4.7,
    "reviewsCount": 182,
    "modelNumber": "RC-CBL-100",
    "provenanceBadge": "Reinforced Aramid Core",
    "tagline": "100W Power Delivery with E-Marker smart chipset.",
    "description": "Double-braided nylon exterior with aramid fiber core, 20,000+ bend lifespan, supports up to 100W (20V/5A) fast charging for laptops, tablets, and phones.",
    "image": "assets/braided_pd_cable.png",
    "cloudFallback": "assets/braided_pd_cable.png",
    "gallery": [
      {
        "name": "Braided Black",
        "label": "Cable Detail",
        "src": "assets/braided_pd_cable.png"
      }
    ],
    "finishes": [
      {
        "id": "black",
        "name": "Braided Obsidian",
        "color": "#2c2c2c",
        "subtitle": "Reinforced"
      }
    ],
    "storageOptions": [
      {
        "size": "1.5 Meter",
        "price": 899,
        "label": "Standard Length",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Integrated LED charge rate indicator",
      "processor": "Smart E-Marker safety protocol IC",
      "camera": "Dual gold-plated Type-C connectors",
      "chassis": "High-tensile zinc alloy housing with braided sleeve",
      "battery": "Rated 100W (20V/5A) maximum throughput"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": false,
    "serialNumber": "RC-ACC-0199",
    "batch": "RC-2024-ACC"
  },
  {
    "id": "privacy-glass-guard",
    "title": "9H Oleophobic Privacy Glass Guard",
    "shortTitle": "Privacy Glass Guard",
    "category": "chargers",
    "brand": "Portronics",
    "price": 699,
    "originalPrice": 1299,
    "rating": 4.8,
    "reviewsCount": 310,
    "modelNumber": "RC-GLS-9H",
    "provenanceBadge": "Electrostatic Bond",
    "tagline": "Two-way privacy filter with 9H tempered glass hardness.",
    "description": "28-degree narrow viewing angle keeps your screen private in public. Real 9H tempered glass with anti-fingerprint oleophobic coating and shatter-proof safety film.",
    "image": "assets/privacy_glass_guard.png",
    "cloudFallback": "assets/privacy_glass_guard.png",
    "gallery": [
      {
        "name": "Sapphire 28°",
        "label": "Glass Profile",
        "src": "assets/privacy_glass_guard.png"
      }
    ],
    "finishes": [
      {
        "id": "privacy",
        "name": "Privacy Smoke",
        "color": "#333333",
        "subtitle": "28° Angle"
      }
    ],
    "storageOptions": [
      {
        "size": "Universal Precision Cut",
        "price": 699,
        "label": "Edge-to-Edge",
        "recommended": true
      }
    ],
    "specs": {
      "display": "28-degree micro-louver optical privacy filter",
      "processor": "Dual-layer oleophobic electroplating",
      "camera": "Ultra-clear camera cutouts with zero lens distortion",
      "chassis": "Double-tempered Japanese aluminosilicate glass",
      "battery": "Electrostatic self-adhesive bubble-free layer"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": false,
    "serialNumber": "RC-ACC-0288",
    "batch": "RC-2024-ACC"
  },
  {
    "id": "samsung-samsung-galaxy-z-fold-8-ultra-5g-12-256gb-12-512gb-16-1tb",
    "title": "Samsung Galaxy Z Fold 8 Ultra 5G (12/256GB | 12/512GB | 16/1TB)",
    "shortTitle": "Samsung Galaxy Z Fold 8 Ultra 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 194999,
    "originalPrice": 254999,
    "rating": 4.8,
    "reviewsCount": 47,
    "modelNumber": "Samsung Galaxy Z Fold 8 Ultra 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Thinnest and widest folding flagship with 200MP main sensor, Titanium chassis, and peak brightness.",
    "description": "Thinnest and widest folding flagship with 200MP main sensor, Titanium chassis, and peak brightness. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy Z Fold 8 Ultra 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 194999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Highlights: Thinnest and widest folding flagship with 200MP main sensor, Titanium chassis, and peak brightness.",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-29092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20Z%20Fold%208%20Ultra%205G%20(12/256GB%20|%2012/512GB%20|%2016/1TB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-z-fold-8-5g-12-256gb-12-512gb-16-1tb",
    "title": "Samsung Galaxy Z Fold 8 5G (12/256GB | 12/512GB | 16/1TB)",
    "shortTitle": "Samsung Galaxy Z Fold 8 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 174999,
    "originalPrice": 234999,
    "rating": 4.7,
    "reviewsCount": 46,
    "modelNumber": "Samsung Galaxy Z Fold 8 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Immersive 7.6-inch folding screen, dual-rail hinge, S-Pen fold edition support, and multi-active window.",
    "description": "Immersive 7.6-inch folding screen, dual-rail hinge, S-Pen fold edition support, and multi-active window. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy Z Fold 8 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 174999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Immersive 7.6-inch folding screen, dual-rail hinge, S-Pen fold edition support, and multi-active window.",
      "processor": "Badge: Next-Gen Fold",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-28092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20Z%20Fold%208%205G%20(12/256GB%20|%2012/512GB%20|%2016/1TB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-z-fold-7-5g-12-256gb-12-512gb-16-1tb",
    "title": "Samsung Galaxy Z Fold 7 5G (12/256GB | 12/512GB | 16/1TB)",
    "shortTitle": "Samsung Galaxy Z Fold 7 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 174999,
    "originalPrice": 216999,
    "rating": 4.7,
    "reviewsCount": 19,
    "modelNumber": "Samsung Galaxy Z Fold 7 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Ultimate portable workstation with 7.6-inch main screen, enhanced multi-tasking taskbar, and Galaxy AI.",
    "description": "Ultimate portable workstation with 7.6-inch main screen, enhanced multi-tasking taskbar, and Galaxy AI. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy Z Fold 7 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 174999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Ultimate portable workstation with 7.6-inch main screen, enhanced multi-tasking taskbar, and Galaxy AI.",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-36092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20Z%20Fold%207%205G%20(12/256GB%20|%2012/512GB%20|%2016/1TB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-s26-ultra-5g-12-256gb-12-512gb-16-1tb",
    "title": "Samsung Galaxy S26 Ultra 5G (12/256GB | 12/512GB | 16/1TB)",
    "shortTitle": "Samsung Galaxy S26 Ultra 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 139999,
    "originalPrice": 199999,
    "rating": 4.9,
    "reviewsCount": 44,
    "modelNumber": "Samsung Galaxy S26 Ultra 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Built-in S-Pen, Titanium grade frame, 200MP Quad-Telephoto camera with 100x Space Zoom, and anti-reflective display.",
    "description": "Built-in S-Pen, Titanium grade frame, 200MP Quad-Telephoto camera with 100x Space Zoom, and anti-reflective display. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy S26 Ultra 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 139999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Built-in S-Pen, Titanium grade frame, 200MP Quad-Telephoto camera with 100x Space Zoom, and anti-reflective display.",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-26092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20S26%20Ultra%205G%20(12/256GB%20|%2012/512GB%20|%2016/1TB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-s26-plus-5g-12gb-256gb-12gb-512gb",
    "title": "Samsung Galaxy S26 Plus 5G (12GB+256GB / 12GB+512GB)",
    "shortTitle": "Samsung Galaxy S26 Plus 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 134999,
    "originalPrice": 154999,
    "rating": 4.8,
    "reviewsCount": 43,
    "modelNumber": "Samsung Galaxy S26 Plus 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "QHD+ 6.7-inch display, 4900mAh battery, 45W super fast charging, and full Galaxy AI ecosystem.",
    "description": "QHD+ 6.7-inch display, 4900mAh battery, 45W super fast charging, and full Galaxy AI ecosystem. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy S26 Plus 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "12GB+256GB / 12GB+512GB",
        "price": 134999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: QHD+ 6.7-inch display, 4900mAh battery, 45W super fast charging, and full Galaxy AI ecosystem.",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-25092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20S26%20Plus%205G%20(12GB+256GB%20/%2012GB+512GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-s25-ultra-5g-12-256gb-12-512gb-12-1tb",
    "title": "Samsung Galaxy S25 Ultra 5G (12/256GB | 12/512GB | 12/1TB)",
    "shortTitle": "Samsung Galaxy S25 Ultra 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 119999,
    "originalPrice": 165999,
    "rating": 4.8,
    "reviewsCount": 51,
    "modelNumber": "Samsung Galaxy S25 Ultra 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "200MP camera with 5x optical telephoto, flat anti-glare display, built-in S-Pen, and Titanium build.",
    "description": "200MP camera with 5x optical telephoto, flat anti-glare display, built-in S-Pen, and Titanium build. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy S25 Ultra 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 119999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: 200MP camera with 5x optical telephoto, flat anti-glare display, built-in S-Pen, and Titanium build.",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-33092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20S25%20Ultra%205G%20(12/256GB%20|%2012/512GB%20|%2012/1TB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-z-flip-8-5g-12gb-256gb-12gb-512gb",
    "title": "Samsung Galaxy Z Flip 8 5G (12GB+256GB / 12GB+512GB)",
    "shortTitle": "Samsung Galaxy Z Flip 8 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 114999,
    "originalPrice": 134999,
    "rating": 4.9,
    "reviewsCount": 45,
    "modelNumber": "Samsung Galaxy Z Flip 8 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Edge-to-edge Flex Window cover display, 50MP dual camera with ProVisual Engine, and IP48 water resistance.",
    "description": "Edge-to-edge Flex Window cover display, 50MP dual camera with ProVisual Engine, and IP48 water resistance. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy Z Flip 8 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "12GB+256GB / 12GB+512GB",
        "price": 114999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Edge-to-edge Flex Window cover display, 50MP dual camera with ProVisual Engine, and IP48 water resistance.",
      "processor": "Badge: Next-Gen Flip",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-27092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20Z%20Flip%208%205G%20(12GB+256GB%20/%2012GB+512GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-z-flip-7-5g-12gb-256gb-12gb-512gb",
    "title": "Samsung Galaxy Z Flip 7 5G (12GB+256GB / 12GB+512GB)",
    "shortTitle": "Samsung Galaxy Z Flip 7 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 109999,
    "originalPrice": 121999,
    "rating": 4.9,
    "reviewsCount": 18,
    "modelNumber": "Samsung Galaxy Z Flip 7 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Ultra-sleek clamshell with 50MP camera, dual preview photography, and personalized cover screen widgets.",
    "description": "Ultra-sleek clamshell with 50MP camera, dual preview photography, and personalized cover screen widgets. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy Z Flip 7 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "12GB+256GB / 12GB+512GB",
        "price": 109999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Ultra-sleek clamshell with 50MP camera, dual preview photography, and personalized cover screen widgets.",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-35092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20Z%20Flip%207%205G%20(12GB+256GB%20/%2012GB+512GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-s26-5g-12gb-256gb-12gb-512gb",
    "title": "Samsung Galaxy S26 5G (12GB+256GB / 12GB+512GB)",
    "shortTitle": "Samsung Galaxy S26 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 89999,
    "originalPrice": 109999,
    "rating": 4.7,
    "reviewsCount": 42,
    "modelNumber": "Samsung Galaxy S26 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Armor Aluminum frame, Snapdragon 8 Gen 5 / Exynos 2600, Galaxy AI, and bright 2600-nit screen.",
    "description": "Armor Aluminum frame, Snapdragon 8 Gen 5 / Exynos 2600, Galaxy AI, and bright 2600-nit screen. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy S26 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "12GB+256GB / 12GB+512GB",
        "price": 89999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Armor Aluminum frame, Snapdragon 8 Gen 5 / Exynos 2600, Galaxy AI, and bright 2600-nit screen.",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Badge: Compact Flagship",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-24092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20S26%205G%20(12GB+256GB%20/%2012GB+512GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-z-flip-7-fe-5g-8gb-128gb-8gb-256gb",
    "title": "Samsung Galaxy Z Flip 7 FE 5G (8GB+128GB / 8GB+256GB)",
    "shortTitle": "Samsung Galaxy Z Flip 7 FE 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 89999,
    "originalPrice": 95999,
    "rating": 4.9,
    "reviewsCount": 52,
    "modelNumber": "Samsung Galaxy Z Flip 7 FE 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Foldable style within reach, featuring large cover screen, FlexCam hands-free shooting, and pocket fit.",
    "description": "Foldable style within reach, featuring large cover screen, FlexCam hands-free shooting, and pocket fit. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy Z Flip 7 FE 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "8GB+128GB / 8GB+256GB",
        "price": 89999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Foldable style within reach, featuring large cover screen, FlexCam hands-free shooting, and pocket fit.",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-34092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20Z%20Flip%207%20FE%205G%20(8GB+128GB%20/%208GB+256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-s25-edge-5g-12gb-256gb-12gb-512gb",
    "title": "Samsung Galaxy S25 Edge 5G (12GB+256GB / 12GB+512GB)",
    "shortTitle": "Samsung Galaxy S25 Edge 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 84999,
    "originalPrice": 96999,
    "rating": 4.7,
    "reviewsCount": 50,
    "modelNumber": "Samsung Galaxy S25 Edge 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Curved edge AMOLED display with immersive viewing angles and lightweight aerospace aluminum frame.",
    "description": "Curved edge AMOLED display with immersive viewing angles and lightweight aerospace aluminum frame. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy S25 Edge 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "12GB+256GB / 12GB+512GB",
        "price": 84999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Curved edge AMOLED display with immersive viewing angles and lightweight aerospace aluminum frame.",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-32092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20S25%20Edge%205G%20(12GB+256GB%20/%2012GB+512GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-s25-5g-12-128gb-12-256gb-12-512gb",
    "title": "Samsung Galaxy S25 5G (12/128GB | 12/256GB | 12/512GB)",
    "shortTitle": "Samsung Galaxy S25 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 74999,
    "originalPrice": 104999,
    "rating": 4.9,
    "reviewsCount": 48,
    "modelNumber": "Samsung Galaxy S25 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "120Hz Dynamic AMOLED 2X, enhanced cooling vapor chamber, and full Galaxy AI suite.",
    "description": "120Hz Dynamic AMOLED 2X, enhanced cooling vapor chamber, and full Galaxy AI suite. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy S25 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 74999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: 120Hz Dynamic AMOLED 2X, enhanced cooling vapor chamber, and full Galaxy AI suite.",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Badge: Compact Flagship",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-30092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20S25%205G%20(12/128GB%20|%2012/256GB%20|%2012/512GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-s26-fe-5g-8gb-128gb-8gb-256gb",
    "title": "Samsung Galaxy S26 FE 5G (8GB+128GB / 8GB+256GB)",
    "shortTitle": "Samsung Galaxy S26 FE 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 69999,
    "originalPrice": 72999,
    "rating": 4.9,
    "reviewsCount": 41,
    "modelNumber": "Samsung Galaxy S26 FE 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Galaxy AI suite, 6.7-inch Dynamic AMOLED 2X 120Hz display, and 3x optical telephoto camera.",
    "description": "Galaxy AI suite, 6.7-inch Dynamic AMOLED 2X 120Hz display, and 3x optical telephoto camera. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy S26 FE 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "8GB+128GB / 8GB+256GB",
        "price": 69999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Galaxy AI suite, 6.7-inch Dynamic AMOLED 2X 120Hz display, and 3x optical telephoto camera.",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-23092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20S26%20FE%205G%20(8GB+128GB%20/%208GB+256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-s25-fe-5g-8-128gb-8-256gb-8-512gb",
    "title": "Samsung Galaxy S25 FE 5G (8/128GB | 8/256GB | 8/512GB)",
    "shortTitle": "Samsung Galaxy S25 FE 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 58999,
    "originalPrice": 76999,
    "rating": 4.9,
    "reviewsCount": 49,
    "modelNumber": "Samsung Galaxy S25 FE 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Pro-grade camera capabilities with Nightography, aluminum frame, and long software lifecycle.",
    "description": "Pro-grade camera capabilities with Nightography, aluminum frame, and long software lifecycle. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy S25 FE 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 58999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Highlights: Pro-grade camera capabilities with Nightography, aluminum frame, and long software lifecycle.",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-31092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20S25%20FE%205G%20(8/128GB%20|%208/256GB%20|%208/512GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-a57-5g-8-256gb-12-256gb",
    "title": "Samsung Galaxy A57 5G (8/256GB / 12/256GB)",
    "shortTitle": "Samsung Galaxy A57 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 54499,
    "originalPrice": 62999,
    "rating": 4.7,
    "reviewsCount": 38,
    "modelNumber": "Samsung Galaxy A57 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Metal frame, Vision Booster AMOLED screen, 50MP flagship sensor with big pixels, and Knox security.",
    "description": "Metal frame, Vision Booster AMOLED screen, 50MP flagship sensor with big pixels, and Knox security. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy A57 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 54499,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Metal frame, Vision Booster AMOLED screen, 50MP flagship sensor with big pixels, and Knox security.",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-20092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20A57%205G%20(8/256GB%20/%2012/256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-a56-5g-8-128gb-8-256gb-12-256gb",
    "title": "Samsung Galaxy A56 5G (8/128GB | 8/256GB | 12/256GB)",
    "shortTitle": "Samsung Galaxy A56 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 44999,
    "originalPrice": 54499,
    "rating": 4.9,
    "reviewsCount": 40,
    "modelNumber": "Samsung Galaxy A56 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Brushed metal side rails, 4K video recording on front & back, and 45W fast charging.",
    "description": "Brushed metal side rails, 4K video recording on front & back, and 45W fast charging. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy A56 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 44999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-22092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20A56%205G%20(8/128GB%20|%208/256GB%20|%2012/256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-a37-5g-8-128gb-8-256gb-12-256gb",
    "title": "Samsung Galaxy A37 5G (8/128GB | 8/256GB | 12/256GB)",
    "shortTitle": "Samsung Galaxy A37 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 42999,
    "originalPrice": 59999,
    "rating": 4.9,
    "reviewsCount": 37,
    "modelNumber": "Samsung Galaxy A37 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "IP67 dust and water resistance, Corning Gorilla Glass Victus+, and advanced Exynos processor.",
    "description": "IP67 dust and water resistance, Corning Gorilla Glass Victus+, and advanced Exynos processor. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy A37 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 42999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Highlights: IP67 dust and water resistance, Corning Gorilla Glass Victus+, and advanced Exynos processor.",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Badge: IP67 Water Resistant",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-19092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20A37%205G%20(8/128GB%20|%208/256GB%20|%2012/256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-a36-5g-8-128gb-8-256gb-12-256gb",
    "title": "Samsung Galaxy A36 5G (8/128GB | 8/256GB | 12/256GB)",
    "shortTitle": "Samsung Galaxy A36 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 36999,
    "originalPrice": 46499,
    "rating": 4.8,
    "reviewsCount": 39,
    "modelNumber": "Samsung Galaxy A36 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Sleek floating lens design, 120Hz AMOLED panel, and solid 5000mAh battery.",
    "description": "Sleek floating lens design, 120Hz AMOLED panel, and solid 5000mAh battery. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy A36 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 36999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Sleek floating lens design, 120Hz AMOLED panel, and solid 5000mAh battery.",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-21092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20A36%205G%20(8/128GB%20|%208/256GB%20|%2012/256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-m47-5g-6-128gb-8-128gb-8-256gb",
    "title": "Samsung Galaxy M47 5G (6/128GB | 8/128GB | 8/256GB)",
    "shortTitle": "Samsung Galaxy M47 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 35999,
    "originalPrice": 44999,
    "rating": 4.8,
    "reviewsCount": 28,
    "modelNumber": "Samsung Galaxy M47 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Snapdragon processor, 120Hz display, high-resolution triple cameras, and NFC payment support.",
    "description": "Snapdragon processor, 120Hz display, high-resolution triple cameras, and NFC payment support. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy M47 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 35999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Snapdragon processor, 120Hz display, high-resolution triple cameras, and NFC payment support.",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-45092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20M47%205G%20(6/128GB%20|%208/128GB%20|%208/256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-f70-pro-5g-6-128gb-8-128gb-8-256gb",
    "title": "Samsung Galaxy F70 Pro 5G (6/128GB | 8/128GB | 8/256GB)",
    "shortTitle": "Samsung Galaxy F70 Pro 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 35999,
    "originalPrice": 44999,
    "rating": 4.9,
    "reviewsCount": 29,
    "modelNumber": "Samsung Galaxy F70 Pro 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "108MP OIS main camera with 4K recording, 6000mAh battery, and Super AMOLED+ panel.",
    "description": "108MP OIS main camera with 4K recording, 6000mAh battery, and Super AMOLED+ panel. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy F70 Pro 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 35999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: 108MP OIS main camera with 4K recording, 6000mAh battery, and Super AMOLED+ panel.",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-46092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20F70%20Pro%205G%20(6/128GB%20|%208/128GB%20|%208/256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-a27-5g-6-128gb-8-128gb-8-256gb",
    "title": "Samsung Galaxy A27 5G (6/128GB | 8/128GB | 8/256GB)",
    "shortTitle": "Samsung Galaxy A27 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 33499,
    "originalPrice": 44999,
    "rating": 4.9,
    "reviewsCount": 36,
    "modelNumber": "Samsung Galaxy A27 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "120Hz Super AMOLED display, 50MP OIS camera, stereo speakers, and premium glass-like back.",
    "description": "120Hz Super AMOLED display, 50MP OIS camera, stereo speakers, and premium glass-like back. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy A27 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 33499,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: 120Hz Super AMOLED display, 50MP OIS camera, stereo speakers, and premium glass-like back.",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Badge: OIS Camera",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-18092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20A27%205G%20(6/128GB%20|%208/128GB%20|%208/256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-m56-5g-8gb-128gb-8gb-256gb",
    "title": "Samsung Galaxy M56 5G (8GB+128GB / 8GB+256GB)",
    "shortTitle": "Samsung Galaxy M56 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 27999,
    "originalPrice": 30999,
    "rating": 4.7,
    "reviewsCount": 31,
    "modelNumber": "Samsung Galaxy M56 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "120Hz Super AMOLED+ display, Snapdragon 7 Gen 1, 50MP front camera, and 45W charging.",
    "description": "120Hz Super AMOLED+ display, Snapdragon 7 Gen 1, 50MP front camera, and 45W charging. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy M56 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "8GB+128GB / 8GB+256GB",
        "price": 27999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: 120Hz Super AMOLED+ display, Snapdragon 7 Gen 1, 50MP front camera, and 45W charging.",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-48092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20M56%205G%20(8GB+128GB%20/%208GB+256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-a17-5g-6-128gb-8-128gb-8-256gb",
    "title": "Samsung Galaxy A17 5G (6/128GB | 8/128GB | 8/256GB)",
    "shortTitle": "Samsung Galaxy A17 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 27499,
    "originalPrice": 35999,
    "rating": 4.8,
    "reviewsCount": 35,
    "modelNumber": "Samsung Galaxy A17 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Super AMOLED 90Hz screen, 50MP triple camera with ultra-wide lens, and 6 OS upgrade guarantee.",
    "description": "Super AMOLED 90Hz screen, 50MP triple camera with ultra-wide lens, and 6 OS upgrade guarantee. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy A17 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 27499,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Super AMOLED 90Hz screen, 50MP triple camera with ultra-wide lens, and 6 OS upgrade guarantee.",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-17092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20A17%205G%20(6/128GB%20|%208/128GB%20|%208/256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-f56-5g-8gb-128gb-8gb-256gb",
    "title": "Samsung Galaxy F56 5G (8GB+128GB / 8GB+256GB)",
    "shortTitle": "Samsung Galaxy F56 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 24999,
    "originalPrice": 27999,
    "rating": 4.9,
    "reviewsCount": 30,
    "modelNumber": "Samsung Galaxy F56 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Ultra-thin 7.8mm vegan leather build, 50MP selfie camera, 50MP OIS rear camera, and 45W fast charge.",
    "description": "Ultra-thin 7.8mm vegan leather build, 50MP selfie camera, 50MP OIS rear camera, and 45W fast charge. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy F56 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "8GB+128GB / 8GB+256GB",
        "price": 24999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Highlights: Ultra-thin 7.8mm vegan leather build, 50MP selfie camera, 50MP OIS rear camera, and 45W fast charge.",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-47092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20F56%205G%20(8GB+128GB%20/%208GB+256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-f17-5g-4-128gb-6-128gb-8-128gb",
    "title": "Samsung Galaxy F17 5G (4/128GB | 6/128GB | 8/128GB)",
    "shortTitle": "Samsung Galaxy F17 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 22999,
    "originalPrice": 28999,
    "rating": 4.8,
    "reviewsCount": 20,
    "modelNumber": "Samsung Galaxy F17 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "FHD+ Super AMOLED 90Hz display, 6000mAh battery, and Voice Focus clear calling technology.",
    "description": "FHD+ Super AMOLED 90Hz display, 6000mAh battery, and Voice Focus clear calling technology. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy F17 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 22999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: FHD+ Super AMOLED 90Hz display, 6000mAh battery, and Voice Focus clear calling technology.",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-37092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20F17%205G%20(4/128GB%20|%206/128GB%20|%208/128GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-f36-5g-6-128gb-8-128gb-8-256gb",
    "title": "Samsung Galaxy F36 5G (6/128GB | 8/128GB | 8/256GB)",
    "shortTitle": "Samsung Galaxy F36 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 21999,
    "originalPrice": 27999,
    "rating": 4.7,
    "reviewsCount": 23,
    "modelNumber": "Samsung Galaxy F36 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "120Hz Super AMOLED screen, 50MP No Shake OIS camera, and 4 generations of Android upgrades.",
    "description": "120Hz Super AMOLED screen, 50MP No Shake OIS camera, and 4 generations of Android upgrades. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy F36 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 21999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: 120Hz Super AMOLED screen, 50MP No Shake OIS camera, and 4 generations of Android upgrades.",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-40092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20F36%205G%20(6/128GB%20|%208/128GB%20|%208/256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-m36-5g-6-128gb-8-128gb-8-256gb",
    "title": "Samsung Galaxy M36 5G (6/128GB | 8/128GB | 8/256GB)",
    "shortTitle": "Samsung Galaxy M36 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 21999,
    "originalPrice": 27999,
    "rating": 4.8,
    "reviewsCount": 24,
    "modelNumber": "Samsung Galaxy M36 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Corning Gorilla Glass Victus+ display protection, Dolby Atmos sound, and 6000mAh battery.",
    "description": "Corning Gorilla Glass Victus+ display protection, Dolby Atmos sound, and 6000mAh battery. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy M36 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 21999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Corning Gorilla Glass Victus+ display protection, Dolby Atmos sound, and 6000mAh battery.",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-41092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20M36%205G%20(6/128GB%20|%208/128GB%20|%208/256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-m55s-5g-8gb-128gb-8gb-256gb",
    "title": "Samsung Galaxy M55s 5G (8GB+128GB / 8GB+256GB)",
    "shortTitle": "Samsung Galaxy M55s 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 20999,
    "originalPrice": 23999,
    "rating": 4.9,
    "reviewsCount": 34,
    "modelNumber": "Samsung Galaxy M55s 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Fusion mesh design pattern, 120Hz Super AMOLED+ screen, 50MP selfie camera, and 45W charging.",
    "description": "Fusion mesh design pattern, 120Hz Super AMOLED+ screen, 50MP selfie camera, and 45W charging. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy M55s 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "8GB+128GB / 8GB+256GB",
        "price": 20999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Fusion mesh design pattern, 120Hz Super AMOLED+ screen, 50MP selfie camera, and 45W charging.",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-51092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20M55s%205G%20(8GB+128GB%20/%208GB+256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-a07-5g-4-128gb-6-128gb",
    "title": "Samsung Galaxy A07 5G (4/128GB / 6/128GB)",
    "shortTitle": "Samsung Galaxy A07 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 20499,
    "originalPrice": 23499,
    "rating": 4.7,
    "reviewsCount": 34,
    "modelNumber": "Samsung Galaxy A07 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Bright 6.6-inch 90Hz display, dual rear camera setup, and slim Key Island ergonomic frame.",
    "description": "Bright 6.6-inch 90Hz display, dual rear camera setup, and slim Key Island ergonomic frame. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy A07 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 20499,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Bright 6.6-inch 90Hz display, dual rear camera setup, and slim Key Island ergonomic frame.",
      "processor": "Badge: Next-Gen 5G",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-16092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20A07%205G%20(4/128GB%20/%206/128GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-m17-5g-4-128gb-6-128gb-8-128gb",
    "title": "Samsung Galaxy M17 5G (4/128GB | 6/128GB | 8/128GB)",
    "shortTitle": "Samsung Galaxy M17 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 19999,
    "originalPrice": 25999,
    "rating": 4.7,
    "reviewsCount": 27,
    "modelNumber": "Samsung Galaxy M17 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Super AMOLED display with Vision Booster, 50MP triple camera, and massive 6000mAh battery.",
    "description": "Super AMOLED display with Vision Booster, 50MP triple camera, and massive 6000mAh battery. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy M17 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 19999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Super AMOLED display with Vision Booster, 50MP triple camera, and massive 6000mAh battery.",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-44092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20M17%205G%20(4/128GB%20|%206/128GB%20|%208/128GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-a08-lte-4gb-64gb",
    "title": "Samsung Galaxy A08 LTE (4GB + 64GB)",
    "shortTitle": "Samsung Galaxy A08 LTE",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 18499,
    "originalPrice": 21274,
    "rating": 4.9,
    "reviewsCount": 32,
    "modelNumber": "Samsung Galaxy A08 LTE",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Modern floating camera design, enhanced processor, and 4 years of guaranteed OS updates.",
    "description": "Modern floating camera design, enhanced processor, and 4 years of guaranteed OS updates. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy A08 LTE",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "4GB + 64GB",
        "price": 18499,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Highlights: Modern floating camera design, enhanced processor, and 4 years of guaranteed OS updates.",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-14092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20A08%20LTE%20(4GB%20+%2064GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-f70e-5g-4gb-128gb-6gb-128gb",
    "title": "Samsung Galaxy F70e 5G (4GB+128GB / 6GB+128GB)",
    "shortTitle": "Samsung Galaxy F70e 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 18499,
    "originalPrice": 21499,
    "rating": 4.9,
    "reviewsCount": 21,
    "modelNumber": "Samsung Galaxy F70e 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Stitched vegan leather design, slim 7.8mm profile, 50MP OIS camera, and 45W fast charge.",
    "description": "Stitched vegan leather design, slim 7.8mm profile, 50MP OIS camera, and 45W fast charge. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy F70e 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "4GB+128GB / 6GB+128GB",
        "price": 18499,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Highlights: Stitched vegan leather design, slim 7.8mm profile, 50MP OIS camera, and 45W fast charge.",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-38092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20F70e%205G%20(4GB+128GB%20/%206GB+128GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-m17e-5g-4gb-128gb-6gb-128gb",
    "title": "Samsung Galaxy M17e 5G (4GB+128GB / 6GB+128GB)",
    "shortTitle": "Samsung Galaxy M17e 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 18499,
    "originalPrice": 21499,
    "rating": 4.9,
    "reviewsCount": 22,
    "modelNumber": "Samsung Galaxy M17e 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Long-life 6000mAh battery, 50MP AI camera, Knox Vault hardware security, and smooth 90Hz display.",
    "description": "Long-life 6000mAh battery, 50MP AI camera, Knox Vault hardware security, and smooth 90Hz display. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy M17e 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "4GB+128GB / 6GB+128GB",
        "price": 18499,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Long-life 6000mAh battery, 50MP AI camera, Knox Vault hardware security, and smooth 90Hz display.",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "Badge: Monster Battery"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-39092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20M17e%205G%20(4GB+128GB%20/%206GB+128GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-f08-lte-4gb-64gb",
    "title": "Samsung Galaxy F08 LTE (4GB + 64GB)",
    "shortTitle": "Samsung Galaxy F08 LTE",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 16999,
    "originalPrice": 19549,
    "rating": 4.9,
    "reviewsCount": 25,
    "modelNumber": "Samsung Galaxy F08 LTE",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "6.7-inch HD+ screen, 50MP dual camera, and leather pattern rear finish.",
    "description": "6.7-inch HD+ screen, 50MP dual camera, and leather pattern rear finish. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy F08 LTE",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "4GB + 64GB",
        "price": 16999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: 6.7-inch HD+ screen, 50MP dual camera, and leather pattern rear finish.",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "Badge: Value Battery"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-42092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20F08%20LTE%20(4GB%20+%2064GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-m08-lte-4gb-64gb",
    "title": "Samsung Galaxy M08 LTE (4GB + 64GB)",
    "shortTitle": "Samsung Galaxy M08 LTE",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 16999,
    "originalPrice": 19549,
    "rating": 4.9,
    "reviewsCount": 26,
    "modelNumber": "Samsung Galaxy M08 LTE",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Clean One UI core experience, 5000mAh battery, 25W fast charging support, and face unlock.",
    "description": "Clean One UI core experience, 5000mAh battery, 25W fast charging support, and face unlock. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy M08 LTE",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "4GB + 64GB",
        "price": 16999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "Highlights: Clean One UI core experience, 5000mAh battery, 25W fast charging support, and face unlock."
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-43092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20M08%20LTE%20(4GB%20+%2064GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-a06-5g-4-64gb-4-128gb-6-128gb",
    "title": "Samsung Galaxy A06 5G (4/64GB | 4/128GB | 6/128GB)",
    "shortTitle": "Samsung Galaxy A06 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 15999,
    "originalPrice": 19999,
    "rating": 4.9,
    "reviewsCount": 33,
    "modelNumber": "Samsung Galaxy A06 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "High-speed 5G connectivity for all, featuring 90Hz display and Samsung Knox Vault security.",
    "description": "High-speed 5G connectivity for all, featuring 90Hz display and Samsung Knox Vault security. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy A06 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 15999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: High-speed 5G connectivity for all, featuring 90Hz display and Samsung Knox Vault security.",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-15092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20A06%205G%20(4/64GB%20|%204/128GB%20|%206/128GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-m34-5g-6gb-128gb",
    "title": "Samsung Galaxy M34 5G (6GB/128GB)",
    "shortTitle": "Samsung Galaxy M34 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 14999,
    "originalPrice": 18999,
    "rating": 4.8,
    "reviewsCount": 19,
    "modelNumber": "SM-M346B",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "6000mAh Battery, 120Hz sAMOLED Display, 50MP OIS Camera",
    "description": "6000mAh Battery, 120Hz sAMOLED Display, 50MP OIS Camera Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy M34 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "6GB/128GB",
        "price": 14999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "6.5\" 120Hz sAMOLED",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "50MP No Shake OIS Camera",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "6000mAh Monster Battery"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-1092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20M34%205G%20(6GB/128GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-a07-lte-4gb-64gb",
    "title": "Samsung Galaxy A07 LTE (4GB + 64GB)",
    "shortTitle": "Samsung Galaxy A07 LTE",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 13499,
    "originalPrice": 15524,
    "rating": 4.8,
    "reviewsCount": 31,
    "modelNumber": "Samsung Galaxy A07 LTE",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Reliable entry phone with large Infinity-U screen, 50MP camera, and 5000mAh battery.",
    "description": "Reliable entry phone with large Infinity-U screen, 50MP camera, and 5000mAh battery. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy A07 LTE",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "4GB + 64GB",
        "price": 13499,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Reliable entry phone with large Infinity-U screen, 50MP camera, and 5000mAh battery.",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-13092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20A07%20LTE%20(4GB%20+%2064GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-f06-5g-4-64gb-4-128gb-6-128gb",
    "title": "Samsung Galaxy F06 5G (4/64GB | 4/128GB | 6/128GB)",
    "shortTitle": "Samsung Galaxy F06 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 12499,
    "originalPrice": 15999,
    "rating": 4.8,
    "reviewsCount": 32,
    "modelNumber": "Samsung Galaxy F06 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Affordable 5G connectivity with MediaTek Dimensity chipset, 5000mAh battery, and dual cameras.",
    "description": "Affordable 5G connectivity with MediaTek Dimensity chipset, 5000mAh battery, and dual cameras. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy F06 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 12499,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Highlights: Affordable 5G connectivity with MediaTek Dimensity chipset, 5000mAh battery, and dual cameras.",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-49092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20F06%205G%20(4/64GB%20|%204/128GB%20|%206/128GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "samsung-samsung-galaxy-m06-5g-4-64gb-4-128gb-6-128gb",
    "title": "Samsung Galaxy M06 5G (4/64GB | 4/128GB | 6/128GB)",
    "shortTitle": "Samsung Galaxy M06 5G",
    "category": "smartphones",
    "brand": "Samsung",
    "price": 12499,
    "originalPrice": 15999,
    "rating": 4.9,
    "reviewsCount": 33,
    "modelNumber": "Samsung Galaxy M06 5G",
    "provenanceBadge": "Authorized Samsung Unit",
    "tagline": "Dual 5G SIM standby, large HD+ display, side fingerprint sensor, and clean design.",
    "description": "Dual 5G SIM standby, large HD+ display, side fingerprint sensor, and clean design. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Samsung Galaxy M06 5G",
        "label": "Store Unit",
        "src": "assets/images/samsung/Samsung_Galaxy_A06_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 12499,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Dual 5G SIM standby, large HD+ display, side fingerprint sensor, and clean design.",
      "processor": "Official Samsung Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-SAM-50092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Samsung%20Galaxy%20M06%205G%20(4/64GB%20|%204/128GB%20|%206/128GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "vivo-vivo-x-fold6-12gb-512gb",
    "title": "vivo X Fold6 (12GB + 512GB)",
    "shortTitle": "vivo X Fold6",
    "category": "smartphones",
    "brand": "Vivo",
    "price": 219999,
    "originalPrice": 252999,
    "rating": 4.9,
    "reviewsCount": 19,
    "modelNumber": "vivo X Fold6",
    "provenanceBadge": "Authorized Vivo Unit",
    "tagline": "Ultra-slim horizontal foldable flagship with 200MP ZEISS optics and underwater folding resistance.",
    "description": "Ultra-slim horizontal foldable flagship with 200MP ZEISS optics and underwater folding resistance. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/vivo/vivo_X300_FE.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "vivo X Fold6",
        "label": "Store Unit",
        "src": "assets/images/vivo/vivo_X300_FE.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "12GB + 512GB",
        "price": 219999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Vivo Flagship / Mid-Tier Optimized Silicon",
      "camera": "Highlights: Ultra-slim horizontal foldable flagship with 200MP ZEISS optics and underwater folding resistance.",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-VIV-71092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20vivo%20X%20Fold6%20(12GB%20+%20512GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "vivo-vivo-x300-ultra-master-edition-16gb-512gb",
    "title": "vivo X300 Ultra Master Edition (16GB + 512GB)",
    "shortTitle": "vivo X300 Ultra Master Edition",
    "category": "smartphones",
    "brand": "Vivo",
    "price": 209999,
    "originalPrice": 241499,
    "rating": 4.8,
    "reviewsCount": 21,
    "modelNumber": "vivo X300 Ultra Master Edition",
    "provenanceBadge": "Authorized Vivo Unit",
    "tagline": "Ultimate professional imaging flagship with 1-inch sensor, 200MP APO telephoto and custom kit.",
    "description": "Ultimate professional imaging flagship with 1-inch sensor, 200MP APO telephoto and custom kit. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/vivo/vivo_X300_FE.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "vivo X300 Ultra Master Edition",
        "label": "Store Unit",
        "src": "assets/images/vivo/vivo_X300_FE.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "16GB + 512GB",
        "price": 209999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Ultimate professional imaging flagship with 1-inch sensor, 200MP APO telephoto and custom kit.",
      "processor": "Official Vivo Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-VIV-73092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20vivo%20X300%20Ultra%20Master%20Edition%20(16GB%20+%20512GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "vivo-vivo-x300-ultra-16gb-512gb",
    "title": "vivo X300 Ultra (16GB + 512GB)",
    "shortTitle": "vivo X300 Ultra",
    "category": "smartphones",
    "brand": "Vivo",
    "price": 159999,
    "originalPrice": 183999,
    "rating": 4.9,
    "reviewsCount": 22,
    "modelNumber": "vivo X300 Ultra",
    "provenanceBadge": "Authorized Vivo Unit",
    "tagline": "Pro-grade photography powerhouse with advanced telephoto macro and Dimensity top-tier chipset.",
    "description": "Pro-grade photography powerhouse with advanced telephoto macro and Dimensity top-tier chipset. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/vivo/vivo_X300_FE.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "vivo X300 Ultra",
        "label": "Store Unit",
        "src": "assets/images/vivo/vivo_X300_FE.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "16GB + 512GB",
        "price": 159999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Highlights: Pro-grade photography powerhouse with advanced telephoto macro and Dimensity top-tier chipset.",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-VIV-74092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20vivo%20X300%20Ultra%20(16GB%20+%20512GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "vivo-vivo-x-fold5-16gb-512gb",
    "title": "vivo X Fold5 (16GB + 512GB)",
    "shortTitle": "vivo X Fold5",
    "category": "smartphones",
    "brand": "Vivo",
    "price": 149999,
    "originalPrice": 172499,
    "rating": 4.7,
    "reviewsCount": 20,
    "modelNumber": "vivo X Fold5",
    "provenanceBadge": "Authorized Vivo Unit",
    "tagline": "High-performance foldable phone featuring dual LTPO AMOLED displays and ZEISS T* lens coating.",
    "description": "High-performance foldable phone featuring dual LTPO AMOLED displays and ZEISS T* lens coating. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/vivo/vivo_X300_FE.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "vivo X Fold5",
        "label": "Store Unit",
        "src": "assets/images/vivo/vivo_X300_FE.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "16GB + 512GB",
        "price": 149999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: High-performance foldable phone featuring dual LTPO AMOLED displays and ZEISS T* lens coating.",
      "processor": "Official Vivo Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-VIV-72092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20vivo%20X%20Fold5%20(16GB%20+%20512GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "vivo-vivo-x300-pro-16gb-512gb",
    "title": "vivo X300 Pro (16GB + 512GB)",
    "shortTitle": "vivo X300 Pro",
    "category": "smartphones",
    "brand": "Vivo",
    "price": 119999,
    "originalPrice": 137999,
    "rating": 4.9,
    "reviewsCount": 23,
    "modelNumber": "vivo X300 Pro",
    "provenanceBadge": "Authorized Vivo Unit",
    "tagline": "ZEISS co-engineered imaging flagship with periscope telephoto, 6000mAh battery, and 90W fast charging.",
    "description": "ZEISS co-engineered imaging flagship with periscope telephoto, 6000mAh battery, and 90W fast charging. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/vivo/vivo_X300_FE.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "vivo X300 Pro",
        "label": "Store Unit",
        "src": "assets/images/vivo/vivo_X300_FE.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "16GB + 512GB",
        "price": 119999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Vivo Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "Highlights: ZEISS co-engineered imaging flagship with periscope telephoto, 6000mAh battery, and 90W fast charging."
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-VIV-75092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20vivo%20X300%20Pro%20(16GB%20+%20512GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "vivo-vivo-x300-fe-8gb-256gb-12gb-256gb-12gb-512gb",
    "title": "vivo X300 FE (8GB+256GB / 12GB+256GB / 12GB+512GB)",
    "shortTitle": "vivo X300 FE",
    "category": "smartphones",
    "brand": "Vivo",
    "price": 89999,
    "originalPrice": 99999,
    "rating": 4.7,
    "reviewsCount": 24,
    "modelNumber": "vivo X300 FE",
    "provenanceBadge": "Authorized Vivo Unit",
    "tagline": "Accessible flagship experience delivering premium ZEISS portraits and top-tier display quality.",
    "description": "Accessible flagship experience delivering premium ZEISS portraits and top-tier display quality. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/vivo/vivo_X300_FE.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "vivo X300 FE",
        "label": "Store Unit",
        "src": "assets/images/vivo/vivo_X300_FE.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "8GB+256GB / 12GB+256GB / 12GB+512GB",
        "price": 89999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Accessible flagship experience delivering premium ZEISS portraits and top-tier display quality.",
      "processor": "Official Vivo Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-VIV-76092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20vivo%20X300%20FE%20(8GB+256GB%20/%2012GB+256GB%20/%2012GB+512GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "vivo-vivo-v70-elite-8gb-256gb-12gb-256gb",
    "title": "vivo V70 Elite (8GB+256GB / 12GB+256GB)",
    "shortTitle": "vivo V70 Elite",
    "category": "smartphones",
    "brand": "Vivo",
    "price": 66999,
    "originalPrice": 71999,
    "rating": 4.9,
    "reviewsCount": 26,
    "modelNumber": "vivo V70 Elite",
    "provenanceBadge": "Authorized Vivo Unit",
    "tagline": "Refined glass and metal design with Snapdragon 7 Gen series processor and telephoto portrait lens.",
    "description": "Refined glass and metal design with Snapdragon 7 Gen series processor and telephoto portrait lens. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/vivo/vivo_V70.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "vivo V70 Elite",
        "label": "Store Unit",
        "src": "assets/images/vivo/vivo_V70.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "8GB+256GB / 12GB+256GB",
        "price": 66999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Highlights: Refined glass and metal design with Snapdragon 7 Gen series processor and telephoto portrait lens.",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-VIV-78092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20vivo%20V70%20Elite%20(8GB+256GB%20/%2012GB+256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "vivo-vivo-v80-8gb-128gb-8gb-256gb-8gb-512gb",
    "title": "vivo V80 (8GB+128GB / 8GB+256GB / 8GB+512GB)",
    "shortTitle": "vivo V80",
    "category": "smartphones",
    "brand": "Vivo",
    "price": 62999,
    "originalPrice": 79999,
    "rating": 4.8,
    "reviewsCount": 25,
    "modelNumber": "vivo V80",
    "provenanceBadge": "Authorized Vivo Unit",
    "tagline": "Studio-grade portrait flagship with smart Aura Light, ultra-slim body, and 50MP front/rear cameras.",
    "description": "Studio-grade portrait flagship with smart Aura Light, ultra-slim body, and 50MP front/rear cameras. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/vivo/vivo_V80.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "vivo V80",
        "label": "Store Unit",
        "src": "assets/images/vivo/vivo_V80.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "8GB+128GB / 8GB+256GB / 8GB+512GB",
        "price": 62999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Vivo Flagship / Mid-Tier Optimized Silicon",
      "camera": "Highlights: Studio-grade portrait flagship with smart Aura Light, ultra-slim body, and 50MP front/rear cameras.",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-VIV-77092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20vivo%20V80%20(8GB+128GB%20/%208GB+256GB%20/%208GB+512GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "vivo-vivo-v70-8gb-256gb-12gb-256gb",
    "title": "vivo V70 (8GB+256GB / 12GB+256GB)",
    "shortTitle": "vivo V70",
    "category": "smartphones",
    "brand": "Vivo",
    "price": 59999,
    "originalPrice": 64999,
    "rating": 4.9,
    "reviewsCount": 27,
    "modelNumber": "vivo V70",
    "provenanceBadge": "Authorized Vivo Unit",
    "tagline": "Ultra-slim 3D curved AMOLED display with ZEISS natural color imaging and all-day battery life.",
    "description": "Ultra-slim 3D curved AMOLED display with ZEISS natural color imaging and all-day battery life. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/vivo/vivo_V70.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "vivo V70",
        "label": "Store Unit",
        "src": "assets/images/vivo/vivo_V70.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "8GB+256GB / 12GB+256GB",
        "price": 59999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Ultra-slim 3D curved AMOLED display with ZEISS natural color imaging and all-day battery life.",
      "processor": "Official Vivo Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-VIV-79092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20vivo%20V70%20(8GB+256GB%20/%2012GB+256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "vivo-vivo-v70-fe-8gb-128gb-8gb-256gb-12gb-256gb",
    "title": "vivo V70 FE (8GB+128GB / 8GB+256GB / 12GB+256GB)",
    "shortTitle": "vivo V70 FE",
    "category": "smartphones",
    "brand": "Vivo",
    "price": 44999,
    "originalPrice": 51999,
    "rating": 4.7,
    "reviewsCount": 28,
    "modelNumber": "vivo V70 FE",
    "provenanceBadge": "Authorized Vivo Unit",
    "tagline": "Feature-packed V-series offering vibrant AMOLED screen, fast charging, and dual 50MP cameras.",
    "description": "Feature-packed V-series offering vibrant AMOLED screen, fast charging, and dual 50MP cameras. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/vivo/vivo_V70.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "vivo V70 FE",
        "label": "Store Unit",
        "src": "assets/images/vivo/vivo_V70.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "8GB+128GB / 8GB+256GB / 12GB+256GB",
        "price": 44999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Feature-packed V-series offering vibrant AMOLED screen, fast charging, and dual 50MP cameras.",
      "processor": "Official Vivo Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-VIV-80092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20vivo%20V70%20FE%20(8GB+128GB%20/%208GB+256GB%20/%2012GB+256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "vivo-vivo-s2-5g-8gb-128gb-8gb-256gb",
    "title": "vivo S2 5G (8GB+128GB / 8GB+256GB)",
    "shortTitle": "vivo S2 5G",
    "category": "smartphones",
    "brand": "Vivo",
    "price": 42999,
    "originalPrice": 48999,
    "rating": 4.8,
    "reviewsCount": 29,
    "modelNumber": "vivo S2 5G",
    "provenanceBadge": "Authorized Vivo Unit",
    "tagline": "Aesthetic style leader with dual soft spotlight, front autofocus 50MP selfie shooter, and sleek chassis.",
    "description": "Aesthetic style leader with dual soft spotlight, front autofocus 50MP selfie shooter, and sleek chassis. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/vivo/vivo_S2_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "vivo S2 5G",
        "label": "Store Unit",
        "src": "assets/images/vivo/vivo_S2_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "8GB+128GB / 8GB+256GB",
        "price": 42999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Vivo Flagship / Mid-Tier Optimized Silicon",
      "camera": "Highlights: Aesthetic style leader with dual soft spotlight, front autofocus 50MP selfie shooter, and sleek chassis.",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-VIV-81092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20vivo%20S2%205G%20(8GB+128GB%20/%208GB+256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "vivo-vivo-t5-pro-5g-8gb-128gb-8gb-256gb",
    "title": "vivo T5 Pro 5G (8GB+128GB / 8GB+256GB)",
    "shortTitle": "vivo T5 Pro 5G",
    "category": "smartphones",
    "brand": "Vivo",
    "price": 41999,
    "originalPrice": 46999,
    "rating": 4.9,
    "reviewsCount": 39,
    "modelNumber": "vivo T5 Pro 5G",
    "provenanceBadge": "Authorized Vivo Unit",
    "tagline": "Curved 3D AMOLED display, Sony OIS camera, Snapdragon performance, and 80W FlashCharge.",
    "description": "Curved 3D AMOLED display, Sony OIS camera, Snapdragon performance, and 80W FlashCharge. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/vivo/vivo_T5.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "vivo T5 Pro 5G",
        "label": "Store Unit",
        "src": "assets/images/vivo/vivo_T5.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "8GB+128GB / 8GB+256GB",
        "price": 41999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Curved 3D AMOLED display, Sony OIS camera, Snapdragon performance, and 80W FlashCharge.",
      "processor": "Official Vivo Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-VIV-91092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20vivo%20T5%20Pro%205G%20(8GB+128GB%20/%208GB+256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "vivo-vivo-s2-fe-6gb-128gb-8gb-128gb",
    "title": "vivo S2 FE (6GB+128GB / 8GB+128GB)",
    "shortTitle": "vivo S2 FE",
    "category": "smartphones",
    "brand": "Vivo",
    "price": 38999,
    "originalPrice": 42999,
    "rating": 4.9,
    "reviewsCount": 30,
    "modelNumber": "vivo S2 FE",
    "provenanceBadge": "Authorized Vivo Unit",
    "tagline": "Youthful design with bright AMOLED display, eye-catching pastel gradient finishes, and fast charge.",
    "description": "Youthful design with bright AMOLED display, eye-catching pastel gradient finishes, and fast charge. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/vivo/vivo_S2_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "vivo S2 FE",
        "label": "Store Unit",
        "src": "assets/images/vivo/vivo_S2_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "6GB+128GB / 8GB+128GB",
        "price": 38999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Youthful design with bright AMOLED display, eye-catching pastel gradient finishes, and fast charge.",
      "processor": "Official Vivo Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-VIV-82092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20vivo%20S2%20FE%20(6GB+128GB%20/%208GB+128GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "vivo-vivo-y51-pro-8gb-128gb-8gb-256gb",
    "title": "vivo Y51 Pro (8GB+128GB / 8GB+256GB)",
    "shortTitle": "vivo Y51 Pro",
    "category": "smartphones",
    "brand": "Vivo",
    "price": 34999,
    "originalPrice": 37999,
    "rating": 4.7,
    "reviewsCount": 32,
    "modelNumber": "vivo Y51 Pro",
    "provenanceBadge": "Authorized Vivo Unit",
    "tagline": "Built for longevity with massive battery capacity, military-grade shock resistance, and 5G connectivity.",
    "description": "Built for longevity with massive battery capacity, military-grade shock resistance, and 5G connectivity. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/vivo/vivo_Y51_Pro.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "vivo Y51 Pro",
        "label": "Store Unit",
        "src": "assets/images/vivo/vivo_Y51_Pro.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "8GB+128GB / 8GB+256GB",
        "price": 34999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Vivo Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "Highlights: Built for longevity with massive battery capacity, military-grade shock resistance, and 5G connectivity."
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-VIV-84092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20vivo%20Y51%20Pro%20(8GB+128GB%20/%208GB+256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "vivo-vivo-t5-6gb-128gb-8gb-128gb-8gb-256gb-12gb-256gb",
    "title": "vivo T5 (6GB+128GB / 8GB+128GB / 8GB+256GB / 12GB+256GB)",
    "shortTitle": "vivo T5",
    "category": "smartphones",
    "brand": "Vivo",
    "price": 34999,
    "originalPrice": 49999,
    "rating": 4.9,
    "reviewsCount": 38,
    "modelNumber": "vivo T5",
    "provenanceBadge": "Authorized Vivo Unit",
    "tagline": "Gaming and speed centric phone powered by MediaTek Dimensity 7000-series with AMOLED 120Hz display.",
    "description": "Gaming and speed centric phone powered by MediaTek Dimensity 7000-series with AMOLED 120Hz display. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/vivo/vivo_T5.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "vivo T5",
        "label": "Store Unit",
        "src": "assets/images/vivo/vivo_T5.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "6GB+128GB / 8GB+128GB / 8GB+256GB / 12GB+256GB",
        "price": 34999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Gaming and speed centric phone powered by MediaTek Dimensity 7000-series with AMOLED 120Hz display.",
      "processor": "Official Vivo Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-VIV-90092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20vivo%20T5%20(6GB+128GB%20/%208GB+128GB%20/%208GB+256GB%20/%2012GB+256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "vivo-vivo-y400-8gb-128gb-8gb-256gb",
    "title": "vivo Y400 (8GB+128GB / 8GB+256GB)",
    "shortTitle": "vivo Y400",
    "category": "smartphones",
    "brand": "Vivo",
    "price": 31999,
    "originalPrice": 34999,
    "rating": 4.9,
    "reviewsCount": 31,
    "modelNumber": "vivo Y400",
    "provenanceBadge": "Authorized Vivo Unit",
    "tagline": "Durable 5G all-rounder with large 6000mAh battery, stereo speakers, and 50MP Sony main sensor.",
    "description": "Durable 5G all-rounder with large 6000mAh battery, stereo speakers, and 50MP Sony main sensor. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/vivo/vivo_Y400.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "vivo Y400",
        "label": "Store Unit",
        "src": "assets/images/vivo/vivo_Y400.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "8GB+128GB / 8GB+256GB",
        "price": 31999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Vivo Flagship / Mid-Tier Optimized Silicon",
      "camera": "Highlights: Durable 5G all-rounder with large 6000mAh battery, stereo speakers, and 50MP Sony main sensor.",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-VIV-83092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20vivo%20Y400%20(8GB+128GB%20/%208GB+256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "vivo-vivo-t5x-5g-6gb-128gb-8gb-128gb-8gb-256gb",
    "title": "vivo T5x 5G (6GB+128GB / 8GB+128GB / 8GB+256GB)",
    "shortTitle": "vivo T5x 5G",
    "category": "smartphones",
    "brand": "Vivo",
    "price": 27999,
    "originalPrice": 34999,
    "rating": 4.7,
    "reviewsCount": 40,
    "modelNumber": "vivo T5x 5G",
    "provenanceBadge": "Authorized Vivo Unit",
    "tagline": "Massive 6000mAh battery paired with fast 4nm 5G chipset and audio booster dual speakers.",
    "description": "Massive 6000mAh battery paired with fast 4nm 5G chipset and audio booster dual speakers. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/vivo/vivo_T5x_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "vivo T5x 5G",
        "label": "Store Unit",
        "src": "assets/images/vivo/vivo_T5x_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "6GB+128GB / 8GB+128GB / 8GB+256GB",
        "price": 27999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Highlights: Massive 6000mAh battery paired with fast 4nm 5G chipset and audio booster dual speakers.",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-VIV-92092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20vivo%20T5x%205G%20(6GB+128GB%20/%208GB+128GB%20/%208GB+256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "vivo-vivo-y31t-5g-4gb-128gb-6gb-128gb-6gb-256gb",
    "title": "vivo Y31T 5G (4GB+128GB / 6GB+128GB / 6GB+256GB)",
    "shortTitle": "vivo Y31T 5G",
    "category": "smartphones",
    "brand": "Vivo",
    "price": 26999,
    "originalPrice": 34999,
    "rating": 4.9,
    "reviewsCount": 34,
    "modelNumber": "vivo Y31T 5G",
    "provenanceBadge": "Authorized Vivo Unit",
    "tagline": "Turbocharged budget 5G phone designed with high-efficiency chipset and ultra-long battery backup.",
    "description": "Turbocharged budget 5G phone designed with high-efficiency chipset and ultra-long battery backup. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/vivo/vivo_Y31T_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "vivo Y31T 5G",
        "label": "Store Unit",
        "src": "assets/images/vivo/vivo_Y31T_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "4GB+128GB / 6GB+128GB / 6GB+256GB",
        "price": 26999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Highlights: Turbocharged budget 5G phone designed with high-efficiency chipset and ultra-long battery backup.",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-VIV-86092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20vivo%20Y31T%205G%20(4GB+128GB%20/%206GB+128GB%20/%206GB+256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "vivo-vivo-y21-5g-4gb-64gb-4gb-128gb-6gb-128gb-8gb-128gb",
    "title": "vivo Y21 5G (4GB+64GB / 4GB+128GB / 6GB+128GB / 8GB+128GB)",
    "shortTitle": "vivo Y21 5G",
    "category": "smartphones",
    "brand": "Vivo",
    "price": 20999,
    "originalPrice": 27999,
    "rating": 4.9,
    "reviewsCount": 35,
    "modelNumber": "vivo Y21 5G",
    "provenanceBadge": "Authorized Vivo Unit",
    "tagline": "Popular slim form factor with flat edges, side fingerprint scanner, and 5G support.",
    "description": "Popular slim form factor with flat edges, side fingerprint scanner, and 5G support. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/vivo/vivo_Y21_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "vivo Y21 5G",
        "label": "Store Unit",
        "src": "assets/images/vivo/vivo_Y21_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "4GB+64GB / 4GB+128GB / 6GB+128GB / 8GB+128GB",
        "price": 20999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Vivo Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-VIV-87092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20vivo%20Y21%205G%20(4GB+64GB%20/%204GB+128GB%20/%206GB+128GB%20/%208GB+128GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "vivo-vivo-y31-4gb-128gb-6gb-128gb-6gb-256gb",
    "title": "vivo Y31 (4GB+128GB / 6GB+128GB / 6GB+256GB)",
    "shortTitle": "vivo Y31",
    "category": "smartphones",
    "brand": "Vivo",
    "price": 19999,
    "originalPrice": 31999,
    "rating": 4.8,
    "reviewsCount": 33,
    "modelNumber": "vivo Y31",
    "provenanceBadge": "Authorized Vivo Unit",
    "tagline": "Smooth 120Hz display, clean Funtouch OS interface, and reliable everyday multitasking.",
    "description": "Smooth 120Hz display, clean Funtouch OS interface, and reliable everyday multitasking. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/vivo/vivo_Y31.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "vivo Y31",
        "label": "Store Unit",
        "src": "assets/images/vivo/vivo_Y31.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "4GB+128GB / 6GB+128GB / 6GB+256GB",
        "price": 19999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Smooth 120Hz display, clean Funtouch OS interface, and reliable everyday multitasking.",
      "processor": "Official Vivo Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-VIV-85092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20vivo%20Y31%20(4GB+128GB%20/%206GB+128GB%20/%206GB+256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "vivo-vivo-y11-5g-4gb-64gb-4gb-128gb",
    "title": "vivo Y11 5G (4GB+64GB / 4GB+128GB)",
    "shortTitle": "vivo Y11 5G",
    "category": "smartphones",
    "brand": "Vivo",
    "price": 18999,
    "originalPrice": 22499,
    "rating": 4.7,
    "reviewsCount": 36,
    "modelNumber": "vivo Y11 5G",
    "provenanceBadge": "Authorized Vivo Unit",
    "tagline": "Accessible entry-level 5G smartphone with clear sunlight display and long-lasting 5000mAh battery.",
    "description": "Accessible entry-level 5G smartphone with clear sunlight display and long-lasting 5000mAh battery. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/vivo/vivo_Y11_5G.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "vivo Y11 5G",
        "label": "Store Unit",
        "src": "assets/images/vivo/vivo_Y11_5G.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "4GB+64GB / 4GB+128GB",
        "price": 18999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Accessible entry-level 5G smartphone with clear sunlight display and long-lasting 5000mAh battery.",
      "processor": "Official Vivo Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-VIV-88092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20vivo%20Y11%205G%20(4GB+64GB%20/%204GB+128GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "vivo-vivo-t5-lite-5g-4gb-64gb-4gb-128gb-6gb-128gb-6gb-256gb",
    "title": "vivo T5 Lite 5G (4GB+64GB / 4GB+128GB / 6GB+128GB / 6GB+256GB)",
    "shortTitle": "vivo T5 Lite 5G",
    "category": "smartphones",
    "brand": "Vivo",
    "price": 17999,
    "originalPrice": 26999,
    "rating": 4.8,
    "reviewsCount": 41,
    "modelNumber": "vivo T5 Lite 5G",
    "provenanceBadge": "Authorized Vivo Unit",
    "tagline": "Fast 5G performance at an accessible price point with slim profile and splash resistance.",
    "description": "Fast 5G performance at an accessible price point with slim profile and splash resistance. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/vivo/vivo_T5.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "vivo T5 Lite 5G",
        "label": "Store Unit",
        "src": "assets/images/vivo/vivo_T5.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "4GB+64GB / 4GB+128GB / 6GB+128GB / 6GB+256GB",
        "price": 17999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Vivo Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-VIV-93092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20vivo%20T5%20Lite%205G%20(4GB+64GB%20/%204GB+128GB%20/%206GB+128GB%20/%206GB+256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "vivo-vivo-t4-lite-4gb-64gb-4gb-128gb-6gb-128gb-6gb-256gb",
    "title": "vivo T4 Lite (4GB+64GB / 4GB+128GB / 6GB+128GB / 6GB+256GB)",
    "shortTitle": "vivo T4 Lite",
    "category": "smartphones",
    "brand": "Vivo",
    "price": 16999,
    "originalPrice": 23999,
    "rating": 4.9,
    "reviewsCount": 42,
    "modelNumber": "vivo T4 Lite",
    "provenanceBadge": "Authorized Vivo Unit",
    "tagline": "Clean design with reliable daily performance, robust battery life, and smooth refresh rate.",
    "description": "Clean design with reliable daily performance, robust battery life, and smooth refresh rate. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/vivo/vivo_T4_Lite.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "vivo T4 Lite",
        "label": "Store Unit",
        "src": "assets/images/vivo/vivo_T4_Lite.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "4GB+64GB / 4GB+128GB / 6GB+128GB / 6GB+256GB",
        "price": 16999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Vivo Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "Highlights: Clean design with reliable daily performance, robust battery life, and smooth refresh rate."
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-VIV-94092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20vivo%20T4%20Lite%20(4GB+64GB%20/%204GB+128GB%20/%206GB+128GB%20/%206GB+256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "vivo-vivo-y05-4gb-64gb",
    "title": "vivo Y05 (4GB+64GB)",
    "shortTitle": "vivo Y05",
    "category": "smartphones",
    "brand": "Vivo",
    "price": 15999,
    "originalPrice": 18399,
    "rating": 4.8,
    "reviewsCount": 37,
    "modelNumber": "vivo Y05",
    "provenanceBadge": "Authorized Vivo Unit",
    "tagline": "Durable budget smartphone featuring expandable storage, modern matte finish, and all-day power.",
    "description": "Durable budget smartphone featuring expandable storage, modern matte finish, and all-day power. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/vivo/vivo_Y05.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "vivo Y05",
        "label": "Store Unit",
        "src": "assets/images/vivo/vivo_Y05.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "4GB+64GB",
        "price": 15999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Vivo Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-VIV-89092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20vivo%20Y05%20(4GB+64GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "vivo-vivo-t5e-4gb-64gb",
    "title": "vivo T5e (4GB+64GB)",
    "shortTitle": "vivo T5e",
    "category": "smartphones",
    "brand": "Vivo",
    "price": 13999,
    "originalPrice": 16099,
    "rating": 4.9,
    "reviewsCount": 43,
    "modelNumber": "vivo T5e",
    "provenanceBadge": "Authorized Vivo Unit",
    "tagline": "Most affordable 5G entry in the T-series lineup offering solid battery and clear display.",
    "description": "Most affordable 5G entry in the T-series lineup offering solid battery and clear display. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/vivo/vivo_T5e.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "vivo T5e",
        "label": "Store Unit",
        "src": "assets/images/vivo/vivo_T5e.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "4GB+64GB",
        "price": 13999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Most affordable 5G entry in the T-series lineup offering solid battery and clear display.",
      "processor": "Official Vivo Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-VIV-95092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20vivo%20T5e%20(4GB+64GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "motorola-motorola-razr-fold-12-256gb-16-512gb-fifa-edition",
    "title": "Motorola Razr Fold (12/256GB / 16/512GB / FIFA Edition)",
    "shortTitle": "Motorola Razr Fold",
    "category": "smartphones",
    "brand": "Motorola",
    "price": 149999,
    "originalPrice": 169999,
    "rating": 4.9,
    "reviewsCount": 18,
    "modelNumber": "Motorola Razr Fold",
    "provenanceBadge": "Authorized Motorola Unit",
    "tagline": "Motorola's book-style horizontal foldable featuring dual stylus support, carbon-fiber hinge, and FIFA collector edition.",
    "description": "Motorola's book-style horizontal foldable featuring dual stylus support, carbon-fiber hinge, and FIFA collector edition. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/motorola/Motorola_Razr_60.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Motorola Razr Fold",
        "label": "Store Unit",
        "src": "assets/images/motorola/Motorola_Razr_60.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 149999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Motorola Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-MOT-70092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Motorola%20Razr%20Fold%20(12/256GB%20/%2016/512GB%20/%20FIFA%20Edition).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "motorola-motorola-razr-60-ultra-16gb-512gb",
    "title": "Motorola Razr 60 Ultra (16GB + 512GB)",
    "shortTitle": "Motorola Razr 60 Ultra",
    "category": "smartphones",
    "brand": "Motorola",
    "price": 79999,
    "originalPrice": 89599,
    "rating": 4.8,
    "reviewsCount": 52,
    "modelNumber": "Motorola Razr 60 Ultra",
    "provenanceBadge": "Authorized Motorola Unit",
    "tagline": "Largest 4.0-inch 165Hz cover screen, Snapdragon 8 Gen 3/4 flagship chip, and 50MP telephoto camera.",
    "description": "Largest 4.0-inch 165Hz cover screen, Snapdragon 8 Gen 3/4 flagship chip, and 50MP telephoto camera. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/motorola/Motorola_Razr_60.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Motorola Razr 60 Ultra",
        "label": "Store Unit",
        "src": "assets/images/motorola/Motorola_Razr_60.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "16GB + 512GB",
        "price": 79999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Largest 4.0-inch 165Hz cover screen, Snapdragon 8 Gen 3/4 flagship chip, and 50MP telephoto camera.",
      "processor": "Official Motorola Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-MOT-69092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Motorola%20Razr%2060%20Ultra%20(16GB%20+%20512GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "motorola-motorola-signature-12-256gb-16-512gb-16-1tb",
    "title": "Motorola Signature (12/256GB / 16/512GB / 16/1TB)",
    "shortTitle": "Motorola Signature",
    "category": "smartphones",
    "brand": "Motorola",
    "price": 59999,
    "originalPrice": 69999,
    "rating": 4.9,
    "reviewsCount": 49,
    "modelNumber": "Motorola Signature",
    "provenanceBadge": "Authorized Motorola Unit",
    "tagline": "Handcrafted real wood & Italian leather back finishes with titanium-reinforced frame and 1TB storage.",
    "description": "Handcrafted real wood & Italian leather back finishes with titanium-reinforced frame and 1TB storage. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/motorola/Motorola_Signature.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Motorola Signature",
        "label": "Store Unit",
        "src": "assets/images/motorola/Motorola_Signature.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 59999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Motorola Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Highlights: Handcrafted real wood & Italian leather back finishes with titanium-reinforced frame and 1TB storage.",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-MOT-66092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Motorola%20Signature%20(12/256GB%20/%2016/512GB%20/%2016/1TB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "motorola-motorola-edge-70-max-8-256gb-12-256gb",
    "title": "Motorola Edge 70 MAX (8/256GB / 12/256GB)",
    "shortTitle": "Motorola Edge 70 MAX",
    "category": "smartphones",
    "brand": "Motorola",
    "price": 54999,
    "originalPrice": 59999,
    "rating": 4.8,
    "reviewsCount": 48,
    "modelNumber": "Motorola Edge 70 MAX",
    "provenanceBadge": "Authorized Motorola Unit",
    "tagline": "Maximized battery, flagship processor, lossless 100x hybrid zoom, and top-of-the-line Gorilla Glass Armor.",
    "description": "Maximized battery, flagship processor, lossless 100x hybrid zoom, and top-of-the-line Gorilla Glass Armor. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/motorola/Motorola_Edge_60_Fusion.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Motorola Edge 70 MAX",
        "label": "Store Unit",
        "src": "assets/images/motorola/Motorola_Edge_60_Fusion.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 54999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Highlights: Maximized battery, flagship processor, lossless 100x hybrid zoom, and top-of-the-line Gorilla Glass Armor.",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-MOT-65092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Motorola%20Edge%2070%20MAX%20(8/256GB%20/%2012/256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "motorola-motorola-razr-60-swarovski-12gb-256gb",
    "title": "Motorola Razr 60 Swarovski (12GB + 256GB)",
    "shortTitle": "Motorola Razr 60 Swarovski",
    "category": "smartphones",
    "brand": "Motorola",
    "price": 54999,
    "originalPrice": 63249,
    "rating": 4.7,
    "reviewsCount": 51,
    "modelNumber": "Motorola Razr 60 Swarovski",
    "provenanceBadge": "Authorized Motorola Unit",
    "tagline": "Bespoke edition embedded with genuine Swarovski crystals and bespoke matching accessories.",
    "description": "Bespoke edition embedded with genuine Swarovski crystals and bespoke matching accessories. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/motorola/Motorola_Razr_60.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Motorola Razr 60 Swarovski",
        "label": "Store Unit",
        "src": "assets/images/motorola/Motorola_Razr_60.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "12GB + 256GB",
        "price": 54999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Highlights: Bespoke edition embedded with genuine Swarovski crystals and bespoke matching accessories.",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-MOT-68092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Motorola%20Razr%2060%20Swarovski%20(12GB%20+%20256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "motorola-motorola-razr-60-8gb-256gb",
    "title": "Motorola Razr 60 (8GB + 256GB)",
    "shortTitle": "Motorola Razr 60",
    "category": "smartphones",
    "brand": "Motorola",
    "price": 49999,
    "originalPrice": 57499,
    "rating": 4.9,
    "reviewsCount": 50,
    "modelNumber": "Motorola Razr 60",
    "provenanceBadge": "Authorized Motorola Unit",
    "tagline": "Full-size external cover display, zero-crease teardrop hinge, compact clamshell design, and Moto AI.",
    "description": "Full-size external cover display, zero-crease teardrop hinge, compact clamshell design, and Moto AI. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/motorola/Motorola_Razr_60.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Motorola Razr 60",
        "label": "Store Unit",
        "src": "assets/images/motorola/Motorola_Razr_60.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "8GB + 256GB",
        "price": 49999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Full-size external cover display, zero-crease teardrop hinge, compact clamshell design, and Moto AI.",
      "processor": "Official Motorola Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-MOT-67092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Motorola%20Razr%2060%20(8GB%20+%20256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "motorola-motorola-edge-70-pro-12gb-256gb",
    "title": "Motorola Edge 70 Pro + (12GB + 256GB)",
    "shortTitle": "Motorola Edge 70 Pro +",
    "category": "smartphones",
    "brand": "Motorola",
    "price": 47999,
    "originalPrice": 53759,
    "rating": 4.7,
    "reviewsCount": 47,
    "modelNumber": "Motorola Edge 70 Pro +",
    "provenanceBadge": "Authorized Motorola Unit",
    "tagline": "Enhanced telephoto zoom capabilities, AI photo enhancement engine, and ultra-premium glass build.",
    "description": "Enhanced telephoto zoom capabilities, AI photo enhancement engine, and ultra-premium glass build. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/motorola/Motorola_Edge_60_Fusion.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Motorola Edge 70 Pro +",
        "label": "Store Unit",
        "src": "assets/images/motorola/Motorola_Edge_60_Fusion.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "12GB + 256GB",
        "price": 47999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Motorola Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Highlights: Enhanced telephoto zoom capabilities, AI photo enhancement engine, and ultra-premium glass build.",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-MOT-64092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Motorola%20Edge%2070%20Pro%20+%20(12GB%20+%20256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "motorola-motorola-edge-70-pro-8-256gb-12-256gb",
    "title": "Motorola Edge 70 Pro (8/256GB / 12/256GB)",
    "shortTitle": "Motorola Edge 70 Pro",
    "category": "smartphones",
    "brand": "Motorola",
    "price": 39999,
    "originalPrice": 42999,
    "rating": 4.9,
    "reviewsCount": 46,
    "modelNumber": "Motorola Edge 70 Pro",
    "provenanceBadge": "Authorized Motorola Unit",
    "tagline": "Triple 50MP cameras with 3x periscope telephoto lens, 144Hz curved screen, and 125W fast charging.",
    "description": "Triple 50MP cameras with 3x periscope telephoto lens, 144Hz curved screen, and 125W fast charging. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/motorola/Motorola_Edge_60_Fusion.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Motorola Edge 70 Pro",
        "label": "Store Unit",
        "src": "assets/images/motorola/Motorola_Edge_60_Fusion.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 39999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Triple 50MP cameras with 3x periscope telephoto lens, 144Hz curved screen, and 125W fast charging.",
      "processor": "Official Motorola Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-MOT-63092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Motorola%20Edge%2070%20Pro%20(8/256GB%20/%2012/256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "motorola-motorola-edge-70-fusion-8-128gb-8-256gb-12-256gb-12-512gb",
    "title": "Motorola Edge 70 Fusion (8/128GB / 8/256GB / 12/256GB / 12/512GB)",
    "shortTitle": "Motorola Edge 70 Fusion",
    "category": "smartphones",
    "brand": "Motorola",
    "price": 30999,
    "originalPrice": 38999,
    "rating": 4.8,
    "reviewsCount": 44,
    "modelNumber": "Motorola Edge 70 Fusion",
    "provenanceBadge": "Authorized Motorola Unit",
    "tagline": "Flagship curved aesthetics with Pantone color options, 50MP Sony dual camera, and fast 68W charging.",
    "description": "Flagship curved aesthetics with Pantone color options, 50MP Sony dual camera, and fast 68W charging. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/motorola/Motorola_Edge_60_Fusion.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Motorola Edge 70 Fusion",
        "label": "Store Unit",
        "src": "assets/images/motorola/Motorola_Edge_60_Fusion.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 30999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Motorola Flagship / Mid-Tier Optimized Silicon",
      "camera": "Highlights: Flagship curved aesthetics with Pantone color options, 50MP Sony dual camera, and fast 68W charging.",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-MOT-61092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Motorola%20Edge%2070%20Fusion%20(8/128GB%20/%208/256GB%20/%2012/256GB%20/%2012/512GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "motorola-motorola-edge-70-8gb-256gb",
    "title": "Motorola Edge 70 (8GB + 256GB)",
    "shortTitle": "Motorola Edge 70",
    "category": "smartphones",
    "brand": "Motorola",
    "price": 29999,
    "originalPrice": 34499,
    "rating": 4.7,
    "reviewsCount": 43,
    "modelNumber": "Motorola Edge 70",
    "provenanceBadge": "Authorized Motorola Unit",
    "tagline": "Next-generation Edge design with 1.5K pOLED screen, Moto AI camera suite, and sleek vegan leather back.",
    "description": "Next-generation Edge design with 1.5K pOLED screen, Moto AI camera suite, and sleek vegan leather back. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/motorola/Motorola_Edge_60_Fusion.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Motorola Edge 70",
        "label": "Store Unit",
        "src": "assets/images/motorola/Motorola_Edge_60_Fusion.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "8GB + 256GB",
        "price": 29999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Next-generation Edge design with 1.5K pOLED screen, Moto AI camera suite, and sleek vegan leather back.",
      "processor": "Official Motorola Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-MOT-60092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Motorola%20Edge%2070%20(8GB%20+%20256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "motorola-motorola-edge-60-pro-8-256gb-12-256gb-16-512gb",
    "title": "Motorola Edge 60 Pro (8/256GB / 12/256GB / 16/512GB)",
    "shortTitle": "Motorola Edge 60 Pro",
    "category": "smartphones",
    "brand": "Motorola",
    "price": 29999,
    "originalPrice": 37999,
    "rating": 4.9,
    "reviewsCount": 45,
    "modelNumber": "Motorola Edge 60 Pro",
    "provenanceBadge": "Authorized Motorola Unit",
    "tagline": "Snapdragon 8-series performance, 125W TurboPower wired charging + 50W wireless charging support.",
    "description": "Snapdragon 8-series performance, 125W TurboPower wired charging + 50W wireless charging support. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/motorola/Motorola_Edge_60_Fusion.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Motorola Edge 60 Pro",
        "label": "Store Unit",
        "src": "assets/images/motorola/Motorola_Edge_60_Fusion.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 29999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Highlights: Snapdragon 8-series performance, 125W TurboPower wired charging + 50W wireless charging support.",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-MOT-62092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Motorola%20Edge%2060%20Pro%20(8/256GB%20/%2012/256GB%20/%2016/512GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "motorola-moto-g-max-4-128gb-6-128gb",
    "title": "Moto G Max (4+128GB / 6+128GB)",
    "shortTitle": "Moto G Max",
    "category": "smartphones",
    "brand": "Motorola",
    "price": 25999,
    "originalPrice": 27999,
    "rating": 4.9,
    "reviewsCount": 41,
    "modelNumber": "Moto G Max",
    "provenanceBadge": "Authorized Motorola Unit",
    "tagline": "Expansive cinematic display, built-in productivity features, and multi-day battery life.",
    "description": "Expansive cinematic display, built-in productivity features, and multi-day battery life. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/motorola/Moto_G06_Power.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Moto G Max",
        "label": "Store Unit",
        "src": "assets/images/motorola/Moto_G06_Power.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "4+128GB / 6+128GB",
        "price": 25999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Expansive cinematic display, built-in productivity features, and multi-day battery life.",
      "processor": "Official Motorola Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-MOT-58092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Moto%20G%20Max%20(4+128GB%20/%206+128GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "motorola-moto-g77-4-128gb-8-128gb",
    "title": "Moto G77 (4/128GB / 8/128GB)",
    "shortTitle": "Moto G77",
    "category": "smartphones",
    "brand": "Motorola",
    "price": 24999,
    "originalPrice": 27999,
    "rating": 4.8,
    "reviewsCount": 40,
    "modelNumber": "Moto G77",
    "provenanceBadge": "Authorized Motorola Unit",
    "tagline": "IP68 water resistance + MIL-STD-810H durability certification with Sony LYT600 camera sensor.",
    "description": "IP68 water resistance + MIL-STD-810H durability certification with Sony LYT600 camera sensor. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/motorola/Moto_G77.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Moto G77",
        "label": "Store Unit",
        "src": "assets/images/motorola/Moto_G77.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 24999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Motorola Flagship / Mid-Tier Optimized Silicon",
      "camera": "Highlights: IP68 water resistance + MIL-STD-810H durability certification with Sony LYT600 camera sensor.",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-MOT-57092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Moto%20G77%20(4/128GB%20/%208/128GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "motorola-moto-g67-power-8-128gb-12-256gb",
    "title": "Moto G67 Power (8+128GB / 12+256GB)",
    "shortTitle": "Moto G67 Power",
    "category": "smartphones",
    "brand": "Motorola",
    "price": 22999,
    "originalPrice": 27999,
    "rating": 4.7,
    "reviewsCount": 39,
    "modelNumber": "Moto G67 Power",
    "provenanceBadge": "Authorized Motorola Unit",
    "tagline": "Dimensity 7000-series 5G processor, massive 6000mAh battery, and up to 12GB physical RAM.",
    "description": "Dimensity 7000-series 5G processor, massive 6000mAh battery, and up to 12GB physical RAM. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/motorola/Moto_G67_Power.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Moto G67 Power",
        "label": "Store Unit",
        "src": "assets/images/motorola/Moto_G67_Power.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "8+128GB / 12+256GB",
        "price": 22999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Highlights: Dimensity 7000-series 5G processor, massive 6000mAh battery, and up to 12GB physical RAM.",
      "camera": "Badge: Power Champion",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-MOT-56092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Moto%20G67%20Power%20(8+128GB%20/%2012+256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "motorola-motorola-edge-60-fusion-8-128gb-8-256gb-12-256gb",
    "title": "Motorola Edge 60 Fusion (8/128GB / 8/256GB / 12/256GB)",
    "shortTitle": "Motorola Edge 60 Fusion",
    "category": "smartphones",
    "brand": "Motorola",
    "price": 22999,
    "originalPrice": 29999,
    "rating": 4.9,
    "reviewsCount": 42,
    "modelNumber": "Motorola Edge 60 Fusion",
    "provenanceBadge": "Authorized Motorola Unit",
    "tagline": "Quad-curved 144Hz pOLED display, 50MP Sony LYT-700C OIS camera, IP68 water resistance, and 68W charging.",
    "description": "Quad-curved 144Hz pOLED display, 50MP Sony LYT-700C OIS camera, IP68 water resistance, and 68W charging. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/motorola/Motorola_Edge_60_Fusion.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Motorola Edge 60 Fusion",
        "label": "Store Unit",
        "src": "assets/images/motorola/Motorola_Edge_60_Fusion.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 22999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Quad-curved 144Hz pOLED display, 50MP Sony LYT-700C OIS camera, IP68 water resistance, and 68W charging.",
      "processor": "Official Motorola Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-MOT-59092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Motorola%20Edge%2060%20Fusion%20(8/128GB%20/%208/256GB%20/%2012/256GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "motorola-moto-g57-8gb-128gb",
    "title": "Moto G57 (8GB + 128GB)",
    "shortTitle": "Moto G57",
    "category": "smartphones",
    "brand": "Motorola",
    "price": 21999,
    "originalPrice": 25299,
    "rating": 4.9,
    "reviewsCount": 38,
    "modelNumber": "Moto G57",
    "provenanceBadge": "Authorized Motorola Unit",
    "tagline": "FHD+ 120Hz display, 50MP Quad Pixel camera with OIS, stereo speakers, and clean Hello UI.",
    "description": "FHD+ 120Hz display, 50MP Quad Pixel camera with OIS, stereo speakers, and clean Hello UI. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/motorola/Moto_G57.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Moto G57",
        "label": "Store Unit",
        "src": "assets/images/motorola/Moto_G57.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "8GB + 128GB",
        "price": 21999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: FHD+ 120Hz display, 50MP Quad Pixel camera with OIS, stereo speakers, and clean Hello UI.",
      "processor": "Official Motorola Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-MOT-55092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Moto%20G57%20(8GB%20+%20128GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "motorola-moto-g37-power-4-64gb-4-128gb-8-128gb",
    "title": "Moto G37 Power (4/64GB | 4/128GB | 8/128GB)",
    "shortTitle": "Moto G37 Power",
    "category": "smartphones",
    "brand": "Motorola",
    "price": 19999,
    "originalPrice": 25999,
    "rating": 4.9,
    "reviewsCount": 37,
    "modelNumber": "Moto G37 Power",
    "provenanceBadge": "Authorized Motorola Unit",
    "tagline": "Colossal 7000mAh battery backed by 30W TurboPower fast charging for multi-day endurance.",
    "description": "Colossal 7000mAh battery backed by 30W TurboPower fast charging for multi-day endurance. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/motorola/Moto_G37.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Moto G37 Power",
        "label": "Store Unit",
        "src": "assets/images/motorola/Moto_G37.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 19999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Motorola Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "Highlights: Colossal 7000mAh battery backed by 30W TurboPower fast charging for multi-day endurance."
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-MOT-54092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Moto%20G37%20Power%20(4/64GB%20|%204/128GB%20|%208/128GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "motorola-moto-g37-4gb-64gb-5200-mah-20w",
    "title": "Moto G37 (4GB + 64GB (5200 mAh / 20W))",
    "shortTitle": "Moto G37",
    "category": "smartphones",
    "brand": "Motorola",
    "price": 14999,
    "originalPrice": 18999,
    "rating": 4.8,
    "reviewsCount": 36,
    "modelNumber": "Moto G37",
    "provenanceBadge": "Authorized Motorola Unit",
    "tagline": "5200mAh battery with 20W TurboPower charger in-box, vegan leather finish, and 5G connectivity.",
    "description": "5200mAh battery with 20W TurboPower charger in-box, vegan leather finish, and 5G connectivity. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/motorola/Moto_G37.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Moto G37",
        "label": "Store Unit",
        "src": "assets/images/motorola/Moto_G37.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "4GB + 64GB (5200 mAh / 20W",
        "price": 14999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Motorola Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "Highlights: 5200mAh battery with 20W TurboPower charger in-box, vegan leather finish, and 5G connectivity."
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-MOT-53092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Moto%20G37%20(4GB%20+%2064GB%20(5200%20mAh%20/%2020W)).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "motorola-moto-g06-power-4gb-64gb",
    "title": "Moto G06 Power (4GB + 64GB)",
    "shortTitle": "Moto G06 Power",
    "category": "smartphones",
    "brand": "Motorola",
    "price": 13999,
    "originalPrice": 15999,
    "rating": 4.7,
    "reviewsCount": 35,
    "modelNumber": "Moto G06 Power",
    "provenanceBadge": "Authorized Motorola Unit",
    "tagline": "Gigantic 7000mAh battery, 6.88-inch 120Hz display, 50MP AI camera, and Dolby Atmos stereo sound.",
    "description": "Gigantic 7000mAh battery, 6.88-inch 120Hz display, 50MP AI camera, and Dolby Atmos stereo sound. Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/images/motorola/Moto_G06_Power.jpg",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Moto G06 Power",
        "label": "Store Unit",
        "src": "assets/images/motorola/Moto_G06_Power.jpg"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "4GB + 64GB",
        "price": 13999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "Highlights: Gigantic 7000mAh battery, 6.88-inch 120Hz display, 50MP AI camera, and Dolby Atmos stereo sound.",
      "processor": "Official Motorola Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "Badge: Mega Battery"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-MOT-52092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Moto%20G06%20Power%20(4GB%20+%2064GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "oneplus-oneplus-nord-ce-4-8gb-128gb",
    "title": "OnePlus Nord CE 4 (8GB/128GB)",
    "shortTitle": "OnePlus Nord CE 4",
    "category": "smartphones",
    "brand": "OnePlus",
    "price": 24999,
    "originalPrice": 26999,
    "rating": 4.9,
    "reviewsCount": 20,
    "modelNumber": "CPH2613",
    "provenanceBadge": "Authorized OnePlus Unit",
    "tagline": "Snapdragon 7 Gen 3, 100W SUPERVOOC Fast Charge, Sony LYT-600 Camera",
    "description": "Snapdragon 7 Gen 3, 100W SUPERVOOC Fast Charge, Sony LYT-600 Camera Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/iphone_15_pro_max_natural.png",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "OnePlus Nord CE 4",
        "label": "Store Unit",
        "src": "assets/iphone_15_pro_max_natural.png"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "8GB/128GB",
        "price": 24999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Snapdragon 7 Gen 3",
      "camera": "Sony LYT-600 OIS Camera",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "5500mAh Battery"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-ONE-2092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20OnePlus%20Nord%20CE%204%20(8GB/128GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "xiaomi-redmi-note-13-5g-6gb-128gb",
    "title": "Redmi Note 13 5G (6GB/128GB)",
    "shortTitle": "Redmi Note 13 5G",
    "category": "smartphones",
    "brand": "Xiaomi",
    "price": 15999,
    "originalPrice": 19999,
    "rating": 4.9,
    "reviewsCount": 21,
    "modelNumber": "2312DRAABG",
    "provenanceBadge": "Authorized Xiaomi Unit",
    "tagline": "108MP Pro-grade camera, Slim design, 33W Fast charging",
    "description": "108MP Pro-grade camera, Slim design, 33W Fast charging Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/iphone_15_pro_max_natural.png",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Redmi Note 13 5G",
        "label": "Store Unit",
        "src": "assets/iphone_15_pro_max_natural.png"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "6GB/128GB",
        "price": 15999,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Mediatek Dimensity 6080",
      "camera": "108MP 3X In-sensor Zoom Camera",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "5000mAh Battery with 33W Charger"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-XIA-3092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Redmi%20Note%2013%205G%20(6GB/128GB).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "crompton-crompton-arno-neo-15l-water-heater-geyser",
    "title": "Crompton Arno Neo 15L Water Heater (Geyser)",
    "shortTitle": "Crompton Arno Neo 15L Water Heater",
    "category": "chargers",
    "brand": "Crompton",
    "price": 5899,
    "originalPrice": 8999,
    "rating": 4.7,
    "reviewsCount": 30,
    "modelNumber": "Arno Neo 15L",
    "provenanceBadge": "Authorized Crompton Unit",
    "tagline": "5-Star rated storage water heater with titanium enamel coating & 8 bar pressure",
    "description": "5-Star rated storage water heater with titanium enamel coating & 8 bar pressure Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/iphone_15_pro_max_natural.png",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Crompton Arno Neo 15L Water Heater",
        "label": "Store Unit",
        "src": "assets/iphone_15_pro_max_natural.png"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 5899,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Crompton Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-CRO-12092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Crompton%20Arno%20Neo%2015L%20Water%20Heater%20(Geyser).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "realme-realme-buds-air-5-pro-tws",
    "title": "Realme Buds Air 5 Pro TWS",
    "shortTitle": "Realme Buds Air 5 Pro TWS",
    "category": "earbuds",
    "brand": "Realme",
    "price": 4499,
    "originalPrice": 5999,
    "rating": 4.9,
    "reviewsCount": 24,
    "modelNumber": "RMA2120",
    "provenanceBadge": "Authorized Realme Unit",
    "tagline": "50dB Active Noise Cancellation, Hi-Res Audio, 40hr Battery",
    "description": "50dB Active Noise Cancellation, Hi-Res Audio, 40hr Battery Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/iphone_15_pro_max_natural.png",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Realme Buds Air 5 Pro TWS",
        "label": "Store Unit",
        "src": "assets/iphone_15_pro_max_natural.png"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 4499,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Realme Flagship / Mid-Tier Optimized Silicon",
      "camera": "50dB Hybrid Active Noise Cancellation",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-REA-6092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Realme%20Buds%20Air%205%20Pro%20TWS.%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "havells-havells-stealth-air-1200mm-bldc-fan",
    "title": "Havells Stealth Air 1200mm BLDC Fan",
    "shortTitle": "Havells Stealth Air 1200mm BLDC Fan",
    "category": "smartwatches",
    "brand": "Havells",
    "price": 3699,
    "originalPrice": 5199,
    "rating": 4.9,
    "reviewsCount": 28,
    "modelNumber": "Stealth BLDC",
    "provenanceBadge": "Authorized Havells Unit",
    "tagline": "Super silent BLDC energy saving fan with remote control. Saves up to 65% power",
    "description": "Super silent BLDC energy saving fan with remote control. Saves up to 65% power Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/iphone_15_pro_max_natural.png",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Havells Stealth Air 1200mm BLDC Fan",
        "label": "Store Unit",
        "src": "assets/iphone_15_pro_max_natural.png"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 3699,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Havells Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-HAV-10092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Havells%20Stealth%20Air%201200mm%20BLDC%20Fan.%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "bajaj-bajaj-rex-750w-mixer-grinder-3-jars",
    "title": "Bajaj Rex 750W Mixer Grinder (3 Jars)",
    "shortTitle": "Bajaj Rex 750W Mixer Grinder",
    "category": "smartphones",
    "brand": "Bajaj",
    "price": 2899,
    "originalPrice": 4199,
    "rating": 4.7,
    "reviewsCount": 26,
    "modelNumber": "Rex 750",
    "provenanceBadge": "Authorized Bajaj Unit",
    "tagline": "Heavy duty 750W copper motor with 3 stainless steel jars & overload protection",
    "description": "Heavy duty 750W copper motor with 3 stainless steel jars & overload protection Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/iphone_15_pro_max_natural.png",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Bajaj Rex 750W Mixer Grinder",
        "label": "Store Unit",
        "src": "assets/iphone_15_pro_max_natural.png"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 2899,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "3-Speed Control with Incher",
      "processor": "Official Bajaj Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-BAJ-8092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Bajaj%20Rex%20750W%20Mixer%20Grinder%20(3%20Jars).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "xiaomi-mi-20000mah-18w-fast-power-bank",
    "title": "Mi 20000mAh 18W Fast Power Bank",
    "shortTitle": "Mi 20000mAh 18W Fast Power Bank",
    "category": "powerbanks",
    "brand": "Xiaomi",
    "price": 1799,
    "originalPrice": 2499,
    "rating": 4.9,
    "reviewsCount": 25,
    "modelNumber": "PB200LZM",
    "provenanceBadge": "Authorized Xiaomi Unit",
    "tagline": "High density Lithium Polymer battery with 18W dual input/output",
    "description": "High density Lithium Polymer battery with 18W dual input/output Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/iphone_15_pro_max_natural.png",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Mi 20000mAh 18W Fast Power Bank",
        "label": "Store Unit",
        "src": "assets/iphone_15_pro_max_natural.png"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 1799,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Xiaomi Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "20000mAh Real Capacity"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-XIA-7092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Mi%2020000mAh%2018W%20Fast%20Power%20Bank.%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "philips-philips-gc1905-1440w-steam-iron",
    "title": "Philips GC1905 1440W Steam Iron",
    "shortTitle": "Philips GC1905 1440W Steam Iron",
    "category": "chargers",
    "brand": "Philips",
    "price": 1499,
    "originalPrice": 1995,
    "rating": 4.9,
    "reviewsCount": 29,
    "modelNumber": "GC1905",
    "provenanceBadge": "Authorized Philips Unit",
    "tagline": "Fast crease removal with non-stick soleplate and continuous steam spray",
    "description": "Fast crease removal with non-stick soleplate and continuous steam spray Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/iphone_15_pro_max_natural.png",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Philips GC1905 1440W Steam Iron",
        "label": "Store Unit",
        "src": "assets/iphone_15_pro_max_natural.png"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 1499,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Philips Flagship / Mid-Tier Optimized Silicon",
      "camera": "Easy water filling and emptying",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-PHI-11092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Philips%20GC1905%201440W%20Steam%20Iron.%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "portronics-portronics-65w-gan-fast-charger",
    "title": "Portronics 65W GaN Fast Charger",
    "shortTitle": "Portronics 65W GaN Fast Charger",
    "category": "chargers",
    "brand": "Portronics",
    "price": 1399,
    "originalPrice": 2499,
    "rating": 4.7,
    "reviewsCount": 22,
    "modelNumber": "Adapto 65",
    "provenanceBadge": "Authorized Portronics Unit",
    "tagline": "Dual Type-C + USB-A GaN fast charger. Powers laptops, iPhones & Androids",
    "description": "Dual Type-C + USB-A GaN fast charger. Powers laptops, iPhones & Androids Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/iphone_15_pro_max_natural.png",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Portronics 65W GaN Fast Charger",
        "label": "Store Unit",
        "src": "assets/iphone_15_pro_max_natural.png"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 1399,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Portronics Flagship / Mid-Tier Optimized Silicon",
      "camera": "GaN III Tech: Cool & Compact",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-POR-4092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Portronics%2065W%20GaN%20Fast%20Charger.%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "pigeon-pigeon-by-stovekraft-18l-electric-kettle",
    "title": "Pigeon by Stovekraft 1.8L Electric Kettle",
    "shortTitle": "Pigeon by Stovekraft 1.8L Electric Kettle",
    "category": "smartphones",
    "brand": "Pigeon",
    "price": 699,
    "originalPrice": 1245,
    "rating": 4.8,
    "reviewsCount": 27,
    "modelNumber": "Acro 1.8L",
    "provenanceBadge": "Authorized Pigeon Unit",
    "tagline": "Stainless steel rapid boiling cordless electric kettle with auto-cutoff",
    "description": "Stainless steel rapid boiling cordless electric kettle with auto-cutoff Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/iphone_15_pro_max_natural.png",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Pigeon by Stovekraft 1.8L Electric Kettle",
        "label": "Store Unit",
        "src": "assets/iphone_15_pro_max_natural.png"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 699,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Pigeon Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-PIG-9092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Pigeon%20by%20Stovekraft%201.8L%20Electric%20Kettle.%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  },
  {
    "id": "ambrane-ambrane-100w-braided-type-c-cable-15m",
    "title": "Ambrane 100W Braided Type-C Cable (1.5m)",
    "shortTitle": "Ambrane 100W Braided Type-C Cable",
    "category": "chargers",
    "brand": "Ambrane",
    "price": 299,
    "originalPrice": 699,
    "rating": 4.8,
    "reviewsCount": 23,
    "modelNumber": "EP-100",
    "provenanceBadge": "Authorized Ambrane Unit",
    "tagline": "Tough nylon braided 100W rapid charging data cable",
    "description": "Tough nylon braided 100W rapid charging data cable Sourced directly from authorized Indian distribution channels with tamper-evident seals and brand warranty.",
    "image": "assets/iphone_15_pro_max_natural.png",
    "cloudFallback": "assets/iphone_15_pro_max_natural.png",
    "gallery": [
      {
        "name": "Ambrane 100W Braided Type-C Cable",
        "label": "Store Unit",
        "src": "assets/iphone_15_pro_max_natural.png"
      }
    ],
    "finishes": [
      {
        "id": "official",
        "name": "Official Colors",
        "color": "#1e293b",
        "subtitle": "In-Store Stock"
      }
    ],
    "storageOptions": [
      {
        "size": "Standard Fleet Spec",
        "price": 299,
        "label": "Official Indian Spec",
        "recommended": true
      }
    ],
    "specs": {
      "display": "High Refresh Rate AMOLED/IPS Display with Gorilla Glass Protection",
      "processor": "Official Ambrane Flagship / Mid-Tier Optimized Silicon",
      "camera": "Multi-lens AI Camera Array with Night Mode & Portrait Engine",
      "chassis": "Factory Sealed Indian Retail Enclosure",
      "battery": "High Capacity Fast-Charging Cell (All-Day Endurance)"
    },
    "inStock": true,
    "oemSealed": true,
    "vipSetup": true,
    "serialNumber": "RC-AMB-5092-IND",
    "batch": "RC-2026-IND",
    "whatsapp_order_link": "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications!%20I%20would%20like%20to%20enquire%20about:%20Ambrane%20100W%20Braided%20Type-C%20Cable%20(1.5m).%20Please%20share%20your%20best%20offer%20price,%20warranty,%20and%20availability!"
  }
];


// VIP User Mock Profile
const MOCK_USER = {
  name: "Aarav Sharma",
  membershipId: "RC-VIP-88910",
  tier: "Titanium Concierge",
  memberSince: "November 2022",
  avatar: "assets/avatar.png",
  contact: {
    phone: "+91 98450 12890",
    email: "aarav.sharma@private-holdings.in",
    address: "Penthouse 4B, Skyview Silicon Towers, Outer Ring Rd, Bengaluru, Karnataka - 560103",
    verified: true
  },
  registeredHardware: [
    {
      id: "reg-1",
      title: "Unisks Studio Reference",
      subtitle: "Midnight Obsidian • Master Edition",
      serialNumber: "UNS-9912-AUD",
      status: "Active OEM Warranty",
      validity: "Dec 2025 (14 Mos left)",
      coveragePercent: 60,
      image: "assets/unisks_studio_headphone.png",
      tag: "OEM Authorized"
    },
    {
      id: "reg-2",
      title: "iPhone 15 Pro Titanium",
      subtitle: "Natural Titanium 512GB",
      serialNumber: "3591-8812-4029-A15",
      status: "Direct AppleCare+",
      validity: "Oct 2026 (24 Mos left)",
      coveragePercent: 80,
      image: "assets/iphone_15_pro_max_natural.png",
      tag: "AppleCare+ Certified"
    }
  ],
  activeOrders: [
    {
      id: "RC-94821",
      productTitle: "Apple Watch Ultra 2 Alpine Loop",
      specs: "Titanium Chassis • 49mm Cellular • Bespoke Band",
      price: 89900,
      image: "assets/apple_watch_ultra.png",
      courier: "Armored Secure Courier (Waybill BD-771920031)",
      waybill: "BD-771920031",
      estimatedTouchdown: "Today, by 3:00 PM IST",
      currentStep: 3,
      statusLabel: "Insured Armored Transit",
      timeline: [
        { title: "OEM Vault Cleared", time: "18 Oct, 10:15 AM", completed: true },
        { title: "Tamper Seal Certified", time: "18 Oct, 11:30 AM", completed: true },
        { title: "Insured Armored Transit", time: "Out for delivery by 3:00 PM", current: true },
        { title: "VIP Doorstep Setup", time: "Concierge Assigned", completed: false }
      ]
    }
  ]
};

// Known authentic serial numbers for the portal
const KNOWN_SERIALS = {
  "RC-2024-APL": {
    product: "Apple iPhone 15 Pro Max (Grade 5 Titanium)",
    status: "Authentic OEM Registered Unit • Brand Warranty Valid • Zero Claims History",
    channel: "Apple Direct India Vault",
    warrantyUntil: "October 2026",
    tamperVerified: true
  },
  "3591-8812-4029": {
    product: "Apple iPhone 15 Pro Max 512GB Natural",
    status: "Apple Authorized Serial Audited • Active AppleCare+ Registered",
    channel: "Bangalore VIP Logistics Depot",
    warrantyUntil: "October 2026",
    tamperVerified: true
  },
  "SAM-S24U-7729-IND": {
    product: "Samsung Galaxy S24 Ultra Titanium 512GB",
    status: "Samsung Authorized Serial Audited • Active Samsung Care+ Registered",
    channel: "Samsung Direct India Logistics",
    warrantyUntil: "January 2027",
    tamperVerified: true
  },
  "AW-ULTRA-8841-IND": {
    product: "Apple Watch Ultra Alpine Edition 49mm",
    status: "Official Indian Cellular Model • IMEI & eSIM Authorized",
    channel: "New Delhi Escrow Vault",
    warrantyUntil: "November 2026",
    tamperVerified: true
  }
};
