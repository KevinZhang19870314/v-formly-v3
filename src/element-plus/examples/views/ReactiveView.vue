<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta"></v-formly-v3>
    <div class="btns">
      <el-button type="primary" @click="submit"> 设置禁用 </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type VFormly from "@/element-plus/ElFormly.vue";

const form = ref<null | InstanceType<typeof VFormly>>(null);
const isDisabled = ref(false);
const meta = {
  type: "object",
  properties: {
    string1: {
      title: "基本使用",
      type: "string",
      readOnly: isDisabled,
      ui: {
        showRequired: true,
        placeholder: "Basic usage",
        errors: {
          required: "请输入",
        },
        change: (val: string) => console.log(val),
      },
    },
  },
  required: ["string1"],
};
let formData: any = ref({});

function submit() {
  isDisabled.value = !isDisabled.value;
}
</script>

<style scoped></style>
