# Motion & Visual Upgrade Research (v2.0 design system — implemented 26 Sep 2026)

> **Document Status:** Complete Architecture & Engineering Spec  
> **Target Asset Cascade:** `assets/bp-design-system.css` + `assets/bp-motion.js` (~15 live product sites: Gym OS, Dentist OS, Builder OS, etc.)  
> **Core Philosophy:** *Purposeful, weightless, precise.* Motion guides focus; visual depth establishes authority. Zero dependencies, two-file drop-in.

---

## 1. Audit of Current System (v1.0) vs. Best-in-Class Dark Tech Websites

### 1.1 Comparative Benchmark Landscape
Top-tier dark tech products (**Linear.app, Vercel, Stripe, Apple Vision/Pro dark microsites, Raycast, Awwwards Site of the Day winners, Framer dark OS templates**) achieve a "two years ahead" feel through five distinct characteristics:
1. **Interactive Luminance & Lighting Physics:** Surfaces aren't flat background fills; they react to user presence. Cards feature subtle mouse-following spotlight gradients and border highlights (Linear-style 1px spotlight borders).
2. **Multi-layered Tactile Canvas:** Deep dark background canvas (`#08090C`) layered with sub-perceptual noise/grain textures, subtle grid lines, and soft, breathing ambient radial glows.
3. **Choreographed Load Sequences:** Instead of random page elements popping in, heroes execute strict, staggered load entry sequences (badge → title gradient reveal → subhead → CTA → interactive preview UI).
4. **Weighted Interactive Physics:** Micro-interactions have micro-inertia. Buttons magnetically pull toward the cursor (`translate3d`), cards execute subtle 3D tilt under perspective (`rotateX`/`rotateY`), and icons morph/draw on hover.
5. **Seamless Surface Transitions:** Navigation bars shrink and frost on scroll (`backdrop-filter`), sticky sections pin and crossfade OS workflows, and metrics count up with regional currency formatting (Indian Rupee `₹`, USD `$`, `%`).

### 1.2 Beyond Pixells v1.0 Capability Audit

| Dimension | Beyond Pixells v1.0 Capabilities | Best-in-Class Benchmark Standard | Gap & Upgrade Requirement |
| :--- | :--- | :--- | :--- |
| **Color & Lighting** | Canvas `#08090C`, surfaces `#12141A`/`#1A1D26`, crimson/amber `#FF3B30`→`#FF7A00` gradient, cyan `#00F2FE`. | Dynamic mouse-aware radial spotlights, glowing border masks, grain-textured noise overlays. | **High:** Add mouse-tracking spotlight CSS custom properties (`--mouse-x`, `--mouse-y`), spotlight border mask utility, and inline SVG grain texture overlay. |
| **Scroll Motion** | Single uniform `bp-fadeUp` (`translateY(24px)`) auto-applied to a hardcoded selector list (`.sec-head`, `.os-card`, etc.). | Directional reveals (`up`, `scale`, `left`, `right`), view-driven hero choreography, batch observer execution. | **High:** Shift from hardcoded selectors to flexible `data-reveal` attributes; add multi-axis animations and hero load sequencing. |
| **Interactive Physics** | Static CSS hover lift (`.bp-lift`: `translateY(-4px)` with box-shadow). | Magnetic CTA button attraction, 3D card tilt under perspective, cursor spotlight tracking. | **Medium-High:** Add vanilla JS magnetic button driver and 3D card tilt driver via `requestAnimationFrame` (RAF). |
| **UI Components** | Static nav header, basic marquee ticker (`bp-marquee`), simple countUp stat numbers. | Nav scroll-shrink with frosted backdrop, hover-pause/directional marquee, sticky OS step reveals, skeleton shimmers. | **High:** Add nav scroll state detector, hover-pause marquee controls, sticky section step triggers, and skeleton loader utilities. |
| **Architecture** | Hardcoded DOM element class array inside JS script (`AUTO = [...]`). | Attribute-driven engine (`data-*` contract), auto-initialization, zero site-specific layout coupling. | **Critical:** Upgrade `bp-motion.js` to parse `data-*` attributes dynamically across all 15 downstream studio sites. |

---

## 2. Catalog of Concrete Vanilla CSS + JS Techniques

