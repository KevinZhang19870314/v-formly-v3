<template>
  <v-wrapper :id="id" :meta="meta">
    <!--官方未提供 range 模式 -->
    <d-time-picker
      ref="timePickerRef"
      class="v__time"
      v-model="value"
      v-bind="dateBindings"
      :disabled="readOnly"
      @change="change"
    >
      <template
        v-if="ui.slotNameOfCustomViewTemplate"
        v-slot:customViewTemplate
      >
        <slot
          :name="ui.slotNameOfCustomViewTemplate"
          v-bind:ref="timePickerRef"
        />
      </template>
    </d-time-picker>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-time">
import {
  computed,
  getCurrentInstance,
  inject,
  toRef,
  unref,
  ref,
  type ComponentInternalInstance,
} from "vue";
import { TimePicker } from "vue-devui";
import { StringMeta } from "@/core/meta/string.meta";
import { useBindings } from "@/core/hooks/bindings";
import type { Global } from "@/core/utils/global";
import type { Meta } from "@/types/meta";
import VWrapper from "./Wrapper.vue";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);
let timePickerRef = ref(null);
let dateBindings = {};
const { bindings } = useBindings(Object.keys(TimePicker.props), context.ui);
dateBindings = bindings;
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

function change(time: string) {
  unref(ui).change?.(time);
}
</script>

<style scoped></style>
