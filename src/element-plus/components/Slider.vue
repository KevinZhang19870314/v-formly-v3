<template>
  <v-wrapper :id="id" :meta="meta">
    <a-slider
      v-bind="bindings"
      :disabled="meta.readOnly"
      :min="meta.minimum || 0"
      :max="meta.maximum || 100"
      :step="meta.multipleOf || 1"
      :tipFormatter="hiddenTooltip ? null : tipFormatter"
      v-model:value="value"
      @change="change"
      @afterChange="afterChange"
    >
      <!-- mark -->
      <template v-if="ui.slotNameOfMark" #mark="slotProps">
        <slot :name="ui.slotNameOfMark" v-bind="slotProps"></slot>
      </template>
    </a-slider>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-slider">
import type { Meta } from "@/types/meta";
import type { Global } from "@/core/utils/global";
import type { ComponentInternalInstance } from "vue";
import { computed, getCurrentInstance, inject, unref } from "vue";
import VWrapper from "./Wrapper.vue";
import { NumberMeta } from "@/core/meta/number.meta";
import { Slider } from "ant-design-vue";
import { useBindings } from "@/core/hooks/bindings";
import { isNumber } from "@/core/utils/utils";

const props = defineProps<{ id: string; meta: Meta }>();
const state: Global = inject("state")!;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new NumberMeta(appContext, state, props.id, props.meta);
const { bindings } = useBindings(Object.keys(Slider.props), context.ui);

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
const hiddenTooltip = computed(() => ui.value.tipFormatter === null);

function tipFormatter(value: number) {
  const { tipFormatter } = ui.value;
  return tipFormatter ? tipFormatter(value) : `${value}`;
}
function change(value: number) {
  unref(ui).change?.(value);
}
function afterChange(value: number) {
  unref(ui).afterChange?.(value);
}
</script>
