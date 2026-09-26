# RESEARCH GAPS — computed 2026-09-26
Status legend: research status from MASTER_RESEARCH_COVERAGE_MATRIX.md. Every gap lists: what's missing / why it matters / risk / next action / owner / review date.

## CRITICAL (must resolve before platform scale-up / paid customer onboarding)
1. **Platform security review (§42, §97)** — the Gym OS platform (my-gym-os.base44.app, 45+ entities, member PII) has had zero security review. Missing: RLS verification, permission audit, rate limits, audit logs. Risk: member data exposure, legal exposure under DPDP. Action: security review of every entity's RLS + admin surface. Owner: lead agent. Review: 2026-10-03.
2. **DPDP compliance state (§43, §59, §60)** — no verified mapping of DPDP duties (consent, notice, breach reporting, retention/deletion) to product flows. Record 001 (in flight) provides the research base; then implementation. Action: consent flows audit + data retention policy. Owner: lead agent + founder (for counsel review). Review: 2026-10-10.
3. ~~**Backups / disaster recovery (§96)**~~ — ADDRESSED 26 Sep: private repo somilsharma2000/beyond-pixells-data + weekly 'Estate data backup' workflow (Sundays 07:00 IST) + public runbook docs/ops/BACKUP_RECOVERY.md. Coverage expands weekly (v1: tenants/plans/branches/pipeline; platform-wide pending). Remaining: verify Base44 platform-level backup/restore (builder session).
4. **Base44 integration credits exhausted (ops)** — lead-capture API failing; leads do not reach platform. Revenue-blocking. Action: founder plan reset/upgrade (FOUNDER ACTION, already communicated). Review: immediate.
5. ~~**Leads land in wrong app**~~ — CLOSED 26 Sep: repoint done earlier; audit of all 129 legacy lead records across BEYOND PIXELLS (30) + Gym osssss (99) shows 100% founder tests/demo seeds/gibberish probes — zero genuine customer leads existed to migrate. Pipeline starts clean.
6. **Pricing unconfirmed (§34)** — FOUNDER DECISION REQUIRED; record 005 (in flight) supplies evidence. Review: 2026-10-10.
7. **Multi-tenancy/RLS architecture review (§14–§16, §61)** — record 002 in flight; review implementation against it. Review: 2026-10-10.


## NEW CRITICAL GAPS (from PLATFORM_SECURITY_INVENTORY.md, 2026-09-26)
26. **Secrets stored in database entities** — IntegrationConfig (api_key, webhook_token) and GymTenant (api_key) in the PUBLISHED Gym osssss platform. If exposed by any read path, tenant credentials leak wholesale. Action: verify RLS on these two entities first, then migrate secrets to platform secret storage. Owner: lead agent + founder (token rotation). Review: 2026-10-03.
27. **password_hash in custom entity** (BEYOND PIXELLS app, GymAccount) — credentials in a custom table, hashing scheme unknown. Action: migrate to platform auth or delete entity. Review: 2026-10-03.
28. **Health data without consent fields** — Member BCA fields (weight/body-fat/muscle) + gender + profile_photo in published platform; DPDP-sensitive. Action: consent + retention policy (record 001 supplies duties). Review: 2026-10-10.
29. **Gold's Gym trademark reference** — platform app description names a real brand ("Gold's Gym Vaishali Nagar"). FOUNDER DECISION REQUIRED: confirm relationship or rename. Review: immediate.
30. **RLS verification not possible via agent tools** — needs builder inspection or authenticated probe. FOUNDER ACTION or builder session; core remaining piece of gap #1. Review: 2026-10-03.

## HIGH (before product launch scale)
8. **No product analytics (§32)** — cannot measure activation/retention/conversion; "conversion-optimized" claims unevidenceable. Action: define metrics + instrument lead→demo→customer funnel. Review: 2026-10-17.
9. **No test suite / browser-level QA (§47)** — manual curl verification only. Action: browser-render tests for flagship + client template; form flow tests. Review: 2026-10-17.
10. ~~**No uptime/health monitoring live (§44, §46)**~~ — CLOSED 26 Sep: Upptime (14 sites/5-min, public status page) + Estate Guard (daily lead-pipeline markers, 8 client sites) + Quality Audit (weekly Lighthouse floors + pa11y) + Smoke Tests (daily browser-render, 5 pages) + agent daily 8am estate report.
11. **WhatsApp Business API tier/template registration (§63)** — message pack ready but Meta registration not done; automation economics unverified for India pricing. Record 008 in flight. Review: 2026-10-10.
12. **Customer discovery absent (§5, §11)** — zero recorded gym-owner interviews; ICP is assumption-based. Action: founder-led interviews with Oxigen + 2 client gyms; document in notes. Review: 2026-10-24.
13. **Competitive pricing intelligence (§34, §80)** — competitor record 006 in flight; verify against it before printing any price. Review: 2026-10-24.

## MEDIUM (during development)
14. WCAG/accessibility audit (§86) — pa11y WCAG2AA now runs weekly on all 4 flagship landings (quality-audit.yml); full keyboard/screen-reader manual audit still pending.
15. Onboarding playbook for new gyms (§37) — SOP drafted 26 Sep (docs/company/onboarding-playbook.md) from the real rollout tooling; review against next live rollout.
16. Support & customer-success process (§35, §36) — ad-hoc WhatsApp only.
17. Retention/expansion strategy (§82, §83) — mechanisms exist in product; strategy unresearched.
18. Finance systematization (§33) — MRR/tracking not instrumented.
19. Human-in-the-loop rules for agents (§93) — record 003 in flight; then codify kill switches/approvals.
20. ~~Idea DB + automation coverage ledger (§78, §91)~~ — CREATED 26 Sep: docs/company/idea-db.md + docs/company/automation-ledger.md.

## LOW
21. Partnerships (§55), referral program (§84), ads research (§54), experimentation (§50).
22. Content automation evidence (§26) — system exists; effectiveness unmeasured.

## UNKNOWN (needs evidence first)
23. Actual conversion rates on all landing pages (no analytics — see #8).
24. Member portal usage patterns (no analytics).
25. Whether Google reviews data exists for client gyms (per-site owner content — D-class).
