import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#003087",
        "medium-blue": "#0071ce",
        "light-blue": "#6cace4",
        "mustard-yellow": "#ffc220",
      },
      fontFamily: {
        sans: ["DMSans", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-8rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(8rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-down": "fade-down 1s ease-in-out",
        "fade-up": "fade-up 1s ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  safelist: [
    "[counter-set:_num_var(--num-hours)]",
    "[counter-set:_num_var(--num-instructors)]",
    "[counter-set:_num_var(--num-aircrafts)]",
    "[counter-set:_num_var(--num-helicopters)]",
    "grid-cols-1",
    "grid-cols-2",
    "grid-cols-3",
    "grid-cols-4",
    "text-mustard-yellow",
    "text-dark-blue",
    "bg-dark-blue",
    "text-white",
    "bg-mustard-yellow/20",
    "text-dark-blue",
  ],
};
