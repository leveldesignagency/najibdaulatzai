import type { Metadata } from "next";
import { Suspense } from "react";
import { SiteLoginForm } from "@/components/auth/SiteLoginForm";
import { privatePreviewRobots } from "@/lib/seo/robots";

export const metadata: Metadata = {
  title: "Private preview login",
  robots: privatePreviewRobots,
};

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-neutral-50" />}>
      <SiteLoginForm />
    </Suspense>
  );
}
