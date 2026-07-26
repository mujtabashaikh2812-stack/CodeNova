import { cn } from "@/lib/cn";

const sizes = {
  hero: "text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight",
  h1: "text-4xl md:text-6xl font-bold",
  h2: "text-3xl md:text-5xl font-bold",
  h3: "text-2xl font-semibold",
};

export default function Heading({
  as: Tag = "h2",
  size = "h2",
  className,
  children,
}) {
  return (
    <Tag className={cn(sizes[size], className)}>
      {children}
    </Tag>
  );
}