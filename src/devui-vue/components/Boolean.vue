<template>
  <v-wrapper :id="id" :meta="meta">
    <d-switch
      class="v__boolean"
      v-model="value"
      v-bind="bindings"
      :disabled="readOnly"
      @change="change"
    >
      <template v-if="ui.slotNameOfCheckedContent" v-slot:checkedContent>
        <slot :name="ui.slotNameOfCheckedContent"></slot>
      </template>
      <template v-if="ui.slotNameOfUnCheckedContent" v-slot:uncheckedContent>
        <slot :name="ui.slotNameOfUnCheckedContent"></slot>
      </template>
    </d-switch>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-boolean">
import {
  computed,
  getCurrentInstance,
  inject,
  toRef,
  unref,
  type ComponentInternalInstance,
} from "vue";
import { Switch } from "vue-devui";
import type { Meta } from "@/types/meta";
import type { Global } from "@/core/utils/global";
import { useBindings } from "@/core/hooks/bindings";
import { BooleanMeta } from "@/core/meta/boolean.meta";
import VWrapper from "./Wrapper.vue";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new BooleanMeta(appContext, state, props.id, props.meta);

const { bindings } = useBindings(Object.keys(Switch.props), context.ui);
const readOnly = toRef(props.meta, "readOnly");

const ui = computed(() => context.ui.value || {});

const value = computed({
  get() {
    return context.value;
  },
  set(val) {
    context.value = val || false;
  },
});

function change() {
  unref(ui).change?.(unref(value));
}
</script>
