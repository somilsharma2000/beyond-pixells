# Beyond Pixells — Definitive UI/UX Visual Design Language Spec
**Version:** 1.0.0  
**Brand:** Beyond Pixells — Modern Indian Product Studio  
**Tagline:** "We build operating systems for local businesses"  
**Target Environment:** Static HTML/CSS Landing Pages (GitHub Pages)  

---

## 1. Design Tokens & Core Variables

All design tokens are defined as CSS Custom Properties in the global `:root` selector to guarantee modularity, consistency, and instantaneous thematic cascading across all Beyond Pixells products.

```css
:root {
  /* ==========================================
     COLOR SYSTEM — BASE CANVAS & SURFACES
     ========================================== */
  --color-canvas-default: #08090C;        /* Main dark background */
  --color-canvas-elevated-1: #12141A;     /* Primary card surface */
  --color-canvas-elevated-2: #1A1D26;     /* Elevated modal / hover card */
  --color-canvas-elevated-3: #222632;     /* Dropdowns / popovers */
  --color-canvas-glass: rgba(18, 20, 26, 0.75); /* Glassmorphic headers */

  /* BORDERS & DIVIDERS */
  --color-border-subtle: rgba(255, 255, 255, 0.07);
  --color-border-default: #2A2F3D;
  --color-border-strong: #3D4457;
  --color-border-focus: #00F2FE;

  /* TEXT & NEUTRAL INTENSITY */
  --color-text-primary: #F4F5F7;          /* High contrast body/headings */
  --color-text-secondary: #9DA4B4;        /* Subtitles & metadata */
  --color-text-muted: #5C6479;            /* Placeholders & disabled text */
  --color-text-inverse: #08090C;          /* Text on high-contrast buttons */

  /* BRAND & ACCENT COLOR TOKENS */
  --color-brand-crimson: #FF3B30;         /* Primary brand energetic crimson */
  --color-brand-amber: #FF7A00;           /* Warm amber secondary glow */
  --color-accent-cyan: #00F2FE;           /* Electric status & interactive accent */
  --color-status-success: #00E676;        /* System active / online indicator */
  --color-status-warning: #FFAB00;        /* Alert / caution status */
  --color-status-error: #FF3B30;          /* Error / critical action */

  /* SIGNATURE GRADIENTS */
  --gradient-brand: linear-gradient(135deg, #FF3B30 0%, #FF7A00 100%);
  --gradient-brand-subtle: linear-gradient(135deg, rgba(255, 59, 48, 0.15) 0%, rgba(255, 122, 0, 0.05) 100%);
  --gradient-brand-glow: linear-gradient(135deg, rgba(255, 59, 48, 0.4) 0%, rgba(255, 122, 0, 0.2) 100%);
  --gradient-cyan-glow: linear-gradient(135deg, rgba(0, 242, 254, 0.3) 0%, rgba(0, 242, 254, 0.02) 100%);
  --gradient-card-border: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.02) 100%);

  /* ==========================================
     TYPOGRAPHY SCALE
     ========================================== */
  --font-display: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  --text-xs: 0.75rem;       /* 12px | line-height: 1.4 */
  --text-sm: 0.875rem;      /* 14px | line-height: 1.5 */
  --text-base: 1rem;        /* 16px | line-height: 1.6 */
  --text-lg: 1.125rem;      /* 18px | line-height: 1.5 */
  --text-xl: 1.25rem;       /* 20px | line-height: 1.4 */
  --text-2xl: 1.5rem;       /* 24px | line-height: 1.3 */
  --text-3xl: 1.875rem;     /* 30px | line-height: 1.2 */
  --text-4xl: 2.25rem;      /* 36px | line-height: 1.15 */
  --text-5xl: 3rem;         /* 48px | line-height: 1.1 */
  --text-6xl: 3.75rem;      /* 60px | line-height: 1.05 */
  --text-display: 4.5rem;   /* 72px | line-height: 1.02 */

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --tracking-tight: -0.03em;
  --tracking-normal: 0em;
  --tracking-wide: 0.05em;

  /* ==========================================
     SPACING SCALE (4px BASELINE)
     ========================================== */
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2rem;     /* 32px */
  --space-12: 3rem;    /* 48px */
  --space-16: 4rem;    /* 64px */
  --space-24: 6rem;    /* 96px */
  --space-32: 8rem;    /* 128px */

  /* ==========================================
     BORDER RADIUS TOKENS
     ========================================== */
  --radius-xs: 4px;      /* Badges & micro elements */
  --radius-sm: 8px;      /* Buttons & inputs */
  --radius-md: 12px;     /* Small cards & popovers */
  --radius-lg: 16px;     /* Feature cards & modals */
  --radius-xl: 24px;     /* Hero wrappers & container panels */
  --radius-full: 9999px; /* Status pills & round avatars */

  /* ==========================================
     SHADOWS & AMBIENT GLOWS
     ========================================== */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.6);
  --shadow-lg: 0 12px 40px rgba(0, 0, 0, 0.85);

  --glow-brand: 0 0 28px rgba(255, 59, 48, 0.35);
  --glow-amber: 0 0 28px rgba(255, 122, 0, 0.35);
  --glow-cyan: 0 0 24px rgba(0, 242, 254, 0.35);

  /* ==========================================
     TIMING & EASING CURVES
     ========================================== */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-in-out-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-linear: linear;

  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;
  --duration-long: 700ms;
}
```

