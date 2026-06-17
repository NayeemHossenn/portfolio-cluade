import { experience } from "@/data/site";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-shell scroll-mt-20 py-24 sm:py-28"
    >
      <SectionHeading
        index="03"
        eyebrow="Experience"
        title="Where I've been on call"
      />

      <div className="relative">
        {/* The vertical timeline rail */}
        <span
          aria-hidden
          className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-signal-500/40 via-white/[0.08] to-transparent md:left-[9px]"
        />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.06} as="article">
              <div className="relative pl-10 md:pl-14">
                {/* Node on the rail */}
                <span
                  className={`absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full border md:h-5 md:w-5 ${
                    job.current
                      ? "border-signal-400 bg-signal-500/20"
                      : "border-white/15 bg-ink-800"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      job.current ? "animate-blink bg-signal-400" : "bg-muted"
                    }`}
                  />
                </span>

                <div className="panel p-6 transition-colors duration-300 hover:border-white/[0.12] sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                    <div>
                      <h3 className="text-lg font-semibold text-paper sm:text-xl">
                        {job.role}
                      </h3>
                      <p className="mt-0.5 text-signal-400">{job.company}</p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-3 py-1 font-mono text-xs ${
                        job.current
                          ? "bg-signal-500/15 text-signal-400"
                          : "bg-white/[0.04] text-muted"
                      }`}
                    >
                      {job.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-muted">{job.summary}</p>

                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-paper/90"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
