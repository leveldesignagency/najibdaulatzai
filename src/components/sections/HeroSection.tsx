import { FocalImage } from "@/components/ui/FocalImage";
import { Button } from "@/components/ui/Button";
import { HeroServiceNav } from "@/components/sections/HeroServiceNav";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-charcoal pt-0">
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-image-mobile absolute inset-0 md:hidden">
          <FocalImage
            src="/images/images/mobile-hero.webp"
            alt="Mr Najib Daulatzai, colorectal and general surgeon in London and Hertfordshire, seated at his desk in professional attire"
            fill
            priority
            focalPoint="50% 50%"
            className="object-cover object-center"
            sizes="100vw"
            quality={80}
          />
        </div>

        <div className="hero-image-zoom absolute inset-[-6%] hidden md:block">
          <FocalImage
            src="/images/hero-consultation.jpg"
            alt="Mr Najib Daulatzai, colorectal and general surgeon in London and Hertfordshire, seated at his desk in professional attire"
            fill
            priority
            focalPoint="35.4% 42%"
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 bg-charcoal/18 md:hidden"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-charcoal/55 via-charcoal/20 to-transparent md:hidden"
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 right-0 hidden w-[40%] bg-gradient-to-l from-charcoal/80 via-charcoal/55 to-transparent md:block"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 hidden h-40 bg-gradient-to-t from-charcoal/70 to-transparent md:block"
          aria-hidden="true"
        />
      </div>

      <SiteContainer className="relative flex min-h-screen flex-col justify-end pt-24 pb-8 md:justify-between md:pb-10">
        <div className="mt-auto w-full md:mt-0 md:flex md:flex-1 md:items-center">
          <div className="mx-auto w-full max-w-xl px-1 text-center text-white md:ml-auto md:mr-[2%] md:px-0 md:text-right">
            <h1 className="hero-content-in text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Colorectal & General Surgeon
              <span className="mt-2 block text-2xl font-medium text-white/95 sm:text-3xl lg:text-4xl">
                in London & Hertfordshire
              </span>
            </h1>
            <p
              data-speakable="summary"
              className="hero-content-in hero-content-in--delay-1 sr-only"
            >
              {siteConfig.description}
            </p>
            <div className="hero-content-in hero-content-in--delay-1 mt-8 flex flex-wrap justify-center gap-3 md:mt-10 md:justify-end">
              <Button href="/contact" variant="light" className="min-w-[11.5rem]">
                Book Now
              </Button>
              <Button href={siteConfig.phoneHref} variant="outline-light" className="min-w-[11.5rem]">
                Call us
              </Button>
            </div>
          </div>
        </div>

        <HeroServiceNav />
      </SiteContainer>
    </section>
  );
}
