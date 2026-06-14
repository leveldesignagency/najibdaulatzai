import { FocalImage } from "@/components/ui/FocalImage";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { bookCtaParagraph } from "@/lib/site-config";

export function BookCtaSection() {
  return (
    <section
      aria-labelledby="book-heading"
      className="relative w-full overflow-hidden"
    >
      <div className="relative min-h-[360px] w-full lg:min-h-[480px]">
        <div className="book-cta-image absolute inset-0">
          <FocalImage
            src="/images/book-cta-patient.jpg"
            alt="Mr Najib Daulatzai speaking with a patient during a consultation appointment in London or Hertfordshire"
            fill
            className="object-cover"
            sizes="100vw"
            quality={75}
          />
        </div>

        <div className="relative flex min-h-[360px] w-full flex-col lg:min-h-[480px] lg:flex-row">
          <div className="relative min-h-[280px] flex-1 sm:min-h-[300px] lg:min-h-full" />

          <div className="relative flex w-full flex-1 items-center lg:w-1/2 lg:flex-none">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white from-[40%] via-white/80 via-[58%] to-transparent lg:bg-gradient-to-l lg:from-[42%] lg:from-white lg:via-white/75 lg:via-[58%] lg:to-transparent"
            />

            <ScrollReveal
              variant="blur-up"
              delay={120}
              className="relative z-10 flex w-full justify-center px-3 py-10 sm:px-4 sm:py-12 md:px-5 lg:justify-end lg:px-10 lg:py-24 lg:pr-16 xl:pr-24"
            >
              <div className="max-w-md rounded-sm bg-white/88 px-4 py-5 text-center sm:bg-white/82 lg:bg-transparent lg:p-0 lg:text-right">
                <h2
                  id="book-heading"
                  className="text-3xl font-semibold leading-tight tracking-tight text-charcoal sm:text-4xl lg:text-5xl"
                >
                  Book Your
                  <span className="block">Appointment Today</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-charcoal sm:text-base">
                  {bookCtaParagraph}
                </p>
                <div className="mt-8 flex justify-center lg:justify-end">
                  <Button href="/contact" variant="dark">
                    Book Now
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
