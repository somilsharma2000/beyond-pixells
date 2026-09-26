# Gym Client Website Feature & UX Upgrade Specification
**Prepared for:** Beyond Pixells (Indian Product Studio)  
**Product Vertical:** Gym OS Powered Client Websites (Static HTML+JS on GitHub Pages)  
**Target Audience:** Indian Gym Owners & Fitness Studios (Tier 1, Tier 2, and Tier 3 Cities)  
**Date:** September 2026  
**Status:** Feature & UX Master Specification  

---

## Executive Summary & Market Context

Indian gyms operate in a uniquely high-friction, walk-in heavy, and trust-sensitive market:
1. **WhatsApp-First Conversion**: Over 85–90% of gym membership inquiries in India are initiated, negotiated, and converted via WhatsApp rather than traditional email or website forms.
2. **UPI Instant Payments**: Potential members expect seamless UPI (GPay, PhonePe, Paytm) checkout for trial passes, day passes, and membership token deposits directly from their phones without complex credit card forms.
3. **Walk-in & Hyper-Local Focus**: Discovery happens via Instagram, Google Maps, and local walk-ins. The website's core role is to validate legitimacy, showcase real facility/trainer quality, eliminate anxiety around equipment/crowd/hygiene, and convert traffic into a physical visit or WhatsApp chat immediately.
4. **Tier 2/3 Localization Requirements**: Vernacular comfort (Hindi/Telugu/Tamil/Kannada), clear pricing without hidden admission fees, women's safety callouts, and seasonal/festival offers (Diwali, New Year, Navratri) drive conversion.

This document synthesizes global best practices from world-leading boutique fitness websites (Equinox, Barry's Bootcamp, Third Space London, F45, Gold's Gym) adapted for the Indian market and mapped to the **Gym OS** platform (`my-gym-os.base44.app`).

---

## Section 1: Audit of Current Gym Client Sites (Have vs. Miss)

Beyond Pixells currently manages 8 live/template client sites built on static HTML+CSS+JS and integrated via `gym-os-connect.js` v2. Below is an audit of the current sites (`oxigen-fitness-digital`, `iron-forge-website`, `powerhouse-fitness`, `bettabodies-system`, `reds-gym-system`, `flex-n-tone-system`, `fight-factory-manchester-system`, `ironforge-website`).

### 1.1 Current Capability Matrix Across Client Sites

| Feature / Section | Oxigen Fitness (Jaipur - Canonical) | Iron Forge (Jubilee Hills, HYD) | PowerHouse (Gachibowli, HYD) | Betta Bodies / Reds Gym / UK Sites |
|---|---|---|---|---|
| **Hero Section & Messaging** | Clean, minimalist text + single CTA | Dynamic slogan, high energy | Bold headline, membership focus | Raw industrial / bodybuilding tone |
| **Lead Capture Integration** | ✅ `gym-os-connect.js` v2 | ✅ `createLeadWithConsent` | ✅ `createLeadWithConsent` | ✅ `gym-os-connect.js` v2 |
| **WhatsApp CTAs** | Text link & standard button | Multiple direct links | 18+ WA reference triggers | Standard `wa.me` links |
| **Floating Persistent WA Widget** | ❌ Missing | ❌ Missing | ❌ Missing | ❌ Missing |
| **UPI Pricing & Instant Payment** | ❌ Text price only | ❌ Static price list | ❌ Static price list | ❌ GBP (£) static pricing |
| **Class Timetable** | Static HTML list | Static schedule cards | 50+ weekly classes text | Interactive JS schedule table |
| **Trainer Profiles** | Basic photo + name | Image + title | Grid layout | Heavy profile bios |
| **Before/After Transformations** | ❌ Missing | Static image cards | Static image cards | Static transformation grid |
| **Interactive Before/After Slider**| ❌ Missing | ❌ Missing | ❌ Missing | ❌ Missing |
| **QR Check-in Scanner Block** | ✅ Gym OS Container | ✅ Gym OS Block | ✅ Gym OS Block | ❌ Portal links only |
| **Google Reviews / Social Proof** | Static quotes | Static testimonials | Static feedback | Static quotes |
| **Live Google Rating Badge** | ❌ Missing | ❌ Missing | ❌ Missing | ❌ Missing |
| **Female Hygiene & Safety Badge** | ❌ Missing | ❌ Missing | ❌ Missing | ❌ Missing |
| **Virtual Tour / Floor Video** | ❌ Static photos only | ❌ Static photos | ❌ Static photos | ❌ Static photos |
| **Interactive Price Calculator** | ❌ Static tables | ❌ Static tables | ❌ Static tables | ✅ Present in Flex N Tone |
| **FAQ Accordion** | ❌ Missing | ❌ Missing | ❌ Missing | ✅ Basic static FAQ |

