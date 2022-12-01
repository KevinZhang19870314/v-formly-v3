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

**我们只列出属性中不一致的或新添加的，一致的地方请参考 具体组件库 文档**

### meta 属性

| 成员        | 说明     | 类型      | 默认值 |
| ----------- | -------- | --------- | ------ |
| `:readOnly` | 禁用状态 | `boolean` | -      |

### meta.ui 属性(antdv)

| 成员                           | 说明                      | 类型                                      | 默认值 |
| ------------------------------ | ------------------------- | ----------------------------------------- | ------ |
| `:checkedChildren`             | 选中时的内容              | `string`                                  | -      |
| `:slotNameOfCheckedChildren`   | 选中时的内容，slot 名称   | `string`                                  | -      |
| `:unCheckedChildren`           | 非选中时的内容            | `string`                                  | -      |
| `:slotNameOfUnCheckedChildren` | 非选中时的内容，slot 名称 | `string`                                  | -      |
| `@change`                      | 输入框内容变化时的回调    | `Function(checked:Boolean, event: Event)` | -      |

### meta.ui 属性(element)

| 成员      | 说明                   | 类型                                      | 默认值 |
| --------- | ---------------------- | ----------------------------------------- | ------ |
| `@change` | 输入框内容变化时的回调 | `Function(checked:Boolean, event: Event)` | -      |

### meta.ui 属性(devui)

| 成员                          | 说明                             | 类型                        | 默认值 |
| ----------------------------- | -------------------------------- | --------------------------- | ------ |
| `:slotNameOfCheckedContent`   | 打开状态的文案，slot 名称        | `string`                    | -      |
| `:slotNameOfUnCheckedContent` | 关闭状态的文案，slot 名称        | `string`                    | -      |
| `@change`                     | 开关打开返回 true,关闭返回 false | `Function(checked:Boolean)` | -      |

::: tip 注意
不支持 devui 的`active-value` 和 `inactive-value`属性，这是由`BooleanMeta`的特性决定的。
:::
