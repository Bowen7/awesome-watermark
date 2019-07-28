export const generateInnerSpans = (
	{ text = "", angle = 30, row = 2, col = 3, textStyle = {} },
	{ height, width }
) => {
	if (text === "") {
		return [];
	}

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
					...style,
					...textStyle,
					top: `${(i + 0.5) * rowHeight}px`,
					left: `${(j + 0.5) * colWidth}px`
				},
				text
			});
		}
	}
	return innerSpans;
};
