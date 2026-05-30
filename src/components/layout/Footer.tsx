import Link from "next/link";
import { footerNavLinks } from "@/lib/site-config";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-charcoal-dark text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-16 text-center lg:px-10">
        <Link href="/" aria-label="Najib Daulatzai home" className="mb-10 text-white">
          <Logo className="mx-auto h-10 w-auto" />
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

        <p className="mt-12 text-xs tracking-[0.08em] text-white/60">
          © 2026 by LEVEL DESIGN AGENCY LTD
        </p>
      </div>
    </footer>
  );
}
