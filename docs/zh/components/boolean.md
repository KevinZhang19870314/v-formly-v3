# Boolean 开关

开关选择器。

## 代码演示

::: demo

```vue
<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta">
      <!-- boolean3 -->
      <template v-slot:boolean3_checked_icon>
        <check-outlined />
      </template>
      <template v-slot:boolean3_unchecked_icon>
        <close-outlined />
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
```

:::

## API

### meta 属性

| 成员        | 说明     | 类型      | 默认值 |
| ----------- | -------- | --------- | ------ |
| `:readOnly` | 禁用状态 | `boolean` | -      |

### meta.ui 属性

| 成员                           | 说明                      | 类型                                      | 默认值 |
| ------------------------------ | ------------------------- | ----------------------------------------- | ------ |
| `:checkedChildren`             | 选中时的内容              | `string`                                  | -      |
| `:slotNameOfCheckedChildren`   | 选中时的内容，slot 名称   | `string`                                  | -      |
| `:unCheckedChildren`           | 非选中时的内容            | `string`                                  | -      |
| `:slotNameOfUnCheckedChildren` | 非选中时的内容，slot 名称 | `string`                                  | -      |
| `@change`                      | 输入框内容变化时的回调    | `Function(checked:Boolean, event: Event)` | -      |
