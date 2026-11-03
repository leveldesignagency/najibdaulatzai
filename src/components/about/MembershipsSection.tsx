import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { scrollStagger } from "@/lib/scroll-stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { membershipOrganisations } from "@/lib/about-content";

export function MembershipsSection() {
  return (
    <section
      aria-labelledby="memberships-heading"
      className="mt-16 border-t border-charcoal/10 pt-16 lg:mt-28 lg:pt-28"
    >
      <ScrollReveal variant="blur-up">
        <SectionHeading id="memberships-heading">Memberships</SectionHeading>
      </ScrollReveal>

      <ul className="mt-10 grid grid-cols-1 divide-y divide-charcoal/10 sm:mt-14 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        {membershipOrganisations.map((organisation, index) => (
          <li
            key={organisation.name}
            className="flex flex-col items-center justify-center gap-4 px-4 py-8 sm:px-6 sm:py-10 lg:py-12"
          >
            <ScrollReveal
              variant={index % 2 === 0 ? "fade-up" : "scale-up"}
              delay={scrollStagger(index, 80, 120)}
              className="flex h-24 w-full max-w-[260px] items-center justify-center sm:h-28 lg:h-32 lg:max-w-[280px]"
            >
              <Image
                src={organisation.logo}
                alt={`${organisation.name} logo`}
                width={organisation.width}
                height={organisation.height}
                className="max-h-full w-full object-contain object-center"
              />
            </ScrollReveal>
            <p className="text-center text-sm text-charcoal/70">
              {organisation.shortName}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
