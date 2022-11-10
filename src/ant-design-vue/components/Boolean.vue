<template>
  <v-wrapper :id="id" :meta="meta">
    <a-switch
      class="v__boolean"
      v-model:checked="value"
      v-bind="bindings"
      :disabled="readOnly"
      @change="change"
    >
      <template v-if="ui.slotNameOfCheckedChildren" v-slot:checkedChildren>
        <slot :name="ui.slotNameOfCheckedChildren"></slot>
      </template>
      <template v-if="ui.slotNameOfUnCheckedChildren" v-slot:unCheckedChildren>
        <slot :name="ui.slotNameOfUnCheckedChildren"></slot>
      </template>
    </a-switch>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-boolean">
import { useBindings } from "@/core/hooks/bindings";
import { BooleanMeta } from "@/core/meta/boolean.meta";
import type { Meta } from "@/types/meta";
import type { Global } from "@/core/utils/global";
import { Switch } from "ant-design-vue";
import {
  computed,
  getCurrentInstance,
  inject,
  toRef,
  unref,
  type ComponentInternalInstance,
} from "vue";
import VWrapper from "./Wrapper.vue";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new BooleanMeta(appContext, state, props.id, props.meta);

const { bindings } = useBindings(Object.keys(Switch.props), context.ui);
const readOnly = toRef(props.meta, "readOnly");

const ui = computed(() => {
  return context.ui.value || {};
});

const value = computed({
  get() {
    return context.value;
  },
  set(val) {
    context.value = val || false;
  },
});

function change() {
  if (ui.value.change) {
    ui.value.change(unref(value));
  }
}
</script>

<style scoped></style>
