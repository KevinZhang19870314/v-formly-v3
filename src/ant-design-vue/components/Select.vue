<template>
  <v-wrapper :id="id" :meta="meta">
    <a-select
      v-model:value="value"
      v-bind="bindings"
      :disabled="readOnly"
      @blur="blur"
      @deselect="deselect"
      @focus="focus"
      @inputKeydown="inputKeyDown"
      @mouseenter="mouseenter"
      @mouseleave="mouseleave"
      @popupScroll="popupScroll"
      @search="search"
      @select="select"
      @dropdownVisibleChange="dropdownVisibleChange"
      @change="change"
    >
      <slot
        v-if="ui.slotNameOfSelectDefault"
        :name="ui.slotNameOfSelectDefault"
      ></slot>
      <template v-if="ui.slotNameOfClearIcon" v-slot:clearIcon>
        <slot :name="ui.slotNameOfClearIcon"></slot>
      </template>
      <template v-if="ui.slotNameOfDropdownRender" v-slot:dropdownRender>
        <slot :name="ui.slotNameOfDropdownRender"></slot>
      </template>
      <template v-if="ui.slotNameOfMaxTagPlaceholder" v-slot:maxTagPlaceholder>
        <slot :name="ui.slotNameOfMaxTagPlaceholder"></slot>
      </template>
      <template
        v-if="ui.slotNameOfMenuItemSelectedIcon"
        v-slot:menuItemSelectedIcon
      >
        <slot :name="ui.slotNameOfMenuItemSelectedIcon"></slot>
      </template>
      <template v-if="ui.slotNameOfNotFoundContent" v-slot:notFoundContent>
        <slot :name="ui.slotNameOfNotFoundContent"></slot>
      </template>
      <template v-if="ui.slotNameOfOption" v-slot:option="item">
        <slot :name="ui.slotNameOfOption" v-bind="item"></slot>
      </template>
      <template v-if="ui.slotNameOfPlaceholder" v-slot:placeholder>
        <slot :name="ui.slotNameOfPlaceholder"></slot>
      </template>
      <template v-if="ui.slotNameOfRemoveIcon" v-slot:removeIcon>
        <slot :name="ui.slotNameOfRemoveIcon"></slot>
      </template>
      <template v-if="ui.slotNameOfSuffixIcon" v-slot:suffixIcon>
        <slot :name="ui.slotNameOfSuffixIcon"></slot>
      </template>
      <template v-if="ui.slotNameOfTagRender" v-slot:tagRender>
        <slot :name="ui.slotNameOfTagRender"></slot>
      </template>
    </a-select>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-select">
import { StringMeta } from "@/core/meta/string.meta";
import type { Meta } from "@/types/meta";
import {
  computed,
  getCurrentInstance,
  inject,
  toRef,
  unref,
  type ComponentInternalInstance,
} from "vue";
import VWrapper from "./Wrapper.vue";
import { Select } from "ant-design-vue";
import { useBindings } from "@/core/hooks/bindings";
import type { Global } from "@/core/utils/global";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);

const { bindings } = useBindings(Object.keys(Select.props), context.ui);
const readOnly = toRef(props.meta, "readOnly");

const ui = computed(() => {
  return context.ui.value || {};
});

const value = computed({
  get() {
    return context.value;
  },
  set(val) {
    context.value = val;
  },
});

function change(value: any, option: any) {
  if (unref(ui).change) unref(ui).change(value, option);
}

function blur() {
  if (unref(ui).blur) unref(ui).blur();
}

function deselect(value: any, option: any) {
  if (unref(ui).deselect) unref(ui).deselect(value, option);
}

function dropdownVisibleChange(open: any) {
  if (unref(ui).dropdownVisibleChange) unref(ui).dropdownVisibleChange(open);
}

function focus() {
  if (unref(ui).focus) unref(ui).focus();
}

function inputKeyDown() {
  if (unref(ui).inputKeyDown) unref(ui).inputKeyDown();
}

function mouseenter() {
  if (unref(ui).mouseenter) unref(ui).mouseenter();
}

function mouseleave() {
  if (unref(ui).mouseleave) unref(ui).mouseleave();
}

function popupScroll() {
  if (unref(ui).popupScroll) unref(ui).popupScroll();
}

function search(value: any) {
  if (unref(ui).search) unref(ui).search(value);
}

function select(value: any, option: any) {
  if (unref(ui).select) unref(ui).select(value, option);
}
</script>

<style scoped></style>
