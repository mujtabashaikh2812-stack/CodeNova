import { heroContent } from "@/data/hero";
import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

import CTAButtons from "./CTAButtons";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">

      <Badge>
        {heroContent.badge}
      </Badge>

      <Heading
        size="hero"
        className="mt-8 max-w-xl leading-[1.05] tracking-tight text-white"
      >
        {heroContent.title}
      </Heading>

      <Text
        size="lg"
        variant="muted"
        className="mt-8 max-w-lg leading-8"
      >
        {heroContent.description}
      </Text>

      <CTAButtons />

      <div className="mt-16 flex flex-wrap gap-10">

        {heroContent.stats.map((item) => (

          <div key={item.label}>

            <h3 className="text-3xl font-bold text-white">

              {item.number}

            </h3>

            <p className="mt-2 text-sm text-slate-400">

              {item.label}

            </p>

          </div>

        ))}

      </div>

    </div>
  );
}