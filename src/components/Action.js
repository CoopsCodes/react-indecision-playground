import React from "react";

const Action = (props) => {
	return (
		<div>
			<button
				className="big-button"
				onClick={props.handlePick}
				disabled={!props.hasOptions}
			>
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

export default Action;
