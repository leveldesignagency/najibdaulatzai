import {
  getProceduresTabHref,
  procedureSpecialties,
} from "./procedures";

/** Homepage hero service links — main procedures hub tabs (excludes robotic tab; see hero caption). */
export const heroServices = procedureSpecialties
  .filter((specialty) => specialty.slug !== "robotic-minimally-invasive")
  .map((specialty) => ({
    label: specialty.label,
    href: getProceduresTabHref(specialty.slug),
  }));
