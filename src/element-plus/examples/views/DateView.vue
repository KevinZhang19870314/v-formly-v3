<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta">
      <template v-slot:date13_default="cell">
        <div class="cell" :class="{ current: cell.isCurrent }">
          <span class="text">{{ cell.text }}</span>
          <span v-if="date13IsHoliday(cell)" class="holiday"></span>
        </div>
      </template>
    </v-formly-v3>
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
const date2Shortcuts = [
  {
    text: "Today",
    value: new Date(),
  },
  {
    text: "Yesterday",
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24);
      return date;
    },
  },
  {
    text: "A week ago",
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
      return date;
    },
  },
];
const date2DisabledDate = (time: Date) => {
  return time.getTime() > Date.now();
};
const date8Shortcuts = [
  {
    text: "Last week",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      return [start, end];
    },
  },
  {
    text: "Last month",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      return [start, end];
    },
  },
  {
    text: "Last 3 months",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      return [start, end];
    },
  },
];
const date12DefaultTime = ref<[Date, Date]>([
  new Date(2000, 1, 1, 0, 0, 0),
  new Date(2000, 2, 1, 23, 59, 59),
]);
const holidays = [
  "2021-10-01",
  "2021-10-02",
  "2021-10-03",
  "2021-10-04",
  "2021-10-05",
  "2021-10-06",
  "2021-10-07",
];
// @ts-ignore
const date13IsHoliday = ({ dayjs }) => {
  return holidays.includes(dayjs.format("YYYY-MM-DD"));
};
const meta = {
  type: "object",
  properties: {
    date1: {
      type: "string",
      title: "选择某一天",
      ui: {
        component: "date",
        placeholder: "Pick a day",
        type: "date",
      },
    },
    date2: {
      type: "string",
      title: "选择某一天(快捷选项)",
      ui: {
        component: "date",
        placeholder: "Pick a day",
        type: "date",
        shortcuts: date2Shortcuts,
        disabledDate: date2DisabledDate,
      },
    },
    date3: {
      type: "string",
      title: "其他日期单位(Week)",
      ui: {
        component: "date",
        placeholder: "Pick a week",
        type: "week",
        format: "[Week] ww",
      },
    },
    date4: {
      type: "string",
      title: "其他日期单位(Month)",
      ui: {
        component: "date",
        placeholder: "Pick a month",
        type: "month",
      },
    },
    date5: {
      type: "string",
      title: "其他日期单位(Year)",
      ui: {
        component: "date",
        placeholder: "Pick a year",
        type: "year",
      },
    },
    date6: {
      type: "string",
      title: "其他日期单位(Dates)",
      ui: {
        component: "date",
        placeholder: "Pick one or more dates",
        type: "dates",
      },
    },
    date7: {
      type: "string",
      title: "选择一段时间",
      ui: {
        component: "date",
        rangeSeparator: "To",
        startPlaceholder: "Start date",
        endPlaceholder: "End date",
        type: "daterange",
      },
    },
    date8: {
      type: "string",
      title: "选择一段时间(快捷选项)",
      ui: {
        component: "date",
        rangeSeparator: "To",
        startPlaceholder: "Start date",
        endPlaceholder: "End date",
        type: "daterange",
        shortcuts: date8Shortcuts,
        unlinkPanels: true,
      },
    },
    date9: {
      type: "string",
      title: "选择月份范围",
      ui: {
        component: "date",
        rangeSeparator: "To",
        startPlaceholder: "Start month",
        endPlaceholder: "End month",
        type: "monthrange",
      },
    },
    date10: {
      type: "string",
      title: "默认值",
      ui: {
        component: "date",
        placeholder: "Pick a date",
        type: "date",
        defaultValue: new Date(2010, 9, 1),
      },
    },
    date11: {
      type: "string",
      title: "日期格式",
      ui: {
        component: "date",
        placeholder: "Pick a date",
        type: "date",
        format: "YYYY/MM/DD",
      },
    },
    date12: {
      type: "string",
      title: "默认显示日期",
      ui: {
        component: "date",
        type: "daterange",
        startPlaceholder: "Start date",
        endPlaceholder: "End date",
        defaultTime: date12DefaultTime,
      },
    },
    date13: {
      type: "string",
      title: "自定义内容",
      default: "2021-10-29",
      ui: {
        component: "date",
        type: "date",
        slotNameOfDefault: "date13_default",
        placeholder: "Pick a day",
        format: "YYYY/MM/DD",
        valueFormat: "YYYY-MM-DD",
      },
    },
  },
  required: [],
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

<style scoped lang="less">
.cell {
  height: 30px;
  padding: 3px 0;
  box-sizing: border-box;
}
.cell .text {
  width: 24px;
  height: 24px;
  display: block;
  margin: 0 auto;
  line-height: 24px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
}
.cell.current .text {
  background: #626aef;
  color: #fff;
}
.cell .holiday {
  position: absolute;
  width: 6px;
  height: 6px;
  background: var(--el-color-danger);
  border-radius: 50%;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
