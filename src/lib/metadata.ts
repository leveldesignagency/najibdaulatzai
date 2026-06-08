import type { Metadata } from "next";
import { pageDescriptions } from "./page-descriptions";
import { pageTitles } from "./page-titles";
import { getGeoMetaTags } from "./seo/geo";
import { homeKeywords } from "./seo/keywords";
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
  creator: "LEVEL DESIGN AGENCY LTD",
  publisher: "LEVEL DESIGN AGENCY LTD",
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
        url: "/images/hero-consultation.jpg",
        width: 1200,
        height: 630,
        alt: "Mr Najib Daulatzai, colorectal and general surgeon, consulting with a patient in his London and Hertfordshire practice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitles.home,
    description: pageDescriptions.home,
    images: ["/images/hero-consultation.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    ...getGeoMetaTags("/"),
    "llms.txt": `${siteConfig.url}/llms.txt`,
  },
};
