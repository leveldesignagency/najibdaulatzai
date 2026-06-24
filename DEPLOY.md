# Deploy to Vercel — Mr Najib Daulatzai (ndsurgeon.com)

First-time deployment checklist for this Next.js 16 site.

## Going live & Google indexing (read this first)

The site is set to **`index, follow`** on all public pages. After deploy:

1. Confirm the site loads publicly (no login redirect).
2. Submit `https://www.ndsurgeon.com/sitemap.xml` in [Google Search Console](https://search.google.com/search-console) (use a **Domain** property for `ndsurgeon.com`).
3. Request indexing for the homepage via URL Inspection.

If `SITE_AUTH_ENABLED` is still set on Vercel from an older deploy, **remove it** (or set to `false`) and redeploy so nothing blocks crawlers.

## Google Business Profile imagery

When setting up Google Business, use the square profile image from the website:

- **URL:** `https://www.ndsurgeon.com/images/og/social-share-najib-profile.jpg` (1200×1200)
- **Link preview / social:** `https://www.ndsurgeon.com/images/og/social-share-najib.jpg` (1200×630)

These are generated from `public/Social Share Najib.png` via `npm run optimize-images`.

After creating the Google Business Profile, add its public URL to `physicianSameAs` in `src/lib/seo/entity.ts` so Google can connect the website and profile.

## Prerequisites

- Node.js **20.9.0 or later** (required by Next.js 16)
- A [Vercel](https://vercel.com) account (Hobby plan is free)
- Git repository connected to Vercel (GitHub, GitLab, or Bitbucket)

## Vercel Analytics, Speed Insights & Google Analytics 4

| Product | Package / setup | Cost on Hobby | Cookie consent |
|---------|-----------------|---------------|----------------|
| **Speed Insights** | `@vercel/speed-insights` | Free | Always on (no ad cookies) |
| **Web Analytics** | `@vercel/analytics` | Free | Opt-in via cookie banner |
| **Google Analytics 4** | `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Free | Opt-in via cookie banner |

### Vercel (no API keys)

After deploy, enable **Analytics** and **Speed Insights** in the Vercel project dashboard under **Analytics**.

### Google Analytics 4 (required for CTA / call / FAB tracking)

1. Go to [Google Analytics](https://analytics.google.com) → **Admin** → **Create property** for `ndsurgeon.com`.
2. Create a **Web** data stream for `https://www.ndsurgeon.com`.
3. Copy the **Measurement ID** (format `G-XXXXXXXXXX`).
4. In Vercel: **Project → Settings → Environment Variables** → add:
   - Name: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - Value: your `G-XXXXXXXXXX` ID
   - Environments: Production (and Preview if you want staging data)
5. **Redeploy** the site (env vars only apply after a new deploy).
6. Visit the live site, click **Accept all** on the cookie banner, then browse and click a phone link or Book Now button.
7. In GA4: **Reports → Realtime** — you should see activity within ~30 seconds.
8. Mark these as **Key events** in GA4 (**Admin → Events → Mark as key event**):
   - `phone_click`
   - `email_click`
   - `whatsapp_click`
   - `cta_click`
   - `fab_open`
   - `fab_close`

Events are only sent when visitors opt in to analytics cookies (UK GDPR). Phone/email clicks are tracked when the link is tapped — not whether the call completed.

## Deploy steps

1. **Push code** to your Git remote (main or production branch).

2. **Import project** at [vercel.com/new](https://vercel.com/new):
   - Framework preset: **Next.js** (auto-detected)
   - Root directory: project root
   - Build command: `npm run build` (default)
   - Output: Next.js default

3. **Environment variables** — add under **Project → Settings → Environment Variables**:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` — GA4 Measurement ID (`G-XXXXXXXXXX`) for call/CTA/FAB tracking
   - Contact form keys when wired up (e.g. `RESEND_API_KEY`). See `.env.example`.

4. **Deploy** — Vercel runs `npm install` and `npm run build`. First build should succeed on Node 20+.

5. **Custom domain** — Project → **Settings → Domains**:
   - Add `www.ndsurgeon.com` and `ndsurgeon.com`
   - Point DNS to Vercel (A/CNAME as shown in dashboard)
   - Set `www.ndsurgeon.com` as primary; redirect apex if desired

6. **Verify production URL** — `siteConfig.url` in `src/lib/site-config.ts` is set to `https://www.ndsurgeon.com`. Update only if the live domain differs.

7. **Post-deploy checks**
   - [ ] Homepage loads over HTTPS without login
   - [ ] `/sitemap.xml` and `/robots.txt` accessible
   - [ ] `/llms.txt` accessible (GEO / AI discovery)
   - [ ] Cookie banner → Accept all → Vercel Analytics events in dashboard (may take a few minutes)
   - [ ] GA4 Realtime shows page views after accepting cookies (requires `NEXT_PUBLIC_GA_MEASUREMENT_ID`)
   - [ ] GA4 Realtime shows `phone_click` or `cta_click` when testing Book Now / Call links
   - [ ] Speed Insights data appears in Vercel dashboard
   - [ ] Google Search Console: submit sitemap `https://www.ndsurgeon.com/sitemap.xml`

## Local build before deploy

```bash
nvm use 20   # or ensure Node >= 20.9.0
npm install
npm run build
npm start    # optional smoke test on :3000
```

## Project settings (recommended)

- **Node.js Version**: 20.x (Settings → General)
- **Region**: London (`lhr1`) if available, for UK visitors
- **Preview deployments**: enabled for PR review

## SEO / GEO / AEO assets (already in repo)

- Meta tags & Open Graph: `src/lib/metadata.ts`, `src/lib/seo/`
- JSON-LD structured data: `src/components/seo/JsonLd.tsx`
- AI discovery file: `public/llms.txt`
- Sitemap: auto-generated at `/sitemap.xml`

No additional Vercel configuration file is required for a standard Next.js App Router deployment.
