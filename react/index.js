import React, { Component } from "react";
const wrapperStyle = {
	width: "100%",
	height: "100%",
	overflow: "hidden",
	position: "absolute"
};
class Watermark extends Component {
	constructor(props) {
		super(props);
		this.state = {
			innerSpans: []
		};
	}
	componentDidMount() {
		const { offsetWidth: width, offsetHeight: height } = this.ref;
		const innerSpans = this.generateInnerSpans(this.props, {
			width,
			height
		});
		this.setState({
			innerSpans
		});
	}

	generateInnerSpans = (
		{ text = "", angle = 30, row = 2, col = 3, textStyle = {} },
		{ height, width }
	) => {
		const innerSpans = [];
		const rowHeight = height / row;
		const colWidth = width / col;
		const style = {
			transform: `translate(-50%,-50%) rotate(${angle}deg)`,
			position: "absolute"
		};
		for (let i = 0; i < row; i++) {
			for (let j = 0; j < col; j++) {
				innerSpans.push({
					style: {
						...textStyle,
						...style,
						top: `${(i + 0.5) * rowHeight}px`,
						left: `${(j + 0.5) * colWidth}px`
					},
					text
				});
			}
		}
		return innerSpans;
	};
	render() {
		const { innerSpans } = this.state;
		return (
			<div style={wrapperStyle} ref={ref => (this.ref = ref)}>
				{innerSpans.map((innerSpan, index) => (
					<span style={innerSpan.style} key={index}>
						{innerSpan.text}
					</span>
				))}
			</div>
		);
	}
}

export default Watermark;