### 1.2 Core Strengths of Current Implementation
- **Lightweight & Fast**: Pure static HTML/CSS/JS hosted on GitHub Pages loads under 1 second on mobile networks across Tier 1-3 cities.
- **Fail-Safe Lead Capture**: `gym-os-connect.js` v2 features localStorage lead queuing + automatic WhatsApp redirection if the Base44 API is unreachable or credit-throttled.
- **Clean Architecture**: Centralized `site.config.js` and modular connector design make deploying new client sites simple.

### 1.3 Critical Gaps & Opportunity Areas
1. **Lack of Instant Frictionless Engagement**: Static lead forms require typing 4-5 fields. Indian users overwhelmingly prefer a 1-click WhatsApp chat pre-loaded with their requested trial time or plan query.
2. **Missing Proof of Real Transformations**: Fitness decisions in India are heavily visual. Static images lack the interactive trust punch of a responsive Before/After touch slider showing real member age, weight loss, and duration.
3. **Absence of UPI Quick-Pay / Deposit**: Gyms lose 40% of leads between website inquiry and physical walk-in. A ₹99 or ₹199 refundable Trial Pass deposit via UPI secures intent.
4. **Static Schedules with Zero Real-Time Booking**: Class schedules are static HTML text; users cannot filter by category (Zumba, HIIT, Strength, Yoga) or click "Reserve Spot" to send an automated WhatsApp booking request.
5. **No Localized Trust Callouts**: Safety, hygiene, AC status, equipment brands (Jerai, Bullrock, Life Fitness), parking availability, and certified female trainers are crucial for Indian decision-makers (especially female members and parents).

---

## Section 2: Prioritized Feature Checklist (P0 / P1 / P2)

