import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { heroContent } from "@/data/hero";

export default function CTAButtons() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-4">
      <Button size="lg" className="group">
        {heroContent.primaryButton}

        <ArrowRight
          size={18}
          className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
        />
      </Button>

      <Button variant="outline" size="lg">
        {heroContent.secondaryButton}
      </Button>
    </div>
  );
}