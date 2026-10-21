/**
 * Rishabh Communication - Client Store Manager
 * Synchronizes Cart, Wishlist, User Profile, and Orders in localStorage
 */

const Store = {
  // Key names in localStorage
  KEYS: {
    CART: 'rc_cart_items',
    WISHLIST: 'rc_wishlist_items',
    USER: 'rc_user_profile',
    ORDERS: 'rc_orders_list',
    BOOKINGS: 'rc_concierge_bookings'
  },

  // 1. CART MANAGEMENT
  getCart() {
    try {
      const data = localStorage.getItem(this.KEYS.CART);
      if (!data) {
        // Initial sample cart matching Stitch designs (2 items)
        const initialCart = [
          {
            id: 'iphone-15-pro-max',
            title: 'Apple iPhone 15 Pro Max',
            finish: 'Natural Titanium',
            storage: '512 GB',
            price: 134900,
            image: 'assets/iphone_15_pro_max_natural.png',
            quantity: 1
          },
          {
            id: 'privacy-glass-guard',
            title: '9H Oleophobic Privacy Glass Guard',
            finish: 'Sapphire 28°',
            storage: null,
            price: 699,
            image: 'assets/privacy_glass_guard.png',
            quantity: 1
          }
        ];
        this.saveCart(initialCart);
        return initialCart;
      }
      return JSON.parse(data);
    } catch (e) {
      console.error('Error loading cart', e);
      return [];
    }
  },

  saveCart(items) {
    localStorage.setItem(this.KEYS.CART, JSON.stringify(items));
    this.emitChange('cart');
  },

  addToCart(product, options = {}) {
    const items = this.getCart();
    const finish = options.finish || (product.finishes ? product.finishes[0].name : 'Default');
    const storage = options.storage || (product.storageOptions ? product.storageOptions[0].size : null);
    const price = options.price || product.price;

    // Check if duplicate variant already exists in cart
    const existingIndex = items.findIndex(
      (item) => item.id === product.id && item.finish === finish && item.storage === storage
    );

    if (existingIndex > -1) {
      items[existingIndex].quantity += options.quantity || 1;
    } else {
      items.push({
        id: product.id,
        title: product.title,
        finish: finish,
        storage: storage,
        price: price,
        image: product.image,
        quantity: options.quantity || 1
      });
    }

    this.saveCart(items);
    return items;
  },

  removeFromCart(index) {
    const items = this.getCart();
    if (index >= 0 && index < items.length) {
      items.splice(index, 1);
      this.saveCart(items);
    }
    return items;
  },

  updateCartQuantity(index, delta) {
    const items = this.getCart();
    if (items[index]) {
      items[index].quantity += delta;
      if (items[index].quantity <= 0) {
        items.splice(index, 1);
      }
      this.saveCart(items);
    }
    return items;
  },

  clearCart() {
    this.saveCart([]);
  },

  getCartCount() {
    return this.getCart().reduce((sum, item) => sum + (item.quantity || 1), 0);
  },

  getCartSubtotal() {
    return this.getCart().reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  },

  // 2. WISHLIST MANAGEMENT
  getWishlist() {
    try {
      const data = localStorage.getItem(this.KEYS.WISHLIST);
      if (!data) {
        // Initial sample wishlist items
        const initial = ['apple-watch-ultra', 'aeropod-studio-tws'];
        localStorage.setItem(this.KEYS.WISHLIST, JSON.stringify(initial));
        return initial;
      }
      return JSON.parse(data);
    } catch (e) {
      return [];
    }
  },

  toggleWishlist(productId) {
    const list = this.getWishlist();
    const index = list.indexOf(productId);
    let added = false;
    if (index > -1) {
      list.splice(index, 1);
      added = false;
    } else {
      list.push(productId);
      added = true;
    }
    localStorage.setItem(this.KEYS.WISHLIST, JSON.stringify(list));
    this.emitChange('wishlist');
    return { added, list };
  },

  isInWishlist(productId) {
    return this.getWishlist().includes(productId);
  },

  // 3. USER PROFILE MANAGEMENT
  getUser() {
    try {
      const data = localStorage.getItem(this.KEYS.USER);
      if (!data) {
        this.saveUser(MOCK_USER);
        return MOCK_USER;
      }
      return JSON.parse(data);
    } catch (e) {
      return MOCK_USER;
    }
  },

  saveUser(user) {
    localStorage.setItem(this.KEYS.USER, JSON.stringify(user));
    this.emitChange('user');
  },

  // 4. ORDERS MANAGEMENT
  getOrders() {
    try {
      const data = localStorage.getItem(this.KEYS.ORDERS);
      if (!data) {
        const initial = MOCK_USER.activeOrders;
        localStorage.setItem(this.KEYS.ORDERS, JSON.stringify(initial));
        return initial;
      }
      return JSON.parse(data);
    } catch (e) {
      return MOCK_USER.activeOrders;
    }
  },

  addOrder(orderData) {
    const orders = this.getOrders();
    orders.unshift(orderData);
    localStorage.setItem(this.KEYS.ORDERS, JSON.stringify(orders));
    this.emitChange('orders');
    return orders;
  },

  // 5. CONCIERGE BOOKINGS
  getBookings() {
    try {
      const data = localStorage.getItem(this.KEYS.BOOKINGS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  addBooking(booking) {
    const list = this.getBookings();
    list.unshift(booking);
    localStorage.setItem(this.KEYS.BOOKINGS, JSON.stringify(list));
    this.emitChange('bookings');
    return list;
  },

  // 6. REACTIVE LISTENERS
  emitChange(channel) {
    window.dispatchEvent(new CustomEvent('rc-store-change', { detail: { channel } }));
  },

  subscribe(callback) {
    window.addEventListener('rc-store-change', callback);
  }
};
