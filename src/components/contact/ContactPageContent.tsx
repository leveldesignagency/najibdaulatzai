import { privatePracticeBookingNote } from "@/lib/contact-content";
import { nhsLocation, privateLocations } from "@/lib/site-config";
import { LocationMapCard } from "@/components/locations/LocationMapCard";
import { ContactForm } from "./ContactForm";

export function ContactPageContent() {
  return (
    <div className="space-y-12 lg:space-y-14">
      <section aria-label="Practice locations">
        <ul className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          <li className="h-full">
            <LocationMapCard
              practiceType="nhs"
              mapLayout="below"
              name={nhsLocation.name}
              lines={nhsLocation.lines}
              mapEmbed={nhsLocation.mapEmbed}
              mapQuery={nhsLocation.mapQuery}
              mapTitle="Map showing West Hertfordshire Teaching Hospitals NHS Trust in Watford"
            />
          </li>

          {privateLocations.map((location) => (
            <li key={location.name} className="h-full">
              <LocationMapCard
                practiceType="private"
                mapLayout="below"
                name={location.name}
                lines={location.lines}
                mapEmbed={location.mapEmbed}
                mapQuery={location.mapQuery}
                mapTitle={`Map showing ${location.name}`}
              />
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center sm:mt-10">
          <p className="max-w-3xl rounded-sm border border-charcoal/10 bg-neutral-100 px-6 py-5 text-center text-base leading-relaxed text-charcoal lg:px-8 lg:text-lg">
            {privatePracticeBookingNote}
          </p>
        </div>
      </section>

      <div className="max-w-3xl">
        <ContactForm />
      </div>
    </div>
  );
}
