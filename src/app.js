// console.log("app.js is running");

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
