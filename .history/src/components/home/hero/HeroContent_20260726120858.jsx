import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

import { heroContent } from "@/data/hero";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">

      <Badge>
        {heroContent.badge}
      </Badge>

      <Heading
        size="hero"
        className="mt-8 text-white"
      >
        {heroContent.title}
      </Heading>

      <Text
        size="lg"
        variant="muted"
        className="mt-8 max-w-xl"
      >
        {heroContent.description}
      </Text>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button size="lg">
          {heroContent.primaryButton}
        </Button>

        <Button
          variant="outline"
          size="lg"
        >
          {heroContent.secondaryButton}
        </Button>
      </div>

      <div className="mt-14 flex flex-wrap gap-10">

        {heroContent.stats.map((stat) => (
          <div key={stat.label}>
            <h3 className="text-3xl font-bold text-white">
              {stat.number}
            </h3>

            <p className="mt-2 text-slate-400">
              {stat.label}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}