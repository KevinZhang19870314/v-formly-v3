---
sidebarDepth: 0
---

# Textarea 多行文本框

一般用于多行字符串。

## 代码演示

::: block
TextareaView
:::

## API

**我们只列出属性中不一致的或新添加的，一致的地方请参考 具体组件库 文档**

### meta 属性

| 成员         | 说明     | 类型      | 默认值 |
| ------------ | -------- | --------- | ------ |
| `:maxLength` | 最大长度 | `number`  | -      |
| `:readOnly`  | 禁用状态 | `boolean` | -      |

### meta.ui 属性(antdv)

| 成员           | 说明                                                                      | 类型                | 默认值 |
| -------------- | ------------------------------------------------------------------------- | ------------------- | ------ |
| `:autosize`    | 自适应内容高度，可设置为`true \| false`或对象：{ minRows: 2, maxRows: 6 } | `boolean \| object` | true   |
| `@change`      | 内容变更事件                                                              | `function(value)`   | -      |
| `@focus`       | 焦点事件                                                                  | `function(e)`       | -      |
| `@blur`        | 失焦事件                                                                  | `function(e)`       | -      |
| `@pressEnter`  | 按下回车事件                                                              | `function(e)`       | -      |

### meta.ui 属性(element)

| 成员           | 说明                                                                      | 类型                | 默认值 |
| -------------- | ------------------------------------------------------------------------- | ------------------- | ------ |
| `:autosize`    | 自适应内容高度，可设置为`true \| false`或对象：{ minRows: 2, maxRows: 6 } | `boolean \| object` | true   |
| `@change`      | 内容变更事件                                                              | `function(value)`   | -      |
| `@input`  | 在 Input 值改变时触发                                                              | `function(value)`       | -      |
| `@focus`       | 焦点事件                                                                  | `function(e)`       | -      |
| `@blur`        | 失焦事件                                                                  | `function(e)`       | -      |
