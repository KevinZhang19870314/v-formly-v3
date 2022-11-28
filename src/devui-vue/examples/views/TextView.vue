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
      <d-button variant="solid" color="primary" @click="changeText">
        设置文本
      </d-button>
      <d-button variant="solid" color="primary" @click="submit">
        提交
      </d-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type VFormly from "@/devui-vue/DFormly.vue";
import { ref, toRaw, unref } from "vue";

const form = ref<InstanceType<typeof VFormly> | null>(null);
const formData = ref<any>({});

const id1Text = ref("包含 title 和 description 的文本");

const meta = {
  properties: {
    name: {
      title: "姓名",
      type: "string",
      ui: {
        showRequired: true,
      },
    },
    id1: {
      title: "title",
      description: "description",
      type: "null",
      ui: {
        component: "text",
        text: id1Text, // string
      },
    },
    id2: {
      type: "null",
      ui: {
        component: "text",
        text: () => "() => string 类型的 text", // () => string
        offsetControl: 5,
      },
    },
    id3: {
      type: "null",
      ui: {
        component: "text",
        html: `<h1 style="color: red">HTML 类型的 text</h1>`, // v-html
        text: "default text",
        offsetControl: 5,
      },
    },
    id4: {
      type: "null",
      ui: {
        component: "text",
        slotNameOfDefault: "testSlot", // slot
        html: `<h1 style="color: red">I am Text</h1>`,
        text: "default text",
        offsetControl: 5,
      },
    },
    id8: {
      type: "null",
      ui: {
        component: "text",
        text: "多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本",
        spanControl: 24,
      },
    },
    address: {
      title: "地址",
      type: "string",
    },
  },
  required: ["name"],
};

function changeText() {
  id1Text.value = unref(id1Text) + " 新文本";
}

async function submit() {
  const valid = await form.value!.validate();
  if (valid) {
    console.log(toRaw(unref(formData)));
  }
}
</script>
