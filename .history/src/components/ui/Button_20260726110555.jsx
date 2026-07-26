import { cn } from "@/lib/cn";

export default function Card({
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30",
        className
      )}
    >
      {children}
    </div>
  );
}