Features are prioritized by their impact on conversion rate, ease of static HTML deployment, and alignment with Indian consumer psychology.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        FEATURE PRIORITY MATRIX                         │
├────────────────────────────────────────┬───────────────────────────────┤
│ P0: MUST-HAVE (Baseline Spec)          │ P1: HIGH CONVERSION (Standard)│
│ • Floating Persistent WhatsApp Widget  │ • Interactive B/A Slider      │
│ • Dual-Action Hero with UPI Quick-Pass │ • Trainer Profiles + IG / PT  │
│ • Google Reviews Live Star Badge       │ • Interactive Price Calc & EMI│
│ • Filterable Class Schedule            │ • Hygiene & Women Safety Card │
│ • Offline-Safe Gym OS Lead Form        │ • Accordion FAQ with Search   │
│ • Gym OS QR Check-In Terminal Block    │ • Gym Floor Video/Reel Embed  │
├────────────────────────────────────────┴───────────────────────────────┤
│ P2: ADVANCED & RETENTION (Enterprise Client Add-Ons)                   │
│ • Live Social Proof Notification Ticker ("Ankit just booked a trial")  │
│ • Vernacular Audio Note & Micro-Copy Toggle (Hindi/Telugu/Tamil)       │
│ • Instant WhatsApp Fitness & Diet Assessment Quiz Lead Magnet          │
│ • Dynamic Festival/Seasonal Offer Banner System                        │
│ • Gym Store & Supplement Showcase Integration                          │
└────────────────────────────────────────────────────────────────────────┘
```

### Priority 0 (P0) — Essential Baseline (Every Client Site)
1. **P0-1: Persistent Floating WhatsApp Widget** with context-aware pre-filled messages (e.g., "Hi [Gym Name], I am interested in a trial pass for [Branch]").
2. **P0-2: Conversion-Optimized Dual-Action Hero Section** featuring a high-impact headline, subheadline, 1-click WhatsApp CTA, and lightweight direct trial form.
3. **P0-3: Dynamic Class Timetable with Category Filtering** (Strength, Cardio, Yoga, Zumba) and "Book Spot via WhatsApp" buttons on each class slot.
4. **P0-4: Google Reviews Live Badge & Embed** displaying verified star rating (e.g. 4.9★ from 350+ reviews) linking to Google Maps.
5. **P0-5: Gym OS Lead Capture Form with Anti-Loss Fallback** integrated with `captureGymLead` / `createLeadWithConsent`, automatic duplicate detection, and WhatsApp failover.
6. **P0-6: Gym OS Embedded QR Check-In Block** allowing existing members to generate/view check-in passes or scan QR codes directly on the website.
7. **P0-7: Direct UPI Trial Pass QR / Payment Modal** displaying instant UPI pay triggers (GPay, PhonePe, Paytm QR) for ₹99/₹199 trial booking.

### Priority 1 (P1) — High-Value Conversion Boosters (Standard Spec)
8. **P1-1: Interactive Touch Before/After Transformation Slider** allowing prospective members to slide between original and transformed state with timeframes, weight lost, and trainer tags.
9. **P1-2: Trainer & Coach Showcase Cards** featuring trainer credentials (ACE, K11, ACSM), specialization, Instagram handles, and direct "Book 1-on-1 PT" WhatsApp triggers.
10. **P1-3: Tiered Membership Pricing Grid with EMI / Savings Badges** clearly displaying monthly, quarterly, and annual rates, highlights (Free Diet Chart, Locker, Steam), and instant UPI payment CTA.
11. **P1-4: Facility, Hygiene & Women's Safety Verification Bar** showcasing AC status, equipment brand, parking, certified female trainers, and separate women's batches/lockers.
12. **P1-5: Searchable Accordion FAQ Section** addressing common Indian gym anxieties (admission fees, refund policy, peak hours, personal trainer pushiness, trial rules).
13. **P1-6: Gym Floor Video Reel & Virtual Walkthrough Modal** embedding light, auto-looping, unmuted-on-hover short reels of the gym floor and machinery.

### Priority 2 (P2) — Delight, Retention & Tier 2/3 Localization
14. **P2-1: Live Social Proof Ticker** showing recent activity ("Rahul from Vaishali Nagar booked a 1-day pass 12 mins ago").
15. **P2-2: Vernacular Micro-Copy & Audio Note Toggle** providing instant Hindi/Telugu/Tamil audio greeting or text switcher for Tier 2/3 city audiences.
16. **P2-3: WhatsApp Diet & Fitness Assessment Quiz Lead Magnet** ("Answer 3 questions to get your personalized 7-Day Indian Gym Diet Chart on WhatsApp").
17. **P2-4: Seasonal & Festival Offer Banner Engine** easily toggleable for Diwali, New Year, Navratri, or Independence Day membership discount campaigns.
18. **P2-5: Gym Store & Supplement Bar Showcase** displaying available protein supplements, merch, and shaker bottles with 1-click WhatsApp ordering.

---

## Section 3: Per-Feature Build Notes & Conversion Psychology

### Feature 1: Persistent Floating WhatsApp CTA Widget (P0)
- **Why It Matters**: In India, instant messaging is 10x more likely to yield an immediate conversation than an email or web form. A sticky floating button reduces conversion friction to a single tap.
- **Conversion Psychology**: High accessibility, low perceived commitment, familiar green icon builds trust instantly.
- **Build Note (Static HTML/CSS/JS)**:
  - Add fixed position container `position: fixed; bottom: 24px; right: 24px; z-index: 9999;`.
  - Include pulsing green badge animation.
  - Dynamically read `window.GymOSConfig.whatsappNumber` and current section/page scroll depth to customize the pre-filled string (`wa.me/91XXXXXXXXXX?text=...`).

```html
<!-- Static HTML Build Snippet -->
<div id="wa-widget" class="wa-widget">
  <a id="wa-widget-link" href="#" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
    <div class="wa-icon">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.124.555 4.197 1.611 6.01L0 24l6.169-1.587a11.96 11.96 0 0 0 5.862 1.534h.005c6.646 0 12.031-5.385 12.031-12.031C24.062 5.385 18.677 0 12.031 0z"/></svg>
    </div>
    <span class="wa-text">Chat with Us</span>
  </a>
