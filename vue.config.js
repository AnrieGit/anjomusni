const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin");

module.exports = {
	configureWebpack: {
		plugins: [
			new GoogleFontsPlugin({
				fonts: [{ family: "Quicksand", variants: ["400", "500", "700"] }],
			}),
		],
	},
	pages: {
		index: {
			// entry for the page
			entry: "src/main.js",
			// when using title option,
			// template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
			title: "Anjo Musni",
		},
	},
};
