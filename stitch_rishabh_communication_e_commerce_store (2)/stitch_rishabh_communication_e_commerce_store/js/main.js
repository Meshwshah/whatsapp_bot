/**
 * Rishabh Communication - Global Main UI Scripts
 * Handles Header badges, Drawers (Cart & Wishlist), Search, and Toast notifications
 */

// Helper: Format Indian Rupee currency
function formatINR(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

// Toast notification system
function showToast(title, message, icon = 'verified') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-msg bg-surface-container-lowest border border-primary/20 rounded-xl p-4 flex items-start gap-3 min-w-[300px] max-w-sm';
  toast.innerHTML = `
    <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
      <span class="material-symbols-outlined text-[18px]">${icon}</span>
    </div>
    <div class="flex-1 min-w-0">
      <h5 class="text-xs font-bold uppercase tracking-wider text-on-surface font-label">${title}</h5>
      <p class="text-xs text-on-surface-variant font-light mt-0.5">${message}</p>
    </div>
    <button class="text-secondary hover:text-on-surface text-sm ml-2" onclick="this.parentElement.remove()">✕</button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s forwards';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Universal Header Update (Cart Count, Wishlist Count)
function updateHeaderBadges() {
  const cartCount = Store.getCartCount();
  const cartBadges = document.querySelectorAll('.cart-badge-count');
  cartBadges.forEach(badge => {
    badge.textContent = cartCount;
    badge.style.display = cartCount > 0 ? 'flex' : 'none';
  });

  const wishlistCount = Store.getWishlist().length;
  const wishlistBadges = document.querySelectorAll('.wishlist-badge-count');
  wishlistBadges.forEach(badge => {
    badge.textContent = wishlistCount;
    badge.style.display = wishlistCount > 0 ? 'flex' : 'none';
  });
}

// Universal Slide-Over Cart Drawer
function initCartDrawer() {
  let drawer = document.getElementById('cartDrawer');
  if (!drawer) {
    drawer = document.createElement('div');
    drawer.id = 'cartDrawer';
    drawer.className = 'fixed inset-0 z-50 overflow-hidden drawer-backdrop';
    drawer.innerHTML = `
      <div class="absolute inset-0 bg-on-surface/40 backdrop-blur-sm transition-opacity" onclick="toggleCartDrawer(false)"></div>
      <div class="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div class="w-screen max-w-md bg-surface-container-lowest shadow-2xl flex flex-col drawer-panel" id="cartDrawerPanel">
          <!-- Header -->
          <div class="p-6 bg-surface-container-low border-b border-outline-variant/60 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-primary text-2xl">shopping_bag</span>
              <div>
                <h3 class="font-headline text-2xl font-semibold text-on-surface">Curated Vault Bag</h3>
                <span class="text-[10px] font-mono text-secondary tracking-widest uppercase">Direct OEM Allocations</span>
              </div>
            </div>
            <button class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface" onclick="toggleCartDrawer(false)">
              <span class="material-symbols-outlined text-base">close</span>
            </button>
          </div>

          <!-- Items List -->
          <div class="flex-1 overflow-y-auto p-6 space-y-4" id="cartDrawerItems">
            <!-- Dynamic Items Rendered Here -->
          </div>

          <!-- Footer / Checkout CTA -->
          <div class="p-6 bg-surface-container-low/70 border-t border-outline-variant/60 space-y-4">
            <div class="space-y-1.5 text-xs">
              <div class="flex justify-between text-on-surface-variant">
                <span>Subtotal</span>
                <span class="font-mono font-medium text-on-surface" id="cartDrawerSubtotal">₹0</span>
              </div>
              <div class="flex justify-between text-on-surface-variant">
                <span>White-Glove Insured Delivery</span>
                <span class="font-mono text-primary font-semibold">FREE (Escrow Covered)</span>
              </div>
              <div class="border-t border-outline-variant/40 pt-2 flex justify-between text-sm font-bold text-on-surface">
                <span class="font-headline text-lg">Total Vault Estimate</span>
                <span class="font-headline text-xl text-primary font-bold" id="cartDrawerTotal">₹0</span>
              </div>
            </div>

            <a href="checkout.html" class="w-full py-3.5 rounded-lg bg-primary text-on-primary font-label text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 hover:bg-primary/95 transition-all shadow-md">
              <span class="material-symbols-outlined text-lg">lock</span>
              <span>Proceed to Escrow Checkout</span>
            </a>
            <p class="text-[10px] text-center text-secondary font-mono">
              256-Bit Escrow Protocol • Tamper Sealed • Pan-India Free Transit
            </p>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(drawer);
  }
}

