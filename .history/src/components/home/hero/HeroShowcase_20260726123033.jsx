export default function HeroShowcase() {
  return (
    <div className="relative hidden lg:flex justify-center">

      <div className="w-full max-w-[520px] rounded-[32px] border border-white/10 bg-[#171A21] p-8 shadow-2xl">

        <div className="mb-8">

          <span className="text-sm uppercase tracking-[0.25em] text-slate-500">
            Featured Project
          </span>

          <h3 className="mt-3 text-3xl font-bold text-white">
            InterviewIQ AI
          </h3>

          <p className="mt-3 text-slate-400">
            AI-powered interview preparation platform built with a modern,
            scalable architecture.
          </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-[#111318] p-6">

          <div className="flex flex-wrap gap-3">

            {["React", "Node.js", "AI", "Cloud"].map((tech) => (

              <span
                key={tech}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300"
              >
                {tech}
              </span>

            ))}

          </div>

          <div className="mt-8 h-56 rounded-2xl border border-dashed border-slate-700 flex items-center justify-center">

            <span className="text-slate-500">
              Project Preview
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}