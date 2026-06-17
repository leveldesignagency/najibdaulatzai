import type { Metadata } from "next";
import { siteConfig } from "../site-config";
import { defaultOgImage, getOgImageAsset } from "./entity";
import { getGeoMetaTags } from "./geo";
import { publicRobots, privatePreviewRobots } from "./robots";

const aiDiscoveryMeta = {
  "llms.txt": `${siteConfig.url}/llms.txt`,
  "llms-full.txt": `${siteConfig.url}/llms-full.txt`,
  "ai.txt": `${siteConfig.url}/ai.txt`,
} as const;

export type BuildPageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  ogImage?: string;
  ogImageAlt?: string;
  noIndex?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  ogImage = defaultOgImage.path,
  ogImageAlt,
  noIndex = false,
}: BuildPageMetadataOptions): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const pageUrl = `${siteConfig.url}${canonical === "/" ? "" : canonical}`;
  const ogImageAsset = getOgImageAsset(ogImage);

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
          width: ogImageAsset.width,
          height: ogImageAsset.height,
          alt: ogImageAlt ?? ogImageAsset.alt,
          type: ogImage.endsWith(".jpg") ? "image/jpeg" : undefined,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex ? privatePreviewRobots : publicRobots,
    other: {
      ...getGeoMetaTags(canonical),
      ...aiDiscoveryMeta,
    },
  };
}
