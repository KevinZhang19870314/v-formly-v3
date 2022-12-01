---
sidebarDepth: 0
---

# Tag 标签

进行标记和分类的小标签，注： 只支持 checkable 标签模式。

## 代码演示

::: block
TagView
:::

## API

### meta 属性

| 成员        | 说明     | 类型                                       | 默认值 |
| ----------- | -------- | ------------------------------------------ | ------ |
| `:enum`     | 数据源   | `array<{value, label, disabled}> \| any[]` | -      |
| `:readOnly` | 禁用状态 | `boolean`                                  | -      |

### meta.ui 属性(antdv/element/devui)

| 成员             | 说明                     | 类型                | 默认值 |
| ---------------- | ------------------------ | ------------------- | ------ |
| `@change`        | 点击标签时触发的回调     | `function(value)`   | -      |
| `@checkedChange` | 设置标签的选中状态的回调 | `function(checked)` | -      |
