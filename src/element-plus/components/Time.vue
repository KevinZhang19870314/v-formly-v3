<template>
  <v-wrapper :id="id" :meta="meta">
    <el-time-picker
      class="v__time"
      v-model="value"
      v-bind="bindings"
      :disabled="meta.readOnly"
      @change="change"
    >
    </el-time-picker>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-time">
import { StringMeta } from "@/core/meta/string.meta";
import type { Meta } from "@/types/meta";
import {
  computed,
  getCurrentInstance,
  inject,
  type ComponentInternalInstance,
} from "vue";
import VWrapper from "./Wrapper.vue";
import { ElTimePicker } from "element-plus";
import { useBindings } from "@/core/hooks/bindings";
import type { Global } from "@/core/utils/global";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);

const { bindings } = useBindings(Object.keys(ElTimePicker.props), context.ui);

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

function change(val: any) {
  if (ui.value.change) {
    ui.value.change(val);
  }
}
</script>

<style scoped></style>
