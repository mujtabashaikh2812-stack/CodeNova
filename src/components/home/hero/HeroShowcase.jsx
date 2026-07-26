import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const techStack = [
  "React",
  "Node.js",
  "AI",
  "Cloud",
];

export default function HeroShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: 1,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: {
          duration: 0.8,
        },
        y: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="hidden lg:flex justify-center"
    >
      <div className="w-full max-w-[540px] overflow-hidden rounded-[32px] border border-white/10 bg-[#171A21] shadow-[0_40px_100px_rgba(0,0,0,0.45)]">

        {/* Browser Header */}

        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">

          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <span className="text-xs uppercase tracking-[0.25em] text-emerald-400">
            Live
          </span>

        </div>

        {/* Content */}

        <div className="p-8">

          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            Featured Project
          </p>

          <div className="mt-3 flex items-center justify-between">

            <h2 className="text-3xl font-bold text-white">
              InterviewIQ AI
            </h2>

            <ArrowUpRight
              size={22}
              className="text-white"
            />

          </div>

          <p className="mt-4 leading-7 text-slate-400">
            AI-powered interview preparation platform with
            real-time analysis, smart feedback, and performance
            tracking.
          </p>

          {/* Preview Card */}

          <div className="mt-8 rounded-2xl border border-white/5 bg-[#111318] p-6">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  Interview Session
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white">
                  Frontend Developer
                </h3>

              </div>

              <div className="text-right">

                <p className="text-sm text-slate-500">
                  Score
                </p>

                <h3 className="mt-2 text-2xl font-bold text-emerald-400">
                  94%
                </h3>

              </div>

            </div>

            <div className="mt-8 h-3 overflow-hidden rounded-full bg-white/10">

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "94%" }}
                transition={{ duration: 1.5 }}
                className="h-full rounded-full bg-emerald-400"
              />

            </div>

            <div className="mt-8 space-y-4">

              <div className="flex items-center justify-between">

                <span className="text-slate-400">
                  AI Feedback
                </span>

                <CheckCircle2
                  size={18}
                  className="text-emerald-400"
                />

              </div>

              <div className="flex items-center justify-between">

                <span className="text-slate-400">
                  Camera Analysis
                </span>

                <CheckCircle2
                  size={18}
                  className="text-emerald-400"
                />

              </div>

              <div className="flex items-center justify-between">

                <span className="text-slate-400">
                  Resume Analysis
                </span>

                <CheckCircle2
                  size={18}
                  className="text-emerald-400"
                />

              </div>

            </div>

          </div>

          {/* Tech Stack */}

          <div className="mt-8 flex flex-wrap gap-3">

            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

      </div>
    </motion.div>
  );
}