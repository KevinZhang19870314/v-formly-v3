<template>
  <v-wrapper :id="id" :meta="meta">
    <template v-if="ui.pickerType === 'range'">
      <d-range-date-picker-pro
        ref="rangeDatePickerRef"
        class="v__date"
        v-model="value"
        v-bind="rangeBindings"
        :disabled="readOnly"
        @toggleChange="toggleChange"
        @confirmEvent="confirmEvent"
        @focus="focus"
        @blur="blur"
      >
        <template v-if="ui.slotNameOfRightArea" v-slot:rightArea>
          <slot :name="ui.slotNameOfRightArea"></slot>
        </template>
        <template v-if="ui.slotNameOfFooter" v-slot:footer>
          <slot :name="ui.slotNameOfFooter"></slot>
        </template>
      </d-range-date-picker-pro>
    </template>
    <template v-else>
      <d-date-picker-pro
        ref="datePickerRef"
        class="v__date"
        v-model="value"
        v-bind="dateBindings"
        :disabled="readOnly"
        @toggleChange="toggleChange"
        @confirmEvent="confirmEvent"
        @focus="focus"
        @blur="blur"
      >
        <template v-if="ui.slotNameOfRightArea" v-slot:rightArea>
          <slot :name="ui.slotNameOfRightArea"></slot>
        </template>
        <template v-if="ui.slotNameOfFooter" v-slot:footer>
          <slot :name="ui.slotNameOfFooter"></slot>
        </template>
      </d-date-picker-pro>
    </template>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-date">
import {
  computed,
  getCurrentInstance,
  inject,
  ref,
  toRef,
  unref,
  type ComponentInternalInstance,
} from "vue";
import { DatePickerPro, DRangeDatePickerPro } from "vue-devui";
import { useBindings } from "@/core/hooks/bindings";
import { StringMeta } from "@/core/meta/string.meta";
import type { Meta } from "@/types/meta";
import type { Global } from "@/core/utils/global";
import VWrapper from "./Wrapper.vue";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);

let rangeBindings = {};
let dateBindings = {};
if (context.ui.value.pickerType === "range") {
  const { bindings } = useBindings(
    Object.keys(DRangeDatePickerPro.props),
    context.ui
  );
  rangeBindings = bindings;
} else {
  const { bindings } = useBindings(
    Object.keys(DatePickerPro.props),
    context.ui
  );
  dateBindings = bindings;
}
const rangeDatePickerRef = ref();
const datePickerRef = ref();
Object.assign(context, { rangeDatePickerRef, datePickerRef });

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

function toggleChange(open: boolean) {
  unref(ui).toggleChange?.(open);
}
function confirmEvent(date: Date | Date[]) {
  unref(ui).confirmEvent?.(date);
}
function focus(e: MouseEvent) {
  unref(ui).focus?.(e);
}
function blur() {
  unref(ui).blur?.();
}
</script>
