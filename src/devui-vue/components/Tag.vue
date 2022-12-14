<template>
  <v-wrapper :id="id" :meta="meta">
    <template v-for="tag in tags" :key="tag.value">
      <d-tag
        type="primary"
        :class="{ disabled: tag.disabled || readOnly }"
        :checked="tag.checked"
        @click="() => handleChange(tag, !tag.checked)"
      >
        <span>{{ tag.label }}</span>
      </d-tag>
    </template>
  </v-wrapper>
</template>

<script setup lang="ts" name="v-tag">
import { toRaw, toRef, type ComponentInternalInstance } from "vue";
import { computed, getCurrentInstance, inject, ref, unref, watch } from "vue";
import type { Meta } from "@/types/meta";
import type { Tag } from "@/types/tag";
import type { Global } from "@/core/utils/global";
import { NumberMeta } from "@/core/meta/number.meta";
import VWrapper from "./Wrapper.vue";

const props = defineProps<{ id: string; meta: Meta }>();
const state: Global = inject("state")!;
const { appContext } = getCurrentInstance() as ComponentInternalInstance;

const context = new NumberMeta(appContext, state, props.id, props.meta);
const readOnly = toRef(props.meta, "readOnly");
const tags = ref<Tag[]>([]);
const ui = computed(() => context.ui.value || {});
const value = computed({
  get() {
    return context.value;
  },
  set(val) {
    if (ui.value.range) {
      context.value = val || [];
    } else {
      context.value = val;
    }
  },
});

watch(() => unref(context.meta).enum, updateTags, { immediate: true });

function handleChange(tag: Tag, checked: boolean) {
  if (tag.disabled) return;
  tag.checked = checked;
  updateValue();
  unref(ui).checkedChange?.(checked);
  unref(ui).change?.(toRaw(unref(value)));
}
function updateValue() {
  const newVal = unref(tags)
    .filter((t) => t.checked)
    .map((t) => t.value);
  value.value = newVal.length ? newVal : undefined;
}
function updateTags(val: Tag[] | string[]) {
  let newTags = unref(val);
  if (newTags == null || !Array.isArray(newTags) || newTags.length === 0)
    return;
  // set label
  if (typeof newTags[0] !== "object") {
    newTags = (newTags as string[]).map((item) => ({
      label: item,
      value: item,
    }));
  }
  // set checked
  (newTags as Tag[]).forEach((item) => {
    item.checked = (value.value || []).indexOf(item.value) > -1;
  });
  // set disabled
  (newTags as Tag[]).forEach((item) => (item.disabled = props.meta.readOnly));
  tags.value = newTags as Tag[];
}
</script>
<style lang="less" scoped>
.devui-tag {
  margin-right: 8px;
  :deep(.devui-tag__item) {
    cursor: pointer;
  }
}
.devui-tag.disabled {
  pointer-events: none;
}
</style>
