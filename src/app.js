class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteAll = this.handleDeleteAll.bind(this);
		this.state = {
			options: ["option 1", "option 2", "option 4"],
		};
	}
	handleDeleteAll() {
		this.setState(() => {
			return {
				options: [],
			};
		});
	}
	render() {
		const headerTitle = "Indecision App";
		const subTitle = "Let a your choices be made at random!";
		return (
			<div>
				<Header title={headerTitle} subtitle={subTitle} />
				<Action hasOptions={this.state.options.length > 0} />
				<Options
					options={this.state.options}
					handleDeleteAll={this.handleDeleteAll}
				/>
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
		return (
			<div>
				<button
					onClick={this.handlePick}
					disabled={!this.props.hasOptions}
				>
					Roll the dice baby!
				</button>
			</div>
		);
		// return <button onClick={this.handlePick}>Roll the dice baby!</button>;
	}
}

class Options extends React.Component {
	render() {
		return (
			<div>
				<button onClick={this.props.handleDeleteAll}>Remove All</button>
				{this.props.options.map((o) => (
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
