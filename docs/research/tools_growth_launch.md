# Growth, Conversion, E-Commerce & Launch Tooling for Beyond Pixells

This research report evaluates the best **FREE open-source tools** tailored for **Beyond Pixells**, a solo-founder product studio in India. 

### Studio Context & Constraints
* **Portfolio**: 
  * **Gym OS** (Live vertical SaaS)
  * **Dentist OS** (Demo vertical SaaS)
  * **Builder OS** (In development)
  * **Bloomwire** (Flower e-commerce storefront)
  * **8 Client Gym Websites** (Local Indian business retainers)
* **Design & Conversion Vision**: High-converting, futuristic, out-of-the-box UI/UX.
* **Budget & Infrastructure**: Near-zero budget. Everything must be self-hostable on cheap VPS instances (e.g., $3–$6/mo Hetzner, DigitalOcean, or Indian cloud VPS like Hostinger/Linode) with minimal RAM/CPU footprint.
* **Geographic Focus**: India (WhatsApp-first communication, UPI/Razorpay payments, low-overhead client management).

---

## Ranked Summary Matrix

| Rank | Tool Name | Primary Category | Tech Stack / Footprint | License | Best Fit For Beyond Pixells |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | **Listmonk** | Email Marketing / Lead Nurture | Go + Postgres (<15MB RAM) | AGPL-3.0 | Zero-cost lead capture & automated nurture drip sequences |
| **2** | **Evolution API** | WhatsApp Automation (Surprise) | Node.js / Docker (~150MB RAM) | Apache-2.0 | High-conversion WhatsApp booking/reminders for India |
| **3** | **Flipt** | Feature Flags & A/B Testing | Go Single Binary (<20MB RAM) | MIT / BSL | Ultra-lightweight conversion rate optimization (CRO) |
| **4** | **Dub.co** | Link Management & Referrals | Next.js + Redis/Postgres (~200MB) | AGPL-3.0 | Custom short links, affiliate links & campaign attribution |
| **5** | **Formbricks** | In-App Surveys & Feedback | Next.js + Postgres (~250MB RAM) | AGPL-3.0 | Onboarding feedback, churn prevention & microsurveys |
| **6** | **Vendure** | Headless E-Commerce | TypeScript + NestJS (~100MB) | MIT | Lightweight, GraphQL engine for Bloomwire flower store |
| **7** | **Testimate** | Social Proof & Testimonials | Next.js + Postgres (~150MB RAM) | MIT | Video & text testimonial collection widget for client sites |
| **8** | **QR Code Styling** | Branded QR Generation | Client-side JS / Canvas (0 MB) | MIT | Futuristic branded QR codes for Gym OS check-ins & print |
| **9** | **Wai8list** | Viral Launch & Waitlist Engine | Next.js / Static (~50MB RAM) | MIT | Gamified waitlist referral page for Builder OS pre-launch |
| **10** | **Umami** | Cookieless Web Analytics (Surprise) | Node.js + Postgres (~80MB RAM) | MIT | GDPR-compliant, privacy-first analytics shared with clients |
| **11** | **Uptime Kuma** | Status Page & Monitoring (Surprise) | Node.js Single Process (~80MB) | MIT | Public uptime status page (`status.beyondpixells.com`) |
| **12** | **Invoice Ninja** | Client Billing & Retainers (Surprise) | PHP / Laravel (~100MB RAM) | AGPL-3.0 | Recurring client retainer billing for 8 gym clients |

---

## Detailed Tool Evaluations

