<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta">
      <template v-slot:testSlot>
        <div style="color: green; border: 1px dashed green">
          slot 类型的 text
        </div>
      </template>
    </v-formly-v3>
    <div class="btns">
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw, unref } from "vue";
import type VFormly from "@/Formly.vue";

const form = ref<null | InstanceType<typeof VFormly>>(null);
const formData = ref({});
const meta = {
  type: "object",
  properties: {
    remark: {
      type: "string",
      title: "描述",
      ui: {
        component: "textarea",
        showRequired: true,
        change: (val: any) => console.log("change", val),
        focus: (e: any) => console.log("focus", e),
        blur: (e: any) => console.log("blur", e),
        pressEnter: (e: any) => console.log("pressEnter", e),
      },
    },
    remark1: {
      type: "string",
      title: "指定 autoSize",
      ui: {
        component: "textarea",
        placeholder: "{ minRows: 2, maxRows: 6 }",
        autoSize: { minRows: 2, maxRows: 6 },
      },
    },
    remark2: {
      type: "string",
      title: "自适应内容高度",
      default:
        "content content content content content content content content content content content content content content content content content content content content content content content content",
      ui: {
        component: "textarea",
      },
    },
    remark3: {
      type: "string",
      title: "不自适应内容高度",
      default:
        "content content content content content content content content content content content content content content content content content content content content content content content content",
      ui: {
        component: "textarea",
        autoSize: false,
      },
    },
    remark4: {
      type: "string",
      title: "禁用状态",
      default: "content content content",
      ui: {
        component: "textarea",
      },
      readOnly: true,
    },
    remark5: {
      type: "string",
      title: "显示清除按钮",
      default: "content content content",
      ui: {
        component: "textarea",
        allowClear: true,
      },
    },
    remark6: {
      type: "string",
      title: "最大长度",
      maxLength: 10,
      ui: {
        component: "textarea",
        placeholder: "maxLength = 10",
        showCount: true,
        autoSize: false,
      },
    },
  },
  required: ["remark"],
};

async function submit() {
  const valid = await form.value!.validate();
  if (valid) {
    console.log(toRaw(unref(formData)));
  }
}
</script>
