import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { heroContent } from "@/data/hero";

export default function CTAButtons() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-4">
      <Button
        size="lg"
        className="group rounded-full px-8 py-6"
      >
        {heroContent.primaryButton}

        <ArrowRight
          size={18}
          className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
        />
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="rounded-full px-8 py-6"
      >
        {heroContent.secondaryButton}
      </Button>
    </div>
  );
}