import type { App } from "vue";
/**
 * 注册组件
 *
 * @param {String} id 注册组件的id
 * @param {*} component 需要注册的组件
 */
declare function registerFormComponent(app: App, id: string, component: any): void;
declare function registerBuildInComponents(app: App): void;
export { registerFormComponent, registerBuildInComponents };
