# Nayeem Hossen — Portfolio

A modern, responsive personal portfolio for **Nayeem Hossen**, Technical Support Engineer.
Built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**, with
tasteful motion via **Framer Motion**.

The design leans into an "infrastructure / terminal" aesthetic — a numbered section
system, monospace system-tags, a live status indicator, and a phosphor-green accent —
to feel intentional and matched to the work, not like a generic template.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Fonts, metadata, root shell
│   ├── page.tsx          # Section composition
│   └── globals.css       # Tailwind layers + design primitives
├── components/
│   ├── Navbar.tsx        # Sticky nav + mobile overlay menu
│   ├── Hero.tsx          # Intro, photo "monitor", skills ticker
│   ├── About.tsx         # Bio + debugging approach
│   ├── Skills.tsx        # Grouped technical + soft skills
│   ├── Experience.tsx    # Timeline of roles
│   ├── Education.tsx
│   ├── Contact.tsx       # Validated contact form + direct links
│   ├── Footer.tsx
│   └── ui/
│       ├── Reveal.tsx        # Reduced-motion-friendly scroll reveal
│       └── SectionHeading.tsx
└── data/
    └── site.ts           # ← All content lives here. Edit this, not the markup.
```

## Customizing

- **Content** (bio, skills, jobs, links, email): edit [`src/data/site.ts`](src/data/site.ts).
- **Profile photo**: a styled placeholder (`public/profile.svg`) ships by default.
  Drop your headshot in `public/` and update `profile.photo` in `site.ts`
  (e.g. `photo: "/profile.jpg"`).
- **Social links**: update the `socials` object in `site.ts`.
- **Colors / fonts / motion**: see [`tailwind.config.ts`](tailwind.config.ts).

## Contact form

The form composes an email via the visitor's mail client (`mailto:`) — no backend
required. To use a hosted form service or an API route instead, swap the
`handleSubmit` body in [`src/components/Contact.tsx`](src/components/Contact.tsx)
for a `fetch()` call.
```
