import { education } from "@/data/site";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function Education() {
  return (
    <section
      id="education"
      className="relative scroll-mt-20 border-t border-white/[0.06] bg-ink-900/30 py-24 sm:py-28"
    >
      <div className="section-shell">
        <SectionHeading
          index="04"
          eyebrow="Education"
          title="Where the fundamentals come from"
        />

        <div className="grid gap-5">
          {education.map((edu, i) => (
            <Reveal key={edu.school} delay={i * 0.06}>
              <div className="panel flex flex-col gap-5 p-7 sm:flex-row sm:items-center sm:gap-7">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-signal-500/25 bg-signal-500/10 text-signal-400">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-7 w-7"
                  >
                    <path d="M22 10L12 5 2 10l10 5 10-5z" />
                    <path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
                  </svg>
                </span>

                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold text-paper sm:text-xl">
                      {edu.school}
                    </h3>
                    <span className="font-mono text-xs text-muted">
                      {edu.period}
                    </span>
                  </div>
                  <p className="mt-1 text-signal-400">{edu.degree}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {edu.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
