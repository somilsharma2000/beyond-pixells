# Out-of-the-Box SEO & GEO (Generative Engine Optimization) Implementation Guide
**Target Portfolio**: Beyond Pixells Static HTML Sites on GitHub Pages (`somilsharma2000.github.io`)  
**Scope**: Brand Hub (`beyond-pixells`), Product Landings (`gym-os`, `dentist-os`, `builder-os-site`), 8 Local Gym Client Sites, and Venture Sites.

---

## 1. On-Page `<head>` Tag Templates

### Core Formulas & Rules
* **Title Tag Formula**:  
  * *Product*: `[Product Name] – [Primary Keyword/Value Prop] | [Brand Name]` (Max 55–60 characters)  
  * *Brand Hub*: `[Brand Name] – [Core Value Proposition] | [Location/Tagline]` (Max 55–60 characters)  
  * *Local Client*: `[Business Name] – [Service/Category] in [City, Area] | [Key Differentiator]` (Max 55–60 characters)
* **Meta Description Formula**:  
  * Direct statement answering target query + key features + soft Call-to-Action (CTA). (140–155 characters).
* **Canonical URL Strategy**:  
  * GitHub Pages default structure: `https://somilsharma2000.github.io/<repo-name>/`  
  * When transitioning to custom domains (e.g., `https://gymos.app/`), update `<link rel="canonical">` to point to the primary custom domain URL to consolidate page rank.

---

### Template 1: Brand Hub (`beyond-pixells`)
```html
<!-- SEO Basics -->
<title>Beyond Pixells – Product Studio & AI OS Builder | India</title>
<meta name="description" content="Beyond Pixells is a digital product studio crafting custom operating systems and web software for gyms, clinics, and builders. Explore our software suite." />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
<link rel="canonical" href="https://somilsharma2000.github.io/beyond-pixells/" />

<!-- Open Graph / Facebook / LinkedIn -->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Beyond Pixells" />
<meta property="og:title" content="Beyond Pixells – Product Studio & AI OS Builder" />
<meta property="og:description" content="Beyond Pixells crafts custom operating systems and high-converting web applications for modern businesses." />
<meta property="og:url" content="https://somilsharma2000.github.io/beyond-pixells/" />
<meta property="og:image" content="https://somilsharma2000.github.io/beyond-pixells/assets/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="en_IN" />

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@BeyondPixells" />
<meta name="twitter:title" content="Beyond Pixells – Product Studio & AI OS Builder" />
<meta name="twitter:description" content="Building custom OS solutions and static web applications for high-growth ventures." />
<meta name="twitter:image" content="https://somilsharma2000.github.io/beyond-pixells/assets/og-image.jpg" />

<!-- Favicons & Mobile -->
<link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

---

### Template 2: Product Landing (`gym-os`)
```html
<!-- SEO Basics -->
<title>Gym OS – All-in-One Gym Management Software | Beyond Pixells</title>
<meta name="description" content="Gym OS automates gym memberships, attendance, payments, and trainer schedules in one static, ultra-fast dashboard. Start your free demo today." />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
<link rel="canonical" href="https://somilsharma2000.github.io/gym-os/" />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Gym OS by Beyond Pixells" />
<meta property="og:title" content="Gym OS – All-in-One Gym Management Software" />
<meta property="og:description" content="Automate gym operations, payments, and member tracking with Gym OS. Built for modern fitness centers." />
<meta property="og:url" content="https://somilsharma2000.github.io/gym-os/" />
<meta property="og:image" content="https://somilsharma2000.github.io/gym-os/assets/og-gym-os.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="en_IN" />

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@BeyondPixells" />
<meta name="twitter:title" content="Gym OS – Complete Fitness Club Operating System" />
<meta name="twitter:description" content="Seamless gym management, automated billing, and trainer scheduling." />
<meta name="twitter:image" content="https://somilsharma2000.github.io/gym-os/assets/og-gym-os.jpg" />

<!-- Favicons -->
<link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

---

