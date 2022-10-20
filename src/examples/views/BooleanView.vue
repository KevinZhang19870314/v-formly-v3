<template>
  <div>
    <v-formly ref="form" v-model="formData" :meta="meta">
      <!-- boolean3 -->
      <template v-slot:boolean3_checked_icon>
        <check-outlined />
      </template>
      <template v-slot:boolean3_unchecked_icon>
        <close-outlined />
      </template>
    </v-formly>
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw, unref } from "vue";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons-vue";

const form = ref(null);
let formData: any = ref({});
const meta = {
  type: "object",
  properties: {
    boolean1: {
      title: "基本用法",
      type: "boolean",
      default: true,
      ui: {
        change: (val: string, event: Event) => console.log(val, event),
      },
    },
    boolean2: {
      title: "文字和图标",
      type: "boolean",
      ui: {
        checkedChildren: "开",
        unCheckedChildren: "关",
      },
    },
    boolean3: {
      title: "文字和图标slot",
      type: "boolean",
      default: true,
      ui: {
        slotNameOfCheckedChildren: "boolean3_checked_icon",
        slotNameOfUnCheckedChildren: "boolean3_unchecked_icon",
      },
    },
    boolean4: {
      title: "加载中",
      type: "boolean",
      default: true,
      ui: {
        loading: true,
      },
    },
    boolean5: {
      title: "不可用",
      type: "boolean",
      default: true,
      readOnly: true,
    },
    obj: {
      type: "object",
      properties: {
        boolean6_1: {
          title: "大",
          type: "boolean",
          default: true,
        },
        boolean6_2: {
          title: "小",
          type: "boolean",
          ui: {
            size: "small",
          },
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
