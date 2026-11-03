import { selfPayFees } from "./about-content";
import { siteConfig } from "./site-config";

export const contactIntro =
  "You can reach out via phone, email, WhatsApp or you can always contact the practices below";

export const contactHeroImage = {
  src: "/images/contact-page-hero.jpg",
  alt: "Mr Najib Daulatzai speaking with a patient during a private surgical consultation",
} as const;

export const privatePracticeLabel = "PRIVATE PRACTICE";

export const nhsPracticeLabel = "NHS PRACTICE";

export const contactPhone = siteConfig.phone;
export const contactPhoneHref = siteConfig.phoneHref;

export const contactEmail = "info@ndaulatzai.com";
export const contactEmailHref = "mailto:info@ndaulatzai.com";

export const whatsAppLabel = "Chat to us on WhatsApp";
export const whatsAppHref = "https://wa.me/447733897972";

export const spireClinicTimes = [
  { day: "Mondays", hours: "18:00–19:30" },
  { day: "Alternate Wednesdays", hours: "13:30–18:00" },
  { day: "Alternate Fridays", hours: "10:00–12:30" },
] as const;

export const otherSitesOnRequestNote =
  "Appointments at The Wellington Hospital, HCA Golders Green and Cleveland Clinic London are by appointment on request.";

export const contactSelfPaySummary = `Self-pay fees: £${selfPayFees.newConsultation} for a new consultation and £${selfPayFees.followUp} for a follow-up.`;

export const privatePracticeBookingNote =
  "Book online at Spire Bushey Hospital from the homepage Locations section, or contact the practice here for appointments at other sites.";
