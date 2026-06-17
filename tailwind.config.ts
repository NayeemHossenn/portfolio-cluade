import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep "server room" base — warm charcoal, not pure black.
        ink: {
          950: "#070a0f",
          900: "#0b0f16",
          800: "#11161f",
          700: "#1a212d",
          600: "#28313f",
        },
        // Phosphor green — a refined nod to the terminal, not neon.
        signal: {
          400: "#4ade9b",
          500: "#26c281",
          600: "#16a36a",
        },
        // Amber, used sparingly for "warning/attention" accents.
        amber: {
          400: "#f5b14c",
          500: "#e89a2c",
        },
        paper: "#eef2f0",
        muted: "#8a97a6",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        label: "0.22em",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(38,194,129,0.18), 0 18px 60px -20px rgba(38,194,129,0.25)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 30px 60px -30px rgba(0,0,0,0.8)",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(38,194,129,0.12), transparent 70%)",
      },
      backgroundSize: {
        "grid-cell": "44px 44px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.7" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.21,0.6,0.35,1) both",
        blink: "blink 1.1s steps(1) infinite",
        marquee: "marquee 32s linear infinite",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
