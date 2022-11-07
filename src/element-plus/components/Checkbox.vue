<template>
  <v-wrapper :id="id" :meta="meta">
    <template v-if="ui.group">
      <el-checkbox-group
        class="v__checkbox"
        v-model="value"
        v-bind="curBindings"
        :disabled="meta.readOnly"
        @change="change"
      >
        <template v-if="ui.button">
          <el-checkbox-button
            v-for="(item, index) in ui.options"
            :key="index"
            :label="item.label"
          >
            {{ item.label }}
          </el-checkbox-button>
        </template>
        <template v-else>
          <el-checkbox
            v-for="(item, index) in ui.options"
            :key="index"
            :label="item.label"
            :disabled="item.disabled"
          >
            {{ item.label }}
          </el-checkbox>
        </template>
      </el-checkbox-group>
    </template>
    <template v-else>
      <el-checkbox
        class="v__checkbox"
        v-model="value"
        v-bind="curBindings"
        :disabled="meta.readOnly"
        @change="change"
      />
    </template>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-checkbox">
import type { Meta } from "@/types/meta";
import {
  computed,
  getCurrentInstance,
  inject,
  ref,
  type ComponentInternalInstance,
} from "vue";
import VWrapper from "./Wrapper.vue";
import { ElCheckboxGroup, ElCheckbox } from "element-plus";
import { useBindings } from "@/core/hooks/bindings";
import type { Global } from "@/core/utils/global";
import { StringMeta } from "@/core/meta/string.meta";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);

const ui = computed(() => {
  return context.ui.value || {};
});

let curBindings = ref();
if (ui.value.group) {
  const { bindings } = useBindings(
    Object.keys(ElCheckboxGroup.props),
    context.ui
  );
  curBindings.value = bindings.value;
} else {
  const { bindings } = useBindings(Object.keys(ElCheckbox.props), context.ui);
  curBindings.value = bindings.value;
}

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
