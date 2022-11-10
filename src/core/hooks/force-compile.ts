import { watch, type Ref } from "vue";
import type { Global } from "../utils/global";

export function useForceCompile(refs: Ref<any>[], state: Global) {
  watch(refs, () => {
    state.validate._forceCompile();
  });
}