Below is the complete catalog of 17 visual and motion techniques analyzed for suitability in a dark-premium product studio ecosystem ("operating systems for local businesses").

### Priority Summary Matrix
* **P0 (Essential Core Drop-In):** Hero Entrance Choreography, Spotlight Border & Radial Glow, Glassmorphism Nav Scroll-Shrink, Enhanced Staggered Reveals, Animated Counters.
* **P1 (High-Impact Visual Polish):** Magnetic Hover Buttons, 3D Tilt Cards, SVG Noise Canvas Overlay, Shimmer Gradient Text, Interactive Marquee Tickers, Icon Micro-interactions.
* **P2 (Specialized & Advanced Features):** Sticky Section Reveals, Cursor Ambient Spotlight, Scroll Progress Indicator, Skeleton Shimmers, Subtle Parallax Layers.

---

### Technique Catalog Breakdown

#### 1. Hero Entrance Choreography (P0)
* **Description:** A tightly sequenced entry cascade on initial page load (badge → headline → subhead → CTAs → OS interface preview).
* **Implementation:** CSS custom property delay calculation (`style="--hero-delay: 100ms"`) combined with keyframe `@keyframes bp-heroIn`. JS automatically triggers a `.bp-loaded` class on `document.body` after `DOMContentLoaded`.
* **Performance & A11y:** GPU `transform: translateY()` and `opacity` only. Instantly visible if `prefers-reduced-motion` is active.
* **Aesthetic Fit:** **Core Fit.** Essential for creating an immediate high-end first impression on Gym OS, Dentist OS, and Builder OS landing pages.

#### 2. Card Spotlight Border & Radial Glow (P0)
* **Description:** As the mouse moves over a card, a subtle radial spotlight gradient follows the pointer, illuminating the 1px card border and underlying background surface.
* **Implementation:** Single mousemove listener updates CSS variables `--mouse-x` and `--mouse-y` on card elements. Card pseudo-element (`::before`) uses `background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,122,0,0.15), transparent 40%)`.
* **Performance & A11y:** Updated inside `requestAnimationFrame`. Uses hardware-accelerated rendering; no layout recalculations (`reflow`).
* **Aesthetic Fit:** **Core Fit.** The single highest-impact signature technique of modern dark OS software (Linear / Vercel archetype).

#### 3. Glassmorphism & Nav Scroll-Shrink (P0)
* **Description:** Navigation header starts translucent at top, then smoothly shrinks in padding and height while increasing backdrop blur and border visibility when scrolled past 20px.
* **Implementation:** CSS transitions on `padding`, `background-color`, and `backdrop-filter: blur(12px) saturate(180%)`. JS attaches a passive window scroll listener setting `data-scrolled="true"` on `<header>`.
* **Performance & A11y:** Window scroll throttled via `requestAnimationFrame`. Fallback background color `rgba(18,20,26,0.95)` provided for browsers without `backdrop-filter` support.
* **Aesthetic Fit:** **Core Fit.** Anchors top-level site navigation and gives a seamless application shell feeling.

#### 4. Enhanced Staggered Scroll Reveals (P0)
* **Description:** Elements reveal smoothly as they enter the viewport with directional variants (`up`, `scale`, `left`, `right`) and dynamic stagger delays.
* **Implementation:** `IntersectionObserver` observing `[data-reveal]`. JS calculates child index offset `(index % 6) * 70ms` and sets inline `transition-delay`. Unobserves target immediately upon intersection.
* **Performance & A11y:** Zero scroll listeners required (`IntersectionObserver` offloads work to compositor). Full fallback to `opacity: 1; transform: none;` on reduced motion.
* **Aesthetic Fit:** **Core Fit.** Replaces v1.0's rigid hardcoded selector array with a robust HTML attribute standard.

#### 5. Animated Numeric Counters (P0)
* **Description:** Numbers count up dynamically when scrolled into view, handling currencies (₹ Indian Rupee, $ USD), percentages, and comma formatting.
* **Implementation:** `IntersectionObserver` detects element entry. RAF loop executes a cubic ease-out curve (`1 - Math.pow(1 - progress, 3)`), updating text with `toLocaleString('en-IN')` or `toLocaleString('en-US')`.
* **Performance & A11y:** Single fast text node update per frame. Original numeric value preserved in `aria-label` or fallback text prior to animation.
* **Aesthetic Fit:** **Core Fit.** Crucial for studio proof metrics ("₹2.4Cr processed", "1,200+ active gyms").

