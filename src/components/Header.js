import React from "react";

const Header = (props) => (
	<div>
		<h1>{props.title}</h1>
		{props.subTitle && <h3>{props.subTitle}</h3>}
	</div>
);

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

export default Header;
