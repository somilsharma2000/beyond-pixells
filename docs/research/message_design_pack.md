# Beyond Pixells — Brand-Consistent Message Design Pack
**Studio Baseline:** Beyond Pixells ("We build operating systems for local businesses")  
**Flagship Products:** Gym OS (Hero) & Dentist OS  
**Design System Core:** Dark Premium (Canvas `#08090C`, Card `#12141A`, Hero Gradient `#FF3B30` to `#FF7A00`, Electric Cyan `#00F2FE`, Display: Space Grotesk, Body: Plus Jakarta Sans)  
**Version:** 1.0 (Production-Ready Engineering & Copy Spec)

---

## SECTION 1: DARK BRAND HTML EMAIL DESIGN SYSTEM & TOKEN MAPPING

### 1.1 Technical Constraints & Cross-Client Engineering Rules

Transactional emails in dark mode present significant rendering challenges across legacy and modern email clients. Below are the mandatory technical constraints and rendering rules established for Beyond Pixells emails.

#### 1. The 600px Max-Width Rule & Centered Layout Container
- **Standard Width:** All structural tables must enforce a maximum width of `600px`.
- **Outer Wrapper Structure:** The email body must be wrapped in a 100% width table (`background-color: #08090C;`) with an inner table centered using `margin: 0 auto; width: 100%; max-width: 600px;`.
- **MSO Fixed Width Fallback:** Outlook desktop on Windows ignores `max-width`. An explicit MSO conditional table wrapper must lock the width to `600px`:
  ```html
  <!--[if mso]>
  <table role="presentation" align="center" width="600" border="0" cellspacing="0" cellpadding="0">
  <tr>
  <td width="600">
  <![endif]-->
  ```

#### 2. Table-Based Layout Engine
- **No CSS Grid / Flexbox:** Email clients (especially Outlook 2016/2019/365 desktop and webmail variants) do not support CSS Grid or Flexbox.
- **Table Primitive Rules:** Every visual container, row, column, and card must use `<table>`, `<tr>`, and `<td>`.
- **Attribute Resets:** Every `<table>` element must explicitly set `cellpadding="0" cellspacing="0" border="0" role="presentation" style="margin:0; padding:0; width:100%;"`.
- **Explicit Cell Spacing:** Vertical spacing between blocks must use empty `<td height="24" style="font-size:0px; line-height:0px;">&nbsp;</td>` rows or inline `padding-top` / `padding-bottom` on table cells.

#### 3. Email Client Dark Mode Behavior & Forced Inversion Fixes
Email clients handle dark backgrounds in three distinct ways:

| Email Client | Dark Mode Mechanics | Mitigation & Code Requirements |
| :--- | :--- | :--- |
| **Apple Mail (iOS / macOS)** | Native Dark Mode support. Preserves explicit CSS colors on `<body>` and `<td>`. | Declare `<meta name="color-scheme" content="light dark">` and `<meta name="supported-color-schemes" content="light dark">`. Supports `@media (prefers-color-scheme: dark)`. |
| **Gmail (Web & Mobile Apps)** | Partial / Forced Inversion. Automatically converts bright colors and shifts pure black (`#000000`) or white (`#FFFFFF`) to inverted shades. | **Never use pure white or pure black.** Use dark obsidian `#08090C` for background and off-white `#F8FAFC` for text. Use `u + .body .class` or data-attribute hacks for targeting Gmail mobile overrides. |
| **Outlook (Desktop Windows Word Engine)** | Complete Forced Inversion. Flips background and text colors forcefully, destroying contrast and gradient backgrounds. | Include MSO meta tags. Avoid background gradient images without solid background-color fallbacks. Use VML markup for buttons and header banners. |

##### Meta Tags for Dark Mode Recognition:
```html
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<style>
  :root {
    color-scheme: light dark;
    supported-color-schemes: light dark;
  }
</style>
```

#### 4. Bulletproof Buttons (Outlook + Mobile Compatible)
Because Microsoft Outlook Desktop ignores `border-radius`, CSS gradients, and `padding` on `<a>` tags, CTA buttons require a **VML (Vector Markup Language)** wrapper combined with a padded block-level `<a>` tag for modern clients.

##### Bulletproof Button Standard:
```html
<!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://beyondpixells.com" style="height:48px;v-text-anchor:middle;width:240px;" arcsize="17%" stroke="f" fillcolor="#FF3B30">
  <w:anchorlock/>
  <center style="color:#ffffff;font-family:sans-serif;font-size:16px;font-weight:bold;">Confirm Appointment</center>
</v:roundrect>
<![endif]-->
<!--[if !mso]><!-->
<a href="https://beyondpixells.com" target="_blank" style="background-color:#FF3B30; background-image: linear-gradient(135deg, #FF3B30 0%, #FF7A00 100%); border-radius:8px; color:#FFFFFF; display:inline-block; font-family:'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size:15px; font-weight:700; line-height:48px; text-align:center; text-decoration:none; width:240px; -webkit-text-size-adjust:none;">Confirm Appointment &rarr;</a>
<!--<![endif]-->
```

#### 5. Web-Safe & Stackable Font System
Custom Google Fonts (`Space Grotesk`, `Plus Jakarta Sans`) load in Apple Mail, Thunderbird, and iOS Mail, but default to system fallbacks in Gmail and Outlook.

- **Display/Headings Font Stack:** `'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`
- **Body Text Font Stack:** `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`
- **Monospace/Data/UPI Code Stack:** `'SF Mono', Consolas, 'Courier New', monospace`

#### 6. Image Blocking & Accessibility Fallbacks
- **Explicit Dimensions:** Every `<img>` tag must explicitly declare both HTML attributes (`width="..." height="..."`) and inline CSS styles (`style="display:block; width:...px; height:...px; outline:none; text-decoration:none;"`).
- **Styled Alt Text:** Alt text must be styled with explicit font-size, color (`#9CA3AF`), and background color so that if images are blocked, the text remains legible and layout structural height is maintained.
- **Logo Safety:** Logos should use high-contrast vectors on transparent backgrounds with an optional subtle light stroke or off-dark background container (`#12141A`).

