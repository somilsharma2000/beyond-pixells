# PLATFORM SECURITY INVENTORY — first slice of gap CRITICAL #1
Date: 2026-09-26. Auditor: lead agent (beyond). Method: entity-schema enumeration of all Base44 apps via list_user_apps (live, read-only). This is an INVENTORY, not a completed security review — RLS/policy verification is NOT possible via current agent tools and is flagged below.

## Scope audited
| App | Status | Entities | Holds personal data |
|---|---|---|---|
| Gym osssss (6a85aadd01bc42f293723858) | PUBLISHED (my-gym-os.base44.app) | 45 | YES — member PII incl. health data |
| BEYOND PIXELLS (6a700b150c8d8b8e923580a1) | unpublished | 10+ | YES — members, leads, payments, credential fields |
| autolead TRAIL (6a6d983cbe9162a4ba7f9823) | unpublished | 4 | YES — scraped business contact data |
| Fortrex (6ab6fee1832fd6478abb6ff0) | unpublished | 3 | YES — waitlist names/emails/phones |
| Vesper (6a76f719f88f2473ba879696) | unpublished | unknown (lead-capture endpoint) | YES — captured leads |

## CRITICAL findings (from schema inspection alone)
1. **SECRETS STORED IN DATABASE ENTITIES (Gym osssss)** — `IntegrationConfig` stores `api_key`, `webhook_token`; `GymTenant` stores `api_key`. If any read path exposes these (RLS misconfig, service-role leak, public API), tenant credentials leak wholesale. ACTION: verify RLS on these two entities FIRST; then move secrets to platform secret storage. Severity: CRITICAL until disproven.
2. **HEALTH DATA IN MEMBER ENTITY (Gym osssss)** — `bca_weight`, `bca_body_fat_pct`, `bca_muscle_mass`, `gender`, `profile_photo`, plus `Transformation` before/after photos. Under DPDP this is sensitive personal data requiring explicit consent, notice, and protection. Consent fields exist on `Lead` (consent_status/version/ip — good) but NOT on `Member` health fields. ACTION: consent + retention policy for BCA data.
3. **CREDENTIAL FIELDS IN CUSTOM ENTITY (BEYOND PIXELLS app)** — `GymAccount` stores `password_hash` in a custom entity instead of the platform's built-in User/auth entity. Password hashing scheme unknown. ACTION: migrate to platform auth or delete entity; never store passwords in custom entities.
4. **PII REPLICATION ACROSS APPS** — Member/Lead/CheckIn entities exist in BOTH Gym osssss and BEYOND PIXELLS apps; leads additionally land in Vesper. Multi-copy PII = multi-copy breach surface + DPDP deletion complexity. ACTION: consolidation per D-008 (single lead destination), then delete stale copies.
5. **TRADEMARK EXPOSURE** — Gym osssss description references "Gold's Gym Vaishali Nagar" (a real brand). Demo or not, publishing a real brand's name in our platform description invites a trademark complaint. ACTION: founder to confirm relationship; rename if needed.

## HIGH findings
6. `PayrollRecord`/`Trainer` hold salary/commission data — internal-sensitive; RLS must restrict to owner/admin roles.
7. `AiLog`/`AiLead` store full conversation content — retention policy needed (knowledge decay §142/§120).
8. `Membership`/`Payment` store amounts + invoice numbers + method — payment data minimization looks OK (no card/UPI credentials seen in schema) but must stay that way; verify no raw payment tokens get added.
9. `Transformation` photos of real members — consent + deletion path required before using in marketing (no-invention rule: never use member photos without written consent).

## NOT VERIFIABLE FROM HERE (honest limitations)
- Row-level security (RLS) enabled/disabled per entity — needs Base44 builder inspection or authenticated probe as different user. THIS IS THE REMAINING CORE OF GAP #1.
- Whether the published app exposes any unauthenticated read on the flagged entities.
- Backend functions reading entities with service-role scope (widest possible read) — requires code review in the builder (AGENT_BRAIN: BACKEND_MAP.md lists them).

## Immediate action queue (ordered)
1. Verify RLS / public exposure on `IntegrationConfig`, `GymTenant`, `Member`, `Pass`, `Lead` in Gym osssss (CRITICAL #1 core).
2. Move `api_key`/`webhook_token` out of entities into platform secret storage.
3. Founder: Gold's Gym reference decision + credentials reset where tokens were stored in DB.
4. Consent + retention policy for BCA/health data (links: record 001 DPDP duties).
5. Consolidate lead/member data to Gym osssss; delete stale copies in Vesper/BEYOND PIXELLS after credits restore export.
6. Schedule this inventory as a recurring quarterly audit (monitoring workflow, §146).

Status: PARTIAL — inventory complete; exposure verification NOT started. Next review: 2026-10-03.
