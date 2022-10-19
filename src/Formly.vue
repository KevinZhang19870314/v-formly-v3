<template>
  <div class="v__formly">
    <a-form
      class="v"
      :layout="layout"
      :class="{
        v__inline: layout === 'inline',
        v__horizontal: layout === 'horizontal',
      }"
    >
      <v-formly-item id="/" :meta="objectMeta">
        <template v-for="slotName in slotsName" v-slot:[slotName]="slotProps">
          <slot :name="slotName" v-bind="{ ...slotProps }"></slot>
        </template>
      </v-formly-item>

      <template v-if="button === 'default'">
        <a-form :wrapperCol="wrapperCol" class="v__default-submit-button">
          <a-space>
            <a-button type="danger" @click="clearForm"> 重置 </a-button>
            <a-button type="primary" @click="submitForm" :loading="loading">
              提交
            </a-button>
          </a-space>
        </a-form>
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
    </a-form>
  </div>
</template>

<script setup lang="ts">
import VFormlyItem from "./FormlyItem.vue";
import { MetaType, type Meta } from "./types/meta";
import { FormItemContext } from "./utils/context";
import { Global } from "./utils/global";
import { ValidateFactory } from "./utils/validate.factory";
import { deepClone } from "./utils/utils";
import {
  computed,
  getCurrentInstance,
  onBeforeUnmount,
  provide,
  ref,
  watch,
  type ComponentInternalInstance,
} from "vue";
import { useSlots } from "./hooks/slots";
import useEventBus from "./hooks/event-bus";

const props = withDefaults(
  defineProps<{
    modelValue?: any;
    layout?: string;
    button?: string;
    meta: Meta;
  }>(),
  {
    modelValue: "test",
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

    console.log("cur modelvaluechange", cur);
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
  globalInstance.layout = props.layout;
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
function getContext(id: string) {
  return globalInstance.context.getContext(id);
}

async function validate() {
  return await globalInstance.validate.runValidateForm();
}

function reset(data: any) {
  const context = globalInstance.context.getContext("/");
  if (context) {
    context.value = data;
    emit("update:modelValue", globalInstance.formData);
  }
}

function clearForm() {
  emit("form-reset", deepClone(globalInstance.formData));
  reset({});
}

async function submitForm() {
  loading.value = true;
  const valid = await validate();
  loading.value = false;
  emit("form-submit", {
    valid,
    data: valid ? deepClone(globalInstance.formData) : undefined,
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
export default { name: "v-formly" };
</script>

<style scoped lang="less"></style>
