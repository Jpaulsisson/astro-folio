/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primaryFont': 'var(--primaryFont)',
				'primaryBg': 'var(--primaryBg)',
				'accentGreen': 'var(--accentGreen)',
				'accentPink': 'var(--accentPink)',
				'accentBlue': 'var(--accentBlue)',
			},
			maxWidth: {
				'cutoff': '850px',
			}
		},
	},
	plugins: [],
}
