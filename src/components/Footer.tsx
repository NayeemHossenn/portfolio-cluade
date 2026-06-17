import { profile, socials, nav } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-ink-950">
      <div className="section-shell flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a
            href="#top"
            className="flex items-center gap-2.5 font-mono text-sm font-medium text-paper"
          >
            <span className="grid h-7 w-7 place-items-center rounded-md border border-signal-500/40 bg-signal-500/10 text-signal-400">
              ~
            </span>
            {profile.name}
          </a>
          <p className="mt-3 max-w-xs text-sm text-muted">
            {profile.role} — keeping infrastructure online and engineers
            unblocked.
          </p>
        </div>

        <div className="flex flex-col gap-5 sm:items-end">
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="font-mono text-xs text-muted transition-colors hover:text-paper"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-signal-400"
              aria-label="GitHub"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3-.3 6-1.5 6-6.5a5 5 0 0 0-1.4-3.5 4.6 4.6 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a12 12 0 0 0-6 0C6.6 1.7 5.5 2 5.5 2a4.6 4.6 0 0 0-.1 3.5A5 5 0 0 0 4 9c0 5 3 6.2 6 6.5a3.4 3.4 0 0 0-1 2.6V22" />
              </svg>
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-signal-400"
              aria-label="LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href={socials.email}
              className="text-muted transition-colors hover:text-signal-400"
              aria-label="Email"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="section-shell border-t border-white/[0.04] py-5">
        <p className="text-center font-mono text-xs text-muted/70">
          © {profile.name.split(" ")[0]} · Built with Next.js & Tailwind CSS ·
          status:{" "}
          <span className="text-signal-400">all systems operational</span>
        </p>
      </div>
    </footer>
  );
}
