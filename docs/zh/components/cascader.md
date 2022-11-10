---
sidebarDepth: 0
---

# Cascader 级联选择

一般用于省市区，公司层级，事物分类等。

## 代码演示

::: block
CascaderView
:::

## API

**我们只列出属性中不一致的或新添加的，一致的地方请参考 具体组件库 文档**

### meta 属性

| 成员        | 说明     | 类型                            | 默认值 |
| ----------- | -------- | ------------------------------- | ------ |
| `:enum`     | 数据源   | [Option](https://antdv.com/components/cascader-cn#option)\[] | -      |
| `:readOnly` | 禁用状态 | `boolean`                       | -      |

### meta.ui 属性(antdv)

| 成员                            | 说明                 | 类型 | 默认值 |
| ------------------------------- | -------------------- | ---- | ------ |
| `:slotNameOfDefault`    | 自定义显示           | `slot` | -      |
| `:slotNameOfSuffixIcon` | 后缀图标             | `slot` | -      |
| `:slotNameOfDisplayRender`      | 选择后展示的渲染函数 | `slot` | -      |

### meta.ui 属性(element)

| 成员                            | 说明                 | 类型 | 默认值 |
| ------------------------------- | -------------------- | ---- | ------ |
| `:slotNameOfDefault`    | 自定义显示           | `slot` | -      |
| `:type`    | 级联类型，默认为级联选择器，值是`panel`时为级联面板         | `string` | -      |
