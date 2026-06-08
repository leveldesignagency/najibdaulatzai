"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const PARALLAX_FACTOR = 0.18;
const MAX_SHIFT = 48;
const IMAGE_SRC = "/images/about-section.jpg";
const IMAGE_ALT =
  "Mr Najib Daulatzai in operating theatre wearing surgical cap, mask, and headlight during colorectal surgery";

export function AboutParallaxImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = () => setReduceMotion(motionQuery.matches);

    handleMotionChange();
    motionQuery.addEventListener("change", handleMotionChange);

    if (motionQuery.matches) {
      return () => motionQuery.removeEventListener("change", handleMotionChange);
    }

    let frame = 0;

    const updateParallax = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenter - viewportCenter;
      const shift = Math.max(
        -MAX_SHIFT,
        Math.min(MAX_SHIFT, distanceFromCenter * PARALLAX_FACTOR),
      );

      setTranslateY(shift);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  const backgroundShift = reduceMotion ? 0 : translateY * 0.45;
  const foregroundShift = reduceMotion ? 0 : translateY;

  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      <div
        ref={containerRef}
        className="relative flex min-h-[20rem] w-full max-w-md items-center justify-center py-2 sm:min-h-[22rem] lg:max-w-none lg:min-h-[26rem]"
      >
        <div className="pointer-events-none absolute inset-x-0 top-1/2 h-[62%] -translate-y-1/2 overflow-hidden rounded-2xl bg-neutral-100 sm:h-[64%]">
          <div
            className="absolute inset-[-20%] will-change-transform"
            style={{
              transform: `translate3d(0, ${backgroundShift}px, 0)`,
            }}
          >
            <Image
              src={IMAGE_SRC}
              alt=""
              fill
              className="scale-110 object-cover object-center blur-2xl brightness-95 saturate-[0.85]"
              sizes="(max-width: 1024px) 80vw, 40vw"
            />
          </div>
          <div className="absolute inset-0 bg-white/25" />
        </div>

        <div
          className="relative z-10 aspect-[3/4] w-[78%] min-w-[12rem] max-w-[20rem] overflow-hidden rounded-lg bg-neutral-100 shadow-[0_24px_48px_-12px_rgba(74,74,74,0.28)] ring-1 ring-charcoal/10 will-change-transform sm:w-[82%] sm:max-w-[22rem] lg:w-[80%] lg:max-w-[24rem]"
          style={{
            transform: `translate3d(0, ${foregroundShift}px, 0)`,
          }}
        >
          <div className="absolute inset-[-8%]">
            <Image
              src={IMAGE_SRC}
              alt={IMAGE_ALT}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 55vw, 28vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
