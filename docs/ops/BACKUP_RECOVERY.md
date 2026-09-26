# Backup & recovery — estate data (§96, gap #3)

> Status: **LIVE** since 26 Sep 2026. Weekly automated export, first backup done.
> This file is the public runbook (no PII). Backups themselves live in the
> **private** repo `somilsharma2000/beyond-pixells-data`.

## What is backed up, and how

| Layer | Mechanism | Cadence |
|---|---|---|
| All website repos (16) | GitHub itself (git history is the backup) | continuous |
| Status page history | `beyond-pixells-status` repo (Upptime commits) | every 5 min |
| Base44 entity data (leads, tenants, plans, branches, pipeline) | "Estate data backup" Base44 workflow → agent exports via `read_entities` → JSON committed to private repo | Sundays 07:00 IST |
| Lead pipeline (agent app) | same workflow — Lead + LeadActivity | weekly |

**Coverage (honest):** v1 (26 Sep) covers Gym osssss' GymTenant (4),
MembershipPlan (10), Branch (11), plus the agent pipeline (Lead/LeadActivity,
currently 0 records). The weekly run expands coverage one entity per week
toward the full 45+ entity platform set (Member, Trainer, Membership,
AttendanceRecord, Feedback, Pass, TrialPass next). Not covered yet: the other
Base44 apps' data (Vesper, Koda, BloomWire) — queued.

**Verified finding, 26 Sep 2026:** all 129 lead records across Gym osssss (99)
and BEYOND PIXELLS (30) are founder tests, seeded demo data, or gibberish
probes. Zero genuine customer leads exist yet — so there is nothing real to
migrate from the old lead-capture misrouting (open item closed).

## Rules

1. Backups go ONLY to the private repo. Never to this public repo.
2. The private repo contains PII and tenant API keys — never make it public,
   never embed its contents in sites or docs.
3. The workflow alerts the owner only on failure or a >20% record-count drop
   (possible data loss signal).

## Recovery (what to actually do)

Scenario A — a Base44 app's entity data is lost/corrupted:
1. Clone `somilsharma2000/beyond-pixells-data`, open `backups/<app>/<Entity>.json`.
2. Recreate records: the agent can bulk-restore via `create_entity_records`
   with the target `app_id` (drop the `id` fields; new ids will be issued and
   referenced records re-linked).
3. Verify counts + spot-check the published app.

Scenario B — a website is broken:
1. The site's git history is the source of truth; `git revert` or restore the
   broken file. GitHub Pages redeploys on push; verify the live URL (curl).
2. Estate Guard / Upptime confirm recovery within 5–30 min.

Scenario C — a whole repo is lost:
1. Open a GitHub support request; meanwhile the last local checkout in the
   agent workspace or the founder's machine is the recovery source.
   Custom-domain DNS repoint to a restored repo after Pages is re-enabled.

## Known gaps (tracked)

- Tenant `api_key` values live in DB entities (security gap #26): the backup
  preserves them for restore, but they should move to platform secret storage
  and be rotated. Founder action needed for rotation.
- Base44's own platform-level backup/restore capability is unverified from the
  agent side (gap #1/#30 builder inspection pending).
