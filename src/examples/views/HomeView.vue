<template>
  <div>
    <v-formly ref="form" v-model="data" :meta="meta"> </v-formly>
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw, unref } from "vue";

const form = ref(null);
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
        change: (val: string) => console.log(val),
      },
    },
    desc: {
      title: "描述",
      type: "string",
      default: "Base on technical, but not limited on it!",
    },
    // TODO
    // enable: {
    //   title: "启用",
    //   type: "boolean",
    //   default: true,
    // },
  },
  required: ["name"],
};

let data: any = ref({ enable: false });

function clear() {
  data.value = null;
}

async function submit() {
  let valid = await (form.value as any).validate();
  if (valid) {
    console.log(toRaw(unref(data)));
  }
}
</script>
