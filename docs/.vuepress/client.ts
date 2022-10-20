import { defineClientConfig } from '@vuepress/client'
import mitt from "mitt";
import * as antIcons from "@ant-design/icons-vue";
import { setupAntd } from "../../src/examples/ant-design-vue";
import VFormly from "../../src/formly";

import "../../src/style/index.less";
import './styles/reset.scss'

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
  },
  setup() {},
  rootComponents: [],
})