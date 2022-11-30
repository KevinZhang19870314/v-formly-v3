<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta">
      <template v-slot:picker_right>
        <ul class="date-picker-right-panel">
          <li>
            <d-button
              variant="text"
              color="primary"
              @click="
                () => {
                  setPickerDate(-30);
                }
              "
            >
              一个月前
            </d-button>
            <span>{{ getDateString(-30) }}</span>
          </li>
          <li>
            <d-button
              variant="text"
              color="primary"
              @click="
                () => {
                  setPickerDate(-14);
                }
              "
            >
              两周前
            </d-button>
            <span>{{ getDateString(-14) }}</span>
          </li>
          <li>
            <d-button
              variant="text"
              color="primary"
              @click="
                () => {
                  setPickerDate(-7);
                }
              "
            >
              一周前
            </d-button>
            <span>{{ getDateString(-7) }}</span>
          </li>
          <li>
            <d-button
              variant="text"
              color="primary"
              @click="
                () => {
                  setPickerDate(0);
                }
              "
            >
              今天
            </d-button>
            <span>{{ getDateString(0) }}</span>
          </li>
        </ul>
      </template>
      <template v-slot:picker_footer>
        <div class="date-picker-footer">
          <d-button variant="solid" color="secondary" @click="setToday">
            今天
          </d-button>
          <d-button variant="solid" color="secondary" @click="clearDate">
            清除时间
          </d-button>
        </div>
      </template>
      <template v-slot:range_right>
        <ul class="date-picker-right-panel">
          <li>
            <d-button
              variant="text"
              color="primary"
              @click="
                () => {
                  setDate(-30);
                }
              "
            >
              一个月前
            </d-button>
          </li>
          <li>
            <d-button
              variant="text"
              color="primary"
              @click="
                () => {
                  setDate(-14);
                }
              "
            >
              一周前
            </d-button>
          </li>
          <li>
            <d-button
              variant="text"
              color="primary"
              @click="
                () => {
                  selectThisWeek();
                }
              "
            >
              当前周
            </d-button>
          </li>
        </ul>
      </template>
      <template v-slot:range_footer>
        <div class="date-picker-footer">
          <d-button variant="solid" color="secondary" @click="clearStartDate">
            清除开始时间
          </d-button>
          <d-button variant="solid" color="secondary" @click="clearEndDate">
            清除结束时间
          </d-button>
        </div>
      </template>
    </v-formly-v3>
    <div class="btns">
      <d-button variant="solid" color="danger" @click="clear"> 重置 </d-button>
      <d-button variant="solid" color="primary" @click="submit">
        提交
      </d-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { StringMeta } from "@/core/meta/string.meta";
