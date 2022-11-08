<template>
  <v-wrapper :id="id" :meta="meta">
    <el-rate
      v-bind="bindings"
      :disabled="meta.readOnly"
      :max="meta.maximum || 5"
      v-model="value"
      @change="change"
    />
  </v-wrapper>
</template>

<script setup lang="ts" name="v-rate">
import type { Meta } from "@/types/meta";
import type { Global } from "@/core/utils/global";
import type { ComponentInternalInstance } from "vue";
import { computed, getCurrentInstance, inject, unref } from "vue";
import VWrapper from "./Wrapper.vue";
import { NumberMeta } from "@/core/meta/number.meta";
import { ElRate } from "element-plus";
import { useBindings } from "@/core/hooks/bindings";

const props = defineProps<{ id: string; meta: Meta }>();
const state: Global = inject("state")!;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new NumberMeta(appContext, state, props.id, props.meta);
const { bindings } = useBindings(Object.keys(ElRate.props), context.ui);

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
