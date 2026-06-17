import type { Metadata } from "next";
import { pageDescriptions } from "./page-descriptions";
import { pageTitles } from "./page-titles";
import { defaultOgImage } from "./seo/entity";
import { getGeoMetaTags } from "./seo/geo";
import { homeKeywords } from "./seo/keywords";
import { publicRobots } from "./seo/robots";
import { siteConfig } from "./site-config";

export const homeMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: pageTitles.home,
    template: `%s | ${siteConfig.name}`,
  },
  description: pageDescriptions.home,
  keywords: [...homeKeywords],
  authors: [{ name: "Mr Najib Daulatzai", url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.url.replace("https://www.", ""),
  category: "health",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: pageTitles.home,
    description: pageDescriptions.home,
    images: [
      {
        url: defaultOgImage.path,
        width: defaultOgImage.width,
        height: defaultOgImage.height,
        alt: defaultOgImage.alt,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitles.home,
    description: pageDescriptions.home,
    images: [defaultOgImage.path],
  },
  robots: publicRobots,
  other: {
    ...getGeoMetaTags("/"),
    "llms.txt": `${siteConfig.url}/llms.txt`,
    "llms-full.txt": `${siteConfig.url}/llms-full.txt`,
    "ai.txt": `${siteConfig.url}/ai.txt`,
  },
};
