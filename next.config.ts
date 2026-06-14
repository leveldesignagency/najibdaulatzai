import type { NextConfig } from "next";

/** Legacy Wix placeholder slugs → clean routes (client note 1.1) */
const wixLegacyRedirects = [
  { source: "/blank", destination: "/procedures", permanent: true },
  { source: "/blank-1", destination: "/about", permanent: true },
  { source: "/blank-1-1", destination: "/research", permanent: true },
  { source: "/blank-1-1-1", destination: "/testimonials", permanent: true },
  { source: "/blank-1-1-1-1", destination: "/contact", permanent: true },
] as const;

/** Old /articles paths (Wix or mistaken links) → clinical articles index */
const articlesRedirects = [
  { source: "/articles", destination: "/blog", permanent: true },
  { source: "/articles/:slug*", destination: "/blog/:slug*", permanent: true },
] as const;

const procedureRedirects = [
  { source: "/procedures/additional", destination: "/procedures/colorectal", permanent: true },
] as const;

const nextConfig: NextConfig = {
  async redirects() {
    return [...wixLegacyRedirects, ...articlesRedirects, ...procedureRedirects];
  },
};

export default nextConfig;
