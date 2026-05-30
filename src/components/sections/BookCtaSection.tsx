import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function BookCtaSection() {
  return (
    <section
      aria-labelledby="book-heading"
      className="relative overflow-hidden bg-charcoal-light"
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[320px] lg:min-h-[480px]">
          <Image
            src="/images/book-appointment.png"
            alt="Mr Najib Daulatzai speaking with a patient during a consultation appointment in London or Hertfordshire"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-charcoal/20 lg:hidden" />
        </div>

        <div className="relative flex items-center bg-charcoal/90 px-6 py-16 backdrop-blur-sm lg:px-16 lg:py-24">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:text-left">
            <h2
              id="book-heading"
              className="text-3xl font-light leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Book Your
              <span className="block">Appointment Today</span>
            </h2>
            <div className="mt-10 flex justify-center lg:justify-start">
              <Button href="/contact" variant="light">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
