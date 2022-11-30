<template>
  <v-wrapper :id="id" :meta="meta">
    <template v-if="!ui.span">
      <d-checkbox-group
        class="v__checkbox"
        direction="row"
        v-model="value"
        v-bind="bindings"
        :disabled="readOnly"
        :options="meta.enum"
        @change="change"
      />
    </template>
    <template v-else>
      <d-checkbox-group
        class="v__checkbox"
        v-model="value"
        v-bind="bindings"
        :disabled="readOnly"
        @change="change"
      >
        <d-row wrap>
          <d-col
            class="v__text-left"
            :span="ui.span"
            v-for="(item, i) in meta.enum"
            :key="i"
          >
            <d-checkbox
              :value="item.value || item"
              :disabled="item.disabled || false"
            >
              {{ item.label || item }}
            </d-checkbox>
          </d-col>
        </d-row>
      </d-checkbox-group>
    </template>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-checkbox">
import {
  computed,
  getCurrentInstance,
  inject,
  toRef,
  unref,
  type ComponentInternalInstance,
} from "vue";
import { CheckboxGroup } from "vue-devui";
import type { Meta } from "@/types/meta";
import { StringMeta } from "@/core/meta/string.meta";
import { useBindings } from "@/core/hooks/bindings";
import type { Global } from "@/core/utils/global";
import VWrapper from "./Wrapper.vue";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);

const { bindings } = useBindings(Object.keys(CheckboxGroup.props), context.ui);
const readOnly = toRef(props.meta, "readOnly");

const ui = computed(() => context.ui.value || {});

const value = computed({
  get() {
    return context.value || [];
  },
  set(val) {
    context.value = val.length > 0 ? val : undefined;
  },
});

function change() {
  unref(ui).change?.(unref(value));
}
</script>
