# 自定义校验

v-formly 除了支持标准的[JSON Schema](https://js-schema.org/)和[Ajv](https://ajv.js.org/)校验以外，还支持自定义校验规则及错误文本内容。

::: tip 注意
不管采用哪种方式来构建错误文本，都必须通过`keyword`来区分错误类型。
:::

## 自定义错误文本内容

支持全局定义`errors`和局部更改`ui.errors`覆盖默认的错误文本。

### 全局修改

```js
// TODO: 这里需要在formly.js导出后，然后看如何写
```

### 局部更改

局部更改即在编写某个表单的 meta 时候覆盖某个属性的`ui.errors`。

```js {8,10-13}
meta: {
  type: "object",
  properties: {
    name: {
      title: "姓名",
      type: "string",
      default: "kevin",
      ui: {
        showRequired: true,
        errors: {
            "required": "请输入姓名"
        }
      },
    },
  },
  required: ["name"],
}
```

## 自定义校验

标准校验有时候并不一定满足业务需求，这里就需要写自定义校验。

### 同步校验

```js {8,10-11}
meta: {
  type: "object",
  properties: {
    name: {
      title: "姓名",
      type: "string",
      default: "kevin",
      ui: {
        showRequired: true,
        validator: (val) => !val ? [{ keyword: "required", message: "Required name" }] : [],
      },
    },
  },
  required: ["name"],
},
```

### 异步校验

```js {7,9-17}
meta: {
  type: "object",
  properties: {
    asyncError: {
    title: "异步错误（2秒）",
    type: "string",
    ui: {
    showRequired: true,
    validatorAsync: (val) => {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(
            !val ? [{ keyword: "required", message: "Required asyncError",}] : []
        );
    }, 2000);
    });
    },
    },
    },
  },
  required: ["asyncError"],
},
```
