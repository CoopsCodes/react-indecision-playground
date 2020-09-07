import React from "react";
import Option from "./Option";

const Options = (props) => (
	<div>
		<div className="widget--header">
			<h3 className="widget--header__title">Your options</h3>
			<button
				className="button button--link"
				onClick={props.handleDeleteAll}
			>
				Remove All
			</button>
		</div>
		{props.options.length === 0 && (
			<p className="widget__message">
				Add something to make my day busier
			</p>
		)}
		{props.options.map((o, index) => (
			<Option
				key={o}
				optionText={o}
				count={index + 1}
				handleDeleteOption={props.handleDeleteOption}
			/>
		))}
	</div>
);

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
