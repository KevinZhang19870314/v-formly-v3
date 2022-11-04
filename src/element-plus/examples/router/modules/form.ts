import type { RouteRecordRaw } from "vue-router";
import { Edit } from "@element-plus/icons-vue";
import BasicLayout from "@/element-plus/examples/layout/index.vue";
import ArrayView from "@/element-plus/examples/views/ArrayView.vue";
import CheckboxView from "@/element-plus/examples/views/CheckboxView.vue";
import StringView from "@/element-plus/examples/views/StringView.vue";
import BooleanView from "@/element-plus/examples/views/BooleanView.vue";
import AutoCompleteView from "@/element-plus/examples/views/AutocompleteView.vue";
import DateView from "@/element-plus/examples/views/DateView.vue";
import TimeView from "@/element-plus/examples/views/TimeView.vue";
import NumberView from "@/element-plus/examples/views/NumberView.vue";
import TextView from "@/element-plus/examples/views/TextView.vue";
import TextareaView from "@/element-plus/examples/views/TextareaView.vue";
import RateView from "@/element-plus/examples/views/RateView.vue";
import ObjectView from "@/element-plus/examples/views/ObjectView.vue";
import RadioView from "@/element-plus/examples/views/RadioView.vue";
import SelectView from "@/element-plus/examples/views/SelectView.vue";
import SliderView from "@/element-plus/examples/views/SliderView.vue";
import TagView from "@/element-plus/examples/views/TagView.vue";
import CascaderView from "@/element-plus/examples/views/CascaderView.vue";
import { markRaw } from "vue";

const route: RouteRecordRaw = {
  path: "/form",
  name: "form",
  component: BasicLayout,
  redirect: "/form/string",
  meta: { title: "Components 组件", icon: markRaw(Edit) },
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
      component: ArrayView,
      meta: { title: "Array 数组" },
    },
    {
      path: "autoComplete",
      name: "autoComplete",
      component: AutoCompleteView,
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
      component: DateView,
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
      component: TimeView,
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
      component: SelectView,
      meta: { title: "Select 选择器" },
    },
    {
      path: "tag",
      name: "tag",
      component: TagView,
      meta: { title: "Tag 标签" },
    },
    {
      path: "cascader",
      name: "cascader",
      component: CascaderView,
      meta: { title: "Cascader 级联选择" },
    },
  ],
};

export default route;
