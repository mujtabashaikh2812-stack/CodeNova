import { technologies } from "@/data/trusted";
import TechLogo from "./TechLogo";

export default function Trusted() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-10 text-center text-sm uppercase tracking-[0.35em] text-slate-500">
          Built With Modern Technologies
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          {technologies.map((tech) => (
            <TechLogo
              key={tech}
              name={tech}
            />
          ))}

        </div>

      </div>

    </section>
  );
}