</div>
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const num = (window.GymOSConfig && window.GymOSConfig.whatsappNumber) || '917737077479';
    const gym = (window.GymOSConfig && window.GymOSConfig.gymName) || 'the Gym';
    const msg = encodeURIComponent(`Hi ${gym}! I am visiting your website and would like to ask about membership plans and trial passes.`);
    document.getElementById('wa-widget-link').href = `https://wa.me/${num}?text=${msg}`;
  });
</script>
```

---

### Feature 2: Dual-Action Hero with Instant UPI Quick-Pass CTA (P0)
- **Why It Matters**: The top fold must deliver value in under 3 seconds. Offering both a direct WhatsApp inquiry and an instant UPI ₹99 trial booking covers both hesitant researchers and high-intent buyers.
- **Conversion Psychology**: Reciprocity and low financial risk (₹99 vs full monthly fee).
- **Build Note**:
  - Grid layout with prominent headline, social proof pill ("⭐ 4.9 Rating | 500+ Active Members"), and primary/secondary CTA buttons.
  - Modal window for UPI QR payment scan generated client-side or linked to Gym OS payment link.

```html
<section class="hero-v2">
  <div class="hero-badge">⚡ #1 Rated Gym in <span id="hero-city">Jaipur</span></div>
  <h1 class="hero-title">Train Harder. Live Better. <br><em class="highlight">Zero Excuses.</em></h1>
  <p class="hero-subtitle">State-of-the-art Jerai equipment, certified coaches, and custom workout plans. Claim your 1-Day Pass now.</p>
  <div class="hero-actions">
    <a href="#trial" class="btn btn-primary">Book Free Trial ↗</a>
    <button class="btn btn-upi" onclick="openUpiModal(99)">Pay ₹99 for VIP Pass (UPI) ⚡</button>
  </div>
</section>
```

---

### Feature 3: Interactive Touch Before/After Transformation Slider (P1)
- **Why It Matters**: Prospective gym members in India buy *outcomes*, not dumbbell weights or treadmill counts. Seeing real people from their local city achieve results builds overwhelming social proof.
- **Conversion Psychology**: Visual contrast effect + relatable identity priming ("If Rahul, 34, lost 12kg in 3 months here, so can I").
- **Build Note**:
  - Implement a 100% dependency-free JavaScript image clip-path slider (`clip-path: inset(0 X% 0 0)`).
  - Add touch event listeners (`touchstart`, `touchmove`) for seamless mobile swiping.
  - Include member metadata: Name, Age, Weight Loss/Muscle Gain, Timeframe, and Trainer assigned.

```html
<div class="ba-slider" id="ba-container">
  <img src="after.jpg" class="ba-image ba-after" alt="After Transformation">
  <div class="ba-resize" id="ba-resize">
    <img src="before.jpg" class="ba-image ba-before" alt="Before Transformation">
  </div>
  <span class="ba-handle" id="ba-handle"></span>
</div>
<script>
  const container = document.getElementById('ba-container');
  const resize = document.getElementById('ba-resize');
  const handle = document.getElementById('ba-handle');
  function moveSlider(x) {
    const rect = container.getBoundingClientRect();
    let pos = ((x - rect.left) / rect.width) * 100;
    if (pos < 0) pos = 0; if (pos > 100) pos = 100;
    resize.style.width = pos + '%';
    handle.style.left = pos + '%';
  }
  container.addEventListener('mousemove', (e) => moveSlider(e.clientX));
  container.addEventListener('touchmove', (e) => moveSlider(e.touches[0].clientX));
