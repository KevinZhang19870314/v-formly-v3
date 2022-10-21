# Slider 滑动输入条

滑动型输入器，展示当前值和可选范围。

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
          count: {
            type: "number",
            title: "数量(初始值)",
            ui: {
              component: "slider",
              change: (val) => console.log("change", val),
              afterChange: (val) => console.log("afterChange", val),
            },
            default: 10,
          },
          count1: {
            type: "number",
            title: "禁用状态",
            readOnly: true,
            ui: {
              component: "slider",
            },
            default: 10,
          },
          count2: {
            type: "number",
            title: "step(0.01)",
            ui: {
              component: "slider",
            },
            minimum: 0,
            maximum: 1,
            multipleOf: 0.01,
          },
          count3: {
            type: "number",
            title: "tipFormatter",
            ui: {
              component: "slider",
              tipFormatter: (val) => `${val}%`,
            },
          },
          count4: {
            type: "number",
            title: "隐藏 Tooltip",
            ui: {
              component: "slider",
              tipFormatter: null,
            },
          },
          count5: {
            type: "number",
            title: "始终显示 Tooltip",
            ui: {
              component: "slider",
              tooltipVisible: true,
            },
          },
          range: {
            type: "number",
            title: "范围(双滑块模式)",
            ui: {
              component: "slider",
              range: true,
            },
            default: [10, 20],
          },
          range1: {
            type: "number",
            title: "禁用状态(双滑块模式)",
            readOnly: true,
            ui: {
              component: "slider",
              range: true,
            },
            default: [10, 20],
          },
          range2: {
            type: "number",
            title: "marks",
            ui: {
              component: "slider",
              marks: {
                0: "0°C",
                26: "26°C",
                37: "37°C",
                100: (h) => ({
                  style: {
                    color: "#f50",
                  },
                  label: h("strong", null, "100°C"),
                }),
              },
            },
            default: 37,
          },
          range3: {
            type: "number",
            title: "marks range",
            ui: {
              component: "slider",
              range: true,
              marks: {
                0: "0°C",
                26: "26°C",
                37: "37°C",
                100: (h) => ({
                  style: {
                    color: "#f50",
                  },
                  label: h("strong", null, "100°C"),
                }),
              },
            },
            default: [26, 37],
          },
          range4: {
            type: "number",
            title: "included=false",
            ui: {
              component: "slider",
              included: false,
              marks: {
                0: "0°C",
                26: "26°C",
                37: "37°C",
                100: (h) => ({
                  style: {
                    color: "#f50",
                  },
                  label: h("strong", null, "100°C"),
                }),
              },
            },
            default: 37,
          },
          range5: {
            type: "number",
            title: "marks & step",
            ui: {
              component: "slider",
              marks: {
                0: "0°C",
                26: "26°C",
                37: "37°C",
                100: (h) => ({
                  style: {
                    color: "#f50",
                  },
                  label: h("strong", null, "100°C"),
                }),
              },
            },
            default: 0,
            multipleOf: 10,
          },
          range6: {
            type: "number",
            title: "dots",
            ui: {
              component: "slider",
              dots: true,
            },
            multipleOf: 10,
            default: 40,
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

| 成员            | 说明   | 类型        | 默认值 |
| ------------- | ---- | --------- | --- |
| `:minimum`    | 最小值  | `number`  | 0   |
| `:maximum`    | 最大值  | `number`  | 100 |
| `:multipleOf` | 倍数   | `number`  | 1   |
| `:readOnly`   | 禁用状态 | `boolean` | -   |

### meta.ui 属性

| 成员             | 说明                                            | 类型                        | 默认值 |
| -------------- | --------------------------------------------- | ------------------------- | --- |
| `@change`      | 当`Slider`的值发生改变时，会触发`change`事件，并把改变后的值作为参数传入。 | `function(value: number)` | -   |
| `@afterChange` | 与`mouseup`触发时机一致，把当前值作为参数传入。                  | `function(value: number)` | -   |

::: tip 注意
自定义字符的优先级：slot > character <br/>
`multipleOf`如果小于1会出现 ajv 校验报错的情况，解决方案可参考 [multipleofprecision](https://ajv.js.org/options.html#multipleofprecision)
:::
