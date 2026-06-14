import { privatePracticeBookingNote } from "@/lib/contact-content";
import { nhsLocation, privateLocations } from "@/lib/site-config";
import { LocationMapCard } from "@/components/locations/LocationMapCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { scrollStagger } from "@/lib/scroll-stagger";
import { ContactForm } from "./ContactForm";

export function ContactPageContent() {
  const locations = [
    { key: "nhs", location: nhsLocation, isNhs: true as const },
    ...privateLocations.map((location) => ({
      key: location.name,
      location,
      isNhs: false as const,
    })),
  ];

  return (
    <div className="space-y-12 lg:space-y-14">
      <section aria-label="Practice locations">
        <ul className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {locations.map(({ key, location, isNhs }, index) => (
            <li key={key} className="h-full">
              <ScrollReveal
                variant={index % 2 === 0 ? "fade-up" : "scale-up"}
                delay={scrollStagger(index, 90, 80)}
              >
                <LocationMapCard
                  practiceType={isNhs ? "nhs" : "private"}
                  name={location.name}
                  lines={location.lines}
                  mapEmbed={location.mapEmbed}
                  mapQuery={location.mapQuery}
                  mapTitle={
                    isNhs
                      ? "Map showing West Hertfordshire Teaching Hospitals NHS Trust in Watford"
                      : `Map showing ${location.name}`
                  }
                />
              </ScrollReveal>
            </li>
          ))}
        </ul>

        <ScrollReveal variant="blur-up" delay={200}>
          <div className="mt-8 flex justify-center sm:mt-10">
            <p className="max-w-3xl rounded-sm border border-charcoal/10 bg-neutral-100 px-6 py-5 text-center text-base leading-relaxed text-charcoal lg:px-8 lg:text-lg">
              {privatePracticeBookingNote}
            </p>
          </div>
        </ScrollReveal>
      </section>

      <ScrollReveal variant="fade-up" delay={120}>
        <div className="max-w-3xl">
          <ContactForm />
        </div>
      </ScrollReveal>
    </div>
  );
}
