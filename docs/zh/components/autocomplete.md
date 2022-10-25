# AutoComplete 自动完成

输入框自动完成功能。

## 代码演示

::: demo

```vue
<template>
  <div>
    <v-formly-v3
      ref="form"
      v-model="formData"
      :meta="meta"
      :layout="'horizontal'"
    >
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
    </v-formly-v3>
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw, unref } from "vue";
// import type VFormlyV3 from "@/Formly.vue";
// import type { StringMeta } from "@/meta/string.meta";
// import { auto2_dataSource } from "@/examples/data/autocomplete2";
const auto2_dataSource = [
  {
    value: "Libraries",
    options: [
      {
        value: "AntDesignVue",
        count: 10000,
      },
      {
        value: "AntDesignVue UI",
        count: 10600,
      },
    ],
  },
  {
    value: "Solutions",
    options: [
      {
        value: "AntDesignVue UI FAQ",
        count: 60100,
      },
      {
        value: "AntDesignVue FAQ",
        count: 30010,
      },
    ],
  },
  {
    value: "Articles",
    options: [
      {
        value: "AntDesignVue design language",
        count: 100000,
      },
    ],
  },
  {
    value: "all",
  },
];

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

const form = ref<null | InstanceType<typeof VFormlyV3>>(null);
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
```

:::

## API

**我们只列出属性中不一致的或新添加的，一致的地方请参考 AntDv 文档**

### meta 属性

| 成员        | 说明     | 类型      | 默认值 |
| ----------- | -------- | --------- | ------ |
| `:readOnly` | 禁用状态 | `boolean` | -      |

### meta.ui 属性

| 成员                 | 说明                                              | 类型                      | 默认值 |
| -------------------- | ------------------------------------------------- | ------------------------- | ------ |
| `:slotNameOfDefault` | 自定义输入框，slot 名称                           | `string`                  | -      |
| `:slotNameOfOption`  | 通过 option 插槽，自定义节点，slot 名称           | `string`                  | -      |
| `@change`            | 选中 option，或 input 的 value 变化时，调用此函数 | `function(value)`         | -      |
| `@search`            | 搜索补全项的时候调用                              | `function(value)`         | -      |
| `@select`            | 被选中时调用，参数为选中项的 value 值             | `function(value, option)` | -      |
