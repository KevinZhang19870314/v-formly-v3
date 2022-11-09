<template>
  <div>
    <v-formly-v3 ref="form" v-model="data" :meta="meta"> </v-formly-v3>
    <div class="btns">
      <el-button type="danger" @click="clear"> 重置 </el-button>
      <el-button type="primary" @click="submit"> 提交 </el-button>
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
      },
    },
    obj: {
      type: "object",
      properties: {
        subObj: {
          title: "test",
          type: "string",
          ui: {
            showRequired: true,
          },
        },
      },
      required: ["subObj"],
    },
    enable: {
      title: "启用",
      type: "boolean",
    },
  },
  required: ["name"],
};

let data: any = ref({});

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
