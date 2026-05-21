import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0d0d0d",
        "bg-card": "#111111",
        "bg-surface": "#161616",
        border: "#222222",
        "text-dim": "#555555",
        "text-muted": "#888888",
        "text-base": "#cccccc",
        "text-hi": "#f0f0f0",
        accent: "#4ade80",
        "accent-2": "#a78bfa",
        "accent-3": "#fb923c",
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
