<template>
  <div>
    <a-form-item
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
      :class="{ 'no-label': !meta.title }"
    >
      <!-- label -->
      <template v-if="meta.title" #label>
        <span class="v__label-text">{{ meta.title }}</span>
      </template>
      <!-- content: 内容展示的优先级 slotNameOfDefault/html/text-->
      <template v-if="ui.slotNameOfDefault">
        <slot :name="ui.slotNameOfDefault"></slot>
      </template>
      <template v-else>
        <span v-if="ui.html" v-html="ui.html" class="v__content-text"></span>
        <span v-else v-text="displayValue" class="v__content-text"></span>
      </template>
      <!-- description -->
      <template v-if="meta.description" #extra>
        <div v-html="meta.description"></div>
      </template>
    </a-form-item>
  </div>
</template>
<script setup lang="ts" name="v-text">
import { StringMeta } from "@/meta/string.meta";
import type { Meta } from "@/types/meta";
import {
  computed,
  getCurrentInstance,
  inject,
  unref,
  type ComponentInternalInstance,
} from "vue";
import type { Global } from "@/utils/global";
import { isFunction } from "@/utils/utils";

const props = defineProps<{ id: string; meta: Meta }>();
const state: Global = inject("state")!;
const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);

const ui = computed(() => context.ui.value || {});
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
const displayValue = computed(() =>
  isFunction(unref(ui).text) ? unref(ui).text() : unref(ui).text
);
</script>
<style lang="less" scoped>
.no-label :deep(.ant-form-item-control) {
  line-height: normal;
  .ant-form-item-control-input {
    min-height: unset;
  }
}
</style>
