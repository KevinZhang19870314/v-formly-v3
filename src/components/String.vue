<template>
  <v-wrapper :id="id" :meta="meta">
    <!-- TODO: 绑定到ui的时候过滤掉所有非AntDv的字段，所有的内置组件都要顾虑 -->
    <a-input
      v-bind="ui"
      :defaultValue="meta.defaultValue"
      :disabled="meta.readOnly"
      :maxLength="meta.maxLength"
      v-model:value="value"
      @change="change"
    >
      <!-- prefix & suffix -->
      <template v-if="ui.slotNameOfPrefix" v-slot:prefix>
        <slot :name="ui.slotNameOfPrefix"></slot>
      </template>
      <template v-if="ui.slotNameOfSuffix" v-slot:suffix>
        <slot :name="ui.slotNameOfSuffix"></slot>
      </template>

      <!-- addonBefore & addonAfter -->
      <template v-if="ui.slotNameOfAddonBefore" v-slot:addonBefore>
        <slot :name="ui.slotNameOfAddonBefore"></slot>
      </template>
      <template v-if="ui.slotNameOfAddonAfter" v-slot:addonAfter>
        <slot :name="ui.slotNameOfAddonAfter"></slot>
      </template>
    </a-input>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-string">
import { StringMeta } from "@/meta/string.meta";
import type { Meta } from "@/types/meta";
import {
  computed,
  getCurrentInstance,
  inject,
  unref,
  type ComponentInternalInstance,
} from "vue";
import VWrapper from "./Wrapper.vue";

const props = defineProps<{ id: string; meta: Meta }>();
const state: any = inject("state");

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);

const ui = computed(() => {
  return props.meta.ui || {};
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
