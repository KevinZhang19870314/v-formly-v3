import { FORM_VALUE_CHANGE } from "@/core/utils/consts.js";
import type { AnyObject, Meta } from "@/types/meta";
import type { Global } from "@/core/utils/global";
import useEventBus from "@/core/hooks/event-bus";
import { ref, type AppContext } from "vue";

abstract class BaseMeta {
  public id;
  public state: Global;
  public meta = ref<Meta>({});
  public type;
  public ui = ref<AnyObject>({});
  public error = ref(undefined);
  public _value = ref();
  public _initMetaValue: any;

  public appContext;

  constructor(appContext: AppContext, state: Global, id: string, meta: Meta) {
    if (this.constructor == BaseMeta) {
      throw new Error("Abstract classes can't be instantiated.");
    }

    this.id = id;
    this.state = state;
    this.meta.value = meta;
    this.type = (meta.ui && meta.ui.component) || meta.type;
    this.ui.value = Object.assign({}, state.ui, meta.ui);
    this.appContext = appContext;

    this.error.value = undefined;
    state.context!.addContext(id, this);
    this._value.value = undefined;

    this._initMetaValue = this.getInitMetaValue();
    // 在 Meta 对象实例化后要设置 value 默认值
    // this.initValue();
  }

  abstract initValue(): void;

  abstract setValue(val: any): void;

  get value() {
    return this._value.value;
  }

  set value(val) {
    if (this._value.value === val) return;

    this.setValue(val);

    const emitter = useEventBus(this.appContext);
    emitter.emit(`${FORM_VALUE_CHANGE}-${this.state._formId}`, {
      id: this.id,
      value: this._value.value,
    });

    this.state.updateObjProp(this.state.formData, this.id, this._value.value);
    this.state.validate.runValidationFormItem(this);
  }

  /**
   * v-formly-v3 中通过v-model传入的组件初始值
   * @returns 组件初始值
   */
  getInitMetaValue() {
    const props = this.id.split("/").filter((f: string) => f);
    let curVal = "";
    props.reduce((acc: any, key: string, idx: number) => {
      if (idx === props.length - 1) {
        curVal = acc[key];
      }

      return acc[key] || {};
    }, this.state.formData);

    return curVal;
  }
}

// 注意：此类为基类，不能直接实例化
export { BaseMeta };
