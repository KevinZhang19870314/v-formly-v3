# Object 对象

创建对象，`type="object"`。

## 代码演示

::: demo

```vue
<template>
  <div>
    <v-formly ref="form" v-model="formData" :meta="meta"> </v-formly>
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "StringView",
  data: function () {
    return {
      meta: {
        type: "object",
        properties: {
          name: {
            title: "名称",
            type: "string",
            ui: {
              showRequired: true,
              placeholder: "Basic usage",
              errors: {
                required: "请输入",
              },
              change: (val) => console.log(val),
            },
          },
          obj: {
            title: "前缀和后缀",
            type: "object",
            properties: {
              obj1: {
                title: "子对象字段1",
                type: "string",
                ui: {
                  showRequired: true,
                },
              },
              obj2: {
                title: "子对象字段2",
                type: "number",
              },
            },
            required: ["obj1"],
          },
        },
        required: ["name"],
      },
      formData: {},
    };
  },
  methods: {
    clear() {
      this.formData = null;
      // Below line do the same thing
      // this.$refs.form.reset(null);
    },
    async submit() {
      let valid = await this.$refs.form.validate();
      if (valid) {
        console.log(this.formData);
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
```

:::

## API

**我们只列出属性中不一致的或新添加的，一致的地方请参考 AntDv 文档**

对象组件是一个包裹组件，包裹着诸如`string`，`number`等类型的组件，所以API请参考具体包裹组件即可。
