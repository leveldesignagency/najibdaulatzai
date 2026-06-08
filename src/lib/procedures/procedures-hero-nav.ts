import { procedureSpecialties, type ProcedureSpecialtySlug } from "./index";

export type ProceduresHeroNavItem =
  | {
      kind: "specialty";
      slug: ProcedureSpecialtySlug;
      label: string;
    }
  | {
      kind: "link";
      href: string;
      label: string;
    }
  | {
      kind: "scroll";
      targetId: string;
      label: string;
      shortLabel?: string;
    };

export const proceduresHeroNavItems: ProceduresHeroNavItem[] = [
  ...procedureSpecialties.map((specialty) => ({
    kind: "specialty" as const,
    slug: specialty.slug,
    label: specialty.label,
  })),
  {
    kind: "link",
    href: "/robotic-surgery",
    label: "ROBOTICS",
  },
  {
    kind: "scroll",
    targetId: "minimally-invasive",
    label: "MINIMALLY INVASIVE SURGERY",
    shortLabel: "MIN. INVASIVE",
  },
];
