import type { RouteRecordRaw } from "vue-router";
import { House } from "@element-plus/icons-vue";
import HomeViewVue from "@/element-plus/examples/views/HomeView.vue";
import BasicLayout from "@/element-plus/examples/layout/index.vue";
import { markRaw } from "vue";

const route: RouteRecordRaw = {
  path: "/home",
  name: "home",
  component: BasicLayout,
  redirect: "/home",
  meta: {
    title: "Home 首页",
    icon: markRaw(House),
    single: true,
    sort: 1,
  },
  children: [
    {
      path: "",
      name: "home-page",
      component: HomeViewVue,
    },
  ],
};

export default route;
