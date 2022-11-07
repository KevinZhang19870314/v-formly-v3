import { defineClientConfig } from "@vuepress/client";
import type { App } from "vue";
import mitt from "mitt";
import VFormly from "@/formly";

import { registerFormComponent } from "@antdv/a-formly";
import VPassword from "@antdv/examples/components/password/Password.vue";
import VChkInput from "@antdv/examples/components/chk-input/ChkInput.vue";

import "@/style/index.less";

declare const __VFORMLY_LIB__: string;

export default defineClientConfig({
  async enhance({ app }) {
    const lib = __VFORMLY_LIB__;
    app.config.globalProperties.emitter = mitt();
    switch (lib) {
      case "element":
        await initElement(app);
        break;
      default:
        await initAntdV(app);
        break;
    }
    
  },
  setup() {},
  rootComponents: [],
});

async function initAntdV(app: App) {
  const Antd = await import("ant-design-vue");
  const antIcons = await import("@ant-design/icons-vue");
  await import("ant-design-vue/dist/antd.css");
  await import("./styles/reset.scss");
  app.use(Antd);
  Object.keys(antIcons).forEach((key) => {
    app.component(key, (antIcons as any)[key]);
  });
  app.config.globalProperties.$antIcons = antIcons;
  app.use(VFormly, {
    lib: "ant-design-vue",
    ui: {
      errors: {
        required: "必填项",
      },
    },
  });

  registerFormComponent(app, "v-password", VPassword);
  registerFormComponent(app, "v-chkinput", VChkInput);
}

async function initElement(app: App) {
  const ElementPlus = await import("element-plus");
  const elIcons = await import("@element-plus/icons-vue");
  await import("element-plus/dist/index.css");
  await import("./styles/reset.scss");
  app.use(ElementPlus);
  for (const [key, component] of Object.entries(elIcons)) {
    app.component(key, component);
  }
  app.config.globalProperties.$elIcons = elIcons;
  app.use(VFormly, {
    lib: "element-plus",
    ui: {
      errors: {
        required: "必填项",
      },
    },
  });
}
