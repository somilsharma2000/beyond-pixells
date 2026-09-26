# 🧰 THE FREE STACK — Beyond Pixells Open-Source Tool Playbook

> The complete catalog of **free, open-source tools** that can power every stage of
> the studio: building, launching, monitoring, automating, content, growth, client
> management, and the agent workforce. Researched 26 September 2026 across 8
> parallel deep-research missions (full reports: `docs/research/tools_*.md`).
>
> **Selection rules used:** actively maintained · truly free (or honest freemium
> noted) · runnable by a solo founder on ONE cheap VPS or $0 on GitHub Actions ·
> ranked by what helps THIS estate most.

---

## THE SHORTLIST (best of the best, 12 tools)

| Tool | What it gives us | Cost |
|---|---|---|
| **Uptime Kuma** | All 10+ sites + lead API watched 24/7, WhatsApp alerts when anything breaks | Free, ~100MB RAM |
| **n8n** | The automation brain — visual workflows: lead routing, notifications, syncs | Free self-hosted (Fair-code) |
| **changedetection.io** | Detects if a client site's form or script breaks/changes — silent failure killer | Free, ~150MB — **$0 stand-in LIVE**: `estate-guard.yml` daily marker checks |
| ↳ *Actions stand-in (LIVE)* | `estate-guard.yml` daily: connect script + form + consent markers on all 8 client sites, GitHub issue on regression | $0 until VPS |
| **Upptime** | ✅ **DEPLOYED 26 Sep 2026** — live at https://somilsharma2000.github.io/beyond-pixells-status/ (repo `beyond-pixells-status`) | Free, zero server |
| **Healthchecks.io** | Dead-man switch: alerts if a daily job (backup, monitor) stops running | Free, ~100MB |
| **Umami / Plausible** | Privacy-friendly analytics on every landing page, one dashboard | Free self-hosted |
| **Listmonk** | Email nurture sequences for leads — our own free Mailchimp | Free, ~50MB |
| **Cal.com** | Gym owners book demos straight into the calendar | Free self-hosted |
| **DocuSeal** | Contracts signed digitally — client onboarding automated | Free, ~200MB |
| **Remotion** | Turns our HTML reel templates into MP4s programmatically — no manual recording | Free — **Phase 4 start LIVE**: `tools/social/` satori renderer + `content-render.yml` |
| ↳ *Phase 4 start (LIVE)* | `tools/social/` satori+resvg renderer + 3 templates + `content-render.yml` — brand image posts render-on-demand, $0 | $0 |
| **Postiz** | Self-hosted social scheduler (Instagram etc.) — posts on autopilot | Free, ~300MB |
| **Vaultwarden** | Every password/API key for the whole estate in one vault | Free, ~20MB |

---

## CATEGORY 1 — BUILDING (websites, landings, effects)

| Tool | Repo | Why for us |
|---|---|---|
| **shadcn/ui** | shadcn-ui/ui | Premium component patterns that match our dark design system |
| **Magic UI** | magicuidesign/magic-ui | Landing-page effects ( beams, shimmer, bento ) that look "futuristic out of the box" |
| **Background Snippets** | ibelick/backgrounds | Copy-paste animated hero backgrounds (grids, dots, waves) |
| **Lenis** | darkroomengineering/lenis | Buttery smooth scroll = instantly premium feel |
| **Atropos** | atropos/atropos | 3D tilt for product mockups |
| **tsParticles** | matzs/tonparticles | Interactive particle hero effects |
| **Lucide Icons** | lucide-icons/lucide | The icon set (consistent with our SVG style) |
| **Shot-scraper** | shot-scraper | Screenshot automation for QA + social assets |
| **Satori** | vercel/satori | Programmatic OG-images + image posts from our design tokens |

## CATEGORY 2 — AUTOMATION, WEBHOOKS & MONITORING (the self-running part)

