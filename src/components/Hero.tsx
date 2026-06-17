"use client";

import { motion } from "framer-motion";
import { profile, skillGroups } from "@/data/site";

// A flat list of skills for the scrolling marquee at the bottom of the hero.
const tickerItems = skillGroups.flatMap((g) => g.items);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.21, 0.6, 0.35, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-radial-fade pt-28 sm:pt-32"
    >
      {/* Faint engineering grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid bg-grid-cell [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />

      <div className="section-shell relative grid items-center gap-12 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-28">
        {/* ---- Left: the pitch ---- */}
        <div>
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-ink-800/60 px-3.5 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-signal-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-400" />
            </span>
            <span className="font-mono text-xs text-muted">
              {profile.status}
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-6xl"
          >
            {profile.headline}
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted"
          >
            I&apos;m{" "}
            <span className="text-paper">{profile.name}</span> — a{" "}
            <span className="text-signal-400">
              {profile.role.toLowerCase()}
            </span>{" "}
            working across Linux, Nginx, Docker, DNS, and the messy real-world
            problems in between.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-signal-500 px-6 py-3 text-sm font-medium text-ink-950 shadow-glow transition-colors hover:bg-signal-400"
            >
              Contact me
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-signal-500/50 hover:text-signal-400"
            >
              View experience
            </a>
          </motion.div>

          <motion.dl
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/[0.06] pt-6"
          >
            {[
              { k: "Based in", v: profile.location.split(",")[0] },
              { k: "Focus", v: "Infra & support" },
              { k: "Reply", v: "Within a day" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-mono text-[0.7rem] uppercase tracking-label text-muted">
                  {s.k}
                </dt>
                <dd className="mt-1 text-sm font-medium text-paper">{s.v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* ---- Right: the "monitor" with the photo ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.6, 0.35, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="panel overflow-hidden">
            {/* Terminal-style title bar */}
            <div className="flex items-center gap-2 border-b border-white/[0.06] bg-ink-900/80 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-xs text-muted">
                {profile.name.toLowerCase().replace(" ", "-")} — online
              </span>
            </div>

            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.photo}
                alt={`${profile.name}, ${profile.role}`}
                className="aspect-[4/5] w-full object-cover"
                onError={(e) => {
                  // Fall back to the styled placeholder if the headshot is missing.
                  const img = e.currentTarget;
                  if (!img.src.endsWith("/profile.svg")) {
                    img.src = "/profile.svg";
                  }
                }}
              />
              {/* Live status chip overlaid on the photo */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg border border-white/[0.08] bg-ink-950/80 px-3 py-2 backdrop-blur-sm">
                <span className="h-2 w-2 animate-blink rounded-full bg-signal-400" />
                <span className="font-mono text-xs text-paper">
                  uptime 99.9%
                </span>
              </div>
            </div>
          </div>

          {/* Floating accent card */}
          <div className="absolute -left-5 -top-5 hidden rounded-xl border border-white/[0.08] bg-ink-800 px-4 py-3 shadow-card sm:block">
            <p className="font-mono text-xs text-signal-400">$ ping you</p>
            <p className="mt-1 font-mono text-xs text-muted">
              reply time &lt; 24h
            </p>
          </div>
        </motion.div>
      </div>

      {/* ---- Skills ticker ---- */}
      <div className="relative border-y border-white/[0.06] bg-ink-900/40 py-4">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-8 whitespace-nowrap font-mono text-sm text-muted"
              >
                {item}
                <span className="text-signal-500/50">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
