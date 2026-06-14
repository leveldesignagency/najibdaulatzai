import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { scrollStagger } from "@/lib/scroll-stagger";
import {
  conditionsAccepted,
  conditionsHeading,
  gpReferralsIntro,
  howToReferHeading,
  insurersAcceptedHeading,
  insurersAcceptedParagraph,
  nhsReferralParagraph,
  privateReferralParagraph,
  secretaryAddressHeading,
  secretaryAddressLines,
  secretaryEmail,
  secretaryEmailHref,
  secretaryHeading,
  secretaryTelephone,
  secretaryTelephoneHref,
  urgentReferralsHeading,
  urgentReferralsParagraph,
} from "@/lib/gp-referrals-content";

type ReferralsSectionProps = {
  id: string;
  heading: string;
  delay: number;
  children: ReactNode;
};

function ReferralsSection({ id, heading, delay, children }: ReferralsSectionProps) {
  return (
    <section
      aria-labelledby={id}
      className="mt-10 border-t border-charcoal/10 pt-10 sm:mt-14 sm:pt-14"
    >
      <ScrollReveal variant="fade-up" delay={delay}>
        <h2
          id={id}
          className="border-l-[3px] border-charcoal pl-4 text-2xl tracking-tight text-charcoal lg:text-3xl"
        >
          {heading}
        </h2>
        <div className="mt-6">{children}</div>
      </ScrollReveal>
    </section>
  );
}

export function GpReferralsContent() {
  return (
    <div className="max-w-3xl">
      <ScrollReveal variant="blur-up">
        <p className="text-lg leading-relaxed text-charcoal/85 lg:text-xl">
          {gpReferralsIntro}
        </p>
      </ScrollReveal>

      <ReferralsSection id="how-to-refer-heading" heading={howToReferHeading} delay={100}>
        <div className="space-y-6 text-base leading-relaxed text-charcoal/85 lg:text-lg">
          <p>{nhsReferralParagraph}</p>
          <p>{privateReferralParagraph}</p>
        </div>
      </ReferralsSection>

      <ReferralsSection id="secretary-heading" heading={secretaryHeading} delay={scrollStagger(1, 100, 100)}>
        <dl className="space-y-4 text-base leading-relaxed text-charcoal/85 lg:text-lg">
          <div>
            <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-charcoal/55">
              Telephone
            </dt>
            <dd className="mt-1">
              <a
                href={secretaryTelephoneHref}
                className="font-medium text-charcoal underline-offset-4 hover:underline"
              >
                {secretaryTelephone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-charcoal/55">
              Email
            </dt>
            <dd className="mt-1">
              <a
                href={secretaryEmailHref}
                className="font-medium text-charcoal underline-offset-4 hover:underline"
              >
                {secretaryEmail}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-charcoal/55">
              {secretaryAddressHeading}
            </dt>
            <dd className="mt-1">
              <address className="not-italic">
                {secretaryAddressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </dd>
          </div>
        </dl>
      </ReferralsSection>

      <ReferralsSection
        id="insurers-heading"
        heading={insurersAcceptedHeading}
        delay={scrollStagger(2, 100, 100)}
      >
        <p className="text-base leading-relaxed text-charcoal/85 lg:text-lg">
          {insurersAcceptedParagraph}
        </p>
      </ReferralsSection>

      <ReferralsSection
        id="conditions-heading"
        heading={conditionsHeading}
        delay={scrollStagger(3, 100, 100)}
      >
        <ul className="list-none space-y-3 text-base leading-relaxed text-charcoal/85 lg:text-lg">
          {conditionsAccepted.map((condition) => (
            <li key={condition} className="flex gap-3">
              <span className="shrink-0 text-charcoal/60" aria-hidden="true">
                •
              </span>
              <span>{condition}</span>
            </li>
          ))}
        </ul>
      </ReferralsSection>

      <ReferralsSection
        id="urgent-referrals-heading"
        heading={urgentReferralsHeading}
        delay={scrollStagger(4, 100, 100)}
      >
        <p className="text-base leading-relaxed text-charcoal/85 lg:text-lg">
          {urgentReferralsParagraph}
        </p>
      </ReferralsSection>
    </div>
  );
}
