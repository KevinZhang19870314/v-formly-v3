<template>
  <a-row :gutter="gutter">
    <a-col
      v-for="(item, index) in childMetaPairs"
      :key="index"
      :span="grid(item).span"
      :offset="grid(item).offset"
      :xs="grid(item).xs"
      :sm="grid(item).sm"
      :md="grid(item).md"
      :lg="grid(item).lg"
      :xl="grid(item).xl"
      :xxl="grid(item).xxl"
      :style="{ display: layout === 'inline' ? 'inline-block' : 'block' }"
    >
      <v-formly-item
        :id="item.key"
        :meta="item.meta"
        :show="visible(item.meta)"
      >
        <template v-for="slotName in slotsName" v-slot:[slotName]="slotProps">
          <slot :name="slotName" v-bind="{ ...slotProps }"></slot>
        </template>
      </v-formly-item>
    </a-col>
  </a-row>
</template>

<script setup lang="ts" name="v-object">
import VFormlyItem from "@/FormlyItem.vue";
import { useSlots } from "@/hooks/slots";
import { ObjectMeta } from "@/meta/object.meta";
import type { Meta } from "@/types/meta";
import {
  computed,
  getCurrentInstance,
  inject,
  type ComponentInternalInstance,
} from "vue";

const props = defineProps<{
  id: string;
  meta: Meta;
}>();

const { slotsName } = useSlots(props.meta);
const state: any = inject("state");

const ui = computed(() => {
  return props.meta.ui || {};
});

const gutter = computed(() => {
  return Object.assign({}, state.ui.grid, ui.value.grid).gutter;
});

const layout = computed(() => {
  return state.layout;
});

function visible(meta: Meta) {
  return meta.ui && meta.ui.show;
}

function grid(item: any) {
  if (layout.value === "inline") return {};
  const grid = (item.meta.ui && item.meta.ui.grid) || {};
  return Object.assign({}, state.ui.grid, ui.value.grid, grid);
}

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const metaInstance = new ObjectMeta(appContext, state, props.id, props.meta);
const childMetaPairs = metaInstance.childMetaPairs;
</script>

<style scoped></style>
