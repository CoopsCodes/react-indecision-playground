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
const user = {
	name: "Cooper Viktor",
	age: 36,
	location: "Melbourne Victoria",
};
const myTemplate = (
	<div>
		//! Ternary Operator example
		<h1>Welcome {user.name ? user.name : "New User"}</h1>
		//! And / OR example
		{user.age && user.age >= 18 && <p>Age: {user.age}</p>}
		{getLocation(user.location)}
	</div>
);
//* AND / OR check to see if user age exists and is greater than 18, then it will display result
//* ------------------------

//* Conditional Rendering
function getLocation(location) {
	if (location) {
		return <p>Location: {location}</p>;
	}
	/* If your else is returning undefined, you can remove the whole return
	else {
		return undefined
	}
	*/
}

const appRoot = document.getElementById("app");

//* Final app render
const app = {
	title: "Indecision App",
	subtitle: "Let your choices be chosen at random!",
	option: ["One, Two"],
};

const template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		<p>{app.option.length > 0 ? "Here are your options" : "Nothing"}</p>
	</div>
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
