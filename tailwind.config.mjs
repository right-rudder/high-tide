import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      colors: {
        "dark-blue": "#262760",
				"light-blue": "#2CA8E0",
				"mustard-yellow": "#D4AF37",
      },
			fontFamily: {
        sans: ['DMSans', ...defaultTheme.fontFamily.sans],
      },
		},
	},
	plugins: [],
}
