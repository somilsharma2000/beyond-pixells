Topic: Conversion + SEO + GEO layer for the estate (blog, CTAs, linking, schema)
Date: 2026-09-26
Research owner: lead agent (beyond)
Business area: growth + frontend (blueprint §103, §25)
Question: how do we convert visitors into WhatsApp conversations, and make
both Google and AI assistants recommend Beyond Pixells?
Method: audited all links/CTAs on 4 flagships (found zero sibling-product
links, no blog, no FAQPage schema, no sitemaps on 3 repos); researched GEO
(AI crawlers, llms.txt, entity clarity, FAQ schema), SaaS landing
conversion (single primary CTA above fold, sticky mobile CTA, friction),
and Indian gym-software competitor content (WhatsApp/UPI/renewals are the
winning messaging — GymPilot, FitGymSoftware).
Implementation:
- sticky mobile booking bar (shared kit .bp-mobile-cta) on all pages incl.
  blog — mobile-first India traffic, one-tap WhatsApp
- ecosystem cross-linking: OS Family column on every OS footer (hub,
  siblings, blog); hub nav/footer link the blog
- schema completed: FAQPage (gym+dentist, auto-extracted from markup),
  BreadcrumbList everywhere, builder-os full @graph (Organization +
  SoftwareApplication + Breadcrumb)
- SEO infra: sitemap.xml + robots.txt (AI crawlers explicitly allowed) +
  llms.txt on all 3 OS repos; hub sitemap extended
- blog live at /beyond-pixells/blog/: index + 4 guides (gym OS, WhatsApp+UPI,
  dentist OS, builder OS), each with Article+FAQPage+Breadcrumb JSON-LD,
  internal links to product pages, honest copy (no invented metrics)
Verification: 6/6 pages pass mobile checks — content present, sticky CTA
visible, WhatsApp wired, schemas parse, 0 JS errors, 0 broken links (every
internal/external link on every page HTTP < 400).
Lesson (MACHINE): commitlint on flagships requires lowercase subject start;
`cmd && pull; push` chains print success even when commit fails — always
verify with git log before claiming a push.
Security/Privacy/Legal: none. Content honesty rules enforced (no invented
stats/testimonials; Builder OS pilot described accurately; pricing kept
generic "flat monthly" pending founder confirmation).
