# FOUNDER ACTION PACK — Beyond Pixells Estate

**Owner:** Somil Sharma  
**Business Email:** beyondpixells@gmail.com  
**WhatsApp:** +91 77370 77479  
**Brand Spelling:** Beyond Pixells (double-L)  
**Date:** October 2, 2026  

---

## Executive Summary

While autonomous parallel sub-agents manage technical tasks (Postgres RLS policy verification, security audits, dependency alignment, and CI pipeline fixes), the items below require **owner-level administrative authorization, billing, third-party UI actions, or direct personal outreach**.

Completing these 8 items will fully unblock estate automation, launch production domain routing, and establish complete brand alignment across all channels.

---

## Consolidated Action Items (Ordered by Impact-to-Effort)

### 1. GitHub Workflow-Scope Personal Access Token (PAT)
* **WHY IT MATTERS:** Autonomous agents require `workflows: write` scope to repair and manage `.github/workflows/` (specifically fixing the `update-template.yml` permission error in `beyond-pixells-status`).
* **STATUS:** Blocked on Founder (Current token has repository scope only; GitHub API/git returns 403 on workflow file updates).
* **EXACT STEPS:**
  1. Go to [github.com](https://github.com) and sign in as `somilsharma2000`.
  2. Click your avatar in the top-right corner → **Settings**.
  3. Scroll down the left sidebar to the bottom → **Developer settings**.
  4. Expand **Personal access tokens** → select **Fine-grained tokens** (or **Tokens (classic)**).
  5. Click **Generate new token**.
  6. **Token Name:** `bp-agent-workflow-pat`.
  7. **Expiration:** Select **90 days** (or **No expiration**).
  8. **Repository access:** Choose **Only select repositories** → select `somilsharma2000/beyond-pixells`, `somilsharma2000/gym-os-v3`, and `somilsharma2000/beyond-pixells-status`.
  9. **Repository permissions:**
     * **Contents:** Read and write
     * **Workflows:** Read and write
     * **Metadata:** Read-only (automatically granted)
  10. Click **Generate token** and copy the resulting string (`github_pat_...`).
  11. **Submit safely:** Submit the token via the Base44 workspace secrets flow under secret name `GITHUB_WORKFLOW_PAT` (never paste raw tokens into chat).
* **TIME ESTIMATE:** 3 minutes.
* **WHAT UNLOCKS ONCE DONE:**
  * Self-healing CI/CD pipelines across all estate repositories.
  * Resolves status repo workflow failure and enables agents to keep monitoring templates updated automatically.

---

### 2. Repoint `gymos.in` DNS to Vercel & Configure Environment
* **WHY IT MATTERS:** Switches production traffic from legacy Hostinger hosting to `gym-os-v3` on Vercel, enabling production payment links and live WhatsApp trial CTAs.
* **STATUS:** Blocked on Founder (Domain registered at Hostinger/registrar; DNS currently points to old web host).
* **EXACT STEPS:**
  1. **Configure Vercel Environment:** Log into [vercel.com/dashboard](https://vercel.com/dashboard) → select the `gym-os-v3` project.
  2. Go to **Settings** → **Environment Variables**.
  3. Add or update variable: `NEXT_PUBLIC_SITE_URL` = `https://gymos.in` (select **Production**, **Preview**, and **Development**). Click **Save**.
  4. Go to **Settings** → **Domains** → add `gymos.in` and `www.gymos.in`.
  5. **Update Registrar DNS Records:** Log into your domain registrar console (Hostinger / GoDaddy).
  6. Locate DNS Management for `gymos.in` and update/add the following records:
     * **Type:** `A` | **Name:** `@` | **Value:** `76.76.21.21` | **TTL:** `3600`
     * **Type:** `CNAME` | **Name:** `www` | **Value:** `cname.vercel-dns.com.` | **TTL:** `3600`
  7. **Redeploy Project:** In Vercel `gym-os-v3` → **Deployments** → click **...** on the latest build → **Redeploy** (ensures `NEXT_PUBLIC_SITE_URL` is baked into runtime assets).
* **TIME ESTIMATE:** 7 minutes.
* **WHAT UNLOCKS ONCE DONE:**
  * Live `https://gymos.in` production web application.
  * Active WhatsApp trial, payment, and renewal link generation (`gymos.in/trial/...`, `gymos.in/pay/...`).
  * Unblocks setting internal `gym-os` GitHub repositories to Private (no longer dependent on GitHub Pages).

---

### 3. Reconnect Instagram Token in `gym-os-v3` Connect Center
* **WHY IT MATTERS:** Restores encrypted Instagram Graph API publishing inside `gym-os-v3` Control OS while keeping the Base44 social publisher active.
* **STATUS:** Blocked on Founder (Wave C3 batch 2 Connect Center is live; requires long-lived Meta Graph token).
* **EXACT STEPS:**
  1. Open the [Meta Developer Explorer](https://developers.facebook.com/tools/explorer/) or your Meta App Dashboard.
  2. Select the Meta App connected to `Beyond Pixells` / `Gym OS`.
  3. Generate a User or System User token with permissions: `instagram_basic`, `instagram_content_publish`, `pages_show_list`, `pages_read_engagement`.
  4. Exchange for a **Long-Lived Access Token** (60-day validity) via Meta's Access Token Tool.
  5. Log in to `gym-os-v3` Super Admin dashboard (`https://gymos-v3.vercel.app/dashboard/super-admin`).
  6. Go to **Super Admin** → **Connect Center** (or **Integration Providers**).
  7. Locate **Instagram** → click **Edit / Connect Provider**.
  8. Paste the long-lived token into the **Access Token** field.
  9. Click **Test & Save Integration** — system performs a real Meta Graph API test call and applies an AES-encrypted token stamp.
* **TIME ESTIMATE:** 5 minutes.
* **WHAT UNLOCKS ONCE DONE:**
  * Direct social publishing from `gym-os-v3` Content OS (`/dashboard/content`).
  * Real-time integration health stamps and automated Instagram post scheduling.

---

### 4. Purchase `beyondpixells.in` & Configure Vercel DNS
* **WHY IT MATTERS:** Establishes the master agency umbrella domain for official web presence, legal documentation, and client communication.
* **STATUS:** Blocked on Founder (Domain purchase + DNS entry required at registrar).
* **EXACT STEPS:**
  1. **Purchase Domain:** Log in to Hostinger / GoDaddy / Namecheap.
  2. Search for and buy `beyondpixells.in` (register under `beyondpixells@gmail.com`).
  3. **Vercel Project Setup:** Log in to [vercel.com/dashboard](https://vercel.com/dashboard) → select the `beyond-pixells` hub project.
  4. Go to **Settings** → **Domains** → add `beyondpixells.in` and `www.beyondpixells.in`.
  5. **DNS Entry at Registrar:** In your registrar DNS panel for `beyondpixells.in`, add:
     * **Type:** `A` | **Name:** `@` | **Value:** `76.76.21.21` | **TTL:** `3600`
     * **Type:** `CNAME` | **Name:** `www` | **Value:** `cname.vercel-dns.com.` | **TTL:** `3600`
  6. Verify green SSL/DNS status indicators in Vercel dashboard.
* **TIME ESTIMATE:** 5 minutes.
* **WHAT UNLOCKS ONCE DONE:**
  * HTTPS production agency hub at `https://beyondpixells.in`.
  * Foundation for subdomains (e.g., `cal.beyondpixells.in`, `support.beyondpixells.in`).

---

### 5. Send Client Testimonial Ask (WhatsApp)
* **WHY IT MATTERS:** Secures real social proof from pilot gym owners to boost landing page conversion rates and founder brand credibility.
* **STATUS:** Ready for Founder Action (WhatsApp draft ready to copy and send).
* **COPY-PASTE WHATSAPP MESSAGE:**

> Hey [Gym Owner Name], hope you're having a great week!
>
> We're rolling out the updated version of Gym OS this week, and I'd love to feature a quick 2-line quote from you on our official site about your experience using the platform at [Gym Name].
>
> If you're open to it, could you share 2 sentences on how Gym OS has helped with member check-ins or fee follow-ups?
>
> As a thank you for your time, I’ll add 1 month free to your Gym OS subscription (or bump your top requested feature to the front of our dev pipeline).
>
> Appreciate your support!  
> - Somil

* **TIME ESTIMATE:** 2 minutes.
* **WHAT UNLOCKS ONCE DONE:**
  * Authentic testimonials for `gymos.in` landing page and sales pitch decks.

---

### 6. Rename LinkedIn Organization Page to 'Beyond Pixells'
* **WHY IT MATTERS:** Ensures exact brand consistency across professional business listings and B2B client touchpoints.
* **STATUS:** Blocked on Founder (Requires LinkedIn Page Super Admin access on Org ID `109877511`).
* **EXACT STEPS:**
  1. Open LinkedIn and log in as `somilsharma2000`.
  2. Navigate directly to the company admin page: `https://www.linkedin.com/company/109877511/admin/`.
  3. In the left admin menu, click **Edit page** (under Page Admin Tools).
  4. Select **Header** → **Page info**.
  5. Change the **Name** field to `Beyond Pixells` (ensure double-L spelling).
  6. Check **Public URL** (set to `linkedin.com/company/beyondpixells` if available).
  7. Click **Save**. *(Note: If LinkedIn requires verification due to follower count, click "Contact Support" in admin menu and upload email proof `beyondpixells@gmail.com`).*
* **TIME ESTIMATE:** 2 minutes.
* **WHAT UNLOCKS ONCE DONE:**
  * Clean, consistent B2B brand presence on LinkedIn for client search and outbound proposals.

---

### 7. Change Facebook Page Category to 'Software Company'
* **WHY IT MATTERS:** Aligns Meta Business Page categorization with Meta Developer App verification requirements for B2B SaaS software.
* **STATUS:** Blocked on Founder (Requires Facebook Page Admin privileges).
* **EXACT STEPS:**
  1. Log into [facebook.com](https://facebook.com) and switch profile to **Beyond Pixells** Page.
  2. Open Meta Business Suite ([business.facebook.com](https://business.facebook.com)) or view Page Profile.
  3. Click **About** → **Contact and basic info**.
  4. Next to **Category**, click the edit (pencil) icon.
  5. Search for and select **Software Company** (remove any legacy agency or personal blog categories).
  6. Click **Save**.
* **TIME ESTIMATE:** 2 minutes.
* **WHAT UNLOCKS ONCE DONE:**
  * Meta Developer App review compliance and optimized Meta CTWA (Click-to-WhatsApp) ad targeting.

---

### 8. Instagram Grid Cleanup (Delete 9 Outdated Posts)
* **WHY IT MATTERS:** Maintains visual alignment with the Obsidian Luxe brand identity (#06070B) on the official `@beyondpixells` profile.
* **STATUS:** Pending Founder Action (Instagram Graph API does not support bulk post deletion; manual tap required).
* **EXACT STEPS:**
  1. Open the **Instagram Mobile App** on your phone (logged in as `@beyondpixells`) or go to Meta Business Suite → **Content**.
  2. View the main profile post grid.
  3. Tap each of the 9 excess/placeholder/test posts created prior to the recent brand redesign.
  4. Tap the 3 dots (**...**) in top-right → select **Delete** → confirm.
  5. Confirm grid displays only clean, high-signal product previews and brand graphics.
* **TIME ESTIMATE:** 3 minutes.
* **WHAT UNLOCKS ONCE DONE:**
  * High-converting, clutter-free Instagram profile grid for incoming CTWA ad leads.

---

## Summary & Time Investment

| Item | Task | Impact | Time | Status |
| :---: | :--- | :---: | :---: | :---: |
| **1** | GitHub Workflow PAT | **High** | 3 min | Blocked on Founder |
| **2** | Repoint `gymos.in` DNS to Vercel | **Critical** | 7 min | Blocked on Founder |
| **3** | Reconnect Instagram in Connect Center | **High** | 5 min | Blocked on Founder |
| **4** | Purchase `beyondpixells.in` & DNS | **High** | 5 min | Blocked on Founder |
| **5** | Send Client Testimonial Ask | **High** | 2 min | Ready for Founder |
| **6** | Rename LinkedIn Org to 'Beyond Pixells' | **Medium** | 2 min | Blocked on Founder |
| **7** | Set Facebook Category to 'Software Company' | **Medium** | 2 min | Blocked on Founder |
| **8** | Instagram Grid Cleanup (9 Posts) | **Medium** | 3 min | Pending Founder |
| **TOTAL** | **All 8 Founder Tasks** | — | **~29 min** | — |

---

## Recommended 'One Sitting' Action (30-Minute Trio)

If you only have 30 minutes today, complete these **top 3 high-impact items** to achieve ~80% of total progress:

1. **GitHub Workflow-Scope PAT (3 min):** Unblocks autonomous agent CI repairs and status repository automation.
2. **Repoint `gymos.in` DNS to Vercel (7 min):** Launches the live production app on `https://gymos.in` and activates all WhatsApp payment/trial links.
3. **Reconnect Instagram in Connect Center (5 min):** Restores Social OS publishing, encrypted credentials, and automated content scheduling.

*(Total time for the Power Trio: 15 minutes)*
