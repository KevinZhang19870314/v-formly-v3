<template>
  <div class="v__formly">
    <d-form
      class="v"
      :layout="layout"
      :label-size="'lg'"
      :label-align="'end'"
      :message-type="'text'"
      :class="{
        v__inline: layout === 'inline',
        v__horizontal: layout === 'horizontal',
      }"
    >
      <v-formly-v3-item id="/" :meta="objectMeta">
        <template v-for="slotName in slotsName" v-slot:[slotName]="slotProps">
          <slot :name="slotName" v-bind="{ ...slotProps }"></slot>
        </template>
      </v-formly-v3-item>
      <!-- submit button -->
      <template v-if="button === 'default'">
        <d-form-operation class="v__default-submit-button">
          <d-button
            variant="solid"
            color="danger"
            @click="clearForm"
            style="margin-right: 8px"
          >
            重置
          </d-button>
          <d-button
            variant="solid"
            color="primary"
            @click="submitForm"
            :loading="loading"
          >
            提交
          </d-button>
        </d-form-operation>
      </template>
      <template v-else-if="button === 'custom'">
        <slot
          name="button"
          v-bind:loading="loading"
          v-bind:clearForm="clearForm"
          v-bind:submitForm="submitForm"
        ></slot>
      </template>
      <template v-else></template>
    </d-form>
  </div>
</template>

<script setup lang="ts" name="v-formly-v3">
import {
  computed,
  getCurrentInstance,
  onBeforeUnmount,
  provide,
  ref,
  toRaw,
  toRef,
  watch,
  type ComponentInternalInstance,
} from "vue";
import { MetaType, type Meta } from "@/types/meta";
import type { ObjectMeta } from "@/core/meta/object.meta";
import { FormItemContext } from "@/core/utils/context";
import { Global } from "@/core/utils/global";
import { ValidateFactory } from "@/core/utils/validate.factory";
import { useSlots } from "@/core/hooks/slots";
import useEventBus from "@/core/hooks/event-bus";
import VFormlyV3Item from "./DFormlyItem.vue";

const props = withDefaults(
  defineProps<{
    modelValue?: any;
    layout?: string;
    button?: string;
    meta: Meta;
  }>(),
  {
    layout: "horizontal",
  }
);
const emit = defineEmits<{
  (e: "update:modelValue", modelValue: Object): void;
  (e: "form-reset", value: Object): void;
  (e: "form-submit", value: Object): void;
}>();

if (!props.meta || typeof props.meta.properties === "undefined")
  throw new Error(`Invalid Schema`);

let objectMeta: Meta = { type: MetaType.Object };
let loading = ref(false);

const globalInstance = new Global();
provide("state", globalInstance);
const { slotsName } = useSlots(props.meta);
const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const emitter = useEventBus(appContext);
onCreated();

const wrapperCol = computed(() => {
  const ui = Object.assign({}, globalInstance.ui);
  return props.layout === "vertical"
    ? null
    : { span: ui.spanControl, offset: ui.spanLabel };
});

watch(
  () => props.modelValue,
  (cur, pre) => {
    if (JSON.stringify(cur) === JSON.stringify(pre)) return;

    reset(cur);
  },
  {
    deep: false,
  }
);

watch(
  () => globalInstance.formData,
  (cur, pre) => {
    emit("update:modelValue", cur);
  },
  {
    deep: true,
  }
);

function onCreated() {
  globalInstance.layout = toRef(props, "layout");
  objectMeta = Object.assign({}, objectMeta, props.meta);

  globalInstance.meta = objectMeta;
  globalInstance.formData = Object.assign({}, props.modelValue);
  initFormData(globalInstance.formData, props.meta.properties);

  globalInstance.context = new FormItemContext();
  globalInstance.validate = new ValidateFactory(appContext, globalInstance);
}

function initFormData(fData: any, properties: any) {
  Object.keys(properties).forEach((key) => {
    const meta = properties[key];
    if (meta.type === "null") return;
    switch (meta.type) {
      case MetaType.Object:
        fData[key] = fData[key] || {};
        initFormData(fData[key], meta.properties);
        break;
      case MetaType.Array:
        fData[key] = fData[key] || [];
        break;
      case MetaType.Boolean:
        break;
      default:
        fData[key] = fData[key] || undefined;
        break;
    }
  });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getContext<T>(id: string) {
  return globalInstance.context!.getContext<T>(id);
}

async function validate() {
  return await globalInstance.validate.runValidateForm();
}

function reset(data: any) {
  const context = globalInstance.context!.getContext<ObjectMeta>("/");
  if (context) {
    context.value = data;
    emit("update:modelValue", globalInstance.formData);
  }
}

function clearForm() {
  emit("form-reset", toRaw(globalInstance.formData));
  reset({});
}

async function submitForm() {
  loading.value = true;
  const valid = await validate();
  loading.value = false;
  emit("form-submit", {
    valid,
    data: valid ? toRaw(globalInstance.formData) : undefined,
  });
}

onBeforeUnmount(() => {
  emitter.all.clear();
});

defineExpose({
  getContext,
  validate,
  reset,
  clearForm,
  submitForm,
});
</script>

<script lang="ts">
export default { name: "v-formly-v3" };
</script>

<style scoped lang="less"></style>
