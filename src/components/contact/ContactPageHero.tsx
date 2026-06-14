import { FocalImage } from "@/components/ui/FocalImage";
import {
  contactEmail,
  contactEmailHref,
  contactHeroImage,
  contactIntro,
  contactPhone,
  contactPhoneHref,
  whatsAppHref,
  whatsAppLabel,
} from "@/lib/contact-content";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

const contactLinkClass =
  "font-medium text-charcoal transition-colors hover:text-charcoal-dark";

export function ContactPageHero() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="border-b border-charcoal/8 bg-white pt-28"
    >
      <SiteContainer className="py-10 sm:py-12 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <header className="max-w-xl">
            <SectionHeading id="contact-heading">Contact</SectionHeading>
            <p className="mt-5 text-base leading-relaxed text-charcoal/85 sm:mt-6 sm:text-lg lg:mt-8 lg:text-xl">
              {contactIntro}
            </p>

            <div className="mt-10 border-t border-charcoal/10 pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/55">
                Get in touch
              </p>
              <div className="mt-4 space-y-3">
                <a
                  href={contactPhoneHref}
                  className={`${contactLinkClass} block text-2xl lg:text-[1.75rem]`}
                >
                  {contactPhone}
                </a>
                <a
                  href={contactEmailHref}
                  className={`${contactLinkClass} block text-xl lg:text-2xl`}
                >
                  {contactEmail}
                </a>
                <a
                  href={whatsAppHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${contactLinkClass} inline-block text-base underline-offset-4 hover:underline`}
                >
                  {whatsAppLabel}
                </a>
              </div>
            </div>
          </header>

          <figure className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden bg-neutral-100 lg:mx-0 lg:ml-auto lg:max-w-none">
            <FocalImage
              src={contactHeroImage.src}
              alt={contactHeroImage.alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
          </figure>
        </div>
      </SiteContainer>
    </section>
  );
}
