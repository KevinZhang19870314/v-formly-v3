# v-formly-v3

**Languages: English (this file), [中文](README.md).**

[v-formly-v3](https://kevinzhang19870314.github.io/v-formly-v3/zh/) is a dynamic (JSON driven) form library for vue 3.

<div class="features">
  <div class="feature">
    <h2>Simplicity</h2>
    <p>Generate complex dynamic forms and validation through standard JSON Schema & Ajv Validator, which is fast, concise and efficient.</p>
  </div>
  <div class="feature">
    <h2>Reusability</h2>
    <p>Generate a form template in the form of JSON, and which can be reused in multiple places with simple modification! Enables you to quickly develop form pages. Compared with writing traditional forms, using JSON to define forms can greatly improve development efficiency.</p>
  </div>
  <div class="feature">
    <h2>Vue Power</h2>
    <p>Currently supports Vue 3.x, component library supports<a href="https://antdv.com/components/overview-cn" target="_blank">antdv v3</a> & <a href="https://element-plus.org/zh-CN/" target="_blank">element-plus</a>, other UI libraries (DevUI, etc.) support for Vue 3.x are under development. . .</p>
  </div>
</div>

## Quick start

### Docmentation & Demo

[Introduction](https://juejin.cn/post/7161591837407805476/)

[Document](https://kevinzhang19870314.github.io/v-formly-v3/zh/)

[Stackblitz antdv](https://stackblitz.com/edit/github-r1j1ut?file=src%2FApp.vue)，
[CodeSandbox antdv](https://codesandbox.io/s/nifty-sea-93ycqy)

[Stackblitz element](https://stackblitz.com/edit/github-r1j1ut-ejddhf?file=src%2FApp.vue)，
[CodeSandbox element](https://codesandbox.io/s/nifty-sea-vb5h6v)

### Install

**It is recommended to use [vite cli](https://cn.vitejs.dev/) to build the project**

After the build is complete:

Use `yarn` to install `v-formly-v3`：

```sh
yarn add v-formly-v3
```

or `npm`:

```sh
npm i v-formly-v3 --save
```

### Usage

#### Based on antdv v3 component library

```ts
import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
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
      required: "required",
    },
  },
});
app.mount("#app");
```

#### Based on element-plus component library

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
      required: "required",
    },
  },
});
app.mount("#app");
```

MIT Licensed | Copyright © 2022-present v-formly-v3
