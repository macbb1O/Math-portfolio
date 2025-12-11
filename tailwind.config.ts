import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: ".5625rem",
        md: ".375rem",
        sm: ".1875rem",
      },
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
          border: "hsl(var(--card-border) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
          border: "hsl(var(--popover-border) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
          border: "var(--primary-border)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
          border: "var(--secondary-border)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
          border: "var(--muted-border)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
          border: "var(--accent-border)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
          border: "var(--destructive-border)",
        },
        ring: "hsl(var(--ring) / <alpha-value>)",
        chart: {
          "1": "hsl(var(--chart-1) / <alpha-value>)",
          "2": "hsl(var(--chart-2) / <alpha-value>)",
          "3": "hsl(var(--chart-3) / <alpha-value>)",
          "4": "hsl(var(--chart-4) / <alpha-value>)",
          "5": "hsl(var(--chart-5) / <alpha-value>)",
        },
        sidebar: {
          ring: "hsl(var(--sidebar-ring) / <alpha-value>)",
          DEFAULT: "hsl(var(--sidebar) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-foreground) / <alpha-value>)",
          border: "hsl(var(--sidebar-border) / <alpha-value>)",
        },
        "sidebar-primary": {
          DEFAULT: "hsl(var(--sidebar-primary) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-primary-foreground) / <alpha-value>)",
          border: "var(--sidebar-primary-border)",
        },
        "sidebar-accent": {
          DEFAULT: "hsl(var(--sidebar-accent) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-accent-foreground) / <alpha-value>)",
          border: "var(--sidebar-accent-border)"
        },
        status: {
          online: "rgb(34 197 94)",
          away: "rgb(245 158 11)",
          busy: "rgb(239 68 68)",
          offline: "rgb(156 163 175)",
        },
        neon: {
          pink: "hsl(var(--neon-pink) / <alpha-value>)",
          blue: "hsl(var(--neon-blue) / <alpha-value>)",
          purple: "hsl(var(--neon-purple) / <alpha-value>)",
          cyan: "hsl(var(--neon-cyan) / <alpha-value>)",
          gold: "hsl(var(--neon-gold) / <alpha-value>)",
          green: "hsl(var(--neon-green) / <alpha-value>)",
        },
        game: {
          bg: "hsl(var(--game-bg) / <alpha-value>)",
          surface: "hsl(var(--game-surface) / <alpha-value>)",
          node: "hsl(var(--game-node) / <alpha-value>)",
          correct: "hsl(var(--game-correct) / <alpha-value>)",
          wrong: "hsl(var(--game-wrong) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["Poppins", "var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
        display: ["Quicksand", "Poppins", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "bounce-in": {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "shake": {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-4px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(4px)" },
        },
        "sparkle": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.2)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 5px currentColor, 0 0 10px currentColor" },
          "50%": { boxShadow: "0 0 20px currentColor, 0 0 30px currentColor" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "confetti-fall": {
          "0%": { transform: "translateY(-100vh) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(100vh) rotate(720deg)", opacity: "0" },
        },
        "pop-in": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "80%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "flame-flicker": {
          "0%, 100%": { transform: "scale(1) rotate(-2deg)" },
          "25%": { transform: "scale(1.1) rotate(2deg)" },
          "50%": { transform: "scale(0.95) rotate(-1deg)" },
          "75%": { transform: "scale(1.05) rotate(1deg)" },
        },
        "xp-fill": {
          "0%": { width: "0%" },
          "100%": { width: "var(--xp-width)" },
        },
        "node-unlock": {
          "0%": { transform: "scale(0.5)", opacity: "0", filter: "grayscale(1)" },
          "50%": { transform: "scale(1.2)", filter: "grayscale(0)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "streak-milestone": {
          "0%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.3)" },
          "50%": { transform: "scale(1.1)" },
          "75%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "particle-float": {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-100vh) translateX(50px)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bounce-in": "bounce-in 0.5s ease-out",
        "shake": "shake 0.5s ease-in-out",
        "sparkle": "sparkle 1s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "confetti-fall": "confetti-fall 3s linear forwards",
        "pop-in": "pop-in 0.4s ease-out",
        "flame-flicker": "flame-flicker 0.5s ease-in-out infinite",
        "xp-fill": "xp-fill 0.8s ease-out forwards",
        "node-unlock": "node-unlock 0.6s ease-out",
        "streak-milestone": "streak-milestone 0.6s ease-out",
        "slide-up": "slide-up 0.4s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "particle-float": "particle-float 15s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
