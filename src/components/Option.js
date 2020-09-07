import React from "react";

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

export default Option;