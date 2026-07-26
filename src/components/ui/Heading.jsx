import { cn } from "@/lib/cn";

const variants = {
  hero: "text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95]",
  h1: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
  h2: "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
  h3: "text-2xl md:text-3xl font-semibold",
  h4: "text-xl md:text-2xl font-semibold",
};

export default function Heading({
  as: Tag = "h2",
  size = "h2",
  className,
  children,
}) {
  return (
    <Tag className={cn(variants[size], className)}>
      {children}
    </Tag>
  );
}