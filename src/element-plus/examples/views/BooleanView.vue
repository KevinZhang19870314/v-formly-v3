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
import { markRaw, ref, toRaw, unref } from "vue";
import { Check, Close } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";

const form = ref(null);
let formData: any = ref({});
const boolean8_1Loading1 = ref(false);
const boolean8_2Loading2 = ref(false);
const meta = {
  type: "object",
  properties: {
    boolean1_1: {
      title: "基础用法",
      type: "boolean",
      default: true,
      ui: {
        change: (val: any) => console.log(val),
      },
    },
    boolean1_2: {
      title: "基础用法",
      type: "boolean",
      default: true,
      ui: {
        style: "--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949",
      },
    },
    boolean2_1: {
      title: "尺寸",
      type: "boolean",
      default: true,
      ui: {
        size: "large",
        activeText: "开",
        inactiveText: "关",
      },
    },
    boolean2_2: {
      title: "尺寸",
      type: "boolean",
      default: true,
      ui: {
        activeText: "开",
        inactiveText: "关",
      },
    },
    boolean2_3: {
      title: "尺寸",
      type: "boolean",
      default: true,
      ui: {
        size: "small",
        activeText: "开",
        inactiveText: "关",
      },
    },
    boolean3_1: {
      title: "文字描述",
      type: "boolean",
      default: true,
      ui: {
        activeText: "Pay by month",
        inactiveText: "Pay by year",
        style: "--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949",
      },
    },
    boolean3_2: {
      title: "文字描述",
      type: "boolean",
      default: true,
      ui: {
        activeText: "是",
        inactiveText: "否",
        inlinePrompt: true,
      },
    },
    boolean3_3: {
      title: "文字描述",
      type: "boolean",
      default: true,
      ui: {
        activeText: "Y",
        inactiveText: "N",
        style: "--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949",
      },
    },
    boolean4_1: {
      title: "显示自定义图标",
      type: "boolean",
      default: true,
      ui: {
        activeIcon: markRaw(Check),
        inactiveIcon: markRaw(Close),
      },
    },
    boolean4_2: {
      title: "显示自定义图标",
      type: "boolean",
      default: true,
      ui: {
        inlinePrompt: true,
        activeIcon: markRaw(Check),
        inactiveIcon: markRaw(Close),
      },
    },
    boolean5: {
      title: "扩展的 value 类型",
      type: "boolean",
      default: true,
      ui: {
        style: "--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949",
        activeValue: "100",
        inactiveValue: "0",
      },
    },
    boolean6: {
      title: "禁用状态",
      type: "boolean",
      default: true,
      readOnly: true,
    },
    boolean7: {
      title: "加载状态",
      type: "boolean",
      default: true,
      ui: {
        loading: true,
      },
    },
    boolean8_1: {
      title: "阻止切换",
      type: "boolean",
      ui: {
        loading: boolean8_1Loading1,
        beforeChange: () => {
          boolean8_1Loading1.value = true;
          return new Promise((resolve) => {
            setTimeout(() => {
              boolean8_1Loading1.value = false;
              ElMessage.success("Switch success");
              return resolve(true);
            }, 1000);
          });
        },
      },
    },
    boolean8_2: {
      title: "阻止切换",
      type: "boolean",
      ui: {
        loading: boolean8_2Loading2,
        beforeChange: () => {
          boolean8_2Loading2.value = true;
          return new Promise((_, reject) => {
            setTimeout(() => {
              boolean8_2Loading2.value = false;
              ElMessage.error("Switch failed");
              return reject(new Error("Error"));
            }, 1000);
          });
        },
      },
    },
  },
  required: [],
};

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

<style scoped></style>
