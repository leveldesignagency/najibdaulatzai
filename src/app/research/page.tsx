import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research and academic work by Mr Najib Daulatzai, colorectal and general surgeon.",
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <PlaceholderPage
      title="Research"
      description="Research content will appear here."
    />
  );
}
