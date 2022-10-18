<template>
  <a-form-item
    :labelCol="labelCol"
    :wrapperCol="wrapperCol"
    :required="ui.showRequired"
    :class="{ 'has-error': error }"
  >
    <template #label>
      <span class="v__label-text">{{ meta.title }}</span>
      <span v-if="ui.optional || oh" class="v__optional">
        {{ ui.optional }}
        <a-tooltip
          v-if="oh"
          :title="oh.text"
          :placement="oh.placement"
          :trigger="oh.trigger"
          :overlayStyle="oh.overlayStyle"
          :mouseEnterDelay="oh.mouseEnterDelay"
          :mouseLeaveDelay="oh.mouseLeaveDelay"
          :overlayClassName="oh.overlayClassName"
        >
          <a-icon :type="oh.icon" />
        </a-tooltip>
      </span>
    </template>
    <slot></slot>
    <div
      v-if="meta.description"
      class="ant-form-extra"
      v-html="meta.description"
    ></div>
    <div v-if="error" class="ant-form-explain">
      {{ error }}
    </div>
  </a-form-item>
</template>

<script setup lang="ts">
import useEventBus from "@/hooks/event-bus";
import type { Meta } from "@/types/meta";
import { FORM_ERROR_CHANGE } from "@/utils/consts";
import { computed, inject, onBeforeUnmount } from "vue";

const props = defineProps<{
  id: string;
  show?: boolean;
  meta: Meta;
}>();

const state: any = inject("state");
const context = state.context.getContext(props.id);

const ui = computed(() => {
  return Object.assign({}, state.ui, props.meta.ui);
});

const oh = computed(() => {
  return Object.assign({}, state.ui, props.meta.ui).optionalHelp;
});

const labelCol = computed(() => {
  return state.layout === "vertical" || state.layout === "inline"
    ? undefined
    : { span: ui.value.spanLabel };
});

const wrapperCol = computed(() => {
  return state.layout === "vertical" || state.layout === "inline"
    ? undefined
    : { span: ui.value.spanControl, offset: ui.value.offsetControl || 0 };
});

const error = computed({
  get() {
    return context.error;
  },
  set(val) {
    context.error = val;
  },
});

const emitter = useEventBus();
emitter.on(`${FORM_ERROR_CHANGE}-${state._formId}`, formErrorChangeCallback);

onBeforeUnmount(() => {
  emitter.off(`${FORM_ERROR_CHANGE}-${state._formId}`, formErrorChangeCallback);
});

function formErrorChangeCallback(err: any) {
  if (err.id === props.id) {
    error.value = err.error ? err.error.message : undefined;
  }
}

// return {
//   name,
// };
</script>

<script lang="ts">
export default { name: "v-wrapper" };
</script>

<style scoped></style>
