import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "primary-blue": "var(--primary-blue)",
        "primary-pink": "var(--primary-pink)",
        "primary-purple": "var(--primary-purple)",
        "primary-black": "var(--primary-black)",
        "primary-light-blue": "var(--primary-light-blue)",

        "secondary-blue": "var(--secondary-blue)",
        "secondary-pink": "var(--secondary-pink)",
        "secondary-purple": "var(--secondary-purple)",

        "neutral-800": "var(--neutral-800)",
        "neutral-700": "var(--neutral-700)",
        "neutral-600": "var(--neutral-600)",
        "neutral-500": "var(--neutral-500)",
        "neutral-400": "var(--neutral-400)",
        "neutral-300": "var(--neutral-300)",
        "neutral-200": "var(--neutral-200)",

        "green-tag": "var(--green-tag)",
        "orange-tag": "var(--orange-tag)",
        "logo-text": "var(--logo-text)",

        white: "var(--white)",
        black: "var(--black)",
      },
      boxShadow: {
        "card-default": "var(--shadow-card-default)",
        "card-large": "var(--shadow-card-large)",
        "card-large-dark": "var(--shadow-card-large-dark)",
        "card-extra-large-dark": "var(--shadow-card-extra-large-dark)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        swipeOutLeft: {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(-100%)" },
        },
        swipeInRight: {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        swipeOutRight: {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(100%)" },
        },
        swipeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        swipeOutLeft: "swipeOutLeft 0.5s ease-out forwards",
        swipeInRight: "swipeInRight 0.5s ease-out forwards",
        swipeOutRight: "swipeOutRight 0.5s ease-out forwards",
        swipeInLeft: "swipeInLeft 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
