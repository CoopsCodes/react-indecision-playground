class IndecisionApp extends React.Component {
	render() {
		const headerTitle = "Indecision App";
		const subTitle = "Let a your choices be made at random!";
		const option = ["option 1", "option 2", "option 4"];
		return (
			<div>
				<Header title={headerTitle} subtitle={subTitle} />
				<Action />
				<Options option={option} />
				<AddOption />
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<p>{this.props.subtitle}</p>
			</div>
		);
	}
}

class Action extends React.Component {
	handlePick() {
		alert("TADAA");
	}
	render() {
		return <button onClick={this.handlePick}>Roll the dice baby!</button>;
	}
}

class Options extends React.Component {
	constructor(props) {
		super(props);
		this.removeAll = this.removeAll.bind(this);
	}
	removeAll() {
		console.log(this.props.option);
		alert("REMOVED");
	}
	render() {
		return (
			<div>
				<button onClick={this.removeAll}>Remove All</button>
				{this.props.option.map((o) => (
					<Option key={o} opt={o} />
				))}
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		return (
			<div>
				<p>{this.props.opt}</p>
			</div>
		);
	}
}

class AddOption extends React.Component {
	addOption(e) {
		e.preventDefault();
		let formData = e.target.addOption.value.trim();
		if (formData) {
			alert(formData);
		}
	}
	render() {
		return (
			<form onSubmit={this.addOption}>
				<input input="text" name="addOption" />
				<button>Add Option</button>
			</form>
		);
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
