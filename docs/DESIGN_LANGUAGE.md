# Beyond Pixells — Visual Design Language (v2.0)

> The complete spec lives in `research/design_language.md` (tokens, keyframes,
> component states, a11y). This is the operating summary.
> **Working assets:** `assets/bp-design-system.css` + `assets/bp-motion.js` —
> 2 lines and any site inherits the whole system.

## Add to any site (2 lines)

```html
<link rel="stylesheet" href="https://somilsharma2000.github.io/beyond-pixells/assets/bp-design-system.css">
<script src="https://somilsharma2000.github.io/beyond-pixells/assets/bp-motion.js"></script>
```

Motion philosophy: **purposeful, weightless, precise** — motion guides intent,
never decorates.

## Tokens (exact)
- Canvas `#08090C` · surfaces `#12141A` `#1A1D26` `#222632` · borders `rgba(255,255,255,.07)`/`#2A2F3D`
- Signature gradient `#FF3B30 → #FF7A00` (135deg) · status cyan `#00F2FE` · success `#00E676`
- Type: Space Grotesk (display, -0.03em) + Plus Jakarta Sans (body)
- Easing: out-expo `cubic-bezier(.16,1,.3,1)`, spring `cubic-bezier(.34,1.56,.64,1)`
- Radius: 8/12/16/24px · Shadows: ambient glow `0 0 30px rgba(255,59,48,.12)`

## Motion library (named)
| Name | Use | Duration |
|---|---|---|
| `bp-fadeUp` | scroll reveals (auto-applied by bp-motion.js to standard cards) | 600ms out-expo |
| `bp-scaleIn` | modals, metric pops | 350ms spring |
| `bp-glowPulse` | primary CTA ambient glow (`.bp-glow`) | 2.6s loop |
| `bp-gradientShift` | gradient text/borders (`.bp-grad-text`) | 6s |
| `bp-numSlide` + countUp | numeric stats animate on view | 1.1s |
| `bp-marquee` | tickers (`.bp-marquee`) | 28s linear |
| `.bp-lift` | card hover: -4px + glow | 300ms |

## v2.0 Motion & Lighting Utilities (26 Sep 2026)

Upgrade research (docs/research/motion_visual_upgrade.md) added these opt-in
utilities to the shared files. All are backward compatible: no existing page
changes behavior until it opts in.

| Utility | Class / attribute | What it does |
|---|---|---|
| Noise canvas | `<body class="bp-noise-canvas">` | Sub-perceptual film-grain overlay; kills banding, adds tactile depth |
| Scroll progress | `<div class="bp-scroll-progress-bar"></div>` | Brand-gradient bar, scaled by bp-motion.js on scroll |
| Hero choreography | `class="bp-hero-step" style="--bp-hero-delay:120ms"` | Sequenced load entry: pill → h1 → p → CTAs → trust (0/100/220/340/460ms) |
| Card spotlight | `class="bp-spotlight-card"` | Mouse-following radial glow + 1px glowing border (the Linear-style signature) |
| Nav frost/shrink | `class="bp-nav-sticky"` on nav | Transparent → frosted glass + shrink past 20px scroll |
| Magnetic buttons | `class="bp-magnetic-btn"` | Primary CTAs drift toward cursor (hover devices only) |
| 3D tilt | `class="bp-tilt-card"` | Max ±8deg perspective tilt (hover devices only) |
| Shimmer text | `class="bp-shimmer-text"` | Slow brand-color sweep through text |
| Skeleton | `class="bp-skeleton"` | Loading shimmer blocks |
| Icon pop | `class="bp-icon-hover"` | scale 1.15 + rotate 6deg + cyan on hover |
| Reveal variants | `data-reveal="up|scale|left|right"` | Directional scroll reveals; v1 auto-selectors kept |
| Marquee controls | `data-direction="reverse"`, hover pauses | Ticker variations |

Performance law (v2.0): animate only `transform` + `opacity`; every pointer/scroll
handler writes inside `requestAnimationFrame`; scroll listeners `{passive:true}`;
`will-change` only on actively tracked elements; IntersectionObserver unobserves
after reveal. All engines disable under `prefers-reduced-motion`.

Blacklist (never use): trailing cursors, full card flips, scroll-velocity text
skew, particle networks, auto-playing sound.

## Per-product flavors (same DNA, different energy)
- **Gym OS**: full kinetic energy — crimson/amber, live telemetry mockups, fire emoji accents
- **Dentist OS**: calm trust — deeper spacing, cyan/green clinical accents, soft glows
- **Builder OS**: architectural precision — tighter grid, amber accents, blueprint motifs

## Hard rules
- One accent family per page. No rainbow. No light-theme default.
- `prefers-reduced-motion` fully honored (all animation → 0.01ms).
- Focus visible: 2px cyan outline. Contrast: body text ≥ 4.5:1 on canvas.
- Never animate anything that costs scroll performance (only transform/opacity).
