<template>
  <v-wrapper :id="id" :meta="meta">
    <el-autocomplete
      v-bind="bindings"
      :disabled="readOnly"
      v-model="value"
      @change="change"
      @select="select"
    >
      <template v-if="ui.slotNameOfPrefix" v-slot:prefix>
        <slot :name="ui.slotNameOfPrefix"></slot>
      </template>
      <template v-if="ui.slotNameOfSuffix" v-slot:suffix>
        <slot :name="ui.slotNameOfSuffix"></slot>
      </template>
      <template v-if="ui.slotNameOfPrepend" v-slot:prepend>
        <slot :name="ui.slotNameOfPrepend"></slot>
      </template>
      <template v-if="ui.slotNameOfAppend" v-slot:append>
        <slot :name="ui.slotNameOfAppend"></slot>
      </template>
      <template v-if="ui.slotNameOfDefault" v-slot:default="item">
        <slot :name="ui.slotNameOfDefault" v-bind="item"></slot>
      </template>
    </el-autocomplete>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-autocomplete">
import { useBindings } from "@/core/hooks/bindings";
import { StringMeta } from "@/core/meta/string.meta";
import type { Meta } from "@/types/meta";
import type { Global } from "@/core/utils/global";
import { ElAutocomplete } from "element-plus";
import {
  computed,
  getCurrentInstance,
  inject,
  toRef,
  unref,
  type ComponentInternalInstance,
} from "vue";
import VWrapper from "./Wrapper.vue";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);

const { bindings } = useBindings(Object.keys(ElAutocomplete.props), context.ui);
const readOnly = toRef(props.meta, "readOnly");

const ui = computed(() => {
  return context.ui.value || {};
});

const value = computed({
  get() {
    return context.value;
  },
  set(val) {
    context.value = val || undefined;
  },
});

function change(value: string) {
  if (ui.value.change) {
    ui.value.change(unref(value));
  }
}

function select(item: any) {
  if (ui.value.select) {
    ui.value.select(item);
  }
}
</script>

<style scoped></style>
