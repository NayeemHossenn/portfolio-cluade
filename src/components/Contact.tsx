"use client";

import { useState } from "react";
import { profile, socials } from "@/data/site";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

type Status = "idle" | "error" | "sent";

const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: socials.email,
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  },
  {
    label: "GitHub",
    value: socials.github.replace("https://", ""),
    href: socials.github,
    icon: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3-.3 6-1.5 6-6.5a5 5 0 0 0-1.4-3.5 4.6 4.6 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a12 12 0 0 0-6 0C6.6 1.7 5.5 2 5.5 2a4.6 4.6 0 0 0-.1 3.5A5 5 0 0 0 4 9c0 5 3 6.2 6 6.5a3.4 3.4 0 0 0-1 2.6V22" />
    ),
  },
  {
    label: "LinkedIn",
    value: socials.linkedin.replace("https://www.", ""),
    href: socials.linkedin,
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    // No backend required: compose an email in the visitor's mail client.
    // Swap this for a fetch() to an API route or a form service if you prefer.
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  };

  return (
    <section id="contact" className="section-shell scroll-mt-20 py-24 sm:py-28">
      <SectionHeading
        index="05"
        eyebrow="Contact"
        title="Have something that needs to stay online?"
        description="Whether it's a support role, an infrastructure question, or a site that's misbehaving — send a message and I'll get back to you, usually within a day."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-8">
        {/* Direct links */}
        <div className="space-y-4">
          {contactLinks.map((link, i) => (
            <Reveal key={link.label} delay={i * 0.06}>
              <a
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="panel group flex items-center gap-4 p-5 transition-colors duration-300 hover:border-signal-500/30"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/[0.08] bg-ink-900/60 text-signal-400 transition-colors group-hover:bg-signal-500/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    {link.icon}
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[0.7rem] uppercase tracking-label text-muted">
                    {link.label}
                  </p>
                  <p className="truncate text-sm font-medium text-paper">
                    {link.value}
                  </p>
                </div>
                <span className="ml-auto text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-signal-400">
                  ↗
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Form */}
        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} noValidate className="panel p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Jane Doe" />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="jane@company.com"
              />
            </div>
            <div className="mt-5">
              <FieldShell label="Message" name="message">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="What's going on, and how can I help?"
                  className="w-full resize-none rounded-lg border border-white/[0.08] bg-ink-900/60 px-4 py-3 text-sm text-paper placeholder:text-muted/60 outline-none transition-colors focus:border-signal-500/60 focus:ring-2 focus:ring-signal-500/20"
                  onChange={() => status !== "idle" && setStatus("idle")}
                />
              </FieldShell>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-signal-500 px-6 py-3 text-sm font-medium text-ink-950 transition-colors hover:bg-signal-400"
              >
                Send message
                <span aria-hidden>→</span>
              </button>

              {status === "error" && (
                <p role="alert" className="text-sm text-amber-400">
                  Please fill in every field.
                </p>
              )}
              {status === "sent" && (
                <p role="status" className="text-sm text-signal-400">
                  Opening your mail app — thanks for reaching out!
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- Small form helpers ---- */

function FieldShell({
  label,
  name,
  children,
}: {
  label: string;
  name: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={name} className="block">
      <span className="mb-2 block font-mono text-[0.7rem] uppercase tracking-label text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <FieldShell label={label} name={name}>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/[0.08] bg-ink-900/60 px-4 py-3 text-sm text-paper placeholder:text-muted/60 outline-none transition-colors focus:border-signal-500/60 focus:ring-2 focus:ring-signal-500/20"
      />
    </FieldShell>
  );
}
