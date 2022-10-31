# String 文本框

内置组件，用于字符串、密码等输入框。

## 代码演示

::: block
StringView
:::

## API

**我们只列出属性中不一致的或新添加的，一致的地方请参考 AntDv 文档**

### meta 属性

| 成员         | 说明         | 类型      | 默认值 |
| ------------ | ------------ | --------- | ------ |
| `:maxLength` | 表单最大长度 | `number`  | -      |
| `:readOnly`  | 禁用状态     | `boolean` | -      |

### meta.ui 属性

| 成员                     | 说明                                    | 类型          | 默认值 |
| ------------------------ | --------------------------------------- | ------------- | ------ |
| `:addOnAfter`            | 带标签的 input，设置后置标签            | `string`      | -      |
| `:slotNameOfAddonAfter`  | 带标签的 input，设置后置标签，slot 名称 | `string`      | -      |
| `:addOnBefore`           | 带标签的 input，设置前置标签            | `string`      | -      |
| `:slotNameOfAddonBefore` | 带标签的 input，设置前置标签，slot 名称 | `string`      | -      |
| `:prefix`                | 带有前缀图标的 input                    | `string`      | -      |
| `:slotNameOfPrefix`      | 带有前缀图标的 input，slot 名称         | `string`      | -      |
| `:suffix`                | 带有后缀图标的 input                    | `string`      | -      |
| `:slotNameOfSuffix`      | 带有后缀图标的 input，slot 名称         | `string`      | -      |
| `@change`                | 输入框内容变化时的回调                  | `function(e)` | -      |
