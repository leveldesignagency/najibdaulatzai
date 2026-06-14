import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { FaqPageJsonLd } from "@/components/seo/FaqPageJsonLd";
import { getFaqsByIds } from "@/lib/patient-faq-content";
import {
  absoluteUrl,
  jsonLdScript,
  medicalProcedureSchema,
} from "@/lib/seo/schema-helpers";
import {
  defaultOgImageUrl,
  seoEntityIds,
} from "@/lib/seo/entity";
import { procedureSpecialtyMap } from "@/lib/procedures";
import type { ProcedureDetailPage } from "@/lib/procedures/procedure-pages/types";

type ProcedureDetailJsonLdProps = {
  page: ProcedureDetailPage;
};

export function ProcedureDetailJsonLd({ page }: ProcedureDetailJsonLdProps) {
  const pageUrl = absoluteUrl(`/procedures/${page.slug}`);
  const specialtyTitle =
    procedureSpecialtyMap[page.specialtySlug]?.pageTitle ?? "Procedures";
  const faqs = getFaqsByIds(page.faqIds).map((faq) => ({
    question: faq.question,
    answer: faq.answer.join("\n\n"),
  }));

  const medicalWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: `${page.title} | Mr Najib Daulatzai`,
    description: page.metaDescription,
    inLanguage: "en-GB",
    about: medicalProcedureSchema({
      name: page.title,
      description: page.metaDescription,
      url: pageUrl,
      performerId: seoEntityIds.physician,
    }),
    mainEntity: { "@id": seoEntityIds.physician },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(page.heroImage),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(medicalWebPageSchema) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Procedures", path: "/procedures" },
          { name: specialtyTitle, path: `/procedures/${page.specialtySlug}` },
          { name: page.title, path: `/procedures/${page.slug}` },
        ]}
      />
      {faqs.length > 0 ? (
        <FaqPageJsonLd
          items={faqs}
          id={`${pageUrl}#faq`}
          url={pageUrl}
        />
      ) : null}
    </>
  );
}
