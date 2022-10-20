<template>
  <v-wrapper :id="id" :meta="meta">
    <a-auto-complete
      v-bind="bindings"
      :defaultValue="meta.default"
      :disabled="meta.readOnly"
      v-model:value="value"
      @change="change"
      @search="search"
      @select="select"
    >
      <template v-if="ui.slotNameOfDataSource" v-slot:dataSource>
        <slot :name="ui.slotNameOfDataSource"></slot>
      </template>
      <template v-if="ui.slotNameOfDefault" v-slot:default>
        <slot :name="ui.slotNameOfDefault"></slot>
      </template>
    </a-auto-complete>
  </v-wrapper>
</template>

<script setup lang="ts">
import { useBindings } from "@/hooks/bindings";
import { StringMeta } from "@/meta/string.meta";
import type { Meta } from "@/types/meta";
import type { Global } from "@/utils/global";
import { Input } from "ant-design-vue";
import {
  computed,
  getCurrentInstance,
  inject,
  type ComponentInternalInstance,
} from "vue";
import VWrapper from "./Wrapper.vue";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);

const { bindings } = useBindings(Object.keys(Input.props), context.ui);

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
    ui.value.change(value);
  }
}

function search(value: string) {
  if (ui.value.search) {
    ui.value.search(value);
  }
}

function select(value: string, option: any) {
  if (ui.value.search) {
    ui.value.search(value, option);
  }
}
</script>

<style scoped></style>
