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
let formData: any = ref({});

const meta = {
  type: "object",
  properties: {
    string1: {
      title: "字段二是否可见",
      type: "string",
      ui: {
        showRequired: true,
        placeholder: "当值为v-formly时字段二可见",
        errors: {
          required: "请输入",
        },
        change: (val: string) => console.log(val),
      },
    },
    string2: {
      title: "字段二",
      type: "string",
      ui: {
        showRequired: true,
        show: false,
        visibleIf: {
          "/string1": (context: any, id: string, val: string) => {
            return val === "v-formly";
          },
        },
      },
    },
  },
  required: ["string1", "string2"],
};

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
