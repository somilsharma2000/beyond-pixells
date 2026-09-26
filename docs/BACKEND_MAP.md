# Backend map — where everything actually lives
> Estate inventory: Base44 apps, GitHub repos, endpoints, and what talks to what.
> Maintained per the standing rule (update AGENT_BRAIN.md and this file together).

## GitHub (somilsharma2000 + org beyondpixells-com)

| Repo | What it is | Live URL |
|---|---|---|
| `beyond-pixells` | Brand hub, playbooks, all research docs, ops/ | https://somilsharma2000.github.io/beyond-pixells/ |
| `gym-os` | Gym OS product landing | https://somilsharma2000.github.io/gym-os/ |
| `dentist-os-site` | Dentist OS landing | https://somilsharma2000.github.io/dentist-os-site/ |
| `dentist-os` | Dentist OS demo environment | https://somilsharma2000.github.io/dentist-os/ |
| `builder-os-site` | Builder OS landing | https://somilsharma2000.github.io/builder-os-site/ |
| `bettabodies-system` | Client system — Bettabodies | https://somilsharma2000.github.io/bettabodies-system/ |
| `reds-gym-system` | Client system — Reds Gym | https://somilsharma2000.github.io/reds-gym-system/ |
| `flex-n-tone-system` | Client system — Flex N Tone | https://somilsharma2000.github.io/flex-n-tone-system/ |
| `fight-factory-manchester-system` | Client system — Fight Factory Manchester | https://somilsharma2000.github.io/fight-factory-manchester-system/ |
| `oxigen-fitness-digital` | Client system — Oxigen Fitness Jaipur | https://somilsharma2000.github.io/oxigen-fitness-digital/ |
| `ironforge-website` | Client system — IronForge Bengaluru | https://somilsharma2000.github.io/ironforge-website/ |
| `iron-forge-website` | Client system — Iron Forge Hyderabad (push to `gh-pages`) | https://somilsharma2000.github.io/iron-forge-website/ |
| `powerhouse-fitness` | Client system — PowerHouse Hyderabad | https://somilsharma2000.github.io/powerhouse-fitness/ |
| `beyond-pixells-status` | **Estate status page + uptime monitoring (Upptime on GitHub Actions, checks every 5 min)** | https://somilsharma2000.github.io/beyond-pixells-status/ |
| FORTREX family | Trading vertical — deploy branch parked during Safe Browsing cleanup; repos intact | (parked) |
| sponsored-macbook, sponsored-gt650, fortrex-* sites | Marketing experiments — Pages disabled during Safe Browsing cleanup; repos intact | (offline) |

## Base44 apps

| App | ID | Role |
|---|---|---|
| Gym osssss | `6a85aadd01bc42f293723858` | **Published Gym OS platform** — https://my-gym-os.base44.app — `captureGymLead` function is the lead-capture endpoint for all client sites (via `gym-os-connect.js`) |
| Vesper | `6a76f719f88f2473ba879696` | Legacy lead-capture endpoint (vesper-923580a1.base44.app) — superseded, kept for history |
| BEYOND PIXELLS | `6a700b150c8d8b8e923580a1` | Private app where website leads historically landed — migrate old leads into Gym osssss |
| Koda | `6a73016f9b626430a0d26f88` | FORTREX trading backend |
| Arlo | (arlo-65bf27b6) | FORTREX waitlist |
| autolead TRAIL | — | Agency prospect scraper |
| BloomWire | `6a60a3672c56780712cba8d5` | Flower store |
| Beyond agent app | `6ab65947f1ce1bb3167c9029` | This agent — Lead + LeadActivity entities, lead pipeline workflows |

## Lead flow (as of 26 Sep 2026)

```
Client site form → gym-os-connect.js v2 → Gym osssss captureGymLead
   ↓ (blocked: Base44 integration credits exhausted — HTTP 402)
Agent pipeline: Lead entity → "New lead analysis" workflow → "Daily pipeline review" (9:30am IST)
```

## Monitoring (as of 26 Sep 2026)

- **Upptime** (live): 14 properties, 5-min checks, GitHub issue on failure.
  Config: `beyond-pixells-status` repo `.upptimerc.yml`. Lead API intentionally
  excluded until credits reset (402 would paint it permanently red).
- **Agent daily review** (live): 8am IST estate health check + 9:30am IST pipeline.
- **VPS watcher stack** (prepared, not deployed — needs VPS purchase):
  `ops/vps/` — Uptime Kuma, changedetection.io, Healthchecks, Vaultwarden.
- **Estate Guard** (live): `.github/workflows/estate-guard.yml` — daily 07:30 IST,
  all 8 client sites checked for gym-os-connect.js + lead form + consent checkbox;
  GitHub issue on regression, auto-closed on recovery. On-demand: agent skill
  `estate-guard`.
- **Quality Audit** (live): `.github/workflows/quality-audit.yml` — weekly Lighthouse
  (perf≥80, a11y≥90, BP≥85, SEO≥85) + pa11y WCAG2AA on the flagships.
- **Content machine** (live): `tools/social/` satori+resvg renderer (statCard,
  hookCard, ogHub templates, Chrome Violet v4 tokens) — render-on-demand via
  `.github/workflows/content-render.yml` or the `render-social-post` skill;
  outputs to `content/social/`.

## Backups (as of 26 Sep 2026)

- **Private repo** `somilsharma2000/beyond-pixells-data` — weekly entity
  exports (Sundays 07:00 IST, "Estate data backup" workflow). v1 covers
  Gym osssss tenants/plans/branches + agent pipeline. Public runbook:
  `docs/ops/BACKUP_RECOVERY.md`.
- **Verified finding**: all 129 legacy lead records (Gym osssss 99 + BEYOND
  PIXELLS 30) are founder tests/demo seeds/gibberish — zero real customer
  leads existed; old-lead migration closed with nothing to migrate.

## Known blocked / pending

1. Base44 integration credits exhausted — lead capture returns 402.
2. Safe Browsing interstitial on somilsharma2000.github.io — review requests filed.
3. Custom domain purchase pending — would fix the github.io flagging.
4. Gym OS pricing (₹999/₹1,999) — founder confirmation pending.

## Command Center (site admin) — added 26 Sep 2026
- beyond-pixells/admin/ — client-side control panel (noindex). Tabs: overview (estate pings), content, theme (design-law guard), features, health, deploy.
- content/site.json — single source of truth for hub copy/toggles/tokens; hub applies at runtime (HTML holds matching defaults).
- Deploy path: GitHub Contents API PUT with browser-local fine-grained PAT (contents RW on somilsharma2000/beyond-pixells only), Pages auto-rebuilds. No servers, no secrets in repo.
