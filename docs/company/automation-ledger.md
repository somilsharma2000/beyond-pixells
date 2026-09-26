---
title: Automation Coverage Ledger
summary: Complete inventory and evidence-backed coverage ledger of all live, planned, and manual processes across the Beyond Pixells estate (blueprint §91, gap #20).
---

# Automation Coverage Ledger

> **Blueprint Reference:** Blueprint §91 (Automation Ledger) & Gap #20 (Estate Automation Audit).  
> **Source of Truth:** Real codebase evidence from GitHub Actions workflows, Base44 agent apps, agent skills, Upptime configuration, and infrastructure specifications as of 26 September 2026.

---

## 1. Live Automations

The following table documents **every live automation currently running** across the Beyond Pixells estate based on direct repository and application evidence.

| Name | What It Does | Trigger / Cadence | Where It Lives (Repo/App) | Status | What It Needs to Run |
|---|---|---|---|---|---|
| **Estate Guard Workflow** | Checks 8 client gym sites for HTTP 200 and 3 lead-pipeline markers (`gym-os-connect.js`, `data-gymos-lead` form, required consent checkbox). Tests `captureGymLead` API endpoint response. Opens/updates GitHub issue on regression; auto-closes issue when all sites pass. | Daily at 07:30 IST (02:00 UTC) schedule + manual `workflow_dispatch` | GitHub Actions (`somilsharma2000/beyond-pixells` `.github/workflows/estate-guard.yml`) | **LIVE** | GitHub Actions runner (`ubuntu-latest`), `curl`, `grep`, Node.js, `GITHUB_TOKEN` with `issues:write` and `contents:read`. |
| **Quality Audit Workflow** | Audits 5 flagship web properties using Lighthouse (Performance ≥80, Accessibility ≥90, Best Practices ≥85, SEO ≥85) and runs `pa11y` WCAG2AA accessibility scans on the Brand Hub. Opens/comments on GitHub issues on floor breach. | Weekly Mondays at 05:00 IST (Sun 23:30 UTC `30 23 * * 0`) + manual `workflow_dispatch` | GitHub Actions (`somilsharma2000/beyond-pixells` `.github/workflows/quality-audit.yml`) | **LIVE** | GitHub Actions runner (`ubuntu-latest`), Node.js, `npx lighthouse`, Chromium headless, `pa11y`, `GITHUB_TOKEN` with `issues:write` and `contents:read`. |
| **Content Render Workflow** | Programmatically renders brand-styled social media image cards (1080×1350 / 1200×630) using Satori + Resvg engine (`tools/social/render.mjs`). Commits generated PNG assets to `content/social/` and uploads pipeline artifacts. | On-demand via `workflow_dispatch` (inputs: `template`, `data` JSON, `filename`) | GitHub Actions (`somilsharma2000/beyond-pixells` `.github/workflows/content-render.yml`) | **LIVE** | GitHub Actions runner (`ubuntu-latest`), Node.js 20, Satori, `@resvg/resvg-js`, Chrome Violet font files (`Space Grotesk`, `Plus Jakarta Sans`), `GITHUB_TOKEN` with `contents:write`. |
| **Upptime Status Monitor** | Pings 14 estate web properties every 5 minutes for uptime and response time. Generates live public status dashboard (`somilsharma2000.github.io/beyond-pixells-status/`), commits response logs, and opens GitHub issues on outage. | Every 5 minutes via scheduled GitHub Actions workflow (`.upptimerc.yml`) | GitHub Actions & GitHub Pages (`somilsharma2000/beyond-pixells-status`) | **LIVE** | GitHub Actions runner, Upptime workflow action, `GITHUB_TOKEN` with workflow and GitHub Pages publish permissions. |
| **Daily Estate Health Agent Workflow** | Performs automated daily health check across all estate web properties, lead capture endpoints, and system logs; records diagnostic notes and alerts in agent memory. | Daily at 08:00 AM IST scheduled trigger | Base44 Agent App (`Beyond agent app` ID `6ab65947f1ce1bb3167c9029`) | **LIVE** | Base44 Agent execution environment, internet HTTP access, workspace state permissions. |
| **Daily Pipeline Review Agent Workflow** | Scans `Lead` and `LeadActivity` entities, summarizes newly ingested gym leads, identifies stale opportunities, and generates daily pipeline digests for the owner. | Daily at 09:30 AM IST scheduled trigger | Base44 Agent App (`Beyond agent app` ID `6ab65947f1ce1bb3167c9029`) | **LIVE** | Base44 Agent runtime, entity read/query permissions on `Lead` and `LeadActivity` schemas. |
| **New Lead Analysis Agent Workflow** | Triggers immediately on creation of a new `Lead` entity; computes lead quality/intent scores, logs initial `LeadActivity`, and notifies the agent execution pipeline. | Entity Trigger (`onCreate` on `Lead` entity) | Base44 Agent App (`Beyond agent app` ID `6ab65947f1ce1bb3167c9029`) | **LIVE** | Base44 Agent entity event trigger, permissions to write `LeadActivity` records. |
| **Weekly Social Content Pack Agent Workflow** | Automatically drafts weekly social post copy, selects design templates (`statCard`, `hookCard`), and prepares JSON render payloads for the content machine. | Weekly scheduled trigger | Base44 Agent App (`Beyond agent app` ID `6ab65947f1ce1bb3167c9029`) | **LIVE** | Base44 Agent execution runtime, `tools/social/templates.mjs` token definitions. |
| **`estate-guard` Agent Skill** | On-demand skill enabling the agent to execute immediate client site marker audits (`gym-os-connect.js`, lead form, consent checkbox) during interactive or autonomous runs. | On-demand skill call by agent | Agent Skill Library (`.agents/skills/estate-guard` / agent runtime context) | **LIVE** | Agent execution context with HTTP fetch capability. |
| **`render-social-post` Agent Skill** | On-demand skill allowing the agent to execute Node.js Satori/Resvg scripts locally to render brand image cards directly from raw JSON input. | On-demand skill call by agent | Agent Skill Library (`.agents/skills/render-social-post` / agent runtime context) | **LIVE** | Agent execution context, Node.js runtime, `tools/social` npm dependencies (`satori`, `@resvg/resvg-js`). |
| **`site-health-check` Agent Skill** | On-demand skill allowing the agent to execute network pings, HTTP header inspections, and SSL verification across all 14 estate URLs. | On-demand skill call by agent | Agent Skill Library (`.agents/skills/site-health-check` / agent runtime context) | **LIVE** | Agent execution context with network request access. |

---

## 2. Planned But Blocked (Infrastructure & External Dependencies)

The following automations are fully specified, configured, or scripted in the repository (`ops/vps/`), but remain **blocked on external dependencies** (founder VPS purchase or Base44 credit reset):

1. **Uptime Kuma (Internal Monitoring Stack)**
   - *Purpose:* Rich internal monitoring of all 14 properties + lead capture API with sub-minute interval checks and direct Telegram/WhatsApp alerts.
   - *Location:* `ops/vps/docker-compose.yml` (port 3001)
   - *Status:* **BLOCKED** — Prepared in `ops/vps/`; requires founder VPS purchase (~₹500/month).

2. **changedetection.io (Markup & Diff Watcher)**
   - *Purpose:* Full visual and DOM diff monitoring on client sites to catch silent markup changes, broken form structures, or script drops.
   - *Location:* `ops/vps/docker-compose.yml` (port 5000)
   - *Status:* **BLOCKED** — Prepared in `ops/vps/`; temporary $0 stand-in active via `estate-guard.yml`. Full stack requires VPS purchase.

3. **Healthchecks.io (Dead-Man Switch)**
   - *Purpose:* Listens for ping heartbeats from scheduled daily jobs (backups, agent daily health reviews, Upptime runs); fires alerts if a scheduled job *fails to run*.
   - *Location:* `ops/vps/docker-compose.yml` (port 8000)
   - *Status:* **BLOCKED** — Prepared in `ops/vps/`; requires VPS purchase.

4. **Vaultwarden (Encrypted Credential Vault)**
   - *Purpose:* Centralized Bitwarden-compatible vault for storing every estate password, API token, and service key with environment isolation.
   - *Location:* `ops/vps/docker-compose.yml` (port 8222)
   - *Status:* **BLOCKED** — Prepared in `ops/vps/`; requires VPS purchase.

5. **Production Lead Capture Ingestion (`captureGymLead`)**
   - *Purpose:* Automated ingestion of client site lead forms via `gym-os-connect.js` v2 into Gym osssss Base44 backend app (`6a85aadd01bc42f293723858`).
   - *Location:* Base44 backend app `Gym osssss`
   - *Status:* **BLOCKED** — All client site scripts are updated and pointing correctly, but API returns `HTTP 402 Payment Required` due to exhausted Base44 integration credits. Awaiting platform credit reset / subscription tier upgrade.

---

## 3. Manual Still (Unautomated Operations)

The following business and operational processes currently have **no live automation** and rely entirely on manual execution by the founder or sub-agents:

1. **Social Media Publishing & Distribution**
   - *Current State:* Image cards are rendered via `content-render.yml` or `render-social-post`, but publishing to LinkedIn, Instagram, or WhatsApp groups requires manual copy-pasting or file upload.
   - *Target Automation:* Self-hosted Postiz or Mixpost Lite container integrated with social APIs.

2. **Custom Domain & SSL Provisioning**
   - *Current State:* Sites serve from `somilsharma2000.github.io` subdomains; custom domain purchasing, CNAME routing, and DNS records are handled manually.
   - *Target Automation:* Automated CNAME & Cloudflare DNS provisioning scripts once domain is acquired.

3. **Client Subscription Billing & Payment Collection**
   - *Current State:* Gym OS client billing (₹999 / ₹1,999/month) and setup fee collection are tracked manually.
   - *Target Automation:* Razorpay / UPI AutoPay recurring subscription webhooks integrated into Gym osssss backend.

4. **Client Site Provisioning & Repository Setup**
   - *Current State:* Deploying a new gym client site requires manually cloning a template repository, updating client branding constants, and enabling GitHub Pages.
   - *Target Automation:* Repository template generation script or CLI tool.

5. **Safe Browsing Review & Search Console Management**
   - *Current State:* Submitting appeal requests and monitoring Google Search Console status for GitHub Pages interstitials requires manual founder action.
   - *Target Automation:* GSC API reporting script.

6. **Client Contract Execution & Onboarding Signatures**
   - *Current State:* Client terms and service agreements are sent and verified manually over WhatsApp.
   - *Target Automation:* Self-hosted DocuSeal or OpenSign container for digital signature generation via WhatsApp links.
