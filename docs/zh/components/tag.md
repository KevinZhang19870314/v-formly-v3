# Tag 标签

进行标记和分类的小标签，注： 只支持 checkable 标签模式。

## 代码演示

::: demo

```vue
<template>
  <div>
    <v-formly-v3 ref="form" v-model="data" :meta="meta" layout="horizontal">
    </v-formly-v3>
    <div class="btns">
      <a-button type="primary" @click="changeEnum"> 修改标签 </a-button>
      <a-button type="primary" @click="printData"> 提交 </a-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      meta: {
        properties: {
          like1: {
            type: "number",
            title: "兴趣",
            enum: [
              { value: 1, label: "电影" },
              { value: 2, label: "书" },
              { value: 3, label: "旅行" },
            ],
            ui: {
              component: "tag",
              showRequired: true,
              errors: {
                required: "请至少选择一项",
              },
              checkedChange: (checked) => console.log("checkedChange", checked),
              change: (value) => console.log("change", value),
            },
          },
          like2: {
            type: "number",
            title: "no label",
            enum: ["电影", "书", "旅行"],
            ui: {
              component: "tag",
            },
          },
          like3: {
            type: "number",
            title: "禁用状态",
            readOnly: true,
            enum: ["电影", "书", "旅行"],
            ui: {
              component: "tag",
            },
            default: ["电影", "书"],
          },
        },
        required: ["like1"],
      },
    };
  },
  methods: {
    changeEnum() {
      const ctx = this.$refs.form.getContext("/like1");
      if (ctx) {
        ctx.meta.enum = [
          { value: 1, label: "new 电影" },
          { value: 2, label: "new 书" },
          { value: 3, label: "new 旅行" },
        ];
      }
    },
    async printData() {
      const valid = await this.$refs.form.validate();
      if (valid) {
        this.$message.info(JSON.stringify(this.data));
      }
    },
  },
};
</script>
```

:::

## API

### meta 属性

| 成员        | 说明     | 类型                            | 默认值 |
| ----------- | -------- | ------------------------------- | ------ |
| `:enum`     | 数据源   | `any[] \| array<{value, label>` | -      |
| `:readOnly` | 禁用状态 | `boolean`                       | -      |

### meta.ui 属性

| 成员             | 说明                     | 类型                | 默认值 |
| ---------------- | ------------------------ | ------------------- | ------ |
| `@change`        | 点击标签时触发的回调     | `function(value)`   | -      |
| `@checkedChange` | 设置标签的选中状态的回调 | `function(checked)` | -      |
