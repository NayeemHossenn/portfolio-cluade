/**
 * Single source of truth for everything on the site.
 * Edit the values here — the components read from this file — so content
 * changes never require touching markup.
 */

export const profile = {
  name: "Nayeem Hossen",
  role: "Technical Support Engineer",
  // The one-liner that leads with the work, not the name.
  headline: "I keep infrastructure online and engineers unblocked.",
  location: "Dhaka, Bangladesh",
  email: "nayeemhossen245@gmail.com",
  // Your headshot (lives in /public).
  photo: "/nayeem.png",
  status: "Available for support & infrastructure work",
  resumeUrl: "/Nayeem-Hossen-Resume.pdf",
};

export const socials = {
  github: "https://github.com/NayeemHossenn",
  linkedin: "https://www.linkedin.com/in/nayeem-hossen/",
  email: `mailto:${profile.email}`,
};

export const about = {
  lead: "Linux administrator and support engineer focused on the unglamorous work that keeps sites fast and reachable: web servers, DNS, certificates, and mail that actually lands in the inbox.",
  paragraphs: [
    "I work where hosting infrastructure meets real people — diagnosing why a site is down, why an SSL handshake fails, or why email is going to spam, then fixing the root cause instead of the symptom. Most of my day is spent in the terminal across Nginx, Docker, and VPS environments, but the part I care about most is turning a stressed-out customer ticket into a calm, clear resolution.",
    "My approach is methodical: reproduce, isolate, read the logs, and verify the fix before I call it done. I like problems that look like dead ends — DNS propagation issues, deliverability black holes, broken container networking — because they reward patience and a good mental model of how the whole stack fits together.",
  ],
  highlights: [
    { value: "2+", label: "Years in technical support" },
    { value: "24/7", label: "Uptime mindset" },
    { value: "100s", label: "Tickets resolved" },
  ],
};

export type SkillGroup = {
  title: string;
  caption: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Systems & Servers",
    caption: "The foundation everything runs on.",
    items: ["Linux Administration", "Nginx", "Docker", "VPS & Cloud Infrastructure"],
  },
  {
    title: "Networking & Delivery",
    caption: "Getting traffic — and mail — to the right place.",
    items: ["DNS Management", "SSL/TLS Management", "Email Hosting & Deliverability"],
  },
  {
    title: "Platforms & Data",
    caption: "Where the applications and their data live.",
    items: ["WordPress Management", "MySQL / MariaDB"],
  },
];

export const softSkills: string[] = [
  "Root-cause analysis",
  "Clear written communication",
  "Calm under pressure",
  "Customer empathy",
  "Documentation",
  "Methodical debugging",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  summary: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "xCloud Hosting",
    role: "Support Engineer",
    period: "Jan 2026 — Present",
    current: true,
    summary:
      "Front-line and escalation support for a managed cloud hosting platform.",
    points: [
      "Diagnose and resolve infrastructure issues across Linux servers, Nginx, and containerized services.",
      "Own the full lifecycle of customer tickets — from triage to verified resolution.",
      "Handle DNS, SSL/TLS, and email deliverability problems that span the whole hosting stack.",
    ],
  },
  {
    company: "Codexpert, Inc.",
    role: "WordPress Technical Support Engineer",
    period: "2024 — 2025 · 1 year",
    summary:
      "Technical support for WordPress products used by customers worldwide.",
    points: [
      "Resolved WordPress configuration, performance, and compatibility issues for a global user base.",
      "Translated vague bug reports into reproducible cases and clear engineering hand-offs.",
      "Wrote support documentation that reduced repeat tickets for common problems.",
    ],
  },
];

export type Education = {
  school: string;
  degree: string;
  period: string;
  detail: string;
};

export const education: Education[] = [
  {
    school: "North South University",
    degree: "B.Sc. in Computer Science & Engineering",
    period: "Graduated 2022",
    detail:
      "Built the fundamentals — operating systems, networking, and databases — that underpin the infrastructure work I do today.",
  },
];

export const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
