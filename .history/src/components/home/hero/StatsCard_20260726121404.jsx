export default function StatsCard({
  number,
  label,
}) {
  return (
    <div className="rounded-2xl bg-blue-600/10 border border-blue-500/20 p-5">
      <h3 className="text-2xl font-bold text-white">
        {number}
      </h3>

      <p className="mt-2 text-slate-400">
        {label}
      </p>
    </div>
  );
}