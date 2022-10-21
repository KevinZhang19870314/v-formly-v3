<template>
  <v-wrapper :id="id" :meta="meta">
    <a-range-picker
      class="v__date"
      v-if="ui.type === 'range'"
      v-model:value="value"
      v-bind="rangeBindings"
      :disabled="meta.readOnly"
      @calendarChange="calendarChange"
      @ok="ok"
      @change="change"
    >
      <template v-if="ui.slotNameOfSuffixIcon" v-slot:suffixIcon>
        <slot :name="ui.slotNameOfSuffixIcon"></slot>
      </template>
    </a-range-picker>
    <a-date-picker
      class="v__date"
      v-if="ui.type !== 'range'"
      v-model:value="value"
      v-bind="dateBindings"
      :disabled="meta.readOnly"
      @ok="ok"
      @change="change"
    >
      <template v-if="ui.slotNameOfSuffixIcon" v-slot:suffixIcon>
        <slot :name="ui.slotNameOfSuffixIcon"></slot>
      </template>
    </a-date-picker>
  </v-wrapper>
</template>

<script setup lang="ts">
import { StringMeta } from "@/meta/string.meta";
import type { Meta } from "@/types/meta";
import {
  computed,
  getCurrentInstance,
  inject,
  unref,
  type ComponentInternalInstance,
} from "vue";
import VWrapper from "./Wrapper.vue";
import { DatePicker, RangePicker } from "ant-design-vue";
import { useBindings } from "@/hooks/bindings";
import type { Global } from "@/utils/global";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);

let rangeBindings = {};
let dateBindings = {};
if (context.ui.value.type === "range") {
  const { bindings } = useBindings(Object.keys(RangePicker.props), context.ui);
  rangeBindings = bindings;
} else {
  const { bindings } = useBindings(Object.keys(DatePicker.props), context.ui);
  dateBindings = bindings;
}

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

function ok(value: any) {
  if (ui.value.ok) {
    ui.value.ok(value);
  }
}

function calendarChange(dates: any, dateStrings: any, info: any) {
  if (ui.value.calendarChange) {
    ui.value.calendarChange(dates, dateStrings, info);
  }
}
</script>

<style scoped></style>
