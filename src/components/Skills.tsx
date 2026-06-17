import { skillGroups, softSkills } from "@/data/site";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

// A tiny line-icon per group, drawn inline to avoid an icon dependency.
const groupIcons: Record<string, React.ReactNode> = {
  "Systems & Servers": (
    <path d="M3 5h18M3 12h18M3 19h18M7 5v14" />
  ),
  "Networking & Delivery": (
    <path d="M12 3v6m0 6v6M5 12h14M7.5 7.5l9 9m0-9l-9 9" />
  ),
  "Platforms & Data": (
    <path d="M12 4c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3zM4 7v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7" />
  ),
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-20 border-y border-white/[0.06] bg-ink-900/30 py-24 sm:py-28"
    >
      <div className="section-shell">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="The stack I keep running"
          description="A toolkit built around one goal: sites that stay up, load fast, and deliver mail that reaches the inbox."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.08}>
              <div className="panel group h-full p-6 transition-colors duration-300 hover:border-signal-500/30">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-signal-500/25 bg-signal-500/10 text-signal-400">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      {groupIcons[group.title]}
                    </svg>
                  </span>
                  <h3 className="text-lg font-semibold text-paper">
                    {group.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm text-muted">{group.caption}</p>

                <ul className="mt-5 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-paper"
                    >
                      <span className="font-mono text-signal-500">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Soft skills as terminal-style tags */}
        <Reveal delay={0.1}>
          <div className="panel mt-5 flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
            <p className="eyebrow shrink-0">Also</p>
            <ul className="flex flex-wrap gap-2.5">
              {softSkills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-white/[0.08] bg-ink-800/60 px-3.5 py-1.5 font-mono text-xs text-muted transition-colors hover:border-signal-500/40 hover:text-paper"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
