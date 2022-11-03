<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta">
      <template v-slot:slotNameOfDefault>
        <span>{{ text }} <a href="#">Change city</a></span>
      </template>
      <template v-slot:slotNameOfSuffixIcon>
        <smile-outlined />
      </template>
      <template v-slot:slotNameOfDisplayRender="{ labels, selectedOptions }">
        <span
          v-for="(label, index) in labels"
          :key="selectedOptions[index].value"
        >
          <span v-if="index === labels.length - 1">
            {{ label }} (
            <a
              @click="(e) => handleAreaClick(e, label, selectedOptions[index])"
            >
              {{ selectedOptions[index].code }}
            </a>
            )
          </span>
          <span v-else>{{ label }} /</span>
        </span>
      </template>
    </v-formly-v3>
    <div class="btns">
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw, unref } from "vue";
import type VFormly from "@/Formly.vue";
import type { CascaderProps } from "ant-design-vue";

type Tag = CascaderProps["options"];

const form = ref<null | InstanceType<typeof VFormly>>(null);
const formData = ref({});
const text = ref<string>("Unselect");
const options: Tag = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
            code: 752100,
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
            code: 453400,
          },
        ],
      },
    ],
  },
];
const asyncOptions = ref<CascaderProps["options"]>([
  {
    value: "zhejiang",
    label: "Zhejiang",
    isLeaf: false,
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    isLeaf: false,
  },
]);
const customOptions = [
  {
    code: "zhejiang",
    name: "Zhejiang",
    items: [
      {
        code: "hangzhou",
        name: "Hangzhou",
        items: [
          {
            code: "xihu",
            name: "West Lake",
          },
        ],
      },
    ],
  },
  {
    code: "jiangsu",
    name: "Jiangsu",
    items: [
      {
        code: "nanjing",
        name: "Nanjing",
        items: [
          {
            code: "zhonghuamen",
            name: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];
const searchOptions: Tag = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
          {
            value: "xiasha",
            label: "Xia Sha",
            disabled: true,
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua men",
          },
        ],
      },
    ],
  },
];
const moreOptions: Tag = [
  {
    label: "Light",
    value: "light",
    children: new Array(20)
      .fill(null)
      .map((_, index) => ({ label: `Number ${index}`, value: index })),
  },
  {
    label: "Bamboo",
    value: "bamboo",
    children: [
      {
        label: "Little",
        value: "little",
        children: [
          {
            label: "Toy Fish",
            value: "fish",
          },
          {
            label: "Toy Cards",
            value: "cards",
          },
          {
            label: "Toy Bird",
            value: "bird",
          },
        ],
      },
    ],
  },
];
const meta = {
  properties: {
    static: {
      type: "string",
      title: "省市区级联",
      enum: options,
      // readOnly: true,
      default: ["jiangsu", "nanjing", "zhonghuamen"],
      ui: {
        component: "cascader",
        placeholder: "Please select area",
        // size: "large",
        // allowClear: false,
        // autoFocus: true,
        // bordered: false,
        // changeOnSelect: true,
        // expandTrigger: "hover",
        // open: true,
        // placement: "bottomRight",
        // dropdownClassName: "custom-popup-classname",
        // dropdownStyle: { color: "red" },
        // notFoundContent: "Not Found !!!",
        // change: (value: any, option: any) =>
        //   console.log("change", value, option),
        // dropdownVisibleChange: (visible: boolean) =>
        //   console.log("visible", visible),
        // blur: (e: FocusEvent) => console.log("blur", e),
        // focus: (e: FocusEvent) => console.log("focus", e),
      },
    },
    async: {
      type: "string",
      title: "动态加载选项",
      enum: unref(asyncOptions),
      ui: {
        component: "cascader",
        changeOnSelect: true,
        loadData: loadData,
        change: (value: any, option: any) => console.log(value, option),
      },
    },
    displayRender1: {
      type: "string",
      title: "自定义已选项(slot)",
      enum: options,
      ui: {
        component: "cascader",
        slotNameOfDisplayRender: "slotNameOfDisplayRender",
      },
    },
    displayRender2: {
      type: "string",
      title: "自定义已选项(function)",
      enum: options,
      ui: {
        component: "cascader",
        displayRender: ({ labels }: any) => labels[labels.length - 1],
      },
    },
    slot: {
      type: "string",
      title: "自定义显示",
      enum: options,
      ui: {
        component: "cascader",
        slotNameOfDefault: "slotNameOfDefault",
        change: (value: any, selectedOptions: Tag) => {
          text.value = selectedOptions!.map((o) => o.label).join(", ");
        },
      },
    },
    disabled: {
      type: "string",
      title: "禁用选项",
      enum: options.map((option, i: number) => {
        const o = { ...option };
        if (i === 1) o.disabled = true;
        return o;
      }),
      ui: {
        component: "cascader",
      },
    },
    icon: {
      type: "string",
      title: "自定义后缀图标",
      enum: options,
      ui: {
        component: "cascader",
        slotNameOfSuffixIcon: "slotNameOfSuffixIcon",
        // suffixIcon: "ab",
      },
    },
    fieldNames: {
      type: "string",
      title: "自定义字段名",
      enum: customOptions,
      ui: {
        component: "cascader",
        fieldNames: { label: "name", value: "code", children: "items" },
      },
    },
    showSearch: {
      type: "string",
      title: "搜索",
      enum: searchOptions,
      ui: {
        component: "cascader",
        showSearch: { filter: filter },
        search: (value: any) => console.log("search", value),
        change: (value: any, option: any) =>
          console.log("change", value, option),
      },
    },
    more: {
      type: "string",
      title: "一次性选择多个选项",
      enum: moreOptions,
      ui: {
        component: "cascader",
        multiple: true,
        maxTagCount: 3,
      },
    },
  },
};

async function submit() {
  const valid = await form.value!.validate();
  if (valid) {
    console.log(toRaw(unref(formData)));
  }
}
const handleAreaClick = (
  e: Event,
  label: string,
  option: CascaderProps["options"]
) => {
  e.stopPropagation();
  console.log("clicked", label, option);
};
function loadData(selectedOptions: Tag) {
  const targetOption = selectedOptions![selectedOptions!.length - 1];
  targetOption.loading = true;

  // load options lazily
  setTimeout(() => {
    targetOption.loading = false;
    targetOption.children = [
      {
        label: `${targetOption.label} Dynamic 1`,
        value: "dynamic1",
      },
      {
        label: `${targetOption.label} Dynamic 2`,
        value: "dynamic2",
      },
    ];
    asyncOptions.value = [...asyncOptions.value!];
  }, 1000);
}
function filter(inputValue: string, path: any[]) {
  return path.some(
    (option: { label: string }) =>
      option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
  );
}
</script>
