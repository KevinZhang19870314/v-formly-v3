# 表单

## 提交表单

v-formly-v3 提交表单的三种方式。

1. 使用默认的提交按钮，通过设置 `button='default'`。
2. 使用 slot 暴露出来的 `submit function`，通过设置 `button='custom'` 并传入 `name='button'` 的 slot。
3. 使用 ref 获取 form 实例，直接调用实例的 `validate function`，eg: `form.value.validate()`。

### 代码演示

::: block
SubmitButtonView
:::

### API

| 参数              | 说明                         | 类型                                     | 默认值                               |
| ----------------- | ---------------------------- | ---------------------------------------- | ------------------------------------ |
| `:layout`         | 表单布局                     | `'horizontal' \| 'vertical' \| 'inline'` | `'horizontal'`                       |
| `:button`         | 提交按钮                     | `'default' \| 'custom'`                  | 默认不显示提交按钮                   |
| `:meta`           | JSON Schema + UI Schema      | -                                        | -                                    |
| `:value(v-model)` | 表单绑定数据                 | `object`                                 | -                                    |
| `button`          | 自定义提交按钮               | `slot`                                   | `{ loading, clearForm, submitForm }` |
| `@form-reset`     | 重置数据后回调事件           | `function(data)`                         | -                                    |
| `@form-submit`    | 数据验证成功或失败后回调事件 | `function({ valid, data })`              | -                                    |

#### 组件方法

| 名称         | 描述                                        |
| ------------ | ------------------------------------------- |
| `validate`   | 校验表单                                    |
| `clearForm`  | 重置表单，触发 form-reset 事件              |
| `submitForm` | 校验表单，在校验完成后触发 form-submit 事件 |
