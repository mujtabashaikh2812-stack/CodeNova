import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20",

  secondary:
    "bg-white text-black hover:bg-slate-100",

  outline:
    "border border-white/15 text-white hover:border-blue-500 hover:bg-white/5",

  ghost:
    "text-white hover:bg-white/5",
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6",
  lg: "h-14 px-8 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 active:scale-95 hover:-translate-y-0.5",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}