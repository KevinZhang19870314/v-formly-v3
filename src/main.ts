import { createApp } from "vue";
import App from "./App.vue";
import mitt from "mitt";
import VFormly from "./formly";
import "@/style/index.less";

// ant-design-vue import
import Antd from "ant-design-vue";
import * as antIcons from "@ant-design/icons-vue";
import { setupStore as setupStoreAntDv } from "@/ant-design-vue/examples/store";
import { setupRouter as setupRouterAntDv } from "@/ant-design-vue/examples/router";
import { registerFormComponent } from "@/ant-design-vue/a-formly";
import VPassword from "@/ant-design-vue/examples/components/password/Password.vue";
import VChkInput from "@/ant-design-vue/examples/components/chk-input/ChkInput.vue";

// element-plus import
import ElementPlus from "element-plus";
import * as elIcons from "@element-plus/icons-vue";
import { setupStore as setupStoreElementPlus } from "@/element-plus/examples/store";
import { setupRouter as setupRouterElementPlus } from "@/element-plus/examples/router";
import { registerFormComponent as registerFormComponentEl } from "@/element-plus/el-formly";
import VPasswordEl from "@/element-plus/examples/components/password/Password.vue";
import VChkInputEl from "@/element-plus/examples/components/chk-input/ChkInput.vue";

const app = createApp(App);
app.config.globalProperties.emitter = mitt();

// ---------------------设置使用库----------------
// const lib = "antdv";
const lib: string = "element";
// ---------------------设置使用库----------------

// ant-design-vue
if (lib === "ant-design-vue") {
  await import("ant-design-vue/dist/antd.css");
  app.use(Antd);
  Object.keys(antIcons).forEach((key) => {
    app.component(key, (antIcons as any)[key]);
  });
  app.config.globalProperties.$antIcons = antIcons;
  setupStoreAntDv(app);
  setupRouterAntDv(app);
  app.use(VFormly, {
    lib: lib,
    ui: {
      errors: {
        required: "必填项",
      },
    },
  });
  registerFormComponent(app, "v-password", VPassword);
  registerFormComponent(app, "v-chkinput", VChkInput);
} else if (lib === "element") {
  await import("element-plus/dist/index.css");
  app.use(ElementPlus);
  for (const [key, component] of Object.entries(elIcons)) {
    app.component(key, component);
  }
  app.config.globalProperties.$elIcons = elIcons;
  setupStoreElementPlus(app);
  setupRouterElementPlus(app);

  app.use(VFormly, {
    lib: lib,
    ui: {
      errors: {
        required: "必填项",
      },
    },
  });

  registerFormComponentEl(app, "v-password", VPasswordEl);
  registerFormComponentEl(app, "v-chkinput", VChkInputEl);
}

app.mount("#app");
