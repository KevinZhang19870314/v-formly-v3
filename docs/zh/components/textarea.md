# Textarea 多行文本框

一般用于多行字符串。

## 代码演示

::: demo

```vue
<template>
  <div>
    <v-formly-v3 ref="form" v-model="data" :meta="meta" layout="horizontal">
    </v-formly-v3>
    <div class="btns">
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
          remark: {
            type: "string",
            title: "描述",
            ui: {
              component: "textarea",
              showRequired: true,
              change: (val) => console.log("change", val),
              focus: (e) => console.log("focus", e),
              blur: (e) => console.log("blur", e),
              pressEnter: (e) => console.log("pressEnter", e),
            },
          },
          remark6: {
            type: "string",
            title: "指定 autoSize",
            ui: {
              component: "textarea",
              placeholder: "{ minRows: 2, maxRows: 6 }",
              autoSize: { minRows: 2, maxRows: 6 },
            },
          },
          remark1: {
            type: "string",
            title: "自适应内容高度",
            default:
              "content content content content content content content content content content content content content content content content content content content content content content content content",
            ui: {
              component: "textarea",
            },
          },
          remark2: {
            type: "string",
            title: "不自适应内容高度",
            default:
              "content content content content content content content content content content content content content content content content content content content content content content content content",
            ui: {
              component: "textarea",
              autoSize: false,
            },
          },
          remark3: {
            type: "string",
            title: "禁用状态",
            default: "content content content",
            ui: {
              component: "textarea",
            },
            readOnly: true,
          },
          remark4: {
            type: "string",
            title: "显示清除按钮",
            default: "content content content",
            ui: {
              component: "textarea",
              allowClear: true,
            },
          },
          remark5: {
            type: "string",
            title: "最大长度",
            maxLength: 10,
            ui: {
              component: "textarea",
              placeholder: "maxLength = 10",
            },
          },
        },
        required: ["remark"],
      },
    };
  },
  methods: {
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

| 成员         | 说明     | 类型      | 默认值 |
| ------------ | -------- | --------- | ------ |
| `:maxLength` | 最大长度 | `number`  | -      |
| `:readOnly`  | 禁用状态 | `boolean` | -      |

### meta.ui 属性

| 成员           | 说明                                                                      | 类型                | 默认值 |
| -------------- | ------------------------------------------------------------------------- | ------------------- | ------ |
| `:autosize`    | 自适应内容高度，可设置为`true \| false`或对象：{ minRows: 2, maxRows: 6 } | `boolean \| object` | true   |
| `:placeholder` | 默认文字                                                                  | `string`            | -      |
| `:allowClear`  | 可以点击清除图标删除内容                                                  | `boolean`           | -      |
| `@change`      | 内容变更事件                                                              | `function(value)`   | -      |
| `@focus`       | 焦点事件                                                                  | `function(e)`       | -      |
| `@blur`        | 失焦事件                                                                  | `function(e)`       | -      |
| `@pressEnter`  | 按下回车事件                                                              | `function(e)`       | -      |
