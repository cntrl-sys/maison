/**
 * MAISON — Main Script
 * script.js
 * ─────────────────────────────────────────────────────────
 * Handles:
 *   • Navigation scroll behaviour & mobile menu
 *   • Product card rendering (index + shop pages)
 *   • Category filtering on shop page
 *   • Cart system (localStorage)
 *   • Cart sidebar open / close
 *   • Toast notifications
 *   • Accordion on product detail page
 *   • Product detail page (product.html)
 */

/* ============================================================
   CART UTILITIES
   ============================================================ */

/** Return current cart array from localStorage */
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('maison_cart')) || [];
  } catch { return []; }
}

/** Persist cart array to localStorage */
function saveCart(cart) {
  localStorage.setItem('maison_cart', JSON.stringify(cart));
}

/**
 * Add an item to cart.
 * @param {object} product – entry from products.js
 * @param {string} size    – selected size string
 * @param {number} qty     – quantity (default 1)
 */
function addToCart(product, size, qty = 1) {
  const cart = getCart();
  const key  = `${product.id}__${size}`;
  const idx  = cart.findIndex(i => i.key === key);

  if (idx > -1) {
    cart[idx].qty += qty;
  } else {
    cart.push({
      key,
      id:    product.id,
      name:  product.name,
      price: product.price,
      image: product.image,
      size,
      qty
    });
  }
  saveCart(cart);
  updateCartCount();
  showToast(`${product.name} — Added to Cart`);
  renderCartItems();
}

/** Remove one cart entry by key */
function removeFromCart(key) {
  const cart = getCart().filter(i => i.key !== key);
  saveCart(cart);
  updateCartCount();
  renderCartItems();
}

/** Change qty of a cart item; removes if qty ≤ 0 */
function changeQty(key, delta) {
  const cart = getCart();
  const idx  = cart.findIndex(i => i.key === key);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  saveCart(cart);
  updateCartCount();
  renderCartItems();
}

/** Update the badge number in the nav */
function updateCartCount() {
  const total = getCart().reduce((sum, i) => sum + i.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = total;
  });
}

/* ============================================================
   CART SIDEBAR RENDER
   ============================================================ */

function renderCartItems() {
  const el   = document.getElementById('cart-items');
  const foot = document.getElementById('cart-footer');
  if (!el) return;

  const cart = getCart();

  if (cart.length === 0) {
    el.innerHTML = `
      <div class="cart-empty">
        <p>Your bag is empty.</p>
        <span>Discover our new arrivals</span>
      </div>`;
    if (foot) foot.style.display = 'none';
    return;
  }

  if (foot) foot.style.display = '';

  el.innerHTML = cart.map(item => `
    <div class="cart-item" data-key="${item.key}">
      <div class="cart-item-img"><img src="${item.image}" alt="${item.name}" loading="lazy"></div>
      <div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">Size: ${item.size}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty('${item.key}', -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.key}', 1)">+</button>
        </div>
        <span class="cart-remove" onclick="removeFromCart('${item.key}')">Remove</span>
      </div>
      <div class="cart-item-price">€${(item.price * item.qty).toLocaleString('de-DE')}</div>
    </div>
  `).join('');

  // Subtotal
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const subEl = document.getElementById('cart-subtotal');
  if (subEl) subEl.textContent = `€${subtotal.toLocaleString('de-DE')}`;
}

/* ============================================================
   CART SIDEBAR OPEN / CLOSE
   ============================================================ */

function openCart() {
  document.getElementById('cart-sidebar')?.classList.add('open');
  document.getElementById('cart-backdrop')?.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCartItems();
}

function closeCart() {
  document.getElementById('cart-sidebar')?.classList.remove('open');
  document.getElementById('cart-backdrop')?.classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================================
   TOAST NOTIFICATION
   ============================================================ */

let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}

/* ============================================================
   NAVIGATION
   ============================================================ */

