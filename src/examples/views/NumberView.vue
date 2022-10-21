<template>
  <div>
    <v-formly ref="form" v-model="formData" :meta="meta" :layout="'horizontal'">
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
    </v-formly>
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw, unref } from "vue";
import type VFormly from "@/Formly.vue";

const form = ref<null | InstanceType<typeof VFormly>>(null);
const meta = {
  type: "object",
  properties: {
    price: {
      type: "number",
      title: "价格",
      minimum: 10,
      maximum: 100,
      multipleOf: 2,
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
      ui: { unit: "%", prefix: "$" },
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
  required: [],
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
