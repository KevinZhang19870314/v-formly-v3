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
    rate: {
      type: "number",
      title: "基础用法",
      ui: {
        component: "rate",
        change: (val: number) => console.log("change", val),
      },
      default: 4,
    },
    rate1: {
      type: "number",
      title: "半选模式",
      ui: {
        component: "rate",
        allowHalf: true,
      },
      default: 3.5,
    },
    rate2: {
      type: "number",
      title: "maximum=10",
      maximum: 10,
      default: 4,
      ui: {
        component: "rate",
      },
    },
    rate3: {
      type: "number",
      title: "只读模式",
      readOnly: true,
      ui: {
        component: "rate",
      },
      default: 1,
    },
    rate4: {
      type: "number",
      title: "动态模式",
      readOnly: true,
      ui: {
        component: "rate",
        icon: "star-o",
      },
      default: 1,
    },
    rate5: {
      type: "number",
      title: "动态模式-自定义",
      maximum: 6,
      ui: {
        component: "rate",
        character: "A",
        color: "#ffa500",
      },
      default: 1,
    },
    rate6: {
      type: "number",
      title: "使用 type 参数",
      readOnly: true,
      ui: {
        component: "rate",
        type: "success",
      },
      default: 1,
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
