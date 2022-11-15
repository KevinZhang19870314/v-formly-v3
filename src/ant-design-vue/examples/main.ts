import { createApp } from "vue";
import App from "./App.vue";
import VFormly from "@/aformly";
import "@/style/index.less";

// ant-design-vue import
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import * as antIcons from "@ant-design/icons-vue";
import { setupStore as setupStoreAntDv } from "@/ant-design-vue/examples/store";
import { setupRouter as setupRouterAntDv } from "@/ant-design-vue/examples/router";
import { registerFormComponent } from "@/ant-design-vue/a-formly";
import VPassword from "@/ant-design-vue/examples/components/password/Password.vue";
import VChkInput from "@/ant-design-vue/examples/components/chk-input/ChkInput.vue";

const app = createApp(App);

// ---------------------设置使用库----------------
const lib: string = "antdv";
// ---------------------设置使用库----------------

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

app.mount("#app");
