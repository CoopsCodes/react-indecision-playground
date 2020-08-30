const path = require("path");
// entry -> output

// As output/path needs to be an absolute filepath, console logging the __dirname will provide that.
// Then by using NodeJS' path extension we can contatinate the two to point to the public directory.
console.log(__dirname);

// module.exports is a NodeJS command that allows the content to be exposed and used in other applications
// Docs: https://webpack.js.org/concepts/entry-points/
module.exports = {
	entry: "./src/app.js",
	output: {
		path: path.join(__dirname, "public"),
		filename: "bundle.js",
	},
};
