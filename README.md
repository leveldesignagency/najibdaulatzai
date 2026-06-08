# Mr Najib Daulatzai — Colorectal & General Surgeon

Next.js 16 website for [ndsurgeon.com](https://www.ndsurgeon.com).

## Requirements

- Node.js **20.9.0+**
- npm

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

See **[DEPLOY.md](./DEPLOY.md)** for the first-deploy checklist, domain setup, and Analytics/Speed Insights notes.

Both **Vercel Web Analytics** and **Speed Insights** are installed and **free on the Hobby plan**. Analytics loads only after cookie consent; Speed Insights runs always.

## SEO / GEO / AEO

- Meta tags: `src/lib/metadata.ts`, `src/lib/seo/`
- Structured data: `src/components/seo/JsonLd.tsx`
- AI discovery: `public/llms.txt`
- Sitemap: `/sitemap.xml` (auto-generated)
