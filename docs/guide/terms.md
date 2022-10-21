# 名词解释

## meta

`meta`在 v-formly-v3 中代表的是标准的 JSON Schema 和嵌套的`ui`结合的结构。例如如下结构：

```json
{
  "meta": {
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
      "desc": {
        "title": "描述",
        "type": "string",
        "default": "Base on technical, but not limited on it!",
        "ui": {}
      },
      "enable": {
        "title": "启用",
        "type": "boolean"
      }
    },
    "required": ["name"]
  },
  "data": {
    "enable": true
  }
}
```
