"use strict";

// console.log("app.js is running");

//* Rendering React to the dom
// var test = (
// 	<div>
// 		<h1>Title</h1>
// 		<p>tadaa</p>
// 	</div>
// );
//* ------------------------

//* Rendering via variables
// var userName = "Cooper";
// var userAge = 35;
// var userLocation = "Melbourne Australia";
// var myTemplate = (
// 	<div>
// 		<h1>Hi: {userName.toLocaleUpperCase() + "!"}</h1>
// 		<p>Age: {userAge}</p>
// 		<p>Location: {userLocation}</p>
// 	</div>
// );
//* ------------------------

//* Rendering via an Object
var user = {
	name: "Cooper Viktor",
	age: 36,
	location: "Melbourne Victoria"
};
var myTemplate = React.createElement(
	"div",
	null,
	"//! Ternary Operator example",
	React.createElement(
		"h1",
		null,
		"Welcome ",
		user.name ? user.name : "New User"
	),
	"//! And / OR example",
	user.age && user.age >= 18 && React.createElement(
		"p",
		null,
		"Age: ",
		user.age
	),
	getLocation(user.location)
);
//* AND / OR check to see if user age exists and is greater than 18, then it will display result
//* ------------------------

//* Conditional Rendering
function getLocation(location) {
	if (location) {
		return React.createElement(
			"p",
			null,
			"Location: ",
			location
		);
	}
	/* If your else is returning undefined, you can remove the whole return
 else {
 	return undefined
 }
 */
}

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

//! Counter example containing the re-render
//* Due to the order of operation in React without the renderCounterApp being called after each action, the state would not update.
/*
let count = 0;
const addOne = () => {
	count++;
	renderCounterApp();
};
const minusOne = () => {
	count--;
	renderCounterApp();
};
const reset = () => {
	count = 0;
	renderCounterApp();
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
	const templateTwo = (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={addOne}>+1</button>
			<button onClick={minusOne}>-1</button>
			<button onClick={reset}>Reset</button>
		</div>
	);

	ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
*/
