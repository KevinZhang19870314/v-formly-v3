# Time 时间选择器

输入或选择时间的控件。

## 代码演示

::: demo

```vue
<template>
  <div>
    <v-formly-v3 ref="form" v-model="data" :meta="meta" :layout="'vertical'">
      <template v-slot:suffixIcon3>
        <a-icon type="smile" />
      </template>
      <template v-slot:addon4="{ context }">
        <a-button size="small" type="primary" @click="handleClose(context)">
          {{ "Close" }}
        </a-button>
      </template>
    </v-formly-v3>
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      meta: {
        type: "object",
        properties: {
          time: {
            title: "12小时制",
            type: "string",
            default: "08:12:12",
            ui: {
              component: "time",
              valueFormat: "hh:mm:ss",
              use12Hours: true,
              change: (time, timeString) => {
                console.log(time, timeString);
              },
            },
          },
          time1: {
            title: "选择时分",
            type: "string",
            ui: {
              component: "time",
              format: "HH:mm",
              change: (time, timeString) => {
                console.log(time, timeString);
              },
            },
          },
          time2_1: {
            title: "大",
            type: "string",
            ui: {
              component: "time",
              format: "HH:mm",
              change: (time, timeString) => {
                console.log(time, timeString);
              },
              size: "large",
              grid: {
                span: 8,
              },
            },
          },
          time2_2: {
            title: "中",
            type: "string",
            ui: {
              component: "time",
              format: "HH:mm",
              change: (time, timeString) => {
                console.log(time, timeString);
              },
              grid: {
                span: 8,
              },
            },
          },
          time2_3: {
            title: "小",
            type: "string",
            ui: {
              component: "time",
              format: "HH:mm",
              change: (time, timeString) => {
                console.log(time, timeString);
              },
              size: "small",
              grid: {
                span: 8,
              },
            },
          },
          time3: {
            title: "后缀图标",
            type: "string",
            ui: {
              component: "time",
              slotNameOfSuffixIcon: "suffixIcon3",
              change: (time, timeString) => {
                console.log(time, timeString);
              },
            },
          },
          time4: {
            title: "附加内容",
            type: "string",
            ui: {
              component: "time",
              slotNameOfAddon: "addon4",
              open: false,
              change: (time, timeString) => {
                console.log(time, timeString);
              },
            },
          },
          time5: {
            title: "禁用",
            type: "string",
            readOnly: true,
            ui: {
              component: "time",
              change: (time, timeString) => {
                console.log(time, timeString);
              },
            },
          },
          time6: {
            title: "步长选项",
            type: "string",
            ui: {
              component: "time",
              minuteStep: 15,
              secondStep: 10,
              change: (time, timeString) => {
                console.log(time, timeString);
              },
            },
          },
          time7: {
            title: "受控组件",
            type: "string",
            ui: {
              component: "time",
              value: "12:18:56",
              valueFormat: "hh:mm:ss",
              change: (time, timeString) => {
                console.log(time, timeString);
              },
            },
          },
        },
        required: ["name"],
        ui: {
          grid: {
            span: 24,
          },
        },
      },
      data: { name: "kevin zhang" },
    };
  },
  methods: {
    clear() {
      this.formData = null;
      // Below line do the same thing
      // this.$refs.form.reset(null);
    },
    async submit() {
      let valid = await this.$refs.form.validate();
      if (valid) {
        console.log(this.formData);
      }
    },
    handleClose(context) {
      context.open = false;
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

| 成员                    | 说明                                  | 类型          | 默认值 |
| ----------------------- | ------------------------------------- | ------------- | ------ |
| `:component`            | 指定组件为'time'                      | `string`      | `time` |
| `:slotNameOfAddon`      | 选择框底部显示自定义的内容，slot 名称 | `string`      | -      |
| `:slotNameOfSuffixIcon` | 自定义的选择框后缀图标，slot 名称     | `string`      | -      |
| `:slotNameOfClearIcon`  | 自定义的清除图标，slot 名称           | `string`      | -      |
| `@change`               | 输入框内容变化时的回调                | `function(e)` | -      |
