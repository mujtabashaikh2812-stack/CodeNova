import Section from "./components/ui/Section";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Badge from "./components/ui/Badge";

function App() {
  return (
    <Section className="min-h-screen flex items-center">
      <div className="max-w-3xl">
        <Badge>CodeNova Studio</Badge>

        <h1 className="mt-6 text-6xl font-bold leading-tight text-white">
          Building Software That Moves Businesses Forward.
        </h1>

        <p className="mt-6 text-lg text-slate-400">
          Premium websites, SaaS platforms, AI products and scalable systems
          built for startups and growing businesses.
        </p>

        <div className="mt-10 flex gap-4">
          <Button>Start a Project</Button>

          <Button variant="outline">
            View Portfolio
          </Button>
        </div>

        <Card className="mt-12">
          <h3 className="text-xl font-semibold">
            Production Design System
          </h3>

          <p className="mt-3 text-slate-400">
            Reusable components, responsive layouts and a scalable architecture
            for the entire CodeNova website.
          </p>
        </Card>
      </div>
    </Section>
  );
}

export default App;