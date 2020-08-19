// console.log("app.js is running");

const appRoot = document.getElementById("app");

//* Final app render
const app = {
	title: "Indecision App",
	subtitle: "Let your choices be chosen at random!",
	option: [],
};

const onFormSubmit = (e) => {
	e.preventDefault();
	const option = e.target.elements.option.value;

	if (option) {
		// checking if option contains anything, then adding the form value
		app.option.push(option);

		// emptying the form value after submission
		e.target.elements.option.value = "";

		reRenderApp();
	}
};

const removeAll = (e) => {
	e.preventDefault();

	app.option = [];

	reRenderApp();
};

const selectRandom = (e) => {
	e.preventDefault();
	const randomNum = Math.floor(Math.random() * app.option.length);
	const option = app.option[randomNum];
	console.log(randomNum);
};

const reRenderApp = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.option.length > 0 ? "Here are your options" : "Nothing"}</p>
			<button
				disabled={app.option.length > 1 ? false : true}
				onClick={selectRandom}
			>
				Select Random
			</button>
			<button onClick={removeAll}>Remove All</button>
			<ol>
				{app.option.map((item) => {
					return <li key={item}>{item}</li>;
				})}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" />
				<button>Add</button>
			</form>
		</div>
	);

	//* ReactDOM uses the extension .render that takes two params
	//* 1st is the JSX being injected; 2nd is the injection point i.e the Div in the HTML
	ReactDOM.render(template, appRoot);
};
reRenderApp();
