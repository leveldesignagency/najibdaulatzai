import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import { CookieConsentProvider } from "@/components/cookies/CookieConsentProvider";
import { Header } from "@/components/layout/Header";
import { MobileContactFab } from "@/components/layout/MobileContactFab";
import { JsonLd } from "@/components/seo/JsonLd";
import { VercelInsights } from "@/components/seo/VercelInsights";
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
        <CookieConsentProvider>
          <JsonLd />
          <VercelInsights />
          <Header />
          {children}
          <MobileContactFab />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
