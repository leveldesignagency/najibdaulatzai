"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

const LIGHT_HEADER_PREFIXES = [
  "/about",
  "/research",
  "/testimonials",
  "/procedures",
  "/robotic-surgery",
  "/blog",
  "/gp-referrals",
  "/patient-faq",
  "/contact",
  "/privacy",
];

function useHeaderTheme() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isLight = LIGHT_HEADER_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );

  return {
    homeMenu: isHome,
    isLight,
  };
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { homeMenu, isLight } = useHeaderTheme();

  const showHeroMobileHeader = homeMenu && !open && !scrolled;
  const showSolidHeader =
    (isLight && !open) || (homeMenu && scrolled && !open);
  const useLightTheme = isLight || open || (homeMenu && scrolled);
  const useWhiteLogo = !useLightTheme && !showHeroMobileHeader;

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
    if (!homeMenu) {
      setScrolled(false);
      return;
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 48);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [homeMenu]);

  if (pathname === "/login") {
    return null;
  }

  if (!mounted) {
    return null;
  }

  return createPortal(
    <>
      <header
        className={`site-header !fixed inset-x-0 top-0 z-[100] w-full ${
          showSolidHeader ? "site-header--solid" : ""
        } ${showHeroMobileHeader ? "site-header--hero-home" : ""}`}
      >
        <SiteContainer className="grid grid-cols-[2.75rem_1fr_2.75rem] items-center py-5 md:flex md:justify-between">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className={`site-header__menu-btn group col-start-1 flex h-11 w-11 shrink-0 items-center justify-center transition hover:opacity-80 ${
              useLightTheme && !showHeroMobileHeader
                ? "text-charcoal"
                : showHeroMobileHeader
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
              useLightTheme && !showHeroMobileHeader
                ? "text-charcoal"
                : showHeroMobileHeader
                  ? "text-charcoal md:text-white"
                  : "text-white"
            }`}
          >
            <Logo
              inverted={useWhiteLogo}
              charcoal={showHeroMobileHeader}
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
