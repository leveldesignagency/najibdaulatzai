import {
  contactSelfPaySummary,
  otherSitesOnRequestNote,
  privatePracticeBookingNote,
  spireClinicTimes,
} from "@/lib/contact-content";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ContactClinicDetails() {
  return (
    <ScrollReveal variant="blur-up" delay={200}>
      <section
        aria-labelledby="clinic-details-heading"
        className="surface-rounded mt-8 border border-charcoal/10 bg-neutral-100 p-6 sm:mt-10 lg:p-8"
      >
        <h2
          id="clinic-details-heading"
          className="text-lg font-semibold tracking-tight text-charcoal sm:text-xl"
        >
          Clinic times &amp; fees
        </h2>

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-12 lg:items-start">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-charcoal/55">
              Spire Bushey Hospital
            </h3>
            <ul className="mt-4 space-y-3">
              {spireClinicTimes.map((slot) => (
                <li
                  key={slot.day}
                  className="flex items-baseline justify-between gap-6 border-b border-charcoal/10 pb-3 last:border-b-0 last:pb-0"
                >
                  <span className="text-base text-charcoal lg:text-lg">{slot.day}</span>
                  <span className="shrink-0 text-base font-medium tabular-nums text-charcoal lg:text-lg">
                    {slot.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-charcoal/85 lg:text-lg">
            <p>{otherSitesOnRequestNote}</p>
            <p className="font-medium text-charcoal">{contactSelfPaySummary}</p>
            <p className="border-t border-charcoal/10 pt-5 text-charcoal/75">
              {privatePracticeBookingNote}
            </p>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
