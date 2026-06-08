import { procedurePageConfigs } from "./config";
import { allProcedureDetailPages } from "./generate-pages";
import type { ProcedureDetailPage } from "./types";

export type { ProcedureDetailPage, ProcedureDetailSection } from "./types";

export const procedureDetailPages: ProcedureDetailPage[] = allProcedureDetailPages;

export { procedureDetailSlugs } from "./config";

const procedureDetailMap = Object.fromEntries(
  procedureDetailPages.map((page) => [page.slug, page]),
) as Record<string, ProcedureDetailPage>;

export function getProcedureDetailPage(slug: string): ProcedureDetailPage | null {
  return procedureDetailMap[slug] ?? null;
}

export function hasProcedureDetailPage(slug: string): boolean {
  return slug in procedureDetailMap;
}

export function getProcedurePagesBySpecialty(
  specialtySlug: ProcedureDetailPage["specialtySlug"],
): ProcedureDetailPage[] {
  return procedureDetailPages.filter((page) => page.specialtySlug === specialtySlug);
}
