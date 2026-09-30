# BEYOND PIXELLS — MASTER OPERATING PROTOCOL (v2, 1 Oct 2026)

Permanent operating procedure for every change to any Beyond Pixells property.
Paste this to any AI/engineer before work. It defines HOW we work, not just what we check.
v2 upgrades the old 10-pass engine to the founder's **00-26 specialist-pass protocol + 40-layer audit law**.

## HOW WORK IS DISPATCHED (the law)

Work NEVER runs as one monolithic "improve everything" pass. It runs as NAMED MODULE PASSES:

```
00_DISCOVERY      01_PRODUCT       02_UX            03_VISUAL       04_BRAND
05_MOTION         06_FRONTEND      07_BACKEND       08_SECURITY     09_DATA
10_ADMIN          11_ANALYTICS     12_SEO           13_GEO          14_INTEGRATIONS
15_WEBHOOKS       16_PERFORMANCE   17_ACCESSIBILITY 18_PRIVACY      19_ABUSE
20_TESTING        21_DEPENDENCIES   22_COST          23_DOCUMENTATION
24_RELEASE        25_REGRESSION    26_CONTINUOUS_IMPROVEMENT
```

Rules:
- A pass = scope + checklist + verify step + report. State the pass, do ONLY it, verify, stop.
- No pass silently "improves" outside its scope.
- **Pass 25_REGRESSION runs after every pass that touches UI or code**: visual BEFORE/AFTER compare, desktop + tablet + 390px, plus 0 JS errors and wiring integrity (forms, analytics events, JSON-LD, links).
- **SECOND-ORDER LAW**: every change asks "what else could this change affect?" A CTA is not a UI change; it's an analytics event, a funnel, an automation trigger, a conversion report. Think in systems, not screens.
- **DECISION LOG**: why an architecture/workflow exists, why a feature was rejected — record it (AGENT_BRAIN.md + research records). Prevents future agents from "fixing" deliberate design.

## THE RULE

INSPECT → REPORT → PRIORITIZE → MODIFY → TEST → RECHECK

Never blind-redesign. Never change 40 things at once. Preserve what works.
Every change must earn its place with a UX, visual, performance, accessibility,
security, or business benefit.

## WORKFLOW (mandatory order)

1. **RECON** — read the actual files/pages before touching anything. Understand
   routes, components, forms, APIs, animation system, what already works.
2. **AUDIT** — run the passes below against reality, not assumptions.
3. **PRIORITIZE** — rank findings: broken > trust/conversion > a11y > performance > polish.
4. **MODIFY** — smallest safe diff that fixes the finding. One concern per change.
5. **VERIFY** — triple verification: (a) static validation (tags/JS parse),
   (b) live HTML check post-deploy, (c) real-browser render + interaction test.
6. **REGRESSION** — re-test what the change touched and its neighbors.
   Compare before/after. If it breaks something, revert the change, not the site.

## THE 40 AUDIT LAYERS (what each pass checks)

Full mapped table: /app/notes/company-master-plan/audit-layers.md (company law). Summary — every pass owns its layers:

