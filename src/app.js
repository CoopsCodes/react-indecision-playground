// console.log("app.js is running");

//* Rendering React to the dom
// var test = (
// 	<div>
// 		<h1>Title</h1>
// 		<p>tadaa</p>
// 	</div>
// );

var myTemplate = (
	<div>
		<h1>Cooper Viktor</h1>
		<p>Age: 35</p>
		<p>Location: Melbourne Australia</p>
	</div>
);
var appRoot = document.getElementById("app");

//* ReactDOM uses the extension .render that takes two params
//* 1st is the JSX being injected; 2nd is the injection point i.e the Div in the HTML
ReactDOM.render(myTemplate, appRoot);
