/* ============================================================
   MAISON — collections.js
   Editorial Collections page: renders collection nav, intro,
   and drives the 3D scroll experiences (collection stage,
   pattern tunnel, look sequence, parallax) purely with
   transform / opacity, following the same scroll-progress
   pattern already used by initProductFeature() in script.js.

   Supports multiple collections: clicking a collection in the
   nav strip swaps the entire editorial content in place
   (no page reload) and updates the URL hash for deep-linking.

   Requires: products.js (for `collections`), style.css, collections.css
   ============================================================ */

(function () {
  if (typeof collections === 'undefined') return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile     = window.matchMedia('(max-width: 860px)').matches;

  const available = collections.filter(c => c.available);
  if (!available.length) return;

  let current = null;
  let stageCount = 0, tunnelCount = 0, looksCount = 0;
  let scrollBound = false;

  function findById(id) {
    return available.find(c => c.id === id);
  }

  /* ── 1. Hero ── */
  function renderHero(c) {
    const media = document.getElementById('coll-hero-media');
    if (!media) return;
    if (c.heroVideo) {
      media.innerHTML = `<video autoplay muted loop playsinline preload="auto">
        <source src="${c.heroVideo}" type="video/mp4">
      </video>`;
    } else {
      media.innerHTML = `<img src="${c.heroImage}" alt="${c.name}">`;
    }
    document.getElementById('coll-hero-title').textContent = c.name;
    document.getElementById('coll-hero-season').textContent = c.season;
    document.getElementById('coll-hero-tagline').textContent = c.tagline;
  }

  /* ── 2. Collection Nav Strip ── */
  function renderNav(activeId) {
    const wrap = document.getElementById('coll-nav-inner');
    if (!wrap) return;
    wrap.innerHTML = collections.map(c => {
      if (!c.available) {
        return `<span class="coll-nav-item is-soon">
          <span class="coll-nav-season">${c.season}</span>
          <span class="coll-nav-name">${c.name}</span>
        </span>`;
      }
      const active = c.id === activeId ? ' is-active' : '';
      return `<a href="#${c.id}" class="coll-nav-item${active}" data-coll-id="${c.id}">
        <span class="coll-nav-season">${c.season}</span>
        <span class="coll-nav-name">${c.name}</span>
      </a>`;
    }).join('');

    wrap.querySelectorAll('.coll-nav-item[data-coll-id]').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const id = a.dataset.collId;
        if (id === current.id) return;
        history.replaceState(null, '', `#${id}`);
        loadCollection(id, { scrollToTop: true });
      });
    });
  }

  /* ── 3. Editorial Intro ── */
  function renderIntro(c) {
    const section = document.getElementById('coll-intro-section');
    const label = document.getElementById('coll-intro-label');
    const text  = document.getElementById('coll-intro-text');
    const desc  = document.getElementById('coll-intro-desc');
    const dots  = document.getElementById('coll-intro-colors');
    if (section) section.id = c.id; // keeps #<collection-id> deep-linkable
    if (label) label.textContent = `${c.name} — ${c.season}`;
    if (text)  text.textContent  = c.tagline;
    if (desc)  desc.textContent  = c.description;
    if (dots && c.colors) {
      dots.innerHTML = c.colors
        .map(col => `<span class="coll-color-dot" style="background:${col}"></span>`)
        .join('');
    }
  }

  /* ── 4. 3D Collection Scroll Stage ──
     Each image is a "plane" placed on the Z axis in sequence.
     As the user scrolls through the (tall) track, progress 0→1
     is mapped to which plane is currently frontal; planes glide
     from behind (translateZ negative, small, faded) to front
     (translateZ 0) and then past the viewer (translateZ positive,
     faded out), with a slight rotateY for perspective drift. ── */
  function renderStage(c) {
    const wrap = document.getElementById('coll-3d-plane-wrap');
    const dots = document.getElementById('coll-3d-progress');
    if (!wrap) return 0;
    const imgs = (c.images || []).slice(0, isMobile ? 4 : 6);
    if (!imgs.length) { wrap.innerHTML = ''; if (dots) dots.innerHTML = ''; return 0; }

    wrap.innerHTML = imgs.map((src, i) =>
      `<div class="coll-3d-plane" data-i="${i}"><img src="${src}" alt="${c.name} — view ${i + 1}" loading="lazy"></div>`
    ).join('');
    if (dots) {
      dots.innerHTML = imgs.map((_, i) => `<span data-i="${i}"></span>`).join('');
    }
    return imgs.length;
  }

  function updateStage(count) {
    const track = document.getElementById('coll-3d-track');
    const wrap  = document.getElementById('coll-3d-plane-wrap');
    if (!track || !wrap || !count) return;

    const rect  = track.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    if (total <= 0) return;
    let progress = -rect.top / total;
    progress = Math.max(0, Math.min(1, progress));

    const pos = progress * (count - 1); // which plane index is "current"
    const planes = wrap.querySelectorAll('.coll-3d-plane');
    planes.forEach((plane, i) => {
      const delta = i - pos; // negative = already passed, 0 = frontal, positive = upcoming
      const z      = -Math.abs(delta) * (isMobile ? 260 : 420);
      const zFront = delta > 0 ? delta * (isMobile ? 60 : 90) : 0;
      const rotY   = delta * (isMobile ? 6 : 10);
      const scale  = 1 - Math.min(Math.abs(delta), 1) * 0.22;
      const opacity = Math.max(0, 1 - Math.abs(delta) * 0.85);
      plane.style.transform = `translateZ(${z + zFront}px) rotateY(${rotY}deg) scale(${scale})`;
      plane.style.opacity = opacity.toFixed(2);
      plane.style.zIndex = String(100 - Math.round(Math.abs(delta) * 10));
    });

    const dotEls = document.querySelectorAll('#coll-3d-progress span');
    const activeIdx = Math.round(pos);
    dotEls.forEach((d, i) => d.classList.toggle('is-active', i === activeIdx));
  }

  /* ── 5. Pattern Tunnel — "THE ARCHITECTURE" ──
     Several overlapping copies of the collection's signature
     graphic, each on its own Z depth, slowly rotating and
     drifting toward the viewer as the section scrolls. Falls
     back to the collection's first campaign image when no
     dedicated pattern graphic is set. ── */
  function renderTunnel(c) {
    const wrap = document.getElementById('coll-tunnel-planes');
    const heading = document.getElementById('coll-tunnel-title');
    const patternSrc = c.patternImage || (c.images && c.images[0]) || c.heroImage;
    if (!wrap || !patternSrc) return 0;
    if (heading) heading.textContent = c.patternImage ? 'The Architecture' : `Inside ${c.name}`;

    const LAYERS = isMobile ? 4 : 6;
    wrap.innerHTML = '';
    for (let i = 0; i < LAYERS; i++) {
      const el = document.createElement('div');
      el.className = 'coll-tunnel-plane';
      el.dataset.i = i;
      el.style.backgroundImage = `url('${patternSrc}')`;
      wrap.appendChild(el);
    }
    return LAYERS;
  }

  function updateTunnel(count) {
    const track = document.getElementById('coll-tunnel-track');
    const wrap  = document.getElementById('coll-tunnel-planes');
    if (!track || !wrap || !count) return;

    const rect  = track.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    if (total <= 0) return;
    let progress = -rect.top / total;
    progress = Math.max(0, Math.min(1, progress));

    const depthStep = isMobile ? 240 : 380;
    const planes = wrap.querySelectorAll('.coll-tunnel-plane');
    planes.forEach((plane, i) => {
      const layerProgress = (progress * count + i) % count;
      const z = -depthStep * (count - layerProgress);
      const rot = (progress * 30) + i * 6;
      const opacity = Math.min(1, Math.max(0, 1 - Math.abs(layerProgress - count * 0.6) / (count * 0.7)));
      plane.style.transform = `translateZ(${z}px) rotate(${rot}deg)`;
      plane.style.opacity = (opacity * 0.85).toFixed(2);
    });
  }

  /* ── 6. The Looks — depth sequence ── */
  function renderLooks(c) {
    const wrap = document.getElementById('coll-looks-stage-inner');
    if (!wrap) return 0;
    const pool = (c.images && c.images.length ? c.images : [c.heroImage]);
    const looks = pool.slice(0, isMobile ? 4 : 5);
    wrap.innerHTML = looks.map((src, i) => `
      <div class="coll-look-item" data-i="${i}">
        <img src="${src}" alt="${c.name} — Look ${String(i + 1).padStart(2, '0')}" loading="lazy">
        <span class="coll-look-num">Look ${String(i + 1).padStart(2, '0')}</span>
      </div>`).join('');
    return looks.length;
  }

  function updateLooks(count) {
    const track = document.getElementById('coll-looks-track');
    const wrap  = document.getElementById('coll-looks-stage-inner');
    if (!track || !wrap || !count) return;

    const rect  = track.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    if (total <= 0) return;
    let progress = -rect.top / total;
    progress = Math.max(0, Math.min(1, progress));

    const pos = progress * (count - 1);
    const items = wrap.querySelectorAll('.coll-look-item');
    items.forEach((item, i) => {
      const delta = i - pos;
      const x = delta * (isMobile ? 120 : 220);
      const z = -Math.abs(delta) * (isMobile ? 180 : 260);
      const scale = 1 - Math.min(Math.abs(delta), 1) * 0.3;
      const opacity = Math.max(0, 1 - Math.abs(delta) * 0.7);
      item.style.transform = `translateX(${x}px) translateZ(${z}px) scale(${scale})`;
      item.style.opacity = opacity.toFixed(2);
      item.style.zIndex = String(100 - Math.round(Math.abs(delta) * 10));
    });
  }

  /* ── 7. Parallax ── */
  function renderParallax(c) {
    const bg = document.getElementById('coll-parallax-bg');
    const mid = document.getElementById('coll-parallax-mid');
    const fg = document.getElementById('coll-parallax-fg');
    const imgs = c.images || [];
    if (bg)  bg.innerHTML  = `<img src="${imgs[2] || c.heroImage}" alt="">`;
    if (mid) mid.innerHTML = `<img src="${c.patternImage || imgs[0] || c.heroImage}" alt="">`;
    if (fg)  fg.innerHTML  = `<img src="${imgs[1] || c.heroImage}" alt="">`;
  }

  function updateParallax() {
    const section = document.getElementById('coll-parallax');
    if (!section) return;
    const rect = section.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    const centered = (rect.top + rect.height / 2) - window.innerHeight / 2;
    const bg  = document.getElementById('coll-parallax-bg');
    const mid = document.getElementById('coll-parallax-mid');
    const fg  = document.getElementById('coll-parallax-fg');
    if (bg)  bg.style.transform  = `translateY(${centered * -0.06}px)`;
    if (mid) mid.style.transform = `translateY(${centered * -0.14}px)`;
    if (fg)  fg.style.transform  = `translateY(${centered * -0.24}px)`;
  }

  /* ── Static / reduced-motion layout ──
     When the user prefers reduced motion, skip transforms
     entirely and lay every plane out at rest, in a simple
     stacked/faded arrangement so nothing overlaps confusingly. */
  function applyStaticLayout() {
    document.querySelectorAll('.coll-3d-plane, .coll-look-item').forEach((el, i) => {
      el.style.transform = 'none';
      el.style.opacity = i === 0 ? '1' : '0';
      el.style.position = i === 0 ? 'relative' : 'absolute';
    });
    document.querySelectorAll('.coll-tunnel-plane').forEach(el => {
      el.style.opacity = '0.35';
      el.style.transform = 'none';
    });
  }

  function onScrollFrame() {
    updateStage(stageCount);
    updateTunnel(tunnelCount);
    updateLooks(looksCount);
    updateParallax();
  }

  let ticking = false;
  function onScroll() {
    if (!ticking) { requestAnimationFrame(() => { ticking = false; onScrollFrame(); }); ticking = true; }
  }

  /* ── Load / switch a collection ── */
  function loadCollection(id, opts) {
    const c = findById(id);
    if (!c) return;
    current = c;

    renderHero(c);
    renderNav(c.id);
    renderIntro(c);
    stageCount  = renderStage(c);
    tunnelCount = renderTunnel(c);
    looksCount  = renderLooks(c);
    renderParallax(c);

    const shopCta = document.getElementById('coll-shop-cta');
    if (shopCta) shopCta.href = `shop.html?collection=${encodeURIComponent(c.id)}`;

    if (reduceMotion) {
      applyStaticLayout();
    } else {
      if (!scrollBound) {
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        scrollBound = true;
      }
      onScrollFrame();
    }

    if (opts && opts.scrollToTop) {
      document.getElementById('coll-hero-media')?.closest('.coll-hero')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /* ── Init ── */
  function init() {
    const hashId = window.location.hash ? window.location.hash.slice(1) : null;
    const startId =
      (hashId && findById(hashId) && hashId) ||
      (available.find(c => c.featured) || available[0]).id;

    loadCollection(startId);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
