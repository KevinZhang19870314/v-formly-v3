<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta"></v-formly-v3>
    <div class="btns">
      <d-button variant="solid" color="primary" @click="submit"> 设置边框 </d-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type VFormly from "@/devui-vue/DFormly.vue";

const form = ref<null | InstanceType<typeof VFormly>>(null);
const hasBorder = ref(true);
const meta = {
  type: "object",
  properties: {
    string1: {
      title: "基本使用",
      type: "string",
      ui: {
        showRequired: true,
        placeholder: "Basic usage",
        bordered: hasBorder,
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
  hasBorder.value = !hasBorder.value;
}
</script>

<style scoped></style>
