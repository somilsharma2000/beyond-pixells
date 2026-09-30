# Research Record

### 1. Topic
Gym OS marketing site redesign: dark → light "clarity-first" system, driven by founder rejection of the dark UI/UX ("i dont like its uiux, visuals, i dont get it")

### 2. Blueprint Section (DISCOVERED TOPIC)
§150 (Marketing Surface Design System) — extension per taxonomy law

### 3. Subtopics
Gym/fitness SaaS landing teardown (Glofox, Zen Planner, Wodify, PushPress, TeamUp, Trainerize, Mindbody, Arketa), Indian SMB SaaS patterns (Khatabook, Vyapar, Zoho), OSS foundations (landwind, astrowind, shadcn-landing-page), light-theme conversion research 2026.

### 4. Research Classification
Class D (Design / UX Research)

### 5. Research Question
How do successful gym-management SaaS businesses worldwide present their marketing sites, and what design system should Gym OS adopt so Indian gym owners immediately understand and trust it?

### 6. Why This Matters
The founder repeatedly rejected agent-chosen dark designs (v4 Chrome Violet, v5 Obsidian Veins, v7 navy) and reported the pages feel unclear. The marketing surface is the primary conversion path; design trust directly affects demo bookings.

### 7. Findings (Condensed)
- Every high-converting gym SaaS studied uses a LIGHT canvas: white hero, soft #F8FAFC bands, dark slate ink. Zero dark-navy gradients, zero glassmorphism.
- Product-forward: real screenshots in device frames (laptop + phone), never bare floating UI.
- Outcome headlines ("built by gym owners, for gym owners"), low-friction single CTA, transparent 3-tier pricing, WhatsApp as first-class CTA (Vyapar/India pattern).
- Dark gradient interfaces read as gaming/crypto to Indian SMB buyers — a trust killer.
- OSS foundations (all MIT, current): landwind (HTML+Tailwind, static), astrowind, leoMirandaa/shadcn-landing-page (Next.js).
- Full teardowns: work/research/gym-saas-landing-teardown.md + work/research/oss-landing-repos.md in the Sep 30 session workspace.

### 8. Decision
Adopt LIGHT CLARITY system for Gym OS marketing surface: white canvas, slate-900 ink, blue-600 accent, flat design (no gradients/glass), real product screenshots in browser+phone frames, confirmed pricing (₹3,500/₹4,000/₹4,500 per month + setup). Implemented 1 Oct 2026 in gym-os-v3 (public) route group, commit 99a8371, live-verified.

### 9. Pass B / Recheck Status
Founder approved the Gym OS look ("ok u work on the os", 1 Oct 2026) and the LIGHT system is now rolled out estate-wide (marketing surfaces only; product apps stay dark app-true):
- Hub (beyond-pixells): index + 5 blog pages + handover converted; shared bp-design-system.css v8 + bp-obsidian-veins.css flipped light (they are the CDN source for dentist/builder too).
- Dentist OS + Builder OS landings converted (inline CSS remap; product hero mocks kept dark app-true in light frames).
- Live-verified 1 Oct 2026: all 4 surfaces white canvas, slate-900 ink, 0 JS errors, 390px clean, no invisible text, hero mocks still dark.
- NOT converted (intentionally): product apps (gym-os-v3 dashboard, builder app.html, dentist-os demo) = dark app-true; admin Command Center (self-contained dark, internal); style-lab.html (v7.2 reference, internal).
- Follow-ups: OG images estate-wide still dark-branded v7.2 (regenerate when founder asks); gym-os-static retired surfaces untouched.

### 10. Confidence
HIGH on teardown facts (primary sources); implementation verified live (0 JS errors, 390px clean, screenshots loading, pricing live).
