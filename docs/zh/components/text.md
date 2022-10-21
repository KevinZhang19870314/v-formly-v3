# Text 文本

一般用于直接显示文本。

## 代码演示

::: demo

```vue
<template>
  <div>
    <v-formly-v3 ref="form" v-model="data" :meta="meta" layout="horizontal">
      <template v-slot:testSlot>
        <h1 style="color: green; border: 1px dashed green">slot 类型的 text</h1>
      </template>
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
          name: {
            title: "姓名",
            type: "string",
            ui: {
              showRequired: true,
            },
          },
          id1: {
            title: "title",
            description: "description",
            type: "null",
            ui: {
              component: "text",
              text: "包含 title 和 description 的文本", // string
            },
          },
          id2: {
            type: "null",
            ui: {
              component: "text",
              text: () => "() => string 类型的 text", // () => string
              offsetControl: 5,
            },
          },
          id3: {
            type: "null",
            ui: {
              component: "text",
              html: `<h1 style="color: red">HTML 类型的 text</h1>`, // v-html
              text: "default text",
              offsetControl: 5,
            },
          },
          id4: {
            type: "null",
            ui: {
              component: "text",
              slotNameOfDefault: "testSlot", // slot
              html: `<h1 style="color: red">I am Text</h1>`,
              text: "default text",
              offsetControl: 5,
            },
          },
          id5: {
            type: "null",
            ui: {
              component: "text",
              text: "没有 title 和 offsetControl",
            },
          },
          id6: {
            type: "null",
            ui: {
              component: "text",
              text: "没有 title, offsetControl = 5",
              offsetControl: 5,
            },
          },
          id7: {
            type: "null",
            ui: {
              component: "text",
              text: "没有 title, offsetControl = 4",
              offsetControl: 4,
            },
          },
          id8: {
            type: "null",
            ui: {
              component: "text",
              text: "多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本",
              spanControl: 24,
            },
          },
          address: {
            title: "地址",
            type: "string",
          },
        },
        required: ["name"],
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

### meta.ui 属性

| 成员                 | 说明          | 类型                     | 默认值 |
| -------------------- | ------------- | ------------------------ | ------ |
| `:text`              | 指定的 `text` | `string \| () => string` |        |
| `:html`              | 指定的 `html` | `HTML`                   | -      |
| `:slotNameOfDefault` | 指定的 `slot` | `string`                 | -      |

::: tip 注意
文本显示的优先级：slot > html > text
:::
