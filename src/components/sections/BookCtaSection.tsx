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
        <FocalImage
          src="/images/book-cta-patient.jpg"
          alt="Mr Najib Daulatzai speaking with a patient during a consultation appointment in London or Hertfordshire"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={75}
        />

        <div className="relative flex min-h-[360px] w-full flex-col lg:min-h-[480px] lg:flex-row">
          <div className="relative min-h-[200px] flex-1 lg:min-h-full" />

          <div className="relative flex w-full flex-1 items-center lg:w-1/2 lg:flex-none">
            <div
              aria-hidden="true"
              className="book-cta-frost pointer-events-none absolute inset-0"
            />

            <ScrollReveal
              variant="fade-left"
              className="relative z-10 flex w-full justify-end px-3 py-12 sm:px-4 md:px-5 lg:px-10 lg:py-24 lg:pr-16 xl:pr-24"
            >
              <div className="max-w-md text-right">
                <h2
                  id="book-heading"
                  className="text-3xl font-semibold leading-tight tracking-tight text-charcoal [text-shadow:0_1px_18px_rgba(255,255,255,0.55)] sm:text-4xl lg:text-5xl"
                >
                  Book Your
                  <span className="block">Appointment Today</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-charcoal/85 sm:text-base">
                  {bookCtaParagraph}
                </p>
                <div className="mt-8 flex justify-end">
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
