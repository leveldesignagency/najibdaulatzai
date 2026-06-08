import type { Metadata } from "next";
import { siteConfig } from "../site-config";
import { getGeoMetaTags } from "./geo";

export type BuildPageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  ogImage?: string;
  ogImageAlt?: string;
  noIndex?: boolean;
};

const defaultOgImage = "/images/hero-consultation.jpg";

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  ogImage = defaultOgImage,
  ogImageAlt,
  noIndex = false,
}: BuildPageMetadataOptions): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const pageUrl = `${siteConfig.url}${canonical === "/" ? "" : canonical}`;

  return {
    title: { absolute: title },
    description,
    ...(keywords?.length ? { keywords: [...keywords] } : {}),
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: pageUrl,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt ?? title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: true }
      : {
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
    other: getGeoMetaTags(canonical),
  };
}
