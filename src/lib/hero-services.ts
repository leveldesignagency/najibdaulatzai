import {
  getProcedureSpecialtyHref,
  procedureSpecialties,
} from "./procedures";

/** Homepage hero service links — matches procedures page tab order */
export const heroServices = procedureSpecialties.map((specialty) => ({
  label: specialty.shortLabel ?? specialty.label,
  href: getProcedureSpecialtyHref(specialty.slug),
}));
