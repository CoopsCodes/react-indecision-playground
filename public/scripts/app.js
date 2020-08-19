"use strict";

// console.log("app.js is running");

var appRoot = document.getElementById("app");

//* Final app render
var app = {
	title: "Indecision App",
	subtitle: "Let your choices be chosen at random!",
	option: ["One, Two"]
};

var template = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		app.title
	),
	app.subtitle && React.createElement(
		"p",
		null,
		app.subtitle
	),
	React.createElement(
		"p",
		null,
		app.option.length > 0 ? "Here are your options" : "Nothing"
	)
);

//* ReactDOM uses the extension .render that takes two params
//* 1st is the JSX being injected; 2nd is the injection point i.e the Div in the HTML
ReactDOM.render(template, appRoot);
