# Beyond Pixells — Social Media Content System & Design Engine

> **System Objective:** Translate the Beyond Pixells web design system into a 100% programmatic, repeatable social media motion graphics framework for Instagram Reels, YouTube Shorts, LinkedIn, and X. Every video and static asset looks like an extension of the Beyond Pixells website and product suite.

---

## 1. Visual Identity & Canvas Specifications

### 1.1 Core Brand Tokens
* **Canvas Background:** `#08090C` (Deepest Obsidian Dark) with a 4% radial gradient center glow (`#161A24` at 0% blur, fading to `#08090C`).
* **Primary Accent Gradient:** Crimson → Amber (`#FF3B30` → `#FF7A00`, angle: `135deg`). Used for primary text highlights, hero numbers, active border glows, and motion strokes.
* **Secondary Accent:** Cyan (`#00F2FE`). Used for metric deltas, active badge highlights, interactive cursor rings, and success states.
* **Muted / Card Backgrounds:** `#11141C` with 1px solid `#1E2330` border or glassmorphic blur (`backdrop-filter: blur(16px)` with `rgba(255,255,255,0.03)` fill).
* **Typography:**
  * **Header / Hero / Numbers:** *Space Grotesk* (Bold / SemiBold, letter-spacing: `-0.03em`).
  * **Body / Subtext / UI Labels:** *Plus Jakarta Sans* (Medium / Regular, letter-spacing: `-0.01em`).

### 1.2 Canvas Format & Safe Areas (1080 × 1920 Vertical Video)
* **Dimensions:** 1080 px (Width) × 1920 px (Height) — 9:16 aspect ratio.
* **Top Safe Area:** 0px – 180px (Reserved for platform UI, channel header, and top tag).
* **Bottom Safe Area:** 1620px – 1920px (Reserved for caption text, sound pill, profile title, like/share overlays).
* **Active Content Zone:** 1080 px × 1440 px (Y-range: 180px to 1620px).
* **Grid Background Overlay:** 40px × 40px dot grid in `#1A1F2C` at 35% opacity.

---

## 2. 10 Programmatic Content Formats & Templates

---

### Format 1: Stat Drop
* **What it shows:** A massive, animated hero metric that instantly anchors the viewer's attention, backed by a context card and a high-contrast delta indicator.
* **1080×1920 Layout Blueprint:**
  * `Top Tag (Y: 220px)`: `[BADGE]` Space Grotesk Bold 24pt, Cyan `#00F2FE`, 1px Cyan border, pill background `#11141C`.
  * `Hero Number (Y: 380px – 700px)`: Space Grotesk 210pt Extra Bold, Crimson→Amber gradient fill (`#FF3B30` → `#FF7A00`), drop shadow glow (`0px 20px 80px rgba(255, 59, 48, 0.35)`).
  * `Stat Label (Y: 740px)`: Plus Jakarta Sans SemiBold 36pt, Text `#FFFFFF`, centered.
  * `Context Card (Y: 880px – 1300px)`: Glass card `#11141C`, 920px wide × 420px high, border `#1E2330`. Contains 2 lines of subtext + Cyan trend tag (`+34% MoM`).
* **Motion & Animation:**
  * **0.0s - 0.6s:** Hero number counts up rapidly from `0` to final metric with spring easing (`stiffness: 120, damping: 14`).
  * **0.4s:** Context card slides up from `Y: +100px` with opacity fade in.
  * **0.8s:** Crimson→Amber glow pulses softly behind the hero number.
* **Caption & Hook Formulas:**
  * *Gym OS:* **Hook:** "83% of members who skip 3 weeks in a row never return." **Caption:** How automated attendance triggers saved 140 members from churning this month.
  * *Dentist OS:* **Hook:** "$14,200 lost every month to unconfirmed hygiene appointments." **Caption:** The exact 2-way WhatsApp recall loop that fills empty chairs automatically.
  * *Builder OS:* **Hook:** "42 days delayed on average due to site-to-office communication gaps." **Caption:** How real-time milestone approvals keep project cash flows on schedule.

---