#### 6. Magnetic Hover Buttons (P1)
* **Description:** Primary CTA buttons gently drift toward the mouse cursor when hovered within a 20px magnet radius, snapping back gracefully on mouse leave.
* **Implementation:** `mousemove` calculates offset vector `(mouseX - rect.left - rect.width/2) * 0.2`. CSS `transform: translate3d(x, y, 0)` updated via RAF. `mouseleave` restores `translate3d(0, 0, 0)` with a spring transition.
* **Performance & A11y:** GPU composited translation only. Auto-disabled on touch devices (`(hover: none)`) and reduced motion modes.
* **Aesthetic Fit:** **High Polish.** Delivers tactile physical feedback on primary conversion buttons without interrupting click flow.

#### 7. 3D Tilt Cards (P1)
* **Description:** Interactive product cards subtly tilt in 3D space (`rotateX`/`rotateY` max ±8deg) relative to cursor position on hover.
* **Implementation:** Parent element has `perspective: 1000px`. Mouse coordinates within card bounds compute `rotateX = (center.y - mouse.y) / 10` and `rotateY = (mouse.x - center.x) / 10`. Transformed via `transform: rotateX(...) rotateY(...) scale3d(1.02, 1.02, 1.02)`.
* **Performance & A11y:** Throttled with RAF. Disabled on touch inputs.
* **Aesthetic Fit:** **High Polish.** Ideal for hero product cards (Gym OS live kiosk preview, Dentist OS appointment ledger). Must be kept subtle (max 8° tilt) to avoid feeling gimmicky.

#### 8. SVG Noise / Film Grain Canvas Overlay (P1)
* **Description:** A sub-perceptual grainy noise texture overlay applied across the main background canvas, eliminating color banding and adding tactile visual weight.
* **Implementation:** An optimized inline SVG data-uri pattern embedded in `.bp-noise` pseudo-element: `background-image: url('data:image/svg+xml,...')`, set to `opacity: 0.035`, `pointer-events: none`, `position: fixed`.
* **Performance & A11y:** Zero JS execution required. Rendered once on a fixed layer; GPU composited.
* **Aesthetic Fit:** **Core Fit.** Instantly elevates dark surfaces from cheap solid digital black to a sophisticated matte hardware texture.

#### 9. Shimmer & Gradient Text Sweep (P1)
* **Description:** Headline gradient text features a shimmering specular highlight sweep that periodically slides across the letters.
* **Implementation:** `background: linear-gradient(110deg, #FF3B30 0%, #FF7A00 45%, #FFFFFF 50%, #FF7A00 55%, #FF3B30 100%)`. `background-size: 200% 100%`. Keyframe `@keyframes bp-textShimmer` translates `background-position` from `0%` to `200%`.
* **Performance & A11y:** Composited text background fill transition. CPU friendly.
* **Aesthetic Fit:** **High Polish.** Draws eye to core studio slogans ("Operating systems for local business leaders").

#### 10. Interactive Marquee Tickers (P1)
* **Description:** Endless horizontal client/feature tickers that pause on mouse hover, support reverse direction, and allow custom speed variables.
* **Implementation:** `@keyframes bp-marquee` moving `translateX(0)` to `translateX(-50%)`. CSS `.bp-marquee:hover .bp-marquee-track { animation-play-state: paused; }`. Attribute controls: `data-direction="reverse"`, `style="--marquee-duration: 35s"`.
* **Performance & A11y:** Pure CSS transform animation. Reduced motion halts ticker completely and wraps items gracefully.
* **Aesthetic Fit:** **Core Fit.** Clean social proof display for logos, partner clinics, and gym chains.

#### 11. Icon Micro-interactions (P1)
* **Description:** Action icons, feature badges, and status dots react on hover with elastic scale, path rotation, or pulse ring keyframes.
* **Implementation:** CSS utility classes: `.bp-icon-spin`, `.bp-icon-bounce`, `.bp-icon-pulse`. Uses CSS custom timing `--bp-ease-spring`.
* **Performance & A11y:** Pure CSS transform animations on vector elements.
* **Aesthetic Fit:** **High Polish.** Provides delightful feedback when hovering over feature checklists, navigation tabs, and system status indicators.

