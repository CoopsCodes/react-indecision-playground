"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StateApp = function (_React$Component) {
	_inherits(StateApp, _React$Component);

	function StateApp(props) {
		_classCallCheck(this, StateApp);

		var _this = _possibleConstructorReturn(this, (StateApp.__proto__ || Object.getPrototypeOf(StateApp)).call(this, props));

		_this.minusOne = _this.minusOne.bind(_this);
		_this.addOne = _this.addOne.bind(_this);
		_this.resetCounter = _this.resetCounter.bind(_this);
		_this.state = {
			count: 0
		};
		return _this;
	}

	_createClass(StateApp, [{
		key: "addOne",
		value: function addOne(e) {
			e.preventDefault();
			this.setState({ count: this.state.count + 1 });
		}
	}, {
		key: "minusOne",
		value: function minusOne(e) {
			e.preventDefault();
			this.setState(function (prevState) {
				return {
					count: prevState.count - 1
				};
			});
		}
	}, {
		key: "resetCounter",
		value: function resetCounter(e) {
			e.preventDefault();
			this.setState({ count: 0 });
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"h1",
					null,
					"Count: ",
					this.state.count
				),
				React.createElement(
					"button",
					{ onClick: this.minusOne },
					"-1"
				),
				React.createElement(
					"button",
					{ onClick: this.addOne },
					"+1"
				),
				React.createElement(
					"button",
					{ onClick: this.resetCounter },
					"Reset"
				)
			);
		}
	}]);

	return StateApp;
}(React.Component);

ReactDOM.render(React.createElement(StateApp, null), document.getElementById("app"));
