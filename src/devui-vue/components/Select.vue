<template>
  <v-wrapper :id="id" :meta="meta">
    <template v-if="hasSolts">
      <d-select
        v-model="value"
        v-bind="bindings"
        :disabled="readOnly"
        @blur="blur"
        @focus="focus"
        @clear="clear"
        @remove-tag="removeTag"
        @toggle-change="toggleChange"
        @value-change="valueChange"
      >
        <slot v-if="ui.slotNameOfDefault" :name="ui.slotNameOfDefault"></slot>
        <template v-if="ui.slotNameOfEmpty" v-slot:empty>
          <slot :name="ui.slotNameOfEmpty"></slot>
        </template>
      </d-select>
    </template>
    <template v-else>
      <d-select
        v-model="value"
        v-bind="bindings"
        :disabled="readOnly"
        @blur="blur"
        @focus="focus"
        @clear="clear"
        @remove-tag="removeTag"
        @toggle-change="toggleChange"
        @value-change="valueChange"
      />
    </template>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-select">
import {
  computed,
  getCurrentInstance,
  inject,
  toRef,
  unref,
  type ComponentInternalInstance,
} from "vue";
import { Select } from "vue-devui";
import { StringMeta } from "@/core/meta/string.meta";
import { useBindings } from "@/core/hooks/bindings";
import type { Global } from "@/core/utils/global";
import type { Meta } from "@/types/meta";
import VWrapper from "./Wrapper.vue";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);

const { bindings } = useBindings(Object.keys(Select.props), context.ui);
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

const hasSolts = computed(() => {
  const solts = ["slotNameOfDefault", "slotNameOfEmpty"];
  return solts.some((name) => !!unref(ui)[`${name}`]);
});

function valueChange(value: any) {
  unref(ui).valueChange?.(value);
}
function toggleChange(open: boolean) {
  unref(ui).toggleChange?.(open);
}
function blur(e: FocusEvent) {
  unref(ui).blur?.(e);
}
function focus(e: FocusEvent) {
  unref(ui).focus?.(e);
}
function clear() {
  unref(ui).clear?.();
}
function removeTag(value: any) {
  unref(ui).removeTag?.(value);
}
</script>
