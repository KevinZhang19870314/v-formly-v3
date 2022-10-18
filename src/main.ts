import { createApp } from "vue";
import App from "./App.vue";
import { setupAntd } from "./examples/ant-design-vue";

import { setupStore } from "./examples/store";
import { setupRouter } from "./examples/router";

// import "./assets/main.css";
import "@/style/index.less";

const app = createApp(App);
setupAntd(app);
setupStore(app);
setupRouter(app);
app.mount("#app");
