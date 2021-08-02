const colors = require("tailwindcss/colors");

module.exports = {
	purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				tapa: {
					"50": "#f8f8f8",
					"100": "#f2f1f0",
					"200": "#dddcda",
					"300": "#c9c6c4",
					"400": "#a19c98",
					"500": "#78716c",
					"600": "#6c6661",
					"700": "#5a5551",
					"800": "#484441",
					"900": "#3b3735",
				},
				orange: colors.orange,
			},
			animation: {
				blob: "blob 7s infinite",
			},
			keyframes: {
				blob: {
					"0%": {
						transform: "translate(0px, 0px) scale(1)",
					},
					"33%": {
						transform: "translate(30px, -30px) scale(0.9)",
					},
					"66%": {
						transform: "translate(-20px, 30px) scale(1.1)",
					},
					"100%": {
						transform: "translate(0px, 0px) scale(1)",
					},
				},
			},
			// backgroundImage: (theme) => ({
			// 	intersection:
			// 		"url('~@/assets/images/background/happy-intersection.svg')",
			// }),
		},
	},
	variants: {
		extend: {},
		opacity: ["disabled"],
		cursor: ["disabled"],
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
	],
};
