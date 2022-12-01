# 介绍

v-formly-v3 是 vue 的动态（JSON 驱动）表单库。它通过[JSON Schema](https://json-schema.org/)和[Ajv Validator](https://ajv.js.org/)结合生成复杂的动态表单及校验，快速、简洁、高效。通过使用 v-formly-v3 及对应的组件库即可快速构造一个 Form 表单，目前支持 Vue 3.x，组件库支持[antdv v3](https://www.antdv.com/components/overview-cn)、[element-plus](https://element-plus.org/zh-CN/)、[vue-devui](https://vue-devui.github.io/)。

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

通过上述简单的表单示例，我们大概了解了如何开始使用 v-formly，更多内容请查看[组件](/zh/components/README.md)。

## 快速开始

我们通过创建一个简单的示例项目来告诉大家如何使用 v-formly-v3。

## 创建一个项目

使用命令行进行初始化。

```sh
# npm 6.x
npm create vite@latest hello-formly --template vue-ts

# npm 7+, extra double-dash is needed:
npm create vite@latest hello-formly -- --template vue-ts

# yarn
yarn create vite hello-formly --template vue-ts

# pnpm
pnpm create vite hello-formly --template vue-ts
```

## 安装：使用哪个组件库就安装哪个。

### 安装 ant-design-vue 3.x

`$ npm i --save ant-design-vue`

`$ npm i --save @ant-design/icons-vue`

### 安装 element-plus

`$ npm i --save element-plus`

`$ npm i --save @element-plus/icons-vue`

### 安装 vue-devui

`npm i vue-devui @devui-design/icons devui-theme`

## 安装 v-formly-v3

使用 yarn 安装`yarn add v-formly-v3`或者使用 npm 安装`npm i v-formly-v3 --save`，然后在你的`main.ts`入口文件添加如下内容：

### 对于使用 ant-design-vue 3.x 组件库

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
      required: "必填项",
    },
  },
});
app.mount("#app");
```

### 对于使用 element-plus 组件库

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

### 对于使用 vue-devui 组件库

```ts
import { createApp } from "vue";
import App from "./App.vue";
import DevUI from "vue-devui";
import "vue-devui/style.css";
import "@devui-design/icons/icomoon/devui-icon.css";
import { ThemeServiceInit, infinityTheme } from "devui-theme";
import VFormly from "v-formly-v3/devui";

ThemeServiceInit({ infinityTheme }, "infinityTheme");

const app = createApp(App);
app.use(DevUI);
app.use(VFormly, {
  lib: "devui",
  ui: {
    errors: {
      required: "必填项",
    },
  },
});
app.mount("#app");
```

## 使用 v-formly-v3 创建表单

打开`App.vue`文件，删除里面的内容，复制下面的代码进去并保存。

```vue
<template>
  <div class="wrapper">
    <v-formly-v3 ref="form" v-model="data" :meta="meta"> </v-formly-v3>
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, toRaw, unref } from "vue";

const form = ref(null);
const meta = {
  type: "object",
  properties: {
    name: {
      title: "姓名",
      type: "string",
      default: "kevin",
      readOnly: false,
      ui: {
        showRequired: true,
        errors: {
          required: "请输入姓名",
        },
        change: (val: string) => console.log("val", val),
      },
    },
    desc: {
      title: "描述",
      type: "string",
      default: "Base on technical, but not limited on it!",
    },
    enable: {
      title: "启用",
      type: "boolean",
      default: true,
    },
  },
  required: ["name"],
};

let data: any = ref({});

function clear() {
  data.value = null;
}

async function submit() {
  let valid = await (form.value as any).validate();
  if (valid) {
    console.log(toRaw(unref(data)));
  }
}
</script>

<style>
.wrapper {
  margin: auto;
  max-width: 600px;
  margin-top: 100px;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.ant-btn + .ant-btn {
  margin-left: 8px;
}
</style>
```

此时，你已经完成了一个简单的使用 v-formly-v3 的项目了，这时运行`yarn dev`或者`npm run dev`，浏览器中打开[http://localhost:5173/](http://localhost:5173/)会看到一个简单的表单如下所示：
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3106b519fb864a92b225a6dae446dd64~tplv-k3u1fbpfcp-watermark.image?)
打开控制台，点击“提交”按钮，你会看到提交的表单数据，非常简单！（PS：如果此时没有看到这个页面，请参考[在线示例](https://codesandbox.io/s/nifty-sea-93ycqy?file=/src/main.ts)查找问题）

## 参考

**v-formly-v3 参考了以下文章及三方库**：

1. [Create a Vue.js component library](https://itnext.io/create-a-vue-js-component-library-as-a-module-part-1-a1116e632751)；

2. [基于 Angular 的动态表单库@delon/form](https://ng-alain.com/form/getting-started/zh)；

3. [antdv v3](https://www.antdv.com/components/overview-cn)；

4. [element-plus](https://element-plus.org/zh-CN/)；

5. [vue-devui](https://vue-devui.github.io/)；
