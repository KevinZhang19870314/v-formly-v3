import VObject from "@/components/Object.vue";
import VString from "@/components/String.vue";
import VBoolean from "@/components/Boolean.vue";
import VAutoComplete from "@/components/AutoComplete.vue";

import type { App } from "vue";

/**
 * 注册组件
 *
 * @param {String} id 注册组件的id
 * @param {*} component 需要注册的组件
 */
function registerFormComponent(app: App, id: string, component: any) {
  app.component(id, component);
}

function registerBuildInComponents(app: App) {
  registerFormComponent(app, "v-object", VObject);
  registerFormComponent(app, "v-string", VString);
  registerFormComponent(app, "v-boolean", VBoolean);
  // registerFormComponent("v-array", VArray);
  registerFormComponent(app, "v-autocomplete", VAutoComplete);
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

export { registerFormComponent, registerBuildInComponents };
