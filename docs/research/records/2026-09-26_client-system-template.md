Topic: Client system canonical template (Oxigen rebuild)
Date: 2026-09-26
Research owner: lead agent (beyond)
Business area: vertical OS distribution + services (blueprint §6, §9, §30, §67)
Question: What must every client gym site contain to convert and connect to Gym OS, in one consistent ecosystem?
Current market state: world-class gym sites (Equinox, Barry's, Third Space, F45) convert via schedule, trainers, transformations, pricing, trial CTAs; Indian gyms are WhatsApp-first, UPI-first, walk-in heavy
Primary sources: live client site audits (oxigen, bettabodies, reds-gym fetched + diffed)
Secondary sources: 'best gym website design 2025/2026' roundups, conversion best-practice articles
Competitors: classpass-style aggregators, Wix gym templates, Indian gym software vendors' microsites
Customer evidence: 8 live client rollouts; founder wants "research the best gyms website features"; all must "match and connect to our OS"
Current best practices: floating WhatsApp widget, filterable timetable, book-via-WhatsApp per class, Google reviews badge, UPI trial pass, honest pricing
Emerging approaches: AI concierge on site — deferred until platform supports it
Future approaches: outcome-based UX (blueprint §19) — member portal covers first slice
Options considered: (a) keep per-site bespoke designs, (b) one config-driven canonical template on the BP design system
Recommended approach: (b) — site.config.js holds every owner-editable value; ecosystem visuals inherited from shared system
Why: repeatability = the flywheel (custom → reusable → template → product); halts per-site drift; owner edits without devs
Tradeoffs: less per-site art direction; per-gym accent flavor only
Risks: config slots unfilled → mitigated: honest fallbacks (no invented people/prices/reviews), OWNER_CONTENT_CHECKLIST.md per site
Security: lead form has consent + offline queue; no secrets in config; gym-os-connect endpoints fixed
Privacy: consent checkbox required; data only to Gym OS CRM; no analytics added yet (open)
Legal: DPDP-aligned consent copy; unreviewed by counsel (open, inherited from legal checklist)
UX: empty/loading/error states in lead form (form-status live region); mobile-first responsive; reduced-motion respected
Engineering: vanilla JS renderers (classes/trainers/plans/filters); removed dead manus.space fetch
Automation: WhatsApp deep-links are automation-ready hooks for Gym OS workflows
AI: none on-site (deferred)
Cost: 0
Scalability: template + config rolls to remaining 7 clients; new clients = 1 config file
Metrics: lead capture rate per site (open — needs monitoring workflow), trial form submissions (in Gym OS CRM)
Open questions: real club content (plans ₹, coaches, Google rating, UPI ID) — owner checklist sent; isDemo flag flips on sign-off
Decision: ADOPT canonical template (implemented on Oxigen 2026-09-26)
Implementation: oxigen-fitness-digital rebuilt (index/styles/script/site.config/OWNER_CONTENT_CHECKLIST)
Tests: parse OK all JS; live grep: filters=1, wa-float=2, fabricated-content=0
Recheck #1: DONE 2026-09-26 — live URL verified; consent+offline fallback wiring confirmed preserved; config renderers tested by grep (dynamic render — needs browser-level test)
Recheck #2: OPEN — browser-level render test + mobile pass scheduled with rollout of site #2 (Red's)
Last verified: 2026-09-26
Next review date: 2026-10-03
Status: IMPLEMENTED (site 1 of 8), Pass B pending
