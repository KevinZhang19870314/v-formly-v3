<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta">
      <template v-slot:string6_3_suffix>
        <el-icon class="el-input__icon"><calendar /></el-icon>
      </template>
      <template v-slot:string6_4_prefix>
        <el-icon class="el-input__icon"><search /></el-icon>
      </template>
      <template #string9_1_prepend>Http://</template>
      <template #string9_2_append>.com</template>
      <template #string9_3_prepend>
        <el-select
          v-model="string9Select"
          placeholder="Select"
          style="width: 115px"
        >
          <el-option label="Restaurant" value="1" />
          <el-option label="Order No." value="2" />
          <el-option label="Tel" value="3" />
        </el-select>
      </template>
      <template #string9_3_append><el-button :icon="Search" /></template>
      <template #string9_4_prepend>
        <el-button :icon="Search" />
      </template>
      <template #string9_4_append>
        <el-select
          v-model="string9Select"
          placeholder="Select"
          style="width: 115px"
        >
          <el-option label="Restaurant" value="1" />
          <el-option label="Order No." value="2" />
          <el-option label="Tel" value="3" />
        </el-select>
      </template>
    </v-formly-v3>
    <div class="btns">
      <el-button type="danger" @click="clear"> 重置 </el-button>
      <el-button type="primary" @click="submit"> 提交 </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw, unref } from "vue";
import type VFormly from "@/element-plus/ElFormly.vue";
import { Search } from "@element-plus/icons-vue";

const form = ref<null | InstanceType<typeof VFormly>>(null);
const string9Select = ref("");
const meta = {
  type: "object",
  properties: {
    string1: {
      title: "基础用法",
      type: "string",
      ui: {
        showRequired: true,
        placeholder: "Please input",
        errors: {
          required: "请输入",
        },
        change: (val: string) => console.log(val),
      },
    },
    string2: {
      title: "禁用状态",
      type: "string",
      readOnly: true,
      ui: {
        placeholder: "Please input",
      },
    },
    string3: {
      title: "一键清空",
      type: "string",
      ui: {
        placeholder: "Please input",
        clearable: true,
      },
    },
    string4: {
      title: "格式化",
      type: "string",
      ui: {
        placeholder: "Please input",
        formatter: (value: any) =>
          `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        parser: (value: any) => value.replace(/\$\s?|(,*)/g, ""),
      },
    },
    string5: {
      title: "密码框",
      type: "string",
      ui: {
        placeholder: "Please input password",
        type: "password",
        showPassword: true,
      },
    },
    string6_1: {
      title: "带图标的输入框(Using attributes)",
      type: "string",
      ui: {
        placeholder: "Pick a date",
        suffixIcon: "Calendar",
        grid: {
          span: 12,
        },
      },
    },
    string6_2: {
      title: "",
      type: "string",
      ui: {
        placeholder: "Type something",
        prefixIcon: "Search",
        grid: {
          span: 12,
        },
      },
    },
    string6_3: {
      title: "带图标的输入框(Using slots)",
      type: "string",
      ui: {
        placeholder: "Pick a date",
        slotNameOfSuffix: "string6_3_suffix",
        grid: {
          span: 12,
        },
      },
    },
    string6_4: {
      title: "",
      type: "string",
      ui: {
        placeholder: "Type something",
        slotNameOfPrefix: "string6_4_prefix",
        grid: {
          span: 12,
        },
      },
    },
    string7: {
      title: "文本域",
      type: "string",
      ui: {
        placeholder: "Please input",
        type: "textarea",
        rows: 2,
      },
    },
    string8_1: {
      title: "自适应文本域",
      type: "string",
      ui: {
        placeholder: "Please input",
        type: "textarea",
        autosize: true,
        grid: {
          span: 12,
        },
      },
    },
    string8_2: {
      title: "",
      type: "string",
      ui: {
        placeholder: "Please input",
        type: "textarea",
        autosize: { minRows: 2, maxRows: 4 },
        grid: {
          span: 12,
        },
      },
    },
    string9_1: {
      title: "复合型输入框",
      type: "string",
      ui: {
        placeholder: "Please input",
        slotNameOfPrepend: "string9_1_prepend",
      },
    },
    string9_2: {
      title: "复合型输入框",
      type: "string",
      ui: {
        placeholder: "Please input",
        slotNameOfAppend: "string9_2_append",
      },
    },
    string9_3: {
      title: "复合型输入框",
      type: "string",
      ui: {
        placeholder: "Please input",
        slotNameOfPrepend: "string9_3_prepend",
        slotNameOfAppend: "string9_3_append",
      },
    },
    string9_4: {
      title: "复合型输入框",
      type: "string",
      ui: {
        placeholder: "Please input",
        slotNameOfPrepend: "string9_4_prepend",
        slotNameOfAppend: "string9_4_append",
      },
    },
    string10_1: {
      title: "尺寸",
      type: "string",
      ui: {
        placeholder: "Please input",
        size: "large",
        grid: {
          span: 8,
        },
      },
    },
    string10_2: {
      title: "尺寸",
      type: "string",
      ui: {
        placeholder: "Please input",
        grid: {
          span: 8,
        },
      },
    },
    string10_3: {
      title: "尺寸",
      type: "string",
      ui: {
        placeholder: "Please input",
        size: "small",
        grid: {
          span: 8,
        },
      },
    },
    string11_1: {
      title: "输入长度限制",
      type: "string",
      maxLength: 10,
      ui: {
        placeholder: "Please input",
        type: "text",
        showWordLimit: true,
        grid: {
          span: 12,
        },
      },
    },
    string11_2: {
      title: "",
      type: "string",
      maxLength: 30,
      ui: {
        placeholder: "Please input",
        type: "textarea",
        showWordLimit: true,
        grid: {
          span: 12,
        },
      },
    },
  },
  required: ["string1"],
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