| Tool | Repo | Why for us |
|---|---|---|
| **Uptime Kuma** | louislam/uptime-kuma | #1 priority: pings all sites, alerts on WhatsApp/Telegram. "No more silent failures" |
| **n8n** | n8n-io/n8n | Workflow engine — when credits/limits bite, this is our free automation backbone |
| **changedetection.io** | dgtlmoon/changedetection.io | Watches client sites for broken forms/changed scripts — protects the lead pipe |
| **Gatus** | TwiN/gatus | Git-driven YAML health checks — configs live in the repo (agent-friendly) |
| **Healthchecks.io** | healthchecks/healthchecks | Dead-man switch — alerts when a scheduled job DIDN'T run |
| **Convoy** | frain-dev/convoy | Webhook gateway — queues/retries incoming lead webhooks, never lose one |
| **Upptime** | upptime/upptime | Free status page on GitHub Actions — client trust, zero server |
| **Ofelia / Dagu** | mcuadros/ofelia · dagu-dev/dagu | Restart-surviving scheduled jobs |

## CATEGORY 3 — CONTENT & SOCIALS (the content machine)

| Tool | Repo | Why for us |
|---|---|---|
| **Remotion** | remotion-dev/remotion | Our stat-drop/hook-card templates rendered to MP4 automatically — the weekly reel machine |
| **Satori + shot-scraper** | vercel/satori | HTML templates → image posts (1080×1920) at scale |
| **Postiz** | gitroomhq/postiz-app | Self-hosted Buffer: schedules posts to Instagram/LinkedIn from our own server |
| **Mixpost Lite** | mixpost/mixpost | Self-hosted social publishing (lighter alternative) |
| **WhisperX** | m-bain/whisperX | Auto-captions for reels (Hindi/English) |
| **Auto-Editor** | wyattblue/auto-editor | Auto-cuts silences from demo recordings |
| **Penpot** | penpot/penpot | Open-source design tool for social layouts |
| **Open WebUI** | open-webui/open-webui | Self-hosted AI chat UI — caption/hashtag drafting with any model |

## CATEGORY 4 — ANALYTICS, SEO & AUDITING (the eyes)

| Tool | Repo | Why for us |
|---|---|---|
| **Umami** | umami-software/umami | ~50MB privacy analytics — one dashboard for all landings |
| **Plausible CE** | plausible/analytics | Alternative; both work, pick one |
| **SerpBear** | towfiqi/serpbear | Free rank tracking via Google Search Console API (India keywords) |
| **pa11y-ci / axe-core** | pa11y/pa11y-ci | **LIVE 26 Sep** in `quality-audit.yml` (weekly, + Lighthouse floors) |
| **OWASP ZAP (baseline)** | zaproxy/zaproxy | Security-header scans on schedule |
| **Lighthouse CI** | GoogleChrome/lighthouse-ci | **LIVE 26 Sep** in `quality-audit.yml` (weekly floors: perf 80, a11y 90, BP 85, SEO 85) |
| **PostHog** | PostHog/posthog | Product funnels once Gym OS scales (free tier generous) |

## CATEGORY 5 — CLIENTS, LEADS, INVOICING & SUPPORT (the money side)

| Tool | Repo | Why for us |
|---|---|---|
| **EspoCRM** | espocrm/espocrm | Lightest real CRM for gym-owner clients + leads (or Twenty for modern UI) |
| **Cal.com** | calcom/cal.com | Demo booking page — "Book a free demo" self-serves |
| **Crater** | crater-invoice/crater | Lightweight GST-ready invoicing |
| **Invoice Ninja** | invoiceninja/invoiceninja | Recurring subscriptions — retainer billing for client sites |
| **DocuSeal** | docusealco/docuseal | Contracts signed from WhatsApp — onboarding automated |
| **OpenSign** | ozylog/OpenSign | India-native e-sign alternative |
| **Chatwoot** | chatwoot/chatwoot | Shared WhatsApp/email inbox for client support (official API integration) |
| **FreeScout** | freescout/freescout | Ultra-light help desk if Chatwoot is heavy |
| **Plane** | makeplane/plane | Client onboarding/delivery tracking portal |

## CATEGORY 6 — WHATSAPP & INDIA STACK (our native channel)

⚠️ **Honest ToS warning first:** unofficial libraries (Baileys, Evolution API, WAHA) risk number bans. **Production rule: use the official WhatsApp Cloud API only.** Unofficial tools are for internal testing, never client-facing.

