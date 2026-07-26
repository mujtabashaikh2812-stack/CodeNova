import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceItem({
  id,
  title,
  description,
  icon: Icon,
}) {
  return (
    <motion.div
      whileHover={{ x: 8 }}
      transition={{ duration: 0.25 }}
      className="group border-b border-white/10 py-10"
    >
      <div className="grid items-start gap-6 md:grid-cols-[80px_70px_1fr_40px]">

        <span className="text-sm font-medium text-slate-500">
          {id}
        </span>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-blue-500/30">
          <Icon size={24} className="text-white" />
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white">
            {title}
          </h3>

          <p className="mt-3 max-w-2xl leading-8 text-slate-400">
            {description}
          </p>
        </div>

        <ArrowUpRight
          size={24}
          className="mt-2 text-slate-500 transition-all duration-300 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </motion.div>
  );
}