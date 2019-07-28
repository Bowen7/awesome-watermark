"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var generateInnerSpans = exports.generateInnerSpans = function generateInnerSpans(_ref, _ref2) {
	var _ref$text = _ref.text,
	    text = _ref$text === undefined ? "" : _ref$text,
	    _ref$angle = _ref.angle,
	    angle = _ref$angle === undefined ? 30 : _ref$angle,
	    _ref$row = _ref.row,
	    row = _ref$row === undefined ? 2 : _ref$row,
	    _ref$col = _ref.col,
	    col = _ref$col === undefined ? 3 : _ref$col,
	    _ref$textStyle = _ref.textStyle,
	    textStyle = _ref$textStyle === undefined ? {} : _ref$textStyle;
	var height = _ref2.height,
	    width = _ref2.width;

	if (text === "") {
		return [];
	}

	var innerSpans = [];
	var rowHeight = height / row;
	var colWidth = width / col;
	var style = {
		transform: "translate(-50%,-50%) rotate(" + angle + "deg)",
		position: "absolute"
	};

	for (var i = 0; i < row; i++) {
		for (var j = 0; j < col; j++) {
			innerSpans.push({
				style: _extends({}, style, textStyle, {
					top: (i + 0.5) * rowHeight + "px",
					left: (j + 0.5) * colWidth + "px"
				}),
				text: text
			});
		}
	}
	return innerSpans;
};
