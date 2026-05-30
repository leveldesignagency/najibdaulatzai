"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

type HeaderProps = {
  theme?: "light" | "dark";
};

export function Header({ theme = "dark" }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const isLight = theme === "light";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className={`group flex h-11 w-11 items-center justify-center transition hover:opacity-80 ${
              open || isLight ? "text-charcoal" : "text-white"
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
            className={open || isLight ? "text-charcoal" : "text-white"}
          >
            <Logo className="h-8 w-auto md:h-10" />
          </Link>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
