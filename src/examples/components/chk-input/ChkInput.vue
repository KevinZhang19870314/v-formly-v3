<template>
  <v-wrapper :id="id" :meta="meta">
    <a-checkbox-group
      class="v__checkbox"
      v-model:value="optionsValue"
      v-bind="bindings"
      :disabled="meta.readOnly"
      :options="meta.enum"
      @change="change"
    />
    <a-input v-model:value="othersValue" v-show="showOthers" @change="change" />
    <div>{{ "othersValue" + othersValue }}</div>
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
import { useBindings } from "@/hooks/bindings";
import type { Global } from "@/utils/global";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new ChkInputMeta(appContext, state, props.id, props.meta);

const { bindings } = useBindings(Object.keys(CheckboxGroup.props), context.ui);

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

const optionsValue = computed({
  get() {
    console.log(context.optionsValue);
    return context.optionsValue;
  },
  set(val) {
    context.optionsValue = val;
  },
});

const othersValue = computed({
  get() {
    return context.othersValue;
  },
  set(val) {
    context.othersValue = val;
  },
});

const showOthers = computed(() => {
  if (!value.value) return false;

  return (value.value.options || []).indexOf("Others") > -1;
});

function change() {
  if (ui.value.change) {
    ui.value.change(unref(value));
  }
}
</script>

<style scoped></style>