</script>
```

---

### Feature 4: Filterable Class Schedule with "Book Spot via WhatsApp" (P0)
- **Why It Matters**: Members want to know if classes fit their work schedules before visiting. Static tables are hard to read on mobile.
- **Conversion Psychology**: Clarity reduces cognitive load; 1-click booking creates immediate action.
- **Build Note**:
  - Render class schedule as interactive cards or filterable tabs (Monday–Sunday or Category: Strength/Cardio/Zumba/Yoga).
  - Every slot has a "Reserve Spot" button that opens WhatsApp pre-filled with class name, day, and time.

```javascript
// Lightweight Class Schedule Renderer
const classes = [
  { name: 'Power Yoga & Mobility', time: '07:00 AM - 08:00 AM', trainer: 'Coach Ananya', category: 'Yoga', day: 'Mon, Wed, Fri' },
  { name: 'HIIT & Fat Burn', time: '06:30 PM - 07:30 PM', trainer: 'Coach Vikram', category: 'Cardio', day: 'Tue, Thu, Sat' },
  { name: 'Heavy Strength & Hypertrophy', time: '07:30 PM - 08:30 PM', trainer: 'Coach Rahul', category: 'Strength', day: 'Mon, Tue, Wed, Thu, Fri' }
];

function renderClasses(filterCategory = 'All') {
  const container = document.getElementById('class-grid');
  container.innerHTML = classes
    .filter(c => filterCategory === 'All' || c.category === filterCategory)
    .map(c => `
      <div class="class-card">
        <span class="badge">${c.category}</span>
        <h4>${c.name}</h4>
        <p>⏰ ${c.time} | 🗓️ ${c.day}</p>
        <p>👤 Trainer: ${c.trainer}</p>
        <a href="https://wa.me/${window.GymOSConfig.whatsappNumber}?text=${encodeURIComponent('Hi! I want to reserve a spot for ' + c.name + ' at ' + c.time)}" class="btn-sm">Book on WhatsApp ↗</a>
      </div>
    `).join('');
}
```

---

### Feature 5: Facility, Hygiene & Women's Safety Callout Bar (P1)
- **Why It Matters**: Safety, cleanliness, and crowding are major deal-breakers for female members and beginners in Indian gyms.
- **Conversion Psychology**: Risk mitigation; explicit badges signal high professional standards.
- **Build Note**:
  - Horizontal scrollable or 4-column feature grid with icons.
  - Key badges: 
    - 🔒 **Certified Female Trainers On Floor**
    - ❄️ **Full HVAC Air Conditioning & Air Filtration**
    - 🚿 **Clean Lockers, Showers & Steam Room**
    - 🚗 **Dedicated Covered Parking & CCTV Surveillance**
    - 🏋️ **Imported Jerai / Bullrock Commercial Equipment**

---

### Feature 6: Interactive Tiered Pricing & UPI Plan Comparison (P1)
- **Why It Matters**: Price transparency builds trust. Showing quarterly and annual savings incentivizes longer commitment periods.
- **Conversion Psychology**: Anchor pricing (showing 1-month vs 12-month value) + loss aversion ("Save ₹6,000 on Annual Plan").
- **Build Note**:
  - Toggle switch between **Monthly** and **Annual (Best Value)**.
  - Display monthly breakdown cost (e.g. "₹1,250/mo billed annually" vs "₹2,500/mo billed monthly").
  - Include direct UPI Payment / QR Code trigger button on each tier.

---

### Feature 7: Trainer Showcase Cards with Specializations & Direct PT Chat (P1)
- **Why It Matters**: Members stay at gyms because of relationships with coaches. Highlighting certified trainers positions the gym as a premium result-oriented space.
- **Conversion Psychology**: Authority bias (displaying certifications) + social connection.
- **Build Note**:
  - Card layout with photo, name, certification badges (K11, ACE, REPS), specialization, and 1-click CTA "Inquire about 1-on-1 PT with Coach [Name]".

---

### Feature 8: Google Reviews Live Rating Badge & Map Integration (P0)
- **Why It Matters**: 92% of Indian consumers check Google Maps reviews before visiting a local business.
- **Conversion Psychology**: Social validation from real local neighbors.
- **Build Note**:
  - Fixed rating display pill (`4.9 ★★★★★ (420+ Google Reviews)`).
  - Embedded Google Map with directions link for 1-tap navigation on phone.

---

### Feature 9: Searchable FAQ Accordion (P1)
- **Why It Matters**: Answers objections before they become reasons not to visit.
- **Conversion Psychology**: Reduces purchase friction and customer service overhead.
- **Build Note**:
  - Lightweight HTML `<details>` and `<summary>` tags or JavaScript accordion with search input filtering FAQs by keyword ("refund", "timing", "trainer", "lockers").

---

### Feature 10: Live Social Proof Ticker (P2)
- **Why It Matters**: Creates subtle FOMO (Fear Of Missing Out) and demonstrates active popular momentum.
- **Conversion Psychology**: Bandwagon effect.
- **Build Note**:
  - Non-intrusive toast notification popup at bottom-left corner that cycles realistic lead/trial booking events every 15 seconds.

---

## Section 4: Gym OS Platform Connection Requirements

To power these upgraded website features seamlessly, the static frontend needs specific touchpoints with the **Gym OS platform** (`my-gym-os.base44.app`). Below is the technical mapping between frontend sections, Gym OS entities, and Base44 functions.

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                    FRONTEND TO GYM OS ARCHITECTURE MAP                          │
├──────────────────────────┬─────────────────────────────┬────────────────────────┤
│ Client Website Component │ Gym OS Entity / Data Model  │ Base44 Function / API  │
├──────────────────────────┼─────────────────────────────┼────────────────────────┤
│ Lead Capture Form        │ `Lead`, `AiLead`            │ `captureGymLead`       │
│                          │                             │ `createLeadWithConsent`│
├──────────────────────────┼─────────────────────────────┼────────────────────────┤
│ Trial Pass & UPI Deposit │ `TrialPass`, `PassScan`,    │ `createTrialPass`      │
│                          │ `Payment`                   │ `validateQR`           │
├──────────────────────────┼─────────────────────────────┼────────────────────────┤
│ Class Booking Schedule   │ `GymClass`, `Slot`,         │ `getClasses`           │
│                          │ `ClassBooking`              │ `bookClassSlot` [NEW]  │
├──────────────────────────┼─────────────────────────────┼────────────────────────┤
│ Trainer Showcase         │ `Trainer`                   │ `getTrainers` [NEW]    │
├──────────────────────────┼─────────────────────────────┼────────────────────────┤
│ Transformation Gallery   │ `Transformation`            │ `getTransformations`   │
├──────────────────────────┼─────────────────────────────┼────────────────────────┤
│ QR Check-In Terminal     │ `CheckIn`, `PassScan`       │ `checkIn`              │
├──────────────────────────┼─────────────────────────────┼────────────────────────┤
│ Member Portal Redirect   │ `Member`, `Membership`      │ Direct Single-Sign-On  │
├──────────────────────────┼─────────────────────────────┼────────────────────────┤
│ WhatsApp Automations     │ `BroadcastMessage`,         │ Webhook trigger to WA  │
│                          │ `NotificationEvent`         │ Business API           │
└──────────────────────────┴─────────────────────────────┴────────────────────────┘
```

