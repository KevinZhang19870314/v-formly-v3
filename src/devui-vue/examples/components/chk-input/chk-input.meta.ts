import { BaseMeta } from "@/core/meta/base.meta";
import type { Meta } from "@/types/meta";
import type { Global } from "@/core/utils/global";
import { ref, toRaw, unref, type AppContext } from "vue";
class ChkInputMeta extends BaseMeta {
  private _optionsValue = ref();
  private _othersValue = ref();

  constructor(appContext: AppContext, state: Global, id: string, meta: Meta) {
    super(appContext, state, id, meta);
    this.initValue();
  }

  initValue() {
    const val = this._initMetaValue || this.meta.value.default || {};
    this._applyToValue(toRaw(unref(val).options), val.others);
  }

  setValue(val: any) {
    this._value.value = val || undefined;

    this._optionsValue.value = (val && val.options) || [];
    this._othersValue.value = (val && val.others) || undefined;
  }

  get optionsValue() {
    return this._optionsValue?.value;
  }

  set optionsValue(val) {
    this._optionsValue.value = val;
    this._applyToValue(val, this.othersValue);
  }

  get othersValue() {
    return this._othersValue.value;
  }

  set othersValue(val) {
    this._othersValue.value = val;
    this._applyToValue(toRaw(this.optionsValue), val);
  }

  private _applyToValue(options: any, others: any) {
    if ((!options || options.length === 0) && !others) {
      this.value = undefined;
      return;
    }

    this.value = { options, others };
  }
}

export { ChkInputMeta };
