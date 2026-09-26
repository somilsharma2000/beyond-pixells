Topic: Design System v2.0 — estate-wide motion & lighting upgrade
Date: 2026-09-26
Research owner: lead agent (beyond)
Business area: UX/UI + brand system (blueprint §29, §30, §11)
Question: How does the whole estate (15 sites) get one premium, futuristic motion/visual language without per-site rebuilds?
Current market state: best-in-class dark tech (Linear, Vercel, Stripe, awwwards) rely on mouse-aware luminance, layered tactile canvas, choreographed load sequences, weighted interactive physics.
Primary sources: live CSS/JS of benchmarked products (structure analyzed via published assets)
Secondary sources: awwwards showcases, GSAP/Framer pattern libraries
Competitors: (visual benchmarks, not product competitors) Linear, Vercel, Stripe, Raycast
Customer evidence: founder directive — "same visuals and effects everywhere, a perfect ecosystem"
Current best practices: GPU-only properties (transform/opacity), IntersectionObserver reveals, backdrop-filter nav frost, masked border-glow spotlights
Emerging approaches: scroll-driven animations (CSS scroll-timeline) — deferred, browser support still partial
Future approaches: view transitions API — deferred until cross-browser
Options considered: (a) keep v1.0, (b) adopt GSAP library, (c) vanilla CSS+JS v2.0 with opt-in utilities
Recommended approach: (c) — zero dependencies, 2-file drop-in, backward compatible, v1 selectors auto-upgraded
Why: shared hot-linked files mean one push upgrades all sites; no build tools on GitHub Pages estate
Tradeoffs: no timeline-based choreography power of GSAP; acceptable for utility-level motion
Risks: visual regression on 15 sites → mitigated: all new utilities are opt-in; v1 classes unchanged
Security: none (static assets); noise overlay is inline SVG data-URI
Privacy: none (no tracking added)
Legal: none
UX: prefers-reduced-motion disables every engine; content always visible; focus indicators preserved (cyan outline above overlays)
Engineering: RAF-wrapped pointer/scroll writes, passive listeners, will-change only on tracked elements, single-trigger unobserve
Automation: none required
AI: none
Cost: 0 (no deps, no CDN fees)
Scalability: attribute-driven (data-reveal/data-spotlight) — new sites inherit by default
Metrics: Lighthouse CLS/perf delta (open — add to monitoring workflow), visual QA per flagship
Open questions: exact scroll-timeline adoption timing; cursor-ambient glow value vs cost
Decision: SHIP v2.0 (implemented 2026-09-26)
Implementation: assets/bp-design-system.css + assets/bp-motion.js v2.0; applied to hub, gym-os, dentist-os-site landings; utilities documented in DESIGN_LANGUAGE.md
Tests: node parse OK; live curl checks (marker counts) on 3 flagships + shared assets
Recheck #1: DONE 2026-09-26 — live verification: 5 hero-steps gym-os, 5 dentist, hub noise=1, v2 markers present in both shared files; fabricated-content grep = 0 on Oxigen
Recheck #2: OPEN — scheduled with daily site-health monitoring (visual QA + Lighthouse before/after)
Last verified: 2026-09-26
Next review date: 2026-10-10 (or at client-rollout completion)
Status: IMPLEMENTED, Pass B pending
