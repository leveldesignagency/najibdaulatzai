import { TestimonialStars } from "@/components/testimonials/TestimonialStars";
import type { Testimonial } from "@/lib/testimonials-content";

type TestimonialGridProps = {
  items: Testimonial[];
};

export function TestimonialGrid({ items }: TestimonialGridProps) {
  return (
    <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
      {items.map((item) => (
        <li key={`${item.platform}-${item.dateLabel}-${item.quote.slice(0, 48)}`}>
          <article className="flex h-full flex-col border border-charcoal/10 bg-white p-6 lg:p-8">
            <TestimonialStars size="sm" />
            <blockquote className="mt-5 flex-1 text-base leading-relaxed text-charcoal/85 lg:text-[1.05rem] lg:leading-relaxed">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <footer className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-charcoal/10 pt-5 text-sm text-charcoal/70">
              <p>{item.dateLabel}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/55">
                {item.platform}
              </p>
            </footer>
          </article>
        </li>
      ))}
    </ul>
  );
}
