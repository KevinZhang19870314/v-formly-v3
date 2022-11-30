<!-- 创建对象数组 -->
<template>
  <d-form-item
    :label="meta.title"
    :help-tips="ui.optional"
    :extra-info="meta.description"
    :class="{ 'show-required': ui.showRequired }"
  >
    <div class="control-wrapper">
      <div class="v__array-add">
        <d-button :type="ui.addType" :disabled="addDisabled" @click="addItem">
          {{ ui.addTitle || "添加" }}
        </d-button>
      </div>
      <d-row class="v__array-container" wrap>
        <template v-for="(p, i) in context.ids.value" :key="p.key">
          <d-col :span="arraySpan" class="v__array-item">
            <d-card shadow="never">
              <template #content>
                <v-formly-v3-item :id="generateId(i)" :meta="meta.items!" />
                <span
                  v-if="showRemove"
                  class="v__array-remove"
                  @click="removeItem(i)"
                >
                  <d-button icon="delete" shape="circle" title="Delete" />
                </span>
              </template>
            </d-card>
          </d-col>
        </template>
      </d-row>
      <div v-show="error" class="error-message">{{ error }}</div>
    </div>
  </d-form-item>
</template>

<script setup lang="ts" name="v-array">
import {
  computed,
  getCurrentInstance,
  inject,
  unref,
  ref,
  onMounted,
} from "vue";
import { onBeforeUnmount, toRef, type ComponentInternalInstance } from "vue";
import type { Meta } from "@/types/meta";
import type { Global } from "@/core/utils/global";
import { ArrayMeta } from "@/core/meta/array.meta";
import useEventBus from "@/core/hooks/event-bus";
import { FORM_ERROR_CHANGE } from "@/core/utils/consts";
import VFormlyV3Item from "../DFormlyItem.vue";

const props = defineProps<{ id: string; meta: Meta }>();
const state: Global = inject("state")!;
const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new ArrayMeta(appContext, state, props.id, props.meta);
const emitter = useEventBus(appContext);

const ui = computed(() => unref(context.ui) || {});
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
<style lang="less" scoped>
.show-required > .devui-form__label > :deep(.devui-form__label-span:before) {
  content: "*";
  color: red;
  display: inline-block;
  margin-right: 8px;
  margin-left: -12px;
}
.control-wrapper {
  width: 100%;

  .error-message {
    position: absolute;
    display: inline-block;
    min-height: 20px;
    line-height: 1.5;
    font-size: var(--devui-font-size, 14px);
    color: var(--devui-danger, #f66f6a);
  }
}
.v__array-add {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(calc(-100% - 16px), 100%);
}
.v__array-container {
  margin-bottom: -16px;
  min-height: 64px;
  .v__array-item {
    margin-bottom: 20px;
  }

  .devui-card {
    position: relative;
    .v__array-remove {
      position: absolute;
      top: -16px;
      right: -16px;
      display: none;
    }
    &:hover {
      .v__array-remove {
        display: block;
      }
    }
  }
}
</style>
