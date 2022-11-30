<template>
  <div>
    <v-formly-v3 ref="form" v-model="formData" :meta="meta">
      <template v-slot:selectEmpty>
        <div style="text-align: center">Empty</div>
      </template>
      <template v-slot:select5SelectOption>
        <d-option v-for="(item, i) in options" :key="i" :value="item">
          <div class="clear-float">
            <span style="float: left">{{ item }}</span>
            <span style="float: right">{{ i + 1 }}</span>
          </div>
        </d-option>
      </template>
      <template v-slot:select6SelectGroupOption>
        <d-option-group label="分组一">
          <d-option
            v-for="(item, index) in options"
            :key="index"
            :value="item"
          ></d-option>
        </d-option-group>
        <d-option-group label="分组二">
          <d-option
            v-for="(item, index) in options2"
            :key="index"
            :value="item"
          ></d-option>
        </d-option-group>
      </template>
      <template v-slot:select7SelectOption>
        <d-option v-for="(item, i) in options3.data" :key="i" :value="item" />
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
import { reactive, ref, toRaw, unref } from "vue";
import type VFormly from "@/devui-vue/DFormly.vue";

const formData: any = ref({});
const form = ref<null | InstanceType<typeof VFormly>>(null);
const items1 = new Array(6).fill(0).map((_, i) => `Option ${i + 1}`);
const items2 = new Array(6).fill(0).map((_, i) => `Test ${i + 1}`);
const options = reactive(items1);
const options2 = reactive(items2);
const options3 = reactive<{ data: string[] }>({
  data: [],
});
const loading = ref(false);
const meta = {
  properties: {
    select1_1: {
      type: "string",
      title: "基本用法",
      ui: {
        component: "select",
        options,
        allowClear: true,
        valueChange: (val: any) => console.log("valueChange", val),
        toggleChange: (open: boolean) => console.log("toggleChange", open),
        clear: () => console.log("clear"),
        blur: (e: FocusEvent) => console.log("blur", e),
        focus: (e: FocusEvent) => console.log("focus", e),
      },
    },
    select1_2: {
      type: "string",
      title: "无边框",
      ui: {
        component: "select",
        options,
        overview: "underlined",
      },
    },
    string2_1: {
      type: "string",
      title: "大",
      ui: {
        component: "select",
        options,
        size: "lg",
        grid: { span: 12 },
      },
    },
    string2_2: {
      type: "string",
      title: "小",
      ui: {
        component: "select",
        options,
        size: "sm",
        grid: { span: 12 },
      },
    },
    string3_1: {
      type: "string",
      title: "多选",
      ui: {
        component: "select",
        options,
        multiple: true,
        multipleLimit: 2,
        removeTag: (val: any) => console.log("removeTag", val),
      },
    },
    string3_2: {
      type: "string",
      title: "collapse-tags",
      ui: {
        component: "select",
        options,
        multiple: true,
        collapseTags: true,
      },
    },
    string3_3: {
      type: "string",
      title: "collapse-tags-tooltip",
      ui: {
        component: "select",
        options,
        multiple: true,
        collapseTags: true,
        collapseTagsTooltip: true,
      },
    },
    select4: {
      type: "string",
      title: "禁用",
      readOnly: true,
      ui: {
        component: "select",
        options,
      },
      default: "Option 1",
    },
    select5: {
      type: "string",
      title: "自定义下拉面板显示",
      ui: {
        component: "select",
        slotNameOfDefault: "select5SelectOption",
      },
    },
    select6: {
      type: "string",
      title: "选项分组",
      ui: {
        component: "select",
        slotNameOfDefault: "select6SelectGroupOption",
      },
    },
    select7: {
      type: "string",
      title: "远程搜索",
      ui: {
        component: "select",
        slotNameOfDefault: "select7SelectOption",
        placeholder: "请输入搜索关键字 Option",
        loading: loading,
        allowClear: true,
        remote: true,
        filter: filterFunc,
      },
    },
    select8: {
      type: "string",
      title: "新增选项",
      ui: {
        component: "select",
        allowCreate: true,
        multiple: true,
        filter: true,
        options,
      },
    },
    select9: {
      type: "string",
      title: "自定义无选项内容",
      ui: {
        component: "select",
        slotNameOfEmpty: "selectEmpty",
      },
    },
  },
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

function filterFunc(query: string) {
  if (query) {
    loading.value = true;
    setTimeout(() => {
      options3.data = items1.filter((item) => {
        return item.toLowerCase().includes(query.toLowerCase());
      });
      loading.value = false;
    }, 200);
  } else {
    options3.data = [];
  }
}
</script>

<style scoped>
.clear-float:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
</style>
