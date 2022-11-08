<template>
  <v-wrapper :id="id" :meta="meta">
    <el-date-picker
      v-model="value"
      v-bind="bindings"
      :disabled="meta.readOnly"
      @change="change"
    >
      <template v-if="ui.slotNameOfRangeSeparator" v-slot:range-separator>
        <slot :name="ui.slotNameOfRangeSeparator"></slot>
      </template>

      <!-- TODO: 这个default插槽不起作用？ -->
      <template v-if="ui.slotNameOfDefault" v-slot:default="cell">
        <slot :name="ui.slotNameOfDefault" v-bind="cell"></slot>
      </template>
    </el-date-picker>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-date">
import { StringMeta } from "@/core/meta/string.meta";
import type { Meta } from "@/types/meta";
import {
  computed,
  getCurrentInstance,
  inject,
  type ComponentInternalInstance,
} from "vue";
import VWrapper from "./Wrapper.vue";
import { ElDatePicker } from "element-plus";
import { useBindings } from "@/core/hooks/bindings";
import type { Global } from "@/core/utils/global";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);

const { bindings } = useBindings(Object.keys(ElDatePicker.props), context.ui);

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

function change(value: any) {
  if (ui.value.change) {
    ui.value.change(value);
  }
}
</script>

<style scoped></style>
