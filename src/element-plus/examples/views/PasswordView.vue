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
    name: {
      title: "用户名",
      type: "string",
      default: "kevin",
      ui: {
        showRequired: true,
        errors: {
          required: "请输入用户名",
        },
      },
    },
    password: {
      title: "密码",
      type: "string",
      default: "123456",
      ui: {
        component: "password",
        showRequired: true,
        errors: {
          required: "请输入密码",
        },
      },
    },
  },
  required: ["name", "password"],
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
