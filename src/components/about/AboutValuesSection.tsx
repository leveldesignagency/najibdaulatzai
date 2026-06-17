import { FocalImage } from "@/components/ui/FocalImage";
import { PageSection } from "@/components/layout/PageSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { scrollStagger } from "@/lib/scroll-stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutValues, valuesIntro } from "@/lib/about-content";

export function AboutValuesSection() {
  return (
    <PageSection
      aria-labelledby="about-values-heading"
      background="charcoal"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-16">
        <ScrollReveal variant="fade-right" className="h-full">
          <div className="flex h-full flex-col">
            <SectionHeading id="about-values-heading" theme="light">
              Values
            </SectionHeading>
            <p className="mt-8 text-base leading-relaxed text-white/85 sm:mt-10 sm:text-lg lg:text-xl">
              {valuesIntro}
            </p>
            <ScrollReveal
              variant="scale-up"
              delay={140}
              className="relative mt-8 w-full overflow-hidden bg-charcoal-dark max-lg:aspect-[4/5] sm:mt-10 lg:min-h-0 lg:flex-1"
            >
              <FocalImage
                src="/images/about secondary.jpg"
                alt="Mr Najib Daulatzai, consultant colorectal surgeon"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
            </ScrollReveal>
          </div>
        </ScrollReveal>

        <div className="flex flex-col">
          {aboutValues.map((value, index) => (
            <ScrollReveal
              key={value.title}
              variant="fade-left"
              delay={scrollStagger(index, 90, 100)}
            >
              <article
                className={`py-6 sm:py-8 ${index > 0 ? "border-t border-white/20" : ""}`}
              >
                <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl lg:text-2xl">
                  {value.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/80 sm:mt-4 lg:text-lg">
                  {value.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
