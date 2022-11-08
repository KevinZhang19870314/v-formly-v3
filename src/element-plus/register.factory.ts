import VObject from "./components/Object.vue";
import VString from "./components/String.vue";
import VBoolean from "./components/Boolean.vue";
import VAutoComplete from "./components/AutoComplete.vue";
import VCheckbox from "./components/Checkbox.vue";
import VDate from "./components/Date.vue";
// import VTime from "./components/Time.vue";
// import VNumber from "./components/Number.vue";
// import VArray from "./components/Array.vue";
// import VText from "./components/Text.vue";
// import VTextarea from "./components/Textarea.vue";
// import VSlider from "./components/Slider.vue";
// import VRate from "./components/Rate.vue";
// import VTag from "./components/Tag.vue";
// import VCascader from "./components/Cascader.vue";
// import VRadio from "./components/Radio.vue";
// import VSelect from "./components/Select.vue";

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
  //   registerFormComponent(app, "v-array", VArray);
  registerFormComponent(app, "v-autocomplete", VAutoComplete);
  registerFormComponent(app, "v-checkbox", VCheckbox);
  registerFormComponent(app, "v-date", VDate);
  //   registerFormComponent(app, "v-number", VNumber);
  //   registerFormComponent(app, "v-integer", VNumber);
  //   registerFormComponent(app, "v-time", VTime);
  //   registerFormComponent(app, "v-text", VText);
  //   registerFormComponent(app, "v-radio", VRadio);
  //   registerFormComponent(app, "v-textarea", VTextarea);
  //   registerFormComponent(app, "v-slider", VSlider);
  //   registerFormComponent(app, "v-rate", VRate);
  //   registerFormComponent(app, "v-tag", VTag);
  //   registerFormComponent(app, "v-select", VSelect);
  //   registerFormComponent(app, "v-cascader", VCascader);
}

export { registerFormComponent, registerBuildInComponents };
