<template>
  <v-wrapper :id="id" :meta="meta">
    <a-input-number
      class="v__number"
      :id="id"
      v-model:value="value"
      v-bind="bindings"
      :disabled="meta.readOnly"
      :min="min"
      :max="max"
      :step="step"
      :formatter="formatter"
      :parser="parser"
      :class="{ 'v__input-number-hidden-step': ui.hideStep }"
      @change="change($event)"
    >
      <template v-if="ui.slotNameOfAddonAfter" v-slot:addonAfter>
        <slot :name="ui.slotNameOfAddonAfter"></slot>
      </template>
      <template v-if="ui.slotNameOfAddonBefore" v-slot:addonBefore>
        <slot :name="ui.slotNameOfAddonBefore"></slot>
      </template>
      <template v-if="ui.slotNameOfPrefix" v-slot:prefix>
        <slot :name="ui.slotNameOfPrefix"></slot>
      </template>
    </a-input-number>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-number">
import { StringMeta } from "@/core/meta/string.meta";
import { MetaType, type Meta } from "@/types/meta";
import {
  computed,
  getCurrentInstance,
  inject,
  ref,
  unref,
  type ComponentInternalInstance,
} from "vue";
import VWrapper from "./Wrapper.vue";
import { InputNumber } from "ant-design-vue";
import { useBindings } from "@/core/hooks/bindings";
import type { Global } from "@/core/utils/global";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);

const { bindings } = useBindings(Object.keys(InputNumber.props), context.ui);

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

let min = ref(-Infinity);
let max = ref(Infinity);
let step = ref(1);
let formatter = ref((value: any) => value);
let parser = ref((value: any) => value);
onCreated();

function onCreated() {
  const {
    minimum,
    exclusiveMinimum,
    maximum,
    exclusiveMaximum,
    multipleOf,
    type,
  } = context.meta.value;

  step.value = multipleOf || 1;
  if (typeof minimum !== "undefined") {
    min.value = exclusiveMinimum ? minimum + step.value : minimum;
  }
  if (typeof maximum !== "undefined") {
    max.value = exclusiveMaximum ? maximum - step.value : maximum;
  }
  if (type === "integer") {
    min.value = Math.trunc(min.value);
    max.value = Math.trunc(max.value);
    step.value = Math.trunc(step.value);
  }
  if (ui.value.prefix != null) {
    ui.value.formatter = (value: any) =>
      value == null ? "" : `${ui.value.prefix} ${value}`;
    ui.value.parser = (value: any) => value.replace(`${ui.value.prefix} `, "");
  }

  if (ui.value.unit != null) {
    ui.value.formatter = (value: any) =>
      value == null ? "" : `${value} ${ui.value.unit}`;
    ui.value.parser = (value: any) => value.replace(` ${ui.value.unit}`, "");
  }

  if (ui.value.formatter) formatter.value = ui.value.formatter;
  if (ui.value.parser) parser.value = ui.value.parser;
}

function change(val: number) {
  value.value =
    context.meta.value.type === MetaType.Integer ? Math.floor(val) : val;

  if (ui.value.change) {
    ui.value.change(unref(value));
  }
}
</script>

<style scoped></style>
