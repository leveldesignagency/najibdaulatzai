import type { NextConfig } from "next";

/** Legacy Wix placeholder slugs → clean routes (client note 1.1) */
const wixLegacyRedirects = [
  { source: "/blank", destination: "/procedures", permanent: true },
  { source: "/blank-1", destination: "/about", permanent: true },
  { source: "/blank-1-1", destination: "/research", permanent: true },
  { source: "/blank-1-1-1", destination: "/testimonials", permanent: true },
  { source: "/blank-1-1-1-1", destination: "/contact", permanent: true },
] as const;

const nextConfig: NextConfig = {
  async redirects() {
    return [...wixLegacyRedirects];
  },
};

export default nextConfig;
