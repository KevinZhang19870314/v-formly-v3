---
sidebarDepth: 0
---

# AutoComplete 自动完成

输入框自动完成功能。

## 代码演示

::: block
AutocompleteView
:::

## API

**我们只列出属性中不一致的或新添加的，一致的地方请参考 具体组件库 文档**

### meta 属性

| 成员        | 说明     | 类型      | 默认值 |
| ----------- | -------- | --------- | ------ |
| `:readOnly` | 禁用状态 | `boolean` | -      |

### meta.ui 属性 (antdv)

| 成员                 | 说明                                              | 类型                      | 默认值 |
| -------------------- | ------------------------------------------------- | ------------------------- | ------ |
| `:slotNameOfDefault` | 自定义输入框，slot 名称                           | `string`                  | -      |
| `:slotNameOfOption`  | 通过 option 插槽，自定义节点，slot 名称           | `string`                  | -      |
| `@change`            | 选中 option，或 input 的 value 变化时，调用此函数 | `function(value)`         | -      |
| `@search`            | 搜索补全项的时候调用                              | `function(value)`         | -      |
| `@select`            | 被选中时调用，参数为选中项的 value 值             | `function(value, option)` | -      |

### meta.ui 属性 (element)

| 成员                 | 说明                                      | 类型              | 默认值 |
| -------------------- | ----------------------------------------- | ----------------- | ------ |
| `:slotNameOfDefault` | 自定义输入建议的内容，slot 名称           | `string`          | -      |
| `:slotNameOfPrefix`  | 输入框头部内容，slot 名称                 | `string`          | -      |
| `:slotNameOfSuffix`  | 输入框尾部内容，slot 名称                 | `string`          | -      |
| `:slotNameOfPrepend` | 输入框前置内容，在 prefix 之前，slot 名称 | `string`          | -      |
| `:slotNameOfAppend`  | 输入框后置内容，在 suffix 之后，slot 名称 | `string`          | -      |
| `@change`            | 在 Input 值改变时触发                     | `function(value)` | -      |
| `@select`            | 点击选中建议项时触发                      | `function(item)`  | -      |

### meta.ui 属性 (devui)

| 成员                   | 说明                                                                        | 类型              | 默认值 |
| ---------------------- | --------------------------------------------------------------------------- | ----------------- | ------ |
| `:slotNameOfItem`      | 自定义展示模板。slotProps：{ index: 下标索引, item: 当前项内容 }，slot 名称 | `string`          | -      |
| `:slotNameOfNothing`   | 没有匹配项的展示结果。slotProps：{ keyword: 输入内容 }，slot 名称           | `string`          | -      |
| `:slotNameOfSearching` | 自定义搜索中显示模板。slotProps：{ keyword: 输入内容 }，slot 名称           | `string`          | -      |
| `:slotNameOfPrefix`    | 输入框头部内容，slot 名称                                                   | `string`          | -      |
| `:slotNameOfSuffix`    | 输入框尾部内容，slot 名称                                                   | `string`          | -      |
| `:slotNameOfPrepend`   | 输入框前置内容，slot 名称                                                   | `string`          | -      |
| `:slotNameOfAppend`    | 输入框后置内容，slot 名称                                                   | `string`          | -      |
| `@selectValue`         | 选择选项之后的回调函数                                                      | `function(value)` | -      |
| `@transInputFocusEmit` | Input focus 时回调函数                                                      | `function()`      | -      |
