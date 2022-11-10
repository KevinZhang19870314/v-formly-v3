<template>
  <v-wrapper :id="id" :meta="meta">
    <a-cascader
      v-bind="bindings"
      :disabled="readOnly"
      :options="meta.enum"
      v-model:value="value"
      @change="change"
      @dropdownVisibleChange="dropdownVisibleChange"
      @search="search"
      @blur="blur"
      @focus="focus"
    >
      <!-- default -->
      <template v-if="ui.slotNameOfDefault" #default>
        <span>
          <slot :name="ui.slotNameOfDefault"></slot>
        </span>
      </template>
      <!-- suffixIcon -->
      <template v-if="ui.slotNameOfSuffixIcon" #suffixIcon>
        <slot :name="ui.slotNameOfSuffixIcon"></slot>
      </template>
      <!-- displayRender -->
      <template v-if="ui.slotNameOfDisplayRender" #displayRender="slotProps">
        <slot :name="ui.slotNameOfDisplayRender" v-bind="slotProps"></slot>
      </template>
    </a-cascader>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-cascader">
import type { Meta } from "@/types/meta";
import type { Global } from "@/core/utils/global";
import { toRef, type ComponentInternalInstance } from "vue";
import type { CascaderProps } from "ant-design-vue";
import { Cascader } from "ant-design-vue";
import { computed, getCurrentInstance, inject, unref } from "vue";
import VWrapper from "./Wrapper.vue";
import { StringMeta } from "@/core/meta/string.meta";
import { useBindings } from "@/core/hooks/bindings";

const props = defineProps<{ id: string; meta: Meta }>();
const state: Global = inject("state")!;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);
const { bindings } = useBindings(Object.keys(Cascader.props), context.ui);
const readOnly = toRef(props.meta, "readOnly");

const ui = computed(() => context.ui.value || {});
const value = computed({
  get() {
    return context.value;
  },
  set(val) {
    context.value = val;
  },
});

// 选择完成后的回调
function change(value: any, selectedOptions: CascaderProps["options"]) {
  unref(ui).change?.(value, selectedOptions);
}
function dropdownVisibleChange(visible: boolean) {
  unref(ui).dropdownVisibleChange?.(visible);
}
// 输入框变化时的回调
function search(value: any) {
  unref(ui).search?.(value);
}
function blur(e: FocusEvent) {
  unref(ui).blur?.(e);
}
function focus(e: FocusEvent) {
  unref(ui).focus?.(e);
}
</script>
