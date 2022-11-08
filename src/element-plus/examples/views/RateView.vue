<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta" />
    <div class="btns">
      <el-button type="primary" @click="submit"> 提交 </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw, unref, markRaw } from "vue";
import type VFormly from "@/element-plus/ElFormly.vue";
import {
  ChatDotRound,
  ChatLineRound,
  ChatRound,
} from "@element-plus/icons-vue";

const form = ref<null | InstanceType<typeof VFormly>>(null);
const formData = ref({});
// same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
const colors = ref(["#99A9BF", "#F7BA2A", "#FF9900"]);
const texts = ref(["oops", "disappointed", "normal", "good", "great"]);
// same as { 2: ChatRound, 4: { value: ChatLineRound, excluded: true }, 5: ChatDotRound }
const icons = [
  markRaw(ChatRound),
  markRaw(ChatLineRound),
  markRaw(ChatDotRound),
];
const meta = {
  properties: {
    rate1_1: {
      type: "number",
      title: "Default",
      default: 2,
      ui: {
        component: "rate",
        grid: { span: 12 },
        change: (val: number) => console.log("change", val),
      },
    },
    rate1_2: {
      type: "number",
      title: "Color for different levels",
      ui: {
        component: "rate",
        colors,
        grid: { span: 12 },
      },
    },
    rate2_1: {
      type: "number",
      title: "尺寸 (small)",
      ui: {
        component: "rate",
        size: "small",
        grid: { span: 8 },
      },
    },
    rate2_2: {
      type: "number",
      title: "尺寸 (default)",
      ui: {
        component: "rate",
        size: "default",
        grid: { span: 8 },
      },
    },
    rate2_3: {
      type: "number",
      title: "尺寸 (large)",
      ui: {
        component: "rate",
        grid: { span: 8 },
      },
    },
    rate3: {
      type: "number",
      title: "允许半选",
      default: 2.5,
      ui: {
        component: "rate",
        allowHalf: true,
      },
    },
    rate4: {
      type: "number",
      title: "辅助文字",
      ui: {
        component: "rate",
        texts,
        showText: true,
      },
    },
    rate5: {
      type: "number",
      title: "可清空",
      default: 3,
      ui: {
        component: "rate",
        clearable: true,
      },
    },
    rate6: {
      type: "number",
      title: "只读",
      readOnly: true,
      default: 3.7,
      ui: {
        component: "rate",
        showScore: true,
        textColor: "#ff9900",
        scoreTemplate: "{value} points",
      },
    },
    rate7: {
      type: "number",
      title: "maximum",
      maximum: 10,
      default: 4,
      ui: {
        component: "rate",
      },
    },
    rate8: {
      type: "number",
      title: "更多种类的图标",
      ui: {
        component: "rate",
        icons,
        voidIcon: "ChatRound",
        colors: ["#409eff", "#67c23a", "#FF9900"],
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
