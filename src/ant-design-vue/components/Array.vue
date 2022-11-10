<!-- 创建对象数组 -->
<template>
  <a-form-item>
    <a-row>
      <a-col class="ant-form-item-label" v-if="meta.title" :span="ui.spanLabel">
        <label :class="{ 'ant-form-item-required': ui.showRequired }">
          {{ meta.title }}
          <span class="v__optional">
            {{ ui.optional }}
            <a-tooltip
              v-if="oh"
              :title="oh.text"
              :placement="oh.placement"
              :trigger="oh.trigger"
              :overlayStyle="oh.overlayStyle"
              :overlayClassName="oh.overlayClassName"
              :mouseEnterDelay="oh.mouseEnterDelay"
              :mouseLeaveDelay="oh.mouseLeaveDelay"
            >
              <component
                v-if="oh.icon"
                :is="globalProperties.$antIcons[oh.icon]"
              />
            </a-tooltip>
          </span>
        </label>
        <div class="v__array-add">
          <a-button
            :type="ui.addType || 'dashed'"
            :disabled="addDisabled"
            @click="addItem"
          >
            {{ ui.addTitle || "添加" }}
          </a-button>
        </div>
      </a-col>
      <a-col
        class="ant-form-item-control-wrapper"
        :span="ui.spanControl"
        :offset="ui.offsetControl"
      >
        <div class="ant-form-item-control">
          <a-row class="v__array-container">
            <template v-for="(p, i) in context.ids.value" :key="p.key">
              <a-col :span="arraySpan" class="v__array-item">
                <a-card>
                  <v-formly-v3-item :id="generateId(i)" :meta="meta.items!" />
                  <span
                    v-if="showRemove"
                    class="v__array-remove"
                    @click="removeItem(i)"
                  >
                    <delete-outlined />
                  </span>
                </a-card>
              </a-col>
            </template>
          </a-row>
          <div v-if="meta.description" class="ant-form-item-extra">
            {{ meta.description }}
          </div>
          <div v-if="error" class="ant-form-item-explain-error">
            {{ error }}
          </div>
        </div>
      </a-col>
    </a-row>
  </a-form-item>
</template>

<script setup lang="ts" name="v-array">
import type { Meta } from "@/types/meta";
import type { Global } from "@/core/utils/global";
import { onBeforeUnmount, toRef, type ComponentInternalInstance } from "vue";
import {
  computed,
  getCurrentInstance,
  inject,
  unref,
  ref,
  onMounted,
} from "vue";
import { ArrayMeta } from "@/core/meta/array.meta";
import useEventBus from "@/core/hooks/event-bus";
import useCurrentInstance from "@/core/hooks/current-instance";
import { FORM_ERROR_CHANGE } from "@/core/utils/consts";
import VFormlyV3Item from "@/ant-design-vue/AFormlyItem.vue";

const props = defineProps<{ id: string; meta: Meta }>();
const state: Global = inject("state")!;
const { globalProperties } = useCurrentInstance();
const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new ArrayMeta(appContext, state, props.id, props.meta);
const emitter = useEventBus(appContext);

const ui = computed(() => unref(context.ui) || {});
const oh = computed(() => {
  return Object.assign({}, state.ui, props.meta.ui).optionalHelp;
});
const value = computed({
  get() {
    return context.value;
  },
  set(val) {
    context.value = val || [];
  },
});
const error = computed({
  get() {
    return unref(context.error);
  },
  set(val) {
    context.error.value = val;
  },
});
const readOnly = toRef(props.meta, "readOnly");
const addDisabled = computed(() => {
  return (
    unref(readOnly) ||
    (props.meta.maxItems != null &&
      unref(context.ids).length >= props.meta.maxItems)
  );
});
const showRemove = computed(() => {
  const min = props.meta.minItems;
  if (unref(readOnly) || (min != null && unref(context.ids).length <= min)) {
    return false;
  }
  return true;
});

const arraySpan = ref<number>(8);
const removeTitle = ref<string>("");

onMounted(() => {
  emitter.on(`${FORM_ERROR_CHANGE}-${state._formId}`, formErrorChangeCallback);
  const { grid, removable, removeTitle: _removeTitle } = unref(ui);
  arraySpan.value = grid?.arraySpan ?? 8;

  removeTitle.value = removable === false ? null : _removeTitle;
});
onBeforeUnmount(() => {
  emitter.off(`${FORM_ERROR_CHANGE}-${state._formId}`, formErrorChangeCallback);
});

function formErrorChangeCallback(err: any) {
  if (err.id === props.id) {
    error.value = err.error ? err.error.message : undefined;
  }
}
// 生成 itmes properties 的 id
function generateId(i: number) {
  return `${props.id}/${i}`;
}
function addItem() {
  const id = context.add();
  unref(ui).add?.(id);
}
function removeItem(i: number) {
  context.remove(i);
  unref(ui).remove?.(i);
}
</script>
