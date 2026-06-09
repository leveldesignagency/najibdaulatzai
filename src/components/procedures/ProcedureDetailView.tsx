import { FocalImage } from "@/components/ui/FocalImage";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { Footer } from "@/components/layout/Footer";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { ProcedureHeroNav } from "@/components/procedures/ProcedureHeroNav";
import { BackNavButton } from "@/components/ui/BackNavButton";
import { Button } from "@/components/ui/Button";
import { getFaqsByIds } from "@/lib/patient-faq-content";
import { procedureSpecialtyMap } from "@/lib/procedures";
import type { ProcedureDetailPage } from "@/lib/procedures/procedure-pages/types";

const specialtyLabels: Record<ProcedureDetailPage["specialtySlug"], string> = {
  proctology: "Proctology",
  colorectal: "Colorectal Surgery",
  hernia: "Hernia Repair",
  endoscopy: "Endoscopy",
  additional: "Additional Procedures",
};

type ProcedureDetailViewProps = {
  page: ProcedureDetailPage;
};

export function ProcedureDetailView({ page }: ProcedureDetailViewProps) {
  const faqs = getFaqsByIds(page.faqIds);
  const specialtyLabel =
    specialtyLabels[page.specialtySlug] ??
    procedureSpecialtyMap[page.specialtySlug]?.pageTitle ??
    "Procedures";

  return (
    <>
      <header className="relative flex min-h-[40vh] w-full flex-col overflow-hidden bg-charcoal">
        <FocalImage
          src={page.heroImage}
          alt={page.heroImageAlt}
          fill
          priority
          className="object-cover"
          focalPoint={page.heroImageObjectPosition}
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/55 to-charcoal/25"
          aria-hidden="true"
        />

        <div className="relative z-10 flex min-h-[40vh] w-full flex-col justify-end">
          <SiteContainer className="pt-28">
            <BackNavButton
              href={`/procedures/${page.specialtySlug}`}
              ariaLabel={`Back to ${specialtyLabel}`}
              theme="light"
            />
            <h1 className="mt-6 max-w-3xl pb-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>
          </SiteContainer>

          {page.heroImageCopyright ? (
            <p className="relative z-10 bg-charcoal/70 px-3 py-2 text-[0.625rem] leading-relaxed text-white/70 sm:px-4 sm:text-xs">
              {page.heroImageCopyright}
              <span className="mt-0.5 block text-white/55">
                Image courtesy of Intuitive Surgical, Inc.
              </span>
            </p>
          ) : null}

          <ProcedureHeroNav page={page} />
        </div>
      </header>

      <div className="bg-white pb-20">
        <SiteContainer>
          <article className="max-w-3xl pt-14 lg:pt-16">
            <h2 className="border-l-[3px] border-charcoal pl-4 text-2xl tracking-tight text-charcoal lg:text-3xl">
              {page.whatAreHeading}
            </h2>
            <div className="mt-8 space-y-5 text-left text-base leading-relaxed text-charcoal/85 lg:text-lg">
              {page.whatAreIntro.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>

            {page.sections.map((section) => (
              <section key={section.heading} className="mt-14 text-left">
                <h2 className="border-l-[3px] border-charcoal pl-4 text-xl font-semibold tracking-tight text-charcoal lg:text-2xl">
                  {section.heading}
                </h2>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-charcoal/85 lg:text-lg">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            <section
              aria-labelledby="procedure-faq-heading"
              className="mt-16 border-t border-charcoal/10 pt-14"
            >
              <h2
                id="procedure-faq-heading"
                className="text-xl font-semibold tracking-tight text-charcoal sm:text-2xl"
              >
                Frequently asked questions
              </h2>
              <div className="mt-8">
                <FaqAccordion faqs={faqs} variant="compact" />
              </div>
            </section>

            <div className="mt-14 flex flex-wrap gap-4">
              <Button href="/contact" variant="dark">
                Book a Consultation
              </Button>
              <Button href="/procedures" variant="outline-dark">
                All Procedures
              </Button>
            </div>
          </article>
        </SiteContainer>
      </div>

      <Footer />
    </>
  );
}
