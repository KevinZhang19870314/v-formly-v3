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
import type VFormly from "@/Formly.vue";

const form = ref<null | InstanceType<typeof VFormly>>(null);
const meta = {
  type: "object",
  properties: {
    obj1: {
      title: "对象1",
      type: "string",
    },
    nestedObj2: {
      type: "object",
      properties: {
        nestedObj2_1: {
          title: "嵌套对象1",
          type: "string",
        },
        nestedObj2_2: {
          title: "嵌套对象2",
          type: "string",
        },
      },
    },
  },
  required: ["string1"],
};
let formData: any = ref({ obj1: "Kevin" });

function clear() {
  formData.value = null;
}

async function submit() {
  let valid = await (form.value as any).validate();
  if (valid) {
    console.log(toRaw(unref(formData)));
  }
}
</script>

<style scoped></style>
