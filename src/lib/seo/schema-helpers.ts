import type { AeoFaqItem } from "./aeo";
import { siteConfig } from "../site-config";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized === "/" ? "" : normalized}`;
}

export function faqItemsToSchema(
  items: readonly { question: string; answer: string }[],
  options?: { id?: string; url?: string },
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(options?.id ? { "@id": options.id } : {}),
    ...(options?.url ? { url: options.url } : {}),
    inLanguage: "en-GB",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function aeoFaqsToSchema(
  items: readonly AeoFaqItem[],
  options?: { id?: string; url?: string },
) {
  return faqItemsToSchema(
    items.map((item) => ({ question: item.question, answer: item.answer })),
    options,
  );
}

export function breadcrumbSchema(items: readonly BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function medicalProcedureSchema(options: {
  name: string;
  description: string;
  url: string;
  performerId: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: options.name,
    description: options.description,
    url: options.url,
    procedureType: "Surgical",
    bodyLocation: "Abdomen and pelvis",
    performer: { "@id": options.performerId },
  };
}

export function jsonLdScript(schema: Record<string, unknown> | Record<string, unknown>[]) {
  return JSON.stringify(schema);
}
