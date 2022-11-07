<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta">
      <template v-slot:testSlot> @<HeartOutlined />@ </template>
    </v-formly-v3>
    <div class="btns">
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw, unref } from "vue";
import type VFormly from "@/ant-design-vue/AFormly.vue";
import { HeartOutlined } from "@ant-design/icons-vue";

const form = ref<null | InstanceType<typeof VFormly>>(null);
const formData = ref({});
const meta = {
  properties: {
    rate: {
      type: "number",
      title: "评级",
      ui: {
        component: "rate",
        change: (val: number) => console.log("change", val),
        hoverChange: (val: number) => console.log("hoverChange", val),
      },
      default: 4,
    },
    rate1: {
      type: "number",
      title: "支持选中半星",
      maximum: 5,
      default: 4.5,
      ui: {
        component: "rate",
        allowHalf: true,
      },
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
      title: "只读",
      readOnly: true,
      ui: {
        component: "rate",
      },
      default: 1,
    },
    rate4: {
      type: "number",
      title: "禁用点击后清除",
      ui: {
        component: "rate",
        allowClear: false,
      },
      default: 1,
    },
    rate5: {
      type: "number",
      title: "自定义提示信息",
      ui: {
        component: "rate",
        tooltips: ["terrible", "bad", "normal", "good", "wonderful"],
      },
      default: 1,
    },
    rate6: {
      type: "number",
      title: "自定义字符 string",
      ui: {
        component: "rate",
        character: "ABC",
      },
      default: 1,
    },
    rate7: {
      type: "number",
      title: "自定义字符 slot",
      ui: {
        component: "rate",
        slotNameOfCharacter: "testSlot", // slot
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
