# Research Record — OBSIDIAN LUXE v9 Identity (1 Oct 2026, ~02:30 IST)

## Decision
Founder reviewed 3 live design probes (A Obsidian Luxe / B Big Type Loud / C Console OS) and selected **A — Obsidian Luxe** as the permanent Beyond Pixells identity, with the directive: best approach, finishing, placing, CTAs — production-grade execution.

## The v9 system
- Canvas: obsidian #06070B (benchmarked vs Linear 19,20,21)
- Ink #F4F5F8 / muted #8A90A0 / dim #5C6272 — WCAG-clean contrast
- Accent: electric blue #4D7CFF (soft #7AA0FF, pale #A7C0FF), one accent only
- Type: Inter (UI) + Instrument Serif italic (display accents) + JetBrains Mono (kickers, labels, stats)
- Surfaces: flat panels rgba(255,255,255,.03) + hairline borders rgba(255,255,255,.08) — NO glow washes, NO cursor-follow, NO meteors (quiet luxury law)
- Motion: bp-lift (translateY -4px), hero stagger, scroll progress bar, staggered Work reveals, active-nav highlighting, button press scale
- Product mockups: app-true dark window (#0D1017) with titlebar, sidebar, KPIs — kept dark by design

## Rollout (all live-verified: body rgb(6,7,11), white h1, 390px scrollWidth=390, 0 JS errors)
1. Hub (beyond-pixells): full rebuild — honest pill "Software studio · Gym OS · Dentist OS · Builder OS", trust stats 3/1/0, floating Gym OS window, OS family bento + product frames, philosophy, services, Work gallery (3 clickable Gym OS v3 screens), process 01-04, CTA band + lead form, footer cross-links. All wiring preserved: bp-lead-form + consent + captureLead + Gym OS contact fallback, site.json content layer (IDs bp-pill/bp-headline/bp-sub/bp-cta/bp-blurb/bp-mcta), mobile CTA bar, both JSON-LD blocks, trackView, CTA word rotator.
2. Dentist OS (dentist-os-site): style block rewritten in v9 (same class names), full font set added.
3. Builder OS (builder-os-site): style block rewritten in v9, full font set added.
4. Blog (5 pages): palette remap navy→obsidian, #0066FF→#4D7CFF.
5. Shared assets: bp-design-system.css v9 + bp-obsidian-veins.css v9 (CDN — dentist/builder inherit).
6. content/site.json v2: honest pill + v9 theme tokens (accent #4D7CFF).

## Honesty fixes (standing law)
- Removed "8 client systems running" pill + client marquee + "Running live in 8 gyms" (client estate deleted 27 Sep — claims would be false).
- Proof stats replaced with verifiable: 3 OS products / 1 studio / 0 templates / 24/7 monitoring (Upptime real).
- Work note: "Real product, demo data. Try the live demo yourself."

## Process notes (machine laws updated)
- Rebase conflict with parallel session resolved keeping BOTH sides: their motion polish (scroll progress, staggered reveals, active nav, anchor offset, press feedback) ported INTO v9; v9 replaces their page.
- Lesson: during `git rebase`, --ours = the BASE (origin), --theirs = the commit being replayed (yours). Got this backwards once; recovered from reflog (29cc8af).
- Found + fixed: active-nav map array syntax error (var map=[...],[...] → invalid destructuring) caught live, fixed, pushed.

## Pass B recheck
- Contrast: dark-text audit clean on hub/dentist/builder (dark-on-dark impossible).
- Mobile: 390px exact on all 5 surfaces + blog pages; mobile CTA bar displays on all.
- Wiring: lead form, consent, fallback chain, site.json loader, JSON-LD, sitemap/llms.txt untouched.
- Open follow-ups: og-image.png still dark v7.2 (needs v9 regenerate); gym-os-v3 (Next.js product) NOT part of this marketing identity; design-probes/ folder still live for reference (noindex).
