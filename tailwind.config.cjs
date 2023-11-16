/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const { nextui } = require("@nextui-org/react");
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}","./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
			},
			colors:{
				'brand-primary':'#0097b2',
				'brand-secondary' : '#FF7043',
				'brand-tertiary' : '#00BCD4',
				'brand-success' : '#66BB6A',
				'brand-warning' : '#FFA726',
				'brand-error' : '#EF5350',
				'brand-surface' : '#FAFAFA',
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require.resolve("prettier-plugin-astro"),nextui()],
	darkMode: "class",
};
