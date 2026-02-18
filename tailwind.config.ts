import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-primary)",
        foreground: "var(--text-primary)",
        accent: {
          DEFAULT: "var(--accent-primary)",
          secondary: "var(--accent-secondary)",
          muted: "var(--accent-muted)",
        },
        muted: {
          DEFAULT: "var(--text-secondary)",
          foreground: "var(--text-tertiary)",
        },
        border: "var(--border-default)",
        "border-subtle": "var(--border-subtle)",
        card: {
          DEFAULT: "var(--bg-secondary)",
          foreground: "var(--text-primary)",
        },
        "surface-tertiary": "var(--bg-tertiary)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        "glow-cyan": "0 0 60px rgba(34, 211, 238, 0.15)",
        "glow-violet": "0 0 60px rgba(139, 92, 246, 0.1)",
        "glow-cyan-sm": "0 0 40px rgba(34, 211, 238, 0.1)",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(to bottom, #09090b 0%, #0c1222 50%, #09090b 100%)",
        "gradient-accent": "linear-gradient(135deg, #22d3ee 0%, #8b5cf6 100%)",
        "gradient-text": "linear-gradient(90deg, #22d3ee 0%, #a78bfa 100%)",
        "gradient-divider": "linear-gradient(to right, transparent, #3f3f46, transparent)",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "pulse-slow": "pulse-slow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