### 1. Listmonk
* **Repo URL**: [https://github.com/knadh/listmonk](https://github.com/knadh/listmonk)
* **Category**: Self-Hosted Email Marketing & Lead Nurturing (ESP Alternative)
* **Stars / Maintenance**: ~14,500+ stars | Active maintenance by Kailash Nadh (CTO of Zerodha, India).
* **What it does**: High-performance, standalone newsletter and mailing list manager packed into a single Go binary. Features subscriber segmentation, transactional email support, double opt-in, custom templates, and performance analytics.
* **Why it helps Beyond Pixells**: Created in India by Zerodha's CTO, it is engineered specifically for ultra-low resource environments. While Mautic requires 1GB+ RAM and complex cron setups, Listmonk runs in <15MB RAM on a $3/mo VPS and can send millions of emails via SMTP (Amazon SES or Mailgun). It allows Beyond Pixells to run automated drip campaigns for Gym OS lead nurture, Bloomwire promotional blasts, and subscriber updates for all 8 client gyms without per-contact SaaS fees.
* **Free vs Freemium**: 100% Free Open Source (AGPL-3.0). No limits, no paid tiers.
* **Infra Needed**: Go single binary + PostgreSQL database (<20MB RAM overhead).

---

### 2. Evolution API *(Surprise Tool #1 — India Growth Engine)*
* **Repo URL**: [https://github.com/evolution-foundation/evolution-api](https://github.com/evolution-foundation/evolution-api)
* **Category**: Open-Source WhatsApp Automation API
* **Stars / Maintenance**: ~4,500+ stars | Highly active open-source community.
* **What it does**: Wraps the WhatsApp Web protocol (via Baileys) into an enterprise REST API with Webhooks, websockets, interactive message buttons, media sending, and status management.
* **Why it helps Beyond Pixells**: **In India, WhatsApp has a ~98% open rate compared to 15-20% for email.** For Gym OS, Dentist OS, and client gym sites, email-only lead nurture falls flat. Evolution API allows Beyond Pixells to build automated WhatsApp workflows: instant lead follow-ups, gym trial booking confirmations, dentist appointment reminders, and Bloomwire delivery notifications directly over WhatsApp—with **zero per-message fees** (unlike Meta Cloud API / Twilio).
* **Free vs Freemium**: 100% Free Open Source (Apache-2.0).
* **Infra Needed**: Node.js / Docker container (~150MB–250MB RAM).

---

### 3. Flipt
* **Repo URL**: [https://github.com/flipt-io/flipt](https://github.com/flipt-io/flipt)
* **Category**: Self-Hosted Feature Flags & A/B Testing
* **Stars / Maintenance**: ~4,800+ stars | Active enterprise-grade release cadence.
* **What it does**: GitOps-enabled, ultra-fast feature management and experimentation platform written in Go. Supports targeting rules, gradual rollouts, A/B experiments, and client/server SDKs (React, Next.js, Node, Python).
* **Why it helps Beyond Pixells**: Heavyweights like GrowthBook and Unleash require Node/Python/Redis stacks that consume 300MB–800MB RAM. Flipt compiles into a single Go binary that runs in <20MB RAM using SQLite or Postgres. Beyond Pixells can run conversion-rate optimization (CRO) A/B tests on static client gym landing pages, feature-flag new modules in Gym OS/Builder OS, and test high-converting headline variations across all sites without slowing down page load speeds.
* **Free vs Freemium**: Open Source Core (MIT / BSL). Self-hosted zero cost.
* **Infra Needed**: Go single binary + SQLite or PostgreSQL (<20MB RAM).

---

### 4. Dub.co
* **Repo URL**: [https://github.com/dubinc/dub](https://github.com/dubinc/dub)
* **Category**: Link Management, Custom Vanity URLs & Referral Tracking
* **Stars / Maintenance**: ~19,000+ stars | Maintained actively by Steven Tey and community.
* **What it does**: Open-source link management infrastructure. Provides branded short links, custom domains, deep linking, detailed click/geo analytics, custom QR code generation, and conversion attribution.
* **Why it helps Beyond Pixells**: Enables the studio to generate futuristic short vanity links (e.g., `gym.link/trainer-john`) for client gyms, track Instagram/WhatsApp ad campaigns across all 8 gym sites, and implement affiliate link tracking for promoters who refer Gym OS or Bloomwire. Gives the studio high-end attribution capabilities rivaling Bitly Enterprise at zero cost.
* **Free vs Freemium**: Open-Source (AGPL-3.0) self-hosted repo; freemium cloud service.
* **Infra Needed**: Next.js, Redis, PostgreSQL (~200MB RAM).

---

### 5. Formbricks
* **Repo URL**: [https://github.com/formbricks/formbricks](https://github.com/formbricks/formbricks)
* **Category**: In-App Feedback Collection & Micro-Surveys
* **Stars / Maintenance**: ~12,600+ stars | Very active open-source alternative to Qualtrics & Typeform.
* **What it does**: Modular, privacy-first survey and feedback collection suite. Allows targeted in-app micro-surveys, exit-intent popups, and embedding feedback widgets into web apps or static landing pages.
* **Why it helps Beyond Pixells**: Helps Gym OS and Dentist OS capture user onboarding feedback, understand why trial users drop off, and collect feature requests directly inside the app. For client gym websites, it acts as an instant lead-qualification quiz ("Find your ideal workout program") to convert cold visitors into high-intent gym membership leads.
* **Free vs Freemium**: Open-Source Core (AGPL-3.0 / MIT SDK) self-hosted; paid cloud tier.
* **Infra Needed**: Next.js, Node.js, PostgreSQL, Prisma (~250MB RAM in Docker).

---

### 6. Vendure
* **Repo URL**: [https://github.com/vendure-ecommerce/vendure](https://github.com/vendure-ecommerce/vendure)
* **Category**: Headless E-Commerce Framework (for Bloomwire)
* **Stars / Maintenance**: ~7,300+ stars | Highly active, TypeScript-native, MIT licensed.
* **What it does**: Developer-first, headless e-commerce backend built with NestJS and GraphQL. Features stock management, multi-channel support, promotion engines, cart/checkout orchestration, and custom plugin architecture.
* **Why it helps Beyond Pixells (E-Commerce Comparison)**:
  * *vs. Medusa*: Medusa v2 is powerful but heavier on Redis/Node dependencies.
  * *vs. Saleor*: Saleor requires a multi-container Django/Celery/Redis/Postgres setup (~800MB+ RAM).
  * *vs. Bagisto*: Bagisto is great for PHP/Laravel setups, but Vendure aligns better with modern TypeScript/Next.js stacks.
  * **Vendure Verdict**: Vendure runs in ~100MB RAM, connects cleanly to Next.js via GraphQL, and allows Beyond Pixells to build a blazing-fast, futuristic flower shop UI for **Bloomwire** on a $4/mo VPS. Easy to integrate with Razorpay / UPI payment plugins.
* **Free vs Freemium**: 100% Free Open Source (MIT License).
* **Infra Needed**: Node.js, TypeScript, PostgreSQL or SQLite (~100MB RAM).

---

### 7. Testimate
* **Repo URL**: [https://github.com/bishaln/testimate](https://github.com/bishaln/testimate)
* **Category**: Testimonial & Social Proof Collection (Senja / Testimonial.to Alternative)
* **Stars / Maintenance**: Actively maintained open-source project.
* **What it does**: Collects text and video testimonials via hosted submission forms, provides moderation dashboards, and outputs customizable embeddable widgets (wall of love, marquee carousels, cards).
* **Why it helps Beyond Pixells**: **Social proof is the single highest-converting element on local gym and healthcare websites.** Testimate lets Beyond Pixells send automated review request links to gym members and dentist patients. The collected testimonials are then embedded across client gym sites, Dentist OS, and Gym OS in sleek dark-mode designs, significantly driving lead conversion.
* **Free vs Freemium**: 100% Free Open Source (MIT).
* **Infra Needed**: Next.js, Tailwind CSS, PostgreSQL / Supabase (~150MB RAM).

---

### 8. QR Code Styling
* **Repo URL**: [https://github.com/kozakdenys/qr-code-styling](https://github.com/kozakdenys/qr-code-styling)
* **Category**: Branded QR Code Generation & Styling Library
* **Stars / Maintenance**: ~3,500+ stars | Maintained JavaScript/TypeScript client library.
* **What it does**: Client-side and server-side library that renders highly styled QR codes with custom dot patterns, corner designs, gradient colors, embedded center logos, and vector (SVG/PNG) exports.
* **Why it helps Beyond Pixells**: Standard black-and-white QR codes ruin high-end futuristic UI design. Beyond Pixells needs QR code generation for:
  1. **Gym OS**: Contactless member check-ins and gym equipment scan-to-view guides.
  2. **Dentist OS**: Reception check-in desks and digital prescription downloads.
  3. **Bloomwire**: Gift message cards attached to flower bouquets.
  4. **Client Gyms**: Print posters and reception stands.
  This library allows dynamic generation of neon/glowing, branded QR codes with client gym logos embedded—running entirely client-side with zero server load.
* **Free vs Freemium**: 100% Free Open Source (MIT License).
* **Infra Needed**: Pure Client-Side JavaScript / Node.js (0 MB extra server memory).

---

### 9. Wai8list
* **Repo URL**: [https://github.com/sobitp59/wai8list](https://github.com/sobitp59/wai8list)
* **Category**: Viral Pre-Launch Waitlist & Referral Engine
* **Stars / Maintenance**: Active open-source waitlist application.
* **What it does**: Spins up production-ready waitlist landing pages complete with referral position tracking ("Share with 3 friends to skip 20 spots in line"), subscriber analytics, and confirmation email triggers.
* **Why it helps Beyond Pixells**: Essential for building pre-launch buzz for **Builder OS** and upcoming Gym OS module launches. Gamified waitlists motivate early adopters in India to share referral links across WhatsApp groups and LinkedIn, creating organic viral reach without ad spend.
* **Free vs Freemium**: 100% Free Open Source (MIT).
* **Infra Needed**: Next.js / Static hosting (~50MB RAM).

---

### 10. Umami *(Surprise Tool #2 — Cookieless Client Analytics)*
* **Repo URL**: [https://github.com/umami-software/umami](https://github.com/umami-software/umami)
* **Category**: Lightweight, Privacy-First Web Analytics
* **Stars / Maintenance**: ~21,000+ stars | Highly active development.
* **What it does**: Modern, cookieless alternative to Google Analytics. Tracks pageviews, traffic sources, user devices, custom event triggers (e.g. "Book Gym Trial Clicked"), and conversion funnels.
* **Why it helps Beyond Pixells**: Google Analytics scripts are heavy, blocked by adblockers, and require annoying cookie banners. Umami is <2KB, loads instantly, and allows Beyond Pixells to create shared public/private dashboard links for all 8 gym clients. Gym owners can log into `analytics.beyondpixells.com` to see real-time lead conversion numbers cleanly without bloated enterprise complexity.
* **Free vs Freemium**: 100% Open Source (MIT) free self-hosted; paid cloud tier available.
* **Infra Needed**: Node.js + PostgreSQL or MySQL (~80MB RAM).

---

### 11. Uptime Kuma *(Surprise Tool #3 — Client Trust & Monitoring)*
* **Repo URL**: [https://github.com/louislam/uptime-kuma](https://github.com/louislam/uptime-kuma)
* **Category**: Self-Hosted Uptime Monitoring & Public Status Page
* **Stars / Maintenance**: ~55,000+ stars | Massively popular, rock-solid maintenance.
* **What it does**: Self-hosted monitoring tool supporting HTTP/S, Ping, DNS checks, SSL certificate expiry warnings, multi-channel alerts (Telegram, WhatsApp via webhook, Discord, Email), and sleek status page generation.
* **Why it helps Beyond Pixells**: Running 8 client gym websites + 4 internal OS apps means uptime reliability is critical. Uptime Kuma lets Beyond Pixells host a centralized status page (`status.beyondpixells.com`) showcasing 99.9% uptime. Automated WhatsApp/Telegram alerts notify the founder instantly if a client site goes down before the client even notices.
* **Free vs Freemium**: 100% Free Open Source (MIT License).
* **Infra Needed**: Single Node.js process (~80MB RAM).

---

### 12. Invoice Ninja *(Surprise Tool #4 — Studio Retainer Billing)*
* **Repo URL**: [https://github.com/invoiceninja/invoiceninja](https://github.com/invoiceninja/invoiceninja)
* **Category**: Invoicing, Retainer Management & Client Billing
* **Stars / Maintenance**: ~8,500+ stars | Source-available enterprise-grade invoicing engine.
* **What it does**: Complete invoicing and recurring billing platform. Handles client portals, quotes/proposals, automatic recurring retainer invoices, payment tracking, and integration with payment gateways (Razorpay, Stripe).
* **Why it helps Beyond Pixells**: Managing 8 client gym retainers manually leads to missed collections and administrative friction for a solo founder. Invoice Ninja automates monthly recurring invoices, sends payment reminder notifications, and provides a professional client portal where gym owners can view and pay invoices online.
* **Free vs Freemium**: Source-available (AGPL-3.0) free self-hosted version.
* **Infra Needed**: PHP, Laravel, MySQL (~100MB RAM).

---

## Architectural Recommendation & Single-VPS Deployment Strategy

To host **all 12 tools** for Beyond Pixells under $10/month, the following stack configuration is recommended:

```
                  ┌──────────────────────────────────────────────┐
                  │          Caddy / Nginx Reverse Proxy         │
                  │   (Automatic TLS via Let's Encrypt / Zero)   │
                  └──────────────────────┬───────────────────────┘
                                         │
        ┌────────────────────────────────┼────────────────────────────────┐
        │                                │                                │
┌───────▼───────┐                ┌───────▼───────┐                ┌───────▼───────┐
│ Go Services   │                │ Node.js Stack │                │ Next/PHP Stack│
├───────────────┤                ├───────────────┤                ├───────────────┤
│ - Listmonk    │                │ - Evolution   │                │ - Formbricks  │
│   (<15MB)     │                │   API (~150MB)│                │   (~250MB)    │
│ - Flipt       │                │ - Vendure     │                │ - Dub.co      │
│   (<20MB)     │                │   (~100MB)    │                │   (~200MB)    │
└───────┬───────┘                │ - Umami       │                │ - Invoice     │
        │                        │   (~80MB)     │                │   Ninja       │
        │                        │ - Uptime Kuma │                │   (~100MB)    │
        │                        │   (~80MB)     │                └───────┬───────┘
        │                        └───────┬───────┘                        │
        └────────────────────────────────┼────────────────────────────────┘
                                         │
                        ┌────────────────▼────────────────┐
                        │      Shared PostgreSQL Server   │
                        │    (Consolidated DB Schemas)    │
                        └─────────────────────────────────┘
```

### Total RAM Budget Estimate:
* **Go Services (Listmonk + Flipt)**: ~35 MB
* **Node/TS Services (Evolution API + Vendure + Umami + Uptime Kuma)**: ~410 MB
* **Next/PHP Stack (Formbricks + Dub + Invoice Ninja + Testimate)**: ~700 MB
* **Shared Postgres + Redis**: ~350 MB
* **Total Footprint**: **~1.5 GB RAM** (Fits comfortably on a 2GB or 4GB RAM VPS costing ~$4–$6/month).

---

## Conclusion & Action Plan for Beyond Pixells

1. **Immediate Growth Setup**: Deploy **Evolution API** + **Listmonk** to unlock zero-cost, high-conversion WhatsApp and email lead nurture for Gym OS and the 8 client gym sites.
2. **E-Commerce Launch**: Implement **Vendure** + **QR Code Styling** for **Bloomwire** to deliver a futuristic, high-performing shop experience.
3. **Conversion Optimization**: Embed **Testimate** and **Formbricks** micro-surveys on Dentist OS and client gym sites to collect video reviews and qualify incoming leads.
4. **Client Retainer Operations**: Set up **Umami** and **Uptime Kuma** to offer transparent, real-time analytics and status dashboards to gym clients, backed by **Invoice Ninja** for automated retainer invoicing.