| Tool | Repo | Why for us |
|---|---|---|
| **Meta WhatsApp Node SDK** | thesupersonicdrive/whatsapp | Clean wrapper over the OFFICIAL Cloud API (production-safe) |
| **WhatsApp Cloud Inbox** | theousadias/whatsapp-cloud-inbox | Self-hosted inbox on the official API |
| **Typebot** | baptisteArno/typebot | Visual WhatsApp/SMS chatbot flows (trials, demo booking) |
| **upiqr** | aparzi/upiqr | Dynamic UPI QR deep-links — collect fees without any gateway fee |
| **Hyperswitch** | juspay/hyperswitch | Open-source payment router if we add cards later |
| **Razorpay SDK** | razorpay/razorpay-node | UPI/subscription collection (needs Razorpay account, free to integrate) |
| **Frappe India Compliance** | frappe/gst-india | GST/e-invoice patterns to reference for our invoicing |

## CATEGORY 7 — KNOWLEDGE, OPS & AGENT WORKFORCE (the company OS)

| Tool | Repo | Why for us |
|---|---|---|
| **SilverBullet** | silverbulletmd/silverbullet | Markdown-native wiki — AGENT_BRAIN.md becomes a searchable internal site |
| **Wiki.js / Outline** | requarks/wiki · getoutline/outline | Fuller wiki if we outgrow markdown |
| **Homepage / Glance** | gethomepage/homepage · glanceapp/glance | One dashboard page: all sites, all services, all health |
| **Paperclip** | paperclipai/paperclip | The agent-company dashboard — future HQ for the AI workforce (needs LLM API budget) |
| **Aider / Goose** | Aider-AI/aider · block/goose | Free AI coding agents for cheap code work |
| **Vaultwarden** | dani-garcia/vaultwarden | All estate credentials in one encrypted vault |
| **restic / kopia** | restic/restic · kopia/kopia | Encrypted backups of everything |
| **docsify / MkDocs** | docsifyjs/docsify · mkdocs/mkdocs | Repo docs → browsable internal site with zero build |

## CATEGORY 8 — GROWTH, CONVERSION & LAUNCH (the hooks)

| Tool | Repo | Why for us |
|---|---|---|
| **Listmonk** | knadh/listmonk | Self-hosted email marketing — nurture every lead automatically |
| **Flipt** | flipt-io/flipt | Feature flags — turn things on/off without deploys |
| **Dub.co** | dubinc/dub | Branded short links (go.gym-os.in) with click analytics |
| **Formbricks** | formbricks/formbricks | Surveys + forms with attribution — upgrade our lead forms |
| **Vendure** | vendure-ecommerce/vendure | The Bloomwire flower store backend (headless, modern) |
| **Testimate** | testify-dark/testimate | Collect REAL client testimonials (never invent) and display them |
| **QR Code Styling** | qr-code-styling/qr-code-styling | Branded QR passes for gym check-in |
| **Wai8list** | wai8list/wai8list | Self-hosted waitlist with referrals for launches |
| **GrowthBook** | growthbook/growthbook | A/B testing once traffic justifies it |

---

## THE DEPLOYMENT BLUEPRINT (one ₹500/month VPS runs the studio)

**Phase 1 — Watch the estate (do first, ~2 hours):**
Uptime Kuma (100MB) + Healthchecks (100MB) + changedetection.io (150MB) + Vaultwarden (20MB)
→ founder gets a WhatsApp alert the moment ANY site or the lead API breaks.

**Phase 2 — Money side (~2 hours more):**
Cal.com (300MB) + Crater or Invoice Ninja (200MB) + DocuSeal (200MB)
→ demos book themselves, invoices generate, contracts sign — onboarding is a pipeline.

**Phase 3 — Growth machine:**
Umami (50MB) + Listmonk (50MB) + Postiz (300MB)
→ every landing is measured, every lead is nurtured, posts go out on schedule.

**Phase 4 — The content machine (render-on-demand, no always-on server):**
Remotion / Satori renders reel templates to MP4 + image posts via GitHub Actions ($0).

**Phase 5 — Later, with revenue:**
Paperclip as the agent-workforce HQ + Vendure for Bloomwire + GrowthBook for A/B.

**Total Phase 1-3 footprint: ~1.3GB RAM — fits the cheapest VPS.**

---

*Full research reports live in `docs/research/tools_*.md` (8 files, every tool
evaluated with links, stars, licenses, and honest cautions).*