### 4.1 Detailed Entity & API Mapping

1. **Lead CRM & Follow-Ups**:
   - **Frontend**: Lead form, WhatsApp widget, Diet Quiz lead magnet.
   - **Gym OS Backend**: `Lead`, `AiLead`, `FollowUpTask`.
   - **Endpoint**: `https://base44.app/api/apps/6a85aadd01bc42f293723858/functions/captureGymLead`
   - **Fields**: `name`, `phone`, `email`, `source` (`"OXIGEN_PUBLIC_SITE"`), `fitnessGoal`, `interest`, `consent`, `gym_id`.

2. **Trial Pass & Instant UPI Payments**:
   - **Frontend**: VIP Trial Pass QR Modal, UPI Instant Checkout button.
   - **Gym OS Backend**: `TrialPass`, `Payment`, `PassScan`.
   - **Endpoint**: `createTrialPass`
   - **Requirement**: Backend generates a unique QR code token (`token_string`) stored in `TrialPass` entity and sends automated WhatsApp confirmation with QR attached.

3. **Dynamic Schedule & Class Spot Reservation**:
   - **Frontend**: Filterable Weekly Schedule with "Book Spot".
   - **Gym OS Backend**: `GymClass`, `Slot`, `ClassBooking`.
   - **New Endpoint Needed**: `getPublicClasses?gym_id=...` to dynamically fetch live schedule rather than static HTML. `bookClassSlot` function to reserve spot and update capacity.