function renderCartDrawer() {
  const container = document.getElementById('cartDrawerItems');
  if (!container) return;

  const items = Store.getCart();
  if (items.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center space-y-4">
        <div class="w-16 h-16 rounded-full bg-surface-container mx-auto flex items-center justify-center text-secondary">
          <span class="material-symbols-outlined text-3xl">shopping_bag</span>
        </div>
        <div>
          <h4 class="font-headline text-xl text-on-surface font-medium">Your Vault Bag is Empty</h4>
          <p class="text-xs text-on-surface-variant font-light mt-1">Explore our curated fleets of flagship phones and studio acoustics.</p>
        </div>
        <a href="catalog.html" class="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-primary text-on-primary text-xs font-semibold hover:bg-primary/90 transition-colors" onclick="toggleCartDrawer(false)">
          Explore Catalog <span class="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
    `;
    document.getElementById('cartDrawerSubtotal').textContent = '₹0';
    document.getElementById('cartDrawerTotal').textContent = '₹0';
    return;
  }

  container.innerHTML = items.map((item, idx) => `
    <div class="flex gap-4 p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-xs">
      <div class="w-20 h-20 rounded-lg bg-surface-container-low flex items-center justify-center p-2 flex-shrink-0">
        <img src="${item.image}" alt="${item.title}" class="max-h-full max-w-full object-contain" onerror="this.src='assets/iphone_15_pro_max_natural.png'"/>
      </div>
      <div class="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <div class="flex items-start justify-between gap-2">
            <h4 class="text-xs font-bold text-on-surface font-body truncate leading-snug">${item.title}</h4>
            <button class="text-secondary hover:text-error transition-colors" onclick="Store.removeFromCart(${idx})">
              <span class="material-symbols-outlined text-base">delete</span>
            </button>
          </div>
          <p class="text-[11px] text-secondary font-mono mt-0.5">
            ${item.finish ? item.finish : ''} ${item.storage ? '• ' + item.storage : ''}
          </p>
        </div>
        <div class="flex items-center justify-between pt-2">
          <span class="text-xs font-bold text-on-surface font-headline">${formatINR(item.price)}</span>
          <div class="flex items-center border border-outline-variant/60 rounded-lg bg-surface-container-low overflow-hidden">
            <button class="w-6 h-6 flex items-center justify-center text-xs text-on-surface hover:bg-surface-container" onclick="Store.updateCartQuantity(${idx}, -1)">-</button>
            <span class="w-6 text-center text-xs font-mono font-medium">${item.quantity || 1}</span>
            <button class="w-6 h-6 flex items-center justify-center text-xs text-on-surface hover:bg-surface-container" onclick="Store.updateCartQuantity(${idx}, 1)">+</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  const subtotal = Store.getCartSubtotal();
  document.getElementById('cartDrawerSubtotal').textContent = formatINR(subtotal);
  document.getElementById('cartDrawerTotal').textContent = formatINR(subtotal);
}

function toggleCartDrawer(open = true) {
  initCartDrawer();
  const drawer = document.getElementById('cartDrawer');
  const panel = document.getElementById('cartDrawerPanel');
  if (open) {
    renderCartDrawer();
    drawer.classList.add('open');
    setTimeout(() => panel.classList.add('open'), 10);
    document.body.style.overflow = 'hidden';
  } else {
    panel.classList.remove('open');
    setTimeout(() => {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    }, 300);
  }
}

// Universal Slide-Over Wishlist Drawer
function initWishlistDrawer() {
  let drawer = document.getElementById('wishlistDrawer');
  if (!drawer) {
    drawer = document.createElement('div');
    drawer.id = 'wishlistDrawer';
    drawer.className = 'fixed inset-0 z-50 overflow-hidden drawer-backdrop';
    drawer.innerHTML = `
      <div class="absolute inset-0 bg-on-surface/40 backdrop-blur-sm transition-opacity" onclick="toggleWishlistDrawer(false)"></div>
      <div class="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div class="w-screen max-w-md bg-surface-container-lowest shadow-2xl flex flex-col drawer-panel" id="wishlistDrawerPanel">
          <div class="p-6 bg-surface-container-low border-b border-outline-variant/60 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-primary text-2xl">favorite</span>
              <div>
                <h3 class="font-headline text-2xl font-semibold text-on-surface">Curated Wishlist</h3>
                <span class="text-[10px] font-mono text-secondary tracking-widest uppercase">Tracked Fleet Allocations</span>
              </div>
            </div>
            <button class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface" onclick="toggleWishlistDrawer(false)">
              <span class="material-symbols-outlined text-base">close</span>
            </button>
          </div>

          <div class="flex-1 overflow-y-auto p-6 space-y-4" id="wishlistDrawerItems"></div>
        </div>
      </div>
    `;
    document.body.appendChild(drawer);
  }
}

function renderWishlistDrawer() {
  const container = document.getElementById('wishlistDrawerItems');
  if (!container) return;

  const wishlistIds = Store.getWishlist();
  if (wishlistIds.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center space-y-4">
        <div class="w-16 h-16 rounded-full bg-surface-container mx-auto flex items-center justify-center text-secondary">
          <span class="material-symbols-outlined text-3xl">favorite_border</span>
        </div>
        <div>
          <h4 class="font-headline text-xl text-on-surface font-medium">Your Wishlist is Empty</h4>
          <p class="text-xs text-on-surface-variant font-light mt-1">Bookmark your favorite devices for instant stock and price updates.</p>
        </div>
        <a href="catalog.html" class="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-primary text-on-primary text-xs font-semibold hover:bg-primary/90 transition-colors" onclick="toggleWishlistDrawer(false)">
          Explore Catalog <span class="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
    `;
    return;
  }

  const products = MOCK_PRODUCTS.filter(p => wishlistIds.includes(p.id));

  container.innerHTML = products.map(product => `
    <div class="flex gap-4 p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-xs">
      <div class="w-20 h-20 rounded-lg bg-surface-container-low flex items-center justify-center p-2 flex-shrink-0">
        <img src="${product.image}" alt="${product.title}" class="max-h-full max-w-full object-contain"/>
      </div>
      <div class="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <div class="flex items-start justify-between gap-2">
            <a href="product.html?id=${product.id}" class="text-xs font-bold text-on-surface hover:text-primary transition-colors truncate block">
              ${product.title}
            </a>
            <button class="text-secondary hover:text-error transition-colors" onclick="handleRemoveWishlist('${product.id}')">
              <span class="material-symbols-outlined text-base">close</span>
            </button>
          </div>
          <span class="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-primary/10 text-primary mt-1 inline-block">
            ${product.provenanceBadge}
          </span>
        </div>
        <div class="flex items-center justify-between pt-2">
          <span class="text-xs font-bold text-on-surface font-headline">${formatINR(product.price)}</span>
          <button class="px-3 py-1.5 rounded-lg bg-primary text-on-primary text-xs font-semibold hover:bg-primary/90 transition-colors flex items-center gap-1 shadow-xs" onclick="handleTransferWishlistToCart('${product.id}')">
            <span class="material-symbols-outlined text-[14px]">shopping_bag</span>
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleWishlistDrawer(open = true) {
  initWishlistDrawer();
  const drawer = document.getElementById('wishlistDrawer');
  const panel = document.getElementById('wishlistDrawerPanel');
  if (open) {
    renderWishlistDrawer();
    drawer.classList.add('open');
    setTimeout(() => panel.classList.add('open'), 10);
    document.body.style.overflow = 'hidden';
  } else {
    panel.classList.remove('open');
    setTimeout(() => {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    }, 300);
  }
}

function handleRemoveWishlist(id) {
  Store.toggleWishlist(id);
  renderWishlistDrawer();
}

function handleTransferWishlistToCart(id) {
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  if (product) {
    Store.addToCart(product);
    showToast('Transferred to Bag', `${product.title} is now in your vault bag.`);
    renderWishlistDrawer();
  }
}

// Global Live Search functionality
function initGlobalSearch() {
  const searchInputs = document.querySelectorAll('input[type="text"][placeholder*="Search"]');
  searchInputs.forEach(input => {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const query = input.value.trim();
        if (query) {
          window.location.href = `catalog.html?q=${encodeURIComponent(query)}`;
        }
      }
    });
  });
}

