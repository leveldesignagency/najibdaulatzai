import { LocationMapCard } from "@/components/locations/LocationMapCard";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { scrollStagger } from "@/lib/scroll-stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { nhsLocation, privateLocations } from "@/lib/site-config";

export function LocationsSection() {
  const locations = [
    { key: "nhs", location: nhsLocation, isNhs: true as const },
    ...privateLocations.map((location) => ({
      key: location.name,
      location,
      isNhs: false as const,
    })),
  ];

  return (
    <section
      id="locations"
      aria-labelledby="locations-heading"
      className="bg-charcoal py-20 text-white lg:py-28"
    >
      <SiteContainer>
        <ScrollReveal variant="blur-up">
          <SectionHeading id="locations-heading" theme="light" mobileCenter>
            Locations
          </SectionHeading>
        </ScrollReveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {locations.map(({ key, location, isNhs }, index) => (
            <li key={key} className="h-full">
              <ScrollReveal
                variant={index % 2 === 0 ? "fade-up" : "scale-up"}
                delay={scrollStagger(index, 90, 120)}
              >
                <LocationMapCard
                theme="dark"
                mobileCenter
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
      </SiteContainer>
    </section>
  );
}
