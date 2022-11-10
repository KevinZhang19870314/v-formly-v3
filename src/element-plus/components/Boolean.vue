<template>
  <v-wrapper :id="id" :meta="meta">
    <el-switch
      class="v__boolean"
      v-model="value"
      v-bind="bindings"
      :disabled="readOnly"
      @change="change"
    >
    </el-switch>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-boolean">
import { useBindings } from "@/core/hooks/bindings";
import { BooleanMeta } from "@/core/meta/boolean.meta";
import type { Meta } from "@/types/meta";
import type { Global } from "@/core/utils/global";
import { ElSwitch } from "element-plus";
import {
  computed,
  getCurrentInstance,
  inject,
  toRef,
  type ComponentInternalInstance,
} from "vue";
import VWrapper from "./Wrapper.vue";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new BooleanMeta(appContext, state, props.id, props.meta);

const { bindings } = useBindings(Object.keys(ElSwitch.props), context.ui);
const readOnly = toRef(props.meta, "readOnly");

const ui = computed(() => {
  return context.ui.value || {};
});

// Need support styling in el-switch element
bindings.value["style"] = toRef(ui.value, "style");

const value = computed({
  get() {
    return context.value;
  },
  set(val) {
    context.value = val || false;
  },
});

function change(value: string | number | boolean) {
  if (ui.value.change) {
    ui.value.change(value);
  }
}
</script>

<style scoped></style>
