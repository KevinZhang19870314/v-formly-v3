<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta"> </v-formly-v3>
    <div class="btns">
      <d-button variant="solid" color="danger" @click="clear"> 重置 </d-button>
      <d-button variant="solid" color="primary" @click="submit"> 提交 </d-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw, unref } from "vue";
import type VFormly from "@/devui-vue/DFormly.vue";

const form = ref<null | InstanceType<typeof VFormly>>(null);
const meta = {
  type: "object",
  properties: {
    name: {
      title: "姓名",
      type: "string",
      default: "kevin",
      ui: {
        showRequired: true,
        errors: {
          required: "请输入姓名",
        },
      },
    },
    favLanguage: {
      title: "喜欢的前端框架",
      type: "string",
      enum: ["VueJs", "Angular", "React", "Others"],
      // default: {
      //   options: ["VueJs", "Angular", "Others"],
      //   others: "NestJs",
      // },
      ui: {
        component: "chkinput",
        showRequired: true,
      },
    },
  },
  required: ["name", "favLanguage"],
};

let formData: any = ref({
  name: "Jack",
  favLanguage: {
    options: ["VueJs", "Angular", "Others"],
    others: "NestJs",
  },
});

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
