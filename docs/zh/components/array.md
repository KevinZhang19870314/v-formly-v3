---
sidebarDepth: 0
---

# Array 数组

创建对象数组。

## 代码演示

::: block
ArrayView
:::

## API

### meta 属性

| 成员        | 说明                   | 类型       | 默认值 |
| ----------- | ---------------------- | ---------- | ------ |
| `:items`    | 数组元素类型描述       | `object[]` |        |
| `:minItems` | 约束数组最小的元素个数 | `number`   | -      |
| `:maxItems` | 约束数组最大的元素个数 | `number`   | -      |
| `:readOnly` | 禁用状态               | `boolean`  | -      |

### meta.ui 属性(antdv)

| 成员            | 说明                             | 类型              | 默认值   |
| --------------- | -------------------------------- | ----------------- | -------- |
| `:addTitle`     | 添加按钮文本                     | `string`          | `添加`   |
| `:addType`      | 添加按钮类型，等同 `button type` | `string`          | `dashed` |
| `:removable`    | 是否包含移除按钮                 | `boolean`         | `true`   |
| `:showRequired` | 当前项是否为必填，仅影响样式     | `boolean`         | -        |
| `@add`          | 添加回调，返回值为实例 id        | `function(id)`    | -        |
| `@remove`       | 移除回调，返回值为实例 index     | `function(index)` | -        |

### meta.ui 属性(element)

| 成员            | 说明                             | 类型              | 默认值    |
| --------------- | -------------------------------- | ----------------- | --------- |
| `:addTitle`     | 添加按钮文本                     | `string`          | `添加`    |
| `:addType`      | 添加按钮类型，等同 `button type` | `string`          | `primary` |
| `:removable`    | 是否包含移除按钮                 | `boolean`         | `true`    |
| `:showRequired` | 当前项是否为必填，仅影响样式     | `boolean`         | -         |
| `@add`          | 添加回调，返回值为实例 id        | `function(id)`    | -         |
| `@remove`       | 移除回调，返回值为实例 index     | `function(index)` | -         |

### meta.ui 属性(devui)

| 成员            | 说明                                | 类型              | 默认值    |
| --------------- | ----------------------------------- | ----------------- | --------- |
| `:addTitle`     | 添加按钮文本                        | `string`          | `添加`    |
| `:addType`      | 添加按钮类型，等同 `button variant` | `string`          | `outline` |
| `:removable`    | 是否包含移除按钮                    | `boolean`         | `true`    |
| `:showRequired` | 当前项是否为必填，仅影响样式        | `boolean`         | -         |
| `@add`          | 添加回调，返回值为实例 id           | `function(id)`    | -         |
| `@remove`       | 移除回调，返回值为实例 index        | `function(index)` | -         |

## 布局

数组的布局分为数组本身以及数组元素布局，arraySpan 决定每个数组元素占栅格数值。

::: block
ArrayLayoutView
:::
