const defaultTheme = require('tailwindcss/defaultTheme');

const svgToDataUri = require('mini-svg-data-uri');

const colors = require('tailwindcss/colors');
const {
	default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				xs: '550px',
			},
			fontFamily: {
				'JetBrains Mono': [
					'JetBrains Mono',
					...defaultTheme.fontFamily.mono,
				],
				'orbiter-deck': ['TASA Orbiter Deck', 'sans-serif'],
				'orbiter-display': ['TASA Orbiter Display', 'sans-serif'],
				'orbiter-text': ['TASA Orbiter Text', 'sans-serif'],
			},
		},
	},
	plugins: [
		addVariablesForColors,
		function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'bg-grid': (value) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="66" height="66" fill="none" stroke="white"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					}),
					'bg-grid-small': (value) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					}),
					'bg-dot': (value) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
						)}")`,
					}),
				},
				{
					values: flattenColorPalette(theme('backgroundColor')),
					type: 'color',
				}
			);
		},
	],
};

function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme('colors'));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		':root': newVars,
	});
}
