<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta">
      <template v-slot:slotNameOfDefault="{ node, data }">
        <span>{{ data.label }}</span>
        <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
      </template>
    </v-formly-v3>
    <div class="btns">
      <el-button type="primary" @click="submit"> 提交 </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw, unref } from "vue";
import type VFormly from "@/element-plus/ElFormly.vue";

const form = ref<null | InstanceType<typeof VFormly>>(null);
const formData = ref({});
let id = 0;
const options = [
  {
    value: "guide",
    label: "Guide",
    children: [
      {
        value: "disciplines",
        label: "Disciplines",
        children: [
          {
            value: "consistency",
            label: "Consistency",
          },
        ],
      },
      {
        value: "navigation",
        label: "Navigation",
        children: [
          {
            value: "side nav",
            label: "Side Navigation",
          },
        ],
      },
    ],
  },
  {
    value: "component",
    label: "Component",
    children: [
      {
        value: "basic",
        label: "Basic",
        children: [
          {
            value: "layout",
            label: "Layout",
          },
        ],
      },
      {
        value: "form",
        label: "Form",
        children: [
          {
            value: "radio",
            label: "Radio",
          },
        ],
      },
    ],
  },
  {
    value: "resource",
    label: "Resource",
    children: [
      {
        value: "axure",
        label: "Axure Components",
      },
      {
        value: "sketch",
        label: "Sketch Templates",
      },
    ],
  },
];
const disabledOptions = [
  {
    value: "guide",
    label: "Guide",
    disabled: true,
    children: [
      {
        value: "disciplines",
        label: "Disciplines",
        children: [
          {
            value: "consistency",
            label: "Consistency",
          },
        ],
      },
    ],
  },
  {
    value: "component",
    label: "Component",
    children: [
      {
        value: "basic",
        label: "Basic",
        disabled: true,
        children: [
          {
            value: "layout",
            label: "Layout",
          },
        ],
      },
    ],
  },
  {
    value: "resource",
    label: "Resource",
    children: [
      {
        value: "axure",
        label: "Axure Components",
        disabled: true,
      },
      {
        value: "sketch",
        label: "Sketch Templates",
      },
    ],
  },
];
const meta = {
  properties: {
    data1_1: {
      type: "string",
      title: "clicked (default)",
      enum: options,
      ui: {
        component: "cascader",
        change,
        expandChange,
        visibleChange: (visible: boolean) => console.log("visible", visible),
        blur: (e: FocusEvent) => console.log("blur", e),
        focus: (e: FocusEvent) => console.log("focus", e),
      },
    },
    data1_2: {
      type: "string",
      title: "hovered",
      enum: options,
      ui: {
        component: "cascader",
        props: {
          expandTrigger: "hover",
        },
      },
    },
    data2: {
      type: "string",
      title: "有禁用选项",
      enum: disabledOptions,
      ui: {
        component: "cascader",
      },
    },
    data3: {
      type: "string",
      title: "可清空",
      enum: options,
      ui: {
        component: "cascader",
        clearable: true,
      },
    },
    data4: {
      type: "string",
      title: "仅显示最后一级",
      enum: options,
      ui: {
        component: "cascader",
        showAllLevels: false,
      },
    },
    data5_1: {
      type: "string",
      title: "多选(Display all tags)",
      enum: options,
      ui: {
        component: "cascader",
        clearable: true,
        removeTag: (data: any[]) => console.log("removeTag", data),
        props: {
          multiple: true,
        },
      },
    },
    data5_2: {
      type: "string",
      title: "Collapse tags",
      enum: options,
      ui: {
        component: "cascader",
        clearable: true,
        collapseTags: true,
        props: {
          multiple: true,
        },
      },
    },
    data5_3: {
      type: "string",
      title: "Collapse tags tooltip",
      enum: options,
      ui: {
        component: "cascader",
        clearable: true,
        collapseTags: true,
        collapseTagsTooltip: true,
        props: {
          multiple: true,
        },
      },
    },
    data6_1: {
      type: "string",
      title: "选择任意一级选项",
      enum: options,
      ui: {
        component: "cascader",
        clearable: true,
        props: {
          checkStrictly: true,
        },
      },
    },
    data6_2: {
      type: "string",
      title: "选择任意一级选项(多选)",
      enum: options,
      ui: {
        component: "cascader",
        clearable: true,
        props: {
          multiple: true,
          checkStrictly: true,
        },
      },
    },
    data7: {
      type: "string",
      title: "动态加载",
      ui: {
        component: "cascader",
        clearable: true,
        props: {
          lazy: true,
          lazyLoad(node: any, resolve: any) {
            const { level } = node;
            setTimeout(() => {
              const nodes = Array.from({ length: level + 1 }).map((item) => ({
                value: ++id,
                label: `Option - ${id}`,
                leaf: level >= 2,
              }));
              // Invoke `resolve` callback to return the child nodes data and indicate the loading is finished.
              resolve(nodes);
            }, 1000);
          },
        },
      },
    },
    data8_1: {
      type: "string",
      title: "可搜索",
      enum: options,
      ui: {
        component: "cascader",
        placeholder: "Try searching Guide",
        clearable: true,
        filterable: true,
      },
    },
    data8_2: {
      type: "string",
      title: "可搜索(多选)",
      enum: options,
      ui: {
        component: "cascader",
        placeholder: "Try searching Guide",
        clearable: true,
        filterable: true,
        props: {
          multiple: true,
        },
      },
    },
    data9: {
      type: "string",
      title: "自定义节点内容",
      enum: options,
      ui: {
        component: "cascader",
        slotNameOfDefault: "slotNameOfDefault",
      },
    },
    data10: {
      type: "string",
      title: "级联面板",
      enum: options,
      ui: {
        component: "cascader",
        type: "panel",
        change,
        expandChange,
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
function change(value: any) {
  console.log("change", value);
}
function expandChange(value: any) {
  console.log("expandChange", value);
}
</script>
