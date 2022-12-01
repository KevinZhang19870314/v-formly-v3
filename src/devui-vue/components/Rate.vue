<template>
  <v-wrapper :id="id" :meta="meta">
    <d-rate
      v-bind="bindings"
      :read="readOnly"
      :count="meta.maximum || 5"
      v-model="value"
      @change="change"
    />
  </v-wrapper>
</template>

<script setup lang="ts" name="v-rate">
import { toRef, type ComponentInternalInstance } from "vue";
import { computed, getCurrentInstance, inject, unref } from "vue";
import { Rate } from "vue-devui";
import { useBindings } from "@/core/hooks/bindings";
import { NumberMeta } from "@/core/meta/number.meta";
import type { Global } from "@/core/utils/global";
import type { Meta } from "@/types/meta";
import VWrapper from "./Wrapper.vue";

const props = defineProps<{ id: string; meta: Meta }>();
const state: Global = inject("state")!;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new NumberMeta(appContext, state, props.id, props.meta);
const { bindings } = useBindings(Object.keys(Rate.props), context.ui);
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

function change(value: number) {
  unref(ui).change?.(value);
}
</script>