#### 12. Sticky Section Reveals (P2)
* **Description:** As the user scrolls through a multi-step feature showcase, the left column pins stickily while the right column step images/screens crossfade and slide into view.
* **Implementation:** CSS `position: sticky; top: 120px;`. `IntersectionObserver` toggles `.bp-active` on right-side workflow step nodes as they cross the mid-viewport threshold (40%).
* **Performance & A11y:** CSS sticky positioning handled natively by browser layout engine.
* **Aesthetic Fit:** **High Fit for Product Demos.** Perfect for deep-dive walkthroughs (e.g. "How Gym OS handles automatic WhatsApp attendance").

#### 13. Subtle Cursor Ambient Glow (P2)
* **Description:** A large, extremely soft (600px diameter) ambient spotlight floating behind page content, tracking mouse position across hero/canvas sections.
* **Implementation:** Fixed position overlay `pointer-events: none` updating `transform: translate3d(x, y, 0)` via RAF.
* **Performance & A11y:** Must be carefully throttled and disabled on mobile/low-power devices.
* **Aesthetic Fit:** **Use Sparingly.** Excellent for hero sections; avoid running across entire long pages to conserve battery life.

#### 14. Scroll Progress Indicator (P2)
* **Description:** A hairline 2px brand gradient line at the top edge of the viewport reflecting total page scroll percentage.
* **Implementation:** Fixed bar `<div class="bp-scroll-progress">`. JS computes `scrollPercent = (window.scrollY) / (document.documentElement.scrollHeight - window.innerHeight)` and sets `transform: scaleX(scrollPercent)`.
* **Performance & A11y:** Single RAF update using GPU scale transformation (`scaleX`).
* **Aesthetic Fit:** **Optional Polish.** Suitable for long documentation, case studies, and spec guides.

#### 15. Skeleton Shimmer Loading States (P2)
* **Description:** Dark metallic loading placeholders with a linear shimmer wave for dynamic dashboard widgets and async data cards.
* **Implementation:** `.bp-skeleton` with background `linear-gradient(90deg, #12141A 25%, #1A1D26 50%, #12141A 75%)` animated with `background-size: 200% 100%`.
* **Performance & A11y:** Pure CSS animation; zero JS required.
* **Aesthetic Fit:** **Utility Fit.** Essential for live web apps and OS dashboard embeds.

#### 16. Subtle Parallax Background Layers (P2)
* **Description:** Background decorative grid lines or glowing ambient orbs drift at 15-20% of scroll speed.
* **Implementation:** JS calculates `offset = window.scrollY * speedFactor` and updates `transform: translate3d(0, offset, 0)` inside RAF.
* **Performance & A11y:** Strict low scaling factor (<0.15) to prevent scroll stutter and motion sickness.
* **Aesthetic Fit:** **Use Sparingly.** Great for hero section decorative grids; avoid on body text layers.

---

### Gimmicks to Avoid (Blacklist for Dark Premium OS Aesthetic)

| Technique | Why it fails the "Dark Premium OS" Bar | Action |
| :--- | :--- | :--- |
| **Heavy Custom Trailing Cursors** | Adds cursor latency, breaks native pointer feel, obstructs form inputs, fails on mobile/touch, feels amateurish. | **Strictly Avoid.** Keep native OS cursor intact; use element-bound radial spotlights instead. |
| **180° Full Card Flip Animations** | Disorients users, hides key information, causes layout jitter, degrades screen reader accessibility. | **Strictly Avoid.** Use tab switches or subtle modal overlays instead. |
| **Aggressive Scroll-Velocity Text Skewing** | Distorts typography readability, causes severe layout thrash and frame drops during fast scrolling. | **Strictly Avoid.** Typography must remain sharp and stable at all scroll speeds. |
| **Unthrottled Canvas Particle Networks** | High GPU/CPU utilization, drains mobile battery, creates noisy visual clutter that distracts from product screenshots. | **Strictly Avoid.** Replace with clean SVG grid patterns and static/breathing ambient glows. |
| **Auto-Playing Sound / Auditory Micro-feedback** | Intrusive, degrades trust in professional/clinical settings (dentist offices, gym manager desks). | **Strictly Avoid.** Rely strictly on crisp, high-contrast visual physics. |

