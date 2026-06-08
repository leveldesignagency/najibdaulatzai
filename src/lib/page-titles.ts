import type { Metadata } from "next";

/** Client SEO page titles (note 1.3), word for word */
export const pageTitles = {
  home: "Private Colorectal Surgeon London & Hertfordshire | Robotic Surgery | Mr Najib Daulatzai",
  about: "Meet Mr Najib Daulatzai | Your Colorectal Surgeon in London & Hertfordshire",
  procedures:
    "Colorectal, Hernia & Endoscopy Procedures | Minimally Invasive Surgery London | Mr Najib Daulatzai",
  roboticSurgery:
    "Robotic Colorectal Surgery London | da Vinci Surgeon | Mr Najib Daulatzai",
  testimonials: "Patient Reviews | Private Colorectal Surgeon London | Mr Najib Daulatzai",
  research: "Research & Publications | Mr Najib Daulatzai | Colorectal Surgeon",
  contact: "Book a Private Surgical Consultation | London, Harrow & Watford | Mr Najib Daulatzai",
  gpReferrals: "GP Referrals | NHS e-RS & Private Referrals | Mr Najib Daulatzai",
  patientFaq: "Patient FAQ | Private Care, Insurance & Recovery | Mr Najib Daulatzai",
  blog: "Clinical Articles & Blog | Colorectal Surgery | Mr Najib Daulatzai",
  privacy: "Privacy & Cookies | Mr Najib Daulatzai",
} as const;

export function absolutePageTitle(title: string): Metadata["title"] {
  return { absolute: title };
}
