import type { App } from "vue";
import { BaseMeta } from "@/core/meta/base.meta";
import { FORM_VALUE_CHANGE } from "@/core/utils/consts";
import VFormly from "./DFormly.vue";
import VWrapper from "./components/Wrapper.vue";
import {
  registerFormComponent,
  registerBuildInComponents,
} from "./register.factory";

const components = [VFormly, VWrapper];

function installFormly(app: App) {
  components.forEach((component) => {
    app.component(component.name, component);
  });
  registerBuildInComponents(app);
}

export default { installFormly };
export { installFormly, BaseMeta, registerFormComponent, FORM_VALUE_CHANGE };
