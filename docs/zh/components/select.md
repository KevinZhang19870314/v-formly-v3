---
sidebarDepth: 0
---

# Select 选择器

下拉选择器。

## 代码演示

::: block
SelectView
:::

## API

**我们只列出属性中不一致的或新添加的，一致的地方请参考 AntDv 文档**

### meta 属性

| 成员        | 说明     | 类型      | 默认值 |
| ----------- | -------- | --------- | ------ |
| `:readOnly` | 禁用状态 | `boolean` | -      |

### meta.ui 属性

| 成员                              | 说明                                  | 类型          | 默认值 |
| --------------------------------- | ------------------------------------- | ------------- | ------ |
| `:slotNameOfSelectDefault`        | select 选择器的默认 slot，slot 名称   | `string`      | -      |
| `:slotNameOfNotFoundContent`      | 当下拉列表为空时显示的内容，slot 名称 | `string`      | -      |
| `:slotNameOfSuffixIcon`           | 自定义的选择框后缀图标，slot 名称     | `string`      | -      |
| `:slotNameOfRemoveIcon`           | 自定义的多选框清除图标，slot 名称     | `string`      | -      |
| `:slotNameOfClearIcon`            | 自定义的多选框清空图标，slot 名称     | `string`      | -      |
| `:slotNameOfMenuItemSelectedIcon` | 自定义当前选中的条目图标，slot 名称   | `string`      | -      |
| `@change`                         | 输入框内容变化时的回调                | `function(e)` | -      |
