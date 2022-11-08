<template>
  <v-wrapper :id="id" :meta="meta">
    <el-select
      v-model="value"
      v-bind="bindings"
      :disabled="meta.readOnly"
      @blur="blur"
      @focus="focus"
      @clear="clear"
      @removeTag="removeTag"
      @visibleChange="visibleChange"
      @change="change"
    >
      <el-option
        v-for="(item, index) in ui.options"
        :key="index"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      />

      <template v-if="ui.slotNameOfSelectDefault" v-slot:default>
        <slot :name="ui.slotNameOfSelectDefault"></slot>
      </template>
      <template v-if="ui.slotNameOfPrefix" v-slot:prefix>
        <slot :name="ui.slotNameOfPrefix"></slot>
      </template>
      <template v-if="ui.slotNameOfEmpty" v-slot:empty>
        <slot :name="ui.slotNameOfEmpty"></slot>
      </template>
    </el-select>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-select">
import { StringMeta } from "@/core/meta/string.meta";
import type { Meta } from "@/types/meta";
import {
  computed,
  getCurrentInstance,
  inject,
  unref,
  type ComponentInternalInstance,
} from "vue";
import VWrapper from "./Wrapper.vue";
import { ElSelect } from "element-plus";
import { useBindings } from "@/core/hooks/bindings";
import type { Global } from "@/core/utils/global";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);

const { bindings } = useBindings(Object.keys(ElSelect.props), context.ui);

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

function change(value: any) {
  if (unref(ui).change) unref(ui).change(value);
}

function blur() {
  if (unref(ui).blur) unref(ui).blur();
}

function visibleChange(open: any) {
  if (unref(ui).visibleChange) unref(ui).visibleChange(open);
}

function focus() {
  if (unref(ui).focus) unref(ui).focus();
}

function clear() {
  if (unref(ui).clear) unref(ui).clear();
}

function removeTag(value: any) {
  if (unref(ui).select) unref(ui).removeTag(value);
}
</script>

<style scoped></style>
