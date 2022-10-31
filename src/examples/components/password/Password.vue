<template>
  <v-wrapper :id="id" :meta="meta">
    <a-input
      v-bind="bindings"
      :disabled="meta.readOnly"
      :maxLength="meta.maxLength"
      :type="type"
      v-model:value="value"
      @change="change"
    >
      <template v-slot:suffix>
        <div style="cursor: pointer" @click="toggle">
          <eye-invisible-outlined v-if="!eyeVisible" />
          <eye-outlined v-if="eyeVisible" />
        </div>
      </template>
    </a-input>
  </v-wrapper>
</template>

<script setup lang="ts">
import { PasswordMeta } from "./password.meta";
import type { Meta } from "@/types/meta";
import {
  computed,
  getCurrentInstance,
  inject,
  ref,
  unref,
  type ComponentInternalInstance,
} from "vue";
import { Input } from "ant-design-vue";
import { useBindings } from "@/hooks/bindings";
import type { Global } from "@/utils/global";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;
let type = ref("password");
let eyeVisible = ref(false);

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new PasswordMeta(appContext, state, props.id, props.meta);

const { bindings } = useBindings(Object.keys(Input.props), context.ui);

const ui = computed(() => {
  return context.ui.value || {};
});

const value = computed({
  get() {
    return context.value;
  },
  set(val) {
    context.value = val;
  },
});

function change() {
  if (ui.value.change) {
    ui.value.change(unref(value));
  }
}

function toggle() {
  eyeVisible.value = !eyeVisible.value;
  type.value = eyeVisible.value ? "text" : "password";
}
</script>

<style scoped></style>
