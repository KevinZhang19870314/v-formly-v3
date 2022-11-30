<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta">
      <template v-slot:auto3="{ keyword }">
        <div>
          {{ `searching: ${keyword}` }}
        </div>
      </template>
      <template v-slot:auto4_item="slotProps">
        <div>第{{ slotProps.index }}项: {{ slotProps.item }}</div>
      </template>
      <template v-slot:auto4_nothing="{ keyword }">
        <div>
          {{ `没有匹配项: ${keyword}` }}
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
import { ref, toRaw, unref } from "vue";
import type VFormlyV3 from "@/ant-design-vue/AFormly.vue";
import { source, searchSource } from "../data/autocomplete";

const lazySource = ref(["C#", "C", "C++", "C1", "C2", "C3", "C4", "C5", "C6"]);

const form = ref<null | InstanceType<typeof VFormlyV3>>(null);
const formData: any = ref({});
const meta = {
  type: "object",
  properties: {
    auto1_1: {
      type: "string",
      title: "基本使用",
      ui: {
        component: "autocomplete",
        source,
        delay: 1000,
        width: 420,
        appendToBody: false,
        allowEmptyValueSearch: true,
        position: ["bottom"],
        selectValue: (val: string) => console.log("selectValue", val),
        transInputFocusEmit: () => console.log("transInputFocusEmit"),
      },
    },
    auto1_2: {
      title: "大",
      type: "string",
      ui: {
        component: "autocomplete",
        size: "lg",
        source,
        width: 420,
      },
    },
    auto1_3: {
      title: "小",
      type: "string",
      ui: {
        component: "autocomplete",
        size: "sm",
        source,
        width: 420,
      },
    },
    auto2: {
      type: "string",
      title: "设置禁用",
      readOnly: true,
      ui: {
        component: "autocomplete",
        source,
      },
    },
    auto3: {
      type: "string",
      title: "自定义数据匹配方法",
      ui: {
        component: "autocomplete",
        searchFn,
        disabledKey: "disabled",
        isSearching: true,
        delay: 1000,
        formatter: (item: { label: string; disabled: boolean }) => item.label,
        slotNameOfSearching: "auto3",
      },
    },
    auto4: {
      type: "string",
      title: "自定义模板展示",
      ui: {
        component: "autocomplete",
        source,
        slotNameOfItem: "auto4_item",
        slotNameOfNothing: "auto4_nothing",
      },
    },
    auto5: {
      type: "string",
      title: "启用懒加载",
      ui: {
        component: "autocomplete",
        placeholder: "输入 c",
        source: lazySource,
        enableLazyLoad: true,
        sceneType: "select",
        loadMore,
        valueParser: (val: string) => val + "123",
      },
    },
    auto6: {
      type: "string",
      title: "最近输入",
      ui: {
        component: "autocomplete",
        source,
        latestSource: ["JavaScript", "TypeScript"],
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
async function searchFn(trem: string) {
  const arr: Array<{
    label: string;
    disabled: boolean;
  }> = [];
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  searchSource.forEach((item) => {
    let cur = item.label;
    cur = cur.toLowerCase();
    if (cur.startsWith(trem)) {
      arr.push(item);
    }
  });
  return arr;
}
function loadMore() {
  const context = form.value!.getContext<any>("/auto5");
  setTimeout(() => {
    lazySource.value.push("lazyData" + lazySource.value.length);
    unref(context).autoCompleteRef.value.loadFinish();
  }, 3000);
}
</script>

<style scoped></style>
