import type { Meta } from "@/types/meta";
import type { Global } from "@/utils/global";
import type { AppContext } from "vue";
import { BaseMeta } from "./base.meta";

class BooleanMeta extends BaseMeta {
  constructor(appContext: AppContext, state: Global, id: string, meta: Meta) {
    super(appContext, state, id, meta);
  }

  initValue() {
    if (typeof this._initMetaValue !== "undefined") {
      this.value = this._initMetaValue;
    } else if (typeof this.meta.value.default === "boolean") {
      this.value = this.meta.value.default as any;
    }
  }

  setValue(val: any) {
    this._value.value = val || false;
  }
}

export { BooleanMeta };
