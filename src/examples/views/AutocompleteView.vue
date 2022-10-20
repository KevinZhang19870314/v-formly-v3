<template>
  <div>
    <v-formly ref="form" v-model="formData" :meta="meta" :layout="'horizontal'">
      <template v-slot:auto1-textarea>
        <a-textarea
          placeholder="input here"
          class="custom"
          style="height: 50px"
          @keypress="auto1_handleKeyPress"
        />
      </template>
      <template v-slot:datasource>
        <a-select-option v-for="email in result" :key="email">
          {{ email }}
        </a-select-option>
      </template>
      <template v-slot:datasource1>
        <a-select-option v-for="email in result1" :key="email">
          {{ email }}
        </a-select-option>
      </template>
      <template v-slot:datasource2>
        <a-select-option v-for="email in result2" :key="email">
          {{ email + "_test" }}
        </a-select-option>
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

const form = ref(null);
const auto_options = ref<MockVal[]>([]);

const auto1_options = ref<{ value: string }[]>([]);
const meta = {
  type: "object",
  properties: {
    auto: {
      type: "string",
      title: "基本使用",
      ui: {
        component: "autocomplete",
        placeholder: "auto complete",
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
          const context = (form.value as any).getContext("/auto");
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
        options: auto1_options.value,
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
          const context = (form.value as any).getContext("/auto1");
          context.ui.value.options = auto1_options;
        },
      },
    },
    // obj: {
    //   type: "object",
    //   properties: {
    //     auto1: {
    //       type: "string",
    //       title: "自动完成1",
    //       ui: {
    //         component: "autocomplete",
    //         placeholder: "auto complete 1",
    //         slotNameOfDataSource: "datasource1", // slotName优先级高于dataSource，即有slot用slot，否则用dataSource数组
    //         dataSource: [],
    //         search: function (value: string) {
    //           console.log(value);
    //           handleSearch1(value);
    //         },
    //       },
    //     },
    //     obj1: {
    //       type: "object",
    //       properties: {
    //         auto2: {
    //           type: "string",
    //           title: "自动完成2",
    //           ui: {
    //             component: "autocomplete",
    //             placeholder: "auto complete 2",
    //             slotNameOfDataSource: "datasource2", // slotName优先级高于dataSource，即有slot用slot，否则用dataSource数组
    //             dataSource: [],
    //             search: function (value: string) {
    //               console.log(value);
    //               handleSearch2(value);
    //             },
    //           },
    //         },
    //       },
    //     },
    //   },
    // },
  },
  required: [],
};

let formData: any = ref({});
let result: any = ref([]);
let result1: any = ref([]);
let result2: any = ref([]);

function clear() {
  formData.value = null;
}

async function submit() {
  let valid = await (form.value as any).validate();
  if (valid) {
    console.log(toRaw(unref(formData)));
  }
}

function handleSearch(value: string) {
  if (!value || value.indexOf("@") >= 0) {
    result.value = [];
  } else {
    result.value = ["gmail.com", "163.com", "qq.com"].map(
      (domain) => `${value}@${domain}`
    );
  }
}

function handleSearch1(value: string) {
  let result: any;
  if (!value || value.indexOf("@") >= 0) {
    result = [];
  } else {
    result = ["gmail.com", "163.com", "qq.com"].map(
      (domain) => `${value}@${domain}`
    );
  }
  result1.value = result;
}

function handleSearch2(value: string) {
  let result: any;
  if (!value || value.indexOf("@") >= 0) {
    result = [];
  } else {
    result = ["gmail.com", "163.com", "qq.com"].map(
      (domain) => `${value}@${domain}`
    );
  }
  result2.value = result;
}
</script>

<style scoped></style>
