import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          dark: "var(--bg-dark)",
          "dark-secondary": "var(--bg-dark-secondary)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
          "on-dark": "var(--text-on-dark)",
          "on-dark-secondary": "var(--text-on-dark-secondary)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          text: "var(--accent-text)", // New property
          hover: "var(--accent-hover)",
          subtle: "var(--accent-subtle)",
          glow: "var(--accent-glow)",
        },
        border: {
          light: "var(--border-light)",
          dark: "var(--border-dark)",
        },
        success: "var(--success)",
        error: "var(--error)",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        display: "var(--text-display)", // New property
      },
      maxWidth: {
        "content-full": "1440px", // Wider
        "content-cards": "1200px",
        "content-text": "720px",
        "content-form": "600px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
