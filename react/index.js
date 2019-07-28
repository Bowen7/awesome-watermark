"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var wrapperStyle = {
	width: "100%",
	height: "100%",
	overflow: "hidden",
	position: "absolute"
};

var Watermark = function (_Component) {
	_inherits(Watermark, _Component);

	function Watermark(props) {
		_classCallCheck(this, Watermark);

		var _this = _possibleConstructorReturn(this, (Watermark.__proto__ || Object.getPrototypeOf(Watermark)).call(this, props));

		_initialiseProps.call(_this);

		_this.state = {
			innerSpans: []
		};
		return _this;
	}

	_createClass(Watermark, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.pushInnerSpansToState(this.props);
		}
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.text !== this.props.text) {
				this.pushInnerSpansToState(nextProps);
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var innerSpans = this.state.innerSpans;

			return _react2.default.createElement(
				"div",
				{ style: wrapperStyle, ref: function ref(_ref) {
						return _this2.ref = _ref;
					} },
				innerSpans.map(function (innerSpan, index) {
					return _react2.default.createElement(
						"span",
						{ style: innerSpan.style, key: index },
						innerSpan.text
					);
				})
			);
		}
	}]);

	return Watermark;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
	var _this3 = this;

	this.pushInnerSpansToState = function (props) {
		var text = props.text,
		    angle = props.angle,
		    row = props.row,
		    col = props.col,
		    textStyle = props.textStyle;
		var _ref2 = _this3.ref,
		    width = _ref2.offsetWidth,
		    height = _ref2.offsetHeight;

		var innerSpans = (0, _util.generateInnerSpans)({ text: text, angle: angle, row: row, col: col, textStyle: textStyle }, {
			width: width,
			height: height
		});
		_this3.setState({
			innerSpans: innerSpans
		});
	};
};

exports.default = Watermark;