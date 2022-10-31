# Checkbox 多选框

多选框

## 代码演示

::: block
CheckboxView
:::

## API

**我们只列出属性中不一致的或新添加的，一致的地方请参考 AntDv 文档**

### meta 属性

| 成员        | 说明                                 | 类型                                                                                                                  | 默认值 |
| ----------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ------ |
| `:enum`     | 数据源，当数据源存在于表示一组多选框 | `string[] \| Array<{ label: string value: string disabled?: boolean, indeterminate?: boolean, onChange?: function }>` | -      |
| `:readOnly` | 禁用状态                             | `boolean`                                                                                                             | -      |

### meta.ui 属性

**参考 Checkbox Group 的属性**

| 成员      | 说明           | 类型                     | 默认值 |
| --------- | -------------- | ------------------------ | ------ |
| `@change` | 变化时回调函数 | `Function(checkedValue)` | -      |