---

## 3. Implementation Code Specifications

### 3.1 CSS Extensions (`assets/bp-design-system.css` v2.0 Additions)

Below is the complete, exact production CSS code to append to `bp-design-system.css`:

```css
/* ============================================================
   BEYOND PIXELLS — SHARED DESIGN SYSTEM v2.0 EXTENSIONS
   Dark-Premium OS Motion & Lighting Infrastructure
   ============================================================ */

:root {
  /* LIGHTING & SPOTLIGHT TOKENS */
  --bp-mouse-x: 50%;
  --bp-mouse-y: 50%;
  --bp-spotlight-color: rgba(255, 122, 0, 0.12);
  --bp-spotlight-border: rgba(255, 255, 255, 0.18);
  
  /* ELEVATED SURFACES & GLASS TOKENS */
  --bp-surface-4: #2A2F3D;
  --bp-glass-bg: rgba(18, 20, 26, 0.72);
  --bp-glass-border: rgba(255, 255, 255, 0.08);
  --bp-glass-blur: blur(16px) saturate(180%);
  
  /* CANVAS TACTILE NOISE */
  --bp-noise-url: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.035'/%3E%3C/svg%3E");

  /* TIMING & DELAY TOKENS */
  --bp-hero-delay: 0ms;
}

/* ============ CANVAS TACTILE NOISE OVERLAY ============ */
.bp-noise-canvas {
  position: relative;
}
.bp-noise-canvas::before {
  content: "";
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  background-image: var(--bp-noise-url);
  pointer-events: none;
  z-index: 9999;
  opacity: 0.8;
}

/* ============ CARD SPOTLIGHT & HOVER BORDER GLOW ============ */
.bp-spotlight-card {
  position: relative;
  background-color: var(--bp-surface-1);
  border: 1px solid var(--bp-border-subtle);
  border-radius: var(--bp-r-lg);
  overflow: hidden;
  transition: border-color 0.3s var(--bp-ease-out-expo), transform 0.3s var(--bp-ease-out-expo), box-shadow 0.3s var(--bp-ease-out-expo);
}

.bp-spotlight-card::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  border-radius: inherit;
  background: radial-gradient(
    600px circle at var(--bp-mouse-x) var(--bp-mouse-y),
    var(--bp-spotlight-color),
    transparent 40%
  );
  opacity: 0;
  transition: opacity 0.4s var(--bp-ease-smooth);
  pointer-events: none;
  z-index: 1;
}

.bp-spotlight-card::after {
  content: "";
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: radial-gradient(
    400px circle at var(--bp-mouse-x) var(--bp-mouse-y),
    var(--bp-spotlight-border),
    transparent 40%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.4s var(--bp-ease-smooth);
  pointer-events: none;
  z-index: 2;
}

.bp-spotlight-card:hover::before,
.bp-spotlight-card:hover::after {
  opacity: 1;
}

/* ============ NAVIGATION FROST & SCROLL-SHRINK ============ */
.bp-nav-sticky {
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 20px 0;
  background-color: transparent;
  backdrop-filter: blur(0px);
  border-bottom: 1px solid transparent;
  transition: padding 0.35s var(--bp-ease-out-expo), background-color 0.35s var(--bp-ease-smooth), border-color 0.35s var(--bp-ease-smooth), backdrop-filter 0.35s var(--bp-ease-smooth);
}

.bp-nav-sticky[data-scrolled="true"] {
  padding: 12px 0;
  background-color: var(--bp-glass-bg);
  backdrop-filter: var(--bp-glass-blur);
  -webkit-backdrop-filter: var(--bp-glass-blur);
  border-bottom-color: var(--bp-glass-border);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
}

/* ============ HERO LOAD SEQUENCING ============ */
@keyframes bp-heroIn {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.98);
    filter: blur(4px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

.bp-hero-step {
  opacity: 0;
  animation: bp-heroIn 0.8s var(--bp-ease-out-expo) forwards;
  animation-delay: var(--bp-hero-delay, 0ms);
}

/* ============ SHIMMER TEXT & BRAND SWEEP ============ */
@keyframes bp-textShimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.bp-shimmer-text {
  background: linear-gradient(
    110deg,
    #F4F5F7 0%,
    #FF3B30 25%,
    #FF7A00 50%,
    #00F2FE 75%,
    #F4F5F7 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: bp-textShimmer 8s linear infinite;
}

/* ============ SCROLL PROGRESS BAR ============ */
.bp-scroll-progress-bar {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 2px;
  background: var(--bp-gradient-brand);
  transform-origin: 0 50%;
  transform: scaleX(0);
  z-index: 10001;
  pointer-events: none;
}

/* ============ SKELETON SHIMMER ============ */
@keyframes bp-skeletonPulse {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.bp-skeleton {
  background: linear-gradient(
    90deg,
    var(--bp-surface-1) 25%,
    var(--bp-surface-2) 50%,
    var(--bp-surface-1) 75%
  );
  background-size: 200% 100%;
  border-radius: var(--bp-r-sm);
  animation: bp-skeletonPulse 1.8s ease-in-out infinite;
}

/* ============ INTERACTIVE 3D TILT & MAGNETIC CONTAINERS ============ */
.bp-tilt-card {
  transform-style: preserve-3d;
  will-change: transform;
  transition: transform 0.15s var(--bp-ease-smooth);
}

.bp-magnetic-btn {
  display: inline-block;
  will-change: transform;
  transition: transform 0.2s var(--bp-ease-out-expo);
}

/* ============ ICON MICRO-INTERACTION UTILITIES ============ */
.bp-icon-hover {
  transition: transform 0.3s var(--bp-ease-spring), color 0.3s var(--bp-ease-smooth);
}
.bp-icon-hover:hover {
  transform: scale(1.15) rotate(6deg);
  color: var(--bp-cyan);
}
```

