# RESEARCH DECISIONS REGISTER — institutional memory
Every material decision links to its evidence. Future agents: do NOT re-research a settled decision unless evidence changed, the review date arrived, or the founder challenges it.

| ID | Date | Topic | Evidence base | Decision | Alternatives considered | Status | Review date |
|---|---|---|---|---|---|---|---|
| D-001 | 2026-09 | Brand positioning | brand_architecture.md (PARTIAL — 1 source) + founder ratification | "We build operating systems for local businesses"; studio endorses OS family; ventures standalone | agency positioning; product-only positioning | RATIFIED BY FOUNDER | 2027-03 |
| D-002 | 2026-09 | Business model | BUSINESS_PLAYBOOK.md + survival.md (unsourced) | Services cashflow → products scale; setup fee + flat monthly INR, unlimited members | per-member pricing; pure subscription; pure services | RATIFIED (pricing values separate — D-007) | 2027-01 |
| D-003 | 2026-09 | Design language v1+v2 | records/2026-09-26_design-system-v2.md + motion_visual_upgrade.md | Dark canvas #08090C, crimson→amber, cyan accents, Space Grotesk/Plus Jakarta; v2 utilities estate-wide | per-site bespoke; GSAP dependency | IMPLEMENTED + VERIFIED; Recheck #2 open | 2026-10-10 |
| D-004 | 2026-09 | Client system architecture | records/2026-09-26_client-system-template.md | Canonical config-driven template on shared design system (site.config.js slots); honest fallbacks; no invented content | per-site bespoke rebuilds | IMPLEMENTED 1 of 8 (Oxigen) | 2026-10-03 |
| D-005 | 2026-09 | Message/automation copy | records/2026-09-26_message-design-pack.md | Brand WhatsApp libraries + dark email skeleton in assets/message-templates/ | per-workflow ad-hoc copy | IMPLEMENTED; Meta registration open | 2026-10-10 |
| D-006 | 2026-09 | Lead capture architecture | AGENT_BRAIN.md + gym-os-connect.js v2 (implementation) | Consent + WhatsApp fallback + localStorage offline queue on every client site | plain POST only | IMPLEMENTED + VERIFIED | 2026-11 |
| D-007 | 2026-09 | Gym OS pricing values | research-recommended only | **FOUNDER DECISION REQUIRED** — ₹999/₹1,999 NOT confirmed; do not print as final | — | AWAITING FOUNDER; record 005 in flight | 2026-10-10 |
| D-008 | 2026-09 | Lead destination | AGENT_BRAIN.md estate map | Repoint all leads to Gym osssss platform (6a85aadd01bc42f293723858) | keep Vesper routing | BLOCKED on credits | immediate |
| D-009 | 2026-09 | Research/operating system | AGENTS.md + 00_MASTER_INDEX.md + this system (founder directive 2026-09-26) | Research-first, no invention, double recheck, records in §103/43-field format | lightweight docs only | RATIFIED BY FOUNDER; implemented | continuous |
| D-010 | 2026-09 | SEO/GEO implementation | seo_geo.md (47 sources — strongest legacy evidence) | JSON-LD + canonical + llms.txt + sitemaps on 10 sites; GEO invited | standard SEO only | IMPLEMENTED + VERIFIED; freshness recheck due | 2026-12-26 |
| D-011 | 2026-09 | Spelling law | AGENT_BRAIN.md | "Beyond Pixells" always | — | RATIFIED | n/a |
| D-012 | 2026-09 | Deploy verification rule | AGENTS.md + AGENT_BRAIN.md | Push ≠ done: curl live URL + grep for change (iron-forge-website exception: gh-pages) | trust CI/deploy | RATIFIED; in use | continuous |

## Pending decisions (evidence GATHERED 2026-09-26 — records 001-008; decision review next)
- D-013 Platform security posture → EVIDENCE: records/001-security-privacy-legal-india.md — next: entity-by-entity RLS audit, then decision
- D-014 Pricing values → EVIDENCE: records/005-pricing-billing-upi-recurring.md — **FOUNDER DECISION REQUIRED** (₹999/₹1,999 + setup fee); flag: GST SAC code conflict (997331/998314 vs 998315) needs CA confirmation
- D-015 Multi-tenant data architecture → EVIDENCE: records/002-multi-tenant-architecture.md — next: map to Base44 RLS, then decision
- D-016 AI agent governance policy → EVIDENCE: records/003-ai-agents-governance-economics.md — next: codify per-agent permission catalog (§130)
- D-017 WhatsApp automation economics → EVIDENCE: records/008-distribution-whatsapp-growth.md — next: Meta Business API tier + template registration
- D-018 Discovered-domains program (founder extension 2026-09-26) → taxonomy extended to §112-§149; P0 domains (governance, legal/IP, finance ops, continuity, incidents, knowledge decay, research quality, secops) queue for next research batch
