---
sidebarDepth: 0
---

# Radio 单选框

单选框。

## 代码演示

::: block
RadioView
:::

## API

**我们只列出属性中不一致的或新添加的，一致的地方请参考 具体组件库 文档**

### meta 属性

| 成员        | 说明     | 类型      | 默认值 |
| ----------- | -------- | --------- | ------ |
| `:readOnly` | 禁用状态 | `boolean` | -      |

### meta.ui 属性(antdv)

参考 RadioGroup 组件属性

| 成员            | 说明                                               | 类型                   | 默认值  |
| --------------- | -------------------------------------------------- | ---------------------- | ------- |
| `:component`    | 指定组件为'radio'                                  | `string`               | `radio` |
| `:direction`    | 单选框展示方向，默认横向展示，`vertical`则竖向展示 | `string`               | -       |
| `:showRequired` | 是否显示标签前的红色\*号                           | `boolean`              | false   |
| `@change`       | 选项变化时的回调函数                               | `Function(value: any)` | -       |

### meta.ui 属性(element)

参考 RadioGroup 组件属性

| 成员            | 说明                     | 类型                    | 默认值  |
| --------------- | ------------------------ | ----------------------- | ------- |
| `:component`    | 指定组件为'radio'        | `string`                | `radio` |
| `:button`       | 是否为按钮类型单选框     | `boolean`               | -       |
| `:showRequired` | 是否显示标签前的红色\*号 | `boolean`               | false   |
| `@change`       | 绑定值变化时触发的事件   | `选中的 Radio label 值` | -       |
