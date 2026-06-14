import Image from "next/image";
import { PageSection } from "@/components/layout/PageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { insuranceProviders, selfPayLine } from "@/lib/about-content";

export function InsurancesSection() {
  return (
    <PageSection aria-labelledby="insurances-heading">
      <SectionHeading id="insurances-heading">
        Insurances We Work With
      </SectionHeading>

      <p className="mt-6 text-base leading-relaxed text-charcoal/85 sm:mt-8 sm:text-center lg:text-lg">
        {selfPayLine}
      </p>

      <ul className="mt-10 grid grid-cols-1 divide-y divide-charcoal/10 sm:mt-14 lg:flex lg:divide-x lg:divide-y-0 lg:divide-charcoal/15">
        {insuranceProviders.map((provider) => (
          <li
            key={provider.name}
            className="flex items-center justify-center px-4 py-8 sm:px-6 lg:flex-1 lg:py-6"
          >
            <div className="flex h-16 w-full max-w-[180px] items-center justify-center sm:h-20 sm:max-w-[200px]">
              <Image
                src={provider.logo}
                alt={`${provider.name} logo`}
                width={provider.width}
                height={provider.height}
                className="max-h-full w-auto object-contain"
              />
            </div>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
