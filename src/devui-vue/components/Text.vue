<template>
  <div>
    <d-form-item :label="meta.title">
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
        <div v-html="meta.description" class="v__description"></div>
      </template>
    </d-form-item>
  </div>
</template>
<script setup lang="ts" name="v-text">
import {
  computed,
  getCurrentInstance,
  inject,
  unref,
  type ComponentInternalInstance,
} from "vue";
import type { Meta } from "@/types/meta";
import type { Global } from "@/core/utils/global";
import { isFunction } from "@/core/utils/utils";
import { StringMeta } from "@/core/meta/string.meta";

const props = defineProps<{ id: string; meta: Meta }>();
const state: Global = inject("state")!;
const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);

const ui = computed(() => context.ui.value || {});
const displayValue = computed(() =>
  isFunction(unref(ui).text) ? unref(ui).text() : unref(ui).text
);
</script>
<style lang="less" scoped>
.v__description {
  font-size: var(--devui-font-size, 14px);
  color: var(--devui-aide-text, #71757f);
  min-height: 20px;
  line-height: 1.5;
  text-align: justify;
}
</style>
