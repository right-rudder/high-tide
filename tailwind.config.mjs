import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#262760",
        "light-blue": "#2CA8E0",
        "mustard-yellow": "#D4AF37",
      },
      fontFamily: {
        sans: ["DMSans", ...defaultTheme.fontFamily.sans],
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
        "fade-down": "fade-down 1s ease-in",
        "fade-up": "fade-up 1s ease-in",
      },
    },
  },
  plugins: [],
};
