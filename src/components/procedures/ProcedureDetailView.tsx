import { FocalImage } from "@/components/ui/FocalImage";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { ProcedureDetailJsonLd } from "@/components/seo/ProcedureDetailJsonLd";
import { Footer } from "@/components/layout/Footer";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { ProcedureHeroNav } from "@/components/procedures/ProcedureHeroNav";
import { TextBackLink } from "@/components/ui/BackNavButton";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { scrollStagger } from "@/lib/scroll-stagger";
import { getFaqsByIds } from "@/lib/patient-faq-content";
import { getProceduresTabHref, procedureSpecialtyMap } from "@/lib/procedures";
import type { ProcedureDetailPage } from "@/lib/procedures/procedure-pages/types";

const specialtyLabels: Record<ProcedureDetailPage["specialtySlug"], string> = {
  proctology: "Proctology",
  colorectal: "Colorectal Surgery",
  hernia: "Hernia Repair",
  endoscopy: "Endoscopy",
  "robotic-minimally-invasive": "Robotic & Minimally Invasive Surgery",
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
      <ProcedureDetailJsonLd page={page} />
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

        {page.heroImageCopyright ? (
          <div className="absolute right-3 top-24 z-20 max-w-[11.5rem] rounded-sm border border-white/15 bg-charcoal/80 px-2.5 py-2 backdrop-blur-sm sm:right-5 sm:top-28 sm:max-w-[13rem] sm:px-3 sm:py-2.5">
            <p className="text-[0.5625rem] leading-snug text-white/75 sm:text-[0.625rem]">
              {page.heroImageCopyright}
            </p>
            <p className="mt-1 text-[0.5625rem] leading-snug text-white/55 sm:text-[0.625rem]">
              Image courtesy of Intuitive Surgical, Inc.
            </p>
          </div>
        ) : null}

        <div className="relative z-10 flex min-h-[40vh] w-full flex-col justify-end">
          <SiteContainer className="pt-28">
            <TextBackLink
              href={getProceduresTabHref(page.specialtySlug)}
              theme="light"
            >
              Back to procedures
            </TextBackLink>
            <h1 className="mt-6 max-w-3xl pb-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>
          </SiteContainer>

          <ProcedureHeroNav page={page} />
        </div>
      </header>

      <div className="bg-white pb-20">
        <SiteContainer>
          <article className="max-w-3xl pt-14 lg:pt-16">
            <ScrollReveal variant="blur-up">
              <h2 className="border-l-[3px] border-charcoal pl-4 text-2xl tracking-tight text-charcoal lg:text-3xl">
                {page.whatAreHeading}
              </h2>
              <div className="mt-8 space-y-5 text-left text-base leading-relaxed text-charcoal/85 lg:text-lg">
                {page.whatAreIntro.map((paragraph, index) => (
                  <ScrollReveal
                    key={paragraph.slice(0, 48)}
                    variant="fade-up"
                    delay={scrollStagger(index, 60, 80)}
                  >
                    <p>{paragraph}</p>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>

            {page.sections.map((section, sectionIndex) => (
              <ScrollReveal
                key={section.heading}
                variant="fade-up"
                delay={scrollStagger(sectionIndex, 90, 120)}
              >
                <section className="mt-14 text-left">
                  <h2 className="border-l-[3px] border-charcoal pl-4 text-xl font-semibold tracking-tight text-charcoal lg:text-2xl">
                    {section.heading}
                  </h2>
                  <div className="mt-6 space-y-5 text-base leading-relaxed text-charcoal/85 lg:text-lg">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              </ScrollReveal>
            ))}

            <ScrollReveal variant="scale-up" delay={160}>
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
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={200}>
              <div className="mt-14 flex flex-wrap gap-4">
                <Button href="/contact" variant="dark">
                  Book a Consultation
                </Button>
                <Button href="/procedures" variant="outline-dark">
                  All Procedures
                </Button>
              </div>
            </ScrollReveal>
          </article>
        </SiteContainer>
      </div>

      <Footer />
    </>
  );
}