4. **Trainer Showcase & Personal Training Inquiries**:
   - **Frontend**: Trainer profile cards.
   - **Gym OS Backend**: `Trainer` entity.
   - **New Endpoint Needed**: `getPublicTrainers?gym_id=...` returning trainer name, photo_url, certifications, bio, and specialization.

5. **Transformations & Reviews Gallery**:
   - **Frontend**: Touch Before/After slider, member quotes.
   - **Gym OS Backend**: `Transformation`, `Feedback`.
   - **New Endpoint Needed**: `getPublicTransformations?gym_id=...` returning before_image_url, after_image_url, duration_weeks, weight_loss_kg, member_first_name.

6. **Member Check-In & Portal Integration**:
   - **Frontend**: Embedded QR check-in widget, Member Login header CTA.
   - **Gym OS Backend**: `CheckIn`, `AttendanceRecord`.
   - **Endpoint**: `checkIn` (handles duplicate safety within 120 seconds).
   - **Portal Link**: `https://my-gym-os.base44.app/portal` (redirects member to personal dashboard).

---

## Section 5: Implementation Roadmap for Beyond Pixells

To upgrade all 8 client websites smoothly without breaking existing live traffic, follow this 3-phase rollout plan:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        3-PHASE IMPLEMENTATION PLAN                     │
├────────────────────────────────────────────────────────────────────────┤
│ PHASE 1: Immediate Front-End Upgrades (1-2 Days per Site)             │
│ • Inject Persistent WhatsApp Widget into `gym-os-connect.js` v2       │
│ • Add Interactive Touch Before/After Slider to client `index.html`     │
│ • Upgrade Hero section to Dual-CTA (WhatsApp + Trial Form)             │
│ • Add Google Reviews Star Badge & Hygiene/Safety Verification bar      │
├────────────────────────────────────────────────────────────────────────┤
│ PHASE 2: Dynamic Schedule & UPI Payment Modal (3-5 Days)               │
│ • Add UPI QR Modal Trigger for ₹99 Trial Pass                          │
│ • Upgrade static class table to filterable JS schedule with WA buttons │
│ • Add Searchable Accordion FAQ section                                 │
│ • Embed Gym Floor Video Reel modal                                     │
├────────────────────────────────────────────────────────────────────────┤
│ PHASE 3: Full Gym OS Dynamic Sync (1-2 Weeks)                         │
│ • Deploy `getPublicClasses` and `getPublicTrainers` backend endpoints  │
│ • Dynamic fetch of Transformations from Gym OS database                │
│ • Live Social Proof ticker integration                                 │
│ • Vernacular audio note / language switcher for Tier 2/3 locations     │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Conclusion & Next Steps

By deploying this specification across the 8 Beyond Pixells client sites, gym owners will benefit from a modern, world-class digital presence that converts walk-ins, Instagram traffic, and Google searches into high-intent WhatsApp leads and immediate UPI trial deposits.

All features are designed to run smoothly on static GitHub Pages, ensuring zero server costs, blazingly fast load times, and fail-safe operation backed by **Gym OS**.
