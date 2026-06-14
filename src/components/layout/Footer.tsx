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
        <SiteContainer className="flex flex-col items-center py-16 text-center">
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

          <ScrollReveal variant="fade-up" delay={180}>
            <div className="mt-12 flex flex-col items-center gap-3">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                <Link
                  href="/privacy"
                  className="text-xs uppercase tracking-[0.28em] text-white/85 transition hover:text-white"
                >
                  Privacy &amp; Cookies
                </Link>
                <CookieSettingsButton />
              </div>
              <p className="text-xs tracking-[0.08em] text-white/60">
                © 2026 ndsurgeon.com
              </p>
            </div>
          </ScrollReveal>
        </SiteContainer>
      </footer>
    </>
  );
}
