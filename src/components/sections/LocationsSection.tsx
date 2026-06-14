import { LocationMapCard } from "@/components/locations/LocationMapCard";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
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
        <ScrollReveal variant="fade-up">
          <SectionHeading id="locations-heading" theme="light">
            Locations
          </SectionHeading>
        </ScrollReveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {locations.map(({ key, location, isNhs }) => (
            <li key={key} className="h-full">
              <LocationMapCard
                theme="dark"
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
            </li>
          ))}
        </ul>
      </SiteContainer>
    </section>
  );
}
