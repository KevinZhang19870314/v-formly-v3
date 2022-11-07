<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta">
      <template #slotNameOfMark="{ label, point }">
        <template v-if="point === 100">
          <strong>{{ label }}</strong>
        </template>
        <template v-else>{{ label }}</template>
      </template>
    </v-formly-v3>
    <div class="btns">
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw, unref, h } from "vue";
import type VFormly from "@/ant-design-vue/AFormly.vue";

const form = ref<null | InstanceType<typeof VFormly>>(null);
const formData = ref({});
const marks = ref<Record<number, any>>({
  0: "0°C",
  26: "26°C",
  37: "37°C",
  100: () => ({
    style: {
      color: "#f50",
    },
    label: h("strong", null, "100°C"),
  }),
});

const meta = {
  properties: {
    count: {
      type: "number",
      title: "数量(初始值)",
      ui: {
        component: "slider",
        change: (val: number) => console.log("change", val),
        afterChange: (val: number) => console.log("afterChange", val),
      },
      default: 10,
    },
    count1: {
      type: "number",
      title: "禁用状态",
      readOnly: true,
      ui: {
        component: "slider",
      },
      default: 10,
    },
    count2: {
      type: "number",
      title: "step(0.01)",
      ui: {
        component: "slider",
      },
      minimum: 0,
      maximum: 1,
      multipleOf: 0.01,
    },
    count3: {
      type: "number",
      title: "tipFormatter",
      ui: {
        component: "slider",
        tipFormatter: (val: number) => `${val}%`,
      },
    },
    count4: {
      type: "number",
      title: "隐藏 Tooltip",
      ui: {
        component: "slider",
        tipFormatter: null,
      },
    },
    count5: {
      type: "number",
      title: "始终显示 Tooltip",
      ui: {
        component: "slider",
        tooltipVisible: true,
      },
    },
    range: {
      type: "number",
      title: "范围(双滑块模式)",
      ui: {
        component: "slider",
        range: true,
      },
      default: [10, 20],
    },
    range1: {
      type: "number",
      title: "禁用状态(双滑块模式)",
      readOnly: true,
      ui: {
        component: "slider",
        range: true,
      },
      default: [10, 20],
    },
    range2: {
      type: "number",
      title: "marks",
      ui: {
        component: "slider",
        marks: marks,
      },
      default: 37,
    },
    range3: {
      type: "number",
      title: "marks range",
      ui: {
        component: "slider",
        range: true,
        marks: marks,
      },
      default: [26, 37],
    },
    range4: {
      type: "number",
      title: "included=false",
      ui: {
        component: "slider",
        included: false,
        marks: marks,
      },
      default: 37,
    },
    range5: {
      type: "number",
      title: "marks & step",
      ui: {
        component: "slider",
        marks: marks,
      },
      default: 0,
      multipleOf: 10,
    },
    range6: {
      type: "number",
      title: "dots",
      ui: {
        component: "slider",
        dots: true,
      },
      multipleOf: 10,
      default: 40,
    },
    range7: {
      type: "number",
      title: "v-slot:mark",
      ui: {
        component: "slider",
        slotNameOfMark: "slotNameOfMark",
        marks: {
          0: "0°C",
          26: "26°C",
          37: "37°C",
          100: {
            style: {
              color: "#f50",
            },
            label: "100°C",
          },
        },
      },
      default: 37,
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
