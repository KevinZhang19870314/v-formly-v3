import { ref, watch } from "vue";

export function useBindings(props: string[], ui: any) {
  const bindings: any = ref({});
  watch(
    () => ui.value,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (cur, pre) => {
      const uiKeys = Object.keys(cur);
      console.log(uiKeys);
      uiKeys.forEach((key) => {
        if (props.indexOf(key) > -1) {
          bindings.value[key] = ui.value[key];
        }
      });
    },
    {
      deep: true,
    }
  );

  return { bindings };
}
