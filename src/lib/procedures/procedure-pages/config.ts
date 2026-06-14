import type { ProcedureSnippetSlug } from "../procedure-snippets";
import type { ProcedureGuideSpecialtySlug } from "../index";

export type ProcedurePageConfig = {
  slug: ProcedureSnippetSlug;
  specialtySlug: ProcedureGuideSpecialtySlug;
  title: string;
  navLabel: string;
  whatAreHeading: string;
  metaDescription: string;
};

export const procedurePageConfigs: ProcedurePageConfig[] = [
  {
    slug: "haemorrhoids",
    specialtySlug: "proctology",
    title: "Haemorrhoids",
    navLabel: "Haemorrhoids",
    whatAreHeading: "What are haemorrhoids?",
    metaDescription:
      "Expert haemorrhoids (piles) treatment with Mr Najib Daulatzai: banding, sclerotherapy, and surgery in London and Hertfordshire.",
  },
  {
    slug: "anal-fissures",
    specialtySlug: "proctology",
    title: "Anal Fissures",
    navLabel: "Anal Fissures",
    whatAreHeading: "What are anal fissures?",
    metaDescription:
      "Anal fissure treatment with Mr Najib Daulatzai: medical and surgical care for acute and chronic fissures in London and Hertfordshire.",
  },
  {
    slug: "anal-fistulas",
    specialtySlug: "proctology",
    title: "Anal Fistulas",
    navLabel: "Anal Fistulas",
    whatAreHeading: "What are anal fistulas?",
    metaDescription:
      "Specialist anal fistula surgery with Mr Najib Daulatzai: fistulotomy, seton, LIFT, and advancement flap techniques in London and Hertfordshire.",
  },
  {
    slug: "pilonidal-disease",
    specialtySlug: "proctology",
    title: "Pilonidal Disease",
    navLabel: "Pilonidal Disease",
    whatAreHeading: "What is pilonidal disease?",
    metaDescription:
      "Pilonidal disease treatment with Mr Najib Daulatzai: pit picking and surgical excision in London and Hertfordshire.",
  },
  {
    slug: "rectal-prolapse",
    specialtySlug: "proctology",
    title: "Rectal Prolapse",
    navLabel: "Rectal Prolapse",
    whatAreHeading: "What is rectal prolapse?",
    metaDescription:
      "Rectal prolapse repair with Mr Najib Daulatzai: abdominal and perineal approaches including robotic surgery in London and Hertfordshire.",
  },
  {
    slug: "colorectal-cancer",
    specialtySlug: "colorectal",
    title: "Colorectal Cancer",
    navLabel: "Colorectal Cancer",
    whatAreHeading: "What is colorectal cancer?",
    metaDescription:
      "Colorectal cancer surgery with Mr Najib Daulatzai: robotic and laparoscopic resection within MDT care in London and Hertfordshire.",
  },
  {
    slug: "inflammatory-bowel-disease",
    specialtySlug: "colorectal",
    title: "Inflammatory Bowel Disease (IBD)",
    navLabel: "IBD",
    whatAreHeading: "What is inflammatory bowel disease?",
    metaDescription:
      "Surgical management of Crohn's disease and ulcerative colitis with Mr Najib Daulatzai in London and Hertfordshire.",
  },
  {
    slug: "pouch-surgery",
    specialtySlug: "colorectal",
    title: "Pouch Surgery (Ileal Pouch-Anal Anastomosis)",
    navLabel: "Pouch Surgery",
    whatAreHeading: "What is pouch surgery?",
    metaDescription:
      "Ileal pouch-anal anastomosis (J-pouch) surgery with Mr Najib Daulatzai: robotic techniques and St Mark's-trained expertise.",
  },
  {
    slug: "diverticular-disease",
    specialtySlug: "colorectal",
    title: "Diverticular Disease",
    navLabel: "Diverticular Disease",
    whatAreHeading: "What is diverticular disease?",
    metaDescription:
      "Diverticular disease and diverticulitis treatment with Mr Najib Daulatzai: robotic and laparoscopic surgery in London and Hertfordshire.",
  },
  {
    slug: "inguinal-hernias",
    specialtySlug: "hernia",
    title: "Inguinal Hernias",
    navLabel: "Inguinal",
    whatAreHeading: "What are inguinal hernias?",
    metaDescription:
      "Inguinal hernia repair with Mr Najib Daulatzai: robotic and laparoscopic techniques in London and Hertfordshire.",
  },
  {
    slug: "femoral-hernias",
    specialtySlug: "hernia",
    title: "Femoral Hernias",
    navLabel: "Femoral",
    whatAreHeading: "What are femoral hernias?",
    metaDescription:
      "Femoral hernia repair with Mr Najib Daulatzai: prompt minimally invasive surgery in London and Hertfordshire.",
  },
  {
    slug: "umbilical-hernias",
    specialtySlug: "hernia",
    title: "Umbilical Hernias",
    navLabel: "Umbilical",
    whatAreHeading: "What are umbilical hernias?",
    metaDescription:
      "Umbilical hernia repair with Mr Najib Daulatzai: day-case minimally invasive surgery in London and Hertfordshire.",
  },
  {
    slug: "incisional-hernias",
    specialtySlug: "hernia",
    title: "Incisional Hernias & Abdominal Wall Reconstruction",
    navLabel: "Incisional",
    whatAreHeading: "What are incisional hernias?",
    metaDescription:
      "Incisional hernia and abdominal wall reconstruction with Mr Najib Daulatzai in London and Hertfordshire.",
  },
  {
    slug: "diagnostic-colonoscopy",
    specialtySlug: "endoscopy",
    title: "Diagnostic Colonoscopy",
    navLabel: "Diagnostic",
    whatAreHeading: "What is a diagnostic colonoscopy?",
    metaDescription:
      "Diagnostic colonoscopy with Mr Najib Daulatzai: accredited endoscopist in London and Hertfordshire.",
  },
  {
    slug: "surveillance-colonoscopy",
    specialtySlug: "endoscopy",
    title: "Surveillance Colonoscopy",
    navLabel: "Surveillance",
    whatAreHeading: "What is surveillance colonoscopy?",
    metaDescription:
      "Surveillance colonoscopy programmes with Mr Najib Daulatzai for polyp and cancer follow-up in London and Hertfordshire.",
  },
  {
    slug: "therapeutic-colonoscopy",
    specialtySlug: "endoscopy",
    title: "Therapeutic Colonoscopy",
    navLabel: "Therapeutic",
    whatAreHeading: "What is therapeutic colonoscopy?",
    metaDescription:
      "Therapeutic colonoscopy and polypectomy with Mr Najib Daulatzai in London and Hertfordshire.",
  },
  {
    slug: "flexible-sigmoidoscopy",
    specialtySlug: "endoscopy",
    title: "Flexible Sigmoidoscopy",
    navLabel: "Sigmoidoscopy",
    whatAreHeading: "What is flexible sigmoidoscopy?",
    metaDescription:
      "Flexible sigmoidoscopy with Mr Najib Daulatzai: lower bowel investigation in London and Hertfordshire.",
  },
  {
    slug: "stoma-formation-and-reversal",
    specialtySlug: "colorectal",
    title: "Stoma Formation and Reversal",
    navLabel: "Stoma",
    whatAreHeading: "What is stoma formation and reversal?",
    metaDescription:
      "Stoma formation and reversal with Mr Najib Daulatzai: ileostomy and colostomy care in London and Hertfordshire.",
  },
  {
    slug: "appendicectomy",
    specialtySlug: "colorectal",
    title: "Appendicectomy",
    navLabel: "Appendicectomy",
    whatAreHeading: "What is an appendicectomy?",
    metaDescription:
      "Appendicectomy with Mr Najib Daulatzai: robotic and laparoscopic emergency surgery in London and Hertfordshire.",
  },
];

export const procedureDetailSlugs = procedurePageConfigs.map((config) => config.slug);
