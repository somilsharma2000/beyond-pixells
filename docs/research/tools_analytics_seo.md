# Open-Source Analytics, SEO, Performance & Auditing Tools
## Research & Evaluation Report for Beyond Pixells Product Studio

---

## 1. Executive Summary & Studio Context

**Beyond Pixells** operates a portfolio of **10+ marketing sites** hosted on **GitHub Pages**. The studio has already implemented modern technical SEO and Generative Engine Optimization (GEO) standards, including JSON-LD structured data, XML sitemaps, and `llms.txt` files for AI search engine crawlers.

### Core Technical Requirements & Constraints
1. **Static Site Friendly**: Tools must operate without requiring server-side rendering (SSR) or backend code changes on GitHub Pages.
2. **Zero Runtime Overhead**: Analytics and tracking scripts must be tiny (< 2-3 KB), cookie-free, and non-blocking to preserve 95+ Core Web Vitals / Lighthouse scores.
3. **Automated Continuous Auditing**: Auditing, SEO linting, link checking, accessibility, and security scanning should run headless inside **GitHub Actions** workflows on schedule (e.g., weekly/daily).
4. **Low Infra Footprint & Cost**: Prefer tools that run on free-tier infrastructure (e.g., GitHub Actions, Vercel, Supabase, Render, Railway) or lightweight single-binary VPS setups.

---

## 2. Privacy-Friendly Web Analytics: Self-Hosted Comparison

Beyond Pixells needs privacy-focused, lightweight web analytics across all 10+ client marketing sites. Below is an architectural comparison of the top self-hosted open-source platforms.

### Analytics Platform Comparison Matrix

| Platform | GitHub Repo | Script Size | Backend Tech Stack | Min Infra Needed | Multi-site Studio Management | Lightest Verdict |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Umami** | `umami-software/umami` | **~2.0 KB** | Node.js + PostgreSQL / MySQL | Very Low (Vercel + Supabase Free Tier) | **Excellent** (1 script tag with `data-website-id`, unified multi-site dashboard) | ⭐ **#1 Choice for Static Sites** |
| **GoatCounter** | `zgoat/goatcounter` | **~1.0 KB** | Single Go Binary + SQLite / Postgres | Ultra Low (512MB VPS or Docker) | **Good** (Supports subdomains & separate site accounts) | ⭐ **Lightest Single Binary** |
| **Plausible** | `plausible/analytics` | **< 1.0 KB** | Elixir + ClickHouse + PostgreSQL | Medium (1-2 GB RAM minimum for ClickHouse) | **Excellent** | Excellent, but heavier self-host infra |
| **Matomo** | `matomo-org/matomo` | **20 - 40 KB** | PHP + MySQL (Heavy Monolith) | Medium-High (LAMP/LEMP server) | **Good** | Heavy legacy stack, overkill for static sites |
| **Shynet** | `milesmcc/shynet` | **~1.5 KB** | Python / Django + PostgreSQL | Low-Medium | **Fair** | Dormant maintenance (Slow updates) |

---

### Detailed Analytics Tool Recommendations

