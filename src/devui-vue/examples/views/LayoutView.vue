<template>
  <div>
    <d-radio-group direction="row" v-model="mode" class="radio-wrapper">
      <d-radio-button value="horizontal"> 水平 </d-radio-button>
      <d-radio-button value="vertical"> 垂直 </d-radio-button>
      <d-radio-button value="inline"> 行内 </d-radio-button>
    </d-radio-group>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta" :layout="mode" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let mode = ref("horizontal");
const meta = {
  type: "object",
  properties: {
    name: {
      title: "姓名",
      type: "string",
      default: "kevin",
      ui: {
        showRequired: true,
        errors: {
          required: "请输入姓名",
        },
      },
    },
    desc: {
      title: "描述",
      type: "string",
      default: "Base on technical, but not limited on it!",
      ui: {
        change: (val: any) => {
          console.log("val = ", val);
        },
      },
    },
    enable: {
      title: "启用",
      type: "boolean",
    },
  },
  required: ["name"],
};
let formData = ref({ enable: true });
</script>

<style lang="less" scoped>
.radio-wrapper {
  margin-bottom: 32px;
  margin-left: 64px;
}
</style>
