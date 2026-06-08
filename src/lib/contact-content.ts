export const contactIntro =
  "You can reach out via phone, email, WhatsApp or you can always contact the practices below";

export const contactHeroImage = {
  src: "/images/contact-page-hero.jpg",
  alt: "Mr Najib Daulatzai speaking with a patient during a private surgical consultation",
} as const;

export const privatePracticeLabel = "PRIVATE PRACTICE";

export const privatePracticeBookingNote =
  "To book an appointment, please contact us using the details above. Alternatively, you can book through your preferred hospital using the links below.";

export const nhsPracticeLabel = "NHS PRACTICE";

import { siteConfig } from "./site-config";

export const contactPhone = siteConfig.phone;
export const contactPhoneHref = siteConfig.phoneHref;

export const contactEmail = "info@ndaulatzai.com";
export const contactEmailHref = "mailto:info@ndaulatzai.com";

export const whatsAppLabel = "Chat to us on WhatsApp";
export const whatsAppHref = "https://wa.me/447733897972";
