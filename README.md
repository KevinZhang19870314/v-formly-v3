# v-formly-v3

[v-formly-v3](https://kevinzhang19870314.github.io/v-formly-v3/zh/) 是 vue 3 的动态（JSON 驱动）表单库。

<div class="features">
  <div class="feature">
    <h2>简洁至上</h2>
    <p>通过标准JSON Schema & Ajv Validator生成复杂的动态表单及校验，快速、简洁、高效。</p>
  </div>
  <div class="feature">
    <h2>可复用性</h2>
    <p>通过JSON的形式生成表单模板，一份表单简单修改即可多处复用！使您能够快速开发表单页面，相比编写传统的html form表单，使用JSON形式定义表单能够极大的提高了开发效率。</p>
  </div>
  <div class="feature">
    <h2>Vue 驱动</h2>
    <p>目前支持Vue 3.x，组件库支持<a href="https://antdv.com/components/overview-cn" target="_blank">antdv v3</a> & <a href="https://element-plus.org/zh-CN/" target="_blank">element-plus</a>，Vue 3.x的其他UI库（DevUI等）支持正在开发中。。。</p>
  </div>
</div>

## 快速开始

### 文档 & Demo

[文档](https://kevinzhang19870314.github.io/v-formly-v3/zh/)

[Stackblitz](https://stackblitz.com/edit/github-r1j1ut?file=src%2FApp.vue)

[CodeSandbox](https://codesandbox.io/s/nifty-sea-93ycqy)

### 安装

**推荐使用 [vite cli](https://cn.vitejs.dev/) 搭建项目**

搭建完成后:

使用`yarn`安装`v-formly-v3`：

```sh
yarn add v-formly-v3
```

或者使用`npm`安装它：

```sh
npm i v-formly-v3 --save
```

### 使用

#### 基于 antdv v3 组件库

```ts
import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "element-plus/dist/index.css";
import * as antIcons from "@ant-design/icons-vue";
import VFormly from "v-formly-v3/antdv";

const app = createApp(App);
app.use(Antd);
Object.keys(antIcons).forEach((key) => {
  app.component(key, (antIcons as any)[key]);
});
app.config.globalProperties.$antIcons = antIcons;

app.use(VFormly, {
  ui: {
    errors: {
      required: "必填项",
    },
  },
});
app.mount("#app");
```

#### 基于 element-plus 组件库

```ts
import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as elIcons from "@element-plus/icons-vue";
import VFormly from "v-formly-v3/element";

const app = createApp(App);
app.use(ElementPlus);
for (const [key, component] of Object.entries(elIcons)) {
  app.component(key, component);
}
app.config.globalProperties.$elIcons = elIcons;

app.use(VFormly, {
  lib: "element",
  ui: {
    errors: {
      required: "必填项",
    },
  },
});
app.mount("#app");
```

## 其他

不论是学习还是使用 v-formly-v3，有任何问题可以添加 QQ 群：610930944，我们为你解答关于使用 v-formly-v3 过程中的的任何疑难杂症！

<img src="https://github.com/KevinZhang19870314/v-formly-v3/blob/main/public/qq.jpg" />

MIT Licensed | Copyright © 2022-present v-formly-v3
