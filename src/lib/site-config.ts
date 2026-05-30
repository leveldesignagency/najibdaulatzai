export const siteConfig = {
  name: "Najib Daulatzai",
  title: "Najib Daulatzai Colorectal & General Surgeon in London & Hertfordshire",
  description:
    "Mr Najib Daulatzai is a consultant colorectal and general surgeon serving patients across London and Hertfordshire through NHS and private practice.",
  url: "https://www.ndsurgeon.com",
  locale: "en_GB",
  phone: "",
  email: "",
} as const;

export const menuLinks = [
  { label: "HOME", href: "/", icon: "home" as const },
  { label: "PROCEDURES", href: "/procedures" },
  { label: "ABOUT", href: "/about" },
  { label: "RESEARCH", href: "/research" },
  { label: "TESTIMONIALS", href: "/testimonials" },
  { label: "CONTACT", href: "/contact" },
] as const;

export const footerNavLinks = menuLinks.filter((link) => link.href !== "/");

export const values = [
  "Patient-Centered Care",
  "Excellence and Innovation",
  "Integrity and Transparency",
  "Collaboration and Teamwork",
  "Continuous Improvement",
] as const;

export const nhsLocation = {
  label: "NHS PRACTICE",
  name: "West Hertfordshire Teaching Hospitals NHS Trust",
  lines: ["Vicarage Road", "Watford", "WD18 0HB"],
  mapQuery: "West Hertfordshire Teaching Hospitals NHS Trust, Vicarage Road, Watford WD18 0HB",
  mapEmbed:
    "https://maps.google.com/maps?q=West+Hertfordshire+Teaching+Hospitals+NHS+Trust,+Vicarage+Road,+Watford+WD18+0HB&output=embed",
} as const;

export const privateLocations = [
  {
    name: "HCA Elstree Waterfront Outpatients Centre",
    lines: [
      "Beaufort House",
      "Elstree Road",
      "Elstree",
      "Borehamwood",
      "WD6 3BS",
    ],
    mapQuery: "HCA Elstree Waterfront Outpatients Centre, Beaufort House, Elstree Road, Borehamwood WD6 3BS",
    mapEmbed:
      "https://maps.google.com/maps?q=HCA+Elstree+Waterfront+Outpatients+Centre,+Beaufort+House,+Elstree+Road,+Borehamwood+WD6+3BS&output=embed",
  },
  {
    name: "Spire Bushey Hospital",
    lines: ["Heathbourne Road", "Bushey", "WD23 1RD"],
    mapQuery: "Spire Bushey Hospital, Heathbourne Road, Bushey WD23 1RD",
    mapEmbed:
      "https://maps.google.com/maps?q=Spire+Bushey+Hospital,+Heathbourne+Road,+Bushey+WD23+1RD&output=embed",
  },
  {
    name: "HCA The Wellington Hospital",
    lines: ["8A Wellington Place", "London", "NW8 9LE"],
    mapQuery: "HCA The Wellington Hospital, 8A Wellington Place, London NW8 9LE",
    mapEmbed:
      "https://maps.google.com/maps?q=HCA+The+Wellington+Hospital,+8A+Wellington+Place,+London+NW8+9LE&output=embed",
  },
] as const;

export const faqItems = [
  {
    question: "Who is Mr Najib Daulatzai?",
    answer:
      "Mr Najib Daulatzai is a consultant colorectal and general surgeon practising in London and Hertfordshire, offering surgical care through both NHS and private practice.",
  },
  {
    question: "Where does Mr Najib Daulatzai practise?",
    answer:
      "Mr Najib Daulatzai sees patients at West Hertfordshire Teaching Hospitals NHS Trust in Watford, and at private locations including HCA Elstree Waterfront Outpatients Centre, Spire Bushey Hospital, and HCA The Wellington Hospital in London.",
  },
  {
    question: "What type of surgeon is Najib Daulatzai?",
    answer:
      "Najib Daulatzai is a colorectal and general surgeon, providing a range of surgical procedures through both the NHS and private practice.",
  },
  {
    question: "How can I book an appointment with Mr Najib Daulatzai?",
    answer:
      "You can book an appointment through the contact page or by reaching out to one of the listed NHS or private practice locations in London and Hertfordshire.",
  },
] as const;
