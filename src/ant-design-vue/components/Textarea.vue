<template>
  <v-wrapper :id="id" :meta="meta">
    <a-textarea
      v-bind="bindings"
      :autoSize="autoSize"
      :defaultValue="meta.defaultValue"
      :disabled="readOnly"
      :maxlength="maxLength"
      v-model:value="value"
      @change="change"
      @focus="focus"
      @blur="blur"
      @pressEnter="pressEnter"
    />
  </v-wrapper>
</template>

<script setup lang="ts" name="v-textarea">
import type { Meta } from "@/types/meta";
import type { Global } from "@/core/utils/global";
import { toRef, type ComponentInternalInstance } from "vue";
import {
  computed,
  getCurrentInstance,
  inject,
  unref,
  ref,
  onMounted,
} from "vue";
import VWrapper from "./Wrapper.vue";
import { StringMeta } from "@/core/meta/string.meta";
import { Textarea } from "ant-design-vue";
import { useBindings } from "@/core/hooks/bindings";

const props = defineProps<{ id: string; meta: Meta }>();
const state: Global = inject("state")!;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);
const { bindings } = useBindings(Object.keys(Textarea.props), context.ui);
const readOnly = toRef(props.meta, "readOnly");
const maxLength = toRef(props.meta, "maxLength");

const ui = computed(() => context.ui.value || {});
const value = computed({
  get() {
    return context.value;
  },
  set(val) {
    context.value = val;
  },
});

const autoSize = ref(true);

onMounted(() => {
  if (unref(ui).autoSize != null) {
    autoSize.value = unref(ui).autoSize;
  }
});

function change() {
  unref(ui).change?.(unref(value));
}
function focus(e: FocusEvent) {
  unref(ui).focus?.(e);
}
function blur(e: FocusEvent) {
  unref(ui).blur?.(e);
}
function pressEnter(e: KeyboardEvent) {
  unref(ui).pressEnter?.(e);
}
</script>
