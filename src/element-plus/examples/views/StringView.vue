<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta">
      <!-- string2_x -->
      <template v-slot:string2_2_prefix>
        <user-outlined />
      </template>
      <template v-slot:string2_2_suffix>
        <a-tooltip title="Extra information">
          <info-circle-outlined />
        </a-tooltip>
      </template>

      <!-- string3_x -->
      <template v-slot:string3_1_addon_before>
        <a-select default-value="Http://" style="width: 90px">
          <a-select-option value="Http://"> Http:// </a-select-option>
          <a-select-option value="Https://"> Https:// </a-select-option>
        </a-select>
      </template>
      <template v-slot:string3_2_addon_after>
        <a-select default-value=".com" style="width: 80px">
          <a-select-option value=".com"> .com </a-select-option>
          <a-select-option value=".jp"> .jp </a-select-option>
          <a-select-option value=".cn"> .cn </a-select-option>
          <a-select-option value=".org"> .org </a-select-option>
        </a-select>
      </template>

      <!-- string6 -->
      <template v-slot:string6_suffix>
        <div style="cursor: pointer" @click="string6SuffixClick">
          <eye-invisible-outlined v-if="!visibilityToggle" />
          <eye-outlined v-if="visibilityToggle" />
        </div>
      </template>
    </v-formly-v3>
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw, unref } from "vue";
import type VFormly from "@/Formly.vue";
import type { StringMeta } from "@/meta/string.meta";

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
        change: (val: string) => console.log(val),
      },
    },
    string2_1: {
      title: "前缀和后缀",
      type: "string",
      ui: {
        placeholder: "prefix and suffix",
        prefix: "￥",
        suffix: "RMB",
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
      title: "前置/后置标签",
      type: "string",
      default: "mysite",
      ui: {
        placeholder: "addonBefore/addonAfter",
        addonBefore: "Http://",
        addonAfter: ".com",
      },
    },
    string3_2: {
      title: "前置/后置标签slot",
      type: "string",
      ui: {
        placeholder: "addonBefore/addonAfter with slot",
        slotNameOfAddonBefore: "string3_1_addon_before",
        slotNameOfAddonAfter: "string3_2_addon_after",
      },
    },
    string4: {
      title: "带移除图标",
      type: "string",
      ui: {
        placeholder: "input with clear icon",
        allowClear: true,
      },
    },
    string5_1: {
      title: "大",
      type: "string",
      ui: {
        placeholder: "large size",
        size: "large",
        grid: {
          span: 8,
        },
      },
    },
    string5_2: {
      title: "默认",
      type: "string",
      ui: {
        placeholder: "default size",
        grid: {
          span: 8,
        },
      },
    },
    string5_3: {
      title: "小",
      type: "string",
      ui: {
        placeholder: "small size",
        size: "small",
        grid: {
          span: 8,
        },
      },
    },
    string6: {
      title: "密码框",
      type: "string",
      ui: {
        placeholder: "input password",
        type: "password",
        slotNameOfSuffix: "string6_suffix",
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
let formData: any = ref({});
let visibilityToggle = ref(false);

function clear() {
  formData.value = null;
}

async function submit() {
  let valid = await form.value!.validate();
  if (valid) {
    console.log(toRaw(unref(formData)));
  }
}

function string6SuffixClick() {
  visibilityToggle.value = !visibilityToggle.value;
  const context = form.value!.getContext<StringMeta>("/string6");
  context.ui.value.type = visibilityToggle.value ? "text" : "password";
}
</script>

<style scoped></style>
