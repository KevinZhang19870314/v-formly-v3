import type { RouteRecordRaw } from "vue-router";
import { FormOutlined } from "@ant-design/icons-vue";
import BasicLayout from "@/examples/layout/index.vue";
import AboutViewVue from "@/examples/views/AboutView.vue";

const route: RouteRecordRaw = {
  path: "/form",
  name: "form",
  component: BasicLayout,
  redirect: "/form/string",
  meta: { title: "Components 组件", icon: FormOutlined },
  children: [
    {
      path: "string",
      name: "string",
      component: AboutViewVue,
      // component: StringView,
      meta: { title: "String 文本框" },
    },
    {
      path: "boolean",
      name: "boolean",
      component: AboutViewVue,
      // component: BooleanView,
      meta: { title: "Boolean 开关" },
    },
    {
      path: "object",
      name: "object",
      component: AboutViewVue,
      // component: ObjectView,
      meta: { title: "Object 对象" },
    },
    {
      path: "array",
      name: "array",
      component: AboutViewVue,
      // component: ArrayView,
      meta: { title: "Array 数组" },
    },
    {
      path: "autoComplete",
      name: "autoComplete",
      component: AboutViewVue,
      // component: AutoCompleteView,
      meta: { title: "AutoComplete 自动完成" },
    },
    {
      path: "checkbox",
      name: "checkbox",
      component: AboutViewVue,
      // component: CheckboxView,
      meta: { title: "Checkbox 多选框" },
    },
    {
      path: "date",
      name: "date",
      component: AboutViewVue,
      // component: DateView,
      meta: { title: "Date 日期" },
    },
    {
      path: "number",
      name: "number",
      component: AboutViewVue,
      // component: NumberView,
      meta: { title: "Number 数字" },
    },
    {
      path: "time",
      name: "time",
      component: AboutViewVue,
      // component: TimeView,
      meta: { title: "Time 时间" },
    },
    {
      path: "text",
      name: "text",
      component: AboutViewVue,
      // component: TextView,
      meta: { title: "Text 文本" },
    },
    {
      path: "radio",
      name: "radio",
      component: AboutViewVue,
      // component: RadioView,
      meta: { title: "Radio 单选框" },
    },
    {
      path: "textarea",
      name: "textarea",
      component: AboutViewVue,
      // component: TextareaView,
      meta: { title: "Textarea 多行文本框" },
    },
    {
      path: "slider",
      name: "slider",
      component: AboutViewVue,
      // component: SliderView,
      meta: { title: "Slider 滑动输入条" },
    },
    {
      path: "rate",
      name: "rate",
      component: AboutViewVue,
      // component: RateView,
      meta: { title: "Rate 评分" },
    },
    {
      path: "select",
      name: "select",
      component: AboutViewVue,
      // component: SelectView,
      meta: { title: "Select 选择器" },
    },
    {
      path: "tag",
      name: "tag",
      component: AboutViewVue,
      // component: TagView,
      meta: { title: "Tag 标签" },
    },
    {
      path: "cascader",
      name: "cascader",
      component: AboutViewVue,
      // component: CascaderView,
      meta: { title: "Cascader 级联选择" },
    },
  ],
};

export default route;
