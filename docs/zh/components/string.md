---
sidebarDepth: 0
---

# String 文本框

内置组件，用于字符串、密码等输入框。

## 代码演示

::: block
StringView
:::

## API

**我们只列出属性中不一致的或新添加的，一致的地方请参考 具体组件库 文档**

### meta 属性

| 成员         | 说明         | 类型      | 默认值 |
| ------------ | ------------ | --------- | ------ |
| `:maxLength` | 表单最大长度 | `number`  | -      |
| `:readOnly`  | 禁用状态     | `boolean` | -      |

### meta.ui 属性(antdv)

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

### meta.ui 属性(element)

| 成员                 | 说明                                                          | 类型          | 默认值 |
| -------------------- | ------------------------------------------------------------- | ------------- | ------ |
| `:slotNameOfPrepend` | 输入框前置内容，只对非 type="textarea" 有效，slot 名称        | `string`      | -      |
| `:slotNameOfAppend`  | 输入框后置内容，只对非 type="textarea" 有效，slot 名称        | `string`      | -      |
| `:slotNameOfPrefix`  | 输入框头部内容，只对非 type="textarea" 有效，slot 名称        | `string`      | -      |
| `:slotNameOfSuffix`  | 输入框尾部内容，只对非 type="textarea" 有效，slot 名称        | `string`      | -      |
| `@change`            | 仅当 modelValue 改变时，当输入框失去焦点或用户按 Enter 时触发 | `function(e)` | -      |
| `@input`             | 在 Input 值改变时触发                                         | `function(e)` | -      |

### meta.ui 属性(devui)

| 成员                 | 说明                                        | 类型          | 默认值 |
| -------------------- | ------------------------------------------- | ------------- | ------ |
| `:slotNameOfPrepend` | 输入框前置内容，slot 名称                   | `string`      | -      |
| `:slotNameOfAppend`  | 输入框后置内容，slot 名称                   | `string`      | -      |
| `:slotNameOfPrefix`  | 输入框头部内容，slot 名称                   | `string`      | -      |
| `:slotNameOfSuffix`  | 输入框尾部内容，slot 名称                   | `string`      | -      |
| `@change`            | 输入框失去焦点或按下回车时触发              | `function(e)` | -      |
| `@input`             | 输入值改变时触发                            | `function(e)` | -      |
| `@clear`             | 在点击由 clearable 属性生成的清空按钮时触发 | -             | -      |
