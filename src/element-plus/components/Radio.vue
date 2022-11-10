<template>
  <v-wrapper :id="id" :meta="meta">
    <el-radio-group
      v-bind="bindings"
      v-model="value"
      :disabled="readOnly"
      @change="change"
    >
      <template v-if="ui.button">
        <el-radio-button
          v-for="(item, index) in ui.options"
          :key="index"
          :label="item.label"
          :size="ui.size"
          :border="ui.border"
          :disabled="meta.readOnly || item.disabled"
        >
          {{ item.text || item.label }}
        </el-radio-button>
      </template>
      <template v-else>
        <el-radio
          v-for="(item, index) in ui.options"
          :key="index"
          :label="item.label"
          :size="ui.size"
          :border="ui.border"
          :disabled="meta.readOnly || item.disabled"
        >
          {{ item.text || item.label }}
        </el-radio>
      </template>

      <template v-if="ui.slotNameOfDefault" v-slot:default>
        <slot :name="ui.slotNameOfDefault"></slot>
      </template>
    </el-radio-group>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-radio">
import { StringMeta } from "@/core/meta/string.meta";
import type { Meta } from "@/types/meta";
import {
  computed,
  getCurrentInstance,
  inject,
  toRef,
  type ComponentInternalInstance,
} from "vue";
import VWrapper from "./Wrapper.vue";
import { ElRadioGroup } from "element-plus";
import { useBindings } from "@/core/hooks/bindings";
import type { Global } from "@/core/utils/global";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);

const { bindings } = useBindings(Object.keys(ElRadioGroup.props), context.ui);
const readOnly = toRef(props.meta, "readOnly");

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
