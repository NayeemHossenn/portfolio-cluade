import { about } from "@/data/site";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function About() {
  return (
    <section id="about" className="section-shell scroll-mt-20 py-24 sm:py-28">
      <SectionHeading
        index="01"
        eyebrow="About me"
        title="Calm hands on the parts that break at 3 a.m."
      />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        {/* Bio */}
        <div className="space-y-6">
          <Reveal>
            <p className="text-balance text-xl leading-relaxed text-paper sm:text-2xl">
              {about.lead}
            </p>
          </Reveal>
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.05 * (i + 1)}>
              <p className="text-pretty text-base leading-relaxed text-muted sm:text-lg">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Stat panel + "how I work" */}
        <div className="space-y-5">
          <Reveal>
            <div className="panel grid grid-cols-3 divide-x divide-white/[0.06] p-6">
              {about.highlights.map((h) => (
                <div key={h.label} className="px-3 text-center first:pl-0 last:pr-0">
                  <div className="text-2xl font-semibold text-signal-400 sm:text-3xl">
                    {h.value}
                  </div>
                  <div className="mt-1.5 text-xs leading-snug text-muted">
                    {h.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="panel p-6">
              <p className="eyebrow mb-4">How I debug</p>
              <ol className="space-y-3">
                {[
                  "Reproduce the problem",
                  "Isolate the failing layer",
                  "Read the logs, not the guesses",
                  "Fix the root cause",
                  "Verify before I close it",
                ].map((step, i) => (
                  <li
                    key={step}
                    className="flex items-center gap-3 text-sm text-paper"
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md border border-signal-500/30 bg-signal-500/10 font-mono text-xs text-signal-400">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
