<!-- 创建对象数组 -->
<template>
  <el-form-item
    :required="ui.showRequired"
    :error="error"
    :size="ui.size"
    :class="[{ 'no-label': !meta.title }]"
  >
    <template #label v-if="meta.title">
      <span class="v__label-text" :title="meta.title">{{ meta.title }}</span>
      <span v-if="ui.optional || oh" class="v__optional">
        {{ ui.optional }}
        <el-tooltip
          v-if="oh.icon"
          v-bind="oh"
          :placement="oh.placement || 'top'"
        >
          <el-icon>
            <component :is="globalProperties.$elIcons[oh.icon]" />
          </el-icon>
        </el-tooltip>
      </span>
    </template>
    <!-- content -->
    <div class="v__array-add">
      <el-button :type="ui.addType" :disabled="addDisabled" @click="addItem">
        {{ ui.addTitle || "添加" }}
      </el-button>
    </div>
    <el-row class="v__array-container" :gutter="16">
      <template v-for="(p, i) in context.ids.value" :key="p.key">
        <el-col :span="arraySpan" class="v__array-item">
          <el-card shadow="never">
            <v-formly-v3-item :id="generateId(i)" :meta="meta.items!" />
            <span
              v-if="showRemove"
              class="v__array-remove"
              @click="removeItem(i)"
            >
              <el-button :icon="Delete" circle />
            </span>
          </el-card>
        </el-col>
      </template>
    </el-row>
  </el-form-item>
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
import VFormlyV3Item from "@/element-plus/ElFormlyItem.vue";
import { Delete } from "@element-plus/icons-vue";

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

<style lang="less" scoped>
:deep(.v__array-container .el-form-item) {
  margin-bottom: 18px;
}
.v__array-add {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(calc(-100% - 12px), 100%);
}
.v__array-container {
  margin-bottom: -10px;
  min-height: 74px;

  .v__array-item {
    margin-bottom: 18px;
  }

  .el-card {
    position: relative;
    overflow: unset;
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
