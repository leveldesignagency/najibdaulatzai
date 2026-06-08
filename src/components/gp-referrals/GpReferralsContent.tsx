import type { ReactNode } from "react";
import {
  conditionsAccepted,
  conditionsHeading,
  gpReferralsIntro,
  howToReferHeading,
  insurersAcceptedHeading,
  insurersAcceptedParagraph,
  nhsReferralParagraph,
  privateReferralParagraph,
  secretaryAddressLines,
  secretaryHeading,
  secretaryEmailPlaceholder,
  secretaryNamePlaceholder,
  secretaryTelephonePlaceholder,
  urgentReferralsHeading,
  urgentReferralsParagraph,
} from "@/lib/gp-referrals-content";

type ReferralsSectionProps = {
  id: string;
  heading: string;
  children: React.ReactNode;
};

function ReferralsSection({ id, heading, children }: ReferralsSectionProps) {
  return (
    <section aria-labelledby={id} className="mt-14 border-t border-charcoal/10 pt-14 first:mt-0 first:border-t-0 first:pt-0">
      <h2
        id={id}
        className="border-l-[3px] border-charcoal pl-4 text-2xl tracking-tight text-charcoal lg:text-3xl"
      >
        {heading}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function GpReferralsContent() {
  return (
    <div className="max-w-3xl">
      <p className="text-lg leading-relaxed text-charcoal/85 lg:text-xl">{gpReferralsIntro}</p>

      <ReferralsSection id="how-to-refer-heading" heading={howToReferHeading}>
        <div className="space-y-6 text-base leading-relaxed text-charcoal/85 lg:text-lg">
          <p>{nhsReferralParagraph}</p>
          <p>{privateReferralParagraph}</p>
        </div>
      </ReferralsSection>

      <ReferralsSection id="secretary-heading" heading={secretaryHeading}>
        <div className="space-y-4 text-base leading-relaxed text-charcoal/85 lg:text-lg">
          <p>{secretaryNamePlaceholder}</p>
          <p>{secretaryTelephonePlaceholder}</p>
          <p>{secretaryEmailPlaceholder}</p>
          <address className="not-italic">
            {secretaryAddressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>
      </ReferralsSection>

      <ReferralsSection id="insurers-heading" heading={insurersAcceptedHeading}>
        <p className="text-base leading-relaxed text-charcoal/85 lg:text-lg">
          {insurersAcceptedParagraph}
        </p>
      </ReferralsSection>

      <ReferralsSection id="conditions-heading" heading={conditionsHeading}>
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

      <ReferralsSection id="urgent-referrals-heading" heading={urgentReferralsHeading}>
        <p className="text-base leading-relaxed text-charcoal/85 lg:text-lg">
          {urgentReferralsParagraph}
        </p>
      </ReferralsSection>
    </div>
  );
}
