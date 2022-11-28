<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta">
      <!-- string2_x -->
      <template v-slot:string2_2_prefix>
        <d-icon name="search" />
      </template>
      <template v-slot:string2_2_suffix>
        <d-icon name="help" />
      </template>

      <!-- string3_x -->
      <template v-slot:string3_1_prepend>
        <d-select v-model="value1" :options="options1" style="width: 90px" />
      </template>
      <template v-slot:string3_1_append>
        <d-select v-model="value2" :options="options2" style="width: 80px" />
      </template>
    </v-formly-v3>
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

const formData: any = ref({});
const form = ref<null | InstanceType<typeof VFormly>>(null);
const meta = {
  type: "object",
  properties: {
    string1: {
      title: "基本使用",
      type: "string",
      ui: {
        showRequired: true,
        placeholder: "Basic usage",
        errors: {
          required: "请输入",
        },
        change: (val: string) => console.log("change", val),
        input: (val: string) => console.log("input", val),
        focus: (e: Event) => console.log("focus", e),
        blur: (e: Event) => console.log("blur", e),
        keydown: (e: Event) => console.log("keydown", e),
      },
    },
    string2_1: {
      title: "前缀和后缀",
      type: "string",
      ui: {
        placeholder: "prefix and suffix",
        prefix: "search",
        suffix: "help",
      },
    },
    string2_2: {
      title: "前缀和后缀slot",
      type: "string",
      ui: {
        placeholder: "prefix and suffix with slot",
        slotNameOfPrefix: "string2_2_prefix",
        slotNameOfSuffix: "string2_2_suffix",
      },
    },
    string3_1: {
      title: "前置/后置标签slot",
      type: "string",
      ui: {
        placeholder: "prepend/append with slot",
        slotNameOfPrepend: "string3_1_prepend",
        slotNameOfAppend: "string3_1_append",
      },
    },
    string4: {
      title: "一键清空",
      type: "string",
      ui: {
        placeholder: "input with clear icon",
        clearable: true,
        clear: () => console.log("clear"),
      },
    },
    string5_1: {
      title: "大",
      type: "string",
      ui: {
        placeholder: "large size",
        size: "lg",
        grid: { span: 8 },
      },
    },
    string5_2: {
      title: "默认",
      type: "string",
      ui: {
        placeholder: "default size",
        grid: { span: 8 },
      },
    },
    string5_3: {
      title: "小",
      type: "string",
      ui: {
        placeholder: "small size",
        size: "sm",
        grid: { span: 8 },
      },
    },
    string6: {
      title: "密码框",
      type: "string",
      ui: {
        placeholder: "input password",
        showPassword: true,
      },
    },
    string7: {
      title: "正则表达式",
      type: "string",
      pattern: "^[abc]+$",
      ui: {
        placeholder: "^[abc]+$",
        errors: {
          pattern: "数据格式不正确",
        },
      },
    },
  },
  required: ["string1"],
};

const value1 = ref("Https://");
const options1 = ref(["Http://", "Https://"]);
const value2 = ref(".com");
const options2 = ref([".com", ".jp", ".cn", ".org"]);

function clear() {
  formData.value = null;
}

async function submit() {
  const valid = await form.value!.validate();
  if (valid) {
    console.log(toRaw(unref(formData)));
  }
}
</script>
