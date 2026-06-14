import type { AeoFaqItem } from "@/lib/seo/aeo";
import { jsonLdScript } from "@/lib/seo/schema-helpers";

type FaqPageJsonLdProps = {
  items: readonly AeoFaqItem[] | readonly { question: string; answer: string }[];
  id?: string;
  url?: string;
};

export function FaqPageJsonLd({ items, id, url }: FaqPageJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(id ? { "@id": id } : {}),
    ...(url ? { url } : {}),
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdScript(schema) }}
    />
  );
}
