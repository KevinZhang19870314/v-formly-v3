<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta"> </v-formly-v3>
    <div class="btns">
      <el-button type="danger" @click="clear"> 重置 </el-button>
      <el-button type="primary" @click="submit"> 提交 </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type VFormly from "@/element-plus/ElFormly.vue";
import { ref, toRaw, unref } from "vue";

const form = ref<null | InstanceType<typeof VFormly>>(null);

const makeRange = (start: number, end: number) => {
  const result: number[] = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};
const time2DisabledHours = () => {
  return makeRange(0, 16).concat(makeRange(19, 23));
};
const time2DisabledMinutes = (hour: number) => {
  if (hour === 17) {
    return makeRange(0, 29);
  }
  if (hour === 18) {
    return makeRange(31, 59);
  }
};
const time2DisabledSeconds = (hour: number, minute: number) => {
  if (hour === 18 && minute === 30) {
    return makeRange(1, 59);
  }
};
const meta = {
  type: "object",
  properties: {
    time1_1: {
      title: "任意时间点",
      type: "string",
      ui: {
        component: "time",
        placeholder: "Arbitrary time",
        change: (val: any) => {
          console.log(val);
        },
        grid: {
          span: 12,
        },
      },
    },
    time1_2: {
      title: "任意时间点",
      type: "string",
      ui: {
        component: "time",
        placeholder: "Arbitrary time",
        arrowControl: true,
        grid: {
          span: 12,
        },
      },
    },
    time2: {
      title: "限制时间选择范围",
      type: "string",
      default: new Date(2016, 9, 10, 18, 30),
      ui: {
        component: "time",
        disabledHours: time2DisabledHours,
        disabledMinutes: time2DisabledMinutes,
        disabledSeconds: time2DisabledSeconds,
        placeholder: "Arbitrary time",
      },
    },
    time3: {
      title: "任意时间范围",
      type: "string",
      default: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      ui: {
        component: "time",
        isRange: true,
        rangeSeparator: "To",
        startPlaceholder: "Start time",
        endPlaceholder: "End time",
      },
    },
  },
  required: ["name"],
  ui: {
    grid: {
      span: 24,
    },
  },
};

let formData: any = ref({});

function clear() {
  formData.value = null;
}

async function submit() {
  let valid = await form.value!.validate();
  if (valid) {
    console.log(toRaw(unref(formData)));
  }
}
</script>

<style scoped></style>
