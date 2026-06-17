import { LocationMapCard } from "@/components/locations/LocationMapCard";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { HomeSectionShell } from "@/components/sections/HomeSectionShell";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { scrollStagger } from "@/lib/scroll-stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeTypography } from "@/lib/home-typography";
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
    <HomeSectionShell
      id="locations"
      aria-labelledby="locations-heading"
      variant="dark"
      className="text-white"
    >
      <div
        className="home-section-divider home-section-divider--light mx-auto hidden max-w-5xl lg:block"
        aria-hidden="true"
      />

      <SiteContainer className="lg:pt-2">
        <ScrollReveal variant="blur-up">
          <div className="max-w-3xl max-md:mx-auto max-md:text-center lg:max-w-2xl">
            <SectionEyebrow theme="light">London &amp; Hertfordshire</SectionEyebrow>
            <SectionHeading
              id="locations-heading"
              theme="light"
              mobileCenter
              className="mt-3 lg:mt-4"
            >
              Locations
            </SectionHeading>
            <p
              className={`mt-6 lg:mt-8 ${homeTypography.lead} ${homeTypography.leadLight}`}
            >
              NHS and private consultations across leading hospitals in London and
              Hertfordshire.
            </p>
          </div>
        </ScrollReveal>

        <ul className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:gap-8">
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
    </HomeSectionShell>
  );
}
