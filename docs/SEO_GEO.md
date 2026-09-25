# Beyond Pixells — SEO + GEO Implementation Guide

> Full templates with copy-paste JSON-LD: `research/seo_geo.md`.
> Applied: brand hub + gym-os (canonical, OG, JSON-LD, robots.txt, sitemap.xml,
> llms.txt) AND all 8 client sites (canonical, OG, HealthClub JSON-LD — honest-minimal,
> no invented addresses; add real addresses/hours per gym as they're confirmed).

## Head formula (every site)
- Title: `[Product] — [what it is] for [who]` under 60 chars
- Description: 150–160 chars, includes the differentiator + CTA
- Canonical + OG (type, title, description, url, image) + Twitter card
- JSON-LD: Organization (hub) / SoftwareApplication+FAQPage (products) /
  LocalBusiness (clients — only REAL addresses, never invented)

## GEO (getting cited by ChatGPT/Perplexity/AI Overviews)
1. **Entity consistency** — same name+description everywhere (see llms.txt)
2. **Stats as text, not images** — numbers must be crawlable
3. **FAQ chunks** — question as heading, 40–60 word direct answer first
4. **llms.txt** at repo root (done: brand hub) — the AI-readable summary
5. robots.txt explicitly allows GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot

## Sitemap per repo
`sitemap.xml` at repo root listing live pages, referenced from robots.txt.

## Per-site checklist
- [ ] canonical set to the public URL
- [ ] title + description follow formula
- [ ] OG image (1200×630)
- [ ] JSON-LD matches site type
- [ ] robots.txt + sitemap.xml
- [ ] llms.txt (products)
- [ ] FAQ section with direct-answer copy
