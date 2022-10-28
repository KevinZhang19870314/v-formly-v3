# AutoComplete 自动完成

输入框自动完成功能。

## 代码演示

::: block
AutocompleteView
:::

## API

**我们只列出属性中不一致的或新添加的，一致的地方请参考 AntDv 文档**

### meta 属性

| 成员        | 说明     | 类型      | 默认值 |
| ----------- | -------- | --------- | ------ |
| `:readOnly` | 禁用状态 | `boolean` | -      |

### meta.ui 属性

| 成员                 | 说明                                              | 类型                      | 默认值 |
| -------------------- | ------------------------------------------------- | ------------------------- | ------ |
| `:slotNameOfDefault` | 自定义输入框，slot 名称                           | `string`                  | -      |
| `:slotNameOfOption`  | 通过 option 插槽，自定义节点，slot 名称           | `string`                  | -      |
| `@change`            | 选中 option，或 input 的 value 变化时，调用此函数 | `function(value)`         | -      |
| `@search`            | 搜索补全项的时候调用                              | `function(value)`         | -      |
| `@select`            | 被选中时调用，参数为选中项的 value 值             | `function(value, option)` | -      |
