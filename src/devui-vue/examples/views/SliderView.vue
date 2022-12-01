<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta" />
    <div class="btns">
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
const formData = ref({});

const meta = {
  properties: {
    count: {
      type: "number",
      title: "基本用法",
      ui: {
        component: "slider",
      },
      default: 10,
    },
    count1: {
      type: "number",
      title: "禁止输入态",
      readOnly: true,
      ui: {
        component: "slider",
      },
      default: 10,
    },
    count2: {
      type: "number",
      title: "可设置 Step 的滑动组件",
      ui: {
        component: "slider",
      },
      minimum: 0,
      maximum: 20,
      multipleOf: 4,
    },
    count3: {
      type: "number",
      title: "定制 Popover 显示内容",
      ui: {
        component: "slider",
        tipsRenderer: (val: number) => `${val} apples`,
      },
    },
    count4: {
      type: "number",
      title: "隐藏 Tooltip",
      ui: {
        component: "slider",
        tipsRenderer: null,
      },
    },
  },
};

async function submit() {
  const valid = await form.value!.validate();
  if (valid) {
    console.log(toRaw(unref(formData)));
  }
}
</script>
