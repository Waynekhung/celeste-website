/**
 * Celeste VVong - Main JavaScript
 * 
 * Complete interactive system:
 * 1. Mobile Navigation
 * 2. Sticky Header
 * 3. Smooth Scrolling
 * 4. Lazy Image Loading
 * 5. Newsletter Validation
 * 6. FAQ Accordion & Garment Care Accordion
 * 7. Announcement Bar Dismissal
 * 8. Lookbook Fullscreen Lightbox
 * 9. Hero Angle Switcher
 * 10. Multi-Angle Product Gallery Controller
 * 11. Tops Page Sizing, Units (in/cm) & Swatches
 * 12. ReactBits Spotlight Glow & Interactive Canvas
 * 13. Persistent Cart Store & Slide-over Bag Drawer
 * 14. Interactive Checkout Flow & Order Confirmation
 * 15. Instant Global Search System
 * 16. Atelier Policy Modals (Shipping, Returns, Terms)
 * 17. Ghostboy Quick View Modal across All Products
 * 18. Shop Category Filter & Card Specs
 * 19. Contact Form Interactive Submission
 */

// ==========================================
// ATELIER PRODUCT CATALOG DATABASE
// ==========================================
const CW_CATALOG = [
    {
        id: 'cw-contour-jacket',
        title: 'CW CONTOUR TACTILE JACKET',
        price: 348,
        category: 'tops',
        image: 'images/cw-jacket-front.jpg',
        badge: 'SIGNATURE PIECE // 01 FRONT',
        desc: 'Boxy cropped workwear silhouette engineered from 14oz structured cotton canvas. Features custom tactile 3D contour piping, acid-distressed contrast collar & hem facing, and bespoke antiqued silver CW hardware.',
        link: 'tops.html'
    },
    {
        id: 'pt-04-whip',
        title: 'WHIP CONTOUR TROUSERS - WINE',
        price: 259,
        category: 'bottoms',
        image: 'images/cw-jacket-back.jpg',
        badge: 'ARCHIVE // PT-04',
        desc: 'Relaxed flared silhouette with fluid curved contour paneling, antique silver rivet accents, and heavy bonded twill fabrication in deep wine.',
        link: 'shop.html'
    },
    {
        id: 'sk-05-meranti',
        title: 'MERANTI DRAPED MINI SKIRT',
        price: 189,
        category: 'bottoms',
        image: 'images/cw-jacket-detail.jpg',
        badge: 'ARCHIVE // SK-05',
        desc: 'Asymmetrical architectural wrap skirt featuring kinetic drape cords and deep contour hemline in rich mahogany.',
        link: 'shop.html'
    },
    {
        id: 'pt-06-cargo',
        title: 'TACTILE CARGO TROUSER - OBSIDIAN',
        price: 279,
        category: 'bottoms',
        image: 'images/cw-jacket-front.jpg',
        badge: 'ARCHIVE // PT-06',
        desc: 'Modular utilitarian cargo silhouette with 8-pocket ergonomic layout, articulated knees, and cinch-cord hems.',
        link: 'shop.html'
    },
    {
        id: 'ac-07-chain',
        title: 'CW MONOGRAM HARDWARE CHAIN',
        price: 149,
        category: 'accessories',
        image: 'images/cw-jacket-detail.jpg',
        badge: 'ARCHIVE // AC-07',
        desc: 'Heavyweight brushed stainless steel link chain featuring custom cast CW monogram clasp and signature matte finish.',
        link: 'shop.html'
    },
    {
        id: 'sk-08-vellum',
        title: 'VELLUM SCULPTURAL SKIRT',
        price: 199,
        category: 'bottoms',
        image: 'images/cw-jacket-back.jpg',
        badge: 'ARCHIVE // SK-08',
        desc: 'Structured midi silhouette with geometric pleated panels and raw frayed contour accents.',
        link: 'shop.html'
    },
    {
        id: 'nylon-track-jacket',
        title: 'Nylon Track Jacket',
        price: 410,
        category: 'tops',
        image: 'images/cw-jacket-front.jpg',
        badge: 'OUTERWEAR // TR-01',
        desc: 'Weather-resistant technical nylon with contrast piping, vented mesh interior, and dual zip closure.',
        link: 'shop.html'
    },
    {
        id: 'sig-zip-hoodie',
        title: 'Signature Zip-Up Hoodie',
        price: 290,
        category: 'tops',
        image: 'images/cw-jacket-detail.jpg',
        badge: 'FLEECE // HD-02',
        desc: '500gsm heavyweight french terry fleece with dropped shoulder boxy cut and custom metal aglets.',
        link: 'shop.html'
    },
    {
        id: 'pleated-midi-dress',
        title: 'Pleated Midi Dress',
        price: 350,
        category: 'dresses',
        image: 'images/cw-jacket-back.jpg',
        badge: 'ATELIER // DR-03',
        desc: 'Fluid pleats engineered to hold architectural structure with adjustable harness shoulder straps.',
        link: 'shop.html'
    },
    {
        id: 'boxy-crop-shirt',
        title: 'Boxy Crop Shirt',
        price: 160,
        category: 'tops',
        image: 'images/cw-jacket-front.jpg',
        badge: 'SHIRTING // SH-04',
        desc: 'Crisp poplin cotton with structured wide sleeves and minimalist hidden placket.',
        link: 'shop.html'
    },
    {
        id: 'parachute-trousers',
        title: 'Parachute Trousers',
        price: 280,
        category: 'bottoms',
        image: 'images/cw-jacket-back.jpg',
        badge: 'BOTTOMS // PA-05',
        desc: 'Ultra-wide silhouette with toggle bungees at knee and ankles for adaptable styling.',
        link: 'shop.html'
    },
    {
        id: 'ribbed-tank-top',
        title: 'Ribbed Tank Top',
        price: 90,
        category: 'tops',
        image: 'images/cw-jacket-detail.jpg',
        badge: 'BASICS // TK-06',
        desc: 'Heavy rib organic cotton with subtle embroidered CW monogram on rear collar.',
        link: 'shop.html'
    },
    {
        id: 'asymmetric-skirt',
        title: 'Asymmetric Midi Skirt',
        price: 220,
        category: 'bottoms',
        image: 'images/cw-jacket-back.jpg',
        badge: 'BOTTOMS // SK-07',
        desc: 'Diagonal drop hemline with structured wool blend and tonal topstitching.',
        link: 'shop.html'
    },
    {
        id: 'chunky-chain',
        title: 'Chunky Chain Necklace',
        price: 120,
        category: 'accessories',
        image: 'images/cw-jacket-detail.jpg',
        badge: 'JEWELRY // NK-08',
        desc: 'Interlocking chunky links with antique silver galvanic finish and laser-engraved monogram.',
        link: 'shop.html'
    },
    {
        id: 'monogram-beanie',
        title: 'Monogram Beanie',
        price: 85,
        category: 'accessories',
        image: 'images/cw-jacket-front.jpg',
        badge: 'HEADWEAR // BN-09',
        desc: '100% Merino wool ribbed knit with woven atelier label.',
        link: 'shop.html'
    },
    {
        id: 'canvas-tote',
        title: 'Heavyweight Canvas Tote',
        price: 150,
        category: 'accessories',
        image: 'images/cw-jacket-detail.jpg',
        badge: 'LUGGAGE // TT-10',
        desc: '20oz industrial raw duck canvas with reinforced handles and interior zip compartment.',
        link: 'shop.html'
    },
    {
        id: 'tech-fleece-vest',
        title: 'Tech-Fleece Vest',
        price: 260,
        category: 'tops',
        image: 'images/cw-jacket-front.jpg',
        badge: 'LAYER // VT-11',
        desc: 'Polartec fleece body with bonded ripstop storm flaps and two-way zipper.',
        link: 'shop.html'
    },
    {
        id: 'wide-leg-denim',
        title: 'Wide Leg Denim',
        price: 310,
        category: 'bottoms',
        image: 'images/cw-jacket-back.jpg',
        badge: 'DENIM // DN-12',
        desc: '13.5oz vintage wash raw selvedge denim with curved forward seam silhouette.',
        link: 'shop.html'
    },
    {
        id: 'padded-crossbody',
        title: 'Padded Nylon Crossbody',
        price: 190,
        category: 'accessories',
        image: 'images/cw-jacket-detail.jpg',
        badge: 'BAGS // CB-13',
        desc: 'Puff quilted water-repellent shell with quick-release aluminum tactical buckle.',
        link: 'shop.html'
    }
];

