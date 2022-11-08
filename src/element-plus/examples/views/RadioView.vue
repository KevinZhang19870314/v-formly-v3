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
    radio1: {
      title: "基础用法",
      type: "string",
      ui: {
        component: "radio",
        options: [{ label: "Option 1" }, { label: "Option 2" }],
      },
    },
    radio2: {
      title: "禁用状态",
      type: "string",
      readOnly: true,
      default: "Option 2",
      ui: {
        component: "radio",
        options: [{ label: "Option 1" }, { label: "Option 2" }],
      },
    },
    radio3: {
      title: "单选框组",
      type: "string",
      default: 3,
      ui: {
        component: "radio",
        options: [
          { text: "Option 1", label: 3 },
          { text: "Option 2", label: 6 },
          { text: "Option 3", label: 9 },
        ],
      },
    },
    radio4: {
      title: "按钮样式",
      type: "string",
      default: "New York",
      ui: {
        component: "radio",
        button: true,
        options: [
          { label: "New York" },
          { label: "Washington" },
          { label: "Los Angeles" },
          { label: "Chicago" },
        ],
      },
    },
    radio5: {
      title: "带有边框",
      type: "string",
      default: "Option 1",
      ui: {
        component: "radio",
        border: true,
        options: [{ label: "Option 1" }, { label: "Option 2" }],
      },
    },
  },
  required: [""],
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
