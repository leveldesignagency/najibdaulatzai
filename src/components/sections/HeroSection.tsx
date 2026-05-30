import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/layout/Header";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-charcoal">
      <Header />

      <div className="absolute inset-0">
        <Image
          src="/images/hero-consultation.png"
          alt="Mr Najib Daulatzai, colorectal and general surgeon in London and Hertfordshire, seated at his desk in professional attire"
          fill
          priority
          className="object-cover object-[center_20%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/20 via-charcoal/10 to-charcoal/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-charcoal/30" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-16 pt-28 lg:px-10 lg:pb-24">
        <div className="ml-auto max-w-xl text-right text-white">
          <h1 className="text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Colorectal & General Surgeon
            <span className="mt-2 block text-2xl font-normal text-white/90 sm:text-3xl lg:text-4xl">
              in London & Hertfordshire
            </span>
          </h1>
          <div className="mt-10 flex justify-end">
            <Button href="/contact" variant="light">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