#### 7. SaaS Brand Benchmark Analysis (Linear, Stripe, Notion, Figma)
- **Linear:** High-contrast obsidian canvas (`#08090C`), 1px dark borders (`#27272A`), high typography contrast, status badges with subtle colored glows, extreme layout minimalism.
- **Stripe:** Exceptional key-value structural grids, 14px crisp body copy, clear visual hierarchy, distinct emerald/coral transaction pills.
- **Notion:** Direct human phrasing, card-based sectioning, simple 2-column key-value tables.
- **Figma:** Glowing accent header borders, clean dark grey cards (`#12141A`), prominent rounded CTA buttons.

---

### 1.2 Web-to-Email Design Token Mapping Table

| Web Token Name | Web Hex / Value | Email Safe Equivalent | Email Implementation Rule |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | `#08090C` | `#08090C` | Applied to `<body>` and outermost wrapper `<table>`. Prevents harsh white flickering during load. |
| **Card / Surface BG** | `#12141A` | `#12141A` | Applied to inner container `<td>` cards. Provides 12% elevation separation from canvas. |
| **Elevated Surface** | `#1A1D26` | `#1A1D26` | Used for key-value highlight blocks, code boxes, and receipt summary headers. |
| **Primary Hero Accent** | `#FF3B30` | `#FF3B30` | Solid background fallback for VML buttons, primary text highlights, and badge borders. |
| **Hero Gradient** | `linear-gradient(135deg, #FF3B30 0%, #FF7A00 100%)` | Solid `#FF3B30` fallback + inline CSS gradient for web-capable clients. | Gradient applied via CSS background-image; solid `#FF3B30` background-color acts as Outlook/Gmail fallback. |
| **Secondary Accent** | `#FF7A00` | `#FF7A00` | Used for secondary warnings, urgent renewal tags, and gradient end-stops. |
| **Electric Cyan** | `#00F2FE` | `#00F2FE` | High-tech accent color for live status indicators, active time slots, and text links. |
| **Primary Text** | `#FFFFFF` | `#F8FAFC` | Slightly off-white to prevent Gmail auto-inversion triggers while maintaining 15:1 contrast ratio. |
| **Muted Text** | `#9CA3AF` | `#8E95A5` | Secondary text, captions, and table section labels. Enforces legibility on `#12141A`. |
| **Border / Divider** | `#27272A` | `#232733` | 1px solid borders on card containers and horizontal dividers (`<hr>` replaced with `<td height="1" bgcolor="#232733">`). |
| **Success Status** | `#10B981` | `#10B981` | Emerald pill badge background (`rgba(16, 185, 129, 0.15)`) with `#10B981` text for confirmed appointments and paid invoices. |
| **Warning Status** | `#F59E0B` | `#F59E0B` | Amber pill badge for pending payments and expiring memberships. |

---

## SECTION 2: WHATSAPP BUSINESS MESSAGE TEMPLATE LIBRARY

### 2.1 WhatsApp Engineering Rules & Meta API Specifications

WhatsApp Business API templates follow strict formatting guidelines enforced by Meta's automated approval system.

#### 1. Text Formatting Syntax
- **`*bold*`**: Used for names, dates, amounts, times, and key callouts.
- **`_italic_`**: Used for subtle secondary notes, coaching titles, or gentle reminders.
- **`~strikethrough~`**: Used for slashed pricing during renewals/promotions (e.g., `~₹3,000~ ₹1,999`).
- **`` `monospace` ``**: Used for UPI IDs, OTPs, discount promo codes, and invoice numbers.

#### 2. Emoji Usage System
- Limit to **1 to 3 emojis per message block**.
- Must be contextual: ⚡ (energy/instant), 🏋️‍♂️ (gym), 🦷 (dental), 💳 (payment/UPI), 📍 (location), ⏰ (time/reminder), 🎉 (celebration).

#### 3. Meta Template Structural Limits
- **Header:** Optional. Text (max 60 characters, supports 1 dynamic variable `{{1}}`) OR Media (Image, PDF Document, Video).
- **Body:** Required. Maximum **1,024 characters**. Variables specified as `{{1}}`, `{{2}}`, `{{3}}`, etc.
- **Footer:** Optional. Maximum **60 characters**. Plain text only (no formatting, no variables).
- **Interactive Buttons:**
  - *Quick Reply:* Up to 3 buttons (max 25 characters per button label).
  - *Call-to-Action (CTA):* Up to 2 buttons — e.g., 1 Dynamic URL (`https://gym.link/pay/{{1}}`) + 1 Phone Call (`+91...`).

#### 4. Brand Tone Guidelines
- **Gym OS:** High energy, direct, motivating, tech-driven, warm. ("Fit hai boss!", "Crush your goals").
- **Dentist OS:** Reassuring, professional, hyper-precise, gentle, premium. ("Your smile, engineered for perfection").
- **Language Blend:** Clean professional English with light, natural Hinglish touches appropriate for urban Indian local businesses.

---

### 2.2 GYM OS Message Template Library (7 Message Types)

