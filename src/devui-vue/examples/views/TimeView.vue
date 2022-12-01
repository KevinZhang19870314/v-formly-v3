<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta">
      <template v-slot:customViewTemplate="{ ref }">
        <div class="slot-box">
          <div class="slot-bottom" @click="chooseNowFun(ref)">choose now</div>
          <div class="slot-bottom" @click="chooseTime(ref)">choose 23:00</div>
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
import type VFormly from "@/devui-vue/DFormly.vue";
import { ref, toRaw, unref } from "vue";

const form = ref<null | InstanceType<typeof VFormly>>(null);

const meta = {
  type: "object",
  properties: {
    time1_1: {
      type: "string",
      title: "基本用法",
      ui: {
        component: "time",
        change: (time: string) => console.log(time),
      },
    },
    time1_2: {
      type: "string",
      title: "disabled",
      readOnly: true,
      ui: {
        component: "time",
        change: (time: string) => console.log(time),
      },
      default: "12:30:40",
    },
    time2: {
      type: "string",
      title: "时间区间限制",
      ui: {
        component: "time",
        minTime: "02:04:40",
        maxTime: "22:30:30",
      },
    },
    time3: {
      type: "string",
      title: "格式化",
      ui: {
        component: "time",
        format: "hh:mm",
      },
      default: "11:12:34",
    },
    time4: {
      type: "string",
      title: "自定义模板",
      ui: {
        component: "time",
        slotNameOfCustomViewTemplate: "customViewTemplate",
      },
      default: "11:12:34",
    },
  },
  required: ["name"],
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

function chooseTime(ref: any) {
  let timeObj = {
    time: "23",
    type: "mm",
  };
  ref.chooseTime(timeObj);
}

function chooseNowFun(ref: any) {
  let date = new Date();
  let hour = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
  let minute =
    date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
  let second =
    date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
  let timeObj = {
    time: hour + ":" + minute + ":" + second,
  };
  ref.chooseTime(timeObj);
}
</script>

<style scoped>
.slot-box {
  overflow: hidden;
  height: 100%;
}
.slot-bottom {
  font-size: 14px;
  cursor: pointer;
}
.slot-bottom:hover {
  color: #7693f5;
  text-decoration: underline;
}
</style>
