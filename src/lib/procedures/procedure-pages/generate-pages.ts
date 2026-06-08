import { procedureSnippets } from "../procedure-snippets";
import { procedureSpecialtyFaqIds } from "../../patient-faq-content";
import { procedureSpecialties } from "../index";
import { haemorrhoidsPage } from "./haemorrhoids";
import { procedurePageConfigs } from "./config";
import { getProcedureDetailSections } from "./detail-content";
import type { ProcedureDetailPage } from "./types";

function getCardForSlug(slug: string) {
  for (const specialty of procedureSpecialties) {
    const card = specialty.cards.find((item) => item.slug === slug);
    if (card) {
      return card;
    }
  }
  return null;
}

function buildPageFromConfig(
  config: (typeof procedurePageConfigs)[number],
): ProcedureDetailPage {
  const card = getCardForSlug(config.slug);

  return {
    slug: config.slug,
    specialtySlug: config.specialtySlug,
    title: config.title,
    navLabel: config.navLabel,
    metaTitle: `${config.title} | Mr Najib Daulatzai | London & Hertfordshire`,
    metaDescription: config.metaDescription,
    heroImage: card?.image ?? "/images/procedures-home.jpg",
    heroImageAlt: card?.imageAlt ?? `${config.title} procedure with Mr Najib Daulatzai`,
    heroImageCopyright: card?.imageCopyright,
    heroImageObjectPosition: card?.imageObjectPosition,
    whatAreHeading: config.whatAreHeading,
    whatAreIntro: procedureSnippets[config.slug],
    sections: getProcedureDetailSections(config.slug),
    faqIds: procedureSpecialtyFaqIds[config.specialtySlug],
  };
}

const generatedPages = procedurePageConfigs
  .filter((config) => config.slug !== "haemorrhoids")
  .map(buildPageFromConfig);

export const allProcedureDetailPages: ProcedureDetailPage[] = [
  { ...haemorrhoidsPage, navLabel: "Haemorrhoids" },
  ...generatedPages,
];
