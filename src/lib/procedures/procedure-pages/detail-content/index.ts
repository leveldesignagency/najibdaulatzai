import type { ProcedureSnippetSlug } from "../../procedure-snippets";
import type { ProcedureDetailSection } from "../types";
import { additionalProcedureSections } from "./additional";
import { colorectalProcedureSections } from "./colorectal";
import { endoscopyProcedureSections } from "./endoscopy";
import { herniaProcedureSections } from "./hernia";
import { proctologyProcedureSections } from "./proctology";

const procedureDetailSections: Record<
  ProcedureSnippetSlug,
  readonly ProcedureDetailSection[]
> = {
  ...proctologyProcedureSections,
  ...colorectalProcedureSections,
  ...herniaProcedureSections,
  ...endoscopyProcedureSections,
  ...additionalProcedureSections,
} as Record<ProcedureSnippetSlug, readonly ProcedureDetailSection[]>;

export function getProcedureDetailSections(
  slug: ProcedureSnippetSlug,
): readonly ProcedureDetailSection[] {
  return procedureDetailSections[slug] ?? [];
}
