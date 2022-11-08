<template>
  <v-wrapper :id="id" :meta="meta">
    <el-slider
      v-bind="bindings"
      :disabled="meta.readOnly"
      :min="meta.minimum || 0"
      :max="meta.maximum || 100"
      :step="meta.multipleOf || 1"
      v-model="value"
      @input="input"
      @change="change"
    />
  </v-wrapper>
</template>

<script setup lang="ts" name="v-slider">
import type { Meta } from "@/types/meta";
import type { Global } from "@/core/utils/global";
import type { ComponentInternalInstance } from "vue";
import { computed, getCurrentInstance, inject, unref } from "vue";
import VWrapper from "./Wrapper.vue";
import { NumberMeta } from "@/core/meta/number.meta";
import { ElSlider } from "element-plus";
import { useBindings } from "@/core/hooks/bindings";
import { isNumber } from "@/core/utils/utils";

const props = defineProps<{ id: string; meta: Meta }>();
const state: Global = inject("state")!;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new NumberMeta(appContext, state, props.id, props.meta);
const { bindings } = useBindings(Object.keys(ElSlider.props), context.ui);

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

function input(value: any) {
  unref(ui).input?.(value);
}
function change(value: any) {
  unref(ui).change?.(value);
}
</script>