### Format 2: UI Demo Reel
* **What it shows:** High-resolution screen recordings of product workflows framed inside a custom dark glass device container, complete with a virtual cyan cursor and kinetic subtitles.
* **1080×1920 Layout Blueprint:**
  * `Header Bar (Y: 200px)`: Product Name (Space Grotesk 28pt, White) + Status Pill "LIVE DEMO" (Cyan `#00F2FE`).
  * `Mockup Frame (Y: 320px – 1280px)`: 920px wide × 960px high rounded card (`border-radius: 24px`), 2px gradient border (`#FF3B30` to `#FF7A00` with 0.6 opacity), inset screen display showing real software recording.
  * `Virtual Cursor`: 32px glowing ring with `#00F2FE` border, trailing liquid motion.
  * `Kinetic Subtitle Pill (Y: 1350px – 1550px)`: `#08090C` background, Space Grotesk 38pt, active word highlighted in Crimson→Amber.
* **Motion & Animation:**
  * **0.0s:** Frame zooms in smoothly (`scale: 0.95 -> 1.0`).
  * **0.2s - End:** Smooth cursor movement clicking actionable UI triggers; screen responds with micro-interactions.
  * **Text Sync:** Subtitle words pop line-by-line synced with voiceover audio waveform.
* **Caption & Hook Formulas:**
  * *Gym OS:* **Hook:** "Watch a gym owner sign up, bill, and onboard a new member in 18 seconds flat." **Caption:** Stop using 4 different tools for payments, access, and schedules.
  * *Dentist OS:* **Hook:** "How to confirm 50 dental appointments while you sleep." **Caption:** Automated recall system built specifically for high-volume dental practices.
  * *Builder OS:* **Hook:** "This 1-click update stops client calls about site progress." **Caption:** Builder OS automated client portal gives homebuilders total financial clarity.

---

### Format 3: Hook Card (Big-Type Statement)
* **What it shows:** An aggressive, high-contrast text card delivering a single industry truth or provocative statement, styled in massive Space Grotesk typography.
* **1080×1920 Layout Blueprint:**
  * `Category Badge (Y: 240px)`: "UNPOPULAR TRUTH" / "STUDIO DIRECTIVE" in Space Grotesk 22pt Upper, Gray `#8A8F9E`.
  * `Main Statement Card (Y: 380px – 1380px)`: 920px wide card with `#11141C` fill and animated 1px gradient border stroke.
  * `Statement Text`: Space Grotesk Bold 64pt, line-height 1.15. Key power words styled with Crimson→Amber text fill.
  * `Footer Tag (Y: 1440px)`: Beyond Pixells logo mark + Product OS brand mark in Cyan `#00F2FE`.
* **Motion & Animation:**
  * **0.0s - 0.3s:** Card border stroke draws around the perimeter using SVG `stroke-dashoffset`.
  * **0.2s:** Text appears line-by-line with sharp spring motion (no slow fades, fast punchy reveals).
  * **Background:** Subtle dark grid slowly pans diagonally at 2px/sec.
* **Caption & Hook Formulas:**
  * *Gym OS:* **Hook:** "Your gym doesn't have a lead problem. It has a 48-hour follow-up disaster." **Caption:** Why spending more on Instagram ads won't fix a leaky retention funnel.
  * *Dentist OS:* **Hook:** "Patients don't forget appointments. They ignore awkward phone calls." **Caption:** Transitioning from voice calls to automated WhatsApp workflows doubled response rates.
  * *Builder OS:* **Hook:** "If your contractor updates live in WhatsApp chats, your margin is leaking." **Caption:** Centralize client milestones into a single immutable audit trail.

---

### Format 4: Churn Radar / Leak Inspector
* **What it shows:** An animated metric graph or pipeline visualization that pinpoints revenue loss vs. automated recovery.
* **1080×1920 Layout Blueprint:**
  * `Header (Y: 220px)`: "REVENUE LEAK AUDIT" (Space Grotesk 32pt, White).
  * `Graph Canvas (Y: 360px – 1080px)`: Dark card with glowing grid background (`#161922`).
  * `Red Leak Zone`: Crimson gradient fill area showing drop-off rate.
  * `Cyan Recovery Curve`: Sharp `#00F2FE` animated SVG curve breaking upward.
  * `Callout Tooltip (Y: 1120px – 1400px)`: Dark card showing "$3,400 RECOVERED / MO".
