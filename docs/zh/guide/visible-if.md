# visibleIf

v-formly-v3 支持动态根据条件显示/隐藏表单项。

```ts {7-10}
string2: {
    title: "字段二",
    type: "string",
    ui: {
        showRequired: true,
        show: false,
        visibleIf: {
            "/string1": (context: any, id: string, val: string) => {
                return val === "v-formly";
            },
        },
    },
},
```

其中`/string1`代表此表单项依赖的表单项，代表的含义为：表单项`/string1`的值为`v-formly`的时候`/string2`可见。

## 代码演示

::: block
VisibleIfView
:::
