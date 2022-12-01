import type { App } from "vue";
import mitt from "mitt";
import dformly from "./devui-vue/d-formly";
import "@/style/index.less";

const install = function (app: App, options: any) {
  app.config.globalProperties.emitter = mitt();

  if (!options.lib || options.lib === "devui") {
    dformly.installFormly(app);
  } else {
    throw new Error("Unsupport lib");
  }

  // 传入自定义options
  app.config.globalProperties.$VFORMLY_OPTIONS = options;
  return app;
};

export default { install };
export * from "./devui-vue/d-formly";
