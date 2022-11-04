<template>
  <div>
    <v-formly-v3
      ref="form"
      v-model="formData"
      :meta="meta"
      :layout="'horizontal'"
    >
      <template v-slot:auto2_suffix>
        <el-icon class="el-input__icon" @click="handleAuto2SuffixIconClick">
          <edit />
        </el-icon>
      </template>
      <template v-slot:auto2_default="{ item }">
        <div class="value">{{ item.value }}</div>
        <span class="link">{{ item.link }}</span>
      </template>
    </v-formly-v3>
    <div class="btns">
      <el-button type="danger" @click="clear"> 重置 </el-button>
      <el-button type="primary" @click="submit"> 提交 </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, toRaw, unref } from "vue";
import type VFormlyV3 from "@/element-plus/ElFormly.vue";

const form = ref<null | InstanceType<typeof VFormlyV3>>(null);

interface RestaurantItem {
  value: string;
  link: string;
}
const restaurants = ref<RestaurantItem[]>([]);
const createFilter = (queryString: string) => {
  return (restaurant: RestaurantItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    );
  };
};
const loadAll = () => {
  return [
    { value: "vue", link: "https://github.com/vuejs/vue" },
    { value: "element", link: "https://github.com/ElemeFE/element" },
    { value: "cooking", link: "https://github.com/ElemeFE/cooking" },
    { value: "mint-ui", link: "https://github.com/ElemeFE/mint-ui" },
    { value: "vuex", link: "https://github.com/vuejs/vuex" },
    { value: "vue-router", link: "https://github.com/vuejs/vue-router" },
    { value: "babel", link: "https://github.com/babel/babel" },
  ];
};
const querySearchAutoAndAuto1 = (queryString: string, cb: any) => {
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value;
  // call callback function to return suggestions
  cb(results);
};

interface LinkItem {
  value: string;
  link: string;
}
const links = ref<LinkItem[]>([]);
const querySearchAuto2 = (queryString: string, cb: any) => {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value;
  // call callback function to return suggestion objects
  cb(results);
};
const handleAuto2SuffixIconClick = (ev: Event) => {
  console.log(ev);
};

let timeout: any;
const querySearchAsyncAuto3 = (queryString: string, cb: (arg: any) => void) => {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value;

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    cb(results);
  }, 3000 * Math.random());
};
onMounted(() => {
  restaurants.value = loadAll();
  links.value = loadAll();
});
const meta = {
  type: "object",
  properties: {
    auto: {
      type: "string",
      title: "list suggestions when activated",
      ui: {
        component: "autocomplete",
        placeholder: "Please Input",
        clearable: true,
        fetchSuggestions: querySearchAutoAndAuto1,
        select: function (value: string) {
          console.log("onSelect", value);
        },
      },
    },
    auto1: {
      type: "string",
      title: "list suggestions on input",
      ui: {
        component: "autocomplete",
        placeholder: "Please Input",
        clearable: true,
        triggerOnFocus: false,
        fetchSuggestions: querySearchAutoAndAuto1,
        select: function (value: string) {
          console.log("onSelect", value);
        },
      },
    },
    auto2: {
      type: "string",
      title: "自定义模板",
      ui: {
        component: "autocomplete",
        placeholder: "Please Input",
        slotNameOfDefault: "auto2_default",
        slotNameOfSuffix: "auto2_suffix",
        fetchSuggestions: querySearchAuto2,
        select: function (value: string) {
          console.log("onSelect", value);
        },
      },
    },
    auto3: {
      type: "string",
      title: "远程搜索",
      ui: {
        component: "autocomplete",
        placeholder: "Please Input",
        fetchSuggestions: querySearchAsyncAuto3,
        select: function (value: string) {
          console.log("onSelect", value);
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
