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

**我们只列出属性中不一致的或新添加的，一致的地方请参考 具体组件库 文档**

### meta 属性

| 成员        | 说明     | 类型      | 默认值 |
| ----------- | -------- | --------- | ------ |
| `:readOnly` | 禁用状态 | `boolean` | -      |

### meta.ui 属性(antdv)

| 成员                              | 说明                                  | 类型          | 默认值 |
| --------------------------------- | ------------------------------------- | ------------- | ------ |
| `:slotNameOfSelectDefault`        | select 选择器的默认 slot，slot 名称   | `string`      | -      |
| `:slotNameOfNotFoundContent`      | 当下拉列表为空时显示的内容，slot 名称 | `string`      | -      |
| `:slotNameOfSuffixIcon`           | 自定义的选择框后缀图标，slot 名称     | `string`      | -      |
| `:slotNameOfRemoveIcon`           | 自定义的多选框清除图标，slot 名称     | `string`      | -      |
| `:slotNameOfClearIcon`            | 自定义的多选框清空图标，slot 名称     | `string`      | -      |
| `:slotNameOfMenuItemSelectedIcon` | 自定义当前选中的条目图标，slot 名称   | `string`      | -      |
| `@change`                         | 输入框内容变化时的回调                | `function(e)` | -      |

### meta.ui 属性(element)

| 成员                       | 说明                           | 类型             | 默认值 |
| -------------------------- | ------------------------------ | ---------------- | ------ |
| `:slotNameOfSelectDefault` | Option 组件列表，slot 名称     | `string`         | -      |
| `:slotNameOfPrefix`        | Select 组件头部内容，slot 名称 | `string`         | -      |
| `:slotNameOfEmpty`         | 无选项时的列表，slot 名称      | `string`         | -      |
| `@change`                  | 输入框内容变化时的回调         | `function(val)`  | -      |
| `@removeTag`               | 多选模式下移除 tag 时触发      | `function(val)`  | -      |
| `@visibleChange`           | 下拉框出现/隐藏时触发          | `function(open)` | -      |

### meta.ui 属性(devui)

| 成员                 | 说明                                            | 类型                      | 默认值 |
| -------------------- | ----------------------------------------------- | ------------------------- | ------ |
| `:slotNameOfDefault` | 下拉面板内容（OptionGroup / Option），slot 名称 | `string`                  | -      |
| `:slotNameOfEmpty`   | 无选项时下拉面板内容，slot 名称                 | `string`                  | -      |
| `@valueChange`       | 当选中值发生变化时触发                          | `function(val)`           | -      |
| `@removeTag`         | 多选模式下移除 tag 时触发                       | `function(val)`           | -      |
| `@toggleChange`      | 下拉打开关闭 toggle 事件                        | `function(open: boolean)` | -      |
| `@clear`             | 通过右侧删除图标清空所有选项时触发              | `function()`              | -      |
