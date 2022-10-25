# Date 日期选择框

输入或选择日期的控件。

## 代码演示

::: demo

```vue
<template>
  <div>
    <v-formly-v3
      ref="form"
      v-model="formData"
      :meta="meta"
      :layout="'horizontal'"
    >
      <template v-slot:custom_suffix>
        <smile-outlined />
      </template>
    </v-formly-v3>
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw, unref } from "vue";

const form = ref<null | InstanceType<typeof VFormly>>(null);
const meta = {
  type: "object",
  properties: {
    month: {
      type: "string",
      title: "月份",
      default: "May",
      ui: {
        component: "date",
        picker: "month",
        valueFormat: "MMMM",
        slotNameOfSuffixIcon: "custom_suffix",
      },
    },
    week: {
      type: "string",
      title: "周",
      ui: {
        component: "date",
        picker: "week",
      },
    },
    range: {
      type: "string",
      title: "日期范围",
      ui: {
        component: "date",
        type: "range",
        picker: "date",
        slotNameOfSuffixIcon: "custom_suffix",
      },
    },
    date: {
      type: "string",
      title: "日期",
      ui: {
        component: "date",
        picker: "date",
        valueFormat: "X",
      },
    },
  },
  required: [],
};
let formData: any = ref({});

function clear() {
  formData.value = null;
}

async function submit() {
  let valid = await form.value!.validate();
  if (valid) {
    console.log(toRaw(unref(formData)));
  }
}
</script>

<style scoped></style>
```

:::

## API

**我们只列出属性中不一致的或新添加的，一致的地方请参考 AntDv 文档**

### meta 属性

| 成员        | 说明     | 类型      | 默认值 |
| ----------- | -------- | --------- | ------ |
| `:readOnly` | 禁用状态 | `boolean` | -      |

### meta.ui 属性

| 成员                    | 说明                              | 类型                                      | 默认值 |
| ----------------------- | --------------------------------- | ----------------------------------------- | ------ |
| `:slotNameOfSuffixIcon` | 自定义的选择框后缀图标，slot 名称 | `string`                                  | -      |
| `@change`               | 输入框内容变化时的回调            | `Function(checked:Boolean, event: Event)` | -      |
