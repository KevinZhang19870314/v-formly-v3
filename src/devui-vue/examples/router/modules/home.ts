import type { RouteRecordRaw } from "vue-router";
import BasicLayout from "../../layout/index.vue";
import HomeViewVue from "../../views/HomeView.vue";

const route: RouteRecordRaw = {
  path: "/home",
  name: "home",
  component: BasicLayout,
  redirect: "/home",
  meta: {
    title: "Home 首页",
    icon: "icon-homepage",
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
