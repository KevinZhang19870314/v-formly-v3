<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta" />
    <div class="btns">
      <d-button variant="solid" color="danger" @click="clear"> 重置 </d-button>
      <d-button variant="solid" color="primary" @click="submit">
        提交
      </d-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw, unref } from "vue";
import type VFormly from "@/devui-vue/DFormly.vue";

const form = ref<null | InstanceType<typeof VFormly>>(null);
const meta = {
  type: "object",
  properties: {
    input1_1: {
      type: "number",
      title: "基本用法",
      ui: {
        showRequired: true,
        change: (val: number) => console.log("change", val),
      },
    },
    input1_2: {
      type: "integer",
      title: "禁用状态",
      readOnly: true,
      default: 3,
    },
    input1_3: {
      type: "integer",
      title: "价格(10<x<100)",
      minimum: 10,
      maximum: 100,
      multipleOf: 2,
    },
    input1_4: {
      type: "number",
      title: "精度",
      multipleOf: 0.01,
      ui: {
        precision: 2,
      },
      default: 1,
    },
    input2: {
      type: "number",
      title: "尺寸(大)",
      ui: {
        size: "lg",
      },
      default: 1,
    },
    hideStep: {
      type: "number",
      title: "隐藏step",
      default: 10000,
      ui: { hideStep: true },
    },
  },
  required: ["input1_1"],
};
let formData: any = ref({});

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
