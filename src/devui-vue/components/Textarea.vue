<template>
  <v-wrapper :id="id" :meta="meta" v-slot="{ error }">
    <d-textarea
      v-bind="bindings"
      :error="!!error"
      :disabled="readOnly"
      :maxlength="maxLength"
      :rows="ui.rows"
      v-model="value"
      @update="update"
      @change="change"
      @focus="focus"
      @blur="blur"
      @keydown="keydown"
    />
  </v-wrapper>
</template>

<script setup lang="ts" name="v-textarea">
import { computed, getCurrentInstance, inject, unref } from "vue";
import { toRef, type ComponentInternalInstance } from "vue";
import { Textarea } from "vue-devui";
import type { Meta } from "@/types/meta";
import type { Global } from "@/core/utils/global";
import { StringMeta } from "@/core/meta/string.meta";
import { useBindings } from "@/core/hooks/bindings";
import VWrapper from "./Wrapper.vue";

const props = defineProps<{ id: string; meta: Meta }>();
const state: Global = inject("state")!;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);
const { bindings } = useBindings(Object.keys(Textarea.props), context.ui);
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

function change(val: string) {
  unref(ui).change?.(unref(val));
}
function update(val: string) {
  unref(ui).update?.(unref(val));
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
