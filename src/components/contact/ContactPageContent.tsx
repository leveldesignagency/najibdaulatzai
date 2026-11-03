import { ContactClinicDetails } from "@/components/contact/ContactClinicDetails";
import { nhsLocation, privateLocations } from "@/lib/site-config";
import { LocationMapCard } from "@/components/locations/LocationMapCard";
import { SelfPayLocationCta } from "@/components/locations/SelfPayLocationCta";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { scrollStagger } from "@/lib/scroll-stagger";

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
                className="h-full"
                variant={index % 2 === 0 ? "fade-up" : "scale-up"}
                delay={scrollStagger(index, 90, 80)}
              >
                <LocationMapCard
                  practiceType={isNhs ? "nhs" : "private"}
                  name={location.name}
                  lines={location.lines}
                  note={"note" in location ? location.note : undefined}
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
          <li className="h-full">
            <ScrollReveal
              className="h-full"
              variant="scale-up"
              delay={scrollStagger(locations.length, 90, 80)}
            >
              <SelfPayLocationCta />
            </ScrollReveal>
          </li>
        </ul>

        <ContactClinicDetails />
      </section>
    </div>
  );
}
