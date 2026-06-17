"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { isProcedureGuidePage } from "@/lib/procedures";
import { hasProcedureDetailPage } from "@/lib/procedures/procedure-pages";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

const LIGHT_HEADER_PREFIXES = [
  "/about",
  "/research",
  "/testimonials",
  "/robotic-surgery",
  "/blog",
  "/gp-referrals",
  "/patient-faq",
  "/contact",
  "/privacy",
];

function hasHeroHeader(pathname: string): boolean {
  if (pathname === "/" || pathname === "/procedures") {
    return true;
  }

  const match = pathname.match(/^\/procedures\/([^/]+)$/);
  return match ? hasProcedureDetailPage(match[1]) : false;
}

function useHeaderTheme() {
  const pathname = usePathname();
  const heroHeader = hasHeroHeader(pathname);
  const procedureSlug = pathname.startsWith("/procedures/")
    ? pathname.slice("/procedures/".length)
    : null;
  const isProcedureGuide =
    procedureSlug !== null && isProcedureGuidePage(procedureSlug);
  const isLight =
    !heroHeader &&
    (LIGHT_HEADER_PREFIXES.some(
      (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
    ) ||
      isProcedureGuide);

  return {
    heroHeader,
    isLight,
  };
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { heroHeader, isLight } = useHeaderTheme();

  const showHeroHeaderStyle = heroHeader && !open && !scrolled;
  const showSolidHeader =
    (isLight && !open) || (heroHeader && scrolled && !open);
  const useLightTheme = isLight || open || (heroHeader && scrolled);
  const useWhiteLogo = !useLightTheme && !showHeroHeaderStyle;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!heroHeader) {
      setScrolled(false);
      return;
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 48);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [heroHeader]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <>
      <header
        className={`site-header !fixed inset-x-0 top-0 z-[100] w-full ${
          showSolidHeader ? "site-header--solid" : ""
        } ${showHeroHeaderStyle ? "site-header--hero-home" : ""}`}
      >
        <SiteContainer className="grid grid-cols-[2.75rem_1fr_2.75rem] items-center py-5 md:flex md:justify-between">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className={`site-header__menu-btn group col-start-1 flex h-11 w-11 shrink-0 items-center justify-center transition hover:opacity-80 ${
              useLightTheme && !showHeroHeaderStyle
                ? "text-charcoal"
                : showHeroHeaderStyle
                  ? "text-charcoal md:text-white site-header__menu-btn--hero"
                  : "text-white"
            }`}
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-6 bg-current transition-transform duration-300 ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2 block h-0.5 w-6 bg-current transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-4 block h-0.5 w-6 bg-current transition-transform duration-300 ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>

          <Link
            href="/"
            aria-label="Najib Daulatzai home"
            className={`site-header__logo col-start-2 justify-self-center md:col-start-auto md:ml-auto ${
              useLightTheme && !showHeroHeaderStyle
                ? "text-charcoal"
                : showHeroHeaderStyle
                  ? "text-charcoal md:text-white"
                  : "text-white"
            }`}
          >
            <Logo
              inverted={useWhiteLogo}
              charcoal={showHeroHeaderStyle}
              className="site-header__logo-img h-12 w-auto md:h-16"
            />
          </Link>

          <div className="col-start-3 md:hidden" aria-hidden="true" />
        </SiteContainer>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>,
    document.body,
  );
}
