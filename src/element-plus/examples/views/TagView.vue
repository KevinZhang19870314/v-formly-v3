<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta" />
    <div class="btns">
      <el-button type="primary" @click="changeEnum"> 设置 enum </el-button>
      <el-button type="primary" @click="submit"> 提交 </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw, unref } from "vue";
import type VFormly from "@/element-plus/ElFormly.vue";
import type { NumberMeta } from "@/core/meta/number.meta";

const form = ref<null | InstanceType<typeof VFormly>>(null);
const formData = ref({});
const meta = {
  properties: {
    like1: {
      type: "number",
      title: "兴趣",
      enum: [
        { value: 1, label: "电影" },
        { value: 2, label: "书" },
        { value: 3, label: "旅行" },
      ],
      ui: {
        component: "tag",
        showRequired: true,
        errors: {
          required: "请至少选择一项",
        },
        checkedChange: (checked: boolean) =>
          console.log("checkedChange", checked),
        change: (value: any) => console.log("change", value),
      },
    },
    like2: {
      type: "number",
      title: "no label",
      enum: ["电影", "书", "旅行"],
      ui: {
        component: "tag",
      },
    },
    like3: {
      type: "number",
      title: "禁用状态",
      readOnly: true,
      enum: ["电影", "书", "旅行"],
      ui: {
        component: "tag",
      },
      default: ["电影", "书"],
    },
  },
  required: ["like1"],
};

function changeEnum() {
  const ctx = form.value!.getContext<NumberMeta>("/like1");
  if (ctx) {
    ctx.meta.value.enum = [
      { value: 1, label: "new 电影" },
      { value: 2, label: "new 书" },
      { value: 3, label: "new 旅行" },
    ];
  }
}
async function submit() {
  const valid = await form.value!.validate();
  if (valid) {
    console.log(toRaw(unref(formData)));
  }
}
</script>
