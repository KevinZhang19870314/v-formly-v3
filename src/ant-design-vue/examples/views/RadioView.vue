<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta"> </v-formly-v3>
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw, unref } from "vue";
import type VFormly from "@/ant-design-vue/AFormly.vue";

const form = ref<null | InstanceType<typeof VFormly>>(null);
const meta = {
  type: "object",
  properties: {
    single: {
      title: "基本",
      type: "string",
      ui: {
        showRequired: true,
        component: "radio",
        options: ["同意"],
      },
    },
    multiple: {
      title: "规格",
      type: "string",
      default: "中",
      ui: {
        component: "radio",
        options: ["大", "中", "小"],
      },
    },
    buttonStyle: {
      title: "按钮样式",
      type: "string",
      ui: {
        component: "radio",
        options: [
          { label: "北京", value: "北京" },
          { label: "上海", value: "上海" },
          { label: "深圳", value: "深圳", disabled: true },
          { label: "广州", value: "广州" },
        ],
        optionType: "button",
        buttonStyle: "outline",
      },
    },
    buttonStyleSolid: {
      title: "按钮样式",
      type: "string",
      default: "上海",
      ui: {
        component: "radio",
        options: [
          { label: "北京", value: "北京" },
          { label: "上海", value: "上海" },
          { label: "深圳", value: "深圳", disabled: true },
          { label: "广州", value: "广州" },
        ],
        optionType: "button",
        buttonStyle: "solid",
      },
    },
    vertical: {
      title: "竖向排列",
      type: "string",
      ui: {
        component: "radio",
        options: ["大", "中", "小"],
        direction: "vertical",
      },
    },
  },
  required: ["single"],
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
