<template>
  <div>
    <v-formly-v3
      ref="form"
      v-model="formData"
      :meta="meta"
      :layout="'horizontal'"
    >
    </v-formly-v3>
    <div class="btns">
      <el-button type="danger" @click="clear"> 重置 </el-button>
      <el-button type="primary" @click="submit"> 提交 </el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { StringMeta } from "@/core/meta/string.meta";
import { ref, toRaw, unref } from "vue";
import type VFormly from "@/element-plus/ElFormly.vue";

const form = ref<null | InstanceType<typeof VFormly>>(null);
let formData: any = ref({});
const chk6_1CheckAll = ref(false);
const chk6_1IsIndeterminate = ref(true);
const chk6_2CheckedCities = ref(["Shanghai", "Beijing"]);
const chk6_2Cities = [
  { label: "Shanghai" },
  { label: "Beijing" },
  { label: "Guangzhou" },
  { label: "Shenzhen" },
];
const meta = {
  type: "object",
  properties: {
    chk1: {
      title: "基础用法",
      type: "string",
      default: true,
      ui: {
        component: "checkbox",
        size: "large",
        label: "Option 1",
        showRequired: true,
        grid: {
          span: 8,
        },
      },
    },
    chk2: {
      title: "",
      type: "string",
      default: true,
      ui: {
        component: "checkbox",
        label: "Option 1",
        showRequired: true,
        grid: {
          span: 8,
        },
      },
    },
    chk3: {
      title: "",
      type: "string",
      default: true,
      ui: {
        component: "checkbox",
        size: "small",
        label: "Option 1",
        showRequired: true,
        grid: {
          span: 8,
        },
      },
    },
    chk4: {
      title: "禁用状态",
      type: "string",
      readOnly: true,
      ui: {
        component: "checkbox",
        label: "Disabled",
      },
    },
    chk5: {
      title: "禁用状态",
      type: "string",
      default: ["selected and disabled", "Option A"],
      ui: {
        component: "checkbox",
        group: true,
        options: [
          { label: "Option A" },
          { label: "Option B" },
          { label: "Option C" },
          { label: "disabled", disabled: true },
          { label: "selected and disabled", disabled: true },
        ],
      },
    },
    chk6_1: {
      title: "中间状态",
      type: "string",
      default: chk6_1CheckAll,
      ui: {
        component: "checkbox",
        label: "Check all",
        indeterminate: chk6_1IsIndeterminate,
        change: (val: boolean) => {
          chk6_2CheckedCities.value = val
            ? chk6_2Cities.map((m) => m.label)
            : [];
          chk6_1IsIndeterminate.value = false;
          // 可以通过获取context设置表单项的值
          const context = form.value!.getContext<StringMeta>("/chk6_2");
          context.value = chk6_2CheckedCities.value;
        },
      },
    },
    chk6_2: {
      title: "",
      type: "string",
      default: chk6_2CheckedCities,
      ui: {
        component: "checkbox",
        group: true,
        options: chk6_2Cities,
        change: (value: string[]) => {
          const checkedCount = value.length;
          chk6_1CheckAll.value = checkedCount === chk6_2Cities.length;
          chk6_1IsIndeterminate.value =
            checkedCount > 0 && checkedCount < chk6_2Cities.length;
          // 也可以通过直接给formData赋值来设置表单项的值
          formData.value = Object.assign({}, formData.value, {
            chk6_1: chk6_1CheckAll.value,
          });
        },
      },
    },
    chk7: {
      title: "可选项目数量的限制",
      type: "string",
      default: ["Shanghai", "Beijing"],
      ui: {
        component: "checkbox",
        group: true,
        options: [
          { label: "Shanghai" },
          { label: "Beijing" },
          { label: "Guangzhou" },
          { label: "Shenzhen" },
        ],
        min: 1,
        max: 2,
      },
    },
    chk8: {
      title: "按钮样式",
      type: "string",
      default: ["Shanghai"],
      ui: {
        component: "checkbox",
        group: true,
        button: true,
        options: [
          { label: "Shanghai" },
          { label: "Beijing" },
          { label: "Guangzhou" },
          { label: "Shenzhen" },
        ],
      },
    },
    chk9: {
      title: "带有边框",
      type: "string",
      default: true,
      ui: {
        component: "checkbox",
        label: "Option 1",
        border: true,
      },
    },
  },
  required: ["chk1", "chk2", "chk3"],
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
<style lang="less" scoped></style>