function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  // Scroll → add .scrolled class
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mark active link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  nav.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href && path.includes(href.replace('.html', ''))) a.classList.add('active');
  });

  // Mobile burger
  const burger = document.getElementById('nav-burger');
  const mMenu  = document.getElementById('mobile-menu');
  const mClose = document.getElementById('mobile-close');
  burger?.addEventListener('click', () => mMenu?.classList.add('open'));
  mClose?.addEventListener('click', () => mMenu?.classList.remove('open'));
  mMenu?.querySelectorAll('.nav-link').forEach(a => {
    a.addEventListener('click', () => mMenu.classList.remove('open'));
  });

  // Cart opener
  document.querySelectorAll('[data-open-cart]').forEach(btn => {
    btn.addEventListener('click', openCart);
  });

  // Cart close
  document.getElementById('cart-close')?.addEventListener('click', closeCart);
  document.getElementById('cart-backdrop')?.addEventListener('click', closeCart);
}

/* ============================================================
   PRODUCT CARD BUILDER
   ============================================================ */

/**
 * Build HTML for a single product card.
 * Uses the product's full path (gender → category → sub) for data attributes,
 * and displays collab badge + path trail below the name.
 * @param {object} p – product object
 * @returns {string} HTML string
 */
function buildProductCard(p) {
  const price = `€${Number(p.price).toLocaleString('de-DE')}`;

  const hover = p.hoverImage
    ? `<img class="img-hover" src="${p.hoverImage}" alt="${p.name}" loading="lazy">`
    : '';

  // Badge: collab takes priority over "New"
  let badge = '';
  if (p.collab && typeof collaborations !== 'undefined') {
    const c = collaborations.find(x => x.id === p.collab);
    if (c) badge = `<span class="card-badge" style="background:var(--accent-gold);color:#fff">${c.name.split(' ')[0]} ×</span>`;
  } else if (p.featured) {
    badge = `<span class="card-badge">New</span>`;
  }

  // Path trail: e.g. "Herren · Strickwaren · Weste"
  const pathParts = [p.gender, p.category, p.sub].filter(Boolean);
  const pathHTML = pathParts.length
    ? `<span class="card-path">${pathParts.map(s => capitalize(s)).join(' &rsaquo; ')}</span>`
    : '';

  // Collection label — dezent, kein Badge. Zeigt z.B. "MAISON ARCHITECTURE"
  let collectionHTML = '';
  if (p.collection && typeof collections !== 'undefined') {
    const col = collections.find(x => x.id === p.collection);
    if (col) {
      collectionHTML = `<span class="card-collection">${col.name}</span>`;
    }
  }

  return `
    <article class="product-card"
      data-gender="${p.gender || ''}"
      data-category="${p.category || ''}"
      data-sub="${p.sub || ''}"
      data-collab="${p.collab || ''}"
      onclick="location.href='product.html?id=${p.id}'"
    >
      <div class="card-image">
        ${badge}
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        ${hover}
        <div class="card-overlay">
          <button class="btn-quickadd" onclick="event.stopPropagation(); quickAdd(event, '${p.id}')">
            Quick Add
          </button>
        </div>
      </div>
      <div class="card-info">
        <div style="min-width:0">
          ${collectionHTML}
          ${pathHTML}
          <span class="card-name">${p.name}</span>
        </div>
        <span class="card-price">${price}</span>
      </div>
    </article>
  `;
}

/** Capitalize first letter, lowercase rest */
function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/** Quick-add: adds first size without opening detail page */
function quickAdd(event, productId) {
  event.preventDefault();
  const p = products.find(x => x.id === productId);
  if (!p) return;
  const size = p.sizes[0] || 'One Size';
  addToCart(p, size);
}

/* ============================================================
   HOMEPAGE — Featured Products
   ============================================================ */

function initHomeFeatured() {
  const grid = document.getElementById('featured-grid');
  if (!grid || typeof products === 'undefined') return;

  const featured = products.filter(p => p.featured).slice(0, 4);
  grid.innerHTML = featured.map(buildProductCard).join('');
}

/* ============================================================
   SHOP PAGE — All Products + Filter
   ============================================================ */

