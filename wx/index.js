const generateInnerSpans = (
	{ text = "", angle = 30, row = 2, col = 3, textStyle },
	{ height, width },
	styleIsObject = true
) => {
	!textStyle && (textStyle = styleIsObject ? {} : "");
	const innerSpans = [];
	const rowHeight = height / row;
	const colWidth = width / col;
	let style = styleIsObject
		? {
				transform: `translate(-50%,-50%) rotate(${angle}deg)`,
				position: "absolute"
		  }
		: `transform:translate(-50%,-50%) rotate(${angle}deg);position:absolute;`;

	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			let _style;
			styleIsObject
				? (_style = {
						...style,
						...textStyle,
						top: `${(i + 0.5) * rowHeight}px`,
						left: `${(j + 0.5) * colWidth}px`
				  })
				: (_style =
						style +
						textStyle +
						`top:${(i + 0.5) * rowHeight}px;left:${(j + 0.5) *
							colWidth}px;`);

			innerSpans.push({
				style: _style,
				text
			});
		}
	}
	return innerSpans;
};
Component({
	properties: {
		text: String
	},
	data: {
		innerSpans: []
	},
	lifetimes: {
		ready() {
			this.pushInnerSpansToData();
		}
	},
	methods: {
		pushInnerSpansToData: function() {
			wx.createSelectorQuery()
				.in(this)
				.select("#watermark-wrapper")
				.boundingClientRect(rect => {
					const { width, height } = rect;
					let innerSpans = generateInnerSpans(
						{
							text: this.data.text,
							angle: 30,
							row: 2,
							col: 3,
							textStyle: "color:#fff;"
						},
						{ width, height },
						false
					);
					this.setData({
						innerSpans
					});
				})
				.exec();
		}
	}
});
