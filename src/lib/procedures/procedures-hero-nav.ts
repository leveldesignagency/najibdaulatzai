import { procedureSpecialties, type ProcedureSpecialtySlug } from "./index";

export type ProceduresHeroNavItem = {
  kind: "specialty";
  slug: ProcedureSpecialtySlug;
  label: string;
  shortLabel?: string;
};

export const proceduresHeroNavItems: ProceduresHeroNavItem[] =
  procedureSpecialties.map((specialty) => ({
    kind: "specialty" as const,
    slug: specialty.slug,
    label: specialty.label,
    shortLabel: specialty.shortLabel,
  }));
