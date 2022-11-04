<template>
  <v-wrapper :id="id" :meta="meta">
    <a-radio-group
      :class="{ 'v__radio-vertical': ui.direction === 'vertical' }"
      v-bind="bindings"
      v-model:value="value"
      :disabled="meta.readOnly"
      @change="change"
    />
  </v-wrapper>
</template>

<script setup lang="ts" name="v-radio">
import { StringMeta } from "@/core/meta/string.meta";
import type { Meta } from "@/types/meta";
import {
  computed,
  getCurrentInstance,
  inject,
  unref,
  type ComponentInternalInstance,
} from "vue";
import VWrapper from "./Wrapper.vue";
import { RadioGroup } from "ant-design-vue";
import { useBindings } from "@/core/hooks/bindings";
import type { Global } from "@/core/utils/global";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);

const { bindings } = useBindings(Object.keys(RadioGroup.props), context.ui);

const ui = computed(() => {
  return context.ui.value || {};
});

const value = computed({
  get() {
    return context.value;
  },
  set(val) {
    context.value = val;
  },
});

function change() {
  if (ui.value.change) {
    ui.value.change(unref(value));
  }
}
</script>

<style scoped></style>
