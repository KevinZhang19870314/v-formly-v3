# Checkbox 多选框

多选框

## 代码演示

::: demo

```vue
<template>
  <div>
    <v-formly ref="form" v-model="data" :meta="meta" :layout="'horizontal'">
    </v-formly>
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
          fruits: {
            title: "水果",
            type: "string",
            enum: ["Apple", "Pera", "Orange"],
            default: ["Orange"],
            ui: {
              component: "checkbox",
            },
          },
          fruits1: {
            title: "水果1",
            type: "string",
            enum: [
              { label: "Apple", value: "Apple" },
              { label: "Pera", value: "Pera" },
              { label: "Orange", value: "Orange" },
            ],
            default: ["Apple"],
            ui: {
              component: "checkbox",
            },
          },
          colors: {
            title: "颜色",
            type: "string",
            enum: [
              "Red",
              "Orange",
              "Yellow",
              "Green",
              "Blue",
              "Purple",
              "White",
              "Black",
            ],
            default: ["Yellow", "White"],
            ui: {
              component: "checkbox",
              span: 4,
            },
          },
        },
        required: ["name"],
      },
      data: { name: "kevin zhang" },
    };
  },
  methods: {
    clear() {
      this.data = null;
      // this.$refs.form.reset(null);
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
<style lang="less" scoped></style>
```

:::

## API

**我们只列出属性中不一致的或新添加的，一致的地方请参考 AntDv 文档**

### meta 属性

| 成员        | 说明                                 | 类型                                                                                                                  | 默认值 |
| ----------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ------ |
| `:enum`     | 数据源，当数据源存在于表示一组多选框 | `string[] \| Array<{ label: string value: string disabled?: boolean, indeterminate?: boolean, onChange?: function }>` | -      |
| `:readOnly` | 禁用状态                             | `boolean`                                                                                                             | -      |

### meta.ui 属性

**参考 Checkbox Group 的属性**

| 成员      | 说明           | 类型                     | 默认值 |
| --------- | -------------- | ------------------------ | ------ |
| `@change` | 变化时回调函数 | `Function(checkedValue)` | -      |
