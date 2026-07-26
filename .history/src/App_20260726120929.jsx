import Navbar from "@/components/layout/Navbar";

export default function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-[300vh] bg-[#050816]" />
    </>
  );
}
import useLenis from "@/hooks/useLenis";

export default function App() {
  useLenis();

  return (
    <>
      <Navbar />
      <main className="min-h-[300vh] bg-[#050816]" />
    </>
  );
}
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/hero";

export default function App() {
  return (
    <>
      <Navbar />

      <Hero />
    </>
  );
}