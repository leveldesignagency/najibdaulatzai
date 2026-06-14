"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

export type ScrollRevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade-in"
  | "fade-left"
  | "fade-right"
  | "scale-up"
  | "blur-up";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: ScrollRevealVariant;
  threshold?: number;
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration,
  variant = "fade-up",
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const revealIfInView = () => {
      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
      const ratio = visibleHeight / Math.max(rect.height, 1);

      if (ratio >= threshold) {
        setVisible(true);
        return true;
      }

      return false;
    };

    if (revealIfInView()) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px 12% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  const style: CSSProperties = {
    ...(delay ? { transitionDelay: `${delay}ms` } : {}),
    ...(duration ? { transitionDuration: `${duration}ms` } : {}),
  };

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal--${variant} ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
