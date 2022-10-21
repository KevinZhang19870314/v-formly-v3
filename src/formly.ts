import VFormly from "./Formly.vue";
import VWrapper from "@/components/Wrapper.vue";
import { BaseMeta } from "@/meta/base.meta";
import {
  registerFormComponent,
  registerBuildInComponents,
} from "@/utils/register.factory";
import { FORM_VALUE_CHANGE } from "@/utils/consts";
import type { App } from "vue";

const components = [VFormly, VWrapper];

const install = function (app: App, options: any) {
  components.forEach((component) => {
    app.component(component.name, component);
  });

  registerBuildInComponents(app);

  // 传入自定义options
  app.config.globalProperties.$VFORMLY_OPTIONS = options;
  return app;
};

export { install, BaseMeta, registerFormComponent, FORM_VALUE_CHANGE };

export default {
  install,
};