// ==========================================
// UNIVERSAL BRAND / COMPANY SELECTION MODAL
// ==========================================
let currentTargetCategory = 'smartphones';
let currentTargetCategoryName = 'Smartphone';

const COMPANY_OPTIONS = [
  {
    id: "Apple",
    displayName: "APPLE",
    badge: "Official Flagship Fleet",
    subtitle: "iPhone • Watch Ultra • AirPods Pro • MagSafe",
    iconColor: "text-neutral-800 dark:text-neutral-200",
    iconSvg: `<svg viewBox="0 0 170 170" class="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.08-7.73-7.94-12.11-14.58-6.19-9.35-11.02-20.17-14.49-32.46-3.48-12.29-5.22-23.77-5.22-34.46 0-14.58 3.59-26.68 10.77-36.31 7.18-9.63 16.29-14.54 27.33-14.75 5.67 0 11.6 1.48 17.78 4.45 6.18 2.97 10.15 4.52 11.91 4.65 1.54 0 5.86-1.63 12.96-4.9 7.1-3.26 13.43-4.66 18.99-4.18 14.15 1.13 25.13 6.64 32.95 16.54-12.65 7.64-18.84 18.06-18.57 31.25.27 10.5 4.28 19.14 12.02 25.92 7.74 6.78 17.03 10.64 27.87 11.59-2.26 6.84-5.01 13.82-8.25 20.96zM119.22 33.15c0-7.38 2.66-14.28 7.97-20.7 5.31-6.42 11.83-10.45 19.55-12.09.73 7.82-1.74 15.01-7.41 21.57-5.67 6.56-12.38 10.3-20.11 11.22z"/></svg>`
  },
  {
    id: "Samsung",
    displayName: "SAMSUNG",
    badge: "Galaxy AI & Enterprise",
    subtitle: "Galaxy S-Series • Fold • Watch Classic • Buds",
    iconColor: "text-blue-600",
    iconSvg: `<svg viewBox="0 0 24 24" class="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2zm4 8h-2V7h2v10z"/></svg>`
  },
  {
    id: "Oppo",
    displayName: "OPPO",
    badge: "Hasselblad Optics & VOOC",
    subtitle: "Find X • Reno Series • Enco Dynaudio Audio",
    iconColor: "text-emerald-600",
    iconSvg: `<svg viewBox="0 0 24 24" class="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="12" r="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17" cy="12" r="5" fill="none" stroke="currentColor" stroke-width="2"/></svg>`
  },
  {
    id: "Vivo",
    displayName: "VIVO",
    badge: "ZEISS Co-Engineered Optics",
    subtitle: "X-Series ZEISS • TWS Lossless • FlashCharge",
    iconColor: "text-sky-600",
    iconSvg: `<svg viewBox="0 0 24 24" class="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M4 4l8 16 8-16h-4l-4 8.5L8 4H4z"/></svg>`
  },
  {
    id: "Motorola",
    displayName: "MOTOROLLA",
    badge: "Razr Flip & TurboPower",
    subtitle: "Edge 50 Ultra • Razr Flip • Bose Sound",
    iconColor: "text-amber-700",
    iconSvg: `<svg viewBox="0 0 24 24" class="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M6 15c2-4 4-7 6-2 2-5 4-2 6 2-2-2-4-3-6 1-2-4-4-3-6-1z"/></svg>`
  }
];