### 1. Umami Analytics (Top Pick)
* **Repo URL**: [https://github.com/umami-software/umami](https://github.com/umami-software/umami)
* **What it does**: A fast, privacy-focused, cookie-free web analytics platform. Tracks pageviews, unique visitors, referrers, devices, countries, custom events, and conversion funnels without collecting personal identifiable information (PII).
* **Why it helps THIS studio**: Beyond Pixells can host **one single Umami instance** (e.g., free on Vercel + Supabase) and embed a tiny 2KB script across all 10+ GitHub Pages sites. Studio admins get a single unified dashboard to monitor traffic across all client domains simultaneously, with shareable view-only links for clients.
* **Stars & Maintenance**: **~39,017 stars**. Extremely active daily maintenance with frequent release updates.
* **Free vs Freemium / License**: 100% Free Open-Source (**MIT License**). Self-hosted has no limit on websites or pageviews. (Umami Cloud has a paid tier, but self-hosting is completely unrestricted).
* **Infra Needed**: Node.js + PostgreSQL or MySQL. Can be deployed for **$0/month** using Vercel/Render for the Node app and Supabase/Neon for the Postgres database, or run via Docker Compose on a $5/mo VPS.

---

### 2. GoatCounter (Ultra-Lightweight Alternative)
* **Repo URL**: [https://github.com/zgoat/goatcounter](https://github.com/zgoat/goatcounter)
* **What it does**: Minimalist web analytics that provides essential statistics without tracking individual users or using cookies.
* **Why it helps THIS studio**: Features the absolute smallest JavaScript footprint (~1 KB `count.js`), or can even run with **zero JavaScript** using a 1x1 GIF tracking pixel fallback on static markdown pages or `llms.txt` documentation pages.
* **Stars & Maintenance**: **~6,005 stars**. Actively maintained by creator Martin Tournoij.
* **Free vs Freemium / License**: Open-Source (**EUPL v1.2**). Free to self-host without limitations.
* **Infra Needed**: Single self-contained Go binary with SQLite database. Requires minimal resources (**< 15 MB RAM**), making it runnable on the cheapest possible VPS or single container.

---

## 3. SEO Auditing CLI & Linters (Screaming Frog Alternatives)

### 3. Unlighthouse
* **Repo URL**: [https://github.com/harlan-zw/unlighthouse](https://github.com/harlan-zw/unlighthouse)
* **What it does**: Scans an entire website using Google Lighthouse under the hood (powered by Puppeteer Cluster). It crawls internal links or parses `sitemap.xml`, running performance, accessibility, SEO, and best-practices audits across every single URL.
* **Why it helps THIS studio**: Instead of manually running Lighthouse on individual pages, Beyond Pixells can trigger `npx unlighthouse --site https://client1.com` in CI. It generates a consolidated multi-page audit report highlighting missing meta titles, broken structured data (JSON-LD), or performance drops across all pages of a client site before launch.
* **Stars & Maintenance**: **~4,865 stars**. Actively maintained within the UnJS / Nuxt ecosystem.
* **Free vs Freemium / License**: 100% Free Open-Source (**MIT License**).
* **Infra Needed**: CLI tool running locally or inside GitHub Actions container (Node.js runtime). Zero server infrastructure required.

---

### 4. Lychee
* **Repo URL**: [https://github.com/lycheeverse/lychee](https://github.com/lycheeverse/lychee)
* **What it does**: An ultra-fast, async, concurrent link checker written in Rust. It crawls HTML files, Markdown, XML sitemaps, and remote URLs to find broken links (404s), dead anchor links, invalid email addresses, and timeout errors.
* **Why it helps THIS studio**: Runs as a scheduled weekly **GitHub Action** across all 10 GitHub Pages repositories. It automatically crawls internal navigation, external links, JSON-LD schema URLs, and references inside `llms.txt` files, opening an automated GitHub Issue if any broken link is detected on client sites.
* **Stars & Maintenance**: **~3,947 stars**. Very actively maintained Rust CLI with official GitHub Action integrations.
* **Free vs Freemium / License**: 100% Free Open-Source (**Apache-2.0 / MIT Dual License**).
* **Infra Needed**: Standalone Rust binary / GitHub Action (`lycheeverse/lychee-action`). Runs entirely inside CI runner, zero persistent infrastructure.

---

## 4. Lighthouse & Performance CI

### 5. Lighthouse CI (LHCI)
* **Repo URL**: [https://github.com/GoogleChrome/lighthouse-ci](https://github.com/GoogleChrome/lighthouse-ci)
* **What it does**: Official Google suite of CLI tools and GitHub Actions for running Google Lighthouse continuously in CI/CD pipelines. It asserts performance score budgets, tracks metrics over time, and prevents regressions.
* **Why it helps THIS studio**: Enforces performance quality gates on every Pull Request across the 10 marketing sites. If a designer uploads an unoptimized 5MB image or breaks Core Web Vitals (LCP/CLS/FID), LHCI fails the GitHub Action check before the site builds to GitHub Pages.
* **Stars & Maintenance**: **~7,098 stars**. Maintained directly by the Google Chrome team.
* **Free vs Freemium / License**: 100% Free Open-Source (**Apache-2.0 License**).
* **Infra Needed**: Runs as Node.js CLI in GitHub Actions. Optional LHCI server for historical trend graphs can be hosted on Docker/Heroku/Render, or outputs static HTML artifacts directly to GitHub Pages / PR comments.

---

### 6. sitespeed.io
* **Repo URL**: [https://github.com/sitespeedio/sitespeed.io](https://github.com/sitespeedio/sitespeed.io)
* **What it does**: A complete open-source web performance monitoring suite that measures page speed, Core Web Vitals, page weight, requests, and visual metrics (Speed Index, Perceptual Speed Index) using real browsers (Chrome, Firefox).
* **Why it helps THIS studio**: Excellent for synthetic scheduled performance testing. Beyond Pixells can schedule nightly sitespeed.io runs against all 10 client URLs, generating rich HTML performance reports or outputting performance metrics straight to Grafana dashboards.
* **Stars & Maintenance**: **~5,035 stars**. Very active maintenance and frequent browser driver updates.
* **Free vs Freemium / License**: 100% Free Open-Source (**MIT License**).
* **Infra Needed**: Docker container (`sitespeedio/sitespeed.io`). Can run inside scheduled GitHub Actions or on a small monitoring server with Grafana/InfluxDB.

---

## 5. Rank Tracking & SERP Monitoring OSS

### 7. SerpBear
* **Repo URL**: [https://github.com/towfiqi/serpbear](https://github.com/towfiqi/serpbear)
* **What it does**: An open-source, self-hosted search engine rank tracking application built with Next.js. Tracks Google keyword rankings on desktop and mobile for target geographic locations, showing ranking history, keyword search volume, and domain authority.
* **Why it helps THIS studio**: Allows Beyond Pixells to monitor target keywords in **Google India** (`google.co.in` / country code `in`) for client marketing sites without paying $100+/month SaaS subscriptions (e.g., Ahrefs or Semrush). Connects directly with the **free Google Search Console API** or low-cost SERP APIs (e.g., ValueSERP / ScraperAPI), delivering automated weekly keyword rank reports via email or Slack.
* **Stars & Maintenance**: **~2,093 stars**. Actively maintained Next.js self-hosted application.
* **Free vs Freemium / License**: 100% Free Open-Source (**MIT License**).
* **Infra Needed**: Node.js / Docker container. Runs easily on a $5/month VPS or Docker host, storing ranking history in SQLite/PostgreSQL.

---

## 6. Accessibility Checkers

### 8. Pa11y CI
* **Repo URL**: [https://github.com/pa11y/pa11y-ci](https://github.com/pa11y/pa11y-ci)
* **What it does**: An automated accessibility test runner designed for CI/CD pipelines. It crawls a list of URLs and verifies WCAG 2.1 AA/AAA compliance using HTML_CodeSniffer and axe engines.
* **Why it helps THIS studio**: Configured via a simple `.pa11yci` JSON file in each client site repository. Beyond Pixells can list all site routes and run `pa11y-ci` in GitHub Actions to catch color contrast issues, missing `alt` tags on images, broken ARIA roles, and form label errors automatically.
* **Stars & Maintenance**: **~635 stars** (Pa11y core has **~4,200 stars**). Actively maintained accessibility tooling.
* **Free vs Freemium / License**: 100% Free Open-Source (**LGPL-3.0 License**).
* **Infra Needed**: CLI Node.js package (`npm install pa11y-ci`). Runs inside CI runner with zero server footprint.

---

### 9. axe-core (by Deque)
* **Repo URL**: [https://github.com/dequelabs/axe-core](https://github.com/dequelabs/axe-core)
* **What it does**: The world's leading accessibility testing engine for HTML/DOM applications. Powers Google Lighthouse, Chrome DevTools, and Microsoft Accessibility Insights.
* **Why it helps THIS studio**: Provides zero false-positive accessibility auditing via `@axe-core/cli` or Playwright integrations. Beyond Pixells can integrate `axe-core` into pre-deployment integration tests to guarantee 100% WCAG compliance for high-stakes client sites.
* **Stars & Maintenance**: **~7,557 stars**. Industry standard maintained by Deque Systems.
* **Free vs Freemium / License**: 100% Free Open-Source (**MPL-2.0 License**).
* **Infra Needed**: CLI / NPM module (`@axe-core/cli`). Runs headlessly in CI or developer machine.

---

## 7. Uptime & Security Scanning

### 10. Uptime Kuma
* **Repo URL**: [https://github.com/louislam/uptime-kuma](https://github.com/louislam/uptime-kuma)
* **What it does**: A self-hosted monitoring tool with a clean dashboard for HTTP(S), keyword matching, ping, DNS, and SSL certificate expiration monitoring. Supports 90+ notification services (Slack, Telegram, Discord, Email).
* **Why it helps THIS studio**: Acts as a central command center for Beyond Pixells. It continuously pings all 10+ GitHub Pages sites, verifies that the custom domain SSL certificates do not expire, checks that `llms.txt` and `sitemap.xml` return HTTP 200, and sends instant alerts if GitHub Pages experiences an outage.
* **Stars & Maintenance**: **~91,835 stars**. Extremely active open-source community.
* **Free vs Freemium / License**: 100% Free Open-Source (**MIT License**).
* **Infra Needed**: Lightweight Node.js app with SQLite database. Runs in a Docker container requiring only **~100 MB RAM** on any small VPS.

---

### 11. OWASP ZAP (ZAP Baseline Scan)
* **Repo URL**: [https://github.com/zaproxy/zaproxy](https://github.com/zaproxy/zaproxy)
* **What it does**: OWASP Zed Attack Proxy (ZAP) is a security scanner for web applications. The **ZAP Baseline Scan** (`zaproxy/action-baseline`) is a light DAST scanner that inspects site security headers (HSTS, CSP, X-Frame-Options, X-Content-Type-Options), mixed content, and SSL configuration.
* **Why it helps THIS studio**: Runs a non-invasive automated security audit against all 10 static client sites via GitHub Actions. Ensures that GitHub Pages header configurations or CNAME setups do not leak security vulnerabilities or expose clients to cross-site scripting (XSS) or framing risks.
* **Stars & Maintenance**: **~15,828 stars**. Maintained under OWASP foundation.
* **Free vs Freemium / License**: 100% Free Open-Source (**Apache-2.0 License**).
* **Infra Needed**: Docker image (`ghcr.io/zaproxy/zaproxy:stable`) executing inside GitHub Actions CI.

---

## 8. GA4 Alternatives for Form/Lead Attribution on Static Sites

### 12. Formbricks
* **Repo URL**: [https://github.com/formbricks/formbricks](https://github.com/formbricks/formbricks)
* **What it does**: An open-source privacy-first experience management and form analytics platform. Captures contact form submissions, micro-surveys, and lead conversion data with built-in attribution, webhook notifications, and user consent controls.
* **Why it helps THIS studio**: Static sites on GitHub Pages lack backend processing for lead forms. Beyond Pixells can embed Formbricks or use its lightweight JS SDK on contact forms across all 10 client sites to capture leads, track submission conversion rates, and forward submissions directly to client CRMs or Slack channels.
* **Stars & Maintenance**: **~13,021 stars**. Rapidly growing, active development.
* **Free vs Freemium / License**: Open-Source (**AGPLv3 / Formbricks Community License**). Free self-hostable instance.
* **Infra Needed**: Node.js + PostgreSQL in Docker Compose or deployed to Railway/Render/Fly.io.

---

### 13. PostHog
* **Repo URL**: [https://github.com/PostHog/posthog](https://github.com/PostHog/posthog)
* **What it does**: An all-in-one product analytics platform featuring event tracking, form submission funnels, visual session recordings, user heatmaps, feature flags, and conversion attribution.
* **Why it helps THIS studio**: Provides complete lead attribution that GA4 renders difficult on static sites. Beyond Pixells can trace visitor traffic from specific UTM parameters (e.g., LinkedIn/Google campaign) -> static site landing page -> form field interactions -> successful lead form submission. Session recordings allow the studio to diagnose why users abandon contact forms on specific client sites.
* **Stars & Maintenance**: **~39,940 stars**. Backed by Y Combinator with massive developer activity.
* **Free vs Freemium / License**: Open-Source Core (**MIT License**). Free self-hostable Docker or Cloud Free Tier (**1 million free events/month + 5,000 free session recordings/month** per account).
* **Infra Needed**: Self-hosted via Docker/Kubernetes (requires 4GB+ RAM) OR **PostHog Cloud Free Tier** (zero infrastructure setup for static sites).

---

## 9. Comprehensive Tool Catalog & Studio Architecture

### Master Summary Matrix

| Tool Name | Domain / Category | GitHub Repository | Stars | License | Recommended Deployment | Primary Studio Value |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Umami** | Web Analytics | `umami-software/umami` | ~39k | MIT | Vercel + Supabase | Single privacy-friendly analytics script across all 10+ client static sites. |
| **GoatCounter** | Web Analytics | `zgoat/goatcounter` | ~6k | EUPL-1.2 | $5/mo VPS (Docker) | Minimalist 1KB JS analytics with zero-JS fallback pixel for `llms.txt` docs. |
| **Unlighthouse** | SEO Auditing CLI | `harlan-zw/unlighthouse` | ~4.8k | MIT | GitHub Actions / CLI | Full multi-page Lighthouse audit across entire site before deployment. |
| **Lychee** | Link & SEO Crawler | `lycheeverse/lychee` | ~3.9k | Apache-2.0 | GitHub Actions Cron | Weekly crawl catching broken internal/external links, sitemaps, & `llms.txt`. |
| **Lighthouse CI** | Performance Quality Gate | `GoogleChrome/lighthouse-ci` | ~7.1k | Apache-2.0 | GitHub Actions PR Check | Blocks PR merges if performance, SEO, or Core Web Vitals fall below budget. |
| **sitespeed.io** | Synthetic Perf Monitor | `sitespeedio/sitespeed.io` | ~5.0k | MIT | Docker / Scheduled CI | Detailed browser performance metrics and visual speed index reporting. |
| **SerpBear** | Rank Tracking | `towfiqi/serpbear` | ~2.1k | MIT | Docker VPS | Tracks Google India keyword rankings with free Google Search Console API. |
| **Pa11y CI** | Accessibility CI | `pa11y/pa11y-ci` | ~635 | LGPL-3.0 | GitHub Actions CI | Automated WCAG 2.1 accessibility auditing across all site routes. |
| **axe-core** | Accessibility Engine | `dequelabs/axe-core` | ~7.5k | MPL-2.0 | NPM / Playwright | Enterprise-grade accessibility testing engine for client deliverables. |
| **Uptime Kuma** | Uptime & SSL Monitor | `louislam/uptime-kuma` | ~91.8k | MIT | Docker VPS ($5/mo) | Central dashboard monitoring 10+ sites for uptime, SSL expiry, & `llms.txt`. |
| **OWASP ZAP** | Security & Headers | `zaproxy/zaproxy` | ~15.8k | Apache-2.0 | GitHub Actions CI | Automated security header (CSP, HSTS) & vulnerability baseline scan. |
| **Formbricks** | Lead & Form Capture | `formbricks/formbricks` | ~13.0k | AGPLv3 | Docker / Railway | Form engine capturing lead attribution and forwarding leads to client CRMs. |
| **PostHog** | Product Analytics & Funnels | `PostHog/posthog` | ~39.9k | MIT | Cloud Free Tier | Lead conversion funnels, session recordings, and marketing UTM attribution. |

---

### Recommended Automation Architecture for Beyond Pixells

To keep operational overhead and hosting costs near **$0/month**, Beyond Pixells should adopt the following stack architecture:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            GITHUB PAGES HOSTING                             │
│       [ Client Site 1 ]  [ Client Site 2 ]  ...  [ Client Site 10+ ]        │
│    (Includes: JSON-LD Schema | XML Sitemap | llms.txt | Umami Script)       │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
      ┌────────────────────────────────┼────────────────────────────────┐
      ▼                                ▼                                ▼
┌─────────────────────────┐  ┌─────────────────────────┐  ┌─────────────────────────┐
│   GITHUB ACTIONS CI     │  │  SELF-HOSTED / FREE UI  │  │ CENTRAL MONITORING VPS  │
│   (Continuous Audits)   │  │  (Analytics & Leads)    │  │ ($5/mo Hetzner/Digital) │
├─────────────────────────┤  ├─────────────────────────┤  ├─────────────────────────┤
│ • Lychee (Link Check)   │  │ • Umami Analytics       │  │ • Uptime Kuma           │
│ • Lighthouse CI (Perf)  │  │   (Vercel + Supabase)   │  │   (Pings, SSL, Status)  │
│ • Pa11y CI (WCAG)       │  │ • Formbricks / PostHog  │  │ • SerpBear              │
│ • OWASP ZAP (Security)  │  │   (Lead attribution)    │  │   (Google India SERP)   │
└─────────────────────────┘  └─────────────────────────┘  └─────────────────────────┘
```

1. **Static Hosting Layer**: 10+ Client Sites on GitHub Pages with Umami JS script (~2KB) and Formbricks/PostHog event snippet.
2. **Automated CI/CD Layer**: GitHub Actions running on PRs and weekly cron schedules (Lychee for dead links including `llms.txt`, Lighthouse CI for performance regressions, Pa11y for accessibility, ZAP for security headers).
3. **Analytics & Attribution Layer**: Umami hosted for free on Vercel + Supabase Postgres (1 unified dashboard for all 10 sites).
4. **Central Studio Management Server**: A single cheap $5/month Docker VPS running Uptime Kuma (monitoring all 10 site status & SSL certs) and SerpBear (monitoring Google India keyword rankings).

