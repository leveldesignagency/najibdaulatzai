import type { Metadata } from "next";
import { siteConfig } from "./site-config";

export const homeMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Najib Daulatzai",
    "colorectal surgeon London",
    "general surgeon Hertfordshire",
    "colorectal surgeon Hertfordshire",
    "private colorectal surgeon London",
    "NHS colorectal surgeon Watford",
    "Spire Bushey Hospital surgeon",
    "HCA Wellington Hospital surgeon",
    "HCA Elstree surgeon",
    "robotic colorectal surgery London",
  ],
  authors: [{ name: "Mr Najib Daulatzai" }],
  creator: "LEVEL DESIGN AGENCY LTD",
  publisher: "LEVEL DESIGN AGENCY LTD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/images/hero-consultation.png",
        width: 1200,
        height: 630,
        alt: "Mr Najib Daulatzai, colorectal and general surgeon, consulting with a patient in his London and Hertfordshire practice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/images/hero-consultation.png"],
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
    "geo.region": "GB-LND",
    "geo.placename": "London, Hertfordshire",
    "geo.position": "51.6565;-0.3903",
    ICBM: "51.6565, -0.3903",
  },
};
