const path = require("path");
// entry -> output

// As output/path needs to be an absolute filepath, console logging the __dirname will provide that.
// Then by using NodeJS' path extension we can concatinate the two to point to the public directory.
console.log(__dirname);

// module.exports is a NodeJS command that allows the content to be exposed and used in other applications
module.exports = {
	// Docs: https://webpack.js.org/concepts/entry-points/
	entry: "./src/app.js",
	output: {
		path: path.join(__dirname, "public"),
		filename: "bundle.js",
	},
	// Loader
	// A loader is a language parser, without the loader this app cant understand the JSX, so we use a loader to 'load' babel and translate
	// other examples would be an SCSS compiler that changes your SCSS files down to CSS
	// https://webpack.js.org/configuration/module/#modulerules
	module: {
		rules: [
			{
				loader: "babel-loader",
				test: /\.js$/,
				exclude: /node_modules/,
			},
		],
	},
	// https://webpack.js.org/configuration/devtool/
	// This created an actually decent trackable stacktrace! add it!!!
	devtool: "cheap-module-eval-source-map",
	devServer: {
		contentBase: path.join(__dirname, "public"),
	},
};