function initBrandModal() {
  let modal = document.getElementById('brandSelectionModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'brandSelectionModal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay bg-on-surface/50 backdrop-blur-md transition-all duration-300';
    modal.innerHTML = `
      <div class="relative w-full max-w-2xl bg-surface-container-lowest/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-outline-variant/50 modal-content overflow-hidden">
        
        <!-- Ambient Decorative Glow -->
        <div class="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-24 -left-24 w-64 h-64 bg-primary-container/15 rounded-full blur-3xl pointer-events-none"></div>

        <!-- Header -->
        <div class="flex items-start justify-between pb-5 border-b border-outline-variant/30 relative z-10">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-label font-semibold tracking-widest uppercase mb-2">
              <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span id="brandModalCategoryBadge">Smartphone Curation</span>
            </div>
            <h3 class="font-headline text-2xl sm:text-3xl text-on-surface font-semibold tracking-tight" id="brandModalTitle">
              Select Authorized Company
            </h3>
            <p class="text-xs sm:text-sm text-on-surface-variant font-light mt-1" id="brandModalSubtitle">
              Choose an authorized manufacturer to explore dedicated collections.
            </p>
          </div>
          <button onclick="closeBrandModal()" aria-label="Close Company Selection" class="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors shadow-xs">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <!-- Company Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 pb-4 relative z-10" id="brandOptionsContainer">
          <!-- Populated dynamically -->
        </div>

        <!-- Footer / All Brands Option -->
        <div class="pt-4 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs relative z-10">
          <div class="flex items-center gap-2 text-secondary">
            <span class="material-symbols-outlined text-primary text-[18px]">verified</span>
            <span class="font-medium text-[11px] tracking-wide">100% Factory Sealed • Serial Registered</span>
          </div>
          <button onclick="viewAllBrandsForCategory()" class="text-primary hover:text-on-primary-fixed-variant font-semibold tracking-wide flex items-center gap-1 transition-colors group">
            <span>Browse All Brands in this Category</span>
            <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>

      </div>
    `;

    document.body.appendChild(modal);

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeBrandModal();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeBrandModal();
    });
  }
}

