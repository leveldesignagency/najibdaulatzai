import type { NextConfig } from "next";

/** Legacy /blog paths → canonical /articles */
const blogRedirects = [
  { source: "/blog", destination: "/articles", permanent: true },
  { source: "/blog/:slug*", destination: "/articles/:slug*", permanent: true },
] as const;

const procedureRedirects = [
  { source: "/procedures/additional", destination: "/procedures/colorectal", permanent: true },
] as const;

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 420, 640],
  },
  async redirects() {
    return [...blogRedirects, ...procedureRedirects];
  },
};

export default nextConfig;
