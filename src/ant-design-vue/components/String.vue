<template>
  <v-wrapper :id="id" :meta="meta">
    <a-input
      v-bind="bindings"
      :defaultValue="meta.defaultValue"
      :disabled="readOnly"
      :maxLength="maxLength"
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
import { StringMeta } from "@/core/meta/string.meta";
import type { Meta } from "@/types/meta";
import {
  computed,
  getCurrentInstance,
  inject,
  toRef,
  unref,
  type ComponentInternalInstance,
} from "vue";
import VWrapper from "./Wrapper.vue";
import { Input } from "ant-design-vue";
import { useBindings } from "@/core/hooks/bindings";
import type { Global } from "@/core/utils/global";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);

const { bindings } = useBindings(Object.keys(Input.props), context.ui);
const readOnly = toRef(props.meta, "readOnly");
const maxLength = toRef(props.meta, "maxLength");

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
