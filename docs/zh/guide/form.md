# 表单

## 提交表单

v-formly 提交表单的三种方式。

1. 使用默认的提交按钮，通过设置 `button='default'`。
2. 使用 slot 暴露出来的 `submit function`，通过设置 `button='custom'` 并传入 `name='button'` 的 slot。
3. 使用 ref 获取 form 实例，直接调用实例的 `validate function`，eg: `this.$refs.form.validate()`。

### 代码演示

::: demo

```vue
<template>
  <div>
    <a-divider>1. 使用默认的提交按钮</a-divider>
    <v-formly
      layout="horizontal"
      button="default"
      v-model="data1"
      :meta="meta"
      @form-submit="submit"
    />
    <a-divider>2. 使用 slot</a-divider>
    <v-formly
      layout="horizontal"
      button="custom"
      v-model="data2"
      :meta="meta"
      @form-submit="submit"
    >
      <template v-slot:button="{ loading, clearForm, submitForm }">
        <div class="btns">
          <a-button type="danger" @click="clearForm"> 重置 </a-button>
          <a-button type="primary" @click="submitForm" :loading="loading">
            提交
          </a-button>
        </div>
      </template>
    </v-formly>
    <a-divider>3. 使用 ref 获取 form 实例</a-divider>
    <v-formly ref="form" layout="horizontal" v-model="data3" :meta="meta" />
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="printData" :loading="formLoading">
        提交
      </a-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data1: {},
      data2: {},
      data3: {},
      formLoading: false,
      meta: {
        properties: {
          name: {
            title: "姓名",
            type: "string",
            ui: {
              showRequired: true,
            },
          },
          asyncError: {
            title: "异步错误（2秒）",
            type: "string",
            ui: {
              showRequired: true,
              validatorAsync: (val) => {
                return new Promise((resolve) => {
                  setTimeout(() => {
                    resolve(
                      !val
                        ? [
                            {
                              keyword: "required",
                              message: "异步校验失败",
                            },
                          ]
                        : []
                    );
                  }, 2000);
                });
              },
            },
          },
        },
        required: ["name", "asyncError"],
      },
    };
  },
  methods: {
    submit(value) {
      this.$message.info(JSON.stringify(value));
    },
    clear() {
      this.data3 = null;
    },
    async printData() {
      this.formLoading = true;
      const valid = await this.$refs.form.validate();
      this.formLoading = false;
      if (valid) {
        this.$message.info(JSON.stringify(this.data3));
      }
    },
  },
};
</script>
```

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
