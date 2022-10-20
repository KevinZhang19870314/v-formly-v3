import { UUID } from "@/utils/utils";
import useCurrentInstance from "@/hooks/current-instance";
import { ref } from "vue";
import type { FormItemContext } from "./context";

class Global {
  public _formId = UUID(4);
  public _ignoreErrorIds = [];

  private _context: FormItemContext | undefined;
  private _layout = "horizontal";
  private _ajvOptions = {
    allErrors: true,
    strict: false,
    loopEnum: 50,
  };
  public _formData = ref({});
  private _meta = {};
  private _ui = {
    ingoreKeywords: ["type", "enum"],
    spanLabel: 5,
    spanControl: 19,
    grid: {
      gutter: 36,
      span: 24,
    },
    errors: {
      required: "必填项",
    },
  };
  private _validate: any;

  constructor() {
    this._applyUseOptions();
  }

  get context() {
    return this._context;
  }

  set context(val) {
    this._context = val;
  }

  get layout() {
    return this._layout;
  }

  set layout(val) {
    this._layout = val;
  }

  get ajvOptions() {
    return this._ajvOptions;
  }

  set ajvOptions(val) {
    this._ajvOptions = val;
  }

  get formData() {
    return this._formData.value;
  }

  set formData(val) {
    this._formData.value = val;
  }

  get meta() {
    return this._meta;
  }

  set meta(val) {
    this._meta = val;
  }

  get ui() {
    return this._ui;
  }

  set ui(val) {
    this._ui = Object.assign({}, this._ui, val);
  }

  get validate() {
    return this._validate;
  }

  set validate(val) {
    this._validate = val;
  }

  updateObjProp(obj: any, propPath: string, value: any) {
    const [head, ...rest] = propPath.split("/").filter((f) => f);

    if (rest.length) {
      this.updateObjProp(obj[head], rest.join("/"), value);
    } else {
      if (obj) {
        obj[head] = value;
      }
    }
  }

  _applyUseOptions() {
    const { globalProperties } = useCurrentInstance();
    const options = globalProperties.$VFORMLY_OPTIONS;
    if (!options || typeof options !== "object") return;

    this.ui = options.ui;
  }
}

export { Global };
