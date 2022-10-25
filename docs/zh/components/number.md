# Number 数字输入框

通过鼠标或键盘，输入范围内的数值。

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
      <template #addon-before>
        <a-select v-model:value="addonBeforeValue" style="width: 60px">
          <a-select-option value="add">+</a-select-option>
          <a-select-option value="minus">-</a-select-option>
        </a-select>
      </template>
      <template #addon-after>
        <a-select v-model:value="addonAfterValue" style="width: 60px">
          <a-select-option value="USD">$</a-select-option>
          <a-select-option value="EUR">€</a-select-option>
          <a-select-option value="GBP">£</a-select-option>
          <a-select-option value="CNY">¥</a-select-option>
        </a-select>
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
// import type VFormly from "@/Formly.vue";

const form = ref<null | InstanceType<typeof VFormly>>(null);
const meta = {
  type: "object",
  properties: {
    price: {
      type: "number",
      title: "价格(10<x<100)",
      minimum: 10,
      maximum: 100,
      multipleOf: 2,
      ui: {
        showRequired: true,
      },
    },
    grade: {
      type: "integer",
      title: "年级",
      default: 3,
    },
    salary: {
      type: "number",
      title: "薪资",
      default: 88888.88,
      ui: {
        formatter: (value: any) =>
          `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        parser: (value: any) => value.replace(/\$\s?|(,*)/g, ""),
      },
    },
    increase: {
      type: "number",
      title: "薪资涨幅",
      default: 30,
      ui: { unit: "%", prefix: "涨" },
    },
    hideStep: {
      type: "number",
      title: "隐藏step",
      default: 10000,
      ui: { hideStep: true },
    },
    addon: {
      type: "number",
      title: "前置/后置标签",
      default: 10000,
      ui: {
        slotNameOfAddonAfter: "addon-after",
        slotNameOfAddonBefore: "addon-before",
      },
    },
  },
  required: ["price"],
};
let formData: any = ref({});
let addonBeforeValue = ref("add");
let addonAfterValue = ref("USD");

function clear() {
  formData.value = null;
}

async function submit() {
  let valid = await (form.value as any).validate();
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

| 成员                 | 说明                                                    | 类型      | 默认值 |
| -------------------- | ------------------------------------------------------- | --------- | ------ |
| `[minimum]`          | 最小值                                                  | `number`  | -      |
| `[exclusiveMinimum]` | 约束是否包括 `minimum` 值，`true` 表示排除 `minimum` 值 | `boolean` | -      |
| `[maximum]`          | 最大值                                                  | `number`  | -      |
| `[exclusiveMaximum]` | 约束是否包括 `maximum` 值，`true` 表示排除 `maximum` 值 | `boolean` | -      |
| `[multipleOf]`       | 倍数                                                    | `number`  | `1`    |

### meta.ui 属性

| 成员                      | 说明                                    | 类型                                | 默认值 |
| ------------------------- | --------------------------------------- | ----------------------------------- | ------ |
| `[slotNameOfAddonAfter]`  | 带标签的 input，设置后置标签，slot 名称 | `string`                            | `1`    |
| `[slotNameOfAddonBefore]` | 带标签的 input，设置前置标签，slot 名称 | `string`                            | `1`    |
| `[slotNameOfPrefix]`      | 带有前缀图标的 input，slot 名称         | `string`                            | `1`    |
| `@change`                 | 变化回调                                | `Function(value: number \| string)` | -      |
