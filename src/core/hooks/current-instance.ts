import { getCurrentInstance } from "vue";
import type { ComponentInternalInstance } from "vue";
export default function useCurrentInstance() {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance;
  const globalProperties = appContext.config.globalProperties;
  return {
    appContext,
    globalProperties,
  };
}