* **Motion & Animation:**
  * **0.0s - 0.8s:** The red leak area draws in, followed by a bright Cyan line slicing upward.
  * **0.8s:** Tooltip pops with scale spring (`0.8 -> 1.0`), pulsing a glowing cyan radar dot.
* **Caption & Hook Formulas:**
  * *Gym OS:* **Hook:** "Where 30% of your gym membership revenue disappears every quarter." **Caption:** Plug failed payment retries with automated billing recovery workflows.
  * *Dentist OS:* **Hook:** "The hidden cost of unfilled chair time in private dental practices." **Caption:** Calculate your practice's monthly no-show cost and see how automated fill works.
  * *Builder OS:* **Hook:** "The exact week construction projects start losing profit margin." **Caption:** Eliminate scope creep with client digital sign-offs before site work begins.

---

### Format 5: Before / After Split
* **What it shows:** A visual stacked comparison contrasting "Legacy Clunky Process" (Red/Muted Gray) against the "OS Streamlined System" (Cyan & Crimson→Amber Glow).
* **1080×1920 Layout Blueprint:**
  * `Top Half - BEFORE (Y: 220px – 820px)`: Card `#151214`, border `#3B1A1A`. Title "THE OLD WAY" in Red `#FF3B30`. Shows messy spreadsheets/manual steps with red X badges.
  * `Center Divider (Y: 840px – 880px)`: Glowing gradient pill "VS" or "THE SWITCH".
  * `Bottom Half - AFTER (Y: 900px – 1500px)`: Card `#0E171E`, border `#00F2FE` (0.5 opacity). Title "WITH [PRODUCT] OS" in Cyan `#00F2FE`. Shows clean, structured OS interface cards with green/cyan checkmarks.
* **Motion & Animation:**
  * **0.0s:** Before card slides down from top.
  * **0.4s:** After card pops up from bottom with glowing aura sweep across its border.
* **Caption & Hook Formulas:**
  * *Gym OS:* **Hook:** "Managing 400 members on spreadsheets vs. Gym OS automated dashboard." **Caption:** Stop wasting 12 hours a week on manual billing and attendance logs.
  * *Dentist OS:* **Hook:** "Paper appointment books vs. 1-click WhatsApp recall automation." **Caption:** Modernize your dental front-desk operations in under 48 hours.
  * *Builder OS:* **Hook:** "Paper site logs & phone calls vs. Builder OS real-time site portal." **Caption:** Give home buyers full transparency without taking a single unnecessary call.

---

### Format 6: Micro-Feature Spotlight
* **What it shows:** Extreme close-up zoom on a single high-value software component or automated button (e.g., "1-Click Recall", "Automated Billing Trigger", "Client Approval Button").
* **1080×1920 Layout Blueprint:**
  * `Context Header (Y: 220px)`: "MICRO-FEATURE #04" (Space Grotesk 24pt, Cyan).
  * `Spotlight UI Container (Y: 360px – 1100px)`: Scaled 1.4x focused UI component card in center, dark background blurred with heavy radial glow.
  * `Feature Description Card (Y: 1160px – 1500px)`: `#11141C` card breaking down time saved, conversion impact, and deployment time.
* **Motion & Animation:**
  * **0.0s - 0.5s:** UI component zooms into frame (`scale: 0.8 -> 1.05 -> 1.0`).
  * **0.6s:** Cursor clicks button; ripple animation spreads out in Crimson/Amber glow ring.
  * **0.8s:** Micro-data modal slides out of button revealing success status.
* **Caption & Hook Formulas:**
  * *Gym OS:* **Hook:** "The 1-click button that recovers 90% of expired gym memberships." **Caption:** Automated dunning retries built natively into Gym OS.
  * *Dentist OS:* **Hook:** "How this one button fills last-minute dental cancellations in 10 minutes." **Caption:** Automatic waitlist broadcast sends instant WhatsApp slots to pending patients.
  * *Builder OS:* **Hook:** "Digital milestone sign-off with instant client deposit release." **Caption:** Lock in construction payments as soon as site milestones are met.

