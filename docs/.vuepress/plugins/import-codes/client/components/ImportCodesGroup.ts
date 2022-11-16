import { defineComponent, h } from "vue";
import type { Component, VNode } from "vue";

export const ImportCodesGroup = defineComponent({
  name: "ImportCodesGroup",

  setup(props, { slots }) {
    return () => {
      // get children item
      const items = (slots.default?.() || [])
        .filter(
          (vnode) => (vnode.type as Component).name === "ImportCodesGroupItem"
        )
        .map((vnode) => {
          if (vnode.props === null) {
            vnode.props = {};
          }
          return vnode as VNode & { props: Exclude<VNode["props"], null> };
        });
      const activeItem = items.filter((vnode) => vnode.props.active === '')[0];
      // do not render anything if there is no item
      if (!activeItem) {
        return null;
      }

      return h("div", { class: "custom-container import-codes-group" }, [
        activeItem,
      ]);
    };
  },
});