```
================================================================================
GYM OS TEMPLATE 1: LEAD FOLLOW-UP (INQUIRY RESPONSE)
================================================================================
Meta Category: MARKETING
Header Type: TEXT

[HEADER]
⚡ Welcome to {{1}}!

[BODY]
Hi *{{2}}*! 👋

Thanks for checking out *{{1}}*. Whether you're aiming to drop body fat, build strength, or level up your fitness, we’ve got the ultimate setup & training tech ready for you.

🏋️ *What’s included in your Free VIP Pass:*
• 1-on-1 Fitness & InBody Scan Assessment
• 1-Day Full Facility & Gear Access
• Custom Goal Roadmap with a Certified Head Coach

Ready to experience India's top smart gym setup? Tap below to lock in your free trial slot today!

[FOOTER]
Gym OS • Powered by Beyond Pixells

[BUTTONS]
• CTA (URL): Book VIP Trial Slot -> https://gymos.in/trial/{{1}}
• Quick Reply: Ask a Question

--------------------------------------------------------------------------------
READY TO SHIP EXAMPLE (GYM OS 1):
--------------------------------------------------------------------------------
⚡ Welcome to Gold's Gym Indiranagar!

Hi *Rahul*! 👋

Thanks for checking out *Gold's Gym Indiranagar*. Whether you're aiming to drop body fat, build strength, or level up your fitness, we’ve got the ultimate setup & training tech ready for you.

🏋️ *What’s included in your Free VIP Pass:*
• 1-on-1 Fitness & InBody Scan Assessment
• 1-Day Full Facility & Gear Access
• Custom Goal Roadmap with a Certified Head Coach

Ready to experience India's top smart gym setup? Tap below to lock in your free trial slot today!

Gym OS • Powered by Beyond Pixells
[Button: Book VIP Trial Slot]  [Button: Ask a Question]
================================================================================
```

```
================================================================================
GYM OS TEMPLATE 2: TRIAL BOOKING CONFIRMATION
================================================================================
Meta Category: UTILITY
Header Type: TEXT

[HEADER]
🎟️ Trial Slot Confirmed!

[BODY]
Hey *{{1}}*, your VIP Trial Pass at *{{2}}* is locked & loaded! 🔥

📅 *Date:* {{3}}
⏰ *Time:* {{4}}
📍 *Location:* {{5}}
👤 *Assigned Coach:* Coach {{6}}

🎒 *Quick Checklist for Your Visit:*
• Comfortable workout wear & indoor sports shoes
• Personal water bottle & workout towel
• Please arrive 10 minutes early for swift check-in

See you on the floor! Fit hai boss! 💪

[FOOTER]
Tap below for instant navigation

[BUTTONS]
• CTA (URL): Open Maps Directions -> https://maps.google.com/?q={{1}}
• Quick Reply: Reschedule Slot

--------------------------------------------------------------------------------
READY TO SHIP EXAMPLE (GYM OS 2):
--------------------------------------------------------------------------------
🎟️ Trial Slot Confirmed!

Hey *Ananya*, your VIP Trial Pass at *Cult Fit Koramangala* is locked & loaded! 🔥

📅 *Date:* Monday, 28th Sept
⏰ *Time:* 07:30 AM
📍 *Location:* 80 Feet Road, Koramangala 4th Block
👤 *Assigned Coach:* Coach Vikram

🎒 *Quick Checklist for Your Visit:*
• Comfortable workout wear & indoor sports shoes
• Personal water bottle & workout towel
• Please arrive 10 minutes early for swift check-in

See you on the floor! Fit hai boss! 💪

Tap below for instant navigation
[Button: Open Maps Directions]  [Button: Reschedule Slot]
================================================================================
```

```
================================================================================
GYM OS TEMPLATE 3: MEMBERSHIP RENEWAL REMINDER
================================================================================
Meta Category: UTILITY
Header Type: TEXT

[HEADER]
⏳ Membership Renewal Due: {{1}}

[BODY]
Hi *{{1}}*! 🏋️‍♂️

Your *{{2}}* membership at *{{3}}* expires on *{{4}}* (in {{5}} days).

Don't let your workout momentum slip! Renew now and lock in your **Early Renewal Perk**:
🎁 *Exclusive Bonus:* {{6}}

💳 *Renewal Amount:* ₹{{7}}

Keep your workout streak active! Tap below to settle instantly via UPI / Card.

[FOOTER]
Gym OS Auto-Renewal System

[BUTTONS]
• CTA (URL): Pay & Renew via UPI -> https://gymos.in/renew/{{1}}
• Quick Reply: Remind Me Tomorrow

--------------------------------------------------------------------------------
READY TO SHIP EXAMPLE (GYM OS 3):
--------------------------------------------------------------------------------
⏳ Membership Renewal Due: Gold's Gym

Hi *Karan*! 🏋️‍♂️

Your *Annual VIP Fitness* membership at *Gold's Gym Indiranagar* expires on *30th September* (in 4 days).

Don't let your workout momentum slip! Renew now and lock in your **Early Renewal Perk**:
🎁 *Exclusive Bonus:* Complimentary 1-Month Extension + Free InBody Composition Scan

💳 *Renewal Amount:* ₹18,500

Keep your workout streak active! Tap below to settle instantly via UPI / Card.

Gym OS Auto-Renewal System
[Button: Pay & Renew via UPI]  [Button: Remind Me Tomorrow]
================================================================================
```

```
================================================================================
GYM OS TEMPLATE 4: PAYMENT DUE / UPI COLLECTION
================================================================================
Meta Category: UTILITY
Header Type: TEXT

[HEADER]
💳 Payment Invoice - {{1}}

[BODY]
Hi *{{1}}*, quick update regarding your pending dues at *{{2}}*.

📌 *Invoice #:* `{{3}}`
💰 *Amount Due:* ₹{{4}}
🗓️ *Due Date:* {{5}}

You can settle this payment in 10 seconds via Google Pay, PhonePe, Paytm, or BHIM UPI using the link below.

⚡ *Direct UPI ID:* `{{6}}` (Tap to copy)

Once paid, your GST invoice & digital entry pass will be auto-generated instantly. Thank you!

[FOOTER]
Encrypted UPI Payment Gateway • Gym OS

[BUTTONS]
• CTA (URL): Pay Now via UPI -> https://gymos.in/pay/{{1}}
• Quick Reply: Already Paid

--------------------------------------------------------------------------------
READY TO SHIP EXAMPLE (GYM OS 4):
--------------------------------------------------------------------------------
💳 Payment Invoice - Gold's Gym

Hi *Siddharth*, quick update regarding your pending dues at *Gold's Gym Indiranagar*.

📌 *Invoice #:* `INV-2026-8891`
💰 *Amount Due:* ₹4,500
🗓️ *Due Date:* Today, 26th Sept

You can settle this payment in 10 seconds via Google Pay, PhonePe, Paytm, or BHIM UPI using the link below.

⚡ *Direct UPI ID:* `goldsgym@icici` (Tap to copy)

Once paid, your GST invoice & digital entry pass will be auto-generated instantly. Thank you!

Encrypted UPI Payment Gateway • Gym OS
[Button: Pay Now via UPI]  [Button: Already Paid]
================================================================================
```

