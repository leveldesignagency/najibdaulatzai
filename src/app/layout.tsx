import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import { CookieConsentProvider } from "@/components/cookies/CookieConsentProvider";
import { Header } from "@/components/layout/Header";
import { MobileContactFab } from "@/components/layout/MobileContactFab";
import { JsonLd } from "@/components/seo/JsonLd";
import { GoogleAnalytics } from "@/components/seo/GoogleAnalytics";
import { VercelInsights } from "@/components/seo/VercelInsights";
import { GA_MEASUREMENT_ID, buildGtagBootstrapScript, isGaConfigured } from "@/lib/analytics/gtag";
import { homeMetadata } from "@/lib/metadata";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = homeMetadata;

export const viewport: Viewport = {
  themeColor: "#4a4a4a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${dmSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col overflow-x-clip bg-white text-charcoal">
        {isGaConfigured() ? (
          <>
            <Script id="gtag-bootstrap" strategy="beforeInteractive">
              {buildGtagBootstrapScript()}
            </Script>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
          </>
        ) : null}
        <CookieConsentProvider>
          <JsonLd />
          <VercelInsights />
          <Suspense fallback={null}>
            <GoogleAnalytics />
          </Suspense>
          <Header />
          {children}
          <MobileContactFab />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
