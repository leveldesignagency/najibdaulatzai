import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { HeroServiceNav } from "@/components/sections/HeroServiceNav";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-charcoal pt-0">

      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-image-zoom absolute inset-[-6%]">
          <Image
            src="/images/hero-consultation.jpg"
            alt="Mr Najib Daulatzai, colorectal and general surgeon in London and Hertfordshire, seated at his desk in professional attire"
            fill
            priority
            className="object-cover object-[50%_50%]"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-y-0 right-0 w-[40%] bg-gradient-to-l from-charcoal/80 via-charcoal/55 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal/70 to-transparent"
          aria-hidden="true"
        />
      </div>

      <SiteContainer className="relative flex min-h-screen flex-col justify-between pt-24 pb-8 md:pb-10">
        <div className="flex flex-1 items-center">
          <div className="ml-auto w-full max-w-xl text-right text-white lg:mr-[2%]">
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
            <div className="hero-content-in hero-content-in--delay-1 mt-10 flex flex-wrap justify-end gap-3">
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
