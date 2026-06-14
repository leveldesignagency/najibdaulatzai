import Image from "next/image";
import { reviewPlatforms } from "@/lib/testimonials-content";

export function ReviewPlatformLinks() {
  return (
    <section aria-label="Patient review platforms" className="mt-10">
      <p className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-charcoal/55">
        Read all verified reviews
      </p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-3">
        {reviewPlatforms.map((platform) => (
          <li key={platform.name}>
            <a
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full min-h-[5.5rem] flex-col items-center justify-center gap-3 border border-charcoal/10 bg-white px-5 py-6 transition hover:border-charcoal/25 hover:shadow-sm"
            >
              <Image
                src={platform.logo}
                alt={`${platform.name} logo`}
                width={platform.width}
                height={platform.height}
                className="h-8 w-auto max-w-[11rem] object-contain sm:h-9 sm:max-w-[12rem]"
              />
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-charcoal/70">
                View on {platform.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
