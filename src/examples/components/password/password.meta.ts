import { BaseMeta } from "@/formly";
import type { Meta } from "@/types/meta";
import type { Global } from "@/utils/global";
import type { AppContext } from "vue";
class PasswordMeta extends BaseMeta {
  constructor(appContext: AppContext, state: Global, id: string, meta: Meta) {
    super(appContext, state, id, meta);
  }

  initValue() {
    if (this._initMetaValue) {
      this.value = this._initMetaValue;
    } else if (this.meta.value.default) {
      this.value = this.meta.value.default;
    }
  }

  setValue(val: any) {
    this._value.value = val?.trim() || undefined;
  }
}

export { PasswordMeta };
