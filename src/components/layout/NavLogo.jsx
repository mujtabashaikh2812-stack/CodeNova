import { motion } from "framer-motion";

export default function NavLogo() {
  return (
    <motion.a
      href="#home"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-3"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 font-bold text-white shadow-lg shadow-blue-500/20">
      C
      </div>

      <div>
        <h1 className="text-xl font-bold text-white">
          CodeNova
        </h1>

        <p className="text-xs text-slate-400">
          Digital Studio
        </p>
      </div>
    </motion.a>
  );
}