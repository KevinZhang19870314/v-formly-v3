# Number 数字输入框

通过鼠标或键盘，输入范围内的数值。

## 代码演示

::: demo

```vue
<template>
  <div>
    <v-formly-v3 ref="form" v-model="data" :meta="meta" :layout="'horizontal'">
    </v-formly-v3>
    <div class="btns">
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
          price: {
            type: "number",
            title: "价格",
            minimum: 10,
            maximum: 100,
            multipleOf: 2,
          },
          grade: {
            type: "integer",
            title: "年级",
            default: 3,
          },
          salary: {
            type: "number",
            title: "薪资",
            default: 88888.88,
            ui: { prefix: "$" },
          },
          increase: {
            type: "number",
            title: "薪资涨幅",
            default: 30,
            ui: { unit: "%" },
          },
          hideStep: {
            type: "number",
            title: "隐藏step",
            default: 10000,
            ui: { hideStep: true },
          },
        },
        required: ["name"],
      },
      data: { name: "kevin zhang" },
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

### meta 属性

| 成员                 | 说明                                                    | 类型      | 默认值 |
| -------------------- | ------------------------------------------------------- | --------- | ------ |
| `[minimum]`          | 最小值                                                  | `number`  | -      |
| `[exclusiveMinimum]` | 约束是否包括 `minimum` 值，`true` 表示排除 `minimum` 值 | `boolean` | -      |
| `[maximum]`          | 最大值                                                  | `number`  | -      |
| `[exclusiveMaximum]` | 约束是否包括 `maximum` 值，`true` 表示排除 `maximum` 值 | `boolean` | -      |
| `[multipleOf]`       | 倍数                                                    | `number`  | `1`    |

### meta.ui 属性

| 成员      | 说明     | 类型                                | 默认值 |
| --------- | -------- | ----------------------------------- | ------ |
| `@change` | 变化回调 | `Function(value: number \| string)` | -      |
