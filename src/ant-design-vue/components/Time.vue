<template>
  <v-wrapper :id="id" :meta="meta">
    <a-time-range-picker
      v-if="ui.type === 'range'"
      class="v__time"
      v-model:value="value"
      v-model:open="ui.open"
      v-bind="rangeBindings"
      :disabled="readOnly"
      @calendarChange="calendarChange"
      @ok="ok"
      @change="change"
    >
      <template v-if="ui.slotNameOfRenderExtraFooter" v-slot:renderExtraFooter>
        <slot :name="ui.slotNameOfRenderExtraFooter"></slot>
      </template>
      <template v-if="ui.slotNameOfSuffixIcon" v-slot:suffixIcon>
        <slot :name="ui.slotNameOfSuffixIcon"></slot>
      </template>
      <template v-if="ui.slotNameOfClearIcon" v-slot:clearIcon>
        <slot :name="ui.slotNameOfClearIcon"></slot>
      </template>
    </a-time-range-picker>
    <a-time-picker
      v-else
      class="v__time"
      v-model:value="value"
      v-model:open="ui.open"
      v-bind="dateBindings"
      :disabled="meta.readOnly"
      @ok="ok"
      @change="change"
    >
      <template v-if="ui.slotNameOfRenderExtraFooter" v-slot:renderExtraFooter>
        <slot :name="ui.slotNameOfRenderExtraFooter"></slot>
      </template>
      <template v-if="ui.slotNameOfSuffixIcon" v-slot:suffixIcon>
        <slot :name="ui.slotNameOfSuffixIcon"></slot>
      </template>
      <template v-if="ui.slotNameOfClearIcon" v-slot:clearIcon>
        <slot :name="ui.slotNameOfClearIcon"></slot>
      </template>
    </a-time-picker>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-time">
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
import { TimePicker, TimeRangePicker } from "ant-design-vue";
import { useBindings } from "@/core/hooks/bindings";
import type { Global } from "@/core/utils/global";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);

let rangeBindings = {};
let dateBindings = {};
if (context.ui.value.type === "range") {
  const { bindings } = useBindings(
    Object.keys(TimeRangePicker.props),
    context.ui
  );
  rangeBindings = bindings;
} else {
  const { bindings } = useBindings(Object.keys(TimePicker.props), context.ui);
  dateBindings = bindings;
}
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

function change(time: any, timeString: string) {
  if (ui.value.change) {
    ui.value.change(time, timeString);
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