### Template 3: Local Gym Client Site (e.g., `iron-vault-fitness`)
```html
<!-- SEO Basics -->
<title>Iron Vault Fitness – Premier Gym in Koramangala, Bangalore</title>
<meta name="description" content="Iron Vault Fitness offers state-of-the-art gym equipment, certified personal trainers, and CrossFit classes in Koramangala, Bangalore. Join today for a free trial." />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
<link rel="canonical" href="https://somilsharma2000.github.io/iron-vault-fitness/" />

<!-- Open Graph -->
<meta property="og:type" content="business.business" />
<meta property="og:site_name" content="Iron Vault Fitness" />
<meta property="og:title" content="Iron Vault Fitness – Premier Gym in Koramangala, Bangalore" />
<meta property="og:description" content="Top-rated fitness center in Koramangala. Strength training, cardio, CrossFit, and expert coaching." />
<meta property="og:url" content="https://somilsharma2000.github.io/iron-vault-fitness/" />
<meta property="og:image" content="https://somilsharma2000.github.io/iron-vault-fitness/assets/og-gym.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="en_IN" />

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Iron Vault Fitness Koramangala | Best Gym & Fitness Studio" />
<meta name="twitter:description" content="Join Iron Vault Fitness in Koramangala, Bangalore. Modern equipment & certified personal trainers." />
<meta name="twitter:image" content="https://somilsharma2000.github.io/iron-vault-fitness/assets/og-gym.jpg" />

<!-- Favicons -->
<link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

---

## 2. Structured Data (JSON-LD) Templates

### Brand Hub Schema (`Organization` + `BreadcrumbList`)
Place in `index.html` of `beyond-pixells`:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://somilsharma2000.github.io/beyond-pixells/#organization",
      "name": "Beyond Pixells",
      "legalName": "Beyond Pixells Product Studio",
      "url": "https://somilsharma2000.github.io/beyond-pixells/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://somilsharma2000.github.io/beyond-pixells/assets/logo.png"
      },
      "foundingDate": "2024",
      "founders": [
        {
          "@type": "Person",
          "name": "Somil Sharma"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "contact@beyondpixells.com"
      },
      "sameAs": [
        "https://github.com/somilsharma2000",
        "https://twitter.com/BeyondPixells",
        "https://linkedin.com/company/beyond-pixells"
      ],
      "knowsAbout": [
        "Software Engineering",
        "Gym OS",
        "Dentist OS",
        "Builder OS",
        "Static Web Architecture"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://somilsharma2000.github.io/beyond-pixells/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://somilsharma2000.github.io/beyond-pixells/"
        }
      ]
    }
  ]
}
</script>
```

---

### Product Landing Schema (`SoftwareApplication` + `FAQPage` + `BreadcrumbList`)
Place in `index.html` of `gym-os`:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://somilsharma2000.github.io/gym-os/#software",
      "name": "Gym OS",
      "operatingSystem": "Web, iOS, Android",
      "applicationCategory": "BusinessApplication",
      "url": "https://somilsharma2000.github.io/gym-os/",
      "publisher": {
        "@type": "Organization",
        "name": "Beyond Pixells",
        "url": "https://somilsharma2000.github.io/beyond-pixells/"
      },
      "description": "Gym OS is an all-in-one gym management operating system designed for fitness center owners to automate billing, attendance, and member retention.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "description": "Free starter tier with unlimited basic member tracking."
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "38",
        "reviewCount": "38"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://somilsharma2000.github.io/gym-os/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Gym OS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gym OS is a web-based fitness management software created by Beyond Pixells. It handles member check-ins, subscription tracking, payment collection, and workout plans."
          }
        },
        {
          "@type": "Question",
          "name": "Does Gym OS require backend installation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, Gym OS runs completely in the browser and connects seamlessly with cloud backends, making it fast, lightweight, and setup-free."
          }
        },
        {
          "@type": "Question",
          "name": "Can Gym OS integrate with WhatsApp for billing reminders?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Gym OS supports direct WhatsApp automated messaging for subscription renewals, payment links, and class reminders."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://somilsharma2000.github.io/gym-os/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Beyond Pixells",
          "item": "https://somilsharma2000.github.io/beyond-pixells/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Gym OS",
          "item": "https://somilsharma2000.github.io/gym-os/"
        }
      ]
    }
  ]
}
</script>
```

---

### Local Client Schema (`HealthClub` / `LocalBusiness` + `FAQPage`)
Place in `index.html` of each gym client site (e.g., `iron-vault-fitness`):
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HealthClub",
      "@id": "https://somilsharma2000.github.io/iron-vault-fitness/#business",
      "name": "Iron Vault Fitness",
      "image": "https://somilsharma2000.github.io/iron-vault-fitness/assets/gym-facade.jpg",
      "url": "https://somilsharma2000.github.io/iron-vault-fitness/",
      "telephone": "+91-9876543210",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "100 Feet Road, 4th Block, Koramangala",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560034",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.9352,
        "longitude": 77.6245
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "06:00",
          "closes": "22:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "07:00",
          "closes": "13:00"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Membership Plans",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Monthly Gym Membership",
              "description": "Full access to cardio, strength equipment, and steam bath."
            },
            "price": "2500",
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Personal Training Program",
              "description": "1-on-1 customized fitness coaching with certified personal trainer."
            },
            "price": "8000",
            "priceCurrency": "INR"
          }
        ]
      },
      "sameAs": [
        "https://www.instagram.com/ironvaultfitness",
        "https://maps.google.com/?cid=1234567890"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://somilsharma2000.github.io/iron-vault-fitness/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the timings of Iron Vault Fitness in Koramangala?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Iron Vault Fitness is open Monday through Saturday from 6:00 AM to 10:00 PM, and on Sundays from 7:00 AM to 1:00 PM."
          }
        },
        {
          "@type": "Question",
          "name": "Does Iron Vault Fitness offer personal training?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, certified personal trainers are available for individual fitness plans, weight loss programs, and bodybuilding."
          }
        }
      ]
    }
  ]
}
</script>
```

