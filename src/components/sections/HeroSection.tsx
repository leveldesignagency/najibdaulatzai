import Link from "next/link";
import { FocalImage } from "@/components/ui/FocalImage";
import { Button } from "@/components/ui/Button";
import { HeroServiceNav } from "@/components/sections/HeroServiceNav";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { minimallyInvasiveSectionHref } from "@/lib/procedures";
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
            focalPoint="50% 38%"
            className="object-cover"
            sizes="100vw"
            quality={85}
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
          className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-charcoal/45 via-charcoal/10 to-transparent md:hidden"
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 right-0 hidden w-[40%] bg-gradient-to-l from-charcoal/80 via-charcoal/55 to-transparent md:block"
          aria-hidden="true"
        />
        <div
          className="hero-desktop-vignette pointer-events-none absolute inset-0 hidden md:block"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 hidden h-40 bg-gradient-to-t from-charcoal/70 to-transparent md:block"
          aria-hidden="true"
        />
      </div>

      <SiteContainer className="relative flex min-h-screen flex-col justify-end pt-24 pb-8 md:justify-between md:pb-10">
        <div className="mt-auto w-full md:mt-0 md:flex md:flex-1 md:items-center md:justify-end">
          <div className="flex w-full max-w-xl flex-col items-center px-1 text-center text-white max-md:mx-auto md:ml-auto md:w-fit md:max-w-full md:items-end md:px-0 md:text-right">
            <h1 className="hero-content-in w-full text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.08]">
              <span className="block md:whitespace-nowrap">
                Robotic, Colorectal
              </span>
              <span className="block md:whitespace-nowrap">and General Surgeon</span>
            </h1>

            <p className="hero-content-in hero-content-in--delay-1 mt-4 w-full text-base leading-relaxed text-white/90 sm:text-lg md:mt-5 lg:text-xl">
              specialising in{" "}
              <Link
                href={minimallyInvasiveSectionHref}
                scroll={false}
                className="font-semibold text-white underline decoration-white/70 underline-offset-[0.2em] transition hover:decoration-white"
              >
                minimally invasive
              </Link>{" "}
              and{" "}
              <Link
                href="/robotic-surgery"
                className="font-semibold text-white underline decoration-white/70 underline-offset-[0.2em] transition hover:decoration-white"
              >
                robotic surgery
              </Link>
            </p>

            <p className="hero-content-in hero-content-in--delay-1 mt-2 w-full text-2xl font-medium leading-snug text-white/95 sm:text-3xl lg:mt-3 lg:text-[2rem] lg:leading-snug">
              in London & Hertfordshire
            </p>
            <p
              data-speakable="summary"
              className="hero-content-in hero-content-in--delay-1 sr-only"
            >
              {siteConfig.description}
            </p>
            <div className="hero-content-in hero-content-in--delay-1 mt-8 flex w-full flex-wrap justify-center gap-3 md:mt-10 md:justify-end">
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
