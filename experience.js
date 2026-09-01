/**
 * MAISON ARCHITECTURE — Experience Page
 * experience.js
 * ─────────────────────────────────────────────────────────
 * Loaded only by experience.html, after products.js + script.js.
 * Two scroll-linked pieces:
 *   • Section 01 — 3D pattern tunnel (translateZ dolly through tiles)
 *   • Section 02 — 2.5D product rotation (rotateY tied to scroll)
 * Both read the reduced-motion flag directly rather than depending
 * on the CSS media query alone, so we skip the rAF loops entirely
 * when the user has asked for less motion.
 */

/* ── The four MAISON ARCHITECTURE signature motifs, redrawn as
   simple stroke icons so they can be freely placed, tinted and
   scaled in 3D space (the source pattern.png stays untouched and
   is still used flat, e.g. on the pattern-teaser section). ──── */
const XP_ICONS = {
    arch: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <!-- Bodenbalken — nach außen hin verlängert für den klassischen Überstand -->
    <line x1="11" y1="54" x2="28" y2="54" />
    <line x1="36" y1="54" x2="53" y2="54" />

    <!-- Äußerer Bogen -->
    <path d="M14 48V32a18 18 0 0 1 36 0v16" />

    <!-- Mittlerer Bogen -->
    <path d="M20 48V32a12 12 0 0 1 24 0v16" />

    <!-- Innerer Bogen -->
    <path d="M26 48V32a6 6 0 0 1 12 0v16" />
  </svg>`,

    window: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <!-- Drei separate Bodenbalken -->
    <line x1="18" y1="54" x2="25" y2="54" /> <!-- Links -->
    <line x1="29" y1="54" x2="35" y2="54" /> <!-- Mitte -->
    <line x1="39" y1="54" x2="46" y2="54" /> <!-- Rechts -->

    <!-- Hauptrahmen (Weiter nach unten gezogen auf y=51) -->
    <path d="M22 51V24a10 10 0 0 1 20 0v27" />

    <!-- Vertikale Mittellinie (Weiter nach unten gezogen auf y=51) -->
    <line x1="32" y1="14" x2="32" y2="51" />

    <!-- Zwei horizontale Sprossen (Fensterbretter etwas länger gezogen) -->
    <line x1="23.5" y1="27" x2="40.5" y2="27" /> <!-- Obere Sprosse -->
    <line x1="23.5" y1="40" x2="40.5" y2="40" /> <!-- Untere Sprosse -->
  </svg>`,

    column: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <!-- Abdeckplatte (Kapitell) oben -->
    <line x1="14" y1="12" x2="50" y2="12" />

    <!-- Basisplatte unten -->
    <line x1="14" y1="52" x2="50" y2="52" />

    <!-- Drei vertikale Säulenstreben (Jetzt mit deutlich größerem Abstand zu den Platten) -->
    <line x1="23" y1="18" x2="23" y2="46" /> <!-- Linke Strebe -->
    <line x1="32" y1="18" x2="32" y2="46" /> <!-- Mittlere Strebe -->
    <line x1="41" y1="18" x2="41" y2="46" /> <!-- Rechte Strebe -->
  </svg>`,

    rosette: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
    <!-- 1. Äußerer Hauptkreis -->
    <circle cx="32" cy="32" r="22" />

    <!-- 2. Innerer Mittelkreis -->
    <circle cx="32" cy="32" r="5.5" />

    <!-- 3. Die 4 Achsenstriche -->
    <line x1="32" y1="10" x2="32" y2="22" /> <!-- Oben -->
    <line x1="32" y1="54" x2="32" y2="42" /> <!-- Unten -->
    <line x1="10" y1="32" x2="22" y2="32" /> <!-- Links -->
    <line x1="54" y1="32" x2="42" y2="32" /> <!-- Rechts -->

    <!-- 4. Die 4 Kreisbögen (weiter nach außen versetzt, exakt mittig ausbalanciert) -->
    <!-- Oben Links -->  <path d="M 21.3 26.6 A 14.5 14.5 0 0 1 26.6 21.3" />
    <!-- Oben Rechts --> <path d="M 37.4 21.3 A 14.5 14.5 0 0 1 42.7 26.6" />
    <!-- Unten Rechts --> <path d="M 42.7 37.4 A 14.5 14.5 0 0 1 37.4 42.7" />
    <!-- Unten Links -->  <path d="M 26.6 42.7 A 14.5 14.5 0 0 1 21.3 37.4" />
  </svg>`

};
const XP_ICON_KEYS = Object.keys(XP_ICONS);


