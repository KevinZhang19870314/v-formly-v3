<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type VFormly from "@/Formly.vue";

const form = ref<null | InstanceType<typeof VFormly>>(null);
const formData = ref({});
const meta = {
  type: "object",
  properties: {
    product: {
      type: "array",
      title: "产品清单",
      items: {
        type: "object",
        properties: {
          name: {
            type: "string",
            title: "名称",
          },
          desc: { type: "string", title: "简介" },
        },
      },
      ui: { grid: { arraySpan: 18 } },
    },
  },
};
</script>
