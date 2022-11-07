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
import type VFormly from "@/ant-design-vue/AFormly.vue";

const form = ref<null | InstanceType<typeof VFormly>>(null);
let formData: any = ref({});

const meta = {
  type: "object",
  properties: {
    name: {
      title: "姓名",
      type: "string",
      default: "kevin",
      ui: {
        showRequired: true,
        validator: (val: string) =>
          !val ? [{ keyword: "required", message: "Required name" }] : [],
      },
    },
    desc: {
      title: "描述",
      type: "string",
      ui: {
        showRequired: true,
        validator: (val: string) =>
          !val ? [{ keyword: "required", message: "Required desc" }] : [],
      },
    },
    asyncError: {
      title: "异步错误（2秒）",
      type: "string",
      ui: {
        showRequired: true,
        validatorAsync: (val: string) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(
                !val
                  ? [
                      {
                        keyword: "required",
                        message: "Required asyncError",
                      },
                    ]
                  : []
              );
            }, 2000);
          });
        },
      },
    },
  },
  required: ["name", "desc", "asyncError"],
};

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
