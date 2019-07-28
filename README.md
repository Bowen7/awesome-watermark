# awesome-watermark

可用于 react，vue 和微信小程序（更多平台正在开发）的水印组件

### 使用

##### 1.安装依赖

```
npm install awesome-watermark
```

##### 2.引入组件

react:

```js
import Watermark from "awesome-watermark/react";
```

vue:

```js
import Watermark from "awesome-watermark/vue";
```

微信小程序（需构建 npm）:

```json
{
	"usingComponents": {
		"watermark": "awesome-watermark"
	}
}
```

##### 3.具体使用

由于 Watermark 组件使用`position:absolute;`定位，确保你需要加上水印的区域 position 值不为 static；且因需计算水印位置，要有固定高度，具体可见下面的实例：

React:

```jsx
import React, { Component } from "react";
import Watermark from "awesome-watermark/react";
import "./index.css";

class Avatar extends Component {
	render() {
		return (
			<div className="avatar">
				<Watermark
					text="bowen"
					textStyle={{ color: "#fff", fontSize: 20 }}
				/>
			</div>
		);
	}
}

export default Avatar;
```

```css
.avatar {
	width: 30%;
	height: 300px;
	border-radius: 50%;
	border: 1px solid #000;
	background: url(../../assets/27432981.jpeg);
	background-size: cover;
	position: relative;
}
```

Vue:

```vue
<template>
	<div class="avatar">
		<Watermark v-bind:text="text" />
	</div>
</template>

<script>
import Watermark from "awesome-watermark/vue";
export default {
	name: "Avatar",
	components: {
		Watermark
	},
	data: function() {
		return {
			text: "bowen"
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.avatar {
	width: 300px;
	height: 300px;
	border-radius: 50%;
	border: 1px solid #000;
	background: url(../../assets/27432981.jpeg);
	background-size: cover;
	position: relative;
}
</style>
```

微信小程序:

```html
<view class="avatar">
	<image src="../../assets/27432981.jpeg" class="img"></image>
	<watermark text="bowen"></watermark>
</view>
```

```css
.avatar {
	width: 300px;
	height: 300px;
	border-radius: 50%;
	border: 1px solid #000;
	background-size: cover;
	position: relative;
	overflow: hidden;
}

.img {
	width: 300px;
	height: 300px;
}
```

##### 5.使用效果

![效果图](https://blog-mars.oss-cn-hangzhou.aliyuncs.com/assets/1BB88551-31B8-4794-93A7-98ACF4D019DC.png)

### Api

|  属性名   |                      类型                       | 默认值 |                  说明                  |
| :-------: | :---------------------------------------------: | :----: | :------------------------------------: |
|   text    |                String(required)                 |   ""   | 水印的文字，该属性更改后会引起重新渲染 |
|   angle   |                     Number                      |   30   |           水印文字旋转的角度           |
|    row    |                     Number                      |   2    |               水印的行数               |
|    col    |                     Number                      |   3    |               水印的列数               |
| textStyle | react 和 vue 中为 Object，微信小程序中为 String |   {}   |         水印文字的 style 属性          |

### Todo

-   [ ] 实现 react hooks 版本
-   [ ] 拓展更多小程序平台
-   [ ] api 拓展
