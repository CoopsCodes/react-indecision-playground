"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibilityToggleState = function (_React$Component) {
	_inherits(VisibilityToggleState, _React$Component);

	function VisibilityToggleState(props) {
		_classCallCheck(this, VisibilityToggleState);

		var _this = _possibleConstructorReturn(this, (VisibilityToggleState.__proto__ || Object.getPrototypeOf(VisibilityToggleState)).call(this, props));

		_this.makeVisible = _this.makeVisible.bind(_this);
		_this.state = {
			title: "Visibility Test",
			comment: "TADAA",
			visual: false
		};
		return _this;
	}

	_createClass(VisibilityToggleState, [{
		key: "makeVisible",
		value: function makeVisible(e) {
			e.preventDefault;
			this.setState(function (prevState) {
				return {
					visual: !prevState.visual
				};
			});
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
					this.state.title
				),
				React.createElement(
					"button",
					{ onClick: this.makeVisible },
					this.state.visual ? "hide text" : "see text"
				),
				React.createElement(
					"p",
					null,
					this.state.visual ? this.state.comment : undefined
				)
			);
		}
	}]);

	return VisibilityToggleState;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityToggleState, null), document.getElementById("app"));
