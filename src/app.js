// console.log("app.js is running");

//* Rendering React to the dom
var test = <p>tadaa</p>;
var appRoot = document.getElementById("app");

//* ReactDOM uses the extension .render that takes two params
//* 1st is the JSX being injected; 2nd is the injection point i.e the Div in the HTML
ReactDOM.render(test, appRoot);
