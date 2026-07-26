import Section from "@/components/ui/Section";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroShowcase from "./HeroShowcase";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden pt-32 pb-24">

      <HeroBackground />

      <div className="grid items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">

        <HeroContent />

        <HeroShowcase />

      </div>

    </Section>
  );
}