```
================================================================================
GYM OS TEMPLATE 5: BIRTHDAY WISHES
================================================================================
Meta Category: MARKETING
Header Type: TEXT

[HEADER]
🎉 Happy Birthday {{1}}! 🎂

[BODY]
Happy Birthday *{{1}}*! 🥳🎂

The entire squad at *{{2}}* wishes you an incredible year ahead packed with gains, peak energy, and new Personal Bests!

🎁 *Your Birthday Gift from Us:*
We've credited **{{3}}** directly to your account!

Show this message at the front desk next time you walk in to claim your reward. Have an extraordinary day! 🎈

[FOOTER]
Gym OS Community Perks

[BUTTONS]
• Quick Reply: Thank You! 🙏
• Quick Reply: Claim Birthday Perk

--------------------------------------------------------------------------------
READY TO SHIP EXAMPLE (GYM OS 5):
--------------------------------------------------------------------------------
🎉 Happy Birthday Priya! 🎂

Happy Birthday *Priya*! 🥳🎂

The entire squad at *Nitro Fitness Bandra* wishes you an incredible year ahead packed with gains, peak energy, and new Personal Bests!

🎁 *Your Birthday Gift from Us:*
We've credited **1 Free Personal Training Session + Post-Workout Protein Smoothie Voucher** directly to your account!

Show this message at the front desk next time you walk in to claim your reward. Have an extraordinary day! 🎈

Gym OS Community Perks
[Button: Thank You! 🙏]  [Button: Claim Birthday Perk]
================================================================================
```

```
================================================================================
GYM OS TEMPLATE 6: WIN-BACK / INACTIVE MEMBER RE-ENGAGEMENT
================================================================================
Meta Category: MARKETING
Header Type: TEXT

[HEADER]
🔥 We miss you at {{1}}, {{2}}!

[BODY]
Hey *{{1}}*, we noticed you haven't checked in at *{{2}}* for {{3}} days! 🏃‍♂️

Life gets busy, but your fitness goals are right where you left them. We’d love to welcome you back on the floor.

⚡ *Your Comeback Incentive:*
Reactivate this week and get **{{4}}% OFF** your renewal + 1 Complimentary Fitness Assessment!

🎟️ *Use Promo Code:* `{{5}}`

Ready to restart your streak? Tap below to lock in this special offer!

[FOOTER]
Offer valid for the next 48 hours only

[BUTTONS]
• CTA (URL): Reactivate Membership -> https://gymos.in/comeback/{{1}}
• Quick Reply: Talk to Gym Manager

--------------------------------------------------------------------------------
READY TO SHIP EXAMPLE (GYM OS 6):
--------------------------------------------------------------------------------
🔥 We miss you at Nitro Fitness, Rohan!

Hey *Rohan*, we noticed you haven't checked in at *Nitro Fitness Bandra* for 21 days! 🏃‍♂️

Life gets busy, but your fitness goals are right where you left them. We’d love to welcome you back on the floor.

⚡ *Your Comeback Incentive:*
Reactivate this week and get **20% OFF** your renewal + 1 Complimentary Fitness Assessment!

🎟️ *Use Promo Code:* `COMEBACK20`

Ready to restart your streak? Tap below to lock in this special offer!

Offer valid for the next 48 hours only
[Button: Reactivate Membership]  [Button: Talk to Gym Manager]
================================================================================
```

```
================================================================================
GYM OS TEMPLATE 7: CLASS REMINDERS (HIIT / SPIN / YOGA / CROSSFIT)
================================================================================
Meta Category: UTILITY
Header Type: TEXT

[HEADER]
⏰ Class Reminder: {{1}}

[BODY]
Hi *{{1}}*! ⚡

Quick reminder that your booked class **{{2}}** starts in {{3}} minutes at *{{4}}*!

🏋️ *Session Details:*
• *Coach:* Coach {{5}}
• *Studio Room:* {{6}}
• *Time:* {{7}}

Please arrive 5-10 minutes early to grab your spot and warm up. Let's crush it! 💪

[FOOTER]
Gym OS Live Class Dispatch

[BUTTONS]
• Quick Reply: I'm On My Way! 🚀
• Quick Reply: Cancel Reservation

--------------------------------------------------------------------------------
READY TO SHIP EXAMPLE (GYM OS 7):
--------------------------------------------------------------------------------
⏰ Class Reminder: CrossFit HIIT

Hi *Aakash*! ⚡

Quick reminder that your booked class **CrossFit HIIT** starts in 45 minutes at *Cult Fit Koramangala*!

🏋️ *Session Details:*
• *Coach:* Coach Tarun
• *Studio Room:* Main Turf Arena
• *Time:* 06:30 PM Today

Please arrive 5-10 minutes early to grab your spot and warm up. Let's crush it! 💪

Gym OS Live Class Dispatch
[Button: I'm On My Way! 🚀]  [Button: Cancel Reservation]
================================================================================
```

---

### 2.3 DENTIST OS Message Template Library (6 Message Types)

