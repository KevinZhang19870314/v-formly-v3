<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta">
      <!-- string1 -->
      <template v-slot:string1_prefix>
        <user-outlined />
      </template>
      <template v-slot:string1_1_suffix>
        <a-tooltip title="Extra information">
          <info-circle-outlined />
        </a-tooltip>
      </template>
    </v-formly-v3>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type VFormly from "@/devui-vue/DFormly.vue";

const form = ref<null | InstanceType<typeof VFormly>>(null);
const meta = {
  type: "object",
  properties: {
    string1: {
      title: "用户名",
      type: "string",
      ui: {
        placeholder: "请输入用户名",
        slotNameOfPrefix: "string1_prefix",
        slotNameOfSuffix: "string1_1_suffix",
      },
    },
  },
};
let formData: any = ref({});
</script>

<style scoped></style>
