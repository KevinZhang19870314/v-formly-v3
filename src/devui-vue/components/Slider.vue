<template>
  <v-wrapper :id="id" :meta="meta">
    <d-slider
      v-bind="bindings"
      :disabled="readOnly"
      :min="minimum || 0"
      :max="maximum || 100"
      :step="multipleOf || 1"
      v-model="value"
    />
  </v-wrapper>
</template>

<script setup lang="ts" name="v-slider">
import { toRef, type ComponentInternalInstance } from "vue";
import { computed, getCurrentInstance, inject, unref } from "vue";
import { Slider } from "vue-devui";
import type { Meta } from "@/types/meta";
import type { Global } from "@/core/utils/global";
import { isNumber } from "@/core/utils/utils";
import { NumberMeta } from "@/core/meta/number.meta";
import { useBindings } from "@/core/hooks/bindings";
import { useForceCompile } from "@/core/hooks/force-compile";
import VWrapper from "./Wrapper.vue";

const props = defineProps<{ id: string; meta: Meta }>();
const state: Global = inject("state")!;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new NumberMeta(appContext, state, props.id, props.meta);
const { bindings } = useBindings(Object.keys(Slider.props), context.ui);
const readOnly = toRef(props.meta, "readOnly");
const minimum = toRef(props.meta, "minimum");
const maximum = toRef(props.meta, "maximum");
const multipleOf = toRef(props.meta, "multipleOf");
useForceCompile([minimum, maximum, multipleOf], state);

const ui = computed(() => context.ui.value || {});
const value = computed({
  get() {
    return context.value;
  },
  set(val) {
    if (ui.value.range) {
      context.value = val || [];
    } else {
      context.value = isNumber(val) ? val : undefined;
    }
  },
});
</script>
