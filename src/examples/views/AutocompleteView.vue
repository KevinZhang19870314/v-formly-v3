<template>
  <div>
    <v-formly ref="form" v-model="formData" :meta="meta" :layout="'horizontal'">
      <template v-slot:auto1-textarea>
        <a-textarea
          placeholder="input here"
          style="height: 50px"
          @keypress="auto1_handleKeyPress"
        />
      </template>
      <template v-slot:auto2-option="item">
        <template v-if="item.options">
          <span>
            {{ item.value }}
            <a
              style="float: right"
              href="https://www.google.com/search?q=antd"
              target="_blank"
              rel="noopener noreferrer"
            >
              more
            </a>
          </span>
        </template>
        <template v-else-if="item.value === 'all'">
          <a
            href="https://www.google.com/search?q=ant-design-vue"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all results
          </a>
        </template>
        <template v-else>
          <div style="display: flex; justify-content: space-between">
            {{ item.value }}
            <span>
              <UserOutlined />
              {{ item.count }}
            </span>
          </div>
        </template>
      </template>
      <template v-slot:auto2-inputsearch>
        <a-input-search placeholder="input here" size="large"></a-input-search>
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
import type VFormly from "@/Formly.vue";
import type { StringMeta } from "@/meta/string.meta";
import { auto2_dataSource } from "../data/autocomplete2";

//#region init
interface MockVal {
  value: string;
}

const mockVal = (str: string, repeat = 1): MockVal => {
  return {
    value: str.repeat(repeat),
  };
};

const auto1_handleKeyPress = (ev: KeyboardEvent) => {
  console.log("auto1_handleKeyPress", ev);
};

const form = ref<null | InstanceType<typeof VFormly>>(null);
const auto_options = ref<MockVal[]>([]);

const auto1_options = ref<{ value: string }[]>([]);
//#endregion

const meta = {
  type: "object",
  properties: {
    auto: {
      type: "string",
      title: "基本使用",
      ui: {
        component: "autocomplete",
        placeholder: "input here",
        options: auto_options.value,
        select: function (value: string) {
          console.log("onSelect", value);
        },
        search: function (searchText: string) {
          console.log(searchText);
          auto_options.value = !searchText
            ? []
            : [
                mockVal(searchText),
                mockVal(searchText, 2),
                mockVal(searchText, 3),
              ];
          const context = form.value!.getContext<StringMeta>("/auto");
          console.log(toRaw(auto_options.value));
          context.ui.value.options = auto_options;
        },
      },
    },
    auto1: {
      type: "string",
      title: "自定义输入组件",
      ui: {
        component: "autocomplete",
        slotNameOfDefault: "auto1-textarea",
        options: auto1_options,
        // select: function (value: string) {
        //   console.log("onSelect", value);
        // },
        search: function (searchText: string, value: string) {
          debugger;
          auto1_options.value = !value
            ? []
            : [
                { value },
                { value: value + value },
                { value: value + value + value },
              ];

          console.log("auto1_options.value", auto1_options.value);
          const context = form.value!.getContext<StringMeta>("/auto1");
          context.ui.value.options = auto1_options;
        },
      },
    },
    auto2: {
      type: "string",
      title: "查询模式 - 确定类目",
      ui: {
        component: "autocomplete",
        options: auto2_dataSource,
        slotNameOfOption: "auto2-option",
        slotNameOfDefault: "auto2-inputsearch",
        select: function (value: string) {
          console.log("onSelect", value);
        },
        search: function (searchText: string, value: string) {
          auto1_options.value = !value
            ? []
            : [
                { value },
                { value: value + value },
                { value: value + value + value },
              ];
          const context = form.value!.getContext<StringMeta>("/auto1");
          context.ui.value.options = auto1_options;
        },
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

<style scoped></style>
