import { defineComponent, h } from "vue";

export const ImportCodesGroupItem = defineComponent({
  name: "ImportCodesGroupItem",
  props: {
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props, { slots }) {
    //   <div class="import-codes-group-item">
    //     <slot />
    //   </div>
    return () => h("div", { class: "import-codes-group-item" }, [slots.default?.()]);
  },
});
