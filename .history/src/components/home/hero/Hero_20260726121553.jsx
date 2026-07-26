import Section from "@/components/ui/Section";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <Section
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      <HeroBackground />

      <div className="grid items-center gap-20 lg:grid-cols-2">

        <HeroContent />

        {/* Dashboard coming in Phase 2 */}

      <div className="hidden lg:block">
       <HeroDashboard />
      </div>

      </div>

    </Section>
  );
}