---

### Format 7: Feature Matrix Card
* **What it shows:** A clean 3-row comparison card listing features, speed, and cost efficiency, contrasting generic SaaS or legacy tools with the dedicated vertical OS.
* **1080×1920 Layout Blueprint:**
  * `Title Area (Y: 220px)`: "GENERIC SOFTWARE VS DEDICATED OS" (Space Grotesk 34pt, Bold).
  * `Matrix Grid (Y: 360px – 1400px)`: 3 stacked horizontal rows.
    * Row 1: Setup Time (Generic: 14 Days vs OS: 10 Mins)
    * Row 2: Monthly Cost (Generic: $299/mo fragmented vs OS: 1 Flat Rate)
    * Row 3: Automated Retention (Generic: Complex Plugins vs OS: Native Built-in)
* **Motion & Animation:**
  * **0.0s:** Rows reveal sequentially with staggered timing (0.15s offset per row).
  * **0.6s:** Winning column indicators light up with Cyan border halo.
* **Caption & Hook Formulas:**
  * *Gym OS:* **Hook:** "Why generic booking apps fail modern gym owners." **Caption:** You don't need another scheduling tool—you need a complete fitness business engine.
  * *Dentist OS:* **Hook:** "Generic CRM vs Dentist OS: The 3 major differences." **Caption:** Designed specifically for dental practice workflows, HIPAA/data privacy compliance, and instant patient communication.
  * *Builder OS:* **Hook:** "Stop hacking together Trello, WhatsApp, and Excel for construction management." **Caption:** Built ground-up for custom homebuilders and residential developers.

---

### Format 8: Kinetic Quote / Voiceover Card
* **What it shows:** High-impact quote or soundbite from a studio breakdown, customer feedback, or founder insight, rendered in synchronized kinetic typography over an obsidian background.
* **1080×1920 Layout Blueprint:**
  * `Avatar / Speaker Badge (Y: 240px)`: Circular avatar container with Crimson border + Name/Title (Space Grotesk 24pt).
  * `Kinetic Text Zone (Y: 480px – 1280px)`: Large Space Grotesk 56pt text. Words transition smoothly: inactive words `#3A3F4D`, active spoken word scales 1.1x with Crimson→Amber text fill.
  * `Audio Waveform (Y: 1380px)`: Animated vertical bar graphic in Cyan `#00F2FE`.
* **Motion & Animation:**
  * **Dynamic Sync:** Words animate synchronously with spoken audio timestamps (0.05s spring transitions).
  * **Background Orbs:** Subtle ambient gradient orbs float and deform in the background.
* **Caption & Hook Formulas:**
  * *Gym OS / Studio:* **Hook:** "Software shouldn't look like an enterprise tax audit tool." **Caption:** Beyond Pixells design philosophy: making operational tools as beautiful as consumer apps.
  * *Dentist OS:* **Hook:** "The fastest way to grow a dental clinic isn't getting new patients—it's keeping the ones you have." **Caption:** Focus on retention and recall before spending on paid acquisition.
  * *Builder OS:* **Hook:** "Clarity builds trust. Trust closes multi-million real estate deals." **Caption:** How client portal transparency drives referrals for luxury homebuilders.

---

### Format 9: Process Breakdown (1-2-3 Carousel / Video)
* **What it shows:** Step-by-step 3-stage framework (`01 IDENTIFY`, `02 AUTOMATE`, `03 SCALE`) showing how the OS solves a core operational nightmare.
* **1080×1920 Layout Blueprint:**
  * `Header (Y: 200px)`: "THE 3-STEP RETENTION FRAMEWORK" (Space Grotesk 32pt).
  * `Step Cards Stack (Y: 340px – 1480px)`: 3 stacked cards, each featuring:
    * Step Number (`01`, `02`, `03`) in Space Grotesk 64pt Crimson→Amber.
    * Step Title + 2-line description in Plus Jakarta Sans 28pt.
