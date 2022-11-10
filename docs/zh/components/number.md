---
sidebarDepth: 0
---

# Number 数字输入框

通过鼠标或键盘，输入范围内的数值。

## 代码演示

::: block
NumberView
:::

## API

**我们只列出属性中不一致的或新添加的，一致的地方请参考 具体组件库 文档**

### meta 属性

| 成员                 | 说明                                                    | 类型      | 默认值 |
| -------------------- | ------------------------------------------------------- | --------- | ------ |
| `[minimum]`          | 最小值                                                  | `number`  | -      |
| `[exclusiveMinimum]` | 约束是否包括 `minimum` 值，`true` 表示排除 `minimum` 值 | `boolean` | -      |
| `[maximum]`          | 最大值                                                  | `number`  | -      |
| `[exclusiveMaximum]` | 约束是否包括 `maximum` 值，`true` 表示排除 `maximum` 值 | `boolean` | -      |
| `[multipleOf]`       | 倍数                                                    | `number`  | `1`    |

### meta.ui 属性(antdv)

| 成员                      | 说明                                    | 类型                                | 默认值 |
| ------------------------- | --------------------------------------- | ----------------------------------- | ------ |
| `[slotNameOfAddonAfter]`  | 带标签的 input，设置后置标签，slot 名称 | `string`                            | `1`    |
| `[slotNameOfAddonBefore]` | 带标签的 input，设置前置标签，slot 名称 | `string`                            | `1`    |
| `[slotNameOfPrefix]`      | 带有前缀图标的 input，slot 名称         | `string`                            | `1`    |
| `@change`                 | 变化回调                                | `Function(value: number \| string)` | -      |

### meta.ui 属性(element)

| 成员      | 说明               | 类型                                       | 默认值 |
| --------- | ------------------ | ------------------------------------------ | ------ |
| `@change` | 绑定值被改变时触发 | `(currentValue: number, oldValue: number)` | -      |