// Helper to look up a product by ID or title snippet
function findProduct(query) {
    if (!query) return CW_CATALOG[0];
    const q = query.toLowerCase().trim();
    return CW_CATALOG.find(p => p.id === q || p.title.toLowerCase().includes(q) || q.includes(p.title.toLowerCase())) || CW_CATALOG[0];
}

// ==========================================
// PERSISTENT CART STORE (LOCALSTORAGE)
// ==========================================
const CART_STORAGE_KEY = 'celeste_vvong_cart_v2';

function getCart() {
    try {
        const stored = localStorage.getItem(CART_STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (e) {
        return [];
    }
}

function saveCart(cart) {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {}
    updateAllCartBadges();
}

function getCartCount() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.quantity || 1), 0);
}

function getCartSubtotal() {
    const cart = getCart();
    return cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
}

// Updates all cart count badges and text across the page
function updateAllCartBadges() {
    const count = getCartCount();
    
    // Update badge elements
    document.querySelectorAll('.cart-count-badge').forEach(badge => {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'inline-flex' : 'none';
    });

    // Update header links containing Cart (X)
    document.querySelectorAll('a, button').forEach(el => {
        if (el.textContent && /Cart\s*\(\d+\)/i.test(el.textContent)) {
            el.textContent = `Cart (${count})`;
        }
    });

    // Update cart drawer pill if drawer exists
    const drawerPill = document.querySelector('.cw-cart-count-pill');
    if (drawerPill) {
        drawerPill.textContent = `${count} ${count === 1 ? 'ITEM' : 'ITEMS'}`;
    }

    if (window.updateCartCount) {
        window.updateCartCount(count);
    }
}

window.updateCartCount = function(newCount) {
    document.querySelectorAll('.cart-count-badge').forEach(badge => {
        badge.innerText = newCount;
        badge.style.display = newCount <= 0 ? 'none' : 'inline-flex';
    });
};

// Global Add to Cart Function
function addToCart(item) {
    const cart = getCart();
    const size = item.size || 'M';
    const color = item.color || 'Standard';
    
    // Check if matching item exists
    const existingIndex = cart.findIndex(c => c.id === item.id && c.size === size && c.color === color);
    if (existingIndex > -1) {
        cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + (item.quantity || 1);
    } else {
        cart.push({
            id: item.id || 'cw-contour-jacket',
            title: item.title || 'CW CONTOUR TACTILE JACKET',
            price: Number(item.price) || 348,
            size: size,
            color: color,
            image: item.image || 'images/cw-jacket-front.jpg',
            quantity: item.quantity || 1
        });
    }

    saveCart(cart);
    renderCartDrawer();
    openCartDrawer();
    showToast(`Added "${item.title || 'Item'}" to bag.`);
}

function updateCartItemQty(index, delta) {
    const cart = getCart();
    if (!cart[index]) return;
    
    cart[index].quantity = (cart[index].quantity || 1) + delta;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    
    saveCart(cart);
    renderCartDrawer();
}

function removeCartItem(index) {
    const cart = getCart();
    if (!cart[index]) return;
    const removedTitle = cart[index].title;
    cart.splice(index, 1);
    saveCart(cart);
    renderCartDrawer();
    showToast(`Removed "${removedTitle}" from bag.`);
}

