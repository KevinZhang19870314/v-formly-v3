# AutoComplete 自动完成

输入框自动完成功能。

## 代码演示

::: demo

```vue
<template>
  <div>
    <v-formly ref="form" v-model="data" :meta="meta" :layout="'horizontal'">
      <template v-slot:datasource>
        <a-select-option v-for="email in result" :key="email">
          {{ email }}
        </a-select-option>
      </template>
      <template v-slot:datasource1>
        <a-select-option v-for="email in result1" :key="email">
          {{ email }}
        </a-select-option>
      </template>
      <template v-slot:datasource2>
        <a-select-option v-for="email in result2" :key="email">
          {{ email + "_test" }}
        </a-select-option>
      </template>
    </v-formly>
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    let self = this;
    return {
      meta: {
        type: "object",
        properties: {
          name: {
            title: "姓名",
            type: "string",
            default: "kevin",
            ui: {
              showRequired: true,
            },
          },
          auto: {
            type: "string",
            title: "自动完成",
            ui: {
              component: "autocomplete",
              placeholder: "auto complete",
              slotNameOfDataSource: "datasource", // slotName优先级高于dataSource，即有slot用slot，否则用dataSource数组
              dataSource: [],
              search: function (value) {
                console.log(value);
                self.handleSearch(value);
              },
            },
          },
          obj: {
            type: "object",
            properties: {
              auto1: {
                type: "string",
                title: "自动完成1",
                ui: {
                  component: "autocomplete",
                  placeholder: "auto complete 1",
                  slotNameOfDataSource: "datasource1", // slotName优先级高于dataSource，即有slot用slot，否则用dataSource数组
                  dataSource: [],
                  search: function (value) {
                    console.log(value);
                    self.handleSearch1(value);
                  },
                },
              },
              obj1: {
                type: "object",
                properties: {
                  auto2: {
                    type: "string",
                    title: "自动完成2",
                    ui: {
                      component: "autocomplete",
                      placeholder: "auto complete 2",
                      slotNameOfDataSource: "datasource2", // slotName优先级高于dataSource，即有slot用slot，否则用dataSource数组
                      dataSource: [],
                      search: function (value) {
                        console.log(value);
                        self.handleSearch2(value);
                      },
                    },
                  },
                },
              },
            },
          },
        },
        required: ["name"],
      },
      data: { name: "kevin zhang" },
      result: [],
      result1: [],
      result2: [],
    };
  },
  methods: {
    clear() {
      this.data = null;
      // this.$refs.form.reset(null);
    },
    async submit() {
      let valid = await this.$refs.form.validate();
      if (valid) {
        console.log(this.data);
      }
    },
    handleSearch(value) {
      let result;
      if (!value || value.indexOf("@") >= 0) {
        result = [];
      } else {
        result = ["gmail.com", "163.com", "qq.com"].map(
          (domain) => `${value}@${domain}`
        );
      }
      this.result = result;
    },
    handleSearch1(value) {
      let result;
      if (!value || value.indexOf("@") >= 0) {
        result = [];
      } else {
        result = ["gmail.com", "163.com", "qq.com"].map(
          (domain) => `${value}@${domain}`
        );
      }
      this.result1 = result;
    },
    handleSearch2(value) {
      let result;
      if (!value || value.indexOf("@") >= 0) {
        result = [];
      } else {
        result = ["gmail.com", "163.com", "qq.com"].map(
          (domain) => `${value}@${domain}`
        );
      }
      this.result2 = result;
    },
  },
};
</script>
<style lang="less" scoped></style>
```

:::

## API

**我们只列出属性中不一致的或新添加的，一致的地方请参考 AntDv 文档**

### meta 属性

| 成员        | 说明     | 类型      | 默认值 |
| ----------- | -------- | --------- | ------ |
| `:readOnly` | 禁用状态 | `boolean` | -      |

### meta.ui 属性

| 成员                 | 说明                                              | 类型                      | 默认值 |
| -------------------- | ------------------------------------------------- | ------------------------- | ------ |
| `:slotNameOfDefault` | 自定义输入框，slot 名称                           | `string`                  | -      |
| `:dataSource`        | 自动完成的数据源                                  | `string`                  | -      |
| `@change`            | 选中 option，或 input 的 value 变化时，调用此函数 | `function(value)`         | -      |
| `@search`            | 搜索补全项的时候调用                              | `function(value)`         | -      |
| `@select`            | 被选中时调用，参数为选中项的 value 值             | `function(value, option)` | -      |
