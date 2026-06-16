import {
  getProceduresTabHref,
  procedureSpecialties,
} from "./procedures";

/** Homepage hero service links — main procedures hub tabs */
export const heroServices = procedureSpecialties.map((specialty) => ({
  label: specialty.shortLabel ?? specialty.label,
  href: getProceduresTabHref(specialty.slug),
}));
