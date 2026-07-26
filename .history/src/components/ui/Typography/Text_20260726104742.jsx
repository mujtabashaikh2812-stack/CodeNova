import { cn } from "@/lib/cn";

const variants = {
  default: "text-slate-300",
  muted: "text-slate-400",
  light: "text-white",
};

export default function Text({
  variant = "default",
  className,
  children,
}) {
  return (
    <p className={cn("leading-8", variants[variant], className)}>
      {children}
    </p>
  );
}