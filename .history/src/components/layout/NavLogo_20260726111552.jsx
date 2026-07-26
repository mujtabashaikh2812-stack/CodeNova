import { motion } from "framer-motion";

export default function NavLogo() {
  return (
    <motion.a
      href="#home"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-3"
    >
      import { Menu } from "lucide-react";

export default function MobileMenu() {
  return (
    <button
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white lg:hidden"
      aria-label="Open navigation menu"
    >
      <Menu size={22} />
    </button>
  );
}

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