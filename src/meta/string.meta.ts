import type { Meta } from "@/types/meta";
import { BaseMeta } from "./base.meta";
class StringMeta extends BaseMeta {
  public open;
  constructor(state: any, id: string, meta: Meta) {
    super(state, id, meta);

    if (this.meta) {
      this.open = (this.meta.ui && this.meta.ui.open) || false;
    }
  }

  initValue() {
    if (this._initMetaValue) {
      this.value = this._initMetaValue;
    } else if (this.meta.default) {
      this.value = this.meta.default;
    }
  }

  setValue(val: any) {
    this._value = val || undefined;
  }
}

export { StringMeta };
