import Image from "next/image";
import { PageSection } from "@/components/layout/PageSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { scrollStagger } from "@/lib/scroll-stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { insuranceProviders, selfPayLine } from "@/lib/about-content";

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

      <ul className="mt-10 grid grid-cols-1 divide-y divide-charcoal/10 sm:mt-14 lg:flex lg:divide-x lg:divide-y-0 lg:divide-charcoal/15">
        {insuranceProviders.map((provider, index) => (
          <li
            key={provider.name}
            className="flex items-center justify-center px-4 py-8 sm:px-6 lg:flex-1 lg:py-6"
          >
            <ScrollReveal
              variant="scale-up"
              delay={scrollStagger(index, 60, 140)}
              className="flex h-16 w-full max-w-[180px] items-center justify-center sm:h-20 sm:max-w-[200px]"
            >
              <Image
                src={provider.logo}
                alt={`${provider.name} logo`}
                width={provider.width}
                height={provider.height}
                className="max-h-full w-auto object-contain"
              />
            </ScrollReveal>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
