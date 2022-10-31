import { BaseMeta } from "@/formly";
import type { Meta } from "@/types/meta";
import type { Global } from "@/utils/global";
import { ref, type AppContext } from "vue";
class ChkInputMeta extends BaseMeta {
  public _optionsValue: any;
  public _othersValue: any;

  constructor(appContext: AppContext, state: Global, id: string, meta: Meta) {
    super(appContext, state, id, meta);
  }

  initValue() {
    this._optionsValue = ref();
    this._othersValue = ref();
    const val = this._initMetaValue || this.meta.value.default || {};
    this._applyToValue(val.options, val.others);
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
    this._applyToValue(this._optionsValue.value, this._othersValue.value);
  }

  get othersValue() {
    return this._othersValue.value;
  }

  set othersValue(val) {
    this._othersValue.value = val;
    this._applyToValue(this._optionsValue, this._othersValue);
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
