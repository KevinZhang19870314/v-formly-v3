import { createApp } from "vue";
import App from "./App.vue";
import mitt from "mitt";
import VFormly from "./formly";
import "@/style/index.less";

// ant-design-vue import
import { setupAntd } from "@/ant-design-vue/examples/ant-design-vue";
import * as antIcons from "@ant-design/icons-vue";
import { setupStore } from "@/ant-design-vue/examples/store";
import { setupRouter } from "@/ant-design-vue/examples/router";
import { registerFormComponent } from "@/ant-design-vue/a-formly";
import VPassword from "@/ant-design-vue/examples/components/password/Password.vue";
import VChkInput from "@/ant-design-vue/examples/components/chk-input/ChkInput.vue";

const app = createApp(App);
app.config.globalProperties.emitter = mitt();
const lib = "ant-design-vue";

// ant-design-vue
if (lib === "ant-design-vue") {
  setupAntd(app);
  Object.keys(antIcons).forEach((key) => {
    app.component(key, (antIcons as any)[key]);
  });
  app.config.globalProperties.$antIcons = antIcons;
  setupStore(app);
  setupRouter(app);

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
} else if (lib === "element-ui") {
  // TODO: element-ui
}

app.mount("#app");