```
================================================================================
DENTIST OS TEMPLATE 1: APPOINTMENT CONFIRMATION
================================================================================
Meta Category: UTILITY
Header Type: TEXT

[HEADER]
🦷 Appointment Confirmed - {{1}}

[BODY]
Hello *{{1}}*! 👋

Your dental consultation at *{{2}}* has been successfully confirmed.

📋 *Appointment Details:*
• *Doctor:* Dr. {{3}}
• *Procedure:* {{4}}
• *Date & Time:* {{5}} at {{6}}
• *Clinic Address:* {{7}}

If you need to reschedule, please notify us at least 4 hours in advance. We look forward to welcoming you!

[FOOTER]
Dentist OS • Advanced Clinical Care

[BUTTONS]
• CTA (URL): Add to Google Calendar -> https://dentistos.in/cal/{{1}}
• Quick Reply: Reschedule Slot

--------------------------------------------------------------------------------
READY TO SHIP EXAMPLE (DENTIST OS 1):
--------------------------------------------------------------------------------
🦷 Appointment Confirmed - Clove Dental

Hello *Meera*! 👋

Your dental consultation at *Clove Dental Powai* has been successfully confirmed.

📋 *Appointment Details:*
• *Doctor:* Dr. Aditi Sharma
• *Procedure:* Routine Cleaning & Teeth Whitening
• *Date & Time:* Saturday, 26th Sept at 04:00 PM
• *Clinic Address:* Shop 12, Galleria Shopping Complex, Powai

If you need to reschedule, please notify us at least 4 hours in advance. We look forward to welcoming you!

Dentist OS • Advanced Clinical Care
[Button: Add to Google Calendar]  [Button: Reschedule Slot]
================================================================================
```

```
================================================================================
DENTIST OS TEMPLATE 2: 2-HOUR REMINDER WITH LOCATION & PREP
================================================================================
Meta Category: UTILITY
Header Type: TEXT

[HEADER]
📍 See You Soon! Appointment in 2 Hours

[BODY]
Hi *{{1}}*, this is a gentle reminder for your dental appointment today at *{{2}}*.

⏰ *Time:* {{3}} (In 2 Hours)
👨‍⚕️ *Doctor:* Dr. {{4}}
📍 *Clinic Address:* {{5}}

🚗 *Parking & Arrival Note:*
Dedicated patient parking is available at the front entrance. Please bring any past dental records or X-rays if available.

Tap below for turn-by-turn navigation!

[FOOTER]
Dentist OS Navigation Support

[BUTTONS]
• CTA (URL): Open Google Maps -> https://maps.google.com/?q={{1}}
• Quick Reply: Running 10 Mins Late

--------------------------------------------------------------------------------
READY TO SHIP EXAMPLE (DENTIST OS 2):
--------------------------------------------------------------------------------
📍 See You Soon! Appointment in 2 Hours

Hi *Vikram*, this is a gentle reminder for your dental appointment today at *Clove Dental Powai*.

⏰ *Time:* 04:00 PM (In 2 Hours)
👨‍⚕️ *Doctor:* Dr. Aditi Sharma
📍 *Clinic Address:* Shop 12, Galleria Shopping Complex, Powai

🚗 *Parking & Arrival Note:*
Dedicated patient parking is available at the front entrance. Please bring any past dental records or X-rays if available.

Tap below for turn-by-turn navigation!

Dentist OS Navigation Support
[Button: Open Google Maps]  [Button: Running 10 Mins Late]
================================================================================
```

```
================================================================================
DENTIST OS TEMPLATE 3: POST-TREATMENT CARE INSTRUCTIONS
================================================================================
Meta Category: UTILITY
Header Type: TEXT

[HEADER]
🩺 Post-Care Guidelines: {{1}}

[BODY]
Hi *{{1}}*, thank you for visiting *{{2}}* today!

Here are your personalized recovery guidelines following your *{{3}}* procedure:

📌 *Essential Care Instructions:*
1. Avoid hot, crunchy, or spicy foods for the next {{4}} hours.
2. Do not spit vigorously or drink through a straw today.
3. Take prescribed medication (*{{5}}*) after meals as directed.

⚠️ In case of severe discomfort or swelling, tap below to contact our emergency hotline immediately.

[FOOTER]
Your Health & Comfort First • Dentist OS

[BUTTONS]
• CTA (Phone): Call Emergency Desk -> +919876543210
• Quick Reply: Download Prescription PDF

--------------------------------------------------------------------------------
READY TO SHIP EXAMPLE (DENTIST OS 3):
--------------------------------------------------------------------------------
🩺 Post-Care Guidelines: Root Canal Treatment

Hi *Neha*, thank you for visiting *Clove Dental Powai* today!

Here are your personalized recovery guidelines following your *Root Canal Phase 1* procedure:

📌 *Essential Care Instructions:*
1. Avoid hot, crunchy, or spicy foods for the next 24 hours.
2. Do not spit vigorously or drink through a straw today.
3. Take prescribed medication (*Zerodol-SP & Amoxyclav*) after meals as directed.

⚠️ In case of severe discomfort or swelling, tap below to contact our emergency hotline immediately.

Your Health & Comfort First • Dentist OS
[Button: Call Emergency Desk]  [Button: Download Prescription PDF]
================================================================================
```

