import { createApp } from "vue";
import App from "./App.vue";
import { setupAntd } from "./examples/ant-design-vue";
import * as antIcons from "@ant-design/icons-vue";
import mitt from "mitt";

import { setupStore } from "./examples/store";
import { setupRouter } from "./examples/router";

import VFormly from "./formly";

// import "./assets/main.css";
import "@/style/index.less";

const app = createApp(App);

app.config.globalProperties.emitter = mitt();
setupAntd(app);
Object.keys(antIcons).forEach((key) => {
  app.component(key, (antIcons as any)[key]);
});
app.config.globalProperties.$antIcons = antIcons;
setupStore(app);
setupRouter(app);

app.use(VFormly, {
  ui: {
    errors: {
      required: "必填项",
    },
  },
});

app.mount("#app");
