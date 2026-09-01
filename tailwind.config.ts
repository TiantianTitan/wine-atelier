import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--atelier-ink-rgb) / <alpha-value>)",
        paper: "rgb(var(--atelier-paper-rgb) / <alpha-value>)",
        wine: "rgb(var(--atelier-wine-rgb) / <alpha-value>)",
        brass: "rgb(var(--atelier-brass-rgb) / <alpha-value>)"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
