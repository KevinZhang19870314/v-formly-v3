import type { RouteRecordRaw } from "vue-router";
import BasicLayout from "../../layout/index.vue";
import AboutViewVue from "../../views/AboutView.vue";
// import ArrayView from "../../views/ArrayView.vue";
import CheckboxView from "../../views/CheckboxView.vue";
import StringView from "../../views/StringView.vue";
import BooleanView from "../../views/BooleanView.vue";
// import AutoCompleteView from "../../views/AutocompleteView.vue";
// import DateView from "../../views/DateView.vue";
// import TimeView from "../../views/TimeView.vue";
import NumberView from "../../views/NumberView.vue";
import TextView from "../../views/TextView.vue";
import TextareaView from "../../views/TextareaView.vue";
import RateView from "../../views/RateView.vue";
import ObjectView from "../../views/ObjectView.vue";
import RadioView from "../../views/RadioView.vue";
// import SelectView from "../../views/SelectView.vue";
import SliderView from "../../views/SliderView.vue";
import TagView from "../../views/TagView.vue";
// import CascaderView from "../../views/CascaderView.vue";

const route: RouteRecordRaw = {
  path: "/form",
  name: "form",
  component: BasicLayout,
  redirect: "/form/string",
  meta: { title: "Components 组件", icon: "icon-module" },
  children: [
    {
      path: "string",
      name: "string",
      component: StringView,
      meta: { title: "String 文本框" },
    },
    {
      path: "boolean",
      name: "boolean",
      component: BooleanView,
      meta: { title: "Boolean 开关" },
    },
    {
      path: "object",
      name: "object",
      component: ObjectView,
      meta: { title: "Object 对象" },
    },
    {
      path: "array",
      name: "array",
      // component: ArrayView,
      component: AboutViewVue,
      meta: { title: "Array 数组" },
    },
    {
      path: "autoComplete",
      name: "autoComplete",
      // component: AutoCompleteView,
      component: AboutViewVue,
      meta: { title: "AutoComplete 自动完成" },
    },
    {
      path: "checkbox",
      name: "checkbox",
      component: CheckboxView,
      meta: { title: "Checkbox 多选框" },
    },
    {
      path: "date",
      name: "date",
      // component: DateView,
      component: AboutViewVue,
      meta: { title: "Date 日期" },
    },
    {
      path: "number",
      name: "number",
      component: NumberView,
      meta: { title: "Number 数字" },
    },
    {
      path: "time",
      name: "time",
      // component: TimeView,
      component: AboutViewVue,
      meta: { title: "Time 时间" },
    },
    {
      path: "text",
      name: "text",
      component: TextView,
      meta: { title: "Text 文本" },
    },
    {
      path: "radio",
      name: "radio",
      component: RadioView,
      meta: { title: "Radio 单选框" },
    },
    {
      path: "textarea",
      name: "textarea",
      component: TextareaView,
      meta: { title: "Textarea 多行文本框" },
    },
    {
      path: "slider",
      name: "slider",
      component: SliderView,
      meta: { title: "Slider 滑动输入条" },
    },
    {
      path: "rate",
      name: "rate",
      component: RateView,
      meta: { title: "Rate 评分" },
    },
    {
      path: "select",
      name: "select",
      // component: SelectView,
      component: AboutViewVue,
      meta: { title: "Select 选择器" },
    },
    {
      path: "tag",
      name: "tag",
      component: TagView,
      meta: { title: "Tag 标签" },
    },
    // {
    //   path: "cascader",
    //   name: "cascader",
    //   component: CascaderView,
    //   meta: { title: "Cascader 级联选择" },
    // },
  ],
};

export default route;
