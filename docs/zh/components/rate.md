---
sidebarDepth: 0
---

# Rate 评分

对评价进行展示，对事物进行快速的评级操作。

## 代码演示

::: block
RateView
:::

## API

**我们只列出属性中不一致的或新添加的，一致的地方请参考 具体组件库 文档**

### meta 属性

| 成员        | 说明     | 类型      | 默认值 |
| ----------- | -------- | --------- | ------ |
| `:maximum`  | 总星数   | `number`  | 5      |
| `:readOnly` | 禁用状态 | `boolean` | -      |

### meta.ui 属性(antdv)

| 成员                   | 说明                     | 类型                      | 默认值 |
| ---------------------- | ------------------------ | ------------------------- | ------ |
| `:character`           | 自定义字符               | `string`                  | -      |
| `:slotNameOfCharacter` | 自定义字符 slot          | `string`                  | -      |
| `@change`              | 选择时的回调             | `function(value: number)` | -      |
| `@hoverChange`         | 鼠标经过时数值变化的回调 | `function(value: number)` | -      |

::: tip 注意
自定义字符的优先级：character > slot
:::

### meta.ui 属性(element)

| 成员      | 说明           | 类型                      | 默认值 |
| --------- | -------------- | ------------------------- | ------ |
| `@change` | 分值改变时触发 | `function(value: number)` | -      |

### meta.ui 属性(devui)

| 成员      | 说明           | 类型                      | 默认值 |
| --------- | -------------- | ------------------------- | ------ |
| `@change` | 分值改变时触发 | `function(value: number)` | -      |
