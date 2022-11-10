<template>
  <v-wrapper :id="id" :meta="meta">
    <el-input-number
      class="v__number"
      v-model="value"
      v-bind="bindings"
      :disabled="readOnly"
      :min="minimum"
      :max="maximum"
      @change="change"
    >
    </el-input-number>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-number">
import {
  computed,
  getCurrentInstance,
  inject,
  toRef,
  type ComponentInternalInstance,
} from "vue";
import VWrapper from "./Wrapper.vue";
import { ElInputNumber } from "element-plus";
import { useBindings } from "@/core/hooks/bindings";
import type { Global } from "@/core/utils/global";
import type { Meta } from "@/types/meta";
import { NumberMeta } from "@/core/meta/number.meta";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new NumberMeta(appContext, state, props.id, props.meta);

const { bindings } = useBindings(Object.keys(ElInputNumber.props), context.ui);
const readOnly = toRef(props.meta, "readOnly");
const minimum = toRef(props.meta, "minimum");
const maximum = toRef(props.meta, "maximum");

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

function change(currentValue: any, oldValue: any) {
  if (ui.value.change) {
    ui.value.change(currentValue, oldValue);
  }
}
</script>

<style scoped></style>
