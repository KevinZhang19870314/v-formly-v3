import type { RouteRecordRaw } from "vue-router";
import BasicLayout from "../../layout/index.vue";
import AboutViewVue from "../../views/AboutView.vue";
import LayoutView from "../../views/LayoutView.vue";
import CustomValidatorView from "../../views/CustomValidatorView.vue";
import VisibleIfView from "../../views/VisibleIfView.vue";
import PasswordView from "../../views/PasswordView.vue";
import SubmitButtonView from "../../views/SubmitButtonView.vue";
import ChkInputView from "../../views/ChkInputView.vue";

const route: RouteRecordRaw = {
  path: "/function",
  name: "function",
  component: BasicLayout,
  redirect: "/function/custom-validator",
  meta: { title: "Functional 功能性", icon: "icon-infrastructure" },
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
      component: SubmitButtonView,
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
      // component: PasswordView,
      component: AboutViewVue,
      meta: { title: "自定义密码框组件" },
    },
    {
      path: "chkinput",
      name: "chkinput",
      // component: ChkInputView,
      component: AboutViewVue,
      meta: { title: "自定义选择输入框组件" },
    },
    {
      path: "visible-if",
      name: "visible-if",
      component: VisibleIfView,
      meta: { title: "visibleIf动态设置表单项是否可见" },
    },
  ],
};

export default route;
