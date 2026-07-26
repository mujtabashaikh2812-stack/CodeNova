export default function TechLogo({ name }) {
  return (
    <div
      className="
        rounded-full
        border
        border-white/10
        bg-white/[0.03]
        px-6
        py-3
        text-sm
        font-medium
        text-slate-300
        transition-all
        duration-300
        hover:border-white/20
        hover:bg-white/[0.06]
        hover:text-white
      "
    >
      {name}
    </div>
  );
}