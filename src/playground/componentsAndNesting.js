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
		return (
			<div>
				<button>Roll the dice baby!</button>
			</div>
		);
	}
}

class Options extends React.Component {
	render() {
		return (
			<div>
				<p>Options will display here</p>
				<Option />
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		return (
			<div>
				<p>Option</p>
				<p>Option</p>
			</div>
		);
	}
}

class AddOption extends React.Component {
	render() {
		return (
			<div>
				<p>Add option component will display here</p>
			</div>
		);
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