* **Motion & Animation:**
  * **0.0s, 0.4s, 0.8s:** Card 1, Card 2, and Card 3 enter sequentially from bottom with smooth spring physics (`stiffness: 90`).
  * Active step card expands slightly while previous cards dim to 50% opacity.
* **Caption & Hook Formulas:**
  * *Gym OS:* **Hook:** "3 steps to end gym member drop-offs forever." **Caption:** Implement this 3-step automation blueprint in Gym OS today.
  * *Dentist OS:* **Hook:** "3 steps to eliminate no-shows at your dental practice." **Caption:** From automated appointment confirmation to instant waitlist filling.
  * *Builder OS:* **Hook:** "3 steps to run 5 construction sites without losing track of budget." **Caption:** Centralize milestones, site logs, and subcontractor payouts.

---

### Format 10: Studio Proof / Build Log
* **What it shows:** Behind-the-scenes engineering and design craftsmanship showing Figma design components transforming into production Remotion code / React code, establishing Beyond Pixells studio authority.
* **1080×1920 Layout Blueprint:**
  * `Top Header (Y: 200px)`: "BEYOND PIXELLS / BUILD LOG #12" (Cyan `#00F2FE`).
  * `Dual Code/UI Viewport (Y: 320px – 1320px)`: Split screen showing VS Code / Remotion editor on left/top and live component preview on right/bottom.
  * `Metrics Overlay (Y: 1380px)`: "RENDER TIME: 4.2s | 60 FPS | REACT + TAILWIND".
* **Motion & Animation:**
  * **0.0s - End:** Rapid speed-build footage with smooth zooms on key code lines and UI render output.
  * Code lines highlight with glowing Cyan cursor.
* **Caption & Hook Formulas:**
  * *Studio Brand:* **Hook:** "Why we built our entire social media content engine in Remotion & Code." **Caption:** How product studios can automate 100% of their social media output from their web design design system.

---

## 3. Product-to-Format Matrix

To maintain brand cohesion across all products while speaking specifically to each vertical, formats are assigned based on content goals:

| Product / Brand | Primary Formats (High Frequency) | Secondary Formats | Content Objective |
| :--- | :--- | :--- | :--- |
| **Gym OS** | Format 1 (Stat Drop)<br>Format 2 (UI Demo Reel)<br>Format 5 (Before/After) | Format 6 (Micro-Feature)<br>Format 9 (3-Step Framework) | Drive member retention, showcase automated billing & attendance workflows. |
| **Dentist OS** | Format 1 (Stat Drop)<br>Format 4 (Churn/Leak Radar)<br>Format 2 (UI Demo Reel) | Format 7 (Feature Matrix)<br>Format 5 (Before/After) | Demonstrate no-show elimination, revenue per chair, and WhatsApp recall. |
| **Builder OS** | Format 3 (Hook Card)<br>Format 5 (Before/After)<br>Format 9 (3-Step Framework) | Format 2 (UI Demo Reel)<br>Format 6 (Micro-Feature) | Emphasize milestone approvals, financial transparency, and site coordination. |
| **Beyond Pixells Studio** | Format 10 (Studio Build Log)<br>Format 8 (Kinetic Quote)<br>Format 3 (Hook Card) | Format 7 (Feature Matrix) | Establish design-engineering authority, attract SaaS founders, showcase Remotion/HTML stack. |

---

## 4. 1–2 Person Automated Production Pipeline

A lean 1–2 person studio team cannot spend 20 hours a week designing individual social posts. The solution is a **Code & Template-First Production Pipeline** leveraging Figma, HTML/CSS, Remotion, and simple recording workflows.

