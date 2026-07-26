import { cn } from "@/lib/cn";

const variants = {
  default: "text-slate-300",
  muted: "text-slate-400",
  light: "text-white",
};

const sizes = {
  sm: "text-sm",
  md: "text-base md:text-lg",
  lg: "text-lg md:text-xl",
};

export default function Text({
  variant = "default",
  size = "md",
  className,
  children,
}) {
  return (
    <p
      className={cn(
        "leading-8",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </p>
  );
}