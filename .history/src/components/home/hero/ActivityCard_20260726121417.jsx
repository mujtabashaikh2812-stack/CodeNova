const activities = [
  "AI Automation Completed",
  "Website Delivered",
  "Client Meeting Scheduled",
  "UI Review Approved",
];

export default function ActivityCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h3 className="text-lg font-semibold text-white">
        Recent Activity
      </h3>

      <div className="mt-6 space-y-4">
        {activities.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <div className="h-2 w-2 rounded-full bg-emerald-400" />

            <p className="text-slate-300">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}