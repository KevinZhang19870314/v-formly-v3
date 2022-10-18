import useCurrentInstance from "@/hooks/current-instance";

/**
 * 注册组件
 *
 * @param {String} id 注册组件的id
 * @param {*} component 需要注册的组件
 */
function registerFormComponent(id: string, component: any) {
  const { appContext } = useCurrentInstance();
  appContext.app.component(id, component);
}

export { registerFormComponent };
