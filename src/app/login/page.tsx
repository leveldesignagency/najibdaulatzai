import type { Metadata } from "next";
import { Suspense } from "react";
import { SiteLoginForm } from "@/components/auth/SiteLoginForm";

export const metadata: Metadata = {
  title: "Private preview login",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-neutral-50" />}>
      <SiteLoginForm />
    </Suspense>
  );
}
