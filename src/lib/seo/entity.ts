import { reviewPlatforms } from "@/lib/testimonials-content";
import { siteConfig } from "@/lib/site-config";

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
    name: "Consultant Colorectal and General Surgeon",
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
  "Mr Najib Daulatzai: Colorectal & General Surgery";

export const organizationAlternateNames = [
  "Najib Daulatzai Colorectal Surgery",
  "ndsurgeon",
  "ndsurgeon.com",
] as const;

export const defaultOgImage = {
  path: "/images/hero-consultation.jpg",
  width: 1200,
  height: 630,
  alt: "Mr Najib Daulatzai, consultant colorectal and general surgeon in London and Hertfordshire",
} as const;

export const defaultOgImageUrl = `${siteConfig.url}${defaultOgImage.path}`;
