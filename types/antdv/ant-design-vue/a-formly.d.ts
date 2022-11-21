import { BaseMeta } from '../core/meta/base.meta';
import { registerFormComponent } from "./register.factory";
import { FORM_VALUE_CHANGE } from '../core/utils/consts';
import type { App } from "vue";
declare function installFormly(app: App): void;
export { installFormly, BaseMeta, registerFormComponent, FORM_VALUE_CHANGE };
declare const _default: {
    installFormly: typeof installFormly;
};
export default _default;
