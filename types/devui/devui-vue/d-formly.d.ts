import type { App } from "vue";
import { BaseMeta } from '../core/meta/base.meta';
import { FORM_VALUE_CHANGE } from '../core/utils/consts';
import { registerFormComponent } from "./register.factory";
declare function installFormly(app: App): void;
declare const _default: {
    installFormly: typeof installFormly;
};
export default _default;
export { installFormly, BaseMeta, registerFormComponent, FORM_VALUE_CHANGE };
