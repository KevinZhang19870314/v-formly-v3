import type { RouteRecordRaw } from "vue-router";
import { SetUp } from "@element-plus/icons-vue";
import BasicLayout from "@/element-plus/examples/layout/index.vue";
import LayoutView from "@/element-plus/examples/views/LayoutView.vue";
import CustomValidatorView from "@/element-plus/examples/views/CustomValidatorView.vue";
import VisibleIfView from "@/element-plus/examples/views/VisibleIfView.vue";
import PasswordView from "@/element-plus/examples/views/PasswordView.vue";
import SubmitButtonView from "@/element-plus/examples/views/SubmitButtonView.vue";
import ChkInputView from "@/element-plus/examples/views/ChkInputView.vue";
import { markRaw } from "vue";

const route: RouteRecordRaw = {
  path: "/function",
  name: "function",
  component: BasicLayout,
  redirect: "/function/custom-validator",
  meta: { title: "Functional 功能性", icon: markRaw(SetUp) },
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
      component: PasswordView,
      meta: { title: "自定义密码框组件" },
    },
    {
      path: "chkinput",
      name: "chkinput",
      component: ChkInputView,
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
