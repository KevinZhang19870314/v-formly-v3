# 名词解释

## meta

`meta`在 v-formly-v3 中代表的是标准的 JSON Schema 和嵌套的`ui`结合的结构。例如如下结构：

```json {9-11,19-21}
{
  "type": "object",
  "properties": {
    "name": {
      "title": "姓名",
      "type": "string",
      "default": "kevin",
      "ui": {
        "showRequired": true
      }
    },
    "obj": {
      "type": "object",
      "properties": {
        "subObj": {
          "title": "test",
          "type": "string",
          "ui": {
            "showRequired": true
          }
        }
      },
      "required": ["subObj"]
    },
    "enable": {
      "title": "启用",
      "type": "boolean"
    }
  },
  "required": ["name"]
}
```

这是一个标准的`meta`格式的数据结构，除了高亮的`ui`部分，它其实是一个标准的 JSON Schema 结构，我们把它传入 v-formly-v3 中即可渲染出表单如下。

::: block
TermsView
:::

我们称此 JSON 结构为`meta`，当然此结构中也嵌套了许多子`meta`，比如`name`，`obj`，`subObj`，`enable`对应的值都称之为`meta`。

## 类 meta （ts class）

当我们把`meta`传入 v-formly-v3 中，接收它的是我们的**类 meta**，**类 meta**是一个 JavaScript 的 class 类，它负责保存及处理表单中每个类型的表单项的处理逻辑及数据。

## context

**类 meta**实例化之后就是`context`，每一个表单项都有一个对应的`context`。
