"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between">
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-mono text-sm font-medium text-paper"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md border border-signal-500/40 bg-signal-500/10 text-signal-400 transition-colors group-hover:bg-signal-500/20">
            ~
          </span>
          <span className="tracking-tight">
            {profile.name.split(" ")[0].toLowerCase()}
            <span className="text-signal-400">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="link-underline font-mono text-sm text-muted transition-colors hover:text-paper"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-full bg-signal-500 px-4 py-2 text-sm font-medium text-ink-950 transition-colors hover:bg-signal-400"
            >
              Get in touch
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-paper transition-transform duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-paper transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-paper transition-transform duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-ink-950/97 px-8 backdrop-blur-md transition-all duration-300 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-6">
          {nav.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 text-3xl font-semibold text-paper"
              >
                <span className="font-mono text-sm text-signal-400">
                  0{i + 1}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
