"use client";

import { useCallback, useEffect, useState } from "react";
import type { Testimonial } from "@/lib/testimonials-content";

const AUTOPLAY_MS = 7000;

function FiveStars() {
  return (
    <div
      className="flex justify-center gap-1.5 text-amber-400"
      aria-label="5 out of 5 stars"
      role="img"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className="h-5 w-5 fill-current sm:h-6 sm:w-6"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function NavArrow({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d={direction === "prev" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type TestimonialSlideshowProps = {
  items: Testimonial[];
};

export function TestimonialSlideshow({ items }: TestimonialSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      const total = items.length;
      setActiveIndex(((index % total) + total) % total);
    },
    [items.length],
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = () => setReduceMotion(motionQuery.matches);

    handleMotionChange();
    motionQuery.addEventListener("change", handleMotionChange);

    return () => motionQuery.removeEventListener("change", handleMotionChange);
  }, []);

  useEffect(() => {
    if (reduceMotion || items.length <= 1) return;

    const timer = window.setInterval(goNext, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [activeIndex, goNext, items.length, reduceMotion]);

  if (items.length === 0) return null;

  return (
    <div className="mt-16">
      <FiveStars />

      <div
        className="relative mx-auto mt-8 min-h-[220px] max-w-3xl sm:min-h-[200px] lg:min-h-[180px]"
        aria-live="polite"
        aria-atomic="true"
      >
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <figure
              key={item.quote.slice(0, 48)}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden={!isActive}
            >
              <blockquote className="text-center">
                <p className="text-lg leading-relaxed text-charcoal/90 sm:text-xl lg:text-2xl lg:leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </blockquote>
            </figure>
          );
        })}
      </div>

      <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10">
        <div className="flex gap-2">
          {items.map((item, index) => (
            <button
              key={item.quote.slice(0, 48)}
              type="button"
              aria-label={`Show testimonial ${index + 1} of ${items.length}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => goTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-charcoal"
                  : "w-2.5 bg-charcoal/25 hover:bg-charcoal/45"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={goPrev}
            className="flex h-11 w-11 items-center justify-center border border-charcoal/20 bg-white/80 text-charcoal transition hover:border-charcoal/40 hover:bg-white"
          >
            <NavArrow direction="prev" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={goNext}
            className="flex h-11 w-11 items-center justify-center border border-charcoal/20 bg-white/80 text-charcoal transition hover:border-charcoal/40 hover:bg-white"
          >
            <NavArrow direction="next" />
          </button>
        </div>
      </div>
    </div>
  );
}
