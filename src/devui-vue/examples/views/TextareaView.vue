<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta" />
    <div class="btns">
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
const formData = ref({});
const meta = {
  type: "object",
  properties: {
    remark: {
      type: "string",
      title: "基本用法",
      ui: {
        component: "textarea",
        showRequired: true,
      },
    },
    remark1_1: {
      type: "string",
      title: "自适应文本框",
      ui: {
        component: "textarea",
        placeholder: "autosize",
        autosize: true,
      },
    },
    remark1_2: {
      type: "string",
      title: "自适应文本框",
      ui: {
        component: "textarea",
        placeholder: "{ minRows: 2, maxRows: 4 }",
        autosize: { minRows: 2, maxRows: 4 },
      },
    },
    remark2: {
      type: "string",
      title: "文本框高度控制",
      ui: {
        component: "textarea",
        rows: 5,
      },
    },
    remark3_1: {
      type: "string",
      title: "调整大小 vertical",
      ui: {
        component: "textarea",
        resize: "vertical",
      },
    },
    remark3_2: {
      type: "string",
      title: "调整大小 horizontal",
      ui: {
        component: "textarea",
        resize: "horizontal",
      },
    },
    remark3_3: {
      type: "string",
      title: "调整大小 both",
      ui: {
        component: "textarea",
        resize: "both",
      },
    },
    remark4: {
      type: "string",
      title: "禁用状态",
      ui: {
        component: "textarea",
        placeholder: "我是被禁用状态",
      },
      readOnly: true,
    },
    remark5_1: {
      type: "string",
      title: "显示字数",
      ui: {
        component: "textarea",
        placeholder: "请输入",
        showCount: true,
      },
    },
    remark5_2: {
      type: "string",
      title: "显示最大字数",
      maxLength: 10,
      ui: {
        component: "textarea",
        placeholder: "请输入",
        showCount: true,
      },
    },
    remark6: {
      type: "string",
      title: "事件响应",
      ui: {
        component: "textarea",
        placeholder: "打开控制台输入文字看看",
        update: (val: string) => console.log("update", val),
        change: (val: string) => console.log("change", val),
        focus: (e: Event) => console.log("focus", e),
        blur: (e: Event) => console.log("blur", e),
        keydown: (e: Event) => console.log("keydown", e),
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
