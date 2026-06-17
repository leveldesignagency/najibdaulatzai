# Deploy to Vercel — Mr Najib Daulatzai (ndsurgeon.com)

First-time deployment checklist for this Next.js 16 site.

## Going live & Google indexing (read this first)

The site code is already set to **`index, follow`** on all public pages. If a SEO audit reports **`noindex, nofollow`**, the usual cause is the **preview login wall**, not the page templates.

While `SITE_AUTH_ENABLED=true` on Vercel:

- Visitors and Google are redirected to `/login`
- `/login` is correctly marked `noindex, nofollow` so Google will not index the login screen
- **No marketing page can be indexed until the wall is removed**

**To allow Google to index the site:** set `SITE_AUTH_ENABLED=false` in Vercel → Project → Settings → Environment Variables (Production), then **redeploy**. After that, submit `https://www.ndsurgeon.com/sitemap.xml` in [Google Search Console](https://search.google.com/search-console).

Local `.env.example` already defaults `SITE_AUTH_ENABLED=false` for development.

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

## Vercel Analytics & Speed Insights

Both packages are installed and configured:

| Product | Package | Cost on Hobby | Cookie consent |
|---------|---------|---------------|----------------|
| **Speed Insights** | `@vercel/speed-insights` | Free | Always on (no ad cookies) |
| **Web Analytics** | `@vercel/analytics` | Free | Opt-in via cookie banner |

After deploy, enable **Analytics** and **Speed Insights** in the Vercel project dashboard under **Analytics** — no API keys required for the default integration.

## Deploy steps

1. **Push code** to your Git remote (main or production branch).

2. **Import project** at [vercel.com/new](https://vercel.com/new):
   - Framework preset: **Next.js** (auto-detected)
   - Root directory: project root
   - Build command: `npm run build` (default)
   - Output: Next.js default

3. **Environment variables** — add these under **Project → Settings → Environment Variables** for Production (and Preview if you want the wall on preview URLs too):

   | Variable | Value |
   |----------|--------|
   | `SITE_AUTH_ENABLED` | `true` |
   | `SITE_AUTH_USERNAME` | `najibwebsite` |
   | `SITE_AUTH_PASSWORD` | *(see secure note below)* |
   | `SITE_AUTH_SESSION_TOKEN` | *(see secure note below)* |

   Set `SITE_AUTH_ENABLED=false` when you are ready to launch publicly. **Google cannot index the site while the login wall is enabled**, because crawlers are redirected to `/login`, which is correctly marked `noindex`.

   If you add forms or APIs later, set any additional vars under the same screen.

4. **Deploy** — Vercel runs `npm install` and `npm run build`. First build should succeed on Node 20+.

5. **Custom domain** — Project → **Settings → Domains**:
   - Add `www.ndsurgeon.com` and `ndsurgeon.com`
   - Point DNS to Vercel (A/CNAME as shown in dashboard)
   - Set `www.ndsurgeon.com` as primary; redirect apex if desired

6. **Verify production URL** — `siteConfig.url` in `src/lib/site-config.ts` is set to `https://www.ndsurgeon.com`. Update only if the live domain differs.

7. **Post-deploy checks**
   - [ ] Unauthenticated visit redirects to `/login`
   - [ ] Login with preview credentials opens the site
   - [ ] Homepage loads over HTTPS
   - [ ] `/sitemap.xml` and `/robots.txt` accessible
   - [ ] `/llms.txt` accessible (GEO / AI discovery)
   - [ ] Cookie banner → Accept all → Vercel Analytics events in dashboard (may take a few minutes)
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

## Temporary login wall (pre-launch)

While `SITE_AUTH_ENABLED=true`, every page except `/login` and static assets requires a successful login. A session cookie lasts 30 days.

**To go live:** set `SITE_AUTH_ENABLED=false` in Vercel environment variables and redeploy.

**Local dev:** copy `.env.example` to `.env.local` and fill in `SITE_AUTH_PASSWORD` and `SITE_AUTH_SESSION_TOKEN` (generate a token with `openssl rand -hex 32`).

## SEO / GEO / AEO assets (already in repo)

- Meta tags & Open Graph: `src/lib/metadata.ts`, `src/lib/seo/`
- JSON-LD structured data: `src/components/seo/JsonLd.tsx`
- AI discovery file: `public/llms.txt`
- Sitemap: auto-generated at `/sitemap.xml`

No additional Vercel configuration file is required for a standard Next.js App Router deployment.