---

### 3.2 JavaScript Engine (`assets/bp-motion.js` v2.0 Architecture)

Below is the complete production JavaScript code for `bp-motion.js` v2.0:

```javascript
/* ============================================================
   BEYOND PIXELLS — MOTION ENGINE v2.0
   Universal Vanilla JS Motion & Lighting System
   Drop-in compatibility across all studio OS product sites.
   ============================================================ */

(function () {
  'use strict';

  // Check prefers-reduced-motion standard
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------
     1. ATTRIBUTE & SELECTOR SCROLL-REVEAL ENGINE
     ------------------------------------------------------------ */
  function initScrollReveal() {
    var legacySelectors = ['.sec-head', '.os-card', '.svc', '.stat', '.step', '.tier', '.f', '.pain-card', '.b-card', '.q', '.mini', '.venture', '.vs'];
    
    // Convert legacy selectors and explicit data-reveal elements
    var revealElements = Array.from(document.querySelectorAll('[data-reveal], ' + legacySelectors.join(',')));
    
    revealElements.forEach(function (el) {
      if (!el.hasAttribute('data-reveal')) {
        el.setAttribute('data-reveal', 'up');
      }
    });

    // Calculate staggered delays for grouped elements
    var groups = document.querySelectorAll('section, header, .grid, .bp-grid');
    groups.forEach(function (group) {
      var children = group.querySelectorAll('[data-reveal]');
      children.forEach(function (child, idx) {
        if (!child.style.transitionDelay) {
          child.style.transitionDelay = (idx % 6) * 70 + 'ms';
        }
      });
    });

    if (reduceMotion) {
      revealElements.forEach(function (el) { el.classList.add('bp-revealed'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('bp-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(function (el) { observer.observe(el); });
  }

  /* ------------------------------------------------------------
     2. CARD SPOTLIGHT & MOUSE-TRACKING ENGINE
     ------------------------------------------------------------ */
  function initSpotlightCards() {
    if (reduceMotion) return;

    var cards = document.querySelectorAll('.bp-spotlight-card, [data-spotlight]');
    if (!cards.length) return;

    var rafPending = false;
    var mouseX = 0, mouseY = 0;
    var currentCard = null;

    cards.forEach(function (card) {
      card.addEventListener('pointermove', function (e) {
        currentCard = card;
        var rect = card.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;

        if (!rafPending) {
          rafPending = true;
          requestAnimationFrame(function () {
            if (currentCard) {
              currentCard.style.setProperty('--bp-mouse-x', mouseX + 'px');
              currentCard.style.setProperty('--bp-mouse-y', mouseY + 'px');
            }
            rafPending = false;
          });
        }
      });
    });
  }

  /* ------------------------------------------------------------
     3. 3D TILT CARDS ENGINE
     ------------------------------------------------------------ */
  function init3DTilt() {
    if (reduceMotion || window.matchMedia('(hover: none)').matches) return;

    var tiltCards = document.querySelectorAll('.bp-tilt-card, [data-tilt]');
    
    tiltCards.forEach(function (card) {
      var rafId = null;

      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var centerX = rect.width / 2;
        var centerY = rect.height / 2;

        var rotateX = ((centerY - y) / centerY) * 8; // Max 8 deg
        var rotateY = ((x - centerX) / centerX) * 8;

        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(function () {
          card.style.transform = 'perspective(1000px) rotateX(' + rotateX.toFixed(2) + 'deg) rotateY(' + rotateY.toFixed(2) + 'deg) scale3d(1.02, 1.02, 1.02)';
        });
      });

      card.addEventListener('mouseleave', function () {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(function () {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
      });
    });
  }

  /* ------------------------------------------------------------
     4. MAGNETIC BUTTON ATTRACTION ENGINE
     ------------------------------------------------------------ */
  function initMagneticButtons() {
    if (reduceMotion || window.matchMedia('(hover: none)').matches) return;

    var magneticBtns = document.querySelectorAll('.bp-magnetic-btn, [data-magnetic]');

    magneticBtns.forEach(function (btn) {
      var rafId = null;

      btn.addEventListener('mousemove', function (e) {
        var rect = btn.getBoundingClientRect();
        var centerX = rect.left + rect.width / 2;
        var centerY = rect.top + rect.height / 2;

        var deltaX = (e.clientX - centerX) * 0.25; // Displacement strength
        var deltaY = (e.clientY - centerY) * 0.25;

        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(function () {
          btn.style.transform = 'translate3d(' + deltaX.toFixed(2) + 'px, ' + deltaY.toFixed(2) + 'px, 0px)';
        });
      });

      btn.addEventListener('mouseleave', function () {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(function () {
          btn.style.transform = 'translate3d(0px, 0px, 0px)';
        });
      });
    });
  }

  /* ------------------------------------------------------------
     5. NAVIGATION FROST & SCROLL CONTROLLER
     ------------------------------------------------------------ */
  function initNavScroll() {
    var nav = document.querySelector('.bp-nav-sticky, header[data-sticky]');
    var progressBar = document.querySelector('.bp-scroll-progress-bar');
    if (!nav && !progressBar) return;

    var ticking = false;

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var scrolled = window.scrollY > 20;
          if (nav) {
            nav.setAttribute('data-scrolled', scrolled ? 'true' : 'false');
          }

          if (progressBar) {
            var totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            var progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
            progressBar.style.transform = 'scaleX(' + Math.min(Math.max(progress, 0), 1) + ')';
          }

          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ------------------------------------------------------------
     6. ENHANCED COUNT-UP STATS ENGINE
     ------------------------------------------------------------ */
  function countUp(el) {
    var raw = el.textContent.trim();
    // Matches currency symbols (₹, $), numbers, commas, decimals, and text suffixes
    var match = raw.match(/^([₹$]?\s*)(\d[\d,]*\.?\d*)(.*)$/);
    if (!match) return;

    var prefix = match[1];
    var target = parseFloat(match[2].replace(/,/g, ''));
    var suffix = match[3];
    var isDecimal = match[2].includes('.');
    var isIndianFormat = prefix.includes('₹') || raw.includes('Cr') || raw.includes('Lakh');

    var duration = 1200;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var easedProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
      var currentValue = target * easedProgress;

      var formattedNum;
      if (isDecimal) {
        formattedNum = currentValue.toFixed(1);
      } else {
        var rounded = Math.round(currentValue);
        formattedNum = isIndianFormat ? rounded.toLocaleString('en-IN') : rounded.toLocaleString('en-US');
      }

      el.textContent = prefix + formattedNum + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  function initCountUpStats() {
    var statSelectors = ['.stat b', '.trust b', '.hero .pill', '[data-countup]'];
    var statElements = document.querySelectorAll(statSelectors.join(','));
    if (!statElements.length) return;

    if (reduceMotion) {
      return; // Leave initial text intact
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = '1';
          countUp(entry.target);
        }
      });
    }, { threshold: 0.4 });

    statElements.forEach(function (el) { observer.observe(el); });
  }

  /* ------------------------------------------------------------
     7. MARQUEE HOVER-PAUSE CONTROLLER
     ------------------------------------------------------------ */
  function initMarquees() {
    var marquees = document.querySelectorAll('.bp-marquee');
    marquees.forEach(function (mq) {
      if (mq.hasAttribute('data-direction') && mq.getAttribute('data-direction') === 'reverse') {
        var track = mq.querySelector('.bp-marquee-track');
        if (track) track.style.animationDirection = 'reverse';
      }
    });
  }

  /* ------------------------------------------------------------
     ENGINE INITIALIZATION & DOM READY HOOK
     ------------------------------------------------------------ */
  function initEngine() {
    document.body.classList.add('bp-engine-ready');
    
    initScrollReveal();
    initSpotlightCards();
    init3DTilt();
    initMagneticButtons();
    initNavScroll();
    initCountUpStats();
    initMarquees();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEngine);
  } else {
    initEngine();
  }

})();
```