// Toast notification helper
let toastEl = null;
function showToast(msg) {
    if (!toastEl) {
        toastEl = document.querySelector('.cw-toast');
        if (!toastEl) {
            toastEl = document.createElement('div');
            toastEl.className = 'cw-toast';
            toastEl.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span class="cw-toast-msg">Added to bag</span>
            `;
            document.body.appendChild(toastEl);
        }
    }
    const msgSpan = toastEl.querySelector('.cw-toast-msg');
    if (msgSpan) msgSpan.textContent = msg;
    toastEl.classList.add('is-visible');
    clearTimeout(toastEl._timer);
    toastEl._timer = setTimeout(() => {
        toastEl.classList.remove('is-visible');
    }, 3200);
}

// ==========================================
// CART DRAWER (SLIDE-OVER BAG)
// ==========================================
let cartBackdropEl = null;

function ensureCartDrawer() {
    if (cartBackdropEl) return cartBackdropEl;
    
    cartBackdropEl = document.querySelector('.cw-cart-backdrop');
    if (!cartBackdropEl) {
        cartBackdropEl = document.createElement('div');
        cartBackdropEl.className = 'cw-cart-backdrop';
        cartBackdropEl.setAttribute('aria-hidden', 'true');
        cartBackdropEl.innerHTML = `
            <div class="cw-cart-drawer">
                <div class="cw-cart-header">
                    <h2 class="cw-cart-title">
                        <span>SHOPPING BAG</span>
                        <span class="cw-cart-count-pill">0 ITEMS</span>
                    </h2>
                    <button type="button" class="cw-cart-close" aria-label="Close shopping bag">&times;</button>
                </div>
                <div class="cw-cart-shipping-bar">
                    <!-- Dynamic threshold filled via renderCartDrawer -->
                </div>
                <div class="cw-cart-body">
                    <!-- Dynamic items rendered here -->
                </div>
                <div class="cw-cart-footer">
                    <!-- Dynamic subtotal and checkout buttons -->
                </div>
            </div>
        `;
        document.body.appendChild(cartBackdropEl);

        // Close on backdrop click
        cartBackdropEl.addEventListener('click', (e) => {
            if (e.target === cartBackdropEl) closeCartDrawer();
        });

        // Close on close button
        const closeBtn = cartBackdropEl.querySelector('.cw-cart-close');
        if (closeBtn) closeBtn.addEventListener('click', closeCartDrawer);
    }
    return cartBackdropEl;
}

function openCartDrawer() {
    ensureCartDrawer();
    renderCartDrawer();
    cartBackdropEl.classList.add('is-open');
    cartBackdropEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
    if (!cartBackdropEl) return;
    cartBackdropEl.classList.remove('is-open');
    cartBackdropEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function renderCartDrawer() {
    ensureCartDrawer();
    const cart = getCart();
    const count = getCartCount();
    const subtotal = getCartSubtotal();
    
    const countPill = cartBackdropEl.querySelector('.cw-cart-count-pill');
    if (countPill) countPill.textContent = `${count} ${count === 1 ? 'ITEM' : 'ITEMS'}`;

    // Shipping threshold
    const shippingBar = cartBackdropEl.querySelector('.cw-cart-shipping-bar');
    if (shippingBar) {
        const threshold = 300;
        if (subtotal >= threshold && subtotal > 0) {
            shippingBar.className = 'cw-cart-shipping-bar is-unlocked';
            shippingBar.innerHTML = `✓ COMPLIMENTARY EXPRESS SHIPPING UNLOCKED`;
        } else if (subtotal > 0) {
            shippingBar.className = 'cw-cart-shipping-bar';
            const diff = threshold - subtotal;
            shippingBar.innerHTML = `Add <strong>RM ${diff.toFixed(2)}</strong> more for Complimentary Express Shipping`;
        } else {
            shippingBar.className = 'cw-cart-shipping-bar';
            shippingBar.innerHTML = `Complimentary shipping on all orders over RM 300`;
        }
    }

    // Body
    const bodyEl = cartBackdropEl.querySelector('.cw-cart-body');
    const footerEl = cartBackdropEl.querySelector('.cw-cart-footer');

    if (cart.length === 0) {
        bodyEl.innerHTML = `
            <div class="cw-cart-empty">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <p>Your shopping bag is currently empty.</p>
                <a href="shop.html" class="cw-cart-empty-btn" onclick="closeCartDrawer()">EXPLORE ARCHIVE &rarr;</a>
            </div>
        `;
        footerEl.innerHTML = `
            <button type="button" class="cw-cart-continue-btn" onclick="closeCartDrawer()">CONTINUE BROWSING</button>
        `;
        return;
    }

    // Render Items
    let itemsHtml = '<div class="cw-cart-items-list">';
    cart.forEach((item, index) => {
        const itemTotal = (item.price * (item.quantity || 1)).toFixed(2);
        itemsHtml += `
            <div class="cw-cart-item">
                <img src="${item.image || 'images/cw-jacket-front.jpg'}" alt="${item.title}" class="cw-cart-item-img">
                <div class="cw-cart-item-info">
                    <div>
                        <h4 class="cw-cart-item-title">${item.title}</h4>
                        <div class="cw-cart-item-meta">SIZE: ${item.size || 'M'} &bull; ${item.color || 'STANDARD'}</div>
                    </div>
                    <div class="cw-cart-item-bottom">
                        <div class="cw-cart-stepper">
                            <button type="button" class="cw-cart-stepper-btn" onclick="updateCartItemQty(${index}, -1)" aria-label="Decrease quantity">&minus;</button>
                            <span class="cw-cart-stepper-val">${item.quantity || 1}</span>
                            <button type="button" class="cw-cart-stepper-btn" onclick="updateCartItemQty(${index}, 1)" aria-label="Increase quantity">+</button>
                        </div>
                        <div style="text-align: right;">
                            <div class="cw-cart-item-price">RM ${itemTotal}</div>
                            <button type="button" class="cw-cart-remove-btn" onclick="removeCartItem(${index})">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    itemsHtml += '</div>';
    bodyEl.innerHTML = itemsHtml;

    // Footer summary
    const shippingCost = (subtotal >= 300 || subtotal === 0) ? 0 : 15;
    const finalTotal = (subtotal + shippingCost).toFixed(2);

    footerEl.innerHTML = `
        <div class="cw-cart-summary-line">
            <span>SUBTOTAL</span>
            <span style="font-family: ui-monospace, monospace;">RM ${subtotal.toFixed(2)}</span>
        </div>
        <div class="cw-cart-summary-line">
            <span>SHIPPING</span>
            <span style="font-family: ui-monospace, monospace;">${shippingCost === 0 ? 'FREE' : 'RM 15.00'}</span>
        </div>
        <div class="cw-cart-summary-line cw-cart-summary-total">
            <span>ESTIMATED TOTAL</span>
            <span style="font-family: ui-monospace, monospace;">RM ${finalTotal}</span>
        </div>
        <button type="button" class="cw-cart-checkout-btn" onclick="openCheckoutModal()">
            <span>CHECKOUT &bull; RM ${finalTotal}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
        <button type="button" class="cw-cart-continue-btn" onclick="closeCartDrawer()">CONTINUE SHOPPING</button>
    `;
}

// Make functions globally available for inline onclick attributes
window.closeCartDrawer = closeCartDrawer;
window.updateCartItemQty = updateCartItemQty;
window.removeCartItem = removeCartItem;

// ==========================================
// CHECKOUT MODAL & SIMULATED ORDER FLOW
// ==========================================
let checkoutBackdropEl = null;

function ensureCheckoutModal() {
    if (checkoutBackdropEl) return checkoutBackdropEl;
    
    checkoutBackdropEl = document.querySelector('.cw-checkout-backdrop');
    if (!checkoutBackdropEl) {
        checkoutBackdropEl = document.createElement('div');
        checkoutBackdropEl.className = 'cw-checkout-backdrop';
        checkoutBackdropEl.setAttribute('aria-hidden', 'true');
        checkoutBackdropEl.innerHTML = `
            <div class="cw-checkout-dialog">
                <div class="cw-checkout-header">
                    <h3>Atelier Checkout</h3>
                    <button type="button" class="cw-cart-close" onclick="closeCheckoutModal()">&times;</button>
                </div>
                <div class="cw-checkout-content">
                    <!-- Dynamic form or success view -->
                </div>
            </div>
        `;
        document.body.appendChild(checkoutBackdropEl);

        checkoutBackdropEl.addEventListener('click', (e) => {
            if (e.target === checkoutBackdropEl) closeCheckoutModal();
        });
    }
    return checkoutBackdropEl;
}

function openCheckoutModal() {
    closeCartDrawer();
    ensureCheckoutModal();
    const cart = getCart();
    const subtotal = getCartSubtotal();
    const shippingCost = (subtotal >= 300 || subtotal === 0) ? 0 : 15;
    const finalTotal = (subtotal + shippingCost).toFixed(2);

    const contentEl = checkoutBackdropEl.querySelector('.cw-checkout-content');
    contentEl.innerHTML = `
        <form id="cw-checkout-form">
            <div style="font-size: 0.78rem; color: #a1a1aa; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 12px; font-family: ui-monospace, monospace;">
                ORDER SUMMARY // ${getCartCount()} ITEMS &bull; RM ${finalTotal}
            </div>

            <div class="cw-checkout-form-grid">
                <div>
                    <label class="cw-field-label">First Name *</label>
                    <input type="text" class="cw-field-input" required placeholder="Celeste" value="Angela">
                </div>
                <div>
                    <label class="cw-field-label">Last Name *</label>
                    <input type="text" class="cw-field-input" required placeholder="Wong" value="Tan">
                </div>
                <div class="full-span">
                    <label class="cw-field-label">Email Address *</label>
                    <input type="email" class="cw-field-input" required placeholder="hello@celestevvong.com" value="angela@atelier.my">
                </div>
                <div class="full-span">
                    <label class="cw-field-label">Delivery Street Address *</label>
                    <input type="text" class="cw-field-input" required placeholder="123 Jalan Bukit Bintang" value="18 Jalan Ampang, Atelier Suite 4A">
                </div>
                <div>
                    <label class="cw-field-label">City *</label>
                    <input type="text" class="cw-field-input" required placeholder="Kuala Lumpur" value="Kuala Lumpur">
                </div>
                <div>
                    <label class="cw-field-label">Postal Code *</label>
                    <input type="text" class="cw-field-input" required placeholder="50450" value="50450">
                </div>
            </div>

            <label class="cw-field-label">Payment Method</label>
            <div class="cw-pay-options">
                <div class="cw-pay-pill is-selected" onclick="selectPayPill(this)">Credit Card</div>
                <div class="cw-pay-pill" onclick="selectPayPill(this)">Apple Pay</div>
                <div class="cw-pay-pill" onclick="selectPayPill(this)">FPX Banking</div>
            </div>

            <button type="submit" class="cw-cart-checkout-btn" style="margin-top: 10px;">
                <span>AUTHORIZE &bull; RM ${finalTotal}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </button>
        </form>
    `;

    const form = contentEl.querySelector('#cw-checkout-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const orderId = 'CW-' + Math.floor(100000 + Math.random() * 900000);
        
        // Show success state
        contentEl.innerHTML = `
            <div class="cw-order-success">
                <div class="cw-order-success-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h2>Acquisition Confirmed</h2>
                <div class="cw-order-code">ORDER ID: ${orderId}</div>
                <p>
                    Thank you for your acquisition. A detailed confirmation receipt, garment manifesto, and courier dispatch tracking have been transmitted to your email.
                </p>
                <div style="font-family: ui-monospace, monospace; font-size: 0.74rem; color: #71717a; margin-bottom: 24px;">
                    ESTIMATED DISPATCH: 24–48 HOURS &bull; KUALA LUMPUR ATELIER
                </div>
                <button type="button" class="cw-cart-checkout-btn" onclick="closeCheckoutModal()">
                    RETURN TO STORE
                </button>
            </div>
        `;

        // Clear Cart
        saveCart([]);
    });

    checkoutBackdropEl.classList.add('is-open');
    checkoutBackdropEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
    if (!checkoutBackdropEl) return;
    checkoutBackdropEl.classList.remove('is-open');
    checkoutBackdropEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function selectPayPill(el) {
    if (!el || !el.parentElement) return;
    el.parentElement.querySelectorAll('.cw-pay-pill').forEach(p => p.classList.remove('is-selected'));
    el.classList.add('is-selected');
}

window.openCheckoutModal = openCheckoutModal;
window.closeCheckoutModal = closeCheckoutModal;
window.selectPayPill = selectPayPill;

// ==========================================
// SEARCH MODAL SYSTEM
// ==========================================
let searchBackdropEl = null;

function ensureSearchModal() {
    if (searchBackdropEl) return searchBackdropEl;

    searchBackdropEl = document.querySelector('.cw-search-backdrop');
    if (!searchBackdropEl) {
        searchBackdropEl = document.createElement('div');
        searchBackdropEl.className = 'cw-search-backdrop';
        searchBackdropEl.setAttribute('aria-hidden', 'true');
        searchBackdropEl.innerHTML = `
            <div class="cw-search-dialog">
                <div class="cw-search-input-wrap">
                    <svg class="cw-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input type="text" class="cw-search-input" placeholder="Search archive (e.g. jacket, denim, cargo, skirt)..." autofocus>
                    <button type="button" class="cw-search-close" onclick="closeSearchModal()">&times;</button>
                </div>
                <div class="cw-search-tags">
                    <span class="cw-search-tags-label">Trending:</span>
                    <button type="button" class="cw-search-tag" onclick="setSearchQuery('Contour Jacket')">Contour Jacket</button>
                    <button type="button" class="cw-search-tag" onclick="setSearchQuery('Trousers')">Trousers</button>
                    <button type="button" class="cw-search-tag" onclick="setSearchQuery('Denim')">Denim</button>
                    <button type="button" class="cw-search-tag" onclick="setSearchQuery('Skirt')">Skirt</button>
                    <button type="button" class="cw-search-tag" onclick="setSearchQuery('Chain')">Chain</button>
                </div>
                <div class="cw-search-results">
                    <!-- Dynamic search matches -->
                </div>
            </div>
        `;
        document.body.appendChild(searchBackdropEl);

        searchBackdropEl.addEventListener('click', (e) => {
            if (e.target === searchBackdropEl) closeSearchModal();
        });

        const input = searchBackdropEl.querySelector('.cw-search-input');
        input.addEventListener('input', (e) => {
            renderSearchResults(e.target.value);
        });
    }
    return searchBackdropEl;
}

function openSearchModal() {
    ensureSearchModal();
    const input = searchBackdropEl.querySelector('.cw-search-input');
    if (input) {
        input.value = '';
        setTimeout(() => input.focus(), 50);
    }
    renderSearchResults('');
    searchBackdropEl.classList.add('is-open');
    searchBackdropEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeSearchModal() {
    if (!searchBackdropEl) return;
    searchBackdropEl.classList.remove('is-open');
    searchBackdropEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function setSearchQuery(query) {
    ensureSearchModal();
    const input = searchBackdropEl.querySelector('.cw-search-input');
    if (input) {
        input.value = query;
        renderSearchResults(query);
    }
}

function renderSearchResults(query) {
    ensureSearchModal();
    const resultsContainer = searchBackdropEl.querySelector('.cw-search-results');
    const q = query.toLowerCase().trim();

    const matches = CW_CATALOG.filter(p => {
        if (!q) return true; // show all trending on empty
        return p.title.toLowerCase().includes(q) ||
               p.category.toLowerCase().includes(q) ||
               p.desc.toLowerCase().includes(q);
    });

    if (matches.length === 0) {
        resultsContainer.innerHTML = `
            <div style="padding: 24px; text-align: center; color: #71717a; font-size: 0.9rem;">
                No archive pieces matching "<strong>${query}</strong>" were located.
            </div>
        `;
        return;
    }

    let html = '';
    matches.forEach(item => {
        html += `
            <div class="cw-search-result-item" onclick="selectSearchResult('${item.id}')">
                <img src="${item.image}" alt="${item.title}" class="cw-search-result-img">
                <div class="cw-search-result-info">
                    <h4 class="cw-search-result-title">${item.title}</h4>
                    <span class="cw-search-result-meta">${item.badge} &bull; ${item.category.toUpperCase()}</span>
                </div>
                <div class="cw-search-result-price">RM ${item.price}</div>
            </div>
        `;
    });
    resultsContainer.innerHTML = html;
}

function selectSearchResult(productId) {
    const product = CW_CATALOG.find(p => p.id === productId);
    closeSearchModal();
    if (product) {
        if (product.link && window.location.pathname.endsWith(product.link)) {
            // Already on product page
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Open in Quick View immediately
            openQvModal(product.image, product.title, `RM ${product.price}`, product.desc, product.id);
        }
    }
}

window.openSearchModal = openSearchModal;
window.closeSearchModal = closeSearchModal;
window.setSearchQuery = setSearchQuery;
window.selectSearchResult = selectSearchResult;

// ==========================================
// POLICY MODAL (SHIPPING, RETURNS, TERMS)
// ==========================================
let policyBackdropEl = null;

function ensurePolicyModal() {
    if (policyBackdropEl) return policyBackdropEl;

    policyBackdropEl = document.querySelector('.cw-policy-backdrop');
    if (!policyBackdropEl) {
        policyBackdropEl = document.createElement('div');
        policyBackdropEl.className = 'cw-policy-backdrop';
        policyBackdropEl.setAttribute('aria-hidden', 'true');
        policyBackdropEl.innerHTML = `
            <div class="cw-policy-dialog">
                <button type="button" class="cw-cart-close" style="position: absolute; top: 20px; right: 24px;" onclick="closePolicyModal()">&times;</button>
                <div class="cw-policy-content">
                    <!-- Dynamic policy text -->
                </div>
            </div>
        `;
        document.body.appendChild(policyBackdropEl);

        policyBackdropEl.addEventListener('click', (e) => {
            if (e.target === policyBackdropEl) closePolicyModal();
        });
    }
    return policyBackdropEl;
}

function openPolicyModal(type) {
    ensurePolicyModal();
    const content = policyBackdropEl.querySelector('.cw-policy-content');
    
    if (type === 'shipping' || type === 'returns') {
        content.innerHTML = `
            <h2>Shipping & Returns Policy</h2>
            <div style="font-family: ui-monospace, monospace; font-size: 0.72rem; color: #71717a; margin-bottom: 20px; letter-spacing: 0.1em; text-transform: uppercase;">
                ATELIER LOGISTICS // GLOBAL DISPATCH
            </div>
            <h3>Domestic Shipping (Malaysia)</h3>
            <p>We provide complimentary express delivery on all orders exceeding RM 300 across Peninsular and East Malaysia. Standard courier delivery takes 1–3 business days with signature required upon delivery.</p>
            
            <h3>Worldwide Shipping</h3>
            <p>International courier shipping via DHL Express operates within 3–7 business days. Customs duties and local import taxes are handled transparently at checkout where supported.</p>

            <h3>Returns & Exchanges</h3>
            <p>We accept return and size exchange requests within 14 calendar days from receipt of package. Garments must remain unworn, unwashed, in original condition with custom CW hardware tags and atelier packaging intact.</p>
            <p>To initiate a return, contact our concierge directly at <strong>info@celestevvong.com</strong> with your order identifier.</p>
            
            <button type="button" class="cw-cart-checkout-btn" style="margin-top: 24px;" onclick="closePolicyModal()">I UNDERSTAND</button>
        `;
    } else {
        content.innerHTML = `
            <h2>Atelier Terms of Service</h2>
            <div style="font-family: ui-monospace, monospace; font-size: 0.72rem; color: #71717a; margin-bottom: 20px; letter-spacing: 0.1em; text-transform: uppercase;">
                LEGAL & ETHICAL PROTOCOLS // EST. 2026
            </div>
            <h3>Atelier Authenticity</h3>
            <p>Every Celeste VVong silhouette is conceived and engineered with proprietary custom hardware, ethical cotton canvas, and hand-finished contour detailing. Unauthorized reproduction or reverse engineering is strictly prohibited.</p>
            
            <h3>Limited Edition Capsules</h3>
            <p>Certain archive pieces are produced in limited quantities. Adding an item to the shopping bag does not reserve inventory until authorization is completed.</p>

            <h3>Privacy & Atelier Security</h3>
            <p>Customer contact coordinates and transaction credentials are processed under strict cryptographic protocols and never shared or sold to outside parties.</p>
            
            <button type="button" class="cw-cart-checkout-btn" style="margin-top: 24px;" onclick="closePolicyModal()">AGREE & CONTINUE</button>
        `;
    }

    policyBackdropEl.classList.add('is-open');
    policyBackdropEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closePolicyModal() {
    if (!policyBackdropEl) return;
    policyBackdropEl.classList.remove('is-open');
    policyBackdropEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

window.openPolicyModal = openPolicyModal;
window.closePolicyModal = closePolicyModal;

// ==========================================
// DYNAMIC QUICK VIEW MODAL
// ==========================================
let currentQvProduct = null;
let currentQvSize = 'M';

function ensureQuickViewModal() {
    let qvModal = document.querySelector('.quickview-modal-backdrop');
    if (!qvModal) {
        qvModal = document.createElement('div');
        qvModal.className = 'quickview-modal-backdrop';
        qvModal.setAttribute('aria-hidden', 'true');
        qvModal.innerHTML = `
            <div class="quickview-modal-dialog">
                <button class="quickview-close-btn" aria-label="Close modal">&times;</button>
                <div class="quickview-gallery">
                    <div class="quickview-main-image">
                        <img id="qv-main-img" src="images/cw-jacket-front.jpg" alt="Quick view product image">
                    </div>
                    <div class="quickview-thumbs">
                        <div class="quickview-thumb is-active" data-src="images/cw-jacket-front.jpg">
                            <img src="images/cw-jacket-front.jpg" alt="Front view">
                        </div>
                        <div class="quickview-thumb" data-src="images/cw-jacket-detail.jpg">
                            <img src="images/cw-jacket-detail.jpg" alt="Detail view">
                        </div>
                        <div class="quickview-thumb" data-src="images/cw-jacket-back.jpg">
                            <img src="images/cw-jacket-back.jpg" alt="Back view">
                        </div>
                    </div>
                </div>
                <div class="quickview-details">
                    <span class="quickview-edition">AUTUMN / WINTER 2026 ARCHIVE</span>
                    <h2 class="quickview-title">CW CONTOUR TACTILE JACKET</h2>
                    <div class="quickview-price">RM 348</div>
                    <p class="quickview-desc">
                        Boxy cropped workwear silhouette engineered from 14oz structured cotton canvas.
                    </p>
                    <div class="quickview-options">
                        <div class="quickview-options-title">Select Size:</div>
                        <div class="size-pill-group">
                            <button class="size-pill" type="button">S</button>
                            <button class="size-pill is-selected" type="button">M</button>
                            <button class="size-pill" type="button">L</button>
                            <button class="size-pill" type="button">XL</button>
                        </div>
                    </div>
                    <button class="quickview-cta-btn" type="button">Add to Bag — RM 348</button>
                    <a href="tops.html" class="quickview-extra-link">View Full Piece &rarr;</a>
                </div>
            </div>
        `;
        document.body.appendChild(qvModal);
    }
    return qvModal;
}

function openQvModal(imageSrc, title, price, desc, productId) {
    const qvModal = ensureQuickViewModal();
    const qvMainImg = qvModal.querySelector('#qv-main-img');
    const qvTitle = qvModal.querySelector('.quickview-title');
    const qvPrice = qvModal.querySelector('.quickview-price');
    const qvDesc = qvModal.querySelector('.quickview-desc');
    const qvCta = qvModal.querySelector('.quickview-cta-btn');
    const qvLink = qvModal.querySelector('.quickview-extra-link');

    const product = findProduct(productId || title);
    currentQvProduct = product;
    currentQvSize = 'M';

    const displayTitle = title || product.title;
    const displayPrice = price || (product.price ? `RM ${product.price}` : 'RM 348');
    const displayImg = imageSrc || product.image;
    const displayDesc = desc || product.desc;

    if (qvMainImg && displayImg) qvMainImg.src = displayImg;
    if (qvTitle) qvTitle.textContent = displayTitle;
    if (qvPrice) qvPrice.textContent = displayPrice;
    if (qvDesc) qvDesc.textContent = displayDesc;
    if (qvCta) qvCta.textContent = `Add to Bag — ${displayPrice}`;
    if (qvLink) qvLink.href = product.link || 'tops.html';

    // Reset size pills
    qvModal.querySelectorAll('.size-pill').forEach(pill => {
        pill.classList.toggle('is-selected', pill.textContent.trim() === 'M');
    });

    qvModal.classList.add('is-open');
    qvModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeQvModal() {
    const qvModal = document.querySelector('.quickview-modal-backdrop');
    if (!qvModal) return;
    qvModal.classList.remove('is-open');
    qvModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

window.openQvModal = openQvModal;
window.closeQvModal = closeQvModal;

// ==========================================
// DOMContentLoaded INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {

    // Sync all cart numbers from storage on load
    updateAllCartBadges();

    // 1. Mobile Navigation
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('is-active');
            mainNav.classList.toggle('is-active');
        });
    }

    // 2. Sticky Header
    const header = document.querySelector('.site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('is-sticky');
            } else {
                header.classList.remove('is-sticky');
            }
        });
    }

    // 3. Announcement Bar Close
    const announcementBar = document.querySelector('.announcement-bar');
    const announcementCloseBtn = document.querySelector('.announcement-bar-close');
    if (announcementBar && announcementCloseBtn) {
        if (sessionStorage.getItem('announcementClosed') === 'true') {
            announcementBar.style.display = 'none';
        }
        announcementCloseBtn.addEventListener('click', () => {
            announcementBar.style.display = 'none';
            sessionStorage.setItem('announcementClosed', 'true');
        });
    }

    // 4. Cart Button & Link Listeners across ALL pages
    document.querySelectorAll('.cart-toggle, [aria-label="Open cart"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openCartDrawer();
        });
    });

    document.querySelectorAll('a, button').forEach(el => {
        const txt = el.textContent ? el.textContent.trim() : '';
        if (/^Cart\s*(\(\d+\))?$/i.test(txt)) {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                openCartDrawer();
            });
        }
    });

    // 5. Search Button & Link Listeners across ALL pages
    document.querySelectorAll('.search-toggle, [aria-label="Search"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openSearchModal();
        });
    });

    document.querySelectorAll('a, button').forEach(el => {
        const txt = el.textContent ? el.textContent.trim() : '';
        if (txt === 'Search') {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                openSearchModal();
            });
        }
    });

    // 6. Policy Links in Footers (Shipping & Returns, Terms of Service)
    document.querySelectorAll('a').forEach(link => {
        const text = link.textContent ? link.textContent.trim() : '';
        const href = link.getAttribute('href') || '';
        
        if (text.includes('Shipping & Returns') || href.includes('shipping-returns')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                openPolicyModal('shipping');
            });
        } else if (text.includes('Terms of Service') || href.includes('terms')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                openPolicyModal('terms');
            });
        }
    });

    // 7. Newsletter Forms Validation & Feedback
    document.querySelectorAll('.newsletter-form').forEach(form => {
        const emailInput = form.querySelector('input[type="email"]');
        if (!emailInput) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const val = emailInput.value.trim();
            const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

            if (isValid) {
                let thankYouMsg = form.parentElement.querySelector('.thank-you-msg');
                if (!thankYouMsg) {
                    thankYouMsg = document.createElement('p');
                    thankYouMsg.className = 'thank-you-msg';
                    thankYouMsg.style.color = '#4ade80';
                    thankYouMsg.style.fontFamily = 'ui-monospace, monospace';
                    thankYouMsg.style.fontSize = '0.85rem';
                    thankYouMsg.style.marginTop = '12px';
                    form.insertAdjacentElement('afterend', thankYouMsg);
                }
                thankYouMsg.textContent = "Thank you — you have been admitted to the atelier chronicle.";
                thankYouMsg.style.display = 'block';
                form.style.display = 'none';
                showToast("Newsletter subscription confirmed.");
            } else {
                alert('Please enter a valid email address.');
            }
        });
    });

    // 8. Contact Page Form Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = (document.getElementById('name') || {}).value || 'Valued Patron';
            const subject = (document.getElementById('subject') || {}).value || 'Inquiry';
            const email = (document.getElementById('email') || {}).value || '';

            const parentCol = contactForm.parentElement;
            if (parentCol) {
                parentCol.innerHTML = `
                    <div style="padding: 30px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px;">
                        <div style="color: #4ade80; font-size: 1.5rem; margin-bottom: 12px;">✓</div>
                        <h2 style="font-size: 1.3rem; margin: 0 0 10px;">Message Transmitted</h2>
                        <p style="color: #a1a1aa; line-height: 1.6; margin-bottom: 16px;">
                            Thank you, <strong>${name}</strong>. Your communication regarding <em>${subject}</em> has been safely received by the Kuala Lumpur atelier. A confirmation has been transmitted to <strong>${email}</strong>.
                        </p>
                        <div style="font-family: ui-monospace, monospace; font-size: 0.72rem; color: #71717a;">
                            RESPONSE TIME: 24–48 BUSINESS HOURS &bull; EST. 2026
                        </div>
                    </div>
                `;
            }
            showToast("Message sent to atelier concierge.");
        });
    }

    // 9. FAQ Accordions (Contact Page)
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.closest('.faq-item');
            if (item) item.classList.toggle('is-open');
        });
    });

    // 10. Lookbook Lightbox
    const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');
    if (lightboxTriggers.length > 0) {
        let lightboxOverlay = document.querySelector('.lightbox-overlay');
        if (!lightboxOverlay) {
            lightboxOverlay = document.createElement('div');
            lightboxOverlay.className = 'lightbox-overlay';
            lightboxOverlay.innerHTML = `
                <div class="lightbox-content">
                    <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
                    <button class="lightbox-prev" aria-label="Previous image">&#10094;</button>
                    <img class="lightbox-image" src="" alt="Lookbook Image">
                    <button class="lightbox-next" aria-label="Next image">&#10095;</button>
                </div>
            `;
            document.body.appendChild(lightboxOverlay);
        }

        const lightboxImg = lightboxOverlay.querySelector('.lightbox-image');
        const closeBtn = lightboxOverlay.querySelector('.lightbox-close');
        const prevBtn = lightboxOverlay.querySelector('.lightbox-prev');
        const nextBtn = lightboxOverlay.querySelector('.lightbox-next');

        let currentImageIndex = 0;
        const imagesList = Array.from(lightboxTriggers).map(el => {
            return el.getAttribute('data-image-url') || el.querySelector('img')?.src || 'images/cw-jacket-front.jpg';
        });

        function openLightbox(index) {
            currentImageIndex = index;
            lightboxImg.src = imagesList[currentImageIndex];
            lightboxOverlay.classList.add('is-active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            lightboxOverlay.classList.remove('is-active');
            document.body.style.overflow = '';
        }

        function changeImage(direction) {
            currentImageIndex = (currentImageIndex + direction + imagesList.length) % imagesList.length;
            lightboxImg.src = imagesList[currentImageIndex];
        }

        lightboxTriggers.forEach((trigger, index) => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                openLightbox(index);
            });
        });

        if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
        if (prevBtn) prevBtn.addEventListener('click', () => changeImage(-1));
        if (nextBtn) nextBtn.addEventListener('click', () => changeImage(1));

        lightboxOverlay.addEventListener('click', (e) => {
            if (e.target === lightboxOverlay) closeLightbox();
        });

        document.addEventListener('keydown', (e) => {
            if (!lightboxOverlay.classList.contains('is-active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') changeImage(-1);
            if (e.key === 'ArrowRight') changeImage(1);
        });
    }

    // 11. Hero Angle Switcher (Home Page)
    const heroImg = document.getElementById('hero-main-img');
    const angleBtns = document.querySelectorAll('.hero-angle-btn');
    const heroThumbs = document.querySelectorAll('.hero-thumb-item');

    function setHeroAngle(src, index) {
        if (!heroImg) return;
        heroImg.style.opacity = '0.3';
        setTimeout(() => {
            heroImg.src = src;
            heroImg.style.opacity = '1';
        }, 120);

        angleBtns.forEach((btn, i) => btn.classList.toggle('is-active', i === index));
        heroThumbs.forEach((thumb, i) => thumb.classList.toggle('is-active', i === index));
    }

    angleBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => setHeroAngle(btn.getAttribute('data-src'), index));
    });

    heroThumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', () => setHeroAngle(thumb.getAttribute('data-src'), index));
    });

    // 12. Tops Page Interactions (Unit switcher, Swatches, Sizing, Add to Bag)
    const unitBtns = document.querySelectorAll('.gb-unit-btn');
    const tableCells = document.querySelectorAll('.gb-size-table td[data-cm]');
    const measurementNote = document.querySelector('.gb-measurement-note');

    unitBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const unit = btn.getAttribute('data-unit');
            unitBtns.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');

            if (measurementNote) measurementNote.textContent = `Measurements in ${unit}`;
            tableCells.forEach(cell => {
                const val = cell.getAttribute(`data-${unit}`);
                if (val) cell.textContent = val;
            });
        });
    });

    // Swatches
    const swatches = document.querySelectorAll('.gb-swatch');
    let selectedColorName = 'Obsidian Black';
    swatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            swatches.forEach(s => s.classList.remove('is-active'));
            swatch.classList.add('is-active');
            selectedColorName = swatch.getAttribute('data-color-name') || 'Obsidian Black';
            const titleElem = document.querySelector('.gb-title');
            if (titleElem) {
                titleElem.textContent = `CW CONTOUR JACKET — ${selectedColorName.toUpperCase()}`;
            }
        });
    });

    // Size Selector Buttons
    let selectedSize = 'M';
    const gbSizeBtns = document.querySelectorAll('.gb-size-btn');
    gbSizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            gbSizeBtns.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            selectedSize = btn.textContent.trim();
        });
    });

    // Add to Bag Button on Tops Page
    const gbAddBtn = document.querySelector('.gb-add-btn');
    if (gbAddBtn) {
        gbAddBtn.addEventListener('click', () => {
            addToCart({
                id: 'cw-contour-jacket',
                title: 'CW CONTOUR TACTILE JACKET',
                price: 348,
                size: selectedSize,
                color: selectedColorName,
                image: 'images/cw-jacket-front.jpg'
            });

            const orig = gbAddBtn.textContent;
            gbAddBtn.textContent = "ADDED TO BAG ✓";
            gbAddBtn.style.backgroundColor = "#2e7d32";
            gbAddBtn.style.borderColor = "#2e7d32";
            setTimeout(() => {
                gbAddBtn.textContent = orig;
                gbAddBtn.style.backgroundColor = "";
                gbAddBtn.style.borderColor = "";
            }, 1500);
        });
    }

    // Garment Care / Delivery Accordions
    document.querySelectorAll('.gb-accordion-header').forEach(hdr => {
        hdr.addEventListener('click', () => {
            const item = hdr.closest('.gb-accordion-item');
            if (item) item.classList.toggle('is-open');
        });
    });

    // 13. ReactBits Spotlight Cards
    document.querySelectorAll('.spotlight-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });
        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--mouse-x', `-500px`);
            card.style.setProperty('--mouse-y', `-500px`);
        });
    });

    // 14. ReactBits Squares Interactive Canvas
    const canvas = document.getElementById('squares-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const squareSize = 48;
        let cols = Math.ceil(width / squareSize);
        let rows = Math.ceil(height / squareSize);
        const grid = new Map();

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            cols = Math.ceil(width / squareSize);
            rows = Math.ceil(height / squareSize);
        });

        window.addEventListener('mousemove', e => {
            const col = Math.floor(e.clientX / squareSize);
            const row = Math.floor(e.clientY / squareSize);

            for (let dx = -1; dx <= 1; dx++) {
                for (let dy = -1; dy <= 1; dy++) {
                    const c = col + dx;
                    const r = row + dy;
                    if (c >= 0 && c < cols && r >= 0 && r < rows) {
                        const key = `${c},${r}`;
                        const dist = Math.hypot(dx, dy);
                        const power = dist === 0 ? 0.28 : 0.14;
                        const cur = grid.get(key) || 0;
                        grid.set(key, Math.max(cur, power));
                    }
                }
            }
        });

        function renderSquares() {
            ctx.clearRect(0, 0, width, height);
            grid.forEach((alpha, key) => {
                if (alpha <= 0.005) {
                    grid.delete(key);
                    return;
                }
                const [c, r] = key.split(',').map(Number);
                const x = c * squareSize;
                const y = r * squareSize;

                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.fillRect(x + 1, y + 1, squareSize - 2, squareSize - 2);

                ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 1.6})`;
                ctx.lineWidth = 1;
                ctx.strokeRect(x + 0.5, y + 0.5, squareSize - 1, squareSize - 1);

                grid.set(key, alpha * 0.94);
            });
            requestAnimationFrame(renderSquares);
        }
        requestAnimationFrame(renderSquares);
    }

    // 15. Shop Page Filter Bar & Category Filtering
    const filterLinks = document.querySelectorAll('.filter-bar .filter-link');
    const shopProductCards = document.querySelectorAll('.product-grid .product-card');

    function filterShopCategory(category) {
        const cat = (category || 'all').toLowerCase();
        
        filterLinks.forEach(link => {
            const linkCat = link.getAttribute('data-category') || link.textContent.trim().toLowerCase();
            link.classList.toggle('active', linkCat === cat);
        });

        shopProductCards.forEach(card => {
            const cardCat = (card.getAttribute('data-category') || 'tops').toLowerCase();
            if (cat === 'all' || cardCat === cat) {
                card.style.display = '';
                card.style.opacity = '1';
            } else {
                card.style.display = 'none';
            }
        });
    }

    if (filterLinks.length > 0 && shopProductCards.length > 0) {
        filterLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetCat = link.getAttribute('data-category') || link.textContent.trim().toLowerCase();
                // If it points to another page (like tops.html) let it navigate; otherwise filter on page
                const href = link.getAttribute('href') || '';
                if (href === '#' || href === 'shop.html' || href === '') {
                    e.preventDefault();
                    filterShopCategory(targetCat);
                }
            });
        });

        // Check URL params or hash on page load
        const urlParams = new URLSearchParams(window.location.search);
        const queryCategory = urlParams.get('category') || window.location.hash.replace('#', '');
        if (queryCategory) {
            filterShopCategory(queryCategory);
        }
    }

    // 16. Multi-Angle Piece Gallery Controller (Front, Detail, Back)
    document.querySelectorAll('.multi-angle-card').forEach(card => {
        const images = card.querySelectorAll('.angle-img');
        const pills = card.querySelectorAll('.angle-pill');
        const badge = card.querySelector('.card-angle-badge');
        const counter = card.querySelector('.card-angle-counter');
        const qvBtn = card.querySelector('.quickview-trigger');
        const prevBtn = card.querySelector('.card-arrow-prev');
        const nextBtn = card.querySelector('.card-arrow-next');

        if (!images.length) return;
        let currentIndex = 0;

        function setAngle(index) {
            if (index < 0) index = images.length - 1;
            if (index >= images.length) index = 0;
            currentIndex = index;

            images.forEach((img, i) => img.classList.toggle('is-active', i === currentIndex));
            pills.forEach((pill, i) => pill.classList.toggle('is-active', i === currentIndex));

            const activeImg = images[currentIndex];
            if (activeImg) {
                const label = activeImg.getAttribute('data-label');
                if (badge && label) badge.textContent = label;
                if (counter) counter.textContent = `${currentIndex + 1} / ${images.length}`;
                if (qvBtn) qvBtn.setAttribute('data-quickview-img', activeImg.getAttribute('src'));
            }
        }

        pills.forEach(pill => {
            pill.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                setAngle(parseInt(pill.getAttribute('data-angle-index'), 10));
            });
            pill.addEventListener('mouseenter', () => {
                setAngle(parseInt(pill.getAttribute('data-angle-index'), 10));
            });
        });

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                setAngle(currentIndex - 1);
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                setAngle(currentIndex + 1);
            });
        }
    });

    // 17. Ghostboy "As Seen On" Drag-to-Scroll & Clicks
    const asSeenOnScroller = document.getElementById('as-seen-on-scroller');
    if (asSeenOnScroller) {
        let isDown = false;
        let startX;
        let scrollLeft;

        asSeenOnScroller.style.cursor = 'grab';

        asSeenOnScroller.addEventListener('mousedown', (e) => {
            isDown = true;
            asSeenOnScroller.style.cursor = 'grabbing';
            asSeenOnScroller.style.userSelect = 'none';
            startX = e.pageX - asSeenOnScroller.offsetLeft;
            scrollLeft = asSeenOnScroller.scrollLeft;
        });

        asSeenOnScroller.addEventListener('mouseleave', () => { isDown = false; asSeenOnScroller.style.cursor = 'grab'; });
        asSeenOnScroller.addEventListener('mouseup', () => { isDown = false; asSeenOnScroller.style.cursor = 'grab'; });

        asSeenOnScroller.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - asSeenOnScroller.offsetLeft;
            asSeenOnScroller.scrollLeft = scrollLeft - (x - startX) * 1.8;
        });
    }

    // 18. Quick View Trigger Binding across All Cards & Buttons
    // Includes .quickview-trigger, .gb-quick-action ("Explore Specs"), and card clicks
    function bindQuickViewButtons() {
        const qvModal = ensureQuickViewModal();

        // Bind all quick view triggers and "Explore Specs" buttons
        document.querySelectorAll('.quickview-trigger, .gb-quick-action, .product-quickview-btn').forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();

                const card = trigger.closest('.gb-product-card, .product-card');
                const title = card?.querySelector('.gb-product-title, .product-name')?.textContent?.trim() || 'CW CONTOUR TACTILE JACKET';
                const price = card?.querySelector('.gb-product-price, .product-price')?.textContent?.trim() || 'RM 348';
                const img = trigger.getAttribute('data-quickview-img') || card?.querySelector('img')?.src;
                
                const product = findProduct(title);
                openQvModal(img || product.image, title, price, product.desc, product.id);
            });
        });

        // Modal Close Button
        const closeBtn = qvModal.querySelector('.quickview-close-btn');
        if (closeBtn) closeBtn.addEventListener('click', closeQvModal);

        qvModal.addEventListener('click', (e) => {
            if (e.target === qvModal) closeQvModal();
        });

        // Size Pills in Quick View Modal
        qvModal.querySelectorAll('.size-pill').forEach(pill => {
            pill.addEventListener('click', () => {
                qvModal.querySelectorAll('.size-pill').forEach(p => p.classList.remove('is-selected'));
                pill.classList.add('is-selected');
                currentQvSize = pill.textContent.trim();
            });
        });

        // Add to Bag Button inside Quick View Modal
        const qvCtaBtn = qvModal.querySelector('.quickview-cta-btn');
        if (qvCtaBtn) {
            qvCtaBtn.addEventListener('click', () => {
                const title = qvModal.querySelector('.quickview-title')?.textContent?.trim() || 'CW CONTOUR TACTILE JACKET';
                const priceText = qvModal.querySelector('.quickview-price')?.textContent?.trim() || 'RM 348';
                const priceNum = parseFloat(priceText.replace(/[^0-9.]/g, '')) || 348;
                const img = qvModal.querySelector('#qv-main-img')?.src || 'images/cw-jacket-front.jpg';

                addToCart({
                    id: currentQvProduct ? currentQvProduct.id : 'cw-contour-jacket',
                    title: title,
                    price: priceNum,
                    size: currentQvSize || 'M',
                    color: 'Obsidian Black',
                    image: img
                });

                closeQvModal();
            });
        }

        // Thumbnails Switcher inside Modal
        qvModal.querySelectorAll('.quickview-thumb').forEach(thumb => {
            thumb.addEventListener('click', () => {
                qvModal.querySelectorAll('.quickview-thumb').forEach(t => t.classList.remove('is-active'));
                thumb.classList.add('is-active');
                const src = thumb.getAttribute('data-src') || thumb.querySelector('img')?.src;
                const mainImg = qvModal.querySelector('#qv-main-img');
                if (src && mainImg) {
                    mainImg.style.opacity = '0.4';
                    setTimeout(() => {
                        mainImg.src = src;
                        mainImg.style.opacity = '1';
                    }, 100);
                }
            });
        });
    }

    bindQuickViewButtons();

    // Swatches interaction (color dots on product cards)
    document.querySelectorAll('.gb-swatch-dot').forEach(dot => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            const parent = dot.parentElement;
            if (parent) {
                parent.querySelectorAll('.gb-swatch-dot').forEach(d => d.classList.remove('is-active'));
            }
            dot.classList.add('is-active');
            showToast(`Swatch selected: ${dot.getAttribute('title') || 'Color'}`);
        });
    });

    // Make placeholder cards in shop.html clickable to open Quick View
    document.querySelectorAll('.product-grid .product-card').forEach(card => {
        // If clicking card outside a link or button
        card.addEventListener('click', (e) => {
            if (e.target.closest('a') && !e.target.closest('a[href="#"]')) return;
            if (e.target.closest('button')) return;

            e.preventDefault();
            const title = card.querySelector('.product-name')?.textContent?.trim();
            const price = card.querySelector('.product-price')?.textContent?.trim();
            const product = findProduct(title);
            openQvModal(product.image, product.title, price || `RM ${product.price}`, product.desc, product.id);
        });
    });

    // Global Keyboard Esc Listener
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCartDrawer();
            closeCheckoutModal();
            closeSearchModal();
            closePolicyModal();
            closeQvModal();
        }
    });

});
