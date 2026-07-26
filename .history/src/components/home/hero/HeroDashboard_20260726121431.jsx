import DashboardCard from "./DashboardCard";
import StatsCard from "./StatsCard";
import ActivityCard from "./ActivityCard";

export default function HeroDashboard() {
  return (
    <div className="relative">

      <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl shadow-2xl">

        <div className="grid grid-cols-2 gap-5">

          <DashboardCard
            title="Revenue"
            value="$142K"
            change="+18.5%"
          />

          <DashboardCard
            title="Projects"
            value="42"
            change="+12%"
          />

          <StatsCard
            number="97%"
            label="Client Satisfaction"
          />

          <StatsCard
            number="12"
            label="Active Team Members"
          />

        </div>

        <div className="mt-6">

          <ActivityCard />

        </div>

      </div>

    </div>
  );
}