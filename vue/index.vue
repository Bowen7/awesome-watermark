<template>
  <div
    ref="wrapper"
    v-bind:style="wrapperStyle"
  >
    <span
      v-for="(innerSpan, index) in innerSpans"
      :key="index"
      v-bind:style="innerSpan.style"
    >{{ innerSpan.text }}</span>
  </div>
</template>

<script>
const generateInnerSpans = (
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
let _watchedProps = {};
export default {
  name: "Watermark",
  props: {
    text: String
  },
  data: function() {
    return {
      innerSpans: [],
      wrapperStyle: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "absolute"
      }
    };
  },
  watch: {
    text: function() {
      this.pushInnerSpansToData();
    }
  },
  mounted: function() {
    this.pushInnerSpansToData();
  },
  methods: {
    pushInnerSpansToData: function() {
      const wrapper = this.$refs.wrapper;
      if (!wrapper) {
        return;
      }
      const { offsetWidth: width, offsetHeight: height } = wrapper;
      this.innerSpans = generateInnerSpans(
        {
          text: this.text,
          angle: 30,
          row: 2,
          col: 3,
          textStyle: { color: "#fff" }
        },
        { width, height }
      );
    }
  }
};
</script>
