import { defineClientConfig } from "@vuepress/client";
import mitt from "mitt";
import * as antIcons from "@ant-design/icons-vue";
import { setupAntd } from "@/examples/ant-design-vue";
import VFormly, { registerFormComponent } from "@/formly";
import VPassword from "@/examples/components/password/Password.vue";
import VChkInput from "@/examples/components/chk-input/ChkInput.vue";

import "@/style/index.less";
import "./styles/reset.scss";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    setupAntd(app);
    app.config.globalProperties.emitter = mitt();
    Object.keys(antIcons).forEach((key) => {
      app.component(key, (antIcons as any)[key]);
    });
    app.config.globalProperties.$antIcons = antIcons;
    app.use(VFormly, {
      ui: {
        errors: {
          required: "必填项",
        },
      },
    });
    registerFormComponent(app, "v-password", VPassword);
    registerFormComponent(app, "v-chkinput", VChkInput);
  },
  setup() {},
  rootComponents: [],
});