/* ============================================================
   SECTION 01 — PATTERN TUNNEL
   ============================================================ */
function initPatternTunnel() {
  const section = document.getElementById('xp-pattern-section');
  const sticky  = document.getElementById('xp-pattern-sticky');
  const tunnel  = document.getElementById('xp-tunnel');
  if (!section || !sticky || !tunnel) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Build several depth rings of tiles once. Fewer tiles + rings on
     narrow viewports, in line with "Tablet/Mobile: Performance
     priorisieren". */
  const isSmall = window.innerWidth < 768;
  const ringDepths   = isSmall ? [-200, -700, -1200] : [-200, -650, -1100, -1550];
  const tilesPerRing = isSmall ? 5 : 8;
  const spread       = isSmall ? 220 : 340;

  ringDepths.forEach((z, ringIndex) => {
    for (let i = 0; i < tilesPerRing; i++) {
      const angle = (i / tilesPerRing) * Math.PI * 2 + ringIndex * 0.35;
      const radiusX = spread * (0.6 + Math.random() * 0.6);
      const radiusY = spread * 0.5 * (0.6 + Math.random() * 0.6);
      const x = Math.cos(angle) * radiusX;
      const y = Math.sin(angle) * radiusY;

      const key = XP_ICON_KEYS[(i + ringIndex) % XP_ICON_KEYS.length];
      const tile = document.createElement('div');
      const accentRoll = Math.random();
      tile.className = 'xp-tile' + (accentRoll < 0.25 ? ' xp-tile-accent' : accentRoll < 0.4 ? ' xp-tile-black' : '');
      const scale = 0.7 + Math.random() * 0.9;
      tile.style.transform =
        `translate3d(${x}px, ${y}px, ${z}px) rotate(${(Math.random() * 30 - 15).toFixed(1)}deg) scale(${scale.toFixed(2)})`;
      tile.innerHTML = XP_ICONS[key];
      tunnel.appendChild(tile);
    }
  });

  if (reduceMotion) return; // tunnel renders as a static field, no dolly

  let ticking = false;
  const maxTravel = Math.abs(ringDepths[ringDepths.length - 1]) + 400;

  function update() {
    ticking = false;
    const rect = section.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    if (total <= 0) return;
    let progress = -rect.top / total;
    progress = Math.max(0, Math.min(1, progress));

    const travelZ = progress * maxTravel;
    const rotate  = progress * 18; // slight rotation, walking-through feel
    tunnel.style.transform = `translateZ(${travelZ}px) rotate(${rotate}deg)`;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  window.addEventListener('resize', () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } });

  update();
}

/* ============================================================
   SECTION 02 — 2.5D OBJECT ROTATION
   ============================================================ */
function initObjectRotation() {
  const section = document.getElementById('xp-object-section');
  const stage   = document.getElementById('xp-object-stage');
  const progressLabel = document.getElementById('xp-object-progress');
  if (!section || !stage) return;

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
    const lift    = Math.sin(progress * Math.PI) * -24;
    stage.style.transform = `translateY(${lift}px) rotateY(${rotateY}deg)`;

    if (progressLabel) {
      progressLabel.textContent = `${Math.round(rotateY)}° — ${Math.round(progress * 100)}%`;
    }
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  window.addEventListener('resize', () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } });

  update();
}

/* ============================================================
   SECTION 03 — THE COLLECTION (reuses buildProductCard from script.js)
   ============================================================ */
function initXpCollection() {
  const grid = document.getElementById('xp-collection-grid');
  if (!grid || typeof products === 'undefined' || typeof buildProductCard !== 'function') return;

  const curated = products.filter(p => p.featured).slice(0, 4);
  grid.innerHTML = curated.map(buildProductCard).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  initPatternTunnel();
  initObjectRotation();
  initXpCollection();
});
