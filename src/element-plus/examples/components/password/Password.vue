<template>
  <v-wrapper :id="id" :meta="meta">
    <el-input
      v-bind="bindings"
      :disabled="meta.readOnly"
      :maxlength="meta.maxLength"
      :type="type"
      v-model="value"
      @change="change"
    >
      <template v-slot:suffix>
        <div style="cursor: pointer" @click="toggle">
          <el-icon v-if="!eyeVisible"><Hide /></el-icon>
          <el-icon v-if="eyeVisible"><View /></el-icon>
        </div>
      </template>
    </el-input>
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
import { ElInput } from "element-plus";
import { useBindings } from "@/core/hooks/bindings";
import type { Global } from "@/core/utils/global";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;
let type = ref("password");
let eyeVisible = ref(false);

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new PasswordMeta(appContext, state, props.id, props.meta);

const { bindings } = useBindings(Object.keys(ElInput.props), context.ui);

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
