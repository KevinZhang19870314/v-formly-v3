<template>
  <div :style="{ display: layout === 'inline' ? 'inline-block' : 'block' }">
    <component
      v-bind:is="currentComponent"
      :id="id"
      :meta="meta"
      v-if="visible"
    >
      <template v-for="slotName in slotsName" v-slot:[slotName]="slotProps">
        <slot :name="slotName" v-bind="{ ...slotProps }"></slot>
      </template>
    </component>
  </div>
</template>

<script setup lang="ts" name="v-formly-v3-item">
import {
  computed,
  getCurrentInstance,
  inject,
  ref,
  type ComponentInternalInstance,
} from "vue";
import type { Meta } from "@/types/meta";
import useEventBus from "@/core/hooks/event-bus";
import { useSlots } from "@/core/hooks/slots";
import { useVisibleIf } from "@/core/hooks/visible-if";
import { FORM_VALUE_CHANGE } from "@/core/utils/consts";

const props = withDefaults(
  defineProps<{
    id: string;
    show?: boolean;
    meta: Meta;
  }>(),
  {
    show: true,
  }
);

let visible = ref(true);

const { slotsName } = useSlots(props.meta);
const state: any = inject("state");

const currentComponent = computed(() => {
  const type = (props.meta.ui && props.meta.ui.component) || props.meta.type;
  return `v-${type}`;
});

const layout = computed(() => {
  return state.layout;
});

onCreated();

function onCreated() {
  if (!props.meta.type)
    throw new Error(
      "Form item type must be one of these: number, string, boolean, array, object"
    );

  visible.value = props.show;
  applyIgnoreErrors(visible.value, props.id);

  const { visibleIf } = useVisibleIf();
  const { appContext } = getCurrentInstance() as ComponentInternalInstance;
  const emitter = useEventBus(appContext);
  emitter.on(`${FORM_VALUE_CHANGE}-${state._formId}`, (change: any) => {
    let curVisible = visibleIf(state.context, props.meta, visible.value, {
      id: change.id,
      value: change.value,
    });

    if (curVisible !== visible.value) {
      visible.value = curVisible;
      applyIgnoreErrors(visible.value, props.id);
    }
  });
}

function applyIgnoreErrors(visible: boolean, id: string) {
  if (visible) {
    state._ignoreErrorIds = state._ignoreErrorIds.filter((f: any) => f !== id);
  } else {
    if (state._ignoreErrorIds.indexOf(id) === -1) {
      state._ignoreErrorIds.push(id);
    }
  }
}
</script>

<style scoped></style>