1. State-machine audit (State A → Action → State B; impossible states, races, stale state, rollback, partial completion) — 07/09/20
2. Idempotency & concurrency ("can this action safely happen twice?" double-click, refresh mid-action, two tabs, duplicate webhooks, retries) — 07/15/20
3. Testing hierarchy (unit → component → integration → API → e2e → visual → a11y → security → performance → smoke → regression; define automated vs manual) — 20
4. Visual regression (BEFORE/AFTER: desktop, tablet, 390px, every important page/component) — 25
5. Design-token governance (colors, spacing, type, radius, shadows, borders, motion, breakpoints, z-index; auto-detect hard-coded values) — 03/06
6. Asset governance (inventory, unused/duplicate/oversized images, alt text, formats, compression, licensing) — 06
7. Dependency / supply-chain audit (outdated/vulnerable/abandoned/duplicate packages, licenses, third-party scripts/CDNs) — 21
8. Secrets & environment audit (keys, tokens, env vars, client bundles, source maps, logs; "can a normal visitor discover something they shouldn't?") — 08
9. Backup / disaster recovery (backups, restoration procedure, recovery TESTING, max tolerable loss/downtime. A backup never restored is not a recovery system) — 09
10. Production health / observability (logs, metrics, traces, alerts; who gets alerted, when, what happens next) — 10
11. Analytics split: website vs product vs business — three dashboards, never one — 11
12. Attribution (source → landing → campaign → action → conversion; UTM, first/last touch) — 11
13. Internal search quality (relevance, typo tolerance, empty results, analytics) — 02
14. Personalization evaluation (evaluate, never auto-add; never creepy) — 01
15. Internationalization readiness (don't build now; don't make it painful later) — 01/06
16. PWA / app-like evaluation (evaluate, don't auto-add) — 01
17. Notification architecture (event → decision → notification → delivery → status; preferences, quiet hours, retries, duplicates, unsubscribe, transactional vs marketing) — 14
18. Communication architecture (transactional / marketing / operational — different rules for each) — 14
19. Multi-user / collaboration logic (ownership, invitations, permissions, conflicts, activity history) — 07/09
20. Data lifecycle (Create → Use → Modify → Archive → Delete → Recover; retention, soft delete, exports, orphaned records) — 09
21. Privacy / data governance (what data, why, who accesses, retention, consent, sharing; flag for legal review — never invent compliance) — 18
22. Cookie / tracking governance (pixels, consent, withdrawal, regional behavior) — 18
23. Abuse / misuse modeling ("how could a normal user abuse a legitimate feature?" spam, coupon abuse, scraping, resource exhaustion) — 19
24. Bot / automation resilience (crawlers, credential stuffing, automated forms/APIs, rate limits) — 19
25. Data quality (duplicates, invalid values, orphans, stale records, impossible values) — 09
26. Link integrity (broken internal/external links, redirect chains, orphan pages, incorrect canonicals) — 12
27. SEO technical health over time (indexing changes, accidental noindex, sitemap changes, content decay) — 12
28. Content intelligence (inventory, duplicate/stale content, outdated claims, gaps, FAQ opportunities) — 01/23
29. Experimentation system (A/B, experiment metrics, rollback; never uncontrolled experiments on checkout/auth/payment) — 26
30. Feature flag system (gradual release, beta, emergency disable, rollback) — 24
31. Documentation (architecture, workflows, APIs, integrations, env vars, permissions, DB, recovery, known limitations) — 23
32. Decision log (why this exists; prevents future agents "fixing" deliberate design) — 23
33. Dependency map (PAGE → component → state → API → DB → automation → webhook → external service; "if I change X, what breaks?" — run before major changes) — 00
34. Cost audit (API, DB, storage, bandwidth, automation runs, AI usage; expensive ops; cheaper without quality loss?) — 22
35. AI/token efficiency (inspect first; reuse; never regenerate working code; small controlled mods; verify after; no unnecessary deps/API calls) — ALL
36. Maintainability (naming, structure, component size, duplicated logic, tech debt, coupling) — 06/21
37. Chaos testing (API down, DB down, webhook down, slow network, expired credentials → graceful degradation) — 20/24
38. Deployment safety (pre-deploy checks, migration safety, env validation, smoke tests, rollback, production verification) — 24
39. Release checklist (security → functionality → UX → UI → responsive → a11y → SEO → analytics → performance → integrations → regression → backup) — 24
40. SECOND-ORDER EFFECTS (what else can this change affect? — the law above) — ALL

## LEGACY 10-PASS CHECKLISTS (use inside the module passes above)

P01 PRODUCT — purpose of each section, one primary CTA, obvious landing→action path, no dead ends.
P02 UI — typography scale, color tokens only, spacing rhythm, radius/shadow consistency, hierarchy.
P03 UX — every click does something expected and gives feedback; forms validate; no silent failures.
P04 MOTION — purposeful, consistent timing (hover 150-250ms, reveals 400-700ms), reduced-motion respected.
P05 RESPONSIVE — 320 → 1920px. Mobile is designed, not shrunken: sticky CTA, tap targets ≥44px, nav behavior intentional.
P06 ACCESSIBILITY — keyboard-only journey, visible focus rings, contrast, alt text, labels, semantic HTML.
P07 PERFORMANCE — image weight (WebP/optimize, lazy-load below fold), no unused JS, animate transform/opacity only.
P08 SECURITY — no secrets in client code, API auth, input validation server-side, no trust in UI hiding.
P09 QA — every state: default/hover/focus/press/loading/success/error/empty/disabled + double-click + slow network + back button.
P10 POLISH — alignment, 1-2px inconsistencies, awkward line breaks, competing emphasis, dead weight.

## BRAND SYSTEM CONSTRAINTS (non-negotiable)

- OBSIDIAN LUXE v9: near-black #06070B canvas, electric blue #4D7CFF, Inter + Instrument Serif italic + JetBrains Mono. (Product apps stay app-true dark.)
- Logo: top-left, never distorted, never over low-contrast backgrounds. Not on every surface.
- No random colors, fonts, icon sets, or corner radii. No generic-SaaS look.
- Claims must be true or labeled demo. No fake urgency, no vaporware.
- Motion communicates state/hierarchy/continuity — delete anything that only "looks cool".


## FINDINGS CLASSIFICATION
P0 critical (security/data-loss/broken flow) → P1 major (function/UX/conversion/a11y/perf)
→ P2 important improvement → P3 polish → P4 experimental. Never work on P4 while P0/P1 exist.

## AUDIT REPORT FORMAT (A–X)
Every audit cycle reports: A inspected · B already good · C critical problems · D security risks ·
E logic risks · F UX · G visual · H motion · I mobile · J accessibility · K SEO · L GEO ·
M analytics · N admin/ops · O integrations · P performance · Q missing features ·
R research · S recommendations · T changes implemented · U tests · V regression ·
W remaining risks · X next highest-value improvements. Then run a SECOND discovery pass.

## ANALYTICS EVENT TAXONOMY (planned; do not fake data)
page_view (live) · cta_click [hero/proof/contact/nav/mobile-bar] · form_started ·
form_completed · form_fallback_used · os_card_opened [gym/dentist/builder/custom].
Wire when backend credits allow; every event → funnel → business outcome.

## FINDINGS LOG

| Date | Finding | Pass | Fix | Verified |
|------|---------|------|-----|----------|
| 2026-10-01 | Favicon was 194KB logo.png fetched for every tab | P07 | favicon-32.png (1KB) + apple-touch-icon | live check |
| 2026-10-01 | Nav/footer logo 194KB rendered at 34px | P07 | logo-nav.png (4KB) | live check |
| 2026-10-01 | No custom 404 page | P01 | branded 404.html | live check |
| 2026-10-01 | No visible focus rings for links/buttons (keyboard users) | P06 | :focus-visible outline | live check |
| 2026-10-01 | Lead form had no spam protection (open endpoint abuse) | N | honeypot + 2.5s time-trap, bots get fake success | static |
| 2026-10-01 | Sitemap contained 4 foreign-origin URLs (ignored by Google) | K | sitemap.xml same-origin only | live check |
| 2026-10-01 | /admin/ crawlable in robots.txt | D | Disallow added (noindex meta already present) | live check |
| 2026-10-01 | P1 OPS: Base44 integration credits exhausted → captureLead + trackView endpoints returning limit errors; Gym OS fallback still stores leads | T | no code change possible client-side; owner informed; restore monitoring after credit reset | curl probe |
| 2026-10-01 | Admin PIN stored as base64, PAT in localStorage by choice (documented trade-off) | D | recommendation: SHA-256 PIN + session-only PAT; left untouched (other agent's surface) | reviewed |
| 2026-10-01 | Form showed "✓ Received" even if storage failed | P03/P09 | honest dual-state messaging | live check |

Known-good (verified this pass): no dead anchors, all legal pages exist, single H1,
OG tags + JSON-LD present, robots.txt + sitemap.xml live, form is double-click
protected with loading state + dual-API fallback chain, reduced-motion covered,
mobile has designed sticky CTA bar, nav hides links below 640px intentionally.

### Cycle 3 — state-machine, idempotency, assets, links (1 Oct 2026)
| Date | Finding | Module | Fix | Verified |
|------|---------|--------|-----|----------|
| 2026-10-01 | Lead form: refresh/re-submit/two-tabs could create duplicate leads | 09 | 10-min idempotency key by phone (localStorage) | static |
| 2026-10-01 | 5.6MB content/ brochures+social assets unreferenced in public repo | asset gov | flagged; serve only when intentionally used | inventory |
| 2026-10-01 | hero-veins*.jpg (632KB) unused since dark revert | asset gov | removal candidates; held for design-probes | inventory |
| 2026-10-01 | dentistos.in DNS dead; email template links to it | 14 | flagged for Dentist OS domain work | curl probe |
| 2026-10-01 | 3 vendor JS bundles (432KB) referenced by zero pages | 21 | repo-only weight; not shipped to users | scan |
| 2026-10-01 | Internal links all resolve (12 pages); wa.me + gym-os-v3 healthy | 00 | none needed | crawler + curl |
