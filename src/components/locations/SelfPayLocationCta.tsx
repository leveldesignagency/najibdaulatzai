import { Button } from "@/components/ui/Button";
import { selfPayFees } from "@/lib/about-content";

type SelfPayLocationCtaProps = {
  theme?: "light" | "dark";
  mobileCenter?: boolean;
};

export function SelfPayLocationCta({
  theme = "light",
  mobileCenter = false,
}: SelfPayLocationCtaProps) {
  const isDark = theme === "dark";
  const mobileCenterClass = mobileCenter ? "max-md:text-center" : "";
  const badgeClass = mobileCenter ? "max-md:mx-auto max-md:block max-md:w-fit" : "";
  const buttonWrapClass = mobileCenter ? "max-md:flex max-md:justify-center" : "";

  return (
    <article
      className={`surface-rounded flex h-full flex-col justify-between border p-6 lg:p-8 ${mobileCenterClass} ${
        isDark
          ? "border-white/20 bg-white/10 backdrop-blur-sm"
          : "border-charcoal/15 bg-charcoal text-white"
      }`}
    >
      <div>
        <p
          className={`w-fit self-start rounded-sm border px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.28em] ${badgeClass} ${
            isDark
              ? "border-white/35 bg-white/10 text-white"
              : "border-white/30 bg-white/10 text-white"
          }`}
        >
          Self-pay
        </p>
        <h3 className="mt-3 text-lg font-medium leading-snug text-white lg:mt-4 lg:text-xl">
          Transparent consultation fees
        </h3>
        <p
          className={`mt-3 text-sm leading-relaxed lg:mt-4 lg:text-base ${
            isDark ? "text-white/80" : "text-white/85"
          }`}
        >
          Clear pricing for private appointments, with no obligation to proceed
          to treatment.
        </p>

        <dl className="mt-5 space-y-2.5 lg:mt-6 lg:space-y-3">
          <div
            className={`flex items-baseline justify-between gap-4 border-b pb-2.5 lg:pb-3 ${
              isDark ? "border-white/15" : "border-white/20"
            } ${mobileCenter ? "max-md:flex-col max-md:items-center max-md:gap-1" : ""}`}
          >
            <dt className={isDark ? "text-white/75" : "text-white/80"}>
              New consultation
            </dt>
            <dd className="text-xl font-medium tracking-tight text-white">
              £{selfPayFees.newConsultation}
            </dd>
          </div>
          <div
            className={`flex items-baseline justify-between gap-4 ${
              mobileCenter ? "max-md:flex-col max-md:items-center max-md:gap-1" : ""
            }`}
          >
            <dt className={isDark ? "text-white/75" : "text-white/80"}>
              Follow-up
            </dt>
            <dd className="text-xl font-medium tracking-tight text-white">
              £{selfPayFees.followUp}
            </dd>
          </div>
        </dl>
      </div>

      <div className={`mt-6 lg:mt-8 ${buttonWrapClass}`}>
        <Button
          href="/contact#get-in-touch"
          variant="light"
          data-analytics-action="enquire"
          data-analytics-location="Self-pay CTA"
        >
          Enquire now
        </Button>
      </div>
    </article>
  );
}
