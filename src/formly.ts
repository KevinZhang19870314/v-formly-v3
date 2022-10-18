import VFormly from "./Formly.vue";
import VWrapper from "@/components/Wrapper.vue";
// import { componentMixin } from "@/mixin/component.mixin.js";
import { BaseMeta } from "@/meta/base.meta.js";
import { registerFormComponent } from "@/utils/register.factory.js";
import { FORM_VALUE_CHANGE } from "@/utils/consts.js";
import type { App } from "vue";

const components = [VFormly, VWrapper];

const install = function (app: App, options: any) {
  components.forEach((component) => {
    app.component(component.name, component);
  });

  // 传入自定义options
  app.config.globalProperties.$VFORMLY_OPTIONS = options;
  return app;
};

export {
  install,
  BaseMeta,
  //   componentMixin,
  registerFormComponent,
  FORM_VALUE_CHANGE,
};

export default {
  install,
};