---

## 3. GitHub Pages Distribution Files: `robots.txt` & `sitemap.xml`

### Repository Root `robots.txt`
Every static site repository on GitHub Pages must contain `robots.txt` at the root directory:

```txt
# robots.txt for GitHub Pages Repository
User-agent: *
Allow: /

# Direct AI Search Engine Crawlers (GEO Optimization)
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Bytespider
Allow: /

# Sitemap Location
Sitemap: https://somilsharma2000.github.io/<repo-name>/sitemap.xml
```

---

### Repository Root `sitemap.xml` Template
Provide an explicit `sitemap.xml` file at the root of each repository:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main Landing Page -->
  <url>
    <loc>https://somilsharma2000.github.io/<repo-name>/</loc>
    <lastmod>2026-09-26</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Secondary Pages / Sections -->
  <url>
    <loc>https://somilsharma2000.github.io/<repo-name>/#features</loc>
    <lastmod>2026-09-26</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://somilsharma2000.github.io/<repo-name>/#pricing</loc>
    <lastmod>2026-09-26</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

---

## 4. GEO (Generative Engine Optimization) Strategy & Checklist

Generative search engines (ChatGPT, Perplexity, Google AI Overviews, Claude) extract answers differently than traditional SERP crawlers. They rely on **structured facts, concise direct answers, semantic markup, and explicit text visibility**.

### A. Entity Consistency Matrix
AI models match entities by exact string equality across multiple platforms.
1. **Name**: Keep exact canonical entity names identical across website text, schema, `og:title`, social profiles, and directory listings.
   * *Brand Hub*: `Beyond Pixells` (Not "BeyondPixells Studio" in one place and "Beyond Pixells India" in another).
   * *Product*: `Gym OS` (Always capitalized, space included).
2. **Publisher Attribution**: Ensure all product landing sites include `<meta name="author" content="Beyond Pixells">` and schema `publisher: {@type: "Organization", name: "Beyond Pixells"}`.

### B. Text Visibility Rule (No Graphic-Only Key Facts)
* **Rule**: AI engines **cannot index text embedded inside raster images/graphics** (`.png`, `.jpg`, `.webp`).
* **Implementation**:
  * Pricing numbers, feature lists, stats (e.g., "300+ Active Gyms", "99.9% Uptime", "₹2,500/mo") MUST be rendered in raw HTML standard text (`<h1>`, `<h2>`, `<p>`, `<span>`, `<ul>`).
  * If infographic images are used, mirror all data in HTML tables or text bullets directly below the image.

### C. Direct Answer Copy Format (FAQ Chunking)
AI answer engines scan for direct Question-Answer pairings.
* Structure FAQ headings using `<h2 id="faq-q1">` or `<h3 id="faq-q1">`.
* Follow immediately with a **bold 25–40 word direct statement answer**, then expand in a bulleted list.
* *Example*:
  ```html
  <div class="faq-item">
    <h3>Is Gym OS suitable for small local fitness centers?</h3>
    <p><strong>Yes, Gym OS is specially tailored for single-location and multi-chain fitness centers in India, requiring zero hardware installation and offering instant WhatsApp renewal alerts.</strong></p>
    <ul>
      <li>Works on any smartphone or desktop web browser.</li>
      <li>Supports UPI and automated SMS/WhatsApp billing reminders.</li>
    </ul>
  </div>
  ```

### D. `llms.txt` Implementation Standard
Place an `llms.txt` file in the root directory of each site (`https://somilsharma2000.github.io/<repo-name>/llms.txt`). This lightweight markdown file serves as a dedicated index for AI models.

