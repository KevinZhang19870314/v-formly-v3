<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta" />
    <div class="btns">
      <d-button variant="solid" color="danger" @click="clear"> 重置 </d-button>
      <d-button variant="solid" color="primary" @click="submit">
        提交
      </d-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw, unref } from "vue";
import type VFormly from "@/devui-vue/DFormly.vue";

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
    multiple1_1: {
      title: "规格",
      type: "string",
      default: "中",
      ui: {
        component: "radio",
        options: ["大", "中", "小"],
        change: (val: any) => console.log("change", val),
      },
    },
    multiple1_2: {
      title: "禁用",
      type: "string",
      readOnly: true,
      default: "中",
      ui: {
        component: "radio",
        options: ["大", "中", "小"],
      },
    },
    buttonStyle: {
      title: "尺寸和边框",
      type: "string",
      ui: {
        component: "radio",
        options: [
          { label: "北京", value: "北京" },
          { label: "上海", value: "上海" },
          { label: "深圳", value: "深圳", disabled: true },
          { label: "广州", value: "广州" },
        ],
        size: "lg",
        border: true,
      },
    },
    buttonStyleSolid: {
      title: "按钮形态",
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
      },
    },
    vertical: {
      title: "竖向排列",
      type: "string",
      ui: {
        component: "radio",
        options: ["大", "中", "小"],
        direction: "column",
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
