import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { scrollStagger } from "@/lib/scroll-stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { credentialInstitutions } from "@/lib/about-content";

export function CredentialsSection() {
  return (
    <section
      aria-labelledby="credentials-heading"
      className="mt-16 border-t border-charcoal/10 pt-16 lg:mt-28 lg:pt-28"
    >
      <ScrollReveal variant="blur-up">
        <SectionHeading id="credentials-heading">
          Qualifications & Fellowships
        </SectionHeading>
      </ScrollReveal>

      <ul className="mt-10 grid grid-cols-1 divide-y divide-charcoal/10 sm:mt-14 sm:grid-cols-2 sm:divide-x sm:divide-y lg:grid-cols-4 lg:divide-y-0">
        {credentialInstitutions.map((institution, index) => (
          <li
            key={institution.name}
            className="flex items-center justify-center px-4 py-8 sm:px-6 sm:py-10 lg:py-12"
          >
            <ScrollReveal
              variant={index % 2 === 0 ? "fade-up" : "scale-up"}
              delay={scrollStagger(index, 80, 120)}
              className="flex h-24 w-full max-w-[220px] items-center justify-center sm:h-28 lg:h-32 lg:max-w-[240px]"
            >
              <Image
                src={institution.logo}
                alt={`${institution.name} logo`}
                width={institution.width}
                height={institution.height}
                className="max-h-full w-full object-contain object-center"
              />
            </ScrollReveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
