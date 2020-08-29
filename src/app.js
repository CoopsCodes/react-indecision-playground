class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteAll = this.handleDeleteAll.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			options: [],
		};
	}
	handleDeleteAll() {
		this.setState(() => {
			return {
				options: [],
			};
		});
	}
	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		alert(option);
	}
	handleAddOption(option) {
		if (!option) {
			return "Please enter a valid item";
		} else if (this.state.options.indexOf(option) > -1) {
			return "This option already exists";
		}
		this.setState((prevState) => {
			return {
				options: prevState.options.concat(option),
			};
		});
	}
	render() {
		// const headerTitle = "Indecision App"; // -> removed as a prop and set as a default prop in the stateless component below
		const subTitleText = "Let a your choices be made at random!";
		return (
			<div>
				<Header subTitle={subTitleText} />
				<Action
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick}
				/>
				<Options
					options={this.state.options}
					handleDeleteAll={this.handleDeleteAll}
				/>
				<AddOption handleAddOption={this.handleAddOption} />
			</div>
		);
	}
}

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subTitle && <h3>{props.subTitle}</h3>}
		</div>
	);
};
Header.defaultProps = {
	// This title was originally sent down as a prop, but it can be set here as it isn't necessary to be a prop, but being set as a prop allows it to be changed on other pages and updated.
	// this provides the chance to reuse the code with only slight changes to the props
	title: "Indecision App",
};

// Class based Stateful component (before being refactored into the Stateless Header used above)
/*
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
*/
const Action = (props) => {
	return (
		<div>
			<button onClick={props.handlePick} disabled={!props.hasOptions}>
				Roll the dice baby!
			</button>
		</div>
	);
};

// Class based Stateful component (before being refactored into the Stateless Action used above)
/*
class Action extends React.Component {
	render() {
		return (
			<div>
				<button
					onClick={this.props.handlePick}
					disabled={!this.props.hasOptions}
				>
					Roll the dice baby!
				</button>
			</div>
		);
	}
}
*/

const Options = (props) => {
	return (
		<div>
			<button onClick={props.handleDeleteAll}>Remove All</button>
			{props.options.map((o) => (
				<Option key={o} opt={o} />
			))}
		</div>
	);
};

// Class based Stateful component (before being refactored into the Stateless Options used above)
/*
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
*/

const Option = (props) => {
	return (
		<div>
			<p>{props.opt}</p>
		</div>
	);
};

// Class based Stateful component (before being refactored into the Stateless Option used above)
/*
class Option extends React.Component {
	render() {
		return (
			<div>
				<p>{this.props.opt}</p>
			</div>
		);
	}
}
*/

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined,
		};
	}
	handleAddOption(e) {
		e.preventDefault();

		let option = e.target.addOption.value.trim();

		const error = this.props.handleAddOption(option);

		this.setState(() => {
			return { error };
		});
	}
	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input input="text" name="addOption" />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
