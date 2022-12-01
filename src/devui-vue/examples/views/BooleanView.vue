<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta">
      <!-- boolean3 -->
      <template v-slot:boolean3_checked_icon>
        <i class="icon-right"></i>
      </template>
      <template v-slot:boolean3_unchecked_icon>
        <i class="icon-error"></i>
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
import { ref, toRaw, unref } from "vue";

let formData: any = ref({});
const form = ref(null);
const meta = {
  type: "object",
  properties: {
    boolean1: {
      title: "基本用法",
      type: "boolean",
      default: true,
      ui: {
        change: (val: string) => console.log(val),
      },
    },
    boolean2: {
      title: "自定义样式",
      type: "boolean",
      default: true,
      ui: {
        slotNameOfCheckedContent: "boolean3_checked_icon",
        slotNameOfUnCheckedContent: "boolean3_unchecked_icon",
      },
    },
    boolean3: {
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
          ui: {
            size: "lg",
          },
          default: true,
        },
        boolean6_2: {
          title: "大",
          type: "boolean",
          default: true,
        },
        boolean6_3: {
          title: "小",
          type: "boolean",
          ui: {
            size: "sm",
          },
        },
      },
    },
  },
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
