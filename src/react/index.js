import React, { Component } from "react";
import { generateInnerSpans } from "../../util";
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
		this.pushInnerSpansToState(this.props);
	}

	pushInnerSpansToState = props => {
		const { text, angle, row, col, textStyle } = props;
		const { offsetWidth: width, offsetHeight: height } = this.ref;
		const innerSpans = generateInnerSpans(
			{ text, angle, row, col, textStyle },
			{
				width,
				height
			}
		);
		this.setState({
			innerSpans
		});
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.text !== this.props.text) {
			this.pushInnerSpansToState(nextProps);
		}
	}

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
