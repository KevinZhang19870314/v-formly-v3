---
sidebarDepth: 0
---

# Date 日期选择框

输入或选择日期的控件。

## 代码演示

::: block
DateView
:::

## API

**我们只列出属性中不一致的或新添加的，一致的地方请参考 具体组件库 文档**

### meta 属性

| 成员        | 说明     | 类型      | 默认值 |
| ----------- | -------- | --------- | ------ |
| `:readOnly` | 禁用状态 | `boolean` | -      |

### meta.ui 属性(antdv)

| 成员                    | 说明                              | 类型                                      | 默认值 |
| ----------------------- | --------------------------------- | ----------------------------------------- | ------ |
| `:slotNameOfSuffixIcon` | 自定义的选择框后缀图标，slot 名称 | `string`                                  | -      |
| `@change`               | 输入框内容变化时的回调            | `Function(checked:Boolean, event: Event)` | -      |

### meta.ui 属性(element)

| 成员                        | 说明                            | 类型                    | 默认值 |
| --------------------------- | ------------------------------- | ----------------------- | ------ |
| `:slotNameOfDefault`        | 自定义内容，slot 名称           | `string`                | -      |
| `:slotNameOfRangeSeparator` | 自定义范围分割符内容，slot 名称 | `string`                | -      |
| `@change`                   | 用户确认选定的值时触发          | `(val: typeof v-model)` | -      |
