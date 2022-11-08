<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta"> </v-formly-v3>
    <div class="btns">
      <el-button type="danger" @click="clear"> 重置 </el-button>
      <el-button type="primary" @click="submit"> 提交 </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw, unref } from "vue";
import type VFormly from "@/element-plus/ElFormly.vue";

const form = ref<null | InstanceType<typeof VFormly>>(null);
const meta = {
  type: "object",
  properties: {
    number1: {
      type: "number",
      title: "基础用法",
      minimum: 1,
      maximum: 10,
      default: 1,
      ui: {
        showRequired: true,
        change: (curVal: any, oldVal: any) => console.log(curVal, oldVal),
      },
    },
    number2: {
      type: "number",
      title: "禁用状态",
      default: 1,
      readOnly: true,
    },
    number3: {
      type: "number",
      title: "步进",
      default: 5,
      ui: {
        step: 2,
      },
    },
    number4: {
      type: "number",
      title: "严格步进",
      default: 2,
      ui: {
        step: 2,
        stepStrictly: true,
      },
    },
    number5: {
      type: "number",
      title: "精度",
      default: 1,
      ui: {
        step: 0.1,
        maximum: 10,
        precision: 2,
      },
    },
    number6_1: {
      type: "number",
      title: "不同的输入框尺寸",
      default: 1,
      ui: {
        size: "large",
        grid: {
          span: 8,
        },
      },
    },
    number6_2: {
      type: "number",
      title: "不同的输入框尺寸",
      default: 2,
      ui: {
        grid: {
          span: 8,
        },
      },
    },
    number6_3: {
      type: "number",
      title: "不同的输入框尺寸",
      default: 3,
      ui: {
        size: "small",
        grid: {
          span: 8,
        },
      },
    },
    number7: {
      type: "number",
      title: "按钮位置",
      default: 1,
      minimum: 1,
      maximum: 10,
      ui: {
        controlsPosition: "right",
      },
    },
  },
  required: ["number1"],
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

<style scoped></style>
