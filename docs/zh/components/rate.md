# Rate 评分

对评价进行展示，对事物进行快速的评级操作。

## 代码演示

::: demo

```vue
<template>
  <div>
    <v-formly-v3 ref="form" v-model="data" :meta="meta" layout="horizontal">
      <template v-slot:testSlot>
        <a-icon slot="character" type="heart" />
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
          rate: {
            type: "number",
            title: "评级",
            ui: {
              component: "rate",
              change: (val) => console.log("change", val),
              hoverChange: (val) => console.log("hoverChange", val),
            },
            default: 4,
          },
          rate1: {
            type: "number",
            title: "支持选中半星",
            maximum: 5,
            default: 4.5,
            ui: {
              component: "rate",
              allowHalf: true,
            },
          },
          rate2: {
            type: "number",
            title: "maximum=10",
            maximum: 10,
            default: 4,
            ui: {
              component: "rate",
            },
          },
          rate3: {
            type: "number",
            title: "只读",
            readOnly: true,
            ui: {
              component: "rate",
            },
            default: 1,
          },
          rate4: {
            type: "number",
            title: "禁用点击后清除",
            ui: {
              component: "rate",
              allowClear: false,
            },
            default: 1,
          },
          rate5: {
            type: "number",
            title: "自定义提示信息",
            ui: {
              component: "rate",
              tooltips: ["terrible", "bad", "normal", "good", "wonderful"],
            },
            default: 1,
          },
          rate6: {
            type: "number",
            title: "自定义字符 string",
            ui: {
              component: "rate",
              character: "A",
            },
            default: 1,
          },
          rate7: {
            type: "number",
            title: "自定义字符 slot",
            ui: {
              component: "rate",
              slotNameOfCharacter: "testSlot", // slot
            },
            default: 1,
          },
        },
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

| 成员        | 说明     | 类型      | 默认值 |
| ----------- | -------- | --------- | ------ |
| `:maximum`  | 总星数   | `number`  | 5      |
| `:readOnly` | 禁用状态 | `boolean` | -      |

### meta.ui 属性

| 成员                   | 说明                     | 类型                      | 默认值  |
| ---------------------- | ------------------------ | ------------------------- | ------- |
| `:character`           | 自定义字符               | `string`                  | -       |
| `:slotNameOfCharacter` | 自定义字符 slot          | `string`                  | -       |
| `@change`              | 选择时的回调             | `function(value: number)` | -       |
| `@hoverChange`         | 鼠标经过时数值变化的回调 | `function(value: number)` | -       |

::: tip 注意
自定义字符的优先级：slot > character
:::
