<template>
  <v-wrapper :id="id" :meta="meta">
    <a-rate
      v-bind="bindings"
      :disabled="readOnly"
      :count="meta.maximum || 5"
      v-model:value="value"
      @change="change"
      @hoverChange="hoverChange"
    >
      <template v-if="ui.slotNameOfCharacter" #character>
        <slot :name="ui.slotNameOfCharacter"></slot>
      </template>
    </a-rate>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-rate">
import type { Meta } from "@/types/meta";
import type { Global } from "@/core/utils/global";
import { toRef, type ComponentInternalInstance } from "vue";
import { computed, getCurrentInstance, inject, unref } from "vue";
import VWrapper from "./Wrapper.vue";
import { NumberMeta } from "@/core/meta/number.meta";
import { Rate } from "ant-design-vue";
import { useBindings } from "@/core/hooks/bindings";

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
function hoverChange(value: number) {
  unref(ui).hoverChange?.(value);
}
</script>
