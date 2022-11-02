<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta" />
    <div class="btns">
      <a-button type="primary" @click="setName0"> 设置 name </a-button>
      <a-button type="primary" @click="add"> 添加 1 个</a-button>
      <a-button type="primary" @click="set(5)"> 添加 5 个</a-button>
      <a-button type="primary" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, toRaw, unref } from "vue";
import type VFormly from "@/Formly.vue";
import type { ArrayMeta } from "@/meta/array.meta";

const form = ref<null | InstanceType<typeof VFormly>>(null);
const formData = ref({
  product: [
    {
      name: "3",
    },
  ],
});
const meta = {
  type: "object",
  properties: {
    name: {
      title: "姓名",
      type: "string",
      ui: {
        showRequired: true,
      },
    },
    product: {
      type: "array",
      title: "产品清单",
      // description: "至少添加一个，至多添加三个",
      minItems: 1,
      maxItems: 3,
      items: {
        type: "object",
        properties: {
          name: {
            type: "string",
            title: "名称",
            ui: {
              showRequired: true,
            },
            default: "1",
          },
          desc: { type: "string", title: "简介" },
          product: {
            type: "array",
            title: "产品清单",
            items: {
              type: "object",
              properties: {
                name: { type: "string", title: "名称", default: "1-1" },
                desc: { type: "string", title: "简介" },
              },
            },
            ui: {
              grid: { arraySpan: 24 },
            },
          },
        },
        required: ["name"],
      },
      ui: {
        showRequired: true,
        grid: { arraySpan: 24 },
        addTitle: "添加",
        optional: "(选填)",
        optionalHelp: {
          icon: "QuestionCircleOutlined",
          text: "选填帮助",
        },
      },
      default: [
        {
          name: "2",
        },
      ],
    },
  },
  required: ["name"],
};
async function submit() {
  const valid = await form.value!.validate();
  console.log(valid, toRaw(unref(formData)));
}
function setName0() {
  const context = form.value!.getContext<ArrayMeta>("/product/0/name");
  if (context) {
    context.value = "kevin zhang";
  }
}
function clear() {
  const ctx = form.value!.getContext<ArrayMeta>("/product");
  console.log(ctx.value);
  ctx.value = [];
}
function set(num: number) {
  const ctx = form.value!.getContext<ArrayMeta>("/product");
  console.log(ctx.value);
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push({
      name: `${i}`,
      desc: `${i}`,
      product: [
        { name: `${i}-1`, desc: `${i}-1` },
        { name: `${i}-2`, desc: `${i}-2` },
        { name: `${i}-3`, desc: `${i}-3` },
        { name: `${i}-4`, desc: `${i}-4` },
      ],
    });
  }
  ctx.value = arr;
}
function add() {
  const ctx = form.value!.getContext<ArrayMeta>("/product");
  ctx.add();
}
</script>
