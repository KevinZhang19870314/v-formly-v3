# Radio 单选框

单选框。

## 代码演示

::: demo

```vue
<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta" :layout="'horizontal'">
    </v-formly-v3>
    <div class="btns">
      <a-button type="primary" @click="setFormat"> 设置规格 </a-button>
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>
<script>
export default {
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
          single: {
            title: "基本",
            type: "string",
            ui: {
              showRequired: true,
              component: "radio",
              options: ["同意"],
            },
          },
          multiple: {
            title: "规格",
            type: "string",
            default: "中",
            ui: {
              component: "radio",
              options: ["大", "中", "小"],
            },
          },
          buttonStyle: {
            title: "按钮样式",
            type: "string",
            ui: {
              component: "radio",
              options: [
                { label: "北京", value: "北京" },
                { label: "上海", value: "上海" },
                { label: "深圳", value: "深圳", disabled: true },
                { label: "广州", value: "广州" },
              ],
              radioType: "button",
              buttonStyle: "outline",
            },
          },
          buttonStyleSolid: {
            title: "按钮样式",
            type: "string",
            default: "上海",
            ui: {
              component: "radio",
              options: [
                { label: "北京", value: "北京" },
                { label: "上海", value: "上海" },
                { label: "深圳", value: "深圳", disabled: true },
                { label: "广州", value: "广州" },
              ],
              radioType: "button",
              buttonStyle: "solid",
            },
          },
          vertical: {
            title: "竖向排列",
            type: "string",
            ui: {
              component: "radio",
              options: ["大", "中", "小"],
              direction: "vertical",
            },
          },
        },
        required: ["name", "single"],
      },
      formData: { name: "kevin zhang" },
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
    setFormat() {
      const context = this.$refs.form.getContext("/multiple");
      if (context) {
        context.ui.options = ["上", "右", "下", "左"];
        context.value = "下";
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

### meta 属性

| 成员        | 说明     | 类型      | 默认值 |
| ----------- | -------- | --------- | ------ |
| `:readOnly` | 禁用状态 | `boolean` | -      |

### meta.ui 属性

参考 RadioGroup 组件属性

| 成员            | 说明                                               | 类型                   | 默认值  |
| --------------- | -------------------------------------------------- | ---------------------- | ------- |
| `:component`    | 指定组件为'radio'                                  | `string`               | `radio` |
| `:direction`    | 单选框展示方向，默认横向展示，`vertical`则竖向展示 | `string`               | -       |
| `:showRequired` | 是否显示标签前的红色\*号                           | `boolean`              | false   |
| `@change`       | 选项变化时的回调函数                               | `Function(value: any)` | -       |
