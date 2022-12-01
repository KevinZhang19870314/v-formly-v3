<template>
  <v-wrapper :id="id" :meta="meta">
    <d-auto-complete
      ref="autoCompleteRef"
      v-model="value"
      v-bind="bindings"
      :disabled="readOnly"
    >
      <!-- item & nothing & searching-->
      <template v-if="ui.slotNameOfItem" v-slot:item="slotProps">
        <slot :name="ui.slotNameOfItem" v-bind="slotProps"></slot>
      </template>
      <template v-if="ui.slotNameOfNothing" v-slot:nothing="slotProps">
        <slot :name="ui.slotNameOfNothing" v-bind:keyword="slotProps"></slot>
      </template>
      <template v-if="ui.slotNameOfSearching" v-slot:searching="slotProps">
        <slot :name="ui.slotNameOfSearching" v-bind:keyword="slotProps"></slot>
      </template>
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
    </d-auto-complete>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-autocomplete">
import {
  computed,
  getCurrentInstance,
  inject,
  ref,
  toRef,
  type ComponentInternalInstance,
} from "vue";
import { AutoComplete } from "vue-devui";
import { useBindings } from "@/core/hooks/bindings";
import { StringMeta } from "@/core/meta/string.meta";
import type { Global } from "@/core/utils/global";
import type { Meta } from "@/types/meta";
import VWrapper from "./Wrapper.vue";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new StringMeta(appContext, state, props.id, props.meta);

const { bindings } = useBindings(Object.keys(AutoComplete.props), context.ui);
const readOnly = toRef(props.meta, "readOnly");
const autoCompleteRef = ref();
Object.assign(context, { autoCompleteRef });
const ui = computed(() => context.ui.value || {});

const value = computed({
  get() {
    return context.value;
  },
  set(val) {
    context.value = val || undefined;
  },
});
</script>
