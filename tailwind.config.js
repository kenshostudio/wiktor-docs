const colors = require("tailwindcss/colors");
module.exports = {
	content: ["./src/**/*.html", "./src/**/*.ts", "./src/**/*.js", "./src/**/*.vue"],
	darkMode: "class", // or 'media' or 'class'
	mode: "jit",
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: [
			'./docs/.vitepress/**/*.js',
			'./docs/.vitepress/**/*.vue',
			'./docs/.vitepress/**/*.ts',
		],
		options: {
			safelist: ['html', 'body'],
		},
	},
	theme: {
		extend: {
			transitionDuration: {
				0: "0ms",
			},
			colors: {
				transparent: "transparent",
				gray: {
					50: "#FAFAFA",
					100: "#F5F5F5",
					200: "#E5E5E5",
					300: "#D4D4D4",
					400: "#A3A3A3",
					500: "#737373",
					600: "#525252",
					700: "#404040",
					800: "#2B2B2B",
					900: "#1D1D1D",
					1000: "#141414",
				},
				blue: {
					50: "#f2faff",
					100: "#e6f6ff",
					200: "#bfe8ff",
					300: "#99daff",
					400: "#4dbfff",
					500: "#00a3ff",
					600: "#0093e6",
					700: "#007abf",
					800: "#006299",
					900: "#00507d",
				},
			},
			animation: {
				"spin-slow": "spin 1.5s linear infinite",
			},
			borderWidth: {
				"05": "0.5px",
				"t-05": "0.5px",
				"b-05": "0.5px",
			},
			saturate: {
				180: "1.8",
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
