<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta" layout="horizontal">
    </v-formly-v3>
    <div class="btns">
      <el-button type="danger" @click="clear"> 重置 </el-button>
      <el-button type="primary" @click="submit"> 提交 </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw, unref } from "vue";
import type VFormly from "@/element-plus/ElFormly.vue";

const form = ref<null | InstanceType<typeof VFormly>>(null);
const select1Options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
const select2Options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
    disabled: true,
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
const meta = {
  properties: {
    select1: {
      type: "string",
      title: "基础用法",
      ui: {
        component: "select",
        placeholder: "Select",
        options: select1Options,
        change: (val: any) => console.log("change", val),
      },
    },
    select2: {
      type: "string",
      title: "有禁用选项",
      ui: {
        component: "select",
        placeholder: "Select",
        options: select2Options,
      },
    },
    select3: {
      type: "string",
      title: "有禁用选项",
      readOnly: true,
      ui: {
        component: "select",
        placeholder: "Select",
        options: select1Options,
      },
    },
    select4: {
      type: "string",
      title: "可清空单选",
      ui: {
        component: "select",
        placeholder: "Select",
        options: select1Options,
        clearable: true,
      },
    },
    select5_1: {
      type: "string",
      title: "基础多选(default)",
      ui: {
        component: "select",
        placeholder: "Select",
        options: select1Options,
        multiple: true,
      },
    },
    select5_2: {
      type: "string",
      title: "基础多选(use collapse-tags)",
      ui: {
        component: "select",
        placeholder: "Select",
        options: select1Options,
        multiple: true,
        collapseTags: true,
      },
    },
    select5_3: {
      type: "string",
      title: "基础多选(use collapse-tags-tooltip)",
      ui: {
        component: "select",
        placeholder: "Select",
        options: select1Options,
        multiple: true,
        collapseTags: true,
        collapseTagsTooltip: true,
      },
    },
  },
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
