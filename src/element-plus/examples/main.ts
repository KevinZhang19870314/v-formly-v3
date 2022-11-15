import { createApp } from "vue";
import App from "./App.vue";
import VFormly from "@/elformly";
import "@/style/index.less";

// element-plus import
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as elIcons from "@element-plus/icons-vue";
import { setupStore } from "@/element-plus/examples/store";
import { setupRouter } from "@/element-plus/examples/router";
import { registerFormComponent } from "@/element-plus/el-formly";
import VPassword from "@/element-plus/examples/components/password/Password.vue";
import VChkInput from "@/element-plus/examples/components/chk-input/ChkInput.vue";

const app = createApp(App);

// ---------------------设置使用库----------------
const lib: string = "element";
// ---------------------设置使用库----------------

app.use(ElementPlus);
for (const [key, component] of Object.entries(elIcons)) {
  app.component(key, component);
}
app.config.globalProperties.$elIcons = elIcons;
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

app.mount("#app");
