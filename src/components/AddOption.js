import React from "react";

class AddOption extends React.Component {
	state = {
		error: undefined,
	};

	handleAddOption = (e) => {
		e.preventDefault();

		let option = e.target.addOption.value.trim();

		const error = this.props.handleAddOption(option);

		this.setState(() => ({ error }));

		if (!error) {
			console.log(e.target);
			e.target.addOption.value = "";
		}
	};

	render() {
		return (
			<div>
				{this.state.error && (
					<p className="add-option-error">{this.state.error}</p>
				)}
				<form className="add-option" onSubmit={this.handleAddOption}>
					<input
						className="add-option__input"
						input="text"
						name="addOption"
					/>
					<button className="button">Add Option</button>
				</form>
			</div>
		);
	}
}
// -> refactored to be the class property
// It removes all the painful constructor bindings
/*
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
*/
export default AddOption;
