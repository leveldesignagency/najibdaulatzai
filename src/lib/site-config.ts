export const siteConfig = {
  name: "Najib Daulatzai",
  title: "Najib Daulatzai Robotic, Colorectal and General Surgeon in London & Hertfordshire",
  description:
    "Mr Najib Daulatzai is an NHS and private consultant colorectal & general surgeon in London & Hertfordshire, specialising in robotic and minimally invasive surgery.",
  url: "https://www.ndsurgeon.com",
  locale: "en_GB",
  phone: "+44 7733 897972",
  phoneHref: "tel:+447733897972",
  email: "info@ndaulatzai.com",
  emailHref: "mailto:info@ndaulatzai.com",
} as const;

export const articlesPath = "/articles" as const;

export const bookCtaParagraph =
  "Consultations are available through NHS and private practice at locations across London and Hertfordshire.";

export const menuLinks = [
  { label: "HOME", href: "/", icon: "home" as const },
  { label: "PROCEDURES", href: "/procedures" },
  { label: "ROBOTIC SURGERY", href: "/robotic-surgery" },
  { label: "ARTICLES", href: articlesPath },
  { label: "ABOUT", href: "/about" },
  { label: "RESEARCH", href: "/research" },
  { label: "TESTIMONIALS", href: "/testimonials" },
  { label: "GP REFERRALS", href: "/gp-referrals" },
  { label: "PATIENT FAQ", href: "/patient-faq" },
  { label: "CONTACT", href: "/contact" },
] as const;

export const footerNavLinks = [
  { label: "PROCEDURES", href: "/procedures" },
  { label: "ROBOTIC SURGERY", href: "/robotic-surgery" },
  { label: "ARTICLES", href: articlesPath },
  { label: "ABOUT", href: "/about" },
  { label: "RESEARCH", href: "/research" },
  { label: "TESTIMONIALS", href: "/testimonials" },
  { label: "GP REFERRALS", href: "/gp-referrals" },
  { label: "PATIENT FAQ", href: "/patient-faq" },
  { label: "CONTACT", href: "/contact" },
] as const;

export const nhsLocation = {
  label: "NHS PRACTICE",
  name: "West Hertfordshire Teaching Hospitals NHS Trust",
  lines: ["Vicarage Road", "Watford", "WD18 0HB"],
  mapQuery: "West Hertfordshire Teaching Hospitals NHS Trust, Vicarage Road, Watford WD18 0HB",
  mapEmbed:
    "https://www.google.com/maps?q=West+Hertfordshire+Teaching+Hospitals+NHS+Trust,+Vicarage+Road,+Watford+WD18+0HB&output=embed",
} as const;

export const spireBusheyBookingUrl =
  "https://appointments.spirehealthcare.com/?c=C6053761" as const;

export const privateLocations = [
  {
    name: "HCA Golders Green Outpatients",
    lines: ["Roman House", "296 Golders Green Road", "London NW11 9PY"],
    note: "Appointments on request",
    booking: { label: "Enquire", href: "/contact#get-in-touch" },
    mapQuery:
      "HCA Golders Green Outpatients, Roman House, 296 Golders Green Road, London NW11 9PY",
    mapEmbed:
      "https://www.google.com/maps?q=HCA+Golders+Green+Outpatients,+Roman+House,+296+Golders+Green+Road,+London+NW11+9PY&output=embed",
  },
  {
    name: "Spire Bushey Hospital",
    lines: ["Heathbourne Road", "Bushey", "WD23 1RD"],
    booking: {
      label: "Book online",
      href: spireBusheyBookingUrl,
    },
    mapQuery: "Spire Bushey Hospital, Heathbourne Road, Bushey WD23 1RD",
    mapEmbed:
      "https://www.google.com/maps?q=Spire+Bushey+Hospital,+Heathbourne+Road,+Bushey+WD23+1RD&output=embed",
  },
  {
    name: "HCA The Wellington Hospital",
    lines: ["8A Wellington Place", "London", "NW8 9LE"],
    booking: { label: "Enquire", href: "/contact#get-in-touch" },
    mapQuery: "HCA The Wellington Hospital, 8A Wellington Place, London NW8 9LE",
    mapEmbed:
      "https://www.google.com/maps?q=HCA+The+Wellington+Hospital,+8A+Wellington+Place,+London+NW8+9LE&output=embed",
  },
  {
    name: "Cleveland Clinic London",
    lines: ["33 Grosvenor Place", "London", "SW1X 7HY"],
    booking: { label: "Enquire", href: "/contact#get-in-touch" },
    mapQuery: "Cleveland Clinic London, 33 Grosvenor Place, London SW1X 7HY",
    mapEmbed:
      "https://www.google.com/maps?q=Cleveland+Clinic+London,+33+Grosvenor+Place,+London+SW1X+7HY&output=embed",
  },
] as const;

export const faqItems = [
  {
    question: "Who is Mr Najib Daulatzai?",
    answer:
      "Mr Najib Daulatzai is a consultant colorectal and general surgeon in London and Hertfordshire, specialising in robotic (da Vinci Xi and da Vinci 5), laparoscopic, and endoscopic surgery through NHS and private practice.",
  },
  {
    question: "Where does Mr Najib Daulatzai practise?",
    answer:
      "NHS: West Hertfordshire Teaching Hospitals NHS Trust, Vicarage Road, Watford WD18 0HB. Private: Spire Bushey Hospital, HCA The Wellington Hospital (London NW8), Cleveland Clinic London (33 Grosvenor Place, SW1X 7HY), and HCA Golders Green Outpatients (London NW11, appointments on request).",
  },
  {
    question: "What conditions does Mr Najib Daulatzai treat?",
    answer:
      "Colorectal cancer, inflammatory bowel disease, diverticular disease, haemorrhoids, anal fissures and fistulas, hernias, and bowel symptoms requiring colonoscopy or surgery. He also performs stoma surgery and appendicectomy.",
  },
  {
    question: "How can I book an appointment with Mr Najib Daulatzai?",
    answer:
      "Phone +44 7733 897972 or email info@ndaulatzai.com. Private patients are usually seen within one week. NHS referrals are via GP e-RS to West Hertfordshire Teaching Hospitals NHS Trust.",
  },
  {
    question: "Does Mr Najib Daulatzai perform robotic colorectal surgery?",
    answer:
      "Yes. Mr Daulatzai is multi-platform trained on the da Vinci Xi and da Vinci 5 robotic systems and performs robotic colorectal and hernia surgery at leading London and Hertfordshire hospitals.",
  },
  {
    question: "Which insurers does Mr Najib Daulatzai accept?",
    answer:
      "Bupa, AXA Health, Aviva, Vitality, WPA, Healix, and self-funding patients. Self-pay fees are £250 for a new consultation and £180 for a follow-up.",
  },
] as const;
