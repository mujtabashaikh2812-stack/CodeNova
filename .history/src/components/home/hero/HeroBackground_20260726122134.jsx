export default function HeroBackground() {
  return (
    <>
      {/* Base background */}
      <div className="absolute inset-0 -z-30 bg-[#0E1013]" />

      {/* Top spotlight */}
      <div className="absolute left-1/2 top-[-220px] -translate-x-1/2 h-[700px] w-[900px] rounded-full bg-white/[0.04] blur-[140px] -z-20" />

      {/* Left ambient light */}
      <div className="absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-sky-500/8 blur-[120px] -z-20" />

      {/* Right ambient light */}
      <div className="absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-violet-500/8 blur-[120px] -z-20" />

      {/* Soft radial fade */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_55%)]" />
    </>
  );
}