<template>
  <!-- 必须要使用 v-wrapper 来包裹我们的模板 -->
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
import type { Global } from "@/core/utils/global";
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
import { PasswordMeta } from "./password.meta";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;
const { appContext } = getCurrentInstance() as ComponentInternalInstance;
// 初始化 context
const context = new PasswordMeta(appContext, state, props.id, props.meta);
// 导入 hook
const { bindings } = useBindings(Object.keys(ElInput.props), context.ui);

const type = ref("password");
const eyeVisible = ref(false);

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
