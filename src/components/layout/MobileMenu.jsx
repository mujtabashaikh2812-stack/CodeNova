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