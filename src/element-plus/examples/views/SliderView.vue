<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta" />
    <div class="btns">
      <el-button type="primary" @click="submit"> 提交 </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, toRaw, unref } from "vue";
import type { CSSProperties } from "vue";
import type VFormly from "@/element-plus/ElFormly.vue";

const form = ref<null | InstanceType<typeof VFormly>>(null);
const formData = ref({});

interface Mark {
  style: CSSProperties;
  label: string;
}

type Marks = Record<number, Mark | string>;

const marks = reactive<Marks>({
  0: "0°C",
  8: "8°C",
  37: "37°C",
  50: {
    style: {
      color: "#1989FA",
    },
    label: "50%",
  },
});

const meta = {
  properties: {
    count1_1: {
      type: "number",
      title: "Default value",
      ui: {
        component: "slider",
        change: (val: any) => console.log("change", val),
        input: (val: any) => console.log("input", val),
      },
    },
    count1_2: {
      type: "number",
      title: "Customized initial value",
      default: 10,
      ui: {
        component: "slider",
      },
    },
    count1_3: {
      type: "number",
      title: "Hide Tooltip",
      ui: {
        component: "slider",
        showTooltip: false,
      },
    },
    count1_4: {
      type: "number",
      title: "Format Tooltip",
      ui: {
        component: "slider",
        formatTooltip: (val: number) => `${val}%`,
      },
    },
    count1_5: {
      type: "number",
      title: "Disabled",
      readOnly: true,
      default: 50,
      ui: {
        component: "slider",
      },
    },
    count2_1: {
      type: "number",
      title: "Breakpoints not displayed",
      ui: {
        component: "slider",
      },
      multipleOf: 10,
    },
    count2_2: {
      type: "number",
      title: "Breakpoints displayed",
      ui: {
        component: "slider",
        showStops: true,
      },
      multipleOf: 10,
    },
    count3_1: {
      type: "number",
      title: "带有输入框的滑块",
      ui: {
        component: "slider",
        showInput: true,
        size: "large",
      },
    },
    count3_2: {
      type: "number",
      title: "带有输入框的滑块",
      ui: {
        component: "slider",
        showInput: true,
      },
    },
    count3_3: {
      type: "number",
      title: "带有输入框的滑块",
      ui: {
        component: "slider",
        showInput: true,
        size: "small",
      },
    },
    count4: {
      type: "number",
      title: "位置",
      ui: {
        component: "slider",
        placement: "right",
      },
    },
    vertical: {
      type: "number",
      title: "垂直模式",
      ui: {
        component: "slider",
        vertical: true,
        height: "200px",
      },
    },
    range1: {
      type: "number",
      title: "范围选择",
      ui: {
        component: "slider",
        range: true,
        showStops: true,
      },
      maximum: 10,
      default: [4, 8],
    },
    range2: {
      type: "number",
      title: "显示标记",
      ui: {
        component: "slider",
        range: true,
        marks: marks,
      },
      default: [30, 60],
    },
  },
};

async function submit() {
  const valid = await form.value!.validate();
  if (valid) {
    console.log(toRaw(unref(formData)));
  }
}
</script>
