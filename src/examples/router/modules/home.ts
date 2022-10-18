import type { RouteRecordRaw } from "vue-router";
import { DashboardOutlined } from "@ant-design/icons-vue";
import HomeViewVue from "@/examples/views/HomeView.vue";
import BasicLayout from "@/examples/layout/index.vue";

const route: RouteRecordRaw = {
  path: "/home",
  name: "home",
  component: BasicLayout,
  redirect: "/home",
  meta: {
    title: "Home 首页",
    icon: DashboardOutlined,
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
