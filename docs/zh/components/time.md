---
sidebarDepth: 0
---

# Time 时间选择器

输入或选择时间的控件。

## 代码演示

::: block
TimeView
:::

## API

**我们只列出属性中不一致的或新添加的，一致的地方请参考 具体组件库 文档**

### meta 属性

| 成员        | 说明     | 类型      | 默认值 |
| ----------- | -------- | --------- | ------ |
| `:readOnly` | 禁用状态 | `boolean` | -      |

### meta.ui 属性(antdv)

| 成员                    | 说明                                  | 类型          | 默认值 |
| ----------------------- | ------------------------------------- | ------------- | ------ |
| `:component`            | 指定组件为'time'                      | `string`      | `time` |
| `:slotNameOfAddon`      | 选择框底部显示自定义的内容，slot 名称 | `string`      | -      |
| `:slotNameOfSuffixIcon` | 自定义的选择框后缀图标，slot 名称     | `string`      | -      |
| `:slotNameOfClearIcon`  | 自定义的清除图标，slot 名称           | `string`      | -      |
| `@change`               | 输入框内容变化时的回调                | `function(e)` | -      |

### meta.ui 属性(element)

| 成员      | 说明                   | 类型            | 默认值 |
| --------- | ---------------------- | --------------- | ------ |
| `@change` | 用户确认选定的值时触发 | `function(val)` | -      |
