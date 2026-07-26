export default function HeroBackground() {
  return (
    <>
      {/* Grid */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Blue Glow */}
      <div className="absolute left-0 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />

      {/* Cyan Glow */}
      <div className="absolute right-0 bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[150px]" />

      {/* Noise */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] [background-image:radial-gradient(circle,#fff_1px,transparent_1px)] [background-size:24px_24px]" />
    </>
  );
}