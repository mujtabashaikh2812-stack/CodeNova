import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

export default function App() {
  return (
    <Section className="min-h-screen flex items-center">
      <div className="max-w-3xl">
        <Badge>CodeNova Studio</Badge>

        <Heading size="hero" className="mt-6">
          Building Software That Moves Businesses Forward.
        </Heading>

        <Text variant="muted" className="mt-6">
          We build premium websites, SaaS products, AI solutions, and scalable
          digital experiences that help businesses grow.
        </Text>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button>Start a Project</Button>
          <Button variant="outline">View Portfolio</Button>
        </div>

        <Card className="mt-12">
          <Heading as="h3" size="h3">
            Nova UI Design System
          </Heading>

          <Text variant="muted" className="mt-3">
            A reusable foundation for every section of the CodeNova website.
          </Text>
        </Card>
      </div>
    </Section>
  );
}