---
sidebarDepth: 0
---

# Slider 滑动输入条

滑动型输入器，展示当前值和可选范围。

## 代码演示

::: block
SliderView
:::

## API

**我们只列出属性中不一致的或新添加的，一致的地方请参考 具体组件库 文档**

### meta 属性

| 成员          | 说明     | 类型      | 默认值 |
| ------------- | -------- | --------- | ------ |
| `:minimum`    | 最小值   | `number`  | 0      |
| `:maximum`    | 最大值   | `number`  | 100    |
| `:multipleOf` | 倍数     | `number`  | 1      |
| `:readOnly`   | 禁用状态 | `boolean` | -      |

### meta.ui 属性(antdv)

| 成员              | 说明                                                                       | 类型                      | 默认值                          |
| ----------------- | -------------------------------------------------------------------------- | ------------------------- | ------------------------------- |
| `:slotNameOfMark` | 自定义刻度标记                                                             | `v-slot:mark`             | `{ point: number, label: any }` |
| `@change`         | 当`Slider`的值发生改变时，会触发`change`事件，并把改变后的值作为参数传入。 | `function(value: number)` | -                               |
| `@afterChange`    | 与`mouseup`触发时机一致，把当前值作为参数传入。                            | `function(value: number)` | -                               |

### meta.ui 属性(element)

| 成员      | 说明                                               | 类型                      | 默认值 |
| --------- | -------------------------------------------------- | ------------------------- | ------ |
| `@change` | 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发） | `function(value: number)` | -      |
| `@input`  | 数据改变时触发（使用鼠标拖曳时，活动过程实时触发） | `function(value: number)` | -      |

::: tip 注意
`multipleOf`如果小于 1 会出现 ajv 校验报错的情况，解决方案可参考 [multipleofprecision](https://ajv.js.org/options.html#multipleofprecision)
:::
