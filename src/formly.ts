// import VFormly from "./Formly.vue";
// import VWrapper from "@/components/Wrapper.vue";
// import { BaseMeta } from "@/meta/base.meta";
// import { registerFormComponent } from "@/ant-design-vue/register.factory";
// import { FORM_VALUE_CHANGE } from "@/core/utils/consts";
import type { App } from "vue";
import mitt from "mitt";
import aformly from "./ant-design-vue/a-formly";

const install = function (app: App, options: any) {
  app.config.globalProperties.emitter = mitt();

  if (!options.lib || options.lib === "ant-design-vue") {
    aformly.installFormly(app);
  } else if (options.lib === "element-ui") {
    // TODO
  } else {
    throw new Error("Un support lib");
  }

  // 传入自定义options
  app.config.globalProperties.$VFORMLY_OPTIONS = options;
  return app;
};

export default {
  install,
};