---

## 4. Performance & Accessibility Engineering Rules

To ensure that cascading this spec across ~15 production websites does not introduce frame drops, battery drain, or accessibility violations, all developers must adhere to the following four engineering mandates:

### 4.1 Strict GPU Compositing Rules
1. **Allowed Animated Properties:** Only animate `transform` (`translate3d`, `scale`, `rotate`) and `opacity`.
2. **Forbidden Animated Properties:** Never add CSS transitions or JS animations to `width`, `height`, `padding`, `margin`, `top`, `left`, `border-width`, or `box-shadow` during scroll or continuous mouse tracking.
3. **`will-change` Management:** Apply `will-change: transform` strictly on elements with active mouse hover listeners (`.bp-tilt-card`, `.bp-magnetic-btn`). Do NOT set `will-change: transform` globally on hundreds of cards simultaneously, as this consumes excessive GPU memory buffers.

### 4.2 Layout Thrash Elimination
1. **Read/Write Phase Separation:** Never call DOM read operations (e.g., `getBoundingClientRect()`, `offsetWidth`, `scrollTop`) immediately before or inside DOM write loops.
2. **Mandatory RAF Wrapping:** All pointer and scroll calculations must write DOM changes inside a `requestAnimationFrame()` frame wrapper.
3. **Passive Event Listeners:** All `window.addEventListener('scroll', ...)` and `window.addEventListener('wheel', ...)` calls MUST specify `{ passive: true }` to allow standard thread scrolling without blocking on JS execution.

