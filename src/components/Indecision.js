import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";
import OptionModal from "./Modal";

class IndecisionApp extends React.Component {
	state = {
		options: [],
		selectedOption: undefined,
	};
	handleDeleteAll = () => {
		// If the return is simple enough this can be refactored down to a single line return statement
		/*
		this.setState(() => {
			return {
				options: [],
			};
		});
		*/
		this.setState(() => ({ options: [] }));
	};

	closeModal = () => {
		this.setState(() => ({ selectedOption: undefined }));
	};

	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter(
				(option) => optionToRemove !== option
			),
		}));
	};

	handlePick = () => {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const selected = this.state.options[randomNum];

		this.setState(() => ({ selectedOption: selected }));
	};

	handleAddOption = (option) => {
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
	};

	componentDidMount = () => {
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
	};

	componentDidUpdate = (prevProps, prevState) => {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem("options", json);
			console.log("Updated");
		}
		// A method that gets called after either the state or prop values get updated.
		// have access to previous props and state
	};

	componentWillUnmount = () => {
		console.log("componentWillUnmount");
		// this fires just before the component goes away.
		// don't call setState in here, it is used for clearing network requests or resetting timers etc
	};

	render() {
		// const headerTitle = "Indecision App"; // -> removed as a prop and set as a default prop in the stateless component below
		const subTitleText = "Let me make your choice for you!";
		return (
			<div className="body">
				<Header subTitle={subTitleText} />
				<div className="container">
					<Action
						hasOptions={this.state.options.length > 0}
						handlePick={this.handlePick}
					/>
					<div className="widget">
						<Options
							options={this.state.options}
							handleDeleteAll={this.handleDeleteAll}
							handleDeleteOption={this.handleDeleteOption}
						/>
						<AddOption handleAddOption={this.handleAddOption} />
					</div>
				</div>
				<OptionModal
					selected={this.state.selectedOption}
					closeModal={this.closeModal}
				/>
			</div>
		);
	}
}

export default IndecisionApp;
