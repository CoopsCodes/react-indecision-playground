const appRoot = document.getElementById("app");

const app = {
	title: "Visibility Test",
	comment: "TADAA",
	visual: false,
};

const makeVisible = (e) => {
	e.preventDefault;
	app.visual = !app.visual;
	console.log(app.visual);
	render();
};

const render = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			<button onClick={makeVisible}>
				{app.visual ? "hide text" : "see text"}
			</button>
			<p>{app.visual ? app.comment : undefined}</p>
		</div>
	);
	ReactDOM.render(template, appRoot);
};
render();
