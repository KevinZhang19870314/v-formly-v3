<template>
  <div>
    <v-formly ref="form" v-model="formData" :meta="meta" :layout="'horizontal'">
    </v-formly>
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, toRaw, unref } from "vue";

const form = ref(null);
const meta = {
  type: "object",
  properties: {
    fruits: {
      title: "水果",
      type: "string",
      enum: ["Apple", "Pera", "Orange"],
      default: ["Orange"],
      ui: {
        component: "checkbox",
        showRequired: true,
      },
    },
    fruits1: {
      title: "水果1",
      type: "string",
      enum: [
        { label: "Apple", value: "Apple" },
        { label: "Pera", value: "Pera" },
        { label: "Orange", value: "Orange" },
      ],
      default: ["Apple"],
      ui: {
        component: "checkbox",
      },
    },
    colors: {
      title: "颜色",
      type: "string",
      enum: [
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Blue",
        "Purple",
        "White",
        "Black",
      ],
      default: ["Yellow", "White"],
      ui: {
        component: "checkbox",
        span: 4,
      },
    },
  },
  required: ["fruits"],
};

let formData: any = ref({});

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
<style lang="less" scoped></style>
