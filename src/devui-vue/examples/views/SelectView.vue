<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta" layout="horizontal">
      <template v-slot:select6>
        <a-spin size="small" />
      </template>
      <template v-slot:select8SelectOption>
        <a-select-option
          :value="item.value"
          :label="item.label"
          v-for="(item, index) in select8Options"
          :key="index"
        >
          <span role="img"> {{ item.icon }} </span>
          {{ item.text }}
        </a-select-option>
      </template>
      <template v-slot:select9SelectGroupOption>
        <a-select-opt-group>
          <template #label>
            <span><user-outlined />Manager</span>
          </template>
          <a-select-option value="jack"> Jack </a-select-option>
          <a-select-option value="lucy"> Lucy </a-select-option>
        </a-select-opt-group>
        <a-select-opt-group label="Engineer">
          <a-select-option value="Kevin"> kevin </a-select-option>
        </a-select-opt-group>
      </template>
    </v-formly-v3>
    <div class="btns">
      <d-button variant="solid" color="danger" @click="clear"> 重置 </d-button>
      <d-button variant="solid" color="primary" @click="submit"> 提交 </d-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw, unref } from "vue";
import type VFormly from "@/devui-vue/DFormly.vue";
import type { StringMeta } from "@/core/meta/string.meta";

const form = ref<null | InstanceType<typeof VFormly>>(null);
const provinceData = [
  { value: "Zhejiang", label: "浙江" },
  { value: "Jiangsu", label: "江苏" },
];
const cityData: any = {
  Zhejiang: [
    { value: "Hangzhou", label: "杭州" },
    { value: "Ningbo", label: "宁波" },
    { value: "Wenzhou", label: "温州" },
  ],
  Jiangsu: [
    { value: "Nanjing", label: "南京" },
    { value: "Suzhou", label: "苏州" },
    { value: "Zhenjiang", label: "镇江" },
  ],
};

const select7Options = ["Apples", "Nails", "Bananas", "Helicopters"];
const select8Options = [
  { label: "China", value: "china", icon: "🇨🇳", text: "China (中国)" },
  { label: "USA", value: "usa", icon: "🇺🇸", text: "USA (美国)" },
  { label: "Japan", value: "japan", icon: "🇯🇵", text: "Japan (日本)" },
  { label: "Korea", value: "korea", icon: "🇰🇷", text: "Korea (韩国)" },
];

let select7FilteredOptions: any = ref(
  select7Options.map((item) => ({ value: item }))
);

let select4_1Options = ref(provinceData);
let select4_2Options = ref(cityData["Zhejiang"]);

const meta = {
  properties: {
    select: {
      type: "string",
      title: "姓名",
      ui: {
        component: "select",
        labelInValue: false,
        loading: true,
        options: [
          { value: "Jack", label: "杰克", title: "title Jack" },
          { value: "Lucy", label: "露西", disabled: true },
          { value: "Kevin", label: "凯文" },
        ],
        change: (val: any, option: any) => console.log("change", val, option),
        select: (val: any, option: any) => console.log("select", val, option),
      },
      default: "Kevin",
    },
    select1: {
      type: "string",
      title: "禁用",
      readOnly: true,
      ui: {
        component: "select",
        options: [
          { value: "L", label: "初级" },
          { value: "M", label: "中级" },
          { value: "H", label: "高级" },
        ],
      },
      default: "中级",
    },
    select2: {
      type: "string",
      title: "加载中",
      ui: {
        component: "select",
        loading: true,
        options: [
          { value: "Apple", label: "苹果" },
          { value: "Orange", label: "橘子" },
          { value: "Banana", label: "香蕉" },
        ],
      },
      default: "香蕉",
    },
    select3: {
      type: "string",
      title: "labelInValue",
      ui: {
        component: "select",
        labelInValue: true,
        options: [
          { value: "Apple", label: "苹果" },
          { value: "Orange", label: "橘子" },
          { value: "Banana", label: "香蕉" },
        ],
        change: (val: any, option: any) => console.log("change", val, option),
      },
      default: { key: "Orange", label: "橘子" },
    },
    select4_1: {
      type: "string",
      title: "省",
      default: "浙江",
      ui: {
        component: "select",
        options: select4_1Options,
        grid: {
          span: 12,
        },
        change: (val: any) => {
          // 1. 通过获取context赋值
          const context = form.value!.getContext<StringMeta>("/select4_2");
          context.value = null;
          unref(context.ui).options = cityData[val];
          // 2. 或者通过下面的方式直接赋值
          //   select4_2Options.value = cityData[val];
        },
      },
    },
    select4_2: {
      type: "string",
      title: "市",
      ui: {
        component: "select",
        options: select4_2Options,
        grid: {
          span: 12,
        },
      },
    },
    select7: {
      type: "string",
      title: "隐藏已选项",
      ui: {
        component: "select",
        mode: "multiple",
        placeholder: "Inserted are removed",
        options: select7FilteredOptions,
        change: (val: any) => {
          select7FilteredOptions.value = select7Options
            .filter((o: any) => !val.includes(o))
            .map((item) => ({ value: item }));
        },
      },
    },
    select8: {
      type: "string",
      title: "定制回填内容",
      ui: {
        component: "select",
        mode: "multiple",
        placeholder: "select one country",
        optionLabelProp: "label",
        slotNameOfSelectDefault: "select8SelectOption",
      },
    },
    select9: {
      type: "string",
      title: "选项分组",
      ui: {
        component: "select",
        slotNameOfSelectDefault: "select9SelectGroupOption",
      },
      default: "lucy",
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
