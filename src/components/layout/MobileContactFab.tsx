"use client";

import { useEffect, useId, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics/gtag";
import { whatsAppHref } from "@/lib/contact-content";
import { siteConfig } from "@/lib/site-config";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5 shrink-0" aria-hidden="true">
      <path
        d="M6.6 10.8a15.9 15.9 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.3 21 3 13.7 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
        fill="currentColor"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5 shrink-0" aria-hidden="true">
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M3 7l9 6 9-6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Official WhatsApp brand mark */
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" aria-hidden="true">
      <path
        fill="#25D366"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5 shrink-0" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5 shrink-0" aria-hidden="true">
      <path
        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const fabActionClass =
  "flex size-11 items-center justify-center rounded-full text-white transition hover:bg-white/15 focus-visible:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40";

export function MobileContactFab() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent | TouchEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <nav
      ref={rootRef}
      aria-label="Quick contact"
      data-analytics-context="mobile-fab"
      className="fixed bottom-5 right-4 z-[90] md:hidden"
    >
      <div
        id={panelId}
        className={`mb-2 flex flex-col items-end gap-2 transition-all duration-200 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <a
          href={siteConfig.phoneHref}
          className={`${fabActionClass} border border-white/20 bg-charcoal/55 shadow-lg shadow-charcoal/25 backdrop-blur-xl`}
          aria-label="Call us"
          tabIndex={open ? 0 : -1}
        >
          <PhoneIcon />
        </a>
        <a
          href={siteConfig.emailHref}
          className={`${fabActionClass} border border-white/20 bg-charcoal/55 shadow-lg shadow-charcoal/25 backdrop-blur-xl`}
          aria-label="Email us"
          tabIndex={open ? 0 : -1}
        >
          <EmailIcon />
        </a>
        <a
          href={whatsAppHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`${fabActionClass} border border-white/20 bg-charcoal/55 shadow-lg shadow-charcoal/25 backdrop-blur-xl`}
          aria-label="Message on WhatsApp"
          tabIndex={open ? 0 : -1}
        >
          <WhatsAppIcon />
        </a>
      </div>

      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close contact options" : "Open contact options"}
        onClick={() =>
          setOpen((current) => {
            const next = !current;
            trackEvent(next ? "fab_open" : "fab_close", {
              page_path: window.location.pathname,
            });
            return next;
          })
        }
        className={`${fabActionClass} border border-white/20 bg-charcoal/70 shadow-lg shadow-charcoal/30 backdrop-blur-xl`}
      >
        {open ? <CloseIcon /> : <ChatIcon />}
      </button>
    </nav>
  );
}
