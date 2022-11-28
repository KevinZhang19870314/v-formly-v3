import { createApp } from "vue";
import App from "./App.vue";
import VFormly from "@/dformly";
import "./index.less";
import { setupStore } from "@/devui-vue/examples/store";
import { setupRouter } from "@/devui-vue/examples/router";
import DevUI from "vue-devui";
import "vue-devui/style.css";
import "@devui-design/icons/icomoon/devui-icon.css";
// TODO: 报错是因为组件库d.ts提示的问题，extend-theme-vue.scss官方还没有完善，目前仅作hack
import { ThemeServiceInit, infinityTheme } from "devui-theme";
import "./extend-theme-vue.scss";

const app = createApp(App);
const lib: string = "devui";

ThemeServiceInit({ infinityTheme }, "infinityTheme");
app.use(DevUI);
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

app.mount("#app");
