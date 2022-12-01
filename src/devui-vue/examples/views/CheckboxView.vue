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
<script lang="ts" setup>
import { ref, toRaw, unref } from "vue";

const form = ref(null);
const meta = {
  type: "object",
  properties: {
    fruits1_1: {
      title: "Input String Array",
      type: "string",
      enum: ["Apple", "Pera", "Orange"],
      default: ["Orange"],
      ui: {
        component: "checkbox",
        showRequired: true,
      },
    },
    fruits1_2: {
      title: "Input Object Array",
      type: "string",
      enum: [
        { name: "Apple", value: "Apple", id: "1" },
        { name: "Pera", value: "Pera", id: "2" },
        { name: "Orange", value: "Orange", id: "3" },
      ],
      default: [{ name: "Pera", value: "Pera", id: "2" }],
      ui: {
        component: "checkbox",
      },
    },
    fruits2: {
      title: "Disabled Group",
      type: "string",
      enum: ["Apple", "Pera", "Orange"],
      default: ["Orange"],
      readOnly: true,
      ui: {
        component: "checkbox",
      },
    },
    fruits3: {
      title: "Custom Selected Color",
      type: "string",
      enum: ["Apple", "Pera", "Orange"],
      default: ["Orange"],
      ui: {
        component: "checkbox",
        color: "RGB(255, 193, 7)",
      },
    },
    fruits4: {
      title: "Set showAnimation false",
      type: "string",
      enum: ["Apple", "Pera", "Orange"],
      default: ["Orange"],
      ui: {
        component: "checkbox",
        showAnimation: false,
      },
    },
    fruits5: {
      title: "itemWidth",
      type: "string",
      enum: ["Apple", "Pera", "Orange"],
      default: ["Orange"],
      ui: {
        component: "checkbox",
        itemWidth: 100,
      },
    },
    fruits6: {
      title: "可选项目数量的限制",
      type: "string",
      enum: ["Apple", "Pera", "Orange"],
      default: ["Orange"],
      ui: {
        component: "checkbox",
        max: 2,
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
  required: ["fruits1_1"],
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
