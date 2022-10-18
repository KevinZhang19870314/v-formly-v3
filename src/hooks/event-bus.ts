import { getCurrentInstance } from "vue";
import type { ComponentInternalInstance } from "vue";

export default function useEventBus() {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance;
  const emitter = appContext.config.globalProperties.emitter;
  return emitter;
}