---

## 2. Motion System Spec

Beyond Pixells' motion philosophy is **Purposeful, Weightless, and Precise**. Motion must guide user intent, elevate perceived application quality, and emphasize operating system power without causing visual fatigue or performance drop on low-end hardware.

### 2.1 Named Animations & Keyframes

#### 1. `fadeUp` (Scroll Reveal & Section Entrance)
* **Purpose:** Gently lifts and reveals hero headers, section titles, and grid cards as they enter the viewport.
* **Duration & Easing:** `600ms` using `var(--ease-out-expo)`.
* **When to use:** Scroll-triggered element reveals, hero headline load, staggered list entry.

```css
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(24px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fadeUp 600ms var(--ease-out-expo) forwards;
  will-change: transform, opacity;
}
```

#### 2. `scaleIn` (Modal, Dialog & High-Impact Metric Pop)
* **Purpose:** Provides weightless expansion for modals, interactive popovers, or key KPI metric cards.
* **Duration & Easing:** `350ms` using `var(--ease-spring)`.
* **When to use:** Dialog popups, dropdown opening, active state toggles.

```css
@keyframes scaleIn {
  0% {
    opacity: 0;
    transform: scale(0.92);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-in {
  animation: scaleIn 350ms var(--ease-spring) forwards;
  will-change: transform, opacity;
}
```

#### 3. `glowPulse` (Status Highlights & Ambient CTA Glow)
* **Purpose:** Draws subtle visual attention to primary CTA buttons, live system status indicators, or urgent alert badges.
* **Duration & Easing:** `3000ms` infinite loop using `var(--ease-in-out-smooth)`.
* **When to use:** Live status badges ("System Online"), main primary CTA ambient halo.

```css
@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 15px rgba(255, 59, 48, 0.25);
    border-color: rgba(255, 59, 48, 0.4);
  }
  50% {
    box-shadow: 0 0 32px rgba(255, 122, 0, 0.55);
    border-color: rgba(255, 122, 0, 0.8);
  }
}

.animate-glow-pulse {
  animation: glowPulse 3s var(--ease-in-out-smooth) infinite;
}
```

#### 4. `gradientShift` (Animated Border & Hero Text Accent)
* **Purpose:** Creates continuous, subtle hue movement across gradient background borders and text titles.
* **Duration & Easing:** `6000ms` infinite loop using `var(--ease-linear)`.
* **When to use:** Hero title gradient text, highlighted feature card border rings.

```css
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient-shift {
  background-size: 200% 200%;
  animation: gradientShift 6s var(--ease-linear) infinite;
}
```

#### 5. `countUp` / `numSlide` (Metric Entry & Live Counter)
* **Purpose:** Gives tactical weight to financial metrics, member counts, or efficiency stats.
* **Duration & Easing:** `800ms` using `var(--ease-out-expo)`.
* **When to use:** Dashboard stat cards, landing page social proof counters.

```css
@keyframes numSlide {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

.animate-num-slide {
  animation: numSlide 800ms var(--ease-out-expo) forwards;
}
```

#### 6. `marquee` (Continuous Seamless Logo & Feature Ticker)
* **Purpose:** Uninterrupted horizontal scrolling for customer business logos or feature badges.
* **Duration & Easing:** `25s` continuous loop using `var(--ease-linear)`.
* **When to use:** Trust banners, social proof logos, technology stack tickers.

```css
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 25s var(--ease-linear) infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}
```

---

### 2.2 Micro-Interactions & Hover Physics

