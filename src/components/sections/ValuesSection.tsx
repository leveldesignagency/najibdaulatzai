import { SiteContainer } from "@/components/layout/SiteContainer";
import { HomeSectionShell } from "@/components/sections/HomeSectionShell";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { scrollStagger } from "@/lib/scroll-stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutValues, valuesIntro } from "@/lib/about-content";
import { homeTypography } from "@/lib/home-typography";

const valuesSummary = valuesIntro.split(". ")[0] + ".";

export function ValuesSection() {
  return (
    <HomeSectionShell id="values" aria-labelledby="values-heading" variant="muted">
      <div className="home-section-divider mx-auto hidden max-w-5xl lg:block" aria-hidden="true" />

      <SiteContainer className="lg:pt-2">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
          <ScrollReveal variant="fade-right">
            <div className="max-md:mx-auto max-md:text-center">
              <SectionEyebrow>Philosophy</SectionEyebrow>
              <SectionHeading id="values-heading" mobileCenter className="mt-3 lg:mt-4">
                Our Values
              </SectionHeading>
              <p
                className={`mt-6 lg:mt-8 ${homeTypography.lead} ${homeTypography.leadDark}`}
              >
                {valuesSummary}
              </p>
              <div className="mt-8 max-md:flex max-md:justify-center lg:mt-10">
                <Button href="/testimonials" variant="dark">
                  Testimonials
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ul className="flex flex-col gap-3.5 sm:gap-4">
            {aboutValues.map((value, index) => (
              <li key={value.title}>
                <ScrollReveal
                  variant={index % 2 === 0 ? "fade-left" : "scale-up"}
                  delay={scrollStagger(index, 75, 100)}
                >
                  <article className="group border border-charcoal/10 border-l-[3px] border-l-charcoal/40 bg-white/70 px-5 py-4 shadow-sm shadow-charcoal/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-charcoal/20 hover:border-l-charcoal hover:bg-charcoal hover:shadow-lg hover:shadow-charcoal/15 sm:px-6 sm:py-5 lg:px-7 lg:py-5">
                    <h3
                      className={`${homeTypography.eyebrow} text-charcoal transition-colors duration-300 group-hover:text-white`}
                    >
                      {value.title}
                    </h3>
                  </article>
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </div>
      </SiteContainer>
    </HomeSectionShell>
  );
}
