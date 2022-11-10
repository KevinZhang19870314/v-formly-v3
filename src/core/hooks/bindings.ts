import { ref, toRef } from "vue";

export function useBindings(props: string[], ui: any) {
  const bindings = ref<any>({});
  const uiKeys = Object.keys(ui.value);
  uiKeys.forEach((key) => {
    if (props.indexOf(key) > -1) {
      bindings.value[key] = toRef(ui.value, key);
    }
  });

  return { bindings };
}