```
┌─────────────────────────┐     ┌─────────────────────────┐     ┌─────────────────────────┐
│ 1. FIGMA DESIGN SYSTEM  │ ──> │  2. REMOTION / HTML     │ ──> │ 3. BATCH CAPTURE &      │
│ Brand Tokens & Layouts  │     │  Motion Templates Code  │     │    RECORDING (1hr)      │
└─────────────────────────┘     └─────────────────────────┘     └─────────────────────────┘
                                                                             │
                                                                             ▼
┌─────────────────────────┐     ┌─────────────────────────┐     ┌─────────────────────────┐
│ 6. MULTI-CHANNEL POST   │ <── │ 5. CAPCUT / AUTO-CAP    │ <── │ 4. PROGRAMMATIC RENDER  │
│ IG, Shorts, LinkedIn, X │     │    Audio & Subtitle Sync│     │    Remotion / Puppeteer │
└─────────────────────────┘     └─────────────────────────┘     └─────────────────────────┘
```

### Step-by-Step Execution Blueprint:

1. **Figma Component Library (One-Time Setup):**
   * Build 10 master frames (1080×1920) in Figma with variables tied to `#08090C`, `#FF3B30`, `#FF7A00`, and `#00F2FE`.
   * Create auto-layout slots for screenshots, hero numbers, and copy blocks.

2. **Remotion React Motion Engine (Reusable Code Templates):**
   * Convert the top 5 high-repeat formats into Remotion components (`<StatDrop />`, `<UIDemoReel />`, `<HookCard />`, `<BeforeAfter />`, `<ChurnRadar />`).
   * Pass dynamic props (`{ number: "83%", label: "Churn Rate", product: "Gym OS" }`) via a JSON file.

3. **Batch Recording Session (1 Hour / Week):**
   * Spend 30 minutes recording clean screen workflows of Gym OS, Dentist OS, and Builder OS using OBS Studio or Loom at 60 FPS (1080p).
   * Record 5–10 quick voiceover hooks using a clear mic or high-quality AI voiceover (ElevenLabs with custom trained founder voice).

4. **Programmatic Rendering:**
   * Run a single command line script: `npx remotion render src/index.ts StatDrop output/stat_drop_gym.mp4 --props=data/gym_stat.json`.
   * Render 10–12 video assets in under 15 minutes.

5. **Final Assembly & Captions (CapCut / Auto-Cut):**
   * Drag rendered MP4s into CapCut Desktop or auto-caption tool to align typography sync if using live voiceover.
   * Add background ambient dark synth soundscapes at -24dB.

---

## 5. Recommended Posting Cadence & Distribution Strategy

To build authority without burn-out, follow a **12-Asset Weekly Cadence** distributed across platforms:

### 5.1 Weekly Schedule Blueprint

* **Monday (Gym OS Focus):**
  * *Reel/Short (1080x1920):* **Format 1 (Stat Drop)** — "83% Retention Drop".
  * *LinkedIn/X:* High-res PNG export of Format 1 + written breakdown.
* **Tuesday (Dentist OS Focus):**
  * *Reel/Short (1080x1920):* **Format 2 (UI Demo Reel)** — "50 Confirmed Appointments on WhatsApp".
  * *LinkedIn/X:* Carousel derived from **Format 5 (Before/After)**.
* **Wednesday (Studio Brand Focus):**
  * *Reel/Short (1080x1920):* **Format 10 (Studio Build Log)** or **Format 8 (Kinetic Quote)**.
  * *LinkedIn/X:* Text breakdown on SaaS UI/UX design engineering principles.
* **Thursday (Builder OS Focus):**
  * *Reel/Short (1080x1920):* **Format 3 (Hook Card)** — "If your site updates live in WhatsApp...".
  * *LinkedIn/X:* Single image statement post.
* **Friday (Cross-Product Feature Focus):**
  * *Reel/Short (1080x1920):* **Format 6 (Micro-Feature Spotlight)** or **Format 4 (Churn Radar)**.
* **Saturday (Re-share / Top Performer):**
  * Re-share top performing reel of the week to YouTube Shorts & X.

### 5.2 Summary Metrics & Deliverables
* **Total Weekly Outputs:** 5 Short-form vertical videos (Reels/Shorts), 5 Carousel/Graphic Posts (LinkedIn/X), 2 Founder Text Posts.
* **Time Required:** ~3 to 4 hours total per week for a 1–2 person team using the Remotion + Figma automated system.
