<template>
  <div>
    <el-radio-group v-model="mode">
      <el-radio-button label="horizontal"> 水平 </el-radio-button>
      <el-radio-button label="vertical"> 垂直 </el-radio-button>
      <el-radio-button label="inline"> 行内 </el-radio-button>
    </el-radio-group>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta" :layout="mode" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const mode = ref("horizontal");
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
const formData = ref({ enable: true });
</script>

<style lang="less" scoped>
.el-radio-group {
  margin: 20px;
}
</style>
