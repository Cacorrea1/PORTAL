import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        umet: {
          DEFAULT: "#00B5B5",
          50: "#E6FAFA",
          100: "#CCF5F5",
          200: "#99EBEB",
          300: "#66E0E0",
          400: "#33D6D6",
          500: "#00B5B5",
          600: "#009090",
          700: "#006B6B",
          800: "#004545",
          900: "#002020",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.06)",
        "card-hover": "0 4px 6px rgba(15,23,42,0.04), 0 20px 40px rgba(15,23,42,0.08)",
        sidebar: "4px 0 24px rgba(15,23,42,0.04)",
        glow: "0 0 80px rgba(0, 181, 181, 0.12)",
        inner: "inset 0 1px 0 rgba(255,255,255,0.8)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "slide-in-left": "slideInLeft 0.3s ease-out",
        shimmer: "shimmer 2s infinite linear",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-12px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
