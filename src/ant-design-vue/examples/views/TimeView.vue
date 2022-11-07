<template>
  <div>
    <v-formly-v3
      ref="form"
      v-model="formData"
      :meta="meta"
      :layout="'vertical'"
    >
      <template v-slot:suffixIcon3>
        <smile-outlined />
      </template>
      <template v-slot:addon4>
        <a-button size="small" type="primary" @click="handleClose">
          {{ "Close" }}
        </a-button>
      </template>
    </v-formly-v3>
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type VFormly from "@/ant-design-vue/AFormly.vue";
import { ref, toRaw, unref } from "vue";

const form = ref<null | InstanceType<typeof VFormly>>(null);

const time4_open = ref(false);
const meta = {
  type: "object",
  properties: {
    time: {
      title: "12小时制",
      type: "string",
      default: "08:12:12",
      ui: {
        component: "time",
        valueFormat: "hh:mm:ss",
        use12Hours: true,
        change: (time: any, timeString: string) => {
          console.log(time, timeString);
        },
      },
    },
    time1: {
      title: "选择时分",
      type: "string",
      ui: {
        component: "time",
        format: "HH:mm",
        change: (time: any, timeString: string) => {
          console.log(time, timeString);
        },
      },
    },
    time2_1: {
      title: "大",
      type: "string",
      ui: {
        component: "time",
        format: "HH:mm",
        change: (time: any, timeString: string) => {
          console.log(time, timeString);
        },
        size: "large",
        grid: {
          span: 8,
        },
      },
    },
    time2_2: {
      title: "中",
      type: "string",
      ui: {
        component: "time",
        format: "HH:mm",
        change: (time: any, timeString: string) => {
          console.log(time, timeString);
        },
        grid: {
          span: 8,
        },
      },
    },
    time2_3: {
      title: "小",
      type: "string",
      ui: {
        component: "time",
        format: "HH:mm",
        change: (time: any, timeString: string) => {
          console.log(time, timeString);
        },
        size: "small",
        grid: {
          span: 8,
        },
      },
    },
    time3: {
      title: "后缀图标",
      type: "string",
      ui: {
        component: "time",
        slotNameOfSuffixIcon: "suffixIcon3",
        change: (time: any, timeString: string) => {
          console.log(time, timeString);
        },
      },
    },
    time4: {
      title: "附加内容",
      type: "string",
      ui: {
        component: "time",
        slotNameOfRenderExtraFooter: "addon4",
        open: time4_open,
        change: (time: any, timeString: string) => {
          console.log(time, timeString);
        },
      },
    },
    time5: {
      title: "禁用",
      type: "string",
      readOnly: true,
      ui: {
        component: "time",
        change: (time: any, timeString: string) => {
          console.log(time, timeString);
        },
      },
    },
    time6: {
      title: "步长选项",
      type: "string",
      ui: {
        component: "time",
        minuteStep: 15,
        secondStep: 10,
        change: (time: any, timeString: string) => {
          console.log(time, timeString);
        },
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

function handleClose() {
  time4_open.value = !time4_open.value;
}
</script>

<style scoped></style>
