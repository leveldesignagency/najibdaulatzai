import type { ProcedureSnippetSlug } from "../procedure-snippets";
import type { ProcedureSpecialtySlug } from "../index";

export type ProcedureDetailSection = {
  heading: string;
  paragraphs: readonly string[];
};

export type ProcedureDetailPage = {
  slug: ProcedureSnippetSlug;
  specialtySlug: ProcedureSpecialtySlug;
  title: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  heroImageCopyright?: string;
  heroImageObjectPosition?: string;
  whatAreHeading: string;
  whatAreIntro: readonly string[];
  sections: readonly ProcedureDetailSection[];
  faqIds: readonly string[];
};
