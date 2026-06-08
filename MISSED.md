# Najib Daulatzai site — outstanding items

Checklist of client brief items **not yet done**, **only partly done**, or **needing client input before publish**.  
Last updated against the original client notes and current codebase.

---

## Legend

| Status | Meaning |
|--------|---------|
| ❌ | Not started |
| ⚠️ | Started / placeholder — needs completion |
| ✅ | Done (listed only where relevant to “still to do” elsewhere) |

---

## 1. Critical fixes

| # | Item | Status | Notes |
|---|------|--------|-------|
| 1.1 | Clean URL slugs (`/procedures`, `/about`, etc.) | ✅ | Live on Next.js; Wix `/blank*` → 301 redirects in `next.config.ts` (apply when deployed to `ndsurgeon.com`). |
| 1.2 | Phone in navigation on every page (beside Book Now) | ⚠️ | **+447733 897972** on homepage hero (“Call us”) and bottom of mobile menu. **Not** in desktop header bar next to a global Book Now. |
| 1.3 | Page titles (SEO) — all 6 main pages | ✅ | In `src/lib/page-titles.ts`. |
| 1.4 | Meta descriptions (SEO) — all 6 main pages | ✅ | In `src/lib/page-descriptions.ts`. **Verify** testimonials copy (“5 stars” on Doctify / Top Doctors / iWantGreatCare) before go-live. |
| 1.5 | Direct booking widget (fewer clicks) | ❌ | No embedded booking tool; Book Now → `/contact` only. Need provider + embed code from client. |

---

## 2. Important improvements

| # | Item | Status | Notes |
|---|------|--------|-------|
| 2.1 | Credentials section (UCL, Imperial, St Mark’s, RCS logos) | ⚠️ | Section on About page. **RCS** = real logo; **UCL / Imperial / St Mark’s** = typographic placeholders — replace with official brand assets. |
| 2.2 | Insurer logos larger and sharp | ❌ | About “Insurances” still uses small Wix-era images (`InsurancesSection`). Client list: Bupa, AXA, Aviva, Vitality, WPA, Healix (check **Alliance Healthcare** vs **AXA**). |
| 2.3 | Review platform logos + live widgets | ⚠️ | Global strip above Book CTA: Doctify, Top Doctors, iWantGreatCare links. **Placeholder** wordmark SVGs. `#review-platform-widgets` empty — client to add embed scripts. |
| 2.4 | Expanded procedure content | ⚠️ | Hover snippets + **specialty** long pages (`/procedures/proctology`, etc.). **Not** separate URL per procedure (e.g. `/procedures/proctology/haemorrhoids`). Client may still supply more copy. |
| 2.5 | Google Maps embeds (4 locations) | ✅ | Shared `LocationMapCard` + embed URLs in `site-config`; homepage **Locations** and **Contact** pages. |

---

## 3. Quick wins

| # | Item | Status | Notes |
|---|------|--------|-------|
| 3.1 | Footer copyright **2026** | ✅ | `© 2026 by LEVEL DESIGN AGENCY LTD` in footer. |
| 3.2 | GDPR cookie consent banner | ✅ | `CookieConsentProvider` + `/privacy`; functional maps gated until consent. |
| 3.3 | Schema.org (Physician / MedicalOrganization) | ✅ | `MedicalOrganization` + `Physician` + Patient FAQ `FAQPage` in `JsonLd.tsx`. |
| 3.4 | Self-pay line on About page | ✅ | Word-for-word line on About insurances section. |

---

## 4. New content / pages

| # | Item | Status | Notes |
|---|------|--------|-------|
| 4.1 | **GP Referrals** page | ⚠️ | `/gp-referrals` — copy in place. **Secretary placeholders** still: `[Insert secretary name]`, `[Insert telephone number]`, `[Insert email address]`. **No** downloadable referral form PDF. |
| 4.2 | **Patient FAQ** page | ✅ | `/patient-faq` — Section 4 copy. Linked from footer; **not** in main hamburger menu. |
| 4.3 | FAQ under each procedure area | ✅ | 3 FAQs per specialty page (proctology, colorectal, hernia, endoscopy, additional). |
| 4.4 | **Why Robotic Surgery?** (Section 2 — da Vinci Xi / DV5) | ⚠️ | `/robotic-surgery` live with SEO copy; client Section 2 word-for-word + video/animation still TBD. |
| 4.5 | Expanded Research & Publications | ⚠️ | `/research` has publication cards from Wix scrape. Client may want further audits / categorisation beyond current list. |

---

## 5. Technical / SEO (future)

| # | Item | Status | Notes |
|---|------|--------|-------|
| 5.1 | Dedicated **robotic colorectal surgery London** page | ✅ | `/robotic-surgery` — SEO title/description, nav, sitemap, internal links from home/procedures/hero. |
| 5.2 | Platform migration (Wix → Next.js / Webflow / WordPress) | ✅ | Build is Next.js on Vercel; **discussion only** for client — not a code task. |

---

## Contact page — gaps

| Item | Status | Notes |
|------|--------|-------|
| Hospital booking **links** below private-practice note | ❌ | Note says *"book through your preferred hospital using the links below"* — locations listed, **no** outbound booking URLs yet. |
| Contact form backend | ❌ | Form UI only; no email/API submission. |
| `siteConfig.email` | ⚠️ | Empty in `site-config.ts`; contact page uses `info@ndaulatzai.com` from `contact-content.ts` only. |

---

## Navigation & discoverability

| Item | Status | Notes |
|------|--------|-------|
| GP Referrals / Patient FAQ in **main menu** | ❌ | Footer only (`footerNavLinks`). Hamburger: Home, Procedures, About, Research, Testimonials, Contact. |
| SEO titles/descriptions for new pages | ⚠️ | GP Referrals + Patient FAQ have basic metadata; **not** in client’s original 6-page SEO list. |
| Sitemap | ⚠️ | Includes `/gp-referrals`, `/patient-faq`, procedure specialties; **no** per-procedure URLs. |

---

## Assets & content waiting on client

- Secretary **name**, **phone**, **email** (GP referrals + possibly contact).
- **Official logos**: UCL, Imperial, St Mark’s, RCS (if not keeping placeholders), insurers (hi-res), Doctify / Top Doctors / iWantGreatCare.
- **Booking widget** embed code / preferred vendor.
- **Referral form** PDF (or template) for download on GP referrals page.
- **Robotic surgery** video or animation asset.
- Confirmation of **5-star** claims on review platforms (meta + testimonials page).
- Any **extra procedure copy** for individual procedure landing pages (if moving beyond specialty-level SEO).

---

## Completed (for reference)

- Contact: Golders Green replaces Elstree; private-practice booking note.
- Phone: hero “Call us” + mobile menu footer.
- Procedure hover snippets + 5 specialty tabs (incl. colorectal + additional).
- Testimonials slideshow; Research publications; About bio / values / insurances layout.
- Review platforms strip (structure); credentials section (structure).

---

## Suggested priority order

1. Secretary details + contact hospital links + booking widget (**conversion**).
2. Booking widget (1.5), insurer logos (2.2).
3. Insurer logos (2.2) + real credential/review logos (**trust**).
4. Dedicated robotic surgery page + Why Robotic section (**SEO**).
5. Per-procedure URLs, referral PDF (**if client wants depth**).
