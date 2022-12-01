---
sidebarDepth: 0
---

# Text 文本

一般用于直接显示文本。

## 代码演示

::: block
TextView
:::

## API

### meta.ui 属性(antdv/element/devui)

| 成员                 | 说明          | 类型                     | 默认值 |
| -------------------- | ------------- | ------------------------ | ------ |
| `:text`              | 指定的 `text` | `string \| () => string` |        |
| `:html`              | 指定的 `html` | `HTML`                   | -      |
| `:slotNameOfDefault` | 指定的 `slot` | `string`                 | -      |

::: tip 注意
文本显示的优先级：slot > html > text
:::
