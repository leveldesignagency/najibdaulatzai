import {
  procedureSnippets,
  type ProcedureSnippetSlug,
} from "./procedure-snippets";
import {
  getProcedureImage,
  intuitiveSurgicalImageCredit,
} from "./procedure-images";

export const minimallyInvasiveSurgery = {
  title: "Minimally Invasive Surgery",
  paragraphs: [
    "I specialise in minimally invasive surgery for bowel resections, addressing both cancer and benign conditions such as inflammatory bowel disease and diverticular disease. Utilising robotic and laparoscopic techniques, my approach offers numerous benefits to patients, including faster recovery times, reduced pain and scarring, lower risk of complications, enhanced surgical precision, and minimized damage to surrounding tissues.",
    "Minimally invasive surgery is a sophisticated technique that allows for performing procedures through small incisions using specialised instruments and cameras, significantly differing from traditional open surgery which necessitates larger incisions. Among the advanced forms of this technique is robotic surgery, where a surgeon utilises a robotic system to manipulate surgical instruments with exceptional precision and accuracy.",
  ],
  image: {
    src: "/images/procedures/da-vinci-5-console-or.jpg",
    alt: "da Vinci surgical system console in an operating room, used for robotic and minimally invasive colorectal surgery",
    copyrightNotice: intuitiveSurgicalImageCredit,
    objectPosition: "center 58%",
  },
  roboticSurgeryLink: {
    label: "Robotic colorectal surgery in London",
    href: "/robotic-surgery",
  },
} as const;

export type ProcedureSpecialtySlug =
  | "colorectal"
  | "hernia"
  | "proctology"
  | "endoscopy"
  | "robotic-minimally-invasive";

export type ProcedureGuideSpecialtySlug = Exclude<
  ProcedureSpecialtySlug,
  "robotic-minimally-invasive"
>;

export type ProcedureCard = {
  slug: ProcedureSnippetSlug;
  title: string;
  hoverParagraphs: readonly string[];
  href: string;
  variant: "image";
  image: string;
  imageAlt: string;
  imageCopyright?: string;
  imageObjectPosition?: string;
};

export type ProcedureSpecialty = {
  slug: ProcedureSpecialtySlug;
  label: string;
  shortLabel?: string;
  metaTitle: string;
  metaDescription: string;
  pageTitle: string;
  intro: string;
  cards: ProcedureCard[];
  /** When false, no dedicated /procedures/[slug] guide page (tab content only). */
  guidePage?: boolean;
};

function procedureCard(
  specialty: ProcedureSpecialtySlug,
  slug: ProcedureSnippetSlug,
  title: string,
): ProcedureCard {
  const { src, alt, copyrightNotice, objectPosition } = getProcedureImage(slug);
  return {
    slug,
    title,
    hoverParagraphs: procedureSnippets[slug],
    href: `/procedures/${slug}`,
    variant: "image",
    image: src,
    imageAlt: alt,
    imageCopyright: copyrightNotice,
    imageObjectPosition: objectPosition,
  };
}

