import Image from "next/image";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { insuranceProviders, selfPayLine } from "@/lib/about-content";

export function InsurancesSection() {
  return (
    <section
      aria-labelledby="insurances-heading"
      className="border-t border-charcoal/10 bg-white py-20 lg:py-28"
    >
      <SiteContainer>
        <SectionHeading id="insurances-heading">
          Insurances We Work With
        </SectionHeading>

        <p className="mt-8 text-center text-base leading-relaxed text-charcoal/85 lg:text-lg">
          {selfPayLine}
        </p>

        <div className="mt-14 flex flex-wrap items-center justify-center lg:divide-x lg:divide-charcoal/15">
          {insuranceProviders.map((provider) => (
            <div
              key={provider.name}
              className="flex w-1/2 items-center justify-center px-4 py-4 sm:w-1/3 lg:w-auto lg:flex-1 lg:px-6"
            >
              <div className="flex h-16 w-28 items-center justify-center sm:h-20 sm:w-32">
                <Image
                  src={provider.logo}
                  alt={`${provider.name} logo`}
                  width={provider.width}
                  height={provider.height}
                  className="max-h-full w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
