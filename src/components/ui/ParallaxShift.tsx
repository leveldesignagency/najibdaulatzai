"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const PARALLAX_FACTOR = 0.1;
const MAX_SHIFT = 28;
const DESKTOP_QUERY = "(min-width: 1024px)";

type ParallaxShiftProps = {
  children: ReactNode;
  className?: string;
  invert?: boolean;
};

/** Subtle vertical drift for text columns on desktop — pairs with ParallaxImage. */
export function ParallaxShift({
  children,
  className = "",
  invert = false,
}: ParallaxShiftProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopQuery = window.matchMedia(DESKTOP_QUERY);

    if (motionQuery.matches) {
      return;
    }

    let frame = 0;

    const updateParallax = () => {
      if (!desktopQuery.matches) {
        setTranslateY(0);
        return;
      }

      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenter - viewportCenter;
      const direction = invert ? 1 : -1;
      const shift =
        direction *
        Math.max(
          -MAX_SHIFT,
          Math.min(MAX_SHIFT, distanceFromCenter * PARALLAX_FACTOR),
        );

      setTranslateY(shift);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateParallax);
    };

    const onViewportChange = () => updateParallax();

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    desktopQuery.addEventListener("change", onViewportChange);
    motionQuery.addEventListener("change", onViewportChange);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      desktopQuery.removeEventListener("change", onViewportChange);
      motionQuery.removeEventListener("change", onViewportChange);
    };
  }, [invert]);

  return (
    <div
      ref={containerRef}
      className={`will-change-transform ${className}`.trim()}
      style={{ transform: `translate3d(0, ${translateY}px, 0)` }}
    >
      {children}
    </div>
  );
}
