import { createApp } from "vue";
import App from "./App.vue";
import { setupAntd } from "./examples/ant-design-vue";
import mitt from "mitt";

import { setupStore } from "./examples/store";
import { setupRouter } from "./examples/router";

import VFormly from "./formly";

// import "./assets/main.css";
import "@/style/index.less";

const app = createApp(App);
app.config.globalProperties.emitter = mitt();
setupAntd(app);
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
