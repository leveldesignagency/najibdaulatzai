import { reviewPlatforms } from "@/lib/testimonials-content";
import { siteConfig } from "@/lib/site-config";

const physicianImageAlt =
  "Mr Najib Daulatzai, consultant colorectal and general surgeon in London and Hertfordshire";

/** Canonical entity IDs for JSON-LD @graph linking */
export const seoEntityIds = {
  organization: `${siteConfig.url}/#medical-organization`,
  physician: `${siteConfig.url}/#physician`,
  website: `${siteConfig.url}/#website`,
} as const;

export const physicianSameAs = [
  siteConfig.url,
  ...reviewPlatforms.map((platform) => platform.href),
] as const;

export const physicianCredentials = [
  {
    name: "Consultant Robotic, Colorectal and General Surgeon",
    category: "Medical qualification",
  },
  {
    name: "Master's degree in Surgical Sciences, University College London",
    category: "degree",
  },
  {
    name: "MD (Research), Imperial College London",
    category: "degree",
  },
] as const;

export const physicianKnowsAbout = [
  "Colorectal surgery",
  "General surgery",
  "Robotic colorectal surgery",
  "da Vinci Xi robotic surgery",
  "da Vinci 5 (DV5) robotic surgery",
  "Minimally invasive surgery",
  "Laparoscopic colorectal surgery",
  "Colonoscopy",
  "Flexible sigmoidoscopy",
  "Bowel cancer surgery",
  "Rectal cancer surgery",
  "Inflammatory bowel disease surgery",
  "Ulcerative colitis surgery",
  "Crohn's disease surgery",
  "Diverticular disease surgery",
  "Haemorrhoids and proctology",
  "Anal fistula surgery",
  "Hernia repair",
  "Stoma surgery",
  "Appendicectomy",
  "Patient-centred surgical care",
] as const;

export const physicianLanguages = ["English", "Pashto", "Farsi"] as const;

export const organizationName =
  "Mr Najib Daulatzai: Robotic, Colorectal & General Surgery";

export const organizationAlternateNames = [
  "Najib Daulatzai Colorectal Surgery",
  "ndsurgeon",
  "ndsurgeon.com",
] as const;

export type SiteImageAsset = {
  path: string;
  width: number;
  height: number;
  alt: string;
};

/** 1200×630 — Open Graph, Twitter, link previews */
export const defaultOgImage: SiteImageAsset = {
  path: "/images/og/social-share-najib.jpg",
  width: 1200,
  height: 630,
  alt: physicianImageAlt,
};

/** 1200×1200 — Google Business profile, Physician schema, knowledge panel */
export const physicianProfileImage: SiteImageAsset = {
  path: "/images/og/social-share-najib-profile.jpg",
  width: 1200,
  height: 1200,
  alt: physicianImageAlt,
};

/** High-resolution portrait for rich results */
export const physicianWideImage: SiteImageAsset = {
  path: "/images/og/social-share-najib-wide.jpg",
  width: 1920,
  height: 1280,
  alt: physicianImageAlt,
};

export const siteLogoImage: SiteImageAsset = {
  path: "/Logos/Najib_Daulatzai_Logo.svg",
  width: 512,
  height: 128,
  alt: "Najib Daulatzai — colorectal and general surgeon",
};

export const defaultOgImageUrl = `${siteConfig.url}${defaultOgImage.path}`;
export const physicianProfileImageUrl = `${siteConfig.url}${physicianProfileImage.path}`;
export const physicianWideImageUrl = `${siteConfig.url}${physicianWideImage.path}`;
export const siteLogoImageUrl = `${siteConfig.url}${siteLogoImage.path}`;

export function absoluteSiteImageUrl(path: string) {
  return `${siteConfig.url}${path}`;
}

export function toSchemaImageObject(asset: SiteImageAsset) {
  return {
    "@type": "ImageObject" as const,
    url: absoluteSiteImageUrl(asset.path),
    width: asset.width,
    height: asset.height,
    caption: asset.alt,
  };
}

const ogImageCatalog = new Map<string, SiteImageAsset>([
  [defaultOgImage.path, defaultOgImage],
  [physicianProfileImage.path, physicianProfileImage],
  [physicianWideImage.path, physicianWideImage],
]);

export function getOgImageAsset(path: string): SiteImageAsset {
  return ogImageCatalog.get(path) ?? defaultOgImage;
}
