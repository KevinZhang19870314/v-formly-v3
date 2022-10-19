# 介绍

v-formly 是 vue 的动态（JSON 驱动）表单库。它通过[JSON Schema](https://json-schema.org/)和[Ajv Validator](https://ajv.js.org/)结合生成复杂的动态表单及校验，快速、简洁、高效。通过使用 v-formly 及对应的组件库即可快速构造一个 Form 表单，目前支持 Vue 2.x & [Ant Design of Vue v1](https://1x.antdv.com/docs/vue/introduce-cn/)，Vue 2.x 和 Vue 3.x 的其他 UI 库（AntDv v3，ElementUI 等）支持正在开发中。

v-formly 内置封装了所有的在 Ant Design of Vue 中的`Data Entry`下面的组件，同时 v-formly 也支持[自定义封装组件](TODO)，从而可以让你轻松构建复杂的动态表单。

## 一个简单示例

::: demo 一个简单的 v-formly 示例，请打开控制台查看表单提交结果

```vue
<template>
  <div>
    <v-formly ref="form" v-model="data" :meta="meta"> </v-formly>
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseForm",
  data: function () {
    return {
      meta: {
        type: "object",
        properties: {
          name: {
            title: "姓名",
            type: "string",
            default: "kevin",
            ui: {
              showRequired: true,
            },
          },
          desc: {
            title: "描述",
            type: "string",
            default: "Base on technical, but not limited on it!",
            ui: {
              change: (val) => {
                console.log("val = ", val);
              },
            },
          },
          enable: {
            title: "启用",
            type: "boolean",
          },
        },
        required: ["name"],
      },
      data: { enable: true },
    };
  },
  methods: {
    clear() {
      this.data = null;
    },
    async submit() {
      let valid = await this.$refs.form.validate();
      if (valid) {
        console.log(this.data);
      }
    },
  },
};
</script>
```

:::

**针对上述示例我们做以下几点解释**：

1. v-formly 支持 v-model 双向绑定，可通过修改 data 来随时改变 form 表单数据；

2. 传入的 schema 是`JSON-Schema`结构 + 嵌套`ui`的组合，v-formly 使用 schema 来解析并渲染表单页面；

3. 以上表单包括两个`string`类型和一个`boolean`类型的内置`component`.

   a. 其中`name`为必填项（`required: ["name"]`体现出来），且默认内容为“kevin”，其中`ui.showRequired`为 true 会添加 label 前面的红色星号；

   b. `desc`非必填，默认内容为“Base on technical, but not limited on it!”，且提供了 change 事件，当输入改变时触发；

   c. `enable`为一个简单的 AntDv 的`Switch`组件。

通过上述简单的表单示例，我们大概了解了如何开始使用 v-formly，更多内容请查看[组件](/zh/components/)。

## 快速开始

### 安装

<br />

使用`yarn`安装`v-formly`：

```sh
yarn add v-formly
```

或者使用`npm`安装它：

```sh
npm i v-formly --save
```

### 使用

<br />

```js
// 别忘了引入Ant Design of Vue 1.7.8，v-formly当前只支持这个版本。

import VFormly from "v-formly";

// ...
Vue.use(VFormly);
// ...
```

## 参考

**v-formly 参考了以下文章及三方库**：

1. [Create a Vue.js component library](https://itnext.io/create-a-vue-js-component-library-as-a-module-part-1-a1116e632751)；

2. [基于 Angular 的动态表单库@delon/form](https://ng-alain.com/form/getting-started/zh)；

3. [Ant Design of Vue 1.7.8](https://1x.antdv.com/docs/vue/introduce-cn/)；