```
================================================================================
DENTIST OS TEMPLATE 4: MILESTONE PAYMENT REQUEST
================================================================================
Meta Category: UTILITY
Header Type: TEXT

[HEADER]
🧾 Milestone Invoice - {{1}}

[BODY]
Dear *{{1}}*,

Thank you for completing Stage {{2}} of your treatment plan (*{{3}}*) at *{{4}}*.

💳 *Billing Summary:*
• *Stage:* Stage {{2}} of {{5}}
• *Milestone Amount:* ₹{{6}}
• *Status:* Awaiting Payment

You can settle this milestone bill conveniently via UPI, Credit/Debit Card, or Netbanking using the link below.

⚡ *Direct UPI ID:* `{{7}}` (Tap to copy)

[FOOTER]
Dentist OS Digital Billing

[BUTTONS]
• CTA (URL): Pay Milestone Invoice -> https://dentistos.in/pay/{{1}}
• Quick Reply: Request Itemized Bill

--------------------------------------------------------------------------------
READY TO SHIP EXAMPLE (DENTIST OS 4):
--------------------------------------------------------------------------------
🧾 Milestone Invoice - Invisalign Treatment

Dear *Suresh*,

Thank you for completing Stage 2 of your treatment plan (*Invisalign Alignment*) at *Clove Dental Powai*.

💳 *Billing Summary:*
• *Stage:* Stage 2 of 4
• *Milestone Amount:* ₹25,000
• *Status:* Awaiting Payment

You can settle this milestone bill conveniently via UPI, Credit/Debit Card, or Netbanking using the link below.

⚡ *Direct UPI ID:* `clovedental@hdfcbank` (Tap to copy)

Dentist OS Digital Billing
[Button: Pay Milestone Invoice]  [Button: Request Itemized Bill]
================================================================================
```

```
================================================================================
DENTIST OS TEMPLATE 5: 6-MONTH RECALL / PREVENTIVE CHECK-UP
================================================================================
Meta Category: MARKETING
Header Type: TEXT

[HEADER]
✨ Time for Your 6-Month Dental Recall!

[BODY]
Hello *{{1}}*! 👋

It’s been 6 months since your last dental visit at *{{2}}*!

Routine preventive check-ups & cleanings eliminate hidden plaque, prevent cavities, and keep your smile healthy and radiant.

🎁 *Preventive Loyalty Perk:*
Book your 6-month recall this week and enjoy a complimentary **Ultrasonic Polish & Sensitivity Shield treatment**!

Tap below to select a convenient morning or evening slot.

[FOOTER]
Preventive Oral Health • Dentist OS

[BUTTONS]
• CTA (URL): Select Recall Slot -> https://dentistos.in/recall/{{1}}
• Quick Reply: Remind Me Next Month

--------------------------------------------------------------------------------
READY TO SHIP EXAMPLE (DENTIST OS 5):
--------------------------------------------------------------------------------
✨ Time for Your 6-Month Dental Recall!

Hello *Pooja*! 👋

It’s been 6 months since your last dental visit at *Clove Dental Powai*!

Routine preventive check-ups & cleanings eliminate hidden plaque, prevent cavities, and keep your smile healthy and radiant.

🎁 *Preventive Loyalty Perk:*
Book your 6-month recall this week and enjoy a complimentary **Ultrasonic Polish & Sensitivity Shield treatment**!

Tap below to select a convenient morning or evening slot.

Preventive Oral Health • Dentist OS
[Button: Select Recall Slot]  [Button: Remind Me Next Month]
================================================================================
```

```
================================================================================
DENTIST OS TEMPLATE 6: REVIEW REQUEST (GOOGLE / PRACTO)
================================================================================
Meta Category: MARKETING
Header Type: TEXT

[HEADER]
🌟 How was your visit today, {{1}}?

[BODY]
Hi *{{1}}*! 😊

We hope you had a comfortable and pleasant experience with Dr. {{2}} at *{{3}}*.

Local patients in our community rely heavily on authentic patient experiences when choosing a dental clinic. Would you take 30 seconds to share your feedback on Google?

Your review truly helps our team keep raising the bar for patient care! Thank you! 🙏

[FOOTER]
Dentist OS Patient Experience

[BUTTONS]
• CTA (URL): Leave Google Review -> https://g.page/r/{{1}}/review
• Quick Reply: Private Feedback

--------------------------------------------------------------------------------
READY TO SHIP EXAMPLE (DENTIST OS 6):
--------------------------------------------------------------------------------
🌟 How was your visit today, Rajesh?

Hi *Rajesh*! 😊

We hope you had a comfortable and pleasant experience with Dr. Aditi Sharma at *Clove Dental Powai*.

Local patients in our community rely heavily on authentic patient experiences when choosing a dental clinic. Would you take 30 seconds to share your feedback on Google?

Your review truly helps our team keep raising the bar for patient care! Thank you! 🙏

Dentist OS Patient Experience
[Button: Leave Google Review]  [Button: Private Feedback]
================================================================================
```

---

## SECTION 3: TRANSACTIONAL HTML EMAIL SKELETON (DARK PREMIUM)