function openBrandModal(categoryKey, categoryDisplayName) {
  initBrandModal();

  // Normalize category key
  if (categoryKey === 'smartphone') categoryKey = 'smartphones';
  if (categoryKey === 'smartwatch') categoryKey = 'smartwatches';
  if (categoryKey === 'earbud') categoryKey = 'earbuds';
  if (categoryKey === 'headphone') categoryKey = 'headphones';
  if (categoryKey === 'powerbank') categoryKey = 'powerbanks';
  if (categoryKey === 'charger') categoryKey = 'chargers';

  currentTargetCategory = categoryKey;
  currentTargetCategoryName = categoryDisplayName || 'Product';

  document.getElementById('brandModalCategoryBadge').textContent = `${currentTargetCategoryName} Curation`;
  document.getElementById('brandModalTitle').textContent = `Select Company for ${currentTargetCategoryName}`;
  document.getElementById('brandModalSubtitle').textContent = `Choose an authorized manufacturer to explore dedicated ${currentTargetCategoryName} models.`;

  // Render company buttons
  const container = document.getElementById('brandOptionsContainer');
  container.innerHTML = COMPANY_OPTIONS.map((co) => {
    return `
      <button onclick="selectBrandAndNavigate('${co.id}')" class="group flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low/70 hover:bg-surface-container-lowest border border-outline-variant/40 hover:border-primary shadow-xs hover:shadow-lg transition-all duration-200 text-left cursor-pointer">
        <div class="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center ${co.iconColor} group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 flex-shrink-0 shadow-xs">
          ${co.iconSvg}
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between gap-2">
            <span class="font-headline text-lg sm:text-xl font-bold tracking-tight text-on-surface group-hover:text-primary transition-colors">
              ${co.displayName}
            </span>
            <span class="material-symbols-outlined text-primary text-[18px] opacity-0 group-hover:opacity-100 transform translate-x-[-6px] group-hover:translate-x-0 transition-all duration-200">
              arrow_forward
            </span>
          </div>
          <span class="text-[10px] uppercase font-mono tracking-wider font-semibold text-primary block mt-0.5">
            ${co.badge}
          </span>
          <p class="text-[11px] text-on-surface-variant font-light truncate mt-0.5">
            ${co.subtitle}
          </p>
        </div>
      </button>
    `;
  }).join('');

  const modal = document.getElementById('brandSelectionModal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBrandModal() {
  const modal = document.getElementById('brandSelectionModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function selectBrandAndNavigate(brandId) {
  closeBrandModal();
  const url = `catalog.html?category=${encodeURIComponent(currentTargetCategory)}&brand=${encodeURIComponent(brandId)}`;
  window.location.href = url;
}

function viewAllBrandsForCategory() {
  closeBrandModal();
  window.location.href = `catalog.html?category=${encodeURIComponent(currentTargetCategory)}`;
}

// Mobile Menu Drawer Handler
function toggleMobileNav(open = true) {
  let nav = document.getElementById('mobileNavDrawer');
  if (!nav) {
    nav = document.createElement('div');
    nav.id = 'mobileNavDrawer';
    nav.className = 'fixed inset-0 z-50 overflow-hidden drawer-backdrop';
    nav.innerHTML = `
      <div class="absolute inset-0 bg-on-surface/40 backdrop-blur-sm" onclick="toggleMobileNav(false)"></div>
      <div class="fixed inset-y-0 left-0 max-w-full flex pr-10">
        <div class="w-screen max-w-xs bg-surface-container-lowest shadow-2xl flex flex-col p-6 space-y-6 drawer-panel" id="mobileNavPanel">
          <div class="flex items-center justify-between pb-4 border-b border-outline-variant/40">
            <span class="font-headline text-2xl font-bold text-on-surface">Explore Portfolios</span>
            <button onclick="toggleMobileNav(false)" class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center">
              <span class="material-symbols-outlined text-base">close</span>
            </button>
          </div>

          <div class="space-y-2 flex-1 overflow-y-auto">
            <button onclick="toggleMobileNav(false); openBrandModal('smartphones', 'Smartphone')" class="w-full text-left p-3 rounded-xl hover:bg-surface-container flex items-center justify-between font-semibold text-sm text-on-surface">
              <span>Smartphone</span>
              <span class="material-symbols-outlined text-primary text-sm">chevron_right</span>
            </button>
            <button onclick="toggleMobileNav(false); openBrandModal('smartwatches', 'Smartwatch')" class="w-full text-left p-3 rounded-xl hover:bg-surface-container flex items-center justify-between font-semibold text-sm text-on-surface">
              <span>Smartwatch</span>
              <span class="material-symbols-outlined text-primary text-sm">chevron_right</span>
            </button>
            <button onclick="toggleMobileNav(false); openBrandModal('earbuds', 'Earbuds')" class="w-full text-left p-3 rounded-xl hover:bg-surface-container flex items-center justify-between font-semibold text-sm text-on-surface">
              <span>Earbuds</span>
              <span class="material-symbols-outlined text-primary text-sm">chevron_right</span>
            </button>
            <button onclick="toggleMobileNav(false); openBrandModal('headphones', 'Headphones')" class="w-full text-left p-3 rounded-xl hover:bg-surface-container flex items-center justify-between font-semibold text-sm text-on-surface">
              <span>Headphones</span>
              <span class="material-symbols-outlined text-primary text-sm">chevron_right</span>
            </button>

            <!-- Other Submenu -->
            <div class="pt-2 border-t border-outline-variant/30 space-y-1">
              <span class="text-[10px] font-label font-bold uppercase tracking-wider text-secondary px-3">Other Hardware</span>
              <button onclick="toggleMobileNav(false); openBrandModal('powerbanks', 'Powerbank')" class="w-full text-left p-3 rounded-xl hover:bg-surface-container flex items-center justify-between text-sm text-on-surface">
                <span>Powerbank</span>
                <span class="material-symbols-outlined text-primary text-sm">battery_charging_full</span>
              </button>
              <button onclick="toggleMobileNav(false); openBrandModal('chargers', 'Charger')" class="w-full text-left p-3 rounded-xl hover:bg-surface-container flex items-center justify-between text-sm text-on-surface">
                <span>Charger</span>
                <span class="material-symbols-outlined text-primary text-sm">electric_bolt</span>
              </button>
            </div>
          </div>

          <div class="pt-4 border-t border-outline-variant/30">
            <a href="catalog.html" class="w-full py-3 rounded-xl bg-primary text-on-primary text-center font-label text-xs uppercase tracking-wider font-semibold block shadow-sm">
              View All Catalog
            </a>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(nav);
  }

  const drawer = document.getElementById('mobileNavDrawer');
  const panel = document.getElementById('mobileNavPanel');
  if (open) {
    drawer.classList.add('open');
    setTimeout(() => panel.classList.add('open'), 10);
  } else {
    panel.classList.remove('open');
    setTimeout(() => drawer.classList.remove('open'), 300);
  }
}

// Universal WhatsApp Concierge Integration
window.RC_CONFIG = {
  store_name: "Rishabh Communications",
  store_phone: "+91 98980 64467",
  clean_phone: "919898064467",
  whatsapp_link: "https://wa.me/919898064467?text=Hi%20Rishabh%20Communications,%20I%20need%20assistance",
  api_base: "http://127.0.0.1:8000"
};

async function loadClientConfig() {
  try {
    const res = await fetch(`${window.RC_CONFIG.api_base}/api/config/client`);
    if (res.ok) {
      const data = await res.json();
      window.RC_CONFIG = { ...window.RC_CONFIG, ...data };
      updateDynamicWhatsAppLinks();
    }
  } catch (err) {
    console.log('Using default client config (backend offline or loading):', err);
  }
}

function updateDynamicWhatsAppLinks() {
  document.querySelectorAll('a[data-whatsapp-contact]').forEach(el => {
    el.href = window.RC_CONFIG.whatsapp_link;
  });
  document.querySelectorAll('a[data-tel-contact]').forEach(el => {
    el.href = `tel:${window.RC_CONFIG.store_phone.replace(/\s+/g, '')}`;
  });
  const floatingBtn = document.getElementById('globalWhatsAppFloatingBtn');
  if (floatingBtn) {
    floatingBtn.href = window.RC_CONFIG.whatsapp_link;
  }
}

function initGlobalWhatsAppConcierge() {
  if (document.getElementById('globalWhatsAppFloatingWrapper')) return;

  const wrapper = document.createElement('div');
  wrapper.id = 'globalWhatsAppFloatingWrapper';
  wrapper.className = 'fixed bottom-6 right-6 z-40 flex items-center gap-3 group select-none';
  wrapper.innerHTML = `
    <!-- Floating Tooltip / Label -->
    <a href="${window.RC_CONFIG.whatsapp_link}" target="_blank" rel="noopener noreferrer" 
       class="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface-container-lowest/95 backdrop-blur-md border border-primary/25 shadow-lg text-xs font-semibold text-on-surface hover:text-primary transition-all duration-200 transform translate-x-2 group-hover:translate-x-0">
      <span class="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
      <span class="font-body text-[12px] tracking-wide">Live Concierge <span class="text-secondary font-mono text-[10px]">24/7</span></span>
    </a>

    <!-- Floating Action Button -->
    <a id="globalWhatsAppFloatingBtn" href="${window.RC_CONFIG.whatsapp_link}" target="_blank" rel="noopener noreferrer" 
       aria-label="Direct WhatsApp Concierge"
       class="w-14 h-14 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.38)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.5)] hover:scale-108 active:scale-95 transition-all duration-300 relative">
      <svg class="w-7 h-7 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
      <span class="absolute top-0 right-0 -mt-1 -mr-1 flex h-3.5 w-3.5">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#25D366] border-2 border-surface"></span>
      </span>
    </a>
  `;
  document.body.appendChild(wrapper);
}

// Initializer on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initCartDrawer();
  initWishlistDrawer();
  initBrandModal();
  updateHeaderBadges();
  initGlobalSearch();
  initGlobalWhatsAppConcierge();
  loadClientConfig();

  // Listen for storage changes
  Store.subscribe((e) => {
    updateHeaderBadges();
    if (e.detail.channel === 'cart') {
      renderCartDrawer();
    } else if (e.detail.channel === 'wishlist') {
      renderWishlistDrawer();
    }
  });

  // Attach click listeners to bag and wishlist buttons
  document.querySelectorAll('button[aria-label="Shopping Bag"], a[aria-label="Shopping Bag"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleCartDrawer(true);
    });
  });

  document.querySelectorAll('button[aria-label="Wishlist"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleWishlistDrawer(true);
    });
  });
});
