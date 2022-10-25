import type { RouteRecordRaw } from "vue-router";
import { ControlOutlined } from "@ant-design/icons-vue";
import BasicLayout from "@/examples/layout/index.vue";
import AboutViewVue from "@/examples/views/AboutView.vue";
import LayoutView from "@/examples/views/LayoutView.vue";
import CustomValidatorView from "@/examples/views/CustomValidatorView.vue";

const route: RouteRecordRaw = {
  path: "/function",
  name: "function",
  component: BasicLayout,
  redirect: "/function/custom-validator",
  meta: { title: "Functional 功能性", icon: ControlOutlined },
  children: [
    {
      path: "custom-validator",
      name: "custom-validator",
      component: CustomValidatorView,
      meta: { title: "自定义校验" },
    },
    {
      path: "custom-submit-button",
      name: "custom-submit-button",
      component: AboutViewVue,
      // component: SubmitButtonView,
      meta: { title: "自定义提交按钮" },
    },
    {
      path: "layout",
      name: "layout",
      component: LayoutView,
      meta: { title: "表单布局" },
    },
    {
      path: "password",
      name: "password",
      component: AboutViewVue,
      // component: PasswordView,
      meta: { title: "自定义密码框组件" },
    },
    {
      path: "chkinput",
      name: "chkinput",
      component: AboutViewVue,
      // component: ChkInputView,
      meta: { title: "自定义选择输入框组件" },
    },
    {
      path: "visible-if",
      name: "visible-if",
      component: AboutViewVue,
      // component: VisibleIfView,
      meta: { title: "visibleIf动态设置表单项是否可见" },
    },
  ],
};

export default route;
