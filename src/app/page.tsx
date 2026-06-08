import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { ProceduresSection } from "@/components/sections/ProceduresSection";
import { ValuesSection } from "@/components/sections/ValuesSection";

export default function HomePage() {
  return (
    <>
      <main className="overflow-x-clip">
        <HeroSection />
        <AboutSection />
        <ProceduresSection />
        <ValuesSection />
        <LocationsSection />
      </main>
      <Footer />
    </>
  );
}
