import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";

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
			console.log("Error in componentDidMount try-catch", error);
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

export default IndecisionApp;
