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
import { registerFormComponent } from "./utils/register.factory";
import { ValidateFactory } from "./utils/validate.factory";
import { deepClone } from "./utils/utils";
import { computed, provide, ref } from "vue";
import { useSlots } from "./hooks/slots";

import VObject from "./components/Object.vue";
import VString from "./components/String.vue";

const props = withDefaults(
  defineProps<{
    modelValue?: Object;
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
let formData = {};
let loading = ref(false);

const globalInstance = new Global();
provide("state", globalInstance);
const { slotsName } = useSlots(props.meta);
onCreated();

const wrapperCol = computed(() => {
  const ui = Object.assign({}, globalInstance.ui);
  return props.layout === "vertical"
    ? null
    : { span: ui.spanControl, offset: ui.spanLabel };
});

function onCreated() {
  globalInstance.layout = props.layout;
  objectMeta = Object.assign({}, objectMeta, props.meta);
  formData = Object.assign({}, formData, props.modelValue);

  registerBuildInComponents();

  globalInstance.meta = objectMeta;
  globalInstance.formData = formData;
  initFormData(globalInstance.formData, props.meta.properties);

  globalInstance.context = new FormItemContext();

  globalInstance.validate = new ValidateFactory(globalInstance);
}

function registerBuildInComponents() {
  registerFormComponent("v-object", VObject);
  registerFormComponent("v-string", VString);
  // registerFormComponent("v-boolean", VBoolean);
  // registerFormComponent("v-array", VArray);
  // registerFormComponent("v-autocomplete", VAutoComplete);
  // registerFormComponent("v-checkbox", VCheckbox);
  // registerFormComponent("v-date", VDate);
  // registerFormComponent("v-number", VNumber);
  // registerFormComponent("v-integer", VNumber);
  // registerFormComponent("v-time", VTime);
  // registerFormComponent("v-text", VText);
  // registerFormComponent("v-radio", VRadio);
  // registerFormComponent("v-textarea", VTextarea);
  // registerFormComponent("v-slider", VSlider);
  // registerFormComponent("v-rate", VRate);
  // registerFormComponent("v-tag", VTag);
  // registerFormComponent("v-select", VSelect);
  // registerFormComponent("v-cascader", VCascader);
}

function initFormData(formData: any, properties: any) {
  Object.keys(properties).forEach((key) => {
    const meta = properties[key];
    if (meta.type === "null") return;
    switch (meta.type) {
      case MetaType.Object:
        formData[key] = formData[key] || {};
        initFormData(formData[key], meta.properties);
        break;
      case MetaType.Array:
        formData[key] = formData[key] || [];
        break;
      case MetaType.Boolean:
        break;
      default:
        formData[key] = formData[key] || undefined;
        break;
    }
  });
}

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
    emit("update:modelValue", formData);
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

// return {
//   name,
//   getContext,
//   validate,
//   reset,
//   clearForm,
//   submitForm,
// };
</script>

<script lang="ts">
export default {
  name: "v-formly",
};
</script>

<style scoped lang="less"></style>
