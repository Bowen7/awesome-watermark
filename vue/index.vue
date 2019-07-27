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
import { generateInnerSpans } from "../util";
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
