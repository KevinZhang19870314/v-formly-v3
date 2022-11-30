<template>
  <d-row :gutter="gutter" wrap :style="styleObject">
    <d-col
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
      <v-formly-v3-item
        :id="item.key"
        :meta="item.meta"
        :show="visible(item.meta)"
      >
        <template v-for="slotName in slotsName" v-slot:[slotName]="slotProps">
          <slot :name="slotName" v-bind="{ ...slotProps }"></slot>
        </template>
      </v-formly-v3-item>
    </d-col>
  </d-row>
</template>

<script setup lang="ts" name="v-object">
import {
  computed,
  getCurrentInstance,
  inject,
  reactive,
  type ComponentInternalInstance,
} from "vue";
import type { Meta } from "@/types/meta";
import type { Global } from "@/core/utils/global";
import { useSlots } from "@/core/hooks/slots";
import { ObjectMeta } from "@/core/meta/object.meta";
import VFormlyV3Item from "../DFormlyItem.vue";

const props = defineProps<{
  id: string;
  meta: Meta;
}>();

const { slotsName } = useSlots(props.meta);
const state = inject("state") as Global;
const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new ObjectMeta(appContext, state, props.id, props.meta);

const ui = computed(() => context.ui.value || {});

const gutter = computed(() => {
  return Object.assign({}, state.ui.grid, ui.value.grid).gutter;
});

const layout = computed(() => {
  return state.layout.value;
});

// 组件库的 grid 不完善
const styleObject = reactive({
  "margin-left": `-${gutter.value / 2}px`,
  "margin-right": `-${gutter.value / 2}px`,
});

function visible(meta: Meta) {
  return meta.ui && meta.ui.show;
}

function grid(item: any) {
  if (layout.value === "inline") return {};
  const grid = (item.meta.ui && item.meta.ui.grid) || {};
  return Object.assign({}, state.ui.grid, ui.value.grid, grid);
}

const childMetaPairs = context.childMetaPairs;
</script>
