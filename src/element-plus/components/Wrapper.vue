<template>
  <el-form-item
    :required="ui.showRequired"
    :error="error"
    :size="ui.size"
    :class="[{ 'no-label': !meta.title }]"
  >
    <template #label v-if="meta.title">
      <span class="v__label-text" :title="meta.title">{{ meta.title }}</span>
      <span v-if="ui.optional || oh" class="v__optional">
        {{ ui.optional }}
        <el-tooltip
          v-if="oh.icon"
          v-bind="oh"
          :placement="oh.placement || 'top'"
        >
          <el-icon>
            <component :is="globalProperties.$elIcons[oh.icon]" />
          </el-icon>
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

<style scoped lang="scss">
// 去除 label 占位（在 label 为空值的情况下）
.el-form-item.no-label {
  :deep(.el-form-item__content) {
    margin-left: 0 !important;
  }
}

.v__label-text {
  white-space: nowrap;
}

.v__optional {
  height: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
  .el-icon {
    margin-left: 2px;
    font-size: calc(var(--el-form-label-font-size) + 2px);
  }
}
</style>
