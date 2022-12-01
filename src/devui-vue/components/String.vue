<template>
  <v-wrapper :id="id" :meta="meta" v-slot="{ error }">
    <d-input
      v-bind="bindings"
      v-model="value"
      :maxlength="maxLength"
      :error="!!error"
      :disabled="readOnly"
      @focus="focus"
      @blur="blur"
      @keydown="keydown"
      @clear="clear"
      @input="input"
      @change="change"
    >
      <!-- prefix & suffix -->
      <template v-if="ui.slotNameOfPrefix" v-slot:prefix>
        <slot :name="ui.slotNameOfPrefix"></slot>
      </template>
      <template v-if="ui.slotNameOfSuffix" v-slot:suffix>
        <slot :name="ui.slotNameOfSuffix"></slot>
      </template>

      <!-- prepend & append -->
      <template v-if="ui.slotNameOfPrepend" v-slot:prepend>
        <slot :name="ui.slotNameOfPrepend"></slot>
      </template>
      <template v-if="ui.slotNameOfAppend" v-slot:append>
        <slot :name="ui.slotNameOfAppend"></slot>
      </template>
    </d-input>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-string">
import {
  computed,
  getCurrentInstance,
  inject,
  toRef,
  unref,
  type ComponentInternalInstance,
} from "vue";
import { Input } from "vue-devui";
import type { Meta } from "@/types/meta";
import type { Global } from "@/core/utils/global";
import { useBindings } from "@/core/hooks/bindings";
import { StringMeta } from "@/core/meta/string.meta";
import VWrapper from "./Wrapper.vue";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);

const { bindings } = useBindings(Object.keys(Input.props), context.ui);
const readOnly = toRef(props.meta, "readOnly");
const maxLength = toRef(props.meta, "maxLength");

const ui = computed(() => context.ui.value || {});

const value = computed({
  get() {
    return context.value;
  },
  set(val) {
    context.value = val;
  },
});

function change() {
  unref(ui).change?.(unref(value));
}
function input(e: KeyboardEvent) {
  unref(ui).input?.(e);
}
function clear() {
  unref(ui).clear?.();
}
function focus(e: FocusEvent) {
  unref(ui).focus?.(e);
}
function blur(e: FocusEvent) {
  unref(ui).blur?.(e);
}
function keydown(e: KeyboardEvent) {
  unref(ui).keydown?.(e);
}
</script>
