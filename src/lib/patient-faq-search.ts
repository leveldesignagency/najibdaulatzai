import type { PatientFaq } from "./patient-faq-content";
import { patientFaqs } from "./patient-faq-content";
import { getAllAeoFaqs } from "./seo/aeo";
import { siteConfig } from "./site-config";

export type FaqCategory =
  | "all"
  | "booking"
  | "insurance"
  | "hospitals"
  | "surgery"
  | "referrals"
  | "general";

export type SearchableFaq = PatientFaq & {
  category: Exclude<FaqCategory, "all">;
  keywords: readonly string[];
};

export const faqCategoryLabels: Record<Exclude<FaqCategory, "all">, string> = {
  booking: "Booking & consultations",
  insurance: "Insurance & fees",
  hospitals: "Hospitals & locations",
  surgery: "Surgery & recovery",
  referrals: "GP & NHS referrals",
  general: "General",
};

const patientFaqMeta: Record<
  string,
  { category: Exclude<FaqCategory, "all">; keywords?: readonly string[] }
> = {
  "gp-referral-private": { category: "booking", keywords: ["self-refer", "referral letter"] },
  "how-quickly-seen": { category: "booking", keywords: ["appointment", "waiting time", "availability"] },
  "which-hospitals": { category: "hospitals", keywords: ["Watford", "Bushey", "Wellington", "Golders Green"] },
  "private-insurance": { category: "insurance", keywords: ["Bupa", "AXA", "Aviva", "Vitality", "WPA", "Healix"] },
  "self-funding": { category: "insurance", keywords: ["pay", "fees", "cost", "price"] },
  "first-consultation": { category: "booking", keywords: ["appointment", "what to expect", "initial visit"] },
  "colonoscopy-prep": { category: "surgery", keywords: ["bowel prep", "colonoscopy", "preparation"] },
  "time-off-work": { category: "surgery", keywords: ["recovery", "return to work", "healing"] },
  stoma: { category: "surgery", keywords: ["ileostomy", "colostomy", "bag"] },
  "patient-reviews": { category: "general", keywords: ["Doctify", "Top Doctors", "iWantGreatCare", "testimonials"] },
};

const aeoCategoryMap: Record<string, Exclude<FaqCategory, "all">> = {
  "who-is-najib-daulatzai": "general",
  "what-does-colorectal-surgeon-do": "general",
  "robotic-vs-laparoscopic": "surgery",
  "how-to-book": "booking",
  "insurance-accepted": "insurance",
  "nhs-private-both": "general",
  "ers-referral": "referrals",
  "private-referral-route": "referrals",
  "conditions-accepted": "referrals",
  "what-is-robotic-colorectal": "surgery",
  "benefits-robotic": "surgery",
  "da-vinci-surgeon-london": "surgery",
};

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function toSearchablePatientFaq(faq: PatientFaq): SearchableFaq {
  const meta = patientFaqMeta[faq.id] ?? { category: "general" as const };
  return {
    ...faq,
    category: meta.category,
    keywords: meta.keywords ?? [],
  };
}

function toSearchableAeoFaq(item: ReturnType<typeof getAllAeoFaqs>[number]): SearchableFaq {
  return {
    id: item.id,
    question: item.question,
    answer: [item.answer],
    category: aeoCategoryMap[item.id] ?? "general",
    keywords: item.topics,
  };
}

/** Combined FAQ index for the patient ask engine (deduped by id) */
export function getAllSearchableFaqs(): SearchableFaq[] {
  const byId = new Map<string, SearchableFaq>();

  for (const faq of patientFaqs.map(toSearchablePatientFaq)) {
    byId.set(faq.id, faq);
  }

  for (const item of getAllAeoFaqs()) {
    if (!byId.has(item.id)) {
      byId.set(item.id, toSearchableAeoFaq(item));
    }
  }

  return [...byId.values()];
}

export function scoreFaq(faq: SearchableFaq, rawQuery: string): number {
  const query = normalize(rawQuery);
  if (!query) return 1;

  const terms = query.split(" ").filter(Boolean);
  const question = normalize(faq.question);
  const answer = normalize(faq.answer.join(" "));
  const keywords = normalize(faq.keywords.join(" "));
  const haystack = `${question} ${answer} ${keywords}`;

  let score = 0;

  if (question.includes(query)) score += 40;
  if (haystack.includes(query)) score += 25;

  for (const term of terms) {
    if (question.includes(term)) score += 12;
    if (keywords.includes(term)) score += 8;
    if (answer.includes(term)) score += 6;
    if (haystack.includes(term)) score += 4;
  }

  return score;
}

export function searchFaqs(
  faqs: readonly SearchableFaq[],
  rawQuery: string,
  category: FaqCategory,
): SearchableFaq[] {
  const filteredByCategory =
    category === "all" ? faqs : faqs.filter((faq) => faq.category === category);

  const query = rawQuery.trim();
  if (!query) return [...filteredByCategory];

  return filteredByCategory
    .map((faq) => ({ faq, score: scoreFaq(faq, query) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ faq }) => faq);
}

/** Top FAQ matches for the search input typeahead dropdown */
export function getFaqTypeaheadSuggestions(
  faqs: readonly SearchableFaq[],
  rawQuery: string,
  limit = 6,
): SearchableFaq[] {
  const query = rawQuery.trim();
  if (!query) return [];

  return searchFaqs(faqs, query, "all").slice(0, limit);
}

export function buildGoogleSiteSearchUrl(query: string) {
  const scopedQuery = `site:${new URL(siteConfig.url).host} ${query.trim()}`;
  return `https://www.google.com/search?q=${encodeURIComponent(scopedQuery)}`;
}

export function buildGoogleWebSearchUrl(query: string) {
  const contextualQuery = `${query.trim()} colorectal surgery patient information UK`;
  return `https://www.google.com/search?q=${encodeURIComponent(contextualQuery)}`;
}

export const faqSuggestedQueries = [
  "How do I book a private consultation?",
  "Which insurers are accepted?",
  "How do I prepare for a colonoscopy?",
  "How long is recovery after bowel surgery?",
  "Where does Mr Daulatzai operate?",
  "Do I need a GP referral?",
] as const;

export const faqBrowseCategories: Exclude<FaqCategory, "all">[] = [
  "booking",
  "insurance",
  "hospitals",
  "surgery",
  "referrals",
  "general",
];
