import type { BlogCategory } from "./types";

export const blogCategories: readonly BlogCategory[] = [
  "Condition-led",
  "Procedure-led",
  "Decision & comparison",
] as const;

export const blogCategoryFilterOptions = [
  { value: "all", label: "All topics" },
  { value: "Condition-led", label: "Condition-led" },
  { value: "Procedure-led", label: "Procedure-led" },
  { value: "Decision & comparison", label: "Decision & comparison" },
] as const;

export type BlogCategoryFilter = (typeof blogCategoryFilterOptions)[number]["value"];