Below is the production-ready, bulletproof HTML email template for **Gym OS / Dentist OS Transactional Notifications**. It implements all dark mode constraints, nested table grids, VML buttons for Outlook, inline CSS, and Beyond Pixells token palette (`#08090C`, `#12141A`, `#FF3B30`, `#00F2FE`).

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="light dark" />
  <meta name="supported-color-schemes" content="light dark" />
  <title>Appointment Confirmed - Beyond Pixells OS</title>
  <!--[if gte mso 9]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  <style type="text/css">
    /* IMPORT WEB FONTS FOR SUPPORTED CLIENTS */
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap');
    
    /* CLIENT RESETS */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; background-color: #08090C; }
    
    /* DARK MODE STYLES & OVERRIDES */
    :root { color-scheme: light dark; supported-color-schemes: light dark; }
    @media (prefers-color-scheme: dark) {
      body { background-color: #08090C !important; }
      .email-container { background-color: #12141A !important; }
      .text-primary { color: #F8FAFC !important; }
      .text-secondary { color: #8E95A5 !important; }
    }
    
    /* MOBILE RESPONSIVE RULES */
    @media screen and (max-width: 600px) {
      .email-wrapper { width: 100% !important; padding-left: 12px !important; padding-right: 12px !important; }
      .card-padding { padding: 24px 20px !important; }
      .mobile-column { display: block !important; width: 100% !important; }
      .cta-button { width: 100% !important; text-align: center !important; }
    }
  </style>
</head>
<body bgcolor="#08090C" style="margin: 0; padding: 0; background-color: #08090C; -webkit-font-smoothing: antialiased;">

  <!-- HIDDEN PREHEADER TEXT -->
  <div style="display: none; font-size: 1px; color: #08090C; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    Your appointment with Dr. Aditi Sharma is confirmed for Saturday, 26th Sept at 04:00 PM. View location & details inside.
    &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <!-- OUTER BACKGROUND TABLE -->
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#08090C" style="background-color: #08090C;">
    <tr>
      <td align="center" style="padding: 40px 10px 40px 10px;">
        
        <!-- MSO CONDITIONAL 600px WRAPPER -->
        <!--[if mso]>
        <table role="presentation" align="center" width="600" border="0" cellspacing="0" cellpadding="0">
        <tr>
        <td width="600">
        <![endif]-->

        <!-- MAIN CONTAINER CARD -->
        <table role="presentation" class="email-wrapper" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #12141A; border: 1px solid #232733; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
          
          <!-- TOP GRADIENT ACCENT BAR -->
          <tr>
            <td height="4" style="background-color: #FF3B30; background-image: linear-gradient(90deg, #FF3B30 0%, #FF7A00 50%, #00F2FE 100%); font-size: 0px; line-height: 0px;">&nbsp;</td>
          </tr>

          <!-- HEADER ROW: LOGO + BRAND -->
          <tr>
            <td class="card-padding" style="padding: 32px 32px 24px 32px; border-bottom: 1px solid #1F2430;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="left" valign="middle">
                    <span style="font-family: 'Space Grotesk', -apple-system, sans-serif; font-size: 20px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.5px;">
                      DENTIST <span style="color: #00F2FE;">OS</span>
                    </span>
                  </td>
                  <td align="right" valign="middle">
                    <span style="font-family: 'Plus Jakarta Sans', -apple-system, sans-serif; font-size: 11px; font-weight: 700; color: #10B981; background-color: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px;">
                      ● CONFIRMED
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- BODY CONTENT -->
          <tr>
            <td class="card-padding" style="padding: 32px 32px 32px 32px;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                
                <!-- SALUTATION & TITLE -->
                <tr>
                  <td>
                    <h1 class="text-primary" style="font-family: 'Space Grotesk', -apple-system, sans-serif; font-size: 24px; font-weight: 700; color: #F8FAFC; margin: 0 0 12px 0; line-height: 1.3;">
                      Your Appointment is Locked in! 🦷
                    </h1>
                    <p class="text-secondary" style="font-family: 'Plus Jakarta Sans', -apple-system, sans-serif; font-size: 15px; font-weight: 400; color: #8E95A5; margin: 0 0 28px 0; line-height: 1.6;">
                      Hi <strong style="color: #F8FAFC;">Meera</strong>, we're looking forward to seeing you at <strong style="color: #F8FAFC;">Clove Dental Powai</strong>. Here are your consultation details:
                    </p>
                  </td>
                </tr>

                <!-- KEY DETAILS CARD -->
                <tr>
                  <td>
                    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #1A1D26; border: 1px solid #232733; border-radius: 12px;">
                      <tr>
                        <td style="padding: 20px 24px;">
                          <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                            
                            <!-- ITEM 1: DOCTOR -->
                            <tr>
                              <td width="35%" style="padding-bottom: 12px; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 13px; color: #8E95A5; font-weight: 500;">Attending Doctor</td>
                              <td width="65%" style="padding-bottom: 12px; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; color: #F8FAFC; font-weight: 600;">Dr. Aditi Sharma</td>
                            </tr>
                            
                            <!-- ITEM 2: PROCEDURE -->
                            <tr>
                              <td width="35%" style="padding-bottom: 12px; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 13px; color: #8E95A5; font-weight: 500;">Procedure</td>
                              <td width="65%" style="padding-bottom: 12px; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; color: #00F2FE; font-weight: 600;">Teeth Whitening & Clean</td>
                            </tr>

                            <!-- ITEM 3: DATE & TIME -->
                            <tr>
                              <td width="35%" style="padding-bottom: 12px; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 13px; color: #8E95A5; font-weight: 500;">Date & Time</td>
                              <td width="65%" style="padding-bottom: 12px; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; color: #F8FAFC; font-weight: 600;">Saturday, 26 Sept @ 04:00 PM</td>
                            </tr>

                            <!-- ITEM 4: CLINIC LOCATION -->
                            <tr>
                              <td width="35%" style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 13px; color: #8E95A5; font-weight: 500;">Location</td>
                              <td width="65%" style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; color: #F8FAFC; font-weight: 600;">Galleria Complex, Powai</td>
                            </tr>

                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- SPACING -->
                <tr><td height="28" style="font-size:0px; line-height:0px;">&nbsp;</td></tr>

                <!-- CALL TO ACTION BUTTON -->
                <tr>
                  <td align="center">
                    <!--[if mso]>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://dentistos.in/cal/confirm" style="height:48px;v-text-anchor:middle;width:260px;" arcsize="17%" stroke="f" fillcolor="#FF3B30">
                      <w:anchorlock/>
                      <center style="color:#ffffff;font-family:sans-serif;font-size:15px;font-weight:bold;">Add to Calendar &rarr;</center>
                    </v:roundrect>
                    <![endif]-->
                    <!--[if !mso]><!-->
                    <a href="https://dentistos.in/cal/confirm" target="_blank" class="cta-button" style="background-color:#FF3B30; background-image: linear-gradient(135deg, #FF3B30 0%, #FF7A00 100%); border-radius:8px; color:#FFFFFF; display:inline-block; font-family:'Plus Jakarta Sans', -apple-system, sans-serif; font-size:15px; font-weight:700; line-height:48px; text-align:center; text-decoration:none; width:260px; -webkit-text-size-adjust:none;">Add to Google Calendar &rarr;</a>
                    <!--<![endif]-->
                  </td>
                </tr>

                <!-- AUXILIARY INSTRUCTIONS -->
                <tr>
                  <td align="center" style="padding-top: 20px;">
                    <p style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 13px; color: #8E95A5; margin: 0;">
                      Need to reschedule? <a href="https://dentistos.in/reschedule" style="color: #00F2FE; text-decoration: none; font-weight: 600;">Tap here to manage slot</a>
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- FOOTER ROW -->
          <tr>
            <td style="padding: 24px 32px 32px 32px; background-color: #0B0C10; border-top: 1px solid #1F2430; text-align: center;">
              <p style="font-family: 'Space Grotesk', sans-serif; font-size: 12px; font-weight: 700; color: #F8FAFC; margin: 0 0 6px 0; letter-spacing: 0.5px;">
                BEYOND PIXELLS STUDIO
              </p>
              <p style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 12px; color: #8E95A5; margin: 0 0 12px 0; line-height: 1.5;">
                Building Operating Systems for Local Businesses across India.
              </p>
              <p style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 11px; color: #525866; margin: 0;">
                © 2026 Beyond Pixells Technologies Pvt Ltd. All rights reserved.
              </p>
            </td>
          </tr>

        </table>

        <!--[if mso]>
        </td>
        </tr>
        </table>
        <![endif]-->

      </td>
    </tr>
  </table>

</body>
</html>
```

---

## SECTION 4: SOCIAL CONTENT TEMPLATE SYSTEM (REELS & FEED POSTS)

### 4.1 Visual Hierarchy & Brand Translation Rules

To maintain absolute design coherence between web products, email notifications, WhatsApp messages, and social channels, social media content follows these derived rules:

#### 1. Canvas & Lighting
- **Background Color:** `#08090C` (Obsidian Black).
- **Radial Lighting Accent:** Subtle centered 15% opacity radial gradient glow behind product UI mockups using Coral (`#FF3B30`) for Gym OS and Cyan (`#00F2FE`) for Dentist OS.

#### 2. Typography Rules
- **Headline / Hook Text:** Space Grotesk Bold, 64pt – 80pt, tracking `-0.02em`. Keywords highlighted in Coral `#FF3B30` or Electric Cyan `#00F2FE`.
- **Sub-headline / Body:** Plus Jakarta Sans Medium, 28pt – 36pt, text color `#D1D5DB`.
- **UI Data Points / Code Badges:** Monospace (`SF Mono`) in Electric Cyan `#00F2FE` wrapped inside a dark card `#12141A`.

#### 3. UI Mockup Cards
- **Card Containers:** `#12141A` with a 1px solid border `#27272A` and 16px corner radius.
- **Glassmorphism:** 10px backdrop blur with `rgba(18, 20, 26, 0.85)` fill.

---

### 4.2 Content Formats & Production Templates

#### Format 1: Educational Carousel Post (1080x1350px — 4:5 Aspect Ratio)
Designed for high save-and-share rates on Instagram and LinkedIn.

- **Slide 1 (Hook):**
  - *Headline:* "Why 80% of Gyms in India Lose Revenue on Unpaid Dues" (Space Grotesk Bold).
  - *Visual:* Slashed red metric card (`₹1,40,000 Uncollected Dues`) vs Gym OS Auto-UPI pill (`₹0 Leakage`).
  - *Footer:* "Swipe for the 3-Step Fix →"
- **Slides 2–4 (Core OS Features):**
  - Slide 2: Manual WhatsApp vs Gym OS Automated Multi-Trigger WhatsApp Workflows.
  - Slide 3: Paper receipts vs Auto-generated GST UPI Invoice links.
  - Slide 4: Attendance tracking without hardware lock-in.
- **Slide 5 (Call to Action):**
  - *Headline:* "Ready to Upgrade Your Local Business to an OS?"
  - *CTA:* "DM 'GYM OS' or 'DENTIST OS' for a 5-Minute Interactive Sandbox Link."

#### Format 2: Instagram Reel / Short Cover & Safe Zone Blueprint (1080x1920px — 9:16 Aspect Ratio)
Designed for fast-paced video demonstrations and product breakdown reels.

```
+-------------------------------------------------------+ 1080px
| [TOP SAFE ZONE - 150px] (Avoid IG Header & Profile)   |
+-------------------------------------------------------+
|                                                       |
|   HOOK OVERLAY BOX (#12141A card + #FF3B30 border)    |
|   "How Clove Dental Reduced No-Shows by 64%"          |
|   (Space Grotesk Bold, 56pt)                          |
|                                                       |
|   [CENTER 1080x1350 FEED PREVIEW AREA]                |
|   Dynamic Video Screen Recording / Screen Mockup      |
|   Showing Dentist OS 2-Hour WhatsApp Reminder firing  |
|                                                       |
|   STAT CALLOUT BADGE (#00F2FE text on #1A1D26 card)   |
|   "⚡ 2-Hour Location Link + Auto-Calendar Sync"       |
|                                                       |
+-------------------------------------------------------+
| [BOTTOM SAFE ZONE - 250px] (Avoid Audio & IG Caption) |
+-------------------------------------------------------+ 1920px
```

#### Format 3: Product Feature Announcement / Stat Callout (1080x1080px Square)
- **Top Badge:** `NEW FEATURE • GYM OS v2.4` in Electric Cyan `#00F2FE`.
- **Center Hero Metric:** `3.2x` in massive 120pt Space Grotesk Bold with gradient fill `#FF3B30` to `#FF7A00`.
- **Caption Text:** "Faster UPI collection rate compared to manual WhatsApp reminders."
- **Footer:** Beyond Pixells product mark + `beyondpixells.com`.

---
*End of Beyond Pixells Message Design Pack Specification v1.0*
