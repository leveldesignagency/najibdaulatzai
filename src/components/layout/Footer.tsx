import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies/CookieSettingsButton";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { BookCtaSection } from "@/components/sections/BookCtaSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { footerNavLinks } from "@/lib/site-config";
import { Logo } from "./Logo";

type FooterProps = {
  includeBookCta?: boolean;
};

export function Footer({ includeBookCta = true }: FooterProps) {
  return (
    <>
      {includeBookCta ? <BookCtaSection /> : null}
      <footer className="bg-charcoal-dark text-white">
        <SiteContainer className="py-16 lg:py-20">
          <div className="flex flex-col items-center text-center">
            <ScrollReveal variant="scale-up">
              <Link
                href="/"
                aria-label="Najib Daulatzai home"
                className="mb-16 block text-white md:mb-20"
              >
                <Logo inverted className="mx-auto h-16 w-auto md:h-20" />
              </Link>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={100}>
              <nav
                aria-label="Footer navigation"
                className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
              >
                {footerNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs uppercase tracking-[0.28em] text-white/85 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="fade-up" delay={180}>
            <div className="mt-16 flex w-full flex-col gap-6 border-t border-white/10 pt-10 sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:gap-12 sm:pt-12">
              <div className="flex flex-col gap-4 text-left sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-10 sm:gap-y-3">
                <Link
                  href="/privacy"
                  className="text-xs uppercase tracking-[0.28em] text-white/85 transition hover:text-white"
                >
                  Privacy &amp; Cookies
                </Link>
                <CookieSettingsButton />
                <p className="text-xs tracking-[0.08em] text-white/60">
                  © 2026 ndsurgeon.com
                </p>
              </div>

              <p className="text-left text-xs tracking-[0.08em] text-white/60 sm:shrink-0 sm:text-right">
                Designed by{" "}
                <a
                  href="https://leveldesignagency.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white/60 transition-colors duration-300 hover:text-[#e30613]"
                >
                  LEVEL DESIGN AGENCY LTD
                </a>
              </p>
            </div>
          </ScrollReveal>
        </SiteContainer>
      </footer>
    </>
  );
}
