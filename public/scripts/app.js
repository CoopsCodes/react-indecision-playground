"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
	_inherits(IndecisionApp, _React$Component);

	function IndecisionApp(props) {
		_classCallCheck(this, IndecisionApp);

		var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

		_this.handleDeleteAll = _this.handleDeleteAll.bind(_this);
		_this.handlePick = _this.handlePick.bind(_this);
		_this.handleAddOption = _this.handleAddOption.bind(_this);
		_this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
		_this.state = {
			options: []
		};
		return _this;
	}

	_createClass(IndecisionApp, [{
		key: "handleDeleteAll",
		value: function handleDeleteAll() {
			// If the return is simple enough this can be refactored down to a single line return statement
			/*
   this.setState(() => {
   	return {
   		options: [],
   	};
   });
   */
			this.setState(function () {
				return { options: [] };
			});
		}
	}, {
		key: "handleDeleteOption",
		value: function handleDeleteOption(optionToRemove) {
			this.setState(function (prevState) {
				return {
					options: prevState.options.filter(function (option) {
						return optionToRemove !== option;
					})
				};
			});
		}
	}, {
		key: "handlePick",
		value: function handlePick() {
			var randomNum = Math.floor(Math.random() * this.state.options.length);
			var option = this.state.options[randomNum];
			alert(option);
		}
	}, {
		key: "handleAddOption",
		value: function handleAddOption(option) {
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
			this.setState(function (prevState) {
				return {
					options: prevState.options.concat(option)
				};
			});
		}
	}, {
		key: "render",
		value: function render() {
			// const headerTitle = "Indecision App"; // -> removed as a prop and set as a default prop in the stateless component below
			var subTitleText = "Let a your choices be made at random!";
			return React.createElement(
				"div",
				null,
				React.createElement(Header, { subTitle: subTitleText }),
				React.createElement(Action, {
					hasOptions: this.state.options.length > 0,
					handlePick: this.handlePick
				}),
				React.createElement(Options, {
					options: this.state.options,
					handleDeleteAll: this.handleDeleteAll,
					handleDeleteOption: this.handleDeleteOption
				}),
				React.createElement(AddOption, { handleAddOption: this.handleAddOption })
			);
		}
	}]);

	return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"h1",
			null,
			props.title
		),
		props.subTitle && React.createElement(
			"h3",
			null,
			props.subTitle
		)
	);
};
Header.defaultProps = {
	// This title was originally sent down as a prop, but it can be set here as it isn't necessary to be a prop, but being set as a prop allows it to be changed on other pages and updated.
	// this provides the chance to reuse the code with only slight changes to the props
	title: "Indecision App"
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

var Action = function Action(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"button",
			{ onClick: props.handlePick, disabled: !props.hasOptions },
			"Roll the dice baby!"
		)
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

var Options = function Options(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"button",
			{ onClick: props.handleDeleteAll },
			"Remove All"
		),
		props.options.map(function (o) {
			return React.createElement(Option, {
				key: o,
				optionText: o,
				handleDeleteOption: props.handleDeleteOption
			});
		})
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

var Option = function Option(props) {
	// Let's explain what is happening here.
	// optionText is being sent down as a prop from state -> Options -> option -> displayed as text here
	// handleDeleteOption is a method created in the top stateful component and being triggered in the onClick to pass the optionText prop back up to the method so the button can identify what is the correct one to filter out.
	return React.createElement(
		"div",
		null,
		React.createElement(
			"p",
			null,
			props.optionText
		),
		React.createElement(
			"button",
			{
				onClick: function onClick(e) {
					props.handleDeleteOption(props.optionText);
				}
			},
			"remove"
		)
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

var AddOption = function (_React$Component2) {
	_inherits(AddOption, _React$Component2);

	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this2.handleAddOption = _this2.handleAddOption.bind(_this2);
		_this2.state = {
			error: undefined
		};
		return _this2;
	}

	_createClass(AddOption, [{
		key: "handleAddOption",
		value: function handleAddOption(e) {
			e.preventDefault();

			var option = e.target.addOption.value.trim();

			var error = this.props.handleAddOption(option);

			this.setState(function () {
				return { error: error };
			});
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				this.state.error && React.createElement(
					"p",
					null,
					this.state.error
				),
				React.createElement(
					"form",
					{ onSubmit: this.handleAddOption },
					React.createElement("input", { input: "text", name: "addOption" }),
					React.createElement(
						"button",
						null,
						"Add Option"
					)
				)
			);
		}
	}]);

	return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
