# 介绍

v-formly-v3 是 vue 的动态（JSON 驱动）表单库。它通过[JSON Schema](https://json-schema.org/)和[Ajv Validator](https://ajv.js.org/)结合生成复杂的动态表单及校验，快速、简洁、高效。通过使用 v-formly-v3 及对应的组件库即可快速构造一个 Form 表单，目前支持 Vue 3.x，组件库支持[antdv v3](https://www.antdv.com/components/overview-cn)和[element-plus](https://element-plus.org/zh-CN/)，Vue 3.x 的其他 UI 库（DevUI 等）支持正在开发中。

v-formly-v3 内置封装了 15+ 的组件，同时 v-formly-v3 也支持[自定义封装组件](/zh/components/custom-components.md)，从而可以让你轻松构建复杂的动态表单。

## 一个简单示例

::: block 一个简单的 v-formly-v3 示例，请打开控制台查看表单提交结果
SimpleView
:::

**针对上述示例我们做以下几点解释**：

1. v-formly-v3 支持 v-model 双向绑定，可通过修改 data 来随时改变 form 表单数据；

2. 传入的 schema 是`JSON-Schema`结构 + 嵌套`ui`的组合，v-formly 使用 schema 来解析并渲染表单页面；

3. 以上表单包括两个`string`类型和一个`boolean`类型的内置`component`.

   a. 其中`name`为必填项（`required: ["name"]`体现出来），且默认内容为“kevin”，其中`ui.showRequired`为 true 会添加 label 前面的红色星号；

   b. `desc`非必填，默认内容为“Base on technical, but not limited on it!”，且提供了 change 事件，当输入改变时触发；

   c. `enable`为一个简单的 AntDv 的`Switch`组件。

通过上述简单的表单示例，我们大概了解了如何开始使用 v-formly，更多内容请查看[组件](/zh/components/)。

## 快速开始

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

## 参考

**v-formly-v3 参考了以下文章及三方库**：

1. [Create a Vue.js component library](https://itnext.io/create-a-vue-js-component-library-as-a-module-part-1-a1116e632751)；

2. [基于 Angular 的动态表单库@delon/form](https://ng-alain.com/form/getting-started/zh)；

3. [antdv v3](https://www.antdv.com/components/overview-cn)；

4. [element-plus](https://element-plus.org/zh-CN/)；
