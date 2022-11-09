<template>
  <v-wrapper :id="id" :meta="meta">
    <el-input
      v-bind="bindings"
      :disabled="readOnly"
      :minlength="meta.minLength"
      :maxlength="meta.maxLength"
      v-model="value"
      @change="change"
    >
      <!-- prefix & suffix -->
      <template v-if="ui.slotNameOfPrefix" v-slot:prefix>
        <slot :name="ui.slotNameOfPrefix"></slot>
      </template>
      <template v-if="ui.slotNameOfSuffix" v-slot:suffix>
        <slot :name="ui.slotNameOfSuffix"></slot>
      </template>

      <!-- prepend & append -->
      <template v-if="ui.slotNameOfPrepend" v-slot:prepend>
        <slot :name="ui.slotNameOfPrepend"></slot>
      </template>
      <template v-if="ui.slotNameOfAppend" v-slot:append>
        <slot :name="ui.slotNameOfAppend"></slot>
      </template>
    </el-input>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-string">
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
import { ElInput } from "element-plus";
import { useBindings } from "@/core/hooks/bindings";
import type { Global } from "@/core/utils/global";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);

const { bindings } = useBindings(Object.keys(ElInput.props), context.ui);
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

function change(value: any) {
  if (ui.value.change) {
    ui.value.change(value);
  }
}
</script>

<style scoped></style>