function initShop() {
  const grid = document.getElementById('shop-grid');
  if (!grid || typeof products === 'undefined') return;

  // Render all cards
  const renderCards = (category = 'all') => {
    const filtered = category === 'all'
      ? products
      : products.filter(p => p.category === category);

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="no-results">
          <p>No items found.</p>
          <span>Try another category</span>
        </div>`;
      return;
    }
    grid.innerHTML = filtered.map(buildProductCard).join('');
  };

  renderCards();

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCards(btn.dataset.category);
    });
  });
}

/* ============================================================
   PRODUCT DETAIL PAGE
   ============================================================ */

function initProductDetail() {
  const root = document.getElementById('product-detail');
  if (!root || typeof products === 'undefined') return;

  // Read ?id= from URL
  const params = new URLSearchParams(window.location.search);
  const id     = params.get('id');
  const p      = products.find(x => x.id === id);

  if (!p) {
    root.innerHTML = `<div style="text-align:center;padding:120px 24px;">
      <p style="font-family:var(--font-serif);font-size:32px;">Product not found.</p>
      <a href="shop.html" style="display:inline-block;margin-top:24px;font-size:11px;letter-spacing:.2em;text-transform:uppercase;text-decoration:underline;">Back to Shop</a>
    </div>`;
    return;
  }

  // Update page title & meta
  document.title = `${p.name} — MAISON`;

  // Build details list HTML
  const detailsList = (p.details || [])
    .map(d => `<li>${d}</li>`)
    .join('');

  // Build sizes HTML
  const sizesHTML = (p.sizes || ['One Size'])
    .map((s, i) => `<button class="size-btn${i === 0 ? ' active' : ''}" data-size="${s}">${s}</button>`)
    .join('');

  // ── Build full breadcrumb path from product taxonomy ──
  const breadcrumbParts = [
    { label: 'Home',                href: 'index.html' },
    { label: 'Shop',                href: 'shop.html' },
  ];
  if (p.gender) {
    const gLabel = { damen:'Damen', herren:'Herren', kinder:'Kinder' }[p.gender] || p.gender;
    breadcrumbParts.push({ label: gLabel, href: `shop.html?gender=${p.gender}` });
  }
  if (p.category) {
    breadcrumbParts.push({
      label: p.category,
      href: `shop.html?gender=${p.gender || 'all'}&category=${encodeURIComponent(p.category)}`
    });
  }
  if (p.sub) {
    breadcrumbParts.push({
      label: p.sub,
      href: `shop.html?gender=${p.gender || 'all'}&category=${encodeURIComponent(p.category)}&sub=${encodeURIComponent(p.sub)}`
    });
  }
  breadcrumbParts.push({ label: p.name, href: null }); // current page, no link

  const breadcrumbHTML = breadcrumbParts.map((part, i) => {
    const isLast = i === breadcrumbParts.length - 1;
    const sep = i > 0 ? `<span style="margin:0 8px;color:var(--mid-gray)">›</span>` : '';
    if (isLast) return `${sep}<span style="color:var(--black)">${part.label}</span>`;
    return `${sep}<a href="${part.href}" style="transition:color .3s;color:var(--warm-gray)" onmouseover="this.style.color='var(--black)'" onmouseout="this.style.color='var(--warm-gray)'">${part.label}</a>`;
  }).join('');

  // ── Collab badge HTML ──
  let collabBadgeHTML = '';
  if (p.collab && typeof collaborations !== 'undefined') {
    const c = collaborations.find(x => x.id === p.collab);
    if (c) {
      collabBadgeHTML = `
        <div style="display:flex;align-items:center;gap:12px;padding:14px 18px;background:var(--beige);border-left:3px solid var(--accent-gold);margin-bottom:24px">
          <img src="${c.image}" alt="${c.name}" style="width:36px;height:36px;border-radius:50%;object-fit:cover;flex-shrink:0">
          <div>
            <div style="font-size:9px;font-weight:500;letter-spacing:.2em;text-transform:uppercase;color:var(--accent-gold);margin-bottom:2px">${c.season} Kollektion</div>
            <div style="font-family:var(--font-serif);font-size:14px">${c.title}</div>
          </div>
          <a href="index.html#collaborations" style="margin-left:auto;font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:var(--warm-gray);text-decoration:underline">Mehr →</a>
        </div>`;
    }
  }

  // ── Collection badge HTML (dezent, minimal) ──
  let collectionBadgeHTML = '';
  if (p.collection && typeof collections !== 'undefined') {
    const col = collections.find(x => x.id === p.collection);
    if (col) {
      collectionBadgeHTML = `
        <div style="display:flex;align-items:center;gap:12px;padding:14px 18px;background:var(--beige);border-left:3px solid var(--deep-navy);margin-bottom:24px">
          <div>
            <div style="font-size:9px;font-weight:500;letter-spacing:.2em;text-transform:uppercase;color:var(--deep-navy);margin-bottom:2px">Collection</div>
            <div style="font-family:var(--font-serif);font-size:14px">${col.name} — <span style="font-size:11px;letter-spacing:.08em">${col.season}</span></div>
          </div>
          <a href="collections.html#${col.id}" style="margin-left:auto;font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:var(--warm-gray);text-decoration:underline;white-space:nowrap">Explore Collection →</a>
        </div>`;
    }
  }

  root.innerHTML = `
    <div class="container">
      <!-- Breadcrumb: vollständiger Pfad -->
      <nav style="margin-bottom:32px;font-size:11px;letter-spacing:.1em;display:flex;flex-wrap:wrap;align-items:center">
        ${breadcrumbHTML}
      </nav>

      <div class="detail-grid">

        <!-- ── LEFT: Images ── -->
        <div class="detail-images">
          <div class="detail-main-img" id="main-img">
            <img id="main-img-el" src="${p.image}" alt="${p.name}">
          </div>
          ${p.hoverImage ? `
          <div class="detail-thumbs">
            <div class="detail-thumb active" data-src="${p.image}">
              <img src="${p.image}" alt="${p.name}">
            </div>
            <div class="detail-thumb" data-src="${p.hoverImage}">
              <img src="${p.hoverImage}" alt="${p.name} — view 2">
            </div>
          </div>` : ''}
        </div>

        <!-- ── RIGHT: Info ── -->
        <div class="detail-info">
          ${collectionBadgeHTML}
          ${collabBadgeHTML}
          <div class="detail-category label">${[p.gender ? {damen:'Damen',herren:'Herren',kinder:'Kinder'}[p.gender] : null, p.category, p.sub].filter(Boolean).join(' › ')}</div>
          <h1 class="detail-name">${p.name}</h1>
          <div class="detail-price">€${Number(p.price).toLocaleString('de-DE')}</div>

          <div class="detail-divider"></div>

          <p class="detail-description">${p.description}</p>

          <!-- Size -->
          <div class="size-label">
            <span>Select Size</span>
            <a href="#">Size Guide</a>
          </div>
          <div class="size-grid" id="size-grid">
            ${sizesHTML}
          </div>

          <!-- Add to Cart -->
          <button class="btn-addcart" id="btn-addcart">
            <span>Add to Bag</span>
          </button>

          <button class="btn btn-ghost" style="width:100%" onclick="openCart()">
            View Bag
          </button>

          <div class="detail-divider"></div>

          <!-- Accordion -->
          <div class="accordion">
            <div class="accordion-item open">
              <button class="accordion-trigger">
                Product Details
                <span class="accordion-icon">+</span>
              </button>
              <div class="accordion-body">
                <ul>${detailsList}</ul>
              </div>
            </div>
            <div class="accordion-item">
              <button class="accordion-trigger">
                Shipping & Returns
                <span class="accordion-icon">+</span>
              </button>
              <div class="accordion-body">
                <ul>
                  <li>Complimentary standard shipping on all orders</li>
                  <li>Express delivery available at checkout</li>
                  <li>Free returns within 30 days</li>
                  <li>Signature packaging included</li>
                </ul>
              </div>
            </div>
            <div class="accordion-item">
              <button class="accordion-trigger">
                Care Instructions
                <span class="accordion-icon">+</span>
              </button>
              <div class="accordion-body">
                <ul>
                  <li>Store in the provided dust bag</li>
                  <li>Avoid prolonged exposure to sunlight</li>
                  <li>Professional leather care recommended</li>
                  <li>Dry clean only where applicable</li>
                </ul>
              </div>
            </div>
          </div>

        </div><!-- /detail-info -->
      </div><!-- /detail-grid -->
    </div>
  `;

  /* ── Size selection ── */
  let selectedSize = p.sizes[0] || 'One Size';

  root.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      root.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedSize = btn.dataset.size;
    });
  });

  /* ── Add to cart button ── */
  root.querySelector('#btn-addcart')?.addEventListener('click', () => {
    addToCart(p, selectedSize);
    openCart();
  });

  /* ── Thumbnail switch ── */
  root.querySelectorAll('.detail-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      root.querySelectorAll('.detail-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const mainImg = root.querySelector('#main-img-el');
      if (mainImg) {
        mainImg.style.opacity = '0';
        setTimeout(() => {
          mainImg.src = thumb.dataset.src;
          mainImg.style.opacity = '1';
        }, 200);
        mainImg.style.transition = 'opacity 0.3s';
      }
    });
  });

  /* ── Accordion ── */
  root.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      item.classList.toggle('open');
    });
  });
}

/* ============================================================
   HERO MEDIA SEQUENCE — video (once) → image slideshow (loop)
   Only runs on pages with #hero-media-stage (index.html).
   ============================================================ */

const HERO_SLIDE_IMAGES = [
  'videos/hero-4.mp4',
  'images/hero.png',
  'images/hero-2.png',
  'images/hero-3.png',
  'images/hero-2.png'
];

function initHero() {
  const stage = document.getElementById('hero-media-stage');
  if (!stage) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const videoLayer   = document.getElementById('hero-video-layer');
  const video        = document.getElementById('hero-video');

  let slides = [];
  let current = 0;
  let timer   = null;

  function buildSlides() {
    HERO_SLIDE_IMAGES.forEach((src, i) => {
      const el = document.createElement('div');
      el.className = 'hero-slide is-entering';
      el.innerHTML = `<img src="${src}" alt="MAISON — Collection" loading="${i === 0 ? 'eager' : 'lazy'}">`;
      stage.appendChild(el);
      slides.push(el);
    });
  }

  function showSlide(index) {
    const outgoing = slides[current];
    const incoming = slides[index];
    if (outgoing && outgoing !== incoming) {
      outgoing.classList.remove('is-active');
      outgoing.classList.add('is-leaving', index > current ? 'exit-left' : 'exit-right');
    }
    incoming.classList.remove('exit-left', 'exit-right', 'is-leaving');
    incoming.classList.add(index > current || index === 0 ? 'from-right' : 'from-left');
    // Force reflow so the transform above applies before we animate to 0.
    void incoming.offsetWidth;
    incoming.classList.add('is-active');
    current = index;
  }

  function startSlideshow() {
    if (videoLayer) {
      videoLayer.classList.remove('is-active');
    }
    if (!slides.length) buildSlides();
    showSlide(0);
    if (reduceMotion) return; // static first slide only — no auto-advance
    const advance = () => {
      const next = (current + 1) % slides.length;
      showSlide(next);
    };
    timer = setInterval(advance, 5000);
  }

  // If the browser can't load/play the hero video (e.g. no file
  // provided yet), fall back straight to the slideshow — nothing
  // should ever be left broken.
  if (!video || reduceMotion) {
    startSlideshow();
    return;
  }

  let started = false;
  const beginOnce = () => { if (!started) { started = true; startSlideshow(); } };

  video.addEventListener('ended', beginOnce);
  video.addEventListener('error', beginOnce);
  video.addEventListener('stalled', beginOnce);

  // Safety net: if the video hasn't produced any playable data
  // shortly after load, don't leave the hero stuck.
  setTimeout(() => { if (video.readyState === 0) beginOnce(); }, 4000);
}

/* ============================================================
   SCROLL REVEAL — IntersectionObserver, index.html only
   ============================================================ */

function initReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    targets.forEach(t => t.classList.add('reveal-visible'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

  targets.forEach(t => io.observe(t));
}

/* ============================================================
   PRODUCT FEATURE — scroll-linked 2.5D rotation (index.html)
   ============================================================ */

function initProductFeature() {
  const section = document.getElementById('product-feature');
  const stageEl = document.getElementById('product-feature-stage');
  if (!section || !stageEl) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;

  function update() {
    ticking = false;
    const rect = section.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    if (total <= 0) return;
    let progress = -rect.top / total;
    progress = Math.max(0, Math.min(1, progress));

    const rotateY = progress * 360;
    const scale   = 0.9 + Math.sin(progress * Math.PI) * 0.1;
    stageEl.style.transform =
      `rotateY(${rotateY}deg) scale(${scale})`;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  window.addEventListener('resize', () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } });

  update();
}

/* ============================================================
   ACCORDION (standalone, used on any page)
   ============================================================ */

function initAccordions() {
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      trigger.closest('.accordion-item')?.classList.toggle('open');
    });
  });
}

/* ============================================================
   INIT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  updateCartCount();
  renderCartItems();
  initHomeFeatured();
  initShop();
  initProductDetail();
  initAccordions();
  initHero();
  initReveal();
  initProductFeature();
});
