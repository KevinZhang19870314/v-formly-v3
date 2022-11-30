<template>
  <v-wrapper :id="id" :meta="meta">
    <d-checkbox-group
      direction="row"
      v-model="context.optionsValue"
      v-bind="bindings"
      :disabled="meta.readOnly"
      :options="meta.enum"
      @change="change"
    />
    <d-input
      v-model="context.othersValue"
      v-show="showOthers"
      @change="change"
    />
  </v-wrapper>
</template>

<script setup lang="ts">
import { ChkInputMeta } from "./chk-input.meta";
import type { Meta } from "@/types/meta";
import {
  computed,
  getCurrentInstance,
  inject,
  unref,
  type ComponentInternalInstance,
} from "vue";
import { CheckboxGroup } from "ant-design-vue";
import { useBindings } from "@/core/hooks/bindings";
import type { Global } from "@/core/utils/global";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new ChkInputMeta(appContext, state, props.id, props.meta);

const { bindings } = useBindings(Object.keys(CheckboxGroup.props), context.ui);

const ui = computed(() => {
  return context.ui.value || {};
});

const showOthers = computed(() => {
  if (!unref(context.value)) return false;

  return (unref(context.value).options || []).indexOf("Others") > -1;
});

function change() {
  unref(ui).change?.(unref(context.value));
}
</script>
