<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta"></v-formly-v3>
    <div class="btns">
      <d-button variant="solid" color="primary" @click="submit">
        设置尺寸
      </d-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type VFormly from "@/devui-vue/DFormly.vue";
const formData: any = ref({});
const form = ref<null | InstanceType<typeof VFormly>>(null);
const size = ref("md");
const meta = {
  type: "object",
  properties: {
    string1: {
      title: "基本使用",
      type: "string",
      ui: {
        showRequired: true,
        placeholder: "Basic usage",
        size: size,
        errors: {
          required: "请输入",
        },
        change: (val: string) => console.log(val),
      },
    },
  },
  required: ["string1"],
};

function submit() {
  size.value = "lg";
}
</script>

<style scoped></style>
