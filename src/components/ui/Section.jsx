import Container from "./Container";

export default function Section({
  children,
  className = "",
  containerClass = "",
}) {
  return (
    <section className={`py-24 lg:py-32 ${className}`}>
      <Container className={containerClass}>
        {children}
      </Container>
    </section>
  );
}