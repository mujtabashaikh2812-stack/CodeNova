export default function DashboardCard({
  title,
  value,
  change,
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h3 className="mt-3 text-3xl font-bold text-white">
        {value}
      </h3>

      <p className="mt-2 text-sm font-medium text-emerald-400">
        {change}
      </p>
    </div>
  );
}