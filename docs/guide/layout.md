# 布局

v-formly-v3 表单支持三种布局，水平`horizontal`,垂直`vertical`,行内`inline`。

## 代码演示

::: demo

```vue
<template>
  <div>
    <a-radio-group
      v-model="mode"
      style="margin-bottom: 32px; margin-left: 64px"
    >
      <a-radio-button value="horizontal"> 水平 </a-radio-button>
      <a-radio-button value="vertical"> 垂直 </a-radio-button>
      <a-radio-button value="inline"> 行内 </a-radio-button>
    </a-radio-group>
    <v-formly-v3 ref="form" v-model="data" :meta="meta" :layout="mode">
    </v-formly-v3>
  </div>
</template>
<script>
export default {
  name: "LayoutView",
  data: () => {
    return {
      mode: "inline",
      meta: {
        type: "object",
        properties: {
          name: {
            title: "姓名",
            type: "string",
            default: "kevin",
            ui: {
              showRequired: true,
              errors: {
                required: "请输入姓名",
              },
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
};
</script>
<style lang=""></style>
```

:::
