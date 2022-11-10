<template>
  <v-wrapper :id="id" :meta="meta">
    <template v-if="isPanel">
      <el-cascader-panel
        v-bind="panelBindings"
        :disabled="readOnly"
        :options="meta.enum"
        v-model="value"
        @change="change"
        @expand-change="expandChange"
      >
        <template v-if="ui.slotNameOfDefault" #default="slotProps">
          <slot :name="ui.slotNameOfDefault" v-bind="slotProps"></slot>
        </template>
      </el-cascader-panel>
    </template>
    <template v-else>
      <el-cascader
        v-bind="bindings"
        :disabled="readOnly"
        :options="meta.enum"
        v-model="value"
        @change="change"
        @visible-change="visibleChange"
        @expand-change="expandChange"
        @remove-tag="removeTag"
        @blur="blur"
        @focus="focus"
      >
        <template v-if="ui.slotNameOfDefault" #default="slotProps">
          <slot :name="ui.slotNameOfDefault" v-bind="slotProps"></slot>
        </template>
      </el-cascader>
    </template>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-cascader">
import type { Meta } from "@/types/meta";
import type { Global } from "@/core/utils/global";
import { toRef, type ComponentInternalInstance } from "vue";
import { ElCascader, ElCascaderPanel } from "element-plus";
import { computed, getCurrentInstance, inject, unref } from "vue";
import VWrapper from "./Wrapper.vue";
import { StringMeta } from "@/core/meta/string.meta";
import { useBindings } from "@/core/hooks/bindings";

const props = defineProps<{ id: string; meta: Meta }>();
const state: Global = inject("state")!;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);
const { bindings } = useBindings(Object.keys(ElCascader.props), context.ui);
const panelBindings = useBindings(
  Object.keys(ElCascaderPanel.props),
  context.ui
).bindings;
const readOnly = toRef(props.meta, "readOnly");

const ui = computed(() => context.ui.value || {});
const isPanel = computed(() => unref(ui).type === "panel");
const value = computed({
  get() {
    return context.value;
  },
  set(val) {
    context.value = val;
  },
});

// 选择完成后的回调
function change(value: any) {
  unref(ui).change?.(value);
}
function visibleChange(visible: boolean) {
  unref(ui).visibleChange?.(visible);
}
function expandChange(data: any[]) {
  unref(ui).expandChange?.(data);
}
function removeTag(data: any[]) {
  unref(ui).removeTag?.(data);
}
function blur(e: FocusEvent) {
  unref(ui).blur?.(e);
}
function focus(e: FocusEvent) {
  unref(ui).focus?.(e);
}
</script>