### 4.3 IntersectionObserver Lifecycle Management
1. **Single-Trigger Disconnection:** Unobserve targets immediately once revealed:
   ```javascript
   if (entry.isIntersecting) {
     entry.target.classList.add('bp-revealed');
     observer.unobserve(entry.target);
   }
   ```
2. **Viewport Margin Buffering:** Standard threshold should be set to `0.12` with a `rootMargin` of `'0px 0px -40px 0px'` to trigger animations slightly before the user reaches the element, eliminating visual pop-in lag.

### 4.4 Accessibility & Reduced Motion Standards
1. **Universal Motion Bypass:** When `prefers-reduced-motion: reduce` is detected:
   - Force all `[data-reveal]` elements to `opacity: 1; transform: none;` immediately.
   - Halt marquee CSS keyframe animations (`animation: none`).
   - Disable mouse-following 3D tilt and magnetic displacement transforms.
   - Preserve original string text in numeric stat fields without executing `countUp`.
2. **High-Contrast Focus Indicators:** Every interactive element (`<a>`, `<button>`, `input`, `[tabindex]`) must preserve the signature focus visible indicator:
   ```css
   :focus-visible {
     outline: 2px solid var(--bp-cyan);
     outline-offset: 2px;
   }
   ```
   Focus outlines must render on top of glassmorphic or spotlight pseudo-elements (`z-index: 10000`).
3. **Screen Reader Text Integrity:** Number counters must preserve accessibility labels using `aria-label` attribute (e.g. `<b aria-label="₹2.4 Crore">₹2.4Cr</b>`) so screen reader users hear accurate values regardless of ticker timing.

---
