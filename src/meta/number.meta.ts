import type { Meta } from "@/types/meta";
import type { Global } from "@/utils/global";
import { isArray, isNumber } from "@/utils/utils";
import { unref, type AppContext } from "vue";
import { BaseMeta } from "./base.meta";

class NumberMeta extends BaseMeta {
  constructor(appContext: AppContext, state: Global, id: string, meta: Meta) {
    super(appContext, state, id, meta);
  }

  initValue() {
    if (this._initMetaValue) {
      this.value = this._initMetaValue;
    } else if (unref(this.meta).default) {
      this.value = unref(this.meta).default;
    }
  }

  setValue(val: any) {
    switch (this.type) {
      case "slider":
        this._value.value = isArray(val) || isNumber(val) ? val : undefined;
        break;
      default:
        this._value.value = val || undefined;
        break;
    }
  }
}

export { NumberMeta };