1. **Card Hover Elevate:**
   ```css
   .interactive-card {
     transition: transform var(--duration-normal) var(--ease-out-expo),
                 box-shadow var(--duration-normal) var(--ease-out-expo),
                 border-color var(--duration-normal) var(--ease-out-expo);
   }
   .interactive-card:hover {
     transform: translateY(-4px) scale(1.005);
     box-shadow: var(--shadow-lg), var(--glow-brand);
     border-color: rgba(255, 59, 48, 0.4);
   }
   ```
2. **Button Click Feedback:**
   ```css
   .btn-active:active {
     transform: scale(0.97);
     transition: transform 50ms var(--ease-out-expo);
   }
   ```

---

## 3. Core Component Specifications

### 3.1 Buttons
Buttons use `Space Grotesk` font, tracking-wide uppercase/semi-bold styling, with precise padding and border radii.

```html
<!-- Primary CTA Button -->
<button class="btn btn-primary">
  <span>Get Started with Gym OS</span>
  <svg class="icon-arrow" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
</button>
```

```css
.btn {
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-sm);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  cursor: pointer;
  border: 1px solid transparent;
  transition: all var(--duration-normal) var(--ease-out-expo);
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

/* Primary Crimson -> Amber Gradient CTA */
.btn-primary {
  background: var(--gradient-brand);
  color: #FFFFFF;
  box-shadow: 0 4px 14px rgba(255, 59, 48, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 59, 48, 0.5), var(--glow-amber);
}

.btn-primary:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px var(--color-canvas-default), 0 0 0 5px var(--color-accent-cyan);
}

/* Secondary Dark Outline CTA */
.btn-secondary {
  background: var(--color-canvas-elevated-1);
  color: var(--color-text-primary);
  border-color: var(--color-border-default);
}

.btn-secondary:hover {
  background: var(--color-canvas-elevated-2);
  border-color: var(--color-border-strong);
  color: #FFFFFF;
  transform: translateY(-2px);
}

/* Cyan Accent CTA (Status / Technical Action) */
.btn-cyan {
  background: rgba(0, 242, 254, 0.1);
  color: var(--color-accent-cyan);
  border-color: rgba(0, 242, 254, 0.3);
}

.btn-cyan:hover {
  background: rgba(0, 242, 254, 0.2);
  box-shadow: var(--glow-cyan);
  transform: translateY(-2px);
}
```

---

### 3.2 Cards & Surfaces
Cards are structured with double-layer border highlights (1px dark border + soft inner top shine) to achieve modern SaaS depth.

```html
<div class="card card-feature">
  <div class="card-badge">Dentist OS Core</div>
  <h3 class="card-title">Automated Appointment Dispatch</h3>
  <p class="card-body">Sync WhatsApp patient reminders with zero manual staff intervention.</p>
</div>
```

```css
.card {
  background: var(--color-canvas-elevated-1);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  position: relative;
  transition: all var(--duration-normal) var(--ease-out-expo);
  box-shadow: var(--shadow-md);
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%);
}

.card-feature:hover {
  border-color: var(--color-border-default);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg), 0 0 20px rgba(0,0,0,0.4);
}
```

---

### 3.3 Navigation Header
Glassmorphic sticky header designed for static GitHub Pages sites with lightweight CSS blur.

```html
<header class="navbar">
  <div class="nav-container">
    <a href="#" class="brand-logo">
      <span class="logo-mark"></span>
      <span class="logo-text">Beyond<span class="text-gradient">Pixells</span></span>
    </a>
    <nav class="nav-links">
      <a href="#gym-os" class="nav-link">Gym OS</a>
      <a href="#dentist-os" class="nav-link">Dentist OS</a>
      <a href="#builder-os" class="nav-link">Builder OS</a>
    </nav>
    <a href="#contact" class="btn btn-primary">Book Demo</a>
  </div>
</header>
```

```css
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--color-canvas-glass);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--color-border-subtle);
  padding: var(--space-4) 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  text-decoration: none;
}

.text-gradient {
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-link {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: var(--space-2) var(--space-4);
  transition: color var(--duration-fast) var(--ease-in-out-smooth);
  position: relative;
}

.nav-link:hover {
  color: var(--color-text-primary);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0%;
  height: 2px;
  background: var(--gradient-brand);
  transition: all var(--duration-normal) var(--ease-out-expo);
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 80%;
}
```

---

### 3.4 Badges & Status Indicators

