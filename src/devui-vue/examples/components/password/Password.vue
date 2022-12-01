<template>
  <!-- 必须要使用 v-wrapper 来包裹我们的模板 -->
  <v-wrapper :id="id" :meta="meta">
    <d-input
      v-model="value"
      v-bind="bindings"
      :disabled="meta.readOnly"
      :maxLength="maxLength"
      show-password
      @change="change"
    >
      <template #suffix>{{ pwdLength }} / {{ maxLength }}</template>
    </d-input>
  </v-wrapper>
</template>

<script setup lang="ts">
import type { Meta } from "@/types/meta";
import {
  computed,
  getCurrentInstance,
  inject,
  ref,
  unref,
  type ComponentInternalInstance,
} from "vue";
import { Input } from "vue-devui";
import { useBindings } from "@/core/hooks/bindings";
import type { Global } from "@/core/utils/global";
import { PasswordMeta } from "./password.meta";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;
const { appContext } = getCurrentInstance() as ComponentInternalInstance;
// 初始化 context
const context = new PasswordMeta(appContext, state, props.id, props.meta);
// 导入 hook
const { bindings } = useBindings(Object.keys(Input.props), context.ui);

const ui = computed(() => {
  return context.ui.value || {};
});
// 这个是绑定到模板的 v-model 值
const value = computed({
  get() {
    return context.value;
  },
  set(val) {
    context.value = val;
  },
});
const maxLength = ref(12);
const pwdLength = computed(() => value.value?.length || 0);

function change() {
  if (ui.value.change) {
    ui.value.change(unref(value));
  }
}
</script>
