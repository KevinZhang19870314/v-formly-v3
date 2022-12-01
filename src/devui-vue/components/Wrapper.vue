<template>
  <d-form-item
    :label="meta.title"
    :help-tips="ui.optional"
    :extra-info="meta.description"
    :class="{ 'show-required': ui.showRequired }"
  >
    <div class="control-wrapper">
      <div class="control-slot">
        <slot :error="error"></slot>
      </div>
      <div v-show="error" class="error-message">{{ error }}</div>
    </div>
  </d-form-item>
</template>

<script setup lang="ts">
import {
  computed,
  getCurrentInstance,
  inject,
  onBeforeUnmount,
  type ComponentInternalInstance,
} from "vue";
import type { Meta } from "@/types/meta";
import type { Global } from "@/core/utils/global";
import { FORM_ERROR_CHANGE } from "@/core/utils/consts";
import useEventBus from "@/core/hooks/event-bus";

const props = defineProps<{
  id: string;
  show?: boolean;
  meta: Meta;
}>();

const state = inject("state") as Global;
const context: any = state.context!.getContext(props.id);

const ui = computed(() => {
  return Object.assign({}, state.ui, props.meta.ui);
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

<style scoped lang="less">
.show-required :deep(.devui-form__label-span:before) {
  content: "*";
  color: red;
  display: inline-block;
  margin-right: 8px;
  margin-left: -12px;
}

.control-wrapper {
  width: 100%;

  .error-message {
    position: absolute;
    display: inline-block;
    min-height: 20px;
    line-height: 1.5;
    font-size: var(--devui-font-size, 14px);
    color: var(--devui-danger, #f66f6a);
  }
}
</style>
