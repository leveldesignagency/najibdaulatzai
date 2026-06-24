import type { ReactNode } from "react";
import { LocationMapEmbed } from "@/components/locations/LocationMapEmbed";
import { FocalImage } from "@/components/ui/FocalImage";
import { InsurerLogoGrid } from "@/components/shared/InsurerLogoGrid";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { scrollStagger } from "@/lib/scroll-stagger";
import { privateLocations } from "@/lib/site-config";
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
      className="mt-12 border-t border-charcoal/10 pt-10 sm:mt-16 sm:pt-12"
    >
      <ScrollReveal variant="fade-up" delay={delay}>
        <h2
          id={id}
          className="text-xl font-semibold tracking-tight text-charcoal sm:text-2xl"
        >
          {heading}
        </h2>
      </ScrollReveal>
      <div className="mt-5 sm:mt-6">{children}</div>
    </section>
  );
}

const textImageGridClass =
  "grid items-start gap-8 md:grid-cols-2 md:gap-10 lg:items-center lg:gap-12";

type SideImageProps = {
  src: string;
  alt: string;
  focalPoint: string;
  sizes: string;
  aspectClass?: string;
};

function SideImage({
  src,
  alt,
  focalPoint,
  sizes,
  aspectClass = "aspect-[4/3]",
}: SideImageProps) {
  return (
    <figure
      className={`relative ${aspectClass} w-full min-w-0 overflow-hidden rounded-sm bg-neutral-100 shadow-sm`}
    >
      <FocalImage
        src={src}
        alt={alt}
        fill
        focalPoint={focalPoint}
        className="object-cover"
        sizes={sizes}
      />
    </figure>
  );
}

type TextImageRowProps = {
  text: ReactNode;
  image: ReactNode;
  textDelay?: number;
  imageDelay?: number;
};

function TextImageRow({
  text,
  image,
  textDelay = 0,
  imageDelay = 100,
}: TextImageRowProps) {
  return (
    <div className={textImageGridClass}>
      <ScrollReveal variant="fade-up" delay={textDelay}>
        {text}
      </ScrollReveal>
      <ScrollReveal variant="scale-up" delay={imageDelay}>
        {image}
      </ScrollReveal>
    </div>
  );
}

const bodyTextClass = "text-base leading-relaxed text-charcoal/85 lg:text-lg";

const secretaryLocation =
  privateLocations.find((location) => location.name === "Spire Bushey Hospital") ??
  privateLocations[1];

export function GpReferralsContent() {
  return (
    <div className="w-full">
      <TextImageRow
        text={<p className={`${bodyTextClass} lg:text-xl`}>{gpReferralsIntro}</p>}
        image={
          <SideImage
            src="/images/Najib With Patient.jpg"
            alt="Mr Najib Daulatzai consulting with a patient"
            focalPoint="35.4% 50%"
            sizes="(max-width: 768px) 100vw, 46vw"
          />
        }
      />

      <ReferralsSection id="how-to-refer-heading" heading={howToReferHeading} delay={100}>
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          <ScrollReveal variant="fade-up" delay={120}>
            <article className="h-full rounded-sm border border-charcoal/10 bg-neutral-50/80 p-5 sm:p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-charcoal/55">
                NHS referrals
              </h3>
              <p className={`mt-3 ${bodyTextClass}`}>{nhsReferralParagraph}</p>
            </article>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={160}>
            <article className="h-full rounded-sm border border-charcoal/10 bg-neutral-50/80 p-5 sm:p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-charcoal/55">
                Private referrals
              </h3>
              <p className={`mt-3 ${bodyTextClass}`}>{privateReferralParagraph}</p>
            </article>
          </ScrollReveal>
        </div>
      </ReferralsSection>

      <ReferralsSection id="secretary-heading" heading={secretaryHeading} delay={scrollStagger(1, 100, 100)}>
        <TextImageRow
          textDelay={scrollStagger(1, 120, 100)}
          imageDelay={scrollStagger(1, 180, 100)}
          text={
            <div className="space-y-6 text-left">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-charcoal/55">
                  Telephone
                </p>
                <a
                  href={secretaryTelephoneHref}
                  className="mt-2 block font-medium text-charcoal underline-offset-4 hover:underline"
                >
                  {secretaryTelephone}
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-charcoal/55">
                  Email
                </p>
                <a
                  href={secretaryEmailHref}
                  className="mt-2 block font-medium text-charcoal underline-offset-4 hover:underline"
                >
                  {secretaryEmail}
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-charcoal/55">
                  {secretaryAddressHeading}
                </p>
                <address className={`mt-2 not-italic ${bodyTextClass}`}>
                  {secretaryAddressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </div>
          }
          image={
            <LocationMapEmbed
              mapQuery={secretaryLocation.mapQuery}
              mapTitle="Map showing Spire Bushey Hospital correspondence address"
            />
          }
        />
      </ReferralsSection>

      <ReferralsSection
        id="insurers-heading"
        heading={insurersAcceptedHeading}
        delay={scrollStagger(2, 100, 100)}
      >
        <ScrollReveal variant="fade-up" delay={scrollStagger(2, 120, 100)}>
          <p className={bodyTextClass}>{insurersAcceptedParagraph}</p>
          <InsurerLogoGrid layout="row" className="mt-6" />
        </ScrollReveal>
      </ReferralsSection>

      <ReferralsSection
        id="conditions-heading"
        heading={conditionsHeading}
        delay={scrollStagger(3, 100, 100)}
      >
        <ScrollReveal variant="fade-up" delay={scrollStagger(3, 120, 100)}>
          <ul className={`list-none space-y-2.5 ${bodyTextClass}`}>
            {conditionsAccepted.map((condition) => (
              <li key={condition} className="flex gap-3">
                <span
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-charcoal/35"
                  aria-hidden="true"
                />
                <span>{condition}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </ReferralsSection>

      <ReferralsSection
        id="urgent-referrals-heading"
        heading={urgentReferralsHeading}
        delay={scrollStagger(4, 100, 100)}
      >
        <ScrollReveal variant="fade-up" delay={scrollStagger(4, 120, 100)}>
          <p className={`rounded-sm border border-charcoal/10 bg-neutral-50/80 p-5 sm:p-6 ${bodyTextClass}`}>
            {urgentReferralsParagraph}
          </p>
        </ScrollReveal>
      </ReferralsSection>
    </div>
  );
}
