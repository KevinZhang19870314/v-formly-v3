<template>
  <v-wrapper :id="id" :meta="meta">
    <d-radio-group
      :direction="'row'"
      :disabled="readOnly"
      v-bind="bindings"
      v-model="value"
      @change="change"
    >
      <template v-if="ui.optionType === 'button'">
        <d-radio-button
          v-for="o in options"
          :key="o.value"
          :value="o.value"
          :disabled="o.disabled"
        >
          {{ o.label }}
        </d-radio-button>
      </template>
      <template v-else>
        <d-radio
          v-for="o in options"
          :key="o.value"
          :value="o.value"
          :disabled="o.disabled"
        >
          {{ o.label }}
        </d-radio>
      </template>
    </d-radio-group>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-radio">
import {
  computed,
  getCurrentInstance,
  inject,
  toRef,
  unref,
  type ComponentInternalInstance,
} from "vue";
import { RadioGroup } from "vue-devui";
import type { Meta } from "@/types/meta";
import { StringMeta } from "@/core/meta/string.meta";
import { useBindings } from "@/core/hooks/bindings";
import type { Global } from "@/core/utils/global";
import { isObject } from "@/core/utils/utils";
import VWrapper from "./Wrapper.vue";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);

const { bindings } = useBindings(Object.keys(RadioGroup.props), context.ui);
const readOnly = toRef(props.meta, "readOnly");

const ui = computed(() => {
  return context.ui.value || {};
});

const options = computed(() => {
  return (unref(ui).options || []).map((o: Object | number | string) => {
    if (isObject(o)) {
      return Object.assign(o, { disabled: o.disabled || false });
    } else {
      return { label: o, value: o, disabled: false };
    }
  });
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
  unref(ui).change?.(unref(value));
}
</script>
