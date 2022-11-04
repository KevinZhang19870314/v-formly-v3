<template>
  <el-form-item :required="ui.showRequired" :error="error">
    <template #label>
      <span class="v__label-text">{{ meta.title }}</span>
      <span v-if="ui.optional || oh" class="v__optional">
        {{ ui.optional }}
        <el-tooltip
          v-if="oh"
          :title="oh.text"
          :placement="oh.placement"
          :trigger="oh.trigger"
          :overlayStyle="oh.overlayStyle"
          :mouseEnterDelay="oh.mouseEnterDelay"
          :mouseLeaveDelay="oh.mouseLeaveDelay"
          :overlayClassName="oh.overlayClassName"
        >
          <component v-if="oh.icon" :is="globalProperties.$antIcons[oh.icon]" />
        </el-tooltip>
      </span>
    </template>
    <slot></slot>
    <div v-if="meta.description" v-html="meta.description"></div>
  </el-form-item>
</template>

<script setup lang="ts">
import useCurrentInstance from "@/core/hooks/current-instance";
import useEventBus from "@/core/hooks/event-bus";
import type { Meta } from "@/types/meta";
import { FORM_ERROR_CHANGE } from "@/core/utils/consts";
import type { Global } from "@/core/utils/global";
import {
  computed,
  getCurrentInstance,
  inject,
  onBeforeUnmount,
  type ComponentInternalInstance,
} from "vue";

const props = defineProps<{
  id: string;
  show?: boolean;
  meta: Meta;
}>();

const { globalProperties } = useCurrentInstance();
const state = inject("state") as Global;
const context: any = state.context!.getContext(props.id);

const ui = computed(() => {
  return Object.assign({}, state.ui, props.meta.ui);
});

const oh = computed(() => {
  return Object.assign({}, state.ui, props.meta.ui).optionalHelp;
});

const labelCol = computed(() => {
  return state.layout.value === "vertical" || state.layout.value === "inline"
    ? undefined
    : { span: ui.value.spanLabel };
});

const wrapperCol = computed(() => {
  return state.layout.value === "vertical" || state.layout.value === "inline"
    ? undefined
    : { span: ui.value.spanControl, offset: ui.value.offsetControl || 0 };
});

const error = computed({
  get() {
    return context.error.value;
  },
  set(val) {
    context.error.value = val;
  },
});

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const emitter = useEventBus(appContext);
emitter.on(`${FORM_ERROR_CHANGE}-${state._formId}`, formErrorChangeCallback);

onBeforeUnmount(() => {
  emitter.off(`${FORM_ERROR_CHANGE}-${state._formId}`, formErrorChangeCallback);
});

function formErrorChangeCallback(err: any) {
  if (err.id === props.id) {
    error.value = err.error ? err.error.message : undefined;
  }
}
</script>

<script lang="ts">
export default { name: "v-wrapper" };
</script>

<style scoped></style>
