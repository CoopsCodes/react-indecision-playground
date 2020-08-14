"use strict";

// console.log("app.js is running");

//* Rendering React to the dom
// var test = (
// 	<div>
// 		<h1>Title</h1>
// 		<p>tadaa</p>
// 	</div>
// );

var myTemplate = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		"Cooper Viktor"
	),
	React.createElement(
		"p",
		null,
		"Age: 35"
	),
	React.createElement(
		"p",
		null,
		"Location: Melbourne Australia"
	)
);
var appRoot = document.getElementById("app");

//* ReactDOM uses the extension .render that takes two params
//* 1st is the JSX being injected; 2nd is the injection point i.e the Div in the HTML
ReactDOM.render(myTemplate, appRoot);
