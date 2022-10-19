import type { AppContext } from "vue";

export default function useEventBus(appContext: AppContext) {
  const emitter = appContext.config.globalProperties.emitter;
  return emitter;
}
