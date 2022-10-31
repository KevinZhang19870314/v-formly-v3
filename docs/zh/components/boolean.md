---
sidebarDepth: 0
---

# Boolean 开关

开关选择器。

## 代码演示

::: block
BooleanView
:::

## API

### meta 属性

| 成员        | 说明     | 类型      | 默认值 |
| ----------- | -------- | --------- | ------ |
| `:readOnly` | 禁用状态 | `boolean` | -      |

### meta.ui 属性

| 成员                           | 说明                      | 类型                                      | 默认值 |
| ------------------------------ | ------------------------- | ----------------------------------------- | ------ |
| `:checkedChildren`             | 选中时的内容              | `string`                                  | -      |
| `:slotNameOfCheckedChildren`   | 选中时的内容，slot 名称   | `string`                                  | -      |
| `:unCheckedChildren`           | 非选中时的内容            | `string`                                  | -      |
| `:slotNameOfUnCheckedChildren` | 非选中时的内容，slot 名称 | `string`                                  | -      |
| `@change`                      | 输入框内容变化时的回调    | `Function(checked:Boolean, event: Event)` | -      |
