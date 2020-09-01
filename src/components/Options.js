import React from "react";
import Option from "./Option";
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

export default Options;
