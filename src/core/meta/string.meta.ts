import type { Meta } from "@/types/meta";
import type { Global } from "@/core/utils/global";
import type { AppContext } from "vue";
import { BaseMeta } from "./base.meta";
class StringMeta extends BaseMeta {
  public open;
  constructor(appContext: AppContext, state: Global, id: string, meta: Meta) {
    super(appContext, state, id, meta);
    this.initValue();

    if (this.meta.value) {
      this.open = this.meta.value.ui?.open || false;
    }
  }

  initValue() {
    if (this._initMetaValue) {
      this.value = this._initMetaValue;
    } else if (this.meta.value.default) {
      this.value = this.meta.value.default;
    }
  }

  setValue(val: any) {
    this._value.value = val || undefined;
  }
}

export { StringMeta };
