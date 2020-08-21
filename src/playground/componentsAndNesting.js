class IndecisionApp extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Action />
				<Options />
				<AddOption />
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>Indecision App</h1>
				<p>Let a your choices be made at random!</p>
			</div>
		);
	}
}

class Action extends React.Component {
	render() {
		return <button>Roll the dice baby!</button>;
	}
}

class Options extends React.Component {
	render() {
		return <p>Options will display here</p>;
	}
}

class AddOption extends React.Component {
	render() {
		return <p>Add option component will display here</p>;
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
