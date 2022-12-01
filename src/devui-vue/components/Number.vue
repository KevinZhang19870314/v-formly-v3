<template>
  <v-wrapper :id="id" :meta="meta">
    <d-input-number
      class="v__number"
      v-model="value"
      v-bind="bindings"
      :disabled="readOnly"
      :min="min"
      :max="max"
      :step="step"
      :class="{ 'hidden-step': ui.hideStep }"
      @change="change($event)"
    />
  </v-wrapper>
</template>

<script setup lang="ts" name="v-number">
import {
  computed,
  getCurrentInstance,
  inject,
  ref,
  toRef,
  unref,
  type ComponentInternalInstance,
} from "vue";
import { InputNumber } from "vue-devui";
import { useBindings } from "@/core/hooks/bindings";
import type { Global } from "@/core/utils/global";
import { StringMeta } from "@/core/meta/string.meta";
import { MetaType, type Meta } from "@/types/meta";
import VWrapper from "./Wrapper.vue";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);

const { bindings } = useBindings(Object.keys(InputNumber.props), context.ui);
const readOnly = toRef(props.meta, "readOnly");

const ui = computed(() => context.ui.value || {});

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
}

function change(val: number) {
  value.value =
    context.meta.value.type === MetaType.Integer ? Math.floor(val) : val;

  if (ui.value.change) {
    ui.value.change(unref(value));
  }
}
</script>
<style lang="less" scoped>
.hidden-step {
  :deep(.devui-input-number__control-buttons) {
    display: none !important;
  }
}
</style>
