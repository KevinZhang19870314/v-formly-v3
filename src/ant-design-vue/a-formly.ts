import VFormly from "./AFormly.vue";
import VWrapper from "./components/Wrapper.vue";
import { BaseMeta } from "@/core/meta/base.meta";
import {
  registerFormComponent,
  registerBuildInComponents,
} from "./register.factory";
import { FORM_VALUE_CHANGE } from "@/core/utils/consts";
import type { App } from "vue";

const components = [VFormly, VWrapper];

function installFormly(app: App) {
  components.forEach((component) => {
    app.component(component.name, component);
  });
  registerBuildInComponents(app);
}

export { installFormly, BaseMeta, registerFormComponent, FORM_VALUE_CHANGE };

export default {
  installFormly,
};
