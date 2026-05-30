import { nhsLocation, privateLocations } from "@/lib/site-config";

type LocationCardProps = {
  title: string;
  name: string;
  lines: readonly string[];
  mapEmbed: string;
  mapTitle: string;
};

function LocationCard({ title, name, lines, mapEmbed, mapTitle }: LocationCardProps) {
  return (
    <article className="grid gap-8 border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:grid-cols-[1fr_1.2fr] lg:items-center lg:p-8">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/70">
          {title}
        </p>
        <h3 className="mt-4 text-xl font-medium leading-snug text-white lg:text-2xl">
          {name}
        </h3>
        <address className="mt-4 space-y-1 not-italic text-base leading-relaxed text-white/80">
          {lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
      </div>

      <div className="overflow-hidden rounded-sm border border-white/10 shadow-2xl shadow-black/20">
        <iframe
          title={mapTitle}
          src={mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="aspect-[16/10] h-full min-h-[220px] w-full border-0 grayscale-[20%] invert-[5%]"
          allowFullScreen
        />
      </div>
    </article>
  );
}

export function LocationsSection() {
  return (
    <section
      id="locations"
      aria-labelledby="locations-heading"
      className="bg-charcoal py-20 text-white lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2
          id="locations-heading"
          className="text-4xl font-light tracking-tight lg:text-5xl"
        >
          Locations
        </h2>
        <div className="mt-4 h-px w-24 bg-white/80" aria-hidden="true" />

        <div className="mt-14 space-y-8">
          <LocationCard
            title={nhsLocation.label}
            name={nhsLocation.name}
            lines={nhsLocation.lines}
            mapEmbed={nhsLocation.mapEmbed}
            mapTitle="Map showing West Hertfordshire Teaching Hospitals NHS Trust in Watford"
          />

          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-white/70">
              PRIVATE PRACTICE
            </p>
            <div className="space-y-8">
              {privateLocations.map((location) => (
                <LocationCard
                  key={location.name}
                  title="PRIVATE PRACTICE"
                  name={location.name}
                  lines={location.lines}
                  mapEmbed={location.mapEmbed}
                  mapTitle={`Map showing ${location.name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
