import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { credentialInstitutions } from "@/lib/about-content";

export function CredentialsSection() {
  return (
    <section
      aria-labelledby="credentials-heading"
      className="mt-20 border-t border-charcoal/10 pt-20 lg:mt-28 lg:pt-28"
    >
      <SectionHeading id="credentials-heading">
        Qualifications & Fellowships
      </SectionHeading>

      <ul className="mt-14 grid grid-cols-1 divide-y divide-charcoal/10 sm:grid-cols-2 sm:divide-x sm:divide-y lg:grid-cols-4 lg:divide-y-0">
        {credentialInstitutions.map((institution) => (
          <li
            key={institution.name}
            className="flex items-center justify-center px-6 py-10 lg:py-12"
          >
            <div className="flex h-24 w-full max-w-[220px] items-center justify-center sm:h-28 lg:h-32 lg:max-w-[240px]">
              <Image
                src={institution.logo}
                alt={`${institution.name} logo`}
                width={institution.width}
                height={institution.height}
                className="max-h-full w-full object-contain object-center"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
