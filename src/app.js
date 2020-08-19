const appRoot = document.getElementById("app");

const render = () => {
	const template = (
		<div>
			<h1>Hello</h1>
		</div>
	);
	ReactDOM.render(template, appRoot);
};
render();
