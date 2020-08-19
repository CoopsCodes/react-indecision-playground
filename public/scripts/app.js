"use strict";

var appRoot = document.getElementById("app");

var render = function render() {
	var template = React.createElement(
		"div",
		null,
		React.createElement(
			"h1",
			null,
			"Hello"
		)
	);
	ReactDOM.render(template, appRoot);
};
render();
