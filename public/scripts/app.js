"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CounterState = function (_React$Component) {
	_inherits(CounterState, _React$Component);

	function CounterState(props) {
		_classCallCheck(this, CounterState);

		var _this = _possibleConstructorReturn(this, (CounterState.__proto__ || Object.getPrototypeOf(CounterState)).call(this, props));

		_this.addOne = _this.addOne.bind(_this);
		_this.minusOne = _this.minusOne.bind(_this);
		_this.reset = _this.reset.bind(_this);
		_this.state = {
			count: props.count
		};
		return _this;
	}

	_createClass(CounterState, [{
		key: "addOne",
		value: function addOne(e) {
			this.setState(function (prevState) {
				return {
					count: prevState.count + 1
				};
			});
		}
	}, {
		key: "minusOne",
		value: function minusOne() {
			this.setState(function (prevState) {
				return {
					count: prevState.count - 1
				};
			});
		}
	}, {
		key: "reset",
		value: function reset() {
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
					{ onClick: this.addOne },
					"+1"
				),
				React.createElement(
					"button",
					{ onClick: this.minusOne },
					"-1"
				),
				React.createElement(
					"button",
					{ onClick: this.reset },
					"Reset"
				)
			);
		}
	}]);

	return CounterState;
}(React.Component);

CounterState.defaultProps = {
	count: 1
};
ReactDOM.render(React.createElement(CounterState, null), document.getElementById("app"));