```html
<!-- Live System Status Badge -->
<div class="badge badge-status">
  <span class="status-dot"></span>
  <span>OS v2.4 Live in 40+ Indian Cities</span>
</div>
```

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}

.badge-status {
  background: rgba(0, 242, 254, 0.08);
  border: 1px solid rgba(0, 242, 254, 0.25);
  color: var(--color-accent-cyan);
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: var(--radius-full);
  background-color: var(--color-accent-cyan);
  box-shadow: var(--glow-cyan);
  animation: glowPulse 2s infinite var(--ease-in-out-smooth);
}
```

---

### 3.5 Inputs & Form Controls

```css
.input-field {
  width: 100%;
  background: var(--color-canvas-default);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-sm);
  padding: 0.75rem 1rem;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text-primary);
  transition: border-color var(--duration-fast) var(--ease-out-expo),
              box-shadow var(--duration-fast) var(--ease-out-expo);
}

.input-field:focus {
  outline: none;
  border-color: var(--color-accent-cyan);
  box-shadow: 0 0 0 3px rgba(0, 242, 254, 0.18);
}

.input-field::placeholder {
  color: var(--color-text-muted);
}
```

---

### 3.6 Tables & Metric Displays

```css
.data-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: var(--color-canvas-elevated-1);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.data-table th {
  background: var(--color-canvas-elevated-2);
  font-family: var(--font-display);
  font-size: var(--text-xs);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  padding: var(--space-3) var(--space-4);
  text-align: left;
  border-bottom: 1px solid var(--color-border-default);
}

.data-table td {
  padding: var(--space-4);
  font-size: var(--text-sm);
  color: var(--color-text-primary);
  border-bottom: 1px solid var(--color-border-subtle);
  transition: background var(--duration-fast) var(--ease-in-out-smooth);
}

.data-table tr:hover td {
  background: rgba(255, 255, 255, 0.02);
}
```

---

### 3.7 Footer Component

```html
<footer class="footer">
  <div class="footer-container">
    <div class="footer-brand">
      <div class="brand-logo">Beyond<span class="text-gradient">Pixells</span></div>
      <p class="footer-tagline">We build operating systems for local businesses.</p>
      <p class="footer-location">Made with pride across India 🇮🇳</p>
    </div>
    <div class="footer-links">
      <h4>Products</h4>
      <a href="#">Gym OS</a>
      <a href="#">Dentist OS</a>
      <a href="#">Builder OS</a>
    </div>
  </div>
</footer>
```

```css
.footer {
  background: #050608;
  border-top: 1px solid var(--color-border-subtle);
  padding: var(--space-16) 0 var(--space-8) 0;
  color: var(--color-text-secondary);
}
.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: var(--space-12);
}
```

---

## 4. Per-Product Flavor Rules

While all products share the core token engine (`#08090C` canvas, `Space Grotesk`, baseline grid), each product applies specific thematic overrides via body class scoped variables to reflect industry context.

```
                  ┌──────────────────────────────┐
                  │    Beyond Pixells Core       │
                  │   Canvas: #08090C            │
                  │   Display: Space Grotesk     │
                  └──────────────┬───────────────┘
                                 │
         ┌───────────────────────┼───────────────────────┐
         ▼                       ▼                       ▼
 ┌───────────────┐       ┌───────────────┐       ┌───────────────┐
 │    Gym OS     │       │  Dentist OS   │       │  Builder OS   │
 │ Kinetic & Intense│     │ Clinical & Soft│     │ Structural Grid│
 │ Crimson (#FF3B30)│     │ Cyan (#00F2FE) │     │ Amber (#FF7A00)│
 └───────────────┘       └───────────────┘       └───────────────┘
```

### 4.1 Gym OS (Fitness Industry)
* **Visual Persona:** Kinetic, high-energy, raw performance, high contrast.
* **Dominant Accent:** Primary Crimson (`#FF3B30`) with obsidian black surface tints.
* **Typography Bias:** Heavy, bold uppercase headers (`font-weight: 700`).
* **Imagery & Pattern:** High-contrast athletic silhouettes, dark metallic carbon fiber subtle textures, active energy status pulse.
* **Theme Overrides:**
  ```css
  .theme-gym {
    --color-product-accent: #FF3B30;
    --gradient-product: linear-gradient(135deg, #FF3B30 0%, #E60000 100%);
    --glow-product: 0 0 30px rgba(255, 59, 48, 0.45);
    --card-border-hover: rgba(255, 59, 48, 0.5);
  }
  ```