import type VFormly from "@/devui-vue/DFormly.vue";
import { ref, toRaw, unref } from "vue";
const formData: any = ref({});
const form = ref<null | InstanceType<typeof VFormly>>(null);
const meta = {
  type: "object",
  properties: {
    year: {
      type: "string",
      title: "年份",
      ui: {
        component: "date",
        type: "year",
      },
    },
    month: {
      type: "string",
      title: "月份",
      ui: {
        component: "date",
        type: "month",
      },
    },
    picker1_1: {
      title: "大",
      type: "string",
      ui: {
        component: "date",
        placeholder: "large size",
        size: "lg",
      },
    },
    picker1_2: {
      title: "小",
      type: "string",
      ui: {
        component: "date",
        placeholder: "small size",
        size: "sm",
      },
    },
    picker2: {
      title: "日期格式",
      type: "string",
      ui: {
        component: "date",
        format: "YYYY-MM-DD",
        toggleChange: (open: boolean) => console.log("toggleChange", open),
        confirmEvent: (date: Date) => console.log("confirmEvent", date),
        focus: (e: MouseEvent) => console.log("focus", e),
        blur: () => console.log("blur"),
      },
    },
    picker3: {
      title: "显示时间",
      type: "string",
      ui: {
        component: "date",
        showTime: true,
        format: "YYYY/MM/DD HH:mm:ss",
      },
    },
    picker4: {
      title: "禁用选择器",
      type: "string",
      readOnly: true,
      ui: {
        component: "date",
      },
    },
    picker5_1: {
      type: "string",
      title: "right area",
      ui: {
        component: "date",
        showTime: true,
        slotNameOfRightArea: "picker_right",
      },
    },
    picker5_2: {
      type: "string",
      title: "footer",
      ui: {
        component: "date",
        showTime: true,
        slotNameOfFooter: "picker_footer",
      },
    },
    picker6: {
      type: "string",
      title: "可选时间范围",
      ui: {
        component: "date",
        calendarRange: [2022, 2025],
        limitDateRange: [new Date(2022, 1, 5), new Date(2023, 1, 5)],
      },
    },
    range1_1: {
      type: "string",
      title: "basic range",
      ui: {
        component: "date",
        pickerType: "range",
      },
    },
    range1_2: {
      type: "string",
      title: "time range",
      ui: {
        component: "date",
        pickerType: "range",
        showTime: true,
        format: "YYYY/MM/DD HH:mm:ss",
      },
    },
    range1_3: {
      type: "string",
      title: "year range",
      ui: {
        component: "date",
        pickerType: "range",
        type: "year",
      },
    },
    range1_4: {
      type: "string",
      title: "month range",
      ui: {
        component: "date",
        pickerType: "range",
        type: "month",
      },
    },
    range2_1: {
      type: "string",
      title: "range(right area)",
      ui: {
        component: "date",
        pickerType: "range",
        showTime: true,
        slotNameOfRightArea: "range_right",
      },
    },
    range2_2: {
      type: "string",
      title: "range(footer)",
      ui: {
        component: "date",
        pickerType: "range",
        showTime: true,
        slotNameOfFooter: "range_footer",
      },
    },
    range3: {
      type: "string",
      title: "可选时间范围(range)",
      ui: {
        component: "date",
        pickerType: "range",
        calendarRange: [2022, 2025],
        limitDateRange: [new Date(2022, 1, 5), new Date(2023, 1, 5)],
      },
    },
  },
  required: [],
};

function clear() {
  formData.value = null;
}
async function submit() {
  let valid = await form.value!.validate();
  if (valid) {
    console.log(toRaw(unref(formData)));
  }
}
// Picker
function setPickerDate(days: number) {
  const context = form.value!.getContext<StringMeta>("/picker5_1");
  context.value = new Date(new Date().getTime() + days * 24 * 3600 * 1000);
}
function getDateString(days: number) {
  const date = new Date(new Date().getTime() + days * 24 * 3600 * 1000);
  return `${date.getMonth() + 1}月${date.getDate()}日`;
}
function setToday() {
  const context = form.value!.getContext<any>("/picker5_2");
  context.value = new Date(new Date().getTime());
}
function clearDate() {
  const context = form.value!.getContext<any>("/picker5_2");
  context.value = "";
}
// Range
function setDate(days: number) {
  const context = form.value!.getContext<StringMeta>("/range2_1");
  context.value = [
    new Date(new Date().getTime() + days * 24 * 3600 * 1000),
    new Date(),
  ];
}
function selectThisWeek() {
  const context = form.value!.getContext<StringMeta>("/range2_1");
  const tody = new Date();
  const start = new Date(new Date().setDate(tody.getDate() - tody.getDay()));
  const end = new Date(new Date().setDate(start.getDate() + 6));
  context.value = [start, end];
}
function clearStartDate() {
  const context = form.value!.getContext<any>("/range2_2");
  const [start, end] = context.value;
  context.value = ["", end];
  unref(context).rangeDatePickerRef.value.focusChange("start");
}
function clearEndDate() {
  const context = form.value!.getContext<any>("/range2_2");
  const [start, end] = context.value;
  context.value = [start, ""];
  unref(context).rangeDatePickerRef.value.focusChange("end");
}
</script>

<style scoped lang="less">
.date-picker-right-panel {
  padding: 0;
  li {
    list-style-type: none;
    button {
      width: 66px;
    }
    span {
      margin-left: 8px;
    }
  }
}
.date-picker-footer {
  display: flex;
  justify-content: end;
  button {
    margin-left: 10px;
  }
}
</style>
