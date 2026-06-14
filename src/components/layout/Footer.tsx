import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies/CookieSettingsButton";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { BookCtaSection } from "@/components/sections/BookCtaSection";
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
          <Link href="/" aria-label="Najib Daulatzai home" className="mb-10 text-white">
            <Logo inverted className="mx-auto h-10" />
          </Link>

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
        </SiteContainer>
      </footer>
    </>
  );
}
