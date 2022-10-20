<template>
  <v-wrapper :id="id" :meta="meta">
    <template v-if="!ui.span">
      <a-checkbox-group
        class="v__checkbox"
        v-model:value="value"
        v-bind="bindings"
        :disabled="meta.readOnly"
        :options="meta.enum"
        @change="change"
      />
    </template>
    <template v-else>
      <a-checkbox-group
        v-model:value="value"
        :disabled="meta.readOnly"
        @change="change"
        class="v__checkbox"
      >
        <a-row>
          <a-col
            class="v__text-left"
            :span="ui.span"
            v-for="(item, index) in meta.enum"
            :key="index"
          >
            <a-checkbox
              :value="item.value || item"
              :disabled="item.disabled || false"
            >
              {{ item.label || item }}
            </a-checkbox>
          </a-col>
        </a-row>
      </a-checkbox-group>
    </template>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-checkbox">
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
import { Input } from "ant-design-vue";
import { useBindings } from "@/hooks/bindings";
import type { Global } from "@/utils/global";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);

const { bindings } = useBindings(Object.keys(Input.props), context.ui);

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
</script>

<style scoped></style>
