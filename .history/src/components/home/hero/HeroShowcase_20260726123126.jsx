import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const tech = [
  "React",
  "Node.js",
  "AI",
  "Cloud",
];

export default function HeroShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="hidden lg:flex justify-center"
    >
      <div className="w-full max-w-[540px] overflow-hidden rounded-[30px] border border-white/10 bg-[#15181F] shadow-[0_40px_100px_rgba(0,0,0,0.45)]">

        {/* Browser Top */}

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

        <div className="p-8">

          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            Featured Project
          </p>

          <div className="mt-3 flex items-center justify-between">

            <h2 className="text-3xl font-bold text-white">
              InterviewIQ AI
            </h2>

            <ArrowUpRight
              className="text-white"
              size={22}
            />

          </div>

          <p className="mt-4 text-slate-400 leading-7">
            AI-powered interview preparation platform with
            real-time analysis and detailed performance feedback.
          </p>

          {/* Preview */}

          <div className="mt-8 rounded-2xl bg-[#0F1117] p-6 border border-white/5">

            <div className="flex justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  Interview Session
                </p>

                <h3 className="mt-2 text-white text-xl font-semibold">
                  Frontend Developer
                </h3>

              </div>

              <div className="text-right">

                <p className="text-sm text-slate-500">
                  Score
                </p>

                <h3 className="mt-2 text-emerald-400 text-2xl font-bold">
                  94%
                </h3>

              </div>

            </div>

            <div className="mt-8 h-3 rounded-full bg-white/10 overflow-hidden">

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "94%" }}
                transition={{ duration: 1.6 }}
                className="h-full rounded-full bg-emerald-400"
              />

            </div>

            <div className="mt-8 space-y-4">

              <div className="flex items-center justify-between">

                <span className="text-slate-400">
                  AI Feedback
                </span>

                <CheckCircle2
                  className="text-emerald-400"
                  size={18}
                />

              </div>

              <div className="flex items-center justify-between">

                <span className="text-slate-400">
                  Camera Analysis
                </span>

                <CheckCircle2
                  className="text-emerald-400"
                  size={18}
                />

              </div>

            </div>

          </div>

          <div className="mt-8 flex flex-wrap gap-3">

            {tech.map((item) => (

              <span
                key={item}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300"
              >
                {item}
              </span>

            ))}

          </div>

        </div>

      </div>

    </motion.div>
  );
}