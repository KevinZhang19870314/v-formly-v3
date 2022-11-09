<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta">
      <!-- string1 -->
      <template v-slot:string1_prefix>
        <el-icon><User /></el-icon>
      </template>
      <template v-slot:string1_1_suffix>
        <el-tooltip title="Extra information">
          <el-icon><Warning /></el-icon>
        </el-tooltip>
      </template>
    </v-formly-v3>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type VFormly from "@/element-plus/ElFormly.vue";
import { User, Warning } from "@element-plus/icons-vue";

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
