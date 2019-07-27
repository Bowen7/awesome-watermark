const generateInnerSpans = (
	{ text = "", angle = 30, row = 2, col = 3, textStyle = "" },
	{ height, width }
) => {
	if (text === "") {
		return [];
	}

	const innerSpans = [];
	const rowHeight = height / row;
	const colWidth = width / col;
	let style = `transform:translate(-50%,-50%) rotate(${angle}deg);position:absolute;`;

	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			const _style =
				style +
				textStyle +
				`top:${(i + 0.5) * rowHeight}px;left:${(j + 0.5) *
					colWidth}px;`;

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
		text: {
			type: String,
			value: ""
		},
		angle: {
			type: Number,
			value: 30
		},
		row: {
			type: Number,
			value: 2
		},
		col: {
			type: Number,
			value: 3
		},
		textStyle: {
			type: String,
			value: ""
		}
	},
	data: {
		innerSpans: []
	},
	observers: {
		text: function() {
			this.pushInnerSpansToData();
		}
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
							angle: this.data.angle,
							row: this.data.row,
							col: this.data.col,
							textStyle: this.data.textStyle
						},
						{ width, height }
					);
					this.setData({
						innerSpans
					});
				})
				.exec();
		}
	}
});
