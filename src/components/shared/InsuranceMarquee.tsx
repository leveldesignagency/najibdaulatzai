import { SiteContainer } from "@/components/layout/SiteContainer";
import { insuranceProviders } from "@/lib/about-content";
import { InsurerLogoItem } from "@/components/shared/InsurerLogoItem";

export function InsuranceMarquee() {
  return (
    <section
      aria-label="Insurance providers accepted"
      className="border-y border-charcoal/8 bg-white py-6 sm:py-8"
    >
      <SiteContainer>
        <ul className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 lg:gap-5">
          {insuranceProviders.map((provider) => (
            <InsurerLogoItem
              key={provider.name}
              provider={provider}
              size="strip"
            />
          ))}
        </ul>
      </SiteContainer>
    </section>
  );
}
