class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteAll = this.handleDeleteAll.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.state = {
			options: [],
		};
	}
	componentDidMount() {
		// A method that gets called when the component gets mounted to the virtual DOM
		try {
			const json = localStorage.getItem("options");
			const options = JSON.parse(json);
			if (options) {
				this.setState(() => ({ options: options }));
			}
			console.log("Mounted");
		} catch (error) {
			console.log("Error in componentDidMount trycatch", error);
		}
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem("options", json);
			console.log("Updated");
		}
		// A method that gets called after either the state or prop values get updated.
		// have access to previous props and state
	}
	componentWillUnmount() {
		console.log("componentWillUnmount");
		// this fires just before the component goes away.
		// don't call setState in here, it is used for clearing network requests or resetting timers etc
	}
	handleDeleteAll() {
		// If the return is simple enough this can be refactored down to a single line return statement
		/*
		this.setState(() => {
			return {
				options: [],
			};
		});
		*/
		this.setState(() => ({ options: [] }));
	}
	handleDeleteOption(optionToRemove) {
		this.setState((prevState) => ({
			options: prevState.options.filter(
				(option) => optionToRemove !== option
			),
		}));
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
		// Refactored below
		/*
		this.setState((prevState) => {
			return {
				options: prevState.options.concat(option),
			};
		});
		*/
		this.setState((prevState) => ({
			options: prevState.options.concat(option),
		}));
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
					handleDeleteOption={this.handleDeleteOption}
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
			{props.options.length === 0 && (
				<p>Please add an option to get started</p>
			)}
			{props.options.map((o) => (
				<Option
					key={o}
					optionText={o}
					handleDeleteOption={props.handleDeleteOption}
				/>
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
	// Let's explain what is happening here.
	// optionText is being sent down as a prop from state -> Options -> option -> displayed as text here
	// handleDeleteOption is a method created in the top stateful component and being triggered in the onClick to pass the optionText prop back up to the method so the button can identify what is the correct one to filter out.
	return (
		<div>
			<p>{props.optionText}</p>
			<button
				onClick={(e) => {
					props.handleDeleteOption(props.optionText);
				}}
			>
				remove
			</button>
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

		this.setState(() => ({ error }));

		if (!error) {
			console.log(e.target);
			e.target.addOption.value = "";
		}
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
