import { PageSection } from "@/components/layout/PageSection";
import { InsurerLogoGrid } from "@/components/shared/InsurerLogoGrid";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { selfPayLine } from "@/lib/about-content";

export function InsurancesSection() {
  return (
    <PageSection aria-labelledby="insurances-heading">
      <ScrollReveal variant="fade-up">
        <SectionHeading id="insurances-heading">
          Insurances We Work With
        </SectionHeading>
      </ScrollReveal>

      <ScrollReveal variant="fade-up" delay={100}>
        <p className="mt-6 text-base leading-relaxed text-charcoal/85 sm:mt-8 sm:text-center lg:text-lg">
          {selfPayLine}
        </p>
      </ScrollReveal>

      <ScrollReveal variant="fade-up" delay={140}>
        <InsurerLogoGrid
          layout="row"
          logoSize="featured"
          spread
          className="mt-10 sm:mt-14"
        />
      </ScrollReveal>
    </PageSection>
  );
}
