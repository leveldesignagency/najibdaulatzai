"use client";

import { FocalImage } from "@/components/ui/FocalImage";
import { useEffect, useRef, useState } from "react";

const PARALLAX_FACTOR = 0.18;
const MAX_SHIFT = 48;
const DESKTOP_QUERY = "(min-width: 1024px)";

type ParallaxImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  focalPoint?: string;
  /** Tall portrait frame used on the homepage about section. */
  aspect?: "portrait" | "landscape";
  withBackdrop?: boolean;
  /** Moves opposite to scroll for visual contrast between paired images. */
  invert?: boolean;
  className?: string;
};

export function ParallaxImage({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  focalPoint,
  aspect = "landscape",
  withBackdrop = true,
  invert = false,
  className = "",
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);
  const [motionEnabled, setMotionEnabled] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopQuery = window.matchMedia(DESKTOP_QUERY);

    const syncMotion = () => {
      setMotionEnabled(desktopQuery.matches && !motionQuery.matches);
    };

    syncMotion();
    motionQuery.addEventListener("change", syncMotion);
    desktopQuery.addEventListener("change", syncMotion);

    if (motionQuery.matches) {
      return () => {
        motionQuery.removeEventListener("change", syncMotion);
        desktopQuery.removeEventListener("change", syncMotion);
      };
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

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      motionQuery.removeEventListener("change", syncMotion);
      desktopQuery.removeEventListener("change", syncMotion);
    };
  }, [invert]);

  const foregroundShift = motionEnabled ? translateY : 0;
  const backgroundShift = motionEnabled ? translateY * 0.45 : 0;

  if (aspect === "portrait") {
    return (
      <div className={`relative mx-auto w-full max-w-lg lg:max-w-none ${className}`.trim()}>
        <div
          ref={containerRef}
          className="relative flex min-h-[20rem] w-full max-w-md items-center justify-center py-2 sm:min-h-[22rem] lg:max-w-none lg:min-h-[26rem]"
        >
          {withBackdrop ? (
            <div className="pointer-events-none absolute inset-x-0 top-1/2 h-[62%] -translate-y-1/2 overflow-hidden rounded-2xl bg-neutral-100 sm:h-[64%]">
              <div
                className="absolute inset-[-20%] will-change-transform"
                style={{ transform: `translate3d(0, ${backgroundShift}px, 0)` }}
              >
                <FocalImage
                  src={src}
                  alt=""
                  fill
                  focalPoint={focalPoint}
                  className="scale-110 object-cover object-center blur-2xl brightness-95 saturate-[0.85]"
                  sizes="(max-width: 1024px) 80vw, 40vw"
                />
              </div>
              <div className="absolute inset-0 bg-white/25" />
            </div>
          ) : null}

          <div
            className="relative z-10 aspect-[3/4] w-[78%] min-w-[12rem] max-w-[20rem] overflow-hidden rounded-lg bg-neutral-100 shadow-[0_24px_48px_-12px_rgba(74,74,74,0.28)] ring-1 ring-charcoal/10 will-change-transform sm:w-[82%] sm:max-w-[22rem] lg:w-[80%] lg:max-w-[24rem]"
            style={{ transform: `translate3d(0, ${foregroundShift}px, 0)` }}
          >
            <div className="absolute inset-[-8%]">
              <FocalImage
                src={src}
                alt={alt}
                fill
                priority={priority}
                focalPoint={focalPoint}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 55vw, 28vw"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${className}`.trim()}>
      <div ref={containerRef} className="relative w-full">
        {withBackdrop ? (
          <div className="pointer-events-none absolute inset-x-[6%] top-0 hidden aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 lg:block lg:aspect-[5/4]">
            <div
              className="absolute inset-[-18%] will-change-transform"
              style={{ transform: `translate3d(0, ${backgroundShift}px, 0)` }}
            >
              <FocalImage
                src={src}
                alt=""
                fill
                focalPoint={focalPoint}
                className="scale-110 object-cover blur-2xl brightness-95 saturate-[0.88]"
                sizes={sizes}
              />
            </div>
            <div className="absolute inset-0 bg-white/20" />
          </div>
        ) : null}

        <figure
          className="relative z-10 m-0 aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-100 shadow-[0_20px_44px_-16px_rgba(74,74,74,0.24)] ring-1 ring-charcoal/10 will-change-transform lg:aspect-[5/4] lg:rounded-2xl"
          style={{ transform: `translate3d(0, ${foregroundShift}px, 0)` }}
        >
          <div className="absolute inset-[-6%]">
            <FocalImage
              src={src}
              alt={alt}
              fill
              priority={priority}
              focalPoint={focalPoint}
              className="object-cover"
              sizes={sizes}
            />
          </div>
        </figure>
      </div>
    </div>
  );
}