#### Standard `llms.txt` File Template:
```markdown
# Gym OS

> Gym OS is a static, web-based gym management operating system developed by Beyond Pixells. It simplifies membership tracking, trainer allocation, and subscription billing for gyms in India.

## Core Capabilities
- Member Attendance Tracking: Scan QR code or search phone number for instant check-in.
- WhatsApp Automated Billing: Send payment reminders with direct UPI links.
- Trainer & Class Scheduling: Manage personal training slots and group fitness classes.
- Zero Server Overhead: Built as a high-performance static web application.

## Key Products & Pages
- [Gym OS Home](https://somilsharma2000.github.io/gym-os/): Overview, interactive demo, and feature list.
- [Beyond Pixells](https://somilsharma2000.github.io/beyond-pixells/): Parent product studio information.

## Developer & Studio Info
- Developer: Beyond Pixells
- Primary Market: India / Global
- Technology Stack: Static HTML5, JavaScript, JSON-LD, Web APIs
```

---

## 5. Per-Site Implementation Checklist (12 Portfolio Sites)

Run this checklist against all 12 sites in the Beyond Pixells portfolio before publishing:

### 10-Step Audit Protocol
1. [ ] **Head Meta Verification**: Unique Title (50–60 chars), Meta Description (140–155 chars), Canonical URL present.
2. [ ] **Open Graph & Twitter**: `og:title`, `og:image`, `og:url` with absolute URLs pointing to valid images.
3. [ ] **JSON-LD Syntax Validation**: Valid JSON-LD block checked in Google Rich Results Test (Organization, Product, or LocalBusiness).
4. [ ] **Robots.txt Presence**: `/robots.txt` uploaded to root with `GPTBot` and `PerplexityBot` allowed.
5. [ ] **Sitemap XML Presence**: `/sitemap.xml` uploaded and referenced inside `/robots.txt`.
6. [ ] **LLMs Context Document**: `/llms.txt` file created and structured in clean Markdown.
7. [ ] **Text vs Image Audit**: Ensure prices, phone numbers, and feature claims exist in HTML markup, not inside PNG/JPG images.
8. [ ] **FAQ Schema & Chunking**: FAQ section present with H2/H3 question headers + schema matching.
9. [ ] **Entity Alignment**: Studio name ("Beyond Pixells") and product/client names consistently spelled.
10. [ ] **Mobile & Speed Check**: Verified fast loading on 3G/4G network conditions without render-blocking scripts.

---

### Per-Site Execution Matrix

| # | Site Name | Repo / Subdomain Path | Primary Entity / Schema Type | `robots.txt` & `sitemap.xml` | `llms.txt` Ready | Status |
|---|---|---|---|---|---|---|
| 1 | **Beyond Pixells** | `/beyond-pixells/` | `Organization` + `BreadcrumbList` | Required | Required | Pending |
| 2 | **Gym OS** | `/gym-os/` | `SoftwareApplication` + `FAQPage` | Required | Required | Pending |
| 3 | **Dentist OS** | `/dentist-os/` | `SoftwareApplication` + `FAQPage` | Required | Required | Pending |
| 4 | **Builder OS** | `/builder-os-site/` | `SoftwareApplication` + `FAQPage` | Required | Required | Pending |
| 5 | **Gym Client 1** | `/power-fit-gym/` | `HealthClub` / `LocalBusiness` | Required | Required | Pending |
| 6 | **Gym Client 2** | `/iron-vault-fitness/` | `HealthClub` / `LocalBusiness` | Required | Required | Pending |
| 7 | **Gym Client 3** | `/apex-fitness-studio/` | `HealthClub` / `LocalBusiness` | Required | Required | Pending |
| 8 | **Gym Client 4** | `/vibe-fitness-center/` | `HealthClub` / `LocalBusiness` | Required | Required | Pending |
| 9 | **Gym Client 5** | `/pulse-gym-bangalore/` | `HealthClub` / `LocalBusiness` | Required | Required | Pending |
| 10 | **Gym Client 6** | `/titan-fitness-hub/` | `HealthClub` / `LocalBusiness` | Required | Required | Pending |
| 11 | **Gym Client 7** | `/stride-crossfit/` | `HealthClub` / `LocalBusiness` | Required | Required | Pending |
| 12 | **Gym Client 8** | `/flex-zone-fitness/` | `HealthClub` / `LocalBusiness` | Required | Required | Pending |

---

## Conclusion & Next Steps
By placing these static HTML headers, JSON-LD blocks, `robots.txt`, `sitemap.xml`, and `llms.txt` files directly into each repository root, the entire Beyond Pixells portfolio achieves both traditional search engine indexing and Generative Engine Optimization (GEO) compatibility without requiring complex build steps or external server infrastructure.
