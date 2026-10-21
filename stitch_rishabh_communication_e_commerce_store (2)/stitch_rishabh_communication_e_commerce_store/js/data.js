/**
 * Rishabh Communication Mock Database
 * Authorized Tier-1 Flagship Tech Boutique
 */

const MOCK_PRODUCTS = [
  // ==========================================
  // SMARTPHONES
  // ==========================================
  {
    id: "iphone-15-pro-max",
    title: "Apple iPhone 15 Pro Max",
    shortTitle: "iPhone Pro Titanium",
    category: "smartphones",
    brand: "Apple",
    price: 134900,
    originalPrice: 159900,
    rating: 4.9,
    reviewsCount: 428,
    modelNumber: "Model A3106 (Global 5G Sub-6)",
    provenanceBadge: "Authorized Flagship Architecture",
    tagline: "Grade 5 Titanium architecture with unthrottled A17 Pro silicon.",
    description: "Grade 5 Titanium chassis, Direct OEM allocation with A17 Pro silicon, customizable Action button, 5x telephoto optical zoom, and ceramic shield display. Sourced directly from Apple authorized Indian distribution channels with tamper-evident factory seals.",
    image: "assets/iphone_15_pro_max_natural.png",
    cloudFallback: "assets/iphone_15_pro_max_natural.png",
    gallery: [
      { name: "Natural Titanium", label: "Rear Finish", src: "assets/iphone_15_pro_max_natural.png" },
      { name: "Blue Titanium", label: "Studio Perspective", src: "assets/iphone_15_pastel_blue.png" }
    ],
    finishes: [
      { id: "natural", name: "Natural Titanium", color: "#bfb6aa", subtitle: "Raw Brushed" },
      { id: "blue", name: "Blue Titanium", color: "#3d4a58", subtitle: "Deep Anodized" },
      { id: "white", name: "White Titanium", color: "#e3e4e5", subtitle: "Pearl Sheen" },
      { id: "black", name: "Black Titanium", color: "#2a2c2d", subtitle: "Space Matte" }
    ],
    storageOptions: [
      { size: "256 GB", price: 124900, label: "Standard Pro" },
      { size: "512 GB", price: 134900, label: "ProRes 4K Ready", recommended: true },
      { size: "1 TB", price: 154900, label: "Cinema Master" }
    ],
    specs: {
      display: "6.7-inch Super Retina XDR with ProMotion 120Hz, 2000 nits peak outdoor brightness",
      processor: "A17 Pro silicon (3nm architecture, 6-core GPU with hardware ray tracing)",
      camera: "Pro camera system: 48MP Main, 12MP Ultra Wide, 12MP 5x Telephoto with tetraprism",
      chassis: "Aerospace Grade 5 Titanium with brushed finish and ceramic shield front",
      battery: "Up to 29 hours video playback, MagSafe fast wireless charging up to 15W"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: true,
    serialNumber: "3591-8812-4029-A15",
    batch: "RC-2024-APL"
  },
  {
    id: "iphone-15-pastel-blue",
    title: "Apple iPhone 15 Pastel Blue",
    shortTitle: "iPhone 15 Pastel Blue",
    category: "smartphones",
    brand: "Apple",
    price: 72990,
    originalPrice: 79900,
    rating: 4.8,
    reviewsCount: 312,
    modelNumber: "Model A3090 (India Spec)",
    provenanceBadge: "Authorized Tier",
    tagline: "A16 Bionic processing powerhouse, 48MP main sensor, Dynamic Island.",
    description: "A16 Bionic processing powerhouse, 48MP main camera sensor, Dynamic Island, and color-infused glass back with contoured edges. Factory sealed with verified serial registration.",
    image: "assets/iphone_15_pastel_blue.png",
    cloudFallback: "assets/iphone_15_pastel_blue.png",
    finishes: [
      { id: "blue", name: "Pastel Blue", color: "#a4c4d9", subtitle: "Infused Glass" },
      { id: "black", name: "Midnight", color: "#242526", subtitle: "Matte Finish" }
    ],
    storageOptions: [
      { size: "128 GB", price: 72990, label: "Daily Driver", recommended: true },
      { size: "256 GB", price: 82990, label: "Creator Tier" }
    ],
    specs: {
      display: "6.1-inch Super Retina XDR OLED, Dynamic Island",
      processor: "A16 Bionic chip with 5-core GPU",
      camera: "Advanced dual-camera system: 48MP Main, 12MP Ultra Wide",
      chassis: "Color-infused glass back and aluminum enclosure",
      battery: "Up to 20 hours video playback"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: true,
    serialNumber: "3591-8812-4030-B15",
    batch: "RC-2024-APL"
  },
  {
    id: "samsung-s24-ultra",
    title: "Samsung Galaxy S24 Ultra Titanium",
    shortTitle: "Galaxy S24 Ultra",
    category: "smartphones",
    brand: "Samsung",
    price: 129999,
    originalPrice: 139999,
    rating: 4.9,
    reviewsCount: 388,
    modelNumber: "SM-S928B/DS (5G Flagship)",
    provenanceBadge: "Galaxy AI Flagship",
    tagline: "Titanium frame with integrated S-Pen and 200MP Quad-Telephoto system.",
    description: "Equipped with Snapdragon 8 Gen 3 for Galaxy, flat 6.8-inch Dynamic AMOLED 2X with Corning Gorilla Armor, integrated low-latency S-Pen, and 7 years of Android OS and security upgrades.",
    image: "assets/iphone_15_pro_max_natural.png",
    cloudFallback: "assets/iphone_15_pro_max_natural.png",
    finishes: [
      { id: "gray", name: "Titanium Gray", color: "#787673", subtitle: "Natural Finish" },
      { id: "black", name: "Titanium Black", color: "#2d2d2f", subtitle: "Deep Obsidian" }
    ],
    storageOptions: [
      { size: "256 GB", price: 129999, label: "Flagship Base" },
      { size: "512 GB", price: 139999, label: "Pro Power", recommended: true }
    ],
    specs: {
      display: "6.8-inch Dynamic AMOLED 2X, 120Hz, 2600 nits, Anti-reflective Gorilla Armor",
      processor: "Snapdragon 8 Gen 3 for Galaxy (4nm)",
      camera: "200MP Wide + 50MP 5x Telephoto + 10MP 3x Telephoto + 12MP Ultra-Wide",
      chassis: "Titanium frame with integrated low-latency S-Pen",
      battery: "5000 mAh with 45W wired and 15W wireless charging"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: true,
    serialNumber: "SAM-S24U-7729-IND",
    batch: "RC-2024-SAM"
  },
  {
    id: "samsung-z-fold-5",
    title: "Samsung Galaxy Z Fold 5 5G",
    shortTitle: "Galaxy Z Fold 5",
    category: "smartphones",
    brand: "Samsung",
    price: 154999,
    originalPrice: 169999,
    rating: 4.8,
    reviewsCount: 215,
    modelNumber: "SM-F946B (Dual SIM 5G)",
    provenanceBadge: "Dual-Screen Flagship",
    tagline: "Ultra-compact flex hinge architecture with expansive 7.6-inch Dynamic AMOLED.",
    description: "Zero-gap flex hinge, Armor Aluminum frame, IPX8 water resistance, and multi-window multitasking with S-Pen support. Sourced direct from Samsung India enterprise channels.",
    image: "assets/iphone_15_pro_max_natural.png",
    cloudFallback: "assets/iphone_15_pro_max_natural.png",
    finishes: [
      { id: "phantom-black", name: "Phantom Black", color: "#1c1c1e", subtitle: "Matte Obsidian" },
      { id: "icy-blue", name: "Icy Blue", color: "#b9cad4", subtitle: "Frost Satin" }
    ],
    storageOptions: [
      { size: "256 GB", price: 154999, label: "Fold Standard", recommended: true },
      { size: "512 GB", price: 164999, label: "Fold Master" }
    ],
    specs: {
      display: "7.6-inch QXGA+ Dynamic AMOLED 2X 120Hz Inner + 6.2-inch Cover Screen",
      processor: "Snapdragon 8 Gen 2 for Galaxy",
      camera: "50MP Wide + 10MP Telephoto 3x + 12MP Ultra Wide",
      chassis: "Armor Aluminum with Gorilla Glass Victus 2",
      battery: "4400 mAh dual battery with 25W fast charge"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: true,
    serialNumber: "SAM-ZF5-9921-IND",
    batch: "RC-2024-SAM"
  },
  {
    id: "oppo-find-x7-ultra",
    title: "OPPO Find X7 Ultra Quad-Periscope",
    shortTitle: "OPPO Find X7 Ultra",
    category: "smartphones",
    brand: "Oppo",
    price: 89999,
    originalPrice: 99999,
    rating: 4.9,
    reviewsCount: 178,
    modelNumber: "PHY110 (Hasselblad Master Edition)",
    provenanceBadge: "Hasselblad Optics",
    tagline: "World-first Quad Main Camera with dual periscope telephoto sensors.",
    description: "1-inch Sony LYT-900 sensor co-engineered with Hasselblad optics, Snapdragon 8 Gen 3 silicon, and 100W SuperVOOC rapid charging with premium vegan leather stitching.",
    image: "assets/iphone_15_pastel_blue.png",
    cloudFallback: "assets/iphone_15_pastel_blue.png",
    finishes: [
      { id: "ocean-blue", name: "Ocean Blue Leather", color: "#284b63", subtitle: "Dual-Tone Vegan" },
      { id: "sepia-brown", name: "Sepia Brown Leather", color: "#6f4e37", subtitle: "Tailored Stitch" }
    ],
    storageOptions: [
      { size: "256 GB", price: 89999, label: "Hasselblad Tier", recommended: true },
      { size: "512 GB", price: 96999, label: "Master Creator" }
    ],
    specs: {
      display: "6.82-inch QHD+ Curved AMOLED, 1-120Hz LTPO, 4500 nits peak",
      processor: "Snapdragon 8 Gen 3 Flagship",
      camera: "50MP 1-inch Sony LYT-900 + 50MP Ultra-Wide + 50MP 3x + 50MP 6x Periscope",
      chassis: "Curved glass and Aerospace aluminum with vegan leather back",
      battery: "5000 mAh with 100W SuperVOOC and 50W AirVOOC wireless"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: true,
    serialNumber: "OPP-FX7U-8812-GLB",
    batch: "RC-2024-OPP"
  },
  {
    id: "oppo-reno-11-pro",
    title: "OPPO Reno 11 Pro 5G",
    shortTitle: "OPPO Reno 11 Pro",
    category: "smartphones",
    brand: "Oppo",
    price: 39999,
    originalPrice: 44999,
    rating: 4.7,
    reviewsCount: 260,
    modelNumber: "CPH2607 (India Edition)",
    provenanceBadge: "Portrait Specialist",
    tagline: "32MP Telephoto Portrait Camera with 80W SuperVOOC flash charge.",
    description: "Ultra-slim 3D curved design, 32MP Sony IMX709 2x portrait telephoto camera, and MediaTek Dimensity 8200 chipset with verified manufacturer warranty.",
    image: "assets/iphone_15_pastel_blue.png",
    cloudFallback: "assets/iphone_15_pastel_blue.png",
    finishes: [
      { id: "pearl-white", name: "Pearl White", color: "#f0efe9", subtitle: "Shimmer Silk" },
      { id: "rock-grey", name: "Rock Grey", color: "#434343", subtitle: "Satin Brushed" }
    ],
    storageOptions: [
      { size: "256 GB", price: 39999, label: "Standard Spec", recommended: true }
    ],
    specs: {
      display: "6.7-inch 120Hz 3D Curved AMOLED, HDR10+",
      processor: "MediaTek Dimensity 8200 4nm Octa-Core",
      camera: "50MP Sony IMX890 OIS + 32MP Telephoto Portrait + 8MP Ultra-Wide",
      chassis: "Ultra-slim 7.59mm contoured aerospace frame",
      battery: "4600 mAh with 80W SuperVOOC rapid charging"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: true,
    serialNumber: "OPP-R11P-5521-IND",
    batch: "RC-2024-OPP"
  },
  {
    id: "vivo-x100-pro",
    title: "VIVO X100 Pro 5G ZEISS Optics",
    shortTitle: "VIVO X100 Pro 5G",
    category: "smartphones",
    brand: "Vivo",
    price: 89999,
    originalPrice: 96999,
    rating: 4.9,
    reviewsCount: 310,
    modelNumber: "V2324A (ZEISS APO Edition)",
    provenanceBadge: "ZEISS Certified Master",
    tagline: "ZEISS APO Floating Telephoto with 1-inch main sensor & Dimensity 9300.",
    description: "Equipped with ZEISS Multifocal portrait lens array, dedicated V3 imaging chip, all-big-core Dimensity 9300 processing unit, and IP68 dust/water protection with tamper-proof seal.",
    image: "assets/iphone_15_pro_max_natural.png",
    cloudFallback: "assets/iphone_15_pro_max_natural.png",
    finishes: [
      { id: "asteroid-black", name: "Asteroid Black", color: "#1e2022", subtitle: "Fluorite AG Glass" },
      { id: "sunset-orange", name: "Sunset Orange", color: "#d9652a", subtitle: "Vegan Leather Ripple" }
    ],
    storageOptions: [
      { size: "512 GB", price: 89999, label: "ZEISS Master Fleet", recommended: true }
    ],
    specs: {
      display: "6.78-inch 1.5K 8T LTPO AMOLED, 120Hz, 3000 nits peak",
      processor: "MediaTek Dimensity 9300 + V3 Imaging Chip",
      camera: "50MP 1-inch Sony IMX989 + 50MP ZEISS APO Telephoto + 50MP Ultra-Wide",
      chassis: "Sun halo ring stainless steel camera bezel with AG glass",
      battery: "5400 mAh equivalent BlueVolt battery with 100W FlashCharge"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: true,
    serialNumber: "VIV-X100P-4491-IND",
    batch: "RC-2024-VIV"
  },
  {
    id: "vivo-v30-pro",
    title: "VIVO V30 Pro 5G Studio Portrait",
    shortTitle: "VIVO V30 Pro",
    category: "smartphones",
    brand: "Vivo",
    price: 41999,
    originalPrice: 46999,
    rating: 4.8,
    reviewsCount: 194,
    modelNumber: "V2319 (ZEISS Co-Engineered)",
    provenanceBadge: "Studio Aura Light",
    tagline: "50MP ZEISS triple main cameras with Smart Aura Light portrait ring.",
    description: "Slimmest 5000mAh phone in its class featuring ZEISS professional portrait styles, 50MP group selfie camera with autofocus, and MediaTek Dimensity 8200 chipset.",
    image: "assets/iphone_15_pastel_blue.png",
    cloudFallback: "assets/iphone_15_pastel_blue.png",
    finishes: [
      { id: "classic-black", name: "Classic Black", color: "#222222", subtitle: "Velvet Satin" },
      { id: "andaman-blue", name: "Andaman Blue", color: "#4f8ca8", subtitle: "Water Ripple Glass" }
    ],
    storageOptions: [
      { size: "256 GB", price: 41999, label: "Portrait Fleet", recommended: true }
    ],
    specs: {
      display: "6.78-inch 1.5K Curved AMOLED, 120Hz, 2800 nits peak",
      processor: "MediaTek Dimensity 8200 4nm",
      camera: "50MP Sony IMX920 OIS + 50MP ZEISS Telephoto + 50MP Ultra-Wide + Aura Ring",
      chassis: "7.45mm ultra-slim curved body with reinforced glass",
      battery: "5000 mAh with 80W FlashCharge"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: true,
    serialNumber: "VIV-V30P-8820-IND",
    batch: "RC-2024-VIV"
  },
  {
    id: "moto-edge-50-ultra",
    title: "MOTOROLA Edge 50 Ultra Pantone Edition",
    shortTitle: "Moto Edge 50 Ultra",
    category: "smartphones",
    brand: "Motorola",
    price: 59999,
    originalPrice: 64999,
    rating: 4.9,
    reviewsCount: 154,
    modelNumber: "XT2401-2 (Pantone Certified)",
    provenanceBadge: "Real Wood & Pantone",
    tagline: "Natural Nordic Wood finish, Snapdragon 8s Gen 3, and 125W TurboPower.",
    description: "Crafted with authentic natural Nordic Wood and vegan leather backings, Pantone color and skin-tone validated display/camera, 50MP periscope zoom, and IP68 submergence proofing.",
    image: "assets/iphone_15_pro_max_natural.png",
    cloudFallback: "assets/iphone_15_pro_max_natural.png",
    finishes: [
      { id: "nordic-wood", name: "Nordic Wood", color: "#c89f78", subtitle: "Real Wood Veneer" },
      { id: "peach-fuzz", name: "Peach Fuzz", color: "#ffbe98", subtitle: "Pantone Color 2024" }
    ],
    storageOptions: [
      { size: "512 GB", price: 59999, label: "Nordic Master", recommended: true }
    ],
    specs: {
      display: "6.7-inch Super HD (1220p) 144Hz pOLED, 2500 nits, Pantone Validated",
      processor: "Snapdragon 8s Gen 3 Mobile Platform",
      camera: "50MP OIS Main + 50MP Ultra-Wide + 64MP 3x Periscope OIS Telephoto",
      chassis: "Sandblasted aluminum frame with real natural wood backing",
      battery: "4500 mAh with 125W TurboPower wired and 50W wireless"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: true,
    serialNumber: "MOT-E50U-9021-IND",
    batch: "RC-2024-MOT"
  },
  {
    id: "moto-razr-50-ultra",
    title: "MOTOROLA Razr 50 Ultra Foldable",
    shortTitle: "Moto Razr 50 Ultra",
    category: "smartphones",
    brand: "Motorola",
    price: 89999,
    originalPrice: 99999,
    rating: 4.8,
    reviewsCount: 182,
    modelNumber: "XT2453-1 (External 4.0-inch)",
    provenanceBadge: "Iconic Flip Flagship",
    tagline: "Largest 4.0-inch external pOLED display with Snapdragon 8s Gen 3 power.",
    description: "Industry-leading full-size 4.0-inch external screen, titanium-reinforced teardrop hinge, dual 50MP AI cameras with telephoto, and Moto AI photo enhancement engine.",
    image: "assets/iphone_15_pastel_blue.png",
    cloudFallback: "assets/iphone_15_pastel_blue.png",
    finishes: [
      { id: "spring-green", name: "Spring Green", color: "#5d7864", subtitle: "Vegan Leather" },
      { id: "midnight-blue", name: "Midnight Blue", color: "#1f2a37", subtitle: "Matte Texture" }
    ],
    storageOptions: [
      { size: "512 GB", price: 89999, label: "Razr Master Edition", recommended: true }
    ],
    specs: {
      display: "6.9-inch FHD+ 165Hz LTPO pOLED Inner + 4.0-inch 165Hz External Screen",
      processor: "Snapdragon 8s Gen 3 Mobile Platform",
      camera: "50MP Main OIS + 50MP 2x Telephoto Portrait Camera",
      chassis: "6000-series aircraft aluminum frame with stainless steel hinge",
      battery: "4000 mAh with 45W TurboPower and 15W wireless"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: true,
    serialNumber: "MOT-R50U-6632-IND",
    batch: "RC-2024-MOT"
  },

  // ==========================================
  // SMARTWATCHES
  // ==========================================
  {
    id: "apple-watch-ultra",
    title: "Apple Watch Ultra Alpine Edition",
    shortTitle: "Apple Watch Ultra",
    category: "smartwatches",
    brand: "Apple",
    price: 89900,
    originalPrice: 99900,
    rating: 4.9,
    reviewsCount: 245,
    modelNumber: "49mm Titanium • Dual GPS",
    provenanceBadge: "Precision Telemetry",
    tagline: "Aerospace titanium enclosure with dual-frequency high-precision GPS.",
    description: "Sapphire front crystal, depth gauge certified up to 40 meters, customizable orange Action button, dual-frequency L1/L5 GPS, and 36-hour extended battery architecture.",
    image: "assets/apple_watch_ultra.png",
    cloudFallback: "assets/apple_watch_ultra.png",
    finishes: [
      { id: "orange", name: "Orange Alpine Loop", color: "#e66020", subtitle: "Medium Armature" },
      { id: "green", name: "Green Alpine Loop", color: "#425642", subtitle: "Large Armature" },
      { id: "white", name: "Starlight Ocean", color: "#e2e0d8", subtitle: "Diving Band" }
    ],
    specs: {
      display: "49mm Always-On Retina OLED display, 3000 nits peak brightness",
      processor: "S9 SiP with 64-bit dual-core processor and 4-core Neural Engine",
      camera: "Bio-optical heart sensor, ECG, SpO2, Water temperature sensor",
      chassis: "Aerospace titanium enclosure with raised sapphire bezel",
      battery: "Up to 36 hours normal use, up to 72 hours in low power mode"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: true,
    serialNumber: "AW-ULTRA-8841-IND",
    batch: "RC-2024-APL"
  },
  {
    id: "apple-watch-s9",
    title: "Apple Watch Series 9 GPS + Cellular",
    shortTitle: "Apple Watch Series 9",
    category: "smartwatches",
    brand: "Apple",
    price: 41900,
    originalPrice: 44900,
    rating: 4.8,
    reviewsCount: 198,
    modelNumber: "45mm Midnight Aluminum",
    provenanceBadge: "Double Tap Gesture",
    tagline: "S9 SiP with Double Tap gesture control and brighter edge-to-edge Retina.",
    description: "Featuring Apple S9 silicon, magical double-tap fingertip gesture control, edge-to-edge 2000 nits Always-On display, ECG cardiac monitoring, and crash detection.",
    image: "assets/apple_watch_ultra.png",
    cloudFallback: "assets/apple_watch_ultra.png",
    finishes: [
      { id: "midnight", name: "Midnight Aluminum", color: "#1d2024", subtitle: "Sport Band" },
      { id: "starlight", name: "Starlight Aluminum", color: "#ece3d6", subtitle: "Sport Loop" }
    ],
    specs: {
      display: "45mm Always-On Retina LTPO OLED, 2000 nits",
      processor: "Apple S9 SiP with second-gen Ultra Wideband chip",
      chassis: "100% recycled aerospace aluminum enclosure",
      battery: "18 hours all-day battery life, 36 hours in Low Power Mode"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: true,
    serialNumber: "AW-S9-4412-IND",
    batch: "RC-2024-APL"
  },
  {
    id: "samsung-galaxy-watch-6-classic",
    title: "Samsung Galaxy Watch 6 Classic LTE",
    shortTitle: "Galaxy Watch 6 Classic",
    category: "smartwatches",
    brand: "Samsung",
    price: 36999,
    originalPrice: 40999,
    rating: 4.8,
    reviewsCount: 176,
    modelNumber: "SM-R965F (47mm Rotating Bezel)",
    provenanceBadge: "Rotating Physical Bezel",
    tagline: "Iconic rotating physical bezel with BioActive health sensor array.",
    description: "Timeless stainless steel architecture, tactile rotating bezel, Sapphire crystal glass, advanced sleep coaching, BIA body composition analysis, and standalone 4G LTE eSIM connectivity.",
    image: "assets/apple_watch_ultra.png",
    cloudFallback: "assets/apple_watch_ultra.png",
    finishes: [
      { id: "black", name: "Obsidian Black", color: "#222224", subtitle: "Hybrid Leather" },
      { id: "silver", name: "Brushed Silver", color: "#d0d2d4", subtitle: "Silver Armor" }
    ],
    specs: {
      display: "1.5-inch Super AMOLED 480x480, Sapphire Crystal Glass",
      processor: "Exynos W930 Dual-Core 1.4GHz, 2GB RAM",
      chassis: "Premium Stainless Steel with physical rotating bezel",
      battery: "425 mAh with WPC-based wireless fast charging"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: true,
    serialNumber: "SAM-W6C-7731-IND",
    batch: "RC-2024-SAM"
  },
  {
    id: "oppo-watch-x",
    title: "OPPO Watch X Titanium Sapphire Edition",
    shortTitle: "OPPO Watch X Titanium",
    category: "smartwatches",
    brand: "Oppo",
    price: 27999,
    originalPrice: 31999,
    rating: 4.7,
    reviewsCount: 112,
    modelNumber: "OW49B (Dual-Engine Architecture)",
    provenanceBadge: "Dual-Engine 100-Hour",
    tagline: "Wear OS by Google + RTOS dual engine with up to 100 hours battery life.",
    description: "Sapphire crystal glass, polished titanium-grade stainless steel chassis, dual-engine Snapdragon W5 + BES2700 architecture, dual-frequency L1+L5 GPS, and comprehensive pro badminton telemetry.",
    image: "assets/apple_watch_ultra.png",
    cloudFallback: "assets/apple_watch_ultra.png",
    finishes: [
      { id: "platinum-black", name: "Platinum Black", color: "#1e1e20", subtitle: "Fluororubber Strap" },
      { id: "mars-brown", name: "Mars Brown", color: "#7a4e32", subtitle: "Calfskin Leather" }
    ],
    specs: {
      display: "1.43-inch AMOLED, 60Hz, Sapphire Crystal cover, 1000 nits",
      processor: "Snapdragon W5 Gen 1 + BES2700 Dual Engine",
      chassis: "Stainless steel case, IP68 and 5ATM water resistance certified",
      battery: "500 mAh battery with up to 100 hours in smart mode"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: true,
    serialNumber: "OPP-WX-5591-IND",
    batch: "RC-2024-OPP"
  },
  {
    id: "vivo-watch-3",
    title: "VIVO Watch 3 Ceramic Bezel eSIM",
    shortTitle: "VIVO Watch 3 Ceramic",
    category: "smartwatches",
    brand: "Vivo",
    price: 19999,
    originalPrice: 22999,
    rating: 4.7,
    reviewsCount: 96,
    modelNumber: "WA2356 (BlueOS Telemetry)",
    provenanceBadge: "Ceramic Luxury Bezel",
    tagline: "Stainless steel crown, micro-curved glass, and standalone cellular calling.",
    description: "Curved 3D sapphire glass, nano-crystalline ceramic bezel, BlueOS lightweight smart engine with heart rate and blood oxygen alert radar, and 16-day ultra-endurance mode.",
    image: "assets/apple_watch_ultra.png",
    cloudFallback: "assets/apple_watch_ultra.png",
    finishes: [
      { id: "moonlight-white", name: "Moonlight White", color: "#f5f5f7", subtitle: "Italian Leather" },
      { id: "asteroid-black", name: "Asteroid Black", color: "#222428", subtitle: "Sport Rubber" }
    ],
    specs: {
      display: "1.43-inch 3D curved AMOLED, 466x466 resolution",
      processor: "Bespoke low-power multi-core SoC with BlueOS",
      chassis: "Stainless steel crown, aerospace aluminum body, ceramic bezel",
      battery: "505 mAh battery offering up to 16 days in endurance mode"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: true,
    serialNumber: "VIV-W3-3392-IND",
    batch: "RC-2024-VIV"
  },
  {
    id: "moto-watch-100",
    title: "MOTOROLA Moto Watch 100 Precision Steel",
    shortTitle: "Moto Watch 100",
    category: "smartwatches",
    brand: "Motorola",
    price: 12999,
    originalPrice: 15999,
    rating: 4.6,
    reviewsCount: 140,
    modelNumber: "MOSWZ100-PB (Moto Watch OS)",
    provenanceBadge: "Ergonomic Aluminum",
    tagline: "42mm aluminum casing, dynamic health tracking, and 14-day rapid charge.",
    description: "Lightweight 42mm aluminum casing, continuous blood oxygen SpO2 monitoring, 26 dedicated sport modes, 5ATM water resistance, and rapid charging up to 100% in 60 minutes.",
    image: "assets/apple_watch_ultra.png",
    cloudFallback: "assets/apple_watch_ultra.png",
    finishes: [
      { id: "glacier-silver", name: "Glacier Silver", color: "#cfd6df", subtitle: "Brushed Bezel" },
      { id: "phantom-black", name: "Phantom Black", color: "#1d1e22", subtitle: "Matte Black Strap" }
    ],
    specs: {
      display: "1.3-inch Circular LCD with Always-On display",
      processor: "Moto Watch OS with low-latency Bluetooth 5.0",
      chassis: "42mm aircraft-grade aluminum enclosure with 5ATM water proofing",
      battery: "355 mAh offering up to 14 days normal usage"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: false,
    serialNumber: "MOT-W100-2210-IND",
    batch: "RC-2024-MOT"
  },

  // ==========================================
  // EARBUDS
  // ==========================================
  {
    id: "apple-airpods-pro-2",
    title: "Apple AirPods Pro (2nd Gen) USB-C",
    shortTitle: "AirPods Pro (2nd Gen)",
    category: "earbuds",
    brand: "Apple",
    price: 24900,
    originalPrice: 26900,
    rating: 4.9,
    reviewsCount: 520,
    modelNumber: "MTJV3HN/A (H2 Silicon USB-C)",
    provenanceBadge: "Active 2X Noise Cancel",
    tagline: "Apple-designed H2 chip delivers up to 2x more Active Noise Cancellation.",
    description: "Featuring Apple H2 headphone chip, Personalized Spatial Audio with dynamic head tracking, Adaptive Audio combining Active Noise Cancellation and Transparency, and MagSafe USB-C case with precision finding speaker.",
    image: "assets/aeropod_studio_tws.png",
    cloudFallback: "assets/aeropod_studio_tws.png",
    finishes: [
      { id: "white", name: "Gloss White", color: "#ffffff", subtitle: "MagSafe USB-C Case" }
    ],
    specs: {
      display: "Capacitive touch stem volume swipe controls",
      processor: "Apple H2 headphone chip + Apple U1 in charging case",
      chassis: "IP54 dust, sweat, and water resistance for earbuds and case",
      battery: "Up to 6 hours listening time, 30 hours total with MagSafe case"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: true,
    serialNumber: "APL-APP2-9901-IND",
    batch: "RC-2024-APL"
  },
  {
    id: "samsung-galaxy-buds2-pro",
    title: "Samsung Galaxy Buds2 Pro Studio ANC",
    shortTitle: "Galaxy Buds2 Pro",
    category: "earbuds",
    brand: "Samsung",
    price: 16999,
    originalPrice: 19999,
    rating: 4.8,
    reviewsCount: 340,
    modelNumber: "SM-R510N (24-Bit Hi-Fi Audio)",
    provenanceBadge: "24-Bit Seamless Hi-Fi",
    tagline: "24-bit Hi-Fi sound via Samsung Seamless Codec with intelligent 360 Audio.",
    description: "3 high-SNR microphones eliminate background rumble, aerodynamic air venting reduces ear canal pressure, ergonomic contoured design sits snugly for rigorous movement, and IPX7 water resistance.",
    image: "assets/aeropod_studio_tws.png",
    cloudFallback: "assets/aeropod_studio_tws.png",
    finishes: [
      { id: "graphite", name: "Graphite Matte", color: "#282a2e", subtitle: "Soft Rubberized" },
      { id: "bora-purple", name: "Bora Purple", color: "#b99bd6", subtitle: "Satin Finish" }
    ],
    specs: {
      processor: "Bespoke Samsung Seamless Hi-Fi Codec + 2-Way Woofer/Tweeter drivers",
      chassis: "IPX7 certified waterproof housing",
      battery: "5 hours playback with ANC on, 18 hours with wireless Qi case"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: false,
    serialNumber: "SAM-B2P-4491-IND",
    batch: "RC-2024-SAM"
  },
  {
    id: "oppo-enco-x2",
    title: "OPPO Enco X2 Dynaudio Audiophile TWS",
    shortTitle: "OPPO Enco X2 Dynaudio",
    category: "earbuds",
    brand: "Oppo",
    price: 10999,
    originalPrice: 12999,
    rating: 4.8,
    reviewsCount: 215,
    modelNumber: "ETE01 (SuperDBEE Coaxial Dual)",
    provenanceBadge: "Dynaudio Master Tuning",
    tagline: "SuperDBEE coaxial dual driver system co-developed with Dynaudio acoustic labs.",
    description: "Ultralight planar diaphragm tweeters, 45dB ultra-wide frequency active noise cancellation, LHDC 4.0 high-resolution transmission, and anti-bacterial ear tips with direct factory provenance.",
    image: "assets/aeropod_studio_tws.png",
    cloudFallback: "assets/aeropod_studio_tws.png",
    finishes: [
      { id: "frost-white", name: "Frost White", color: "#f7f7f9", subtitle: "Ceramic Texture" },
      { id: "mirror-black", name: "Mirror Black", color: "#1c1c1e", subtitle: "Piano Gloss" }
    ],
    specs: {
      processor: "SuperDBEE coaxial dual-driver with quad-magnet planar tweeters",
      chassis: "IP54 water/sweat resistant with anti-earwax mesh",
      battery: "Up to 40 hours total listening time with fast wireless Qi charging"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: false,
    serialNumber: "OPP-EX2-8812-IND",
    batch: "RC-2024-OPP"
  },
  {
    id: "vivo-tws-3-pro",
    title: "VIVO TWS 3 Pro 48dB Hi-Fi Earbuds",
    shortTitle: "VIVO TWS 3 Pro",
    category: "earbuds",
    brand: "Vivo",
    price: 9999,
    originalPrice: 11999,
    rating: 4.7,
    reviewsCount: 168,
    modelNumber: "XE W29 (Qualcomm S5 Audio)",
    provenanceBadge: "Lossless CD-Grade Hi-Fi",
    tagline: "Qualcomm S5 sound platform with 48dB ultra-quiet deep ANC & aptX Lossless.",
    description: "Independent audiophile-grade DAC chip, 12.2mm nano-composite diaphragm, aptX Lossless audio transmission at 1.2Mbps bit rate, and 360-degree spatial audio tracking.",
    image: "assets/aeropod_studio_tws.png",
    cloudFallback: "assets/aeropod_studio_tws.png",
    finishes: [
      { id: "deep-blue", name: "Deep Sea Blue", color: "#1e355b", subtitle: "Gradient Ceramic" },
      { id: "pearl-white", name: "Classic White", color: "#fbfbfc", subtitle: "High Gloss" }
    ],
    specs: {
      processor: "Qualcomm S5 Audio platform with discrete DAC amplifier",
      chassis: "Ergonomic 4.98g lightweight ear stem housing",
      battery: "Up to 30 hours combined endurance with rapid top-up"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: false,
    serialNumber: "VIV-TWS3-6621-IND",
    batch: "RC-2024-VIV"
  },
  {
    id: "moto-buds-plus",
    title: "MOTOROLA Moto Buds+ Sound by Bose",
    shortTitle: "Moto Buds+ Bose Sound",
    category: "earbuds",
    brand: "Motorola",
    price: 7999,
    originalPrice: 9999,
    rating: 4.8,
    reviewsCount: 184,
    modelNumber: "PB8A0001IN (Hi-Res Audio)",
    provenanceBadge: "Sound by BOSE",
    tagline: "Acoustic tuning by Bose with dynamic dual drivers & Dolby Atmos head tracking.",
    description: "Co-tuned with Bose audio engineers featuring 11mm woofer + 6mm planar tweeter, dynamic active noise cancellation up to 50dB, Hi-Res certified wireless streaming, and Dolby Head Tracking.",
    image: "assets/aeropod_studio_tws.png",
    cloudFallback: "assets/aeropod_studio_tws.png",
    finishes: [
      { id: "forest-grey", name: "Forest Grey", color: "#45484d", subtitle: "Velvet Matte" },
      { id: "beach-sand", name: "Beach Sand", color: "#d9d2c5", subtitle: "Sahara Linen" }
    ],
    specs: {
      processor: "Dual dynamic drivers (11mm + 6mm) with Sound by Bose DSP",
      chassis: "Water-repellent nanocoating design",
      battery: "8 hours continuous, 38 hours total with rapid Qi wireless case"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: false,
    serialNumber: "MOT-BUDS-1092-IND",
    batch: "RC-2024-MOT"
  },

  // ==========================================
  // HEADPHONES
  // ==========================================
  {
    id: "apple-airpods-max",
    title: "Apple AirPods Max Studio Reference",
    shortTitle: "AirPods Max Studio",
    category: "headphones",
    brand: "Apple",
    price: 59900,
    originalPrice: 64900,
    rating: 4.9,
    reviewsCount: 310,
    modelNumber: "MGYH3HN/A (Spatial Computational)",
    provenanceBadge: "Computational Acoustic",
    tagline: "Apple-designed dynamic driver with computational audio and knit mesh canopy.",
    description: "Anodized aluminum ear cups with revolutionary magnetic memory foam cushions, stainless steel telescoping headband wrapped in breathable knit mesh, Apple H1 chip in each cup, and Active Noise Cancellation with Transparency mode.",
    image: "assets/unisks_studio_headphone.png",
    cloudFallback: "assets/unisks_studio_headphone.png",
    finishes: [
      { id: "space-gray", name: "Space Gray", color: "#36383b", subtitle: "Anodized Aluminum" },
      { id: "silver", name: "Silver White", color: "#e4e5e7", subtitle: "Clean Aluminum" }
    ],
    specs: {
      processor: "Dual Apple H1 headphone processing chips (10 audio cores each)",
      chassis: "Anodized aluminum cups, stainless steel frame, acoustic mesh canopy",
      battery: "20 hours listening time with ANC and spatial audio enabled"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: true,
    serialNumber: "APL-MAX-8821-IND",
    batch: "RC-2024-APL"
  },
  {
    id: "samsung-akg-y600nc",
    title: "Samsung AKG Y600NC Studio Reference Wireless",
    shortTitle: "Samsung AKG Y600NC",
    category: "headphones",
    brand: "Samsung",
    price: 19999,
    originalPrice: 24999,
    rating: 4.8,
    reviewsCount: 165,
    modelNumber: "GP-Y600HAHCAAA (AKG Master Tuning)",
    provenanceBadge: "AKG Reference Sound",
    tagline: "Studio reference linear response, auto-play/pause, and active noise cancelling.",
    description: "Engineered by AKG acoustic lab for award-winning studio reference monitoring, rotating volume ring on ear cup, Ambient Aware technology, memory foam leatherette cushions, and uncolored audio fidelity.",
    image: "assets/unisks_studio_headphone.png",
    cloudFallback: "assets/unisks_studio_headphone.png",
    finishes: [
      { id: "matte-black", name: "Matte Black", color: "#1e1e1e", subtitle: "Studio Finish" },
      { id: "silver", name: "Brushed Silver", color: "#d8dadc", subtitle: "Aluminum Highlights" }
    ],
    specs: {
      processor: "AKG calibrated 40mm studio neodymium drivers",
      chassis: "Zinc alloy metal hinges with memory foam contour pads",
      battery: "25 hours wireless battery with USB-C speed charge (10 min = 4 hours)"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: false,
    serialNumber: "SAM-AKG-4401-IND",
    batch: "RC-2024-SAM"
  },
  {
    id: "oppo-enco-master-hp",
    title: "OPPO Enco Master Wireless Studio Headphones",
    shortTitle: "OPPO Enco Master",
    category: "headphones",
    brand: "Oppo",
    price: 14999,
    originalPrice: 17999,
    rating: 4.7,
    reviewsCount: 122,
    modelNumber: "EHP-99 (Planar Magnetic Hybrid)",
    provenanceBadge: "Hi-Res Master LDAC",
    tagline: "40mm titanium composite drivers with LDAC lossless studio transmission.",
    description: "Ultra-lightweight 220g ergonomics, hybrid dual-mic feedforward active noise cancellation, low-latency gaming connection, and breathable protein leather ear muffs for extended sessions.",
    image: "assets/unisks_studio_headphone.png",
    cloudFallback: "assets/unisks_studio_headphone.png",
    finishes: [
      { id: "midnight-teal", name: "Midnight Teal", color: "#1d3d44", subtitle: "Anodized Ring" },
      { id: "matte-slate", name: "Obsidian Slate", color: "#25282a", subtitle: "Stealth Black" }
    ],
    specs: {
      processor: "40mm titanium diaphragm driver with LDAC 990kbps codec support",
      chassis: "Aircraft-grade aluminum headband slider with swivel hinges",
      battery: "45 hours playback with ANC off, 30 hours with ANC on"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: false,
    serialNumber: "OPP-EMH-7721-IND",
    batch: "RC-2024-OPP"
  },
  {
    id: "vivo-hi-fi-studio-hp",
    title: "VIVO Hi-Fi Master Reference ANC Headphones",
    shortTitle: "VIVO Hi-Fi Studio Pro",
    category: "headphones",
    brand: "Vivo",
    price: 15999,
    originalPrice: 18999,
    rating: 4.7,
    reviewsCount: 104,
    modelNumber: "VHP-300 (Lossless Studio Pro)",
    provenanceBadge: "Lossless Studio Pro",
    tagline: "Audiophile-grade discrete headphone DAC with 42dB adaptive noise elimination.",
    description: "Designed for discerning audiophiles, offering 50mm liquid crystal polymer diaphragms, dual independent DAC amplification, 3D spatial field widening, and tactile touch gestures.",
    image: "assets/unisks_studio_headphone.png",
    cloudFallback: "assets/unisks_studio_headphone.png",
    finishes: [
      { id: "graphite", name: "Graphite Anodized", color: "#2e3136", subtitle: "Studio Edition" },
      { id: "sahara-cream", name: "Sahara Sand", color: "#dfd8cd", subtitle: "Linen Cushion" }
    ],
    specs: {
      processor: "Discrete 32-bit DAC + 50mm LCP drivers",
      chassis: "Lightweight magnesium alloy armature with memory sponge",
      battery: "40 hours continuous studio playback with quick boost charging"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: false,
    serialNumber: "VIV-HP-3091-IND",
    batch: "RC-2024-VIV"
  },
  {
    id: "moto-pulse-escape",
    title: "MOTOROLA Moto Pulse Escape Studio Reference",
    shortTitle: "Moto Pulse Escape",
    category: "headphones",
    brand: "Motorola",
    price: 8999,
    originalPrice: 11999,
    rating: 4.6,
    reviewsCount: 138,
    modelNumber: "SH012 (Over-Ear Studio 40mm)",
    provenanceBadge: "Deep Bass Acoustic",
    tagline: "40mm neodymium drivers with noise isolation and multi-point Bluetooth.",
    description: "Over-ear cushioned acoustics designed for uninterrupted daily listening, multi-point pairing with dual smartphones, integrated mic for crystal clear calls, and foldable space-saving hinges.",
    image: "assets/unisks_studio_headphone.png",
    cloudFallback: "assets/unisks_studio_headphone.png",
    finishes: [
      { id: "carbon-black", name: "Carbon Black", color: "#1f1f21", subtitle: "Rubberized Matte" },
      { id: "camo-tan", name: "Camo Desert Tan", color: "#a89b88", subtitle: "Edition Series" }
    ],
    specs: {
      processor: "40mm dynamic neodymium drivers tuned for clean transients",
      chassis: "Foldable design with adjustable stainless headband reinforcement",
      battery: "Up to 24 hours wireless playtime + 3.5mm passive aux port"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: false,
    serialNumber: "MOT-PULSE-5520-IND",
    batch: "RC-2024-MOT"
  },

  // ==========================================
  // POWERBANKS (OTHER -> POWERBANK)
  // ==========================================
  {
    id: "apple-magsafe-battery-pack",
    title: "Apple MagSafe Battery Pack Magnetic Wireless",
    shortTitle: "Apple MagSafe Battery",
    category: "powerbanks",
    brand: "Apple",
    price: 9900,
    originalPrice: 10900,
    rating: 4.8,
    reviewsCount: 410,
    modelNumber: "MJWY3HN/A (MagSafe Smart Pack)",
    provenanceBadge: "OEM MagSafe Alignment",
    tagline: "Perfect magnetic alignment for wireless top-ups on the move.",
    description: "Attaching to the iPhone is snap-simple, with perfectly aligned magnets keeping it secure. Automatically charges with no need to turn on or off, and integrates directly with iOS battery widget.",
    image: "assets/silicone_armor_cases.png",
    cloudFallback: "assets/silicone_armor_cases.png",
    specs: {
      processor: "Integrated Apple power microcontroller with reverse wireless pass-through",
      chassis: "Smooth soft-touch polycarbonate with internal magnetic alignment ring",
      battery: "Charges wirelessly at up to 15W when connected to a 20W+ power adapter"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: false,
    serialNumber: "APL-MAG-4491-ACC",
    batch: "RC-2024-APL"
  },
  {
    id: "samsung-20000-powerbank",
    title: "Samsung 20,000mAh 45W Super Fast Power Bank",
    shortTitle: "Samsung 20,000mAh 45W Bank",
    category: "powerbanks",
    brand: "Samsung",
    price: 4299,
    originalPrice: 4999,
    rating: 4.8,
    reviewsCount: 325,
    modelNumber: "EB-P5300 (45W Power Delivery 3.0)",
    provenanceBadge: "45W Super Fast 2.0",
    tagline: "Triple-port output with 45W super fast charge for Galaxy laptops and phones.",
    description: "Engineered with UL-certified recycled materials, 3 USB ports allowing simultaneous tri-device powering, PD 3.0 PPS protocol compatibility, and built-in surge/overheat safeguards.",
    image: "assets/braided_pd_cable.png",
    cloudFallback: "assets/braided_pd_cable.png",
    specs: {
      processor: "Smart power distribution controller supporting PD 3.0 PPS 45W",
      chassis: "Matte beige anodized look crafted with eco-conscious materials",
      battery: "20,000 mAh high-density lithium-ion cell array"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: false,
    serialNumber: "SAM-PB20-9912-ACC",
    batch: "RC-2024-SAM"
  },
  {
    id: "oppo-supervooc-powerbank",
    title: "OPPO 33W SuperVOOC 10,000mAh Power Bank",
    shortTitle: "OPPO SuperVOOC 10,000mAh",
    category: "powerbanks",
    brand: "Oppo",
    price: 2499,
    originalPrice: 2999,
    rating: 4.7,
    reviewsCount: 198,
    modelNumber: "OPB03 (Dual-Port VOOC)",
    provenanceBadge: "SuperVOOC Flash Charge",
    tagline: "Official SuperVOOC protocol delivers rapid 33W output without warming.",
    description: "Genuine OEM SuperVOOC flash charge protocol, bidirectional fast charging, low-current mode for fitness bands and earbuds, and 12-layer safety protection circuit.",
    image: "assets/braided_pd_cable.png",
    cloudFallback: "assets/braided_pd_cable.png",
    specs: {
      processor: "OPPO SuperVOOC proprietary fast charge management IC",
      chassis: "Textured grip exterior preventing slips and micro-scratches",
      battery: "10,000 mAh high-capacity polymer battery"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: false,
    serialNumber: "OPP-PB10-3321-ACC",
    batch: "RC-2024-OPP"
  },
  {
    id: "vivo-flashcharge-powerbank",
    title: "VIVO FlashCharge 20,000mAh 44W Dual Port",
    shortTitle: "VIVO FlashCharge 20,000mAh",
    category: "powerbanks",
    brand: "Vivo",
    price: 3199,
    originalPrice: 3899,
    rating: 4.8,
    reviewsCount: 164,
    modelNumber: "VPB22 (44W Bi-Directional)",
    provenanceBadge: "44W Bi-Directional",
    tagline: "44W high power output capable of rapidly powering X-Series flagships.",
    description: "Official VIVO FlashCharge compatible power bank delivering rapid 44W charging for phones and tablets, dual output ports (USB-C + USB-A), and smart LED power gauge.",
    image: "assets/braided_pd_cable.png",
    cloudFallback: "assets/braided_pd_cable.png",
    specs: {
      processor: "VIVO FlashCharge + QC + PD 3.0 multi-protocol microcontroller",
      chassis: "Flame-retardant PC-ABS composite enclosure",
      battery: "20,000 mAh airline-safe compliant battery"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: false,
    serialNumber: "VIV-PB20-8802-ACC",
    batch: "RC-2024-VIV"
  },
  {
    id: "moto-turbopower-powerbank",
    title: "MOTOROLA TurboPower 20,000mAh 68W Rapid Bank",
    shortTitle: "Moto TurboPower 68W Bank",
    category: "powerbanks",
    brand: "Motorola",
    price: 3499,
    originalPrice: 4299,
    rating: 4.8,
    reviewsCount: 145,
    modelNumber: "MC-200 (68W Laptop & Phone PD)",
    provenanceBadge: "TurboPower 68W PD",
    tagline: "High-density 68W output capable of charging Edge phones and USB-C laptops.",
    description: "Extreme speed 68W Power Delivery output, simultaneous dual device high-speed delivery, premium matte finish with textured Moto batwing emblem, and airline-approved capacity.",
    image: "assets/braided_pd_cable.png",
    cloudFallback: "assets/braided_pd_cable.png",
    specs: {
      processor: "68W PD 3.0 PPS GaN integrated power management chipset",
      chassis: "Heat-dissipating structured aluminum casing",
      battery: "20,000 mAh high-density lithium polymer battery"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: false,
    serialNumber: "MOT-PB20-4491-ACC",
    batch: "RC-2024-MOT"
  },

  // ==========================================
  // CHARGERS (OTHER -> CHARGER)
  // ==========================================
  {
    id: "apple-30w-usbc-adapter",
    title: "Apple 30W USB-C Dynamic Power Adapter",
    shortTitle: "Apple 30W USB-C Adapter",
    category: "chargers",
    brand: "Apple",
    price: 3800,
    originalPrice: 4200,
    rating: 4.9,
    reviewsCount: 380,
    modelNumber: "MY1W2HN/A (GaN Compact Tier)",
    provenanceBadge: "Official Apple Power",
    tagline: "Fast, efficient charging at home, in the office, or on the go.",
    description: "Genuine Apple 30W USB-C Power Adapter offers rapid charging for iPhone 15 Pro series, iPad Pro, and MacBook Air models with authentic Apple serial barcode registration.",
    image: "assets/braided_pd_cable.png",
    cloudFallback: "assets/braided_pd_cable.png",
    specs: {
      processor: "Apple certified dynamic Power Delivery microcontroller",
      chassis: "High-gloss impact resistant flame-retardant casing",
      battery: "Up to 50% iPhone battery recharge in just 30 minutes"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: false,
    serialNumber: "APL-CHG-30W-8812",
    batch: "RC-2024-APL"
  },
  {
    id: "samsung-45w-adapter",
    title: "Samsung 45W Super Fast Charging 2.0 Power Adapter",
    shortTitle: "Samsung 45W GaN Adapter",
    category: "chargers",
    brand: "Samsung",
    price: 2999,
    originalPrice: 3499,
    rating: 4.9,
    reviewsCount: 460,
    modelNumber: "EP-T4510 (Type-C to Type-C 5A Cable Included)",
    provenanceBadge: "Super Fast Charge 2.0",
    tagline: "45W peak delivery with GaN semiconductor technology & 5A braided cable.",
    description: "Official Samsung 45W power brick featuring Gallium Nitride (GaN) for a smaller footprint, lower standby power consumption, and full Super Fast Charge 2.0 speed for S24 Ultra.",
    image: "assets/braided_pd_cable.png",
    cloudFallback: "assets/braided_pd_cable.png",
    specs: {
      processor: "GaN IC supporting USB PD 3.0 PPS up to 45W (20V/2.25A)",
      chassis: "Ultra-compact matte black casing with certified 5A USB-C cable",
      battery: "Powers Galaxy S24 Ultra from 0% to 70% in under 30 minutes"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: false,
    serialNumber: "SAM-CHG-45W-5501",
    batch: "RC-2024-SAM"
  },
  {
    id: "oppo-100w-supervooc-charger",
    title: "OPPO 100W SuperVOOC Dual-Port GaN Flash Charger",
    shortTitle: "OPPO 100W SuperVOOC GaN",
    category: "chargers",
    brand: "Oppo",
    price: 3499,
    originalPrice: 3999,
    rating: 4.9,
    reviewsCount: 290,
    modelNumber: "VCBAJACH (Dual Port USB-A + USB-C)",
    provenanceBadge: "100W SuperVOOC Flash",
    tagline: "Dual-port 100W flash charging powered by advanced Gallium Nitride.",
    description: "Simultaneous dual-device charging, 100W SuperVOOC maximum throughput for Find X and Reno flagships, backward compatible with SuperVOOC, VOOC, PD, QC, and PPS standards.",
    image: "assets/braided_pd_cable.png",
    cloudFallback: "assets/braided_pd_cable.png",
    specs: {
      processor: "Dual GaN smart power stage with SuperVOOC protocol controller",
      chassis: "Heat-dissipating compact casing with foldable AC pins",
      battery: "Charges Find X7 Ultra from 1% to 100% in approx 26 minutes"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: false,
    serialNumber: "OPP-CHG-100W-2210",
    batch: "RC-2024-OPP"
  },
  {
    id: "vivo-120w-flashcharge",
    title: "VIVO 120W FlashCharge GaN Studio Adapter",
    shortTitle: "VIVO 120W FlashCharge GaN",
    category: "chargers",
    brand: "Vivo",
    price: 3999,
    originalPrice: 4599,
    rating: 4.8,
    reviewsCount: 220,
    modelNumber: "V12060L0B0 (120W Ultra-Rapid)",
    provenanceBadge: "120W Ultra FlashCharge",
    tagline: "Industry-leading 120W power delivery for ultra-fast X-Series battery rejuvenation.",
    description: "Official VIVO high-speed adapter with certified Gallium Nitride efficiency, dual-charge pump technology, multi-protection circuitry, and 65W PD protocol compatibility for notebooks.",
    image: "assets/braided_pd_cable.png",
    cloudFallback: "assets/braided_pd_cable.png",
    specs: {
      processor: "VIVO 120W FlashCharge IC + PD 65W notebook protocol",
      chassis: "Thermally isolated casing with over-voltage and thermal surge trip",
      battery: "Recharges 5000mAh battery to 100% in roughly 20 minutes"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: false,
    serialNumber: "VIV-CHG-120W-7741",
    batch: "RC-2024-VIV"
  },
  {
    id: "moto-turbopower-68w",
    title: "MOTOROLA TurboPower 68W GaN Fast Charger",
    shortTitle: "Moto TurboPower 68W GaN",
    category: "chargers",
    brand: "Motorola",
    price: 2999,
    originalPrice: 3599,
    rating: 4.8,
    reviewsCount: 240,
    modelNumber: "MC-681 (GaNFast Power Delivery)",
    provenanceBadge: "TurboPower 68W GaN",
    tagline: "Pocket-sized 68W charging for Moto Edge flagships and USB-C laptops.",
    description: "Gallium Nitride (GaN) technology provides immense power in a pocket-friendly form factor. Official TurboPower protocol fuels Edge 50 series in minutes, and supports universal USB-PD 3.0.",
    image: "assets/braided_pd_cable.png",
    cloudFallback: "assets/braided_pd_cable.png",
    specs: {
      processor: "GaNFast power IC supporting 68W USB Power Delivery 3.0",
      chassis: "Ultra-compact matte textured housing with high thermal efficiency",
      battery: "Gives a full day of power in just 10 minutes for compatible Moto phones"
    },
    inStock: true,
    oemSealed: true,
    vipSetup: false,
    serialNumber: "MOT-CHG-68W-1102",
    batch: "RC-2024-MOT"
  }
];

// Mock User Profile
const MOCK_USER = {
  name: "Aarav Sharma",
  clientId: "#RC-IND-88204",
  tier: "VIP Gold Account",
  email: "aarav.sharma@example.com",
  phone: "+91 98450 12890",
  address: "Penthouse 4B, Skyview Silicon Towers, Outer Ring Rd, Bengaluru, Karnataka - 560103",
  city: "Bengaluru",
  pincode: "560103",
  avatar: "assets/avatar.png",
  cloudAvatar: "assets/avatar.png",
  privilegePoints: 1450,
  buybackValuation: 112000,
  conciergeSpecialist: "Mr. Vikramaditya S.",
  registeredDevices: [
    {
      id: "reg-1",
      title: "Apple AirPods Max Studio Reference",
      subtitle: "Space Gray Anodized Edition",
      serialNumber: "APL-MAX-8821-IND",
      status: "Active Coverage",
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
