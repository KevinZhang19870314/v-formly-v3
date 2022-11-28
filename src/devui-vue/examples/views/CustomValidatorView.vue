<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta" />
    <div class="btns">
      <d-button variant="solid" color="danger" @click="clear"> 重置 </d-button>
      <d-button variant="solid" color="primary" @click="submit">
        提交
      </d-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw, unref } from "vue";
import type VFormly from "@/devui-vue/DFormly.vue";

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
