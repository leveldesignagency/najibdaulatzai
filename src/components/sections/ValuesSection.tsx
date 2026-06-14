import { SiteContainer } from "@/components/layout/SiteContainer";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { scrollStagger } from "@/lib/scroll-stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutValues, valuesIntro } from "@/lib/about-content";

const valuesSummary = valuesIntro.split(". ")[0] + ".";

export function ValuesSection() {
  return (
    <section
      id="values"
      aria-labelledby="values-heading"
      className="overflow-hidden bg-white py-20 lg:py-28"
    >
      <SiteContainer>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <ScrollReveal variant="fade-right">
            <div className="max-md:mx-auto max-md:text-center">
              <SectionHeading id="values-heading" mobileCenter>
                Our Values
              </SectionHeading>
              <p className="mt-6 text-lg leading-relaxed text-charcoal/85 lg:mt-8 lg:text-xl">
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
                  <article className="group border border-charcoal/10 border-l-[3px] border-l-charcoal/40 bg-neutral-50/60 px-5 py-4 transition-all duration-300 hover:border-charcoal/20 hover:border-l-charcoal hover:bg-charcoal hover:shadow-md hover:shadow-charcoal/15 sm:px-6 sm:py-5">
                    <h3 className="text-sm font-semibold uppercase leading-snug tracking-[0.08em] text-charcoal transition-colors duration-300 group-hover:text-white sm:text-base sm:leading-snug lg:text-[1.0625rem]">
                      {value.title}
                    </h3>
                  </article>
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </div>
      </SiteContainer>
    </section>
  );
}