export const procedureSpecialties: ProcedureSpecialty[] = [
  {
    slug: "colorectal",
    label: "COLORECTAL",
    metaTitle: "Colorectal Surgery Procedures",
    metaDescription:
      "Specialist colorectal surgery by Mr Najib Daulatzai including colorectal cancer, inflammatory bowel disease, pouch surgery, diverticular disease, stoma surgery, and appendicectomy in London and Hertfordshire.",
    pageTitle: "Colorectal Surgery",
    intro:
      "Colorectal surgery addresses conditions of the colon and rectum, including cancer, inflammatory bowel disease, diverticular disease, and complex reconstructive procedures. Mr Najib Daulatzai offers robotic and laparoscopic techniques through NHS and private practice.",
    cards: [
      procedureCard("colorectal", "colorectal-cancer", "Colorectal Cancer"),
      procedureCard(
        "colorectal",
        "inflammatory-bowel-disease",
        "Inflammatory Bowel Disease (IBD)",
      ),
      procedureCard(
        "colorectal",
        "pouch-surgery",
        "Pouch Surgery (Ileal Pouch-Anal Anastomosis)",
      ),
      procedureCard("colorectal", "diverticular-disease", "Diverticular Disease"),
      procedureCard(
        "colorectal",
        "stoma-formation-and-reversal",
        "Stoma Formation and Reversal",
      ),
      procedureCard("colorectal", "appendicectomy", "Appendicectomy"),
    ],
  },
  {
    slug: "hernia",
    label: "HERNIAS",
    metaTitle: "Hernia Repair Procedures",
    metaDescription:
      "Specialist hernia repair by Mr Najib Daulatzai including inguinal, femoral, umbilical, and incisional hernias using laparoscopic and open techniques.",
    pageTitle: "Hernia Repair",
    intro:
      "Hernia repair is one of the most common general surgical procedures. Mr Najib Daulatzai offers tailored surgical solutions using both open and minimally invasive laparoscopic techniques to achieve durable repair and support a swift return to normal activity.",
    cards: [
      procedureCard("hernia", "inguinal-hernias", "Inguinal Hernias"),
      procedureCard("hernia", "femoral-hernias", "Femoral Hernias"),
      procedureCard("hernia", "umbilical-hernias", "Umbilical Hernias"),
      procedureCard(
        "hernia",
        "incisional-hernias",
        "Incisional Hernias & Abdominal Wall Reconstruction",
      ),
    ],
  },
  {
    slug: "proctology",
    label: "PROCTOLOGY",
    metaTitle: "Proctology Procedures",
    metaDescription:
      "Expert proctology care from Mr Najib Daulatzai including treatment for haemorrhoids, anal fissures, fistulas, and pilonidal disease in London and Hertfordshire.",
    pageTitle: "Proctology",
    intro:
      "Proctology focuses on conditions affecting the anus, rectum, and surrounding tissues. Mr Najib Daulatzai provides comprehensive assessment and surgical management for a wide range of proctological conditions through both NHS and private practice.",
    cards: [
      procedureCard("proctology", "haemorrhoids", "Haemorrhoids"),
      procedureCard("proctology", "anal-fissures", "Anal Fissures"),
      procedureCard("proctology", "anal-fistulas", "Anal Fistulas"),
      procedureCard("proctology", "pilonidal-disease", "Pilonidal Disease"),
      procedureCard("proctology", "rectal-prolapse", "Rectal Prolapse"),
    ],
  },
  {
    slug: "endoscopy",
    label: "ENDOSCOPY",
    metaTitle: "Endoscopy Procedures",
    metaDescription:
      "Diagnostic and therapeutic endoscopy including colonoscopy and polypectomy with Mr Najib Daulatzai at NHS and private hospitals in London and Hertfordshire.",
    pageTitle: "Endoscopy",
    intro:
      "Endoscopy allows direct visual examination of the digestive tract and enables both diagnosis and treatment in a single procedure. Mr Najib Daulatzai performs colonoscopy and related endoscopic procedures with a focus on patient comfort, safety, and thorough clinical assessment.",
    cards: [
      procedureCard("endoscopy", "diagnostic-colonoscopy", "Diagnostic Colonoscopy"),
      procedureCard("endoscopy", "surveillance-colonoscopy", "Surveillance Colonoscopy"),
      procedureCard("endoscopy", "therapeutic-colonoscopy", "Therapeutic Colonoscopy"),
      procedureCard("endoscopy", "flexible-sigmoidoscopy", "Flexible Sigmoidoscopy"),
    ],
  },
  {
    slug: "robotic-minimally-invasive",
    label: "ROBOTIC & MINIMALLY INVASIVE SURGERY",
    shortLabel: "ROBOTIC & MIN. INVASIVE",
    metaTitle: "Robotic & Minimally Invasive Surgery",
    metaDescription:
      "Robotic and minimally invasive colorectal surgery with Mr Najib Daulatzai using da Vinci Xi and da Vinci 5 systems in London and Hertfordshire.",
    pageTitle: "Robotic & Minimally Invasive Surgery",
    intro:
      "Mr Najib Daulatzai is multi-platform trained on the da Vinci Xi and da Vinci 5 robotic systems, offering robotic and laparoscopic colorectal surgery through NHS and private practice.",
    cards: [],
    guidePage: false,
  },
];

export const procedureSpecialtyMap = Object.fromEntries(
  procedureSpecialties.map((specialty) => [specialty.slug, specialty]),
) as Record<ProcedureSpecialtySlug, ProcedureSpecialty>;

export function getProcedureSpecialty(slug: string) {
  return procedureSpecialtyMap[slug as ProcedureSpecialtySlug] ?? null;
}

export function getProcedureSpecialtyHref(slug: ProcedureSpecialtySlug): string {
  const specialty = procedureSpecialtyMap[slug];
  if (specialty?.guidePage === false) {
    return `/procedures#${slug}`;
  }
  return `/procedures/${slug}`;
}

export function isProcedureGuidePage(slug: string): boolean {
  const specialty = getProcedureSpecialty(slug);
  return specialty !== null && specialty.guidePage !== false;
}

export { getProcedureImage } from "./procedure-images";
