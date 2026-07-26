import { motion } from "framer-motion";

import { heroContent } from "@/data/hero";
import { fadeUp, stagger } from "@/animations/heroAnimations";

import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

import CTAButtons from "./CTAButtons";

export default function HeroContent() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="max-w-2xl"
    >
      <motion.div variants={fadeUp}>
        <Badge>{heroContent.badge}</Badge>
      </motion.div>

      <motion.div variants={fadeUp}>
        <Heading
          size="hero"
          className="mt-8 max-w-xl leading-[1.05] tracking-tight text-white"
        >
          {heroContent.title}
        </Heading>
      </motion.div>

      <motion.div variants={fadeUp}>
        <Text
          size="lg"
          variant="muted"
          className="mt-8 max-w-lg leading-8"
        >
          {heroContent.description}
        </Text>
      </motion.div>

      <motion.div variants={fadeUp}>
        <CTAButtons />
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="mt-16 flex flex-wrap gap-10"
      >
        {heroContent.stats.map((item) => (
          <div key={item.label}>
            <h3 className="text-4xl font-bold text-white">
              {item.number}
            </h3>

            <p className="mt-2 text-base text-slate-400">
              {item.label}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}