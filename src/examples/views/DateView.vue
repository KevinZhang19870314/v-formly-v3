<template>
  <div>
    <v-formly ref="form" v-model="formData" :meta="meta" :layout="'horizontal'">
      <template v-slot:custom_suffix>
        <smile-outlined />
      </template>
    </v-formly>
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type VFormly from "@/Formly.vue";
import { ref, toRaw, unref } from "vue";

const form = ref<null | InstanceType<typeof VFormly>>(null);
const meta = {
  type: "object",
  properties: {
    month: {
      type: "string",
      title: "月份",
      default: "May",
      ui: {
        component: "date",
        picker: "month",
        valueFormat: "MMMM",
        slotNameOfSuffixIcon: "custom_suffix",
      },
    },
    week: {
      type: "string",
      title: "周",
      ui: {
        component: "date",
        picker: "week",
      },
    },
    range: {
      type: "string",
      title: "日期范围",
      ui: {
        component: "date",
        type: "range",
        picker: "date",
        slotNameOfSuffixIcon: "custom_suffix",
      },
    },
    date: {
      type: "string",
      title: "日期",
      ui: {
        component: "date",
        picker: "date",
        valueFormat: "X",
      },
    },
  },
  required: [],
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