### 4.2 Dentist OS (Clinics & Dental Practices)
* **Visual Persona:** Sterile precision, calm authority, high trust, clinical clarity.
* **Dominant Accent:** Electric Cyan (`#00F2FE`) with soft slate blue card surfaces.
* **Typography Bias:** Clean, balanced geometric lines with slightly open tracking.
* **Imagery & Pattern:** Soft frosted glass panels, ambient lighting radial spots, wireframe medical UI overlays.
* **Theme Overrides:**
  ```css
  .theme-dentist {
    --color-product-accent: #00F2FE;
    --gradient-product: linear-gradient(135deg, #00F2FE 0%, #00B8D4 100%);
    --glow-product: 0 0 25px rgba(0, 242, 254, 0.35);
    --card-border-hover: rgba(0, 242, 254, 0.4);
  }
  ```

### 4.3 Builder OS (Real Estate & Property Developers)
* **Visual Persona:** Architectural weight, structural integrity, warmth, expansive scale.
* **Dominant Accent:** Warm Amber (`#FF7A00`) with industrial charcoal surfaces.
* **Typography Bias:** Structured grid alignment, prominent large numerical indicators.
* **Imagery & Pattern:** Blueprint line-grid overlays (`background-image: radial-gradient(rgba(255,122,0,0.1) 1px, transparent 1px)`), geometric CAD wireframes.
* **Theme Overrides:**
  ```css
  .theme-builder {
    --color-product-accent: #FF7A00;
    --gradient-product: linear-gradient(135deg, #FF7A00 0%, #FF5500 100%);
    --glow-product: 0 0 28px rgba(255, 122, 0, 0.4);
    --card-border-hover: rgba(255, 122, 0, 0.5);
  }
  ```

---

## 5. Accessibility & Web Performance Rules

### 5.1 Reduced Motion Specification
To respect user system settings (`prefers-reduced-motion: reduce`), all animations MUST gracefully disable or collapse to instant state transitions without breaking page layout or interactive feedback.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .animate-marquee {
    animation: none !important;
    width: 100% !important;
    flex-wrap: wrap !important;
  }

  .interactive-card:hover,
  .btn:hover {
    transform: none !important;
  }
}
```

### 5.2 Color Contrast & Focus Requirements
* **Text Contrast:** Main body text (`#F4F5F7`) on background (`#08090C`) achieves **16.2:1** contrast ratio (exceeding WCAG AAA standard of 7:1).
* **Secondary Text:** `#9DA4B4` achieves **7.4:1** contrast ratio on `#12141A` (passes WCAG AAA).
* **Focus Visible Rings:** Every interactive element must display a distinct 2px ring using `#00F2FE` when navigated via keyboard.

### 5.3 CSS Performance & GPU Acceleration
* **Composite-Only Properties:** Only animate `transform` and `opacity`. NEVER animate `height`, `width`, `margin`, `padding`, or `top`/`left` to prevent main-thread layout thrashing.
* **GPU Promotion:** Apply `will-change: transform, opacity;` strictly on animated containers to offload rendering to the GPU.

---

## 6. The 'Do Not Use' List (Anti-Patterns)

1. **NO Generic AI Purple/Indigo Gradients:** Do NOT use default Tailwind `#6366F1` / `#8B5CF6` gradients. Beyond Pixells is defined by Crimson (`#FF3B30`), Amber (`#FF7A00`), and Cyan (`#00F2FE`).
2. **NO Pure White Backgrounds (`#FFFFFF`):** Avoid white canvas surfaces. Dark mode is the primary canvas identity (`#08090C`).
3. **NO Unfiltered Blur Stack on Mobile:** Limit `backdrop-filter: blur()` to navigation header only to prevent frame drops on mid-range Android devices.
4. **NO Bouncy/Elastic Text Motion:** Avoid cartoonish bounce physics on headlines. Use clean exponential deceleration (`cubic-bezier(0.16, 1, 0.3, 1)`).
5. **NO Non-Accessible Low Contrast Labels:** Do NOT use text darker than `#5C6479` on dark cards.
6. **NO Uncontrolled Infinite Animations:** Except for live status indicator dots and marquee tickers, do not leave infinite looping animations running on text or static cards.
7. **NO Layout-Shifting Hover States:** Do NOT alter element borders or padding on hover in a way that shifts neighboring elements (use `box-shadow` inset or overlay borders instead).
