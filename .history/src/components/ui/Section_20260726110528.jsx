import Container from "./Container";
import { cn } from "@/lib/cn";

export default function Section({
  children,
  className,
  containerClass,
}) {
  return (
    <section
      className={cn(
        "relative py-20 md:py-28 lg:py-32",
        className
      )}
    >
      <Container className={containerClass}>
        {children}
      </Container>
    </section>
  );
}