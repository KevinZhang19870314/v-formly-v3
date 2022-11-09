var Qe = Object.defineProperty;
var Xe = (n, o, l) => o in n ? Qe(n, o, { enumerable: !0, configurable: !0, writable: !0, value: l }) : n[o] = l;
var A = (n, o, l) => (Xe(n, typeof o != "symbol" ? o + "" : o, l), l);
import Ze from "mitt";
import { defineComponent as I, ref as T, inject as E, computed as b, getCurrentInstance as V, openBlock as y, createElementBlock as S, normalizeStyle as ve, unref as e, createBlock as C, resolveDynamicComponent as me, createSlots as F, renderList as H, withCtx as v, renderSlot as O, normalizeProps as Z, guardReactiveProps as ee, createCommentVNode as z, provide as Re, watch as ue, toRef as pe, onBeforeUnmount as fe, resolveComponent as $, createVNode as w, normalizeClass as te, createTextVNode as W, Fragment as q, toRaw as re, createElementVNode as J, toDisplayString as U, mergeProps as D, isRef as M, nextTick as et, onMounted as Te } from "vue";
import tt from "ajv";
import { Input as nt, Switch as at, AutoComplete as ot, CheckboxGroup as lt, RangePicker as st, DatePicker as it, TimeRangePicker as ut, TimePicker as rt, InputNumber as ct, Textarea as dt, Slider as mt, Rate as ft, Cascader as vt, RadioGroup as pt, Select as ht } from "ant-design-vue";
import { ElInput as we, ElSwitch as Ne, ElAutocomplete as Ve, ElCheckboxGroup as Ie, ElCheckbox as ye, ElDatePicker as Ee, ElTimePicker as je, ElInputNumber as Se, ElSlider as De, ElRate as Me, ElRadioGroup as Pe, ElSelect as Ae } from "element-plus";
function ne(n) {
  return n.config.globalProperties.emitter;
}
var Y = /* @__PURE__ */ ((n) => (n.Object = "object", n.Array = "array", n.Boolean = "boolean", n.Integer = "integer", n))(Y || {});
function ce(n) {
  const o = [], l = "slotName";
  return n && !n.type && (n.type = Y.Object), be(n, o, l), { slotsName: o };
}
function be(n, o, l) {
  switch (n.type) {
    case Y.Object:
      Object.keys(n.properties).forEach((i) => {
        const a = n.properties[i];
        be(a, o, l);
      });
      break;
    case Y.Array:
      Object.keys(n.items.properties).forEach((i) => {
        const a = n.items.properties[i];
        be(a, o, l);
      });
      break;
    default:
      if (n.ui) {
        const i = Object.keys(n.ui).filter(
          (a) => a.startsWith(l)
        );
        i && i.length > 0 && i.forEach((a) => {
          o.push(n.ui[a]);
        });
      }
      break;
  }
}
function Ue() {
  return { visibleIf: gt };
}
function gt(n, o, l, i) {
  if (!o.ui || !o.ui.visibleIf)
    return l;
  const a = Object.keys(o.ui.visibleIf)[0], u = o.ui.visibleIf[a];
  return i = i || {}, typeof u != "function" || a !== i.id ? l : u.call(null, n, i.id, i.value);
}
const xe = "form-value-change", le = "form-error-change", ke = /* @__PURE__ */ I({
  __name: "AFormlyItem",
  props: {
    id: null,
    show: { type: Boolean, default: !0 },
    meta: null
  },
  setup(n) {
    const o = n;
    let l = T(!0);
    const { slotsName: i } = ce(o.meta), a = E("state"), u = b(() => `v-${o.meta.ui && o.meta.ui.component || o.meta.type}`), t = b(() => a.layout);
    s();
    function s() {
      if (!o.meta.type)
        throw new Error(
          "Form item type must be one of these: number, string, boolean, array, object"
        );
      l.value = o.show, p(l.value, o.id);
      const { visibleIf: d } = Ue(), { appContext: c } = V();
      ne(c).on(`${xe}-${a._formId}`, (r) => {
        let m = d(a.context, o.meta, l.value, {
          id: r.id,
          value: r.value
        });
        m !== l.value && (l.value = m, p(l.value, o.id));
      });
    }
    function p(d, c) {
      d ? a._ignoreErrorIds = a._ignoreErrorIds.filter((f) => f !== c) : a._ignoreErrorIds.indexOf(c) === -1 && a._ignoreErrorIds.push(c);
    }
    return (d, c) => (y(), S("div", {
      style: ve({ display: e(t) === "inline" ? "inline-block" : "block" })
    }, [
      e(l) ? (y(), C(me(e(u)), {
        key: 0,
        id: n.id,
        meta: n.meta
      }, F({ _: 2 }, [
        H(e(i), (f) => ({
          name: f,
          fn: v((r) => [
            O(d.$slots, f, Z(ee({ ...r })))
          ])
        }))
      ]), 1032, ["id", "meta"])) : z("", !0)
    ], 4));
  }
});
class Be {
  constructor() {
    A(this, "_map", /* @__PURE__ */ new Map());
  }
  addContext(o, l) {
    this._map.set(o, l);
  }
  removeContext(o) {
    this._map.delete(o);
  }
  getContext(o) {
    return this._map.get(o);
  }
  getContexts() {
    return this._map;
  }
  getMap() {
    return this._map;
  }
}
function Le(n = 8, o = 10) {
  const l = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), i = o || l.length, a = [];
  if (n)
    for (let u = 0; u < n; u++)
      a[u] = l[0 | Math.random() * i];
  else {
    let u;
    a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4";
    for (let t = 0; t < 36; t++)
      a[t] || (u = 0 | Math.random() * 16, a[t] = l[t == 19 ? u & 3 | 8 : u]);
  }
  return a.join("");
}
function _e(n) {
  if (n === void 0)
    return;
  if (n === null)
    return null;
  const o = Object.assign({}, n);
  return Object.keys(o).forEach(
    (l) => o[l] = typeof n[l] == "object" ? _e(n[l]) : n[l]
  ), Array.isArray(n) ? (o.length = n.length, Array.from(o)) : o;
}
const yt = Array.isArray, ze = (n) => typeof n == "function", Oe = (n) => typeof n == "number";
function he() {
  const { appContext: n } = V(), o = n.config.globalProperties;
  return {
    appContext: n,
    globalProperties: o
  };
}
class He {
  constructor() {
    A(this, "_formId", Le(4));
    A(this, "_ignoreErrorIds", []);
    A(this, "_context");
    A(this, "_layout", T("horizontal"));
    A(this, "_ajvOptions", {
      allErrors: !0,
      strict: !1,
      loopEnum: 50
    });
    A(this, "_formData", T({}));
    A(this, "_meta", {});
    A(this, "_ui", {
      ingoreKeywords: ["type", "enum"],
      spanLabel: 5,
      spanControl: 19,
      grid: {
        gutter: 36,
        span: 24
      },
      errors: {
        required: "\u5FC5\u586B\u9879"
      }
    });
    A(this, "_validate");
    this._applyUseOptions();
  }
  get context() {
    return this._context;
  }
  set context(o) {
    this._context = o;
  }
  get layout() {
    return this._layout;
  }
  set layout(o) {
    this._layout = o;
  }
  get ajvOptions() {
    return this._ajvOptions;
  }
  set ajvOptions(o) {
    this._ajvOptions = o;
  }
  get formData() {
    return this._formData.value;
  }
  set formData(o) {
    this._formData.value = o;
  }
  get meta() {
    return this._meta;
  }
  set meta(o) {
    this._meta = o;
  }
  get ui() {
    return this._ui;
  }
  set ui(o) {
    this._ui = Object.assign({}, this._ui, o);
  }
  get validate() {
    return this._validate;
  }
  set validate(o) {
    this._validate = o;
  }
  updateObjProp(o, l, i) {
    const [a, ...u] = l.split("/").filter((t) => t);
    u.length ? this.updateObjProp(o[a], u.join("/"), i) : o && (o[a] = i);
  }
  _applyUseOptions() {
    const { globalProperties: o } = he(), l = o.$VFORMLY_OPTIONS;
    !l || typeof l != "object" || (this.ui = l.ui);
  }
}
class qe {
  constructor(o, l) {
    A(this, "state");
    A(this, "_ajv");
    A(this, "_validate");
    A(this, "appContext");
    this.state = l, this._ajv = new tt(l.ajvOptions), this._validate = null, this.appContext = o;
  }
  async runValidateForm() {
    const { valid: o, errors: l } = this._isAjvValid(), a = this.state.context.getContexts().values();
    let u = !0;
    for (const t of a)
      u = await this._validation(t, o, l) && u;
    return u;
  }
  async runValidationFormItem(o) {
    const { valid: l, errors: i } = this._isAjvValid();
    return await this._validation(o, l, i);
  }
  _ajvValidate(o) {
    return this._validate ? this._validate : (this._validate = this._ajv.compile(o), this._validate);
  }
  _getAjvError(o, l) {
    let i;
    for (let a = 0; a < l.length; a++) {
      const u = l[a], t = this._getId(u);
      if (o === t) {
        i = u;
        break;
      }
    }
    return i;
  }
  _isAjvValid() {
    const o = this._ajvValidate(this.state.meta);
    return { valid: o(this.state.formData || {}), errors: o.errors };
  }
  async _validation(o, l, i) {
    let a = [];
    const u = `${le}-${this.state._formId}`, t = ne(this.appContext);
    if (l)
      return t.emit(u, {
        id: o.id,
        error: void 0
      }), !0;
    {
      const s = this._getCustomError(o), p = await this._getCustomAsyncError(o), d = [...s, ...p];
      this._replaceWithDefaultErrors(o, i), this._replaceWithCustomErrors(o.id, i, d);
      const c = this.state.ui.ingoreKeywords || [];
      a = i.filter(
        (r) => c.indexOf(r.keyword) === -1
      ), a = this._removeIgnoreErrors(a);
      const f = this._getAjvError(o.id, a);
      return t.emit(u, {
        id: o.id,
        error: f
      }), !f;
    }
  }
  _getCustomError(o) {
    var i, a;
    const l = (a = (i = o.ui) == null ? void 0 : i.value) == null ? void 0 : a.validator;
    return l ? l(o.value) : [];
  }
  async _getCustomAsyncError(o) {
    var i, a;
    const l = (a = (i = o.ui) == null ? void 0 : i.value) == null ? void 0 : a.validatorAsync;
    return l ? await l(o.value) : [];
  }
  _replaceWithDefaultErrors(o, l) {
    var t, s;
    if (!l || l.length === 0)
      return;
    const i = ((s = (t = o.ui) == null ? void 0 : t.value) == null ? void 0 : s.errors) || {}, a = Object.assign({}, this.state.ui.errors, i), u = Object.keys(a);
    u && u.length > 0 && l.forEach((p) => {
      u.indexOf(p.keyword) > -1 && (p.message = a[p.keyword]);
    });
  }
  _replaceWithCustomErrors(o, l, i) {
    i.forEach((a) => {
      const u = l.find(
        (t) => t.keyword === a.keyword && this._getId(t) === o
      );
      u && (u.message = a.message);
    });
  }
  _removeIgnoreErrors(o) {
    const l = this.state._ignoreErrorIds;
    return !l || l.length === 0 ? o : o.filter((a) => l.indexOf(this._getId(a)) === -1);
  }
  _getId(o) {
    return o.params && o.params.missingProperty ? `${o.instancePath ? o.instancePath : ""}/${o.params.missingProperty}` : `${o.instancePath}`;
  }
}
const bt = { class: "v__formly" }, _t = { name: "v-formly-v3" }, xt = /* @__PURE__ */ I({
  ..._t,
  props: {
    modelValue: null,
    layout: { default: "horizontal" },
    button: null,
    meta: null
  },
  emits: ["update:modelValue", "form-reset", "form-submit"],
  setup(n, { expose: o, emit: l }) {
    const i = n;
    if (!i.meta || typeof i.meta.properties > "u")
      throw new Error("Invalid Schema");
    let a = { type: Y.Object }, u = T(!1);
    const t = new He();
    Re("state", t);
    const { slotsName: s } = ce(i.meta), { appContext: p } = V(), d = ne(p);
    f();
    const c = b(() => {
      const k = Object.assign({}, t.ui);
      return i.layout === "vertical" ? null : { span: k.spanControl, offset: k.spanLabel };
    });
    ue(
      () => i.modelValue,
      (k, x) => {
        JSON.stringify(k) !== JSON.stringify(x) && g(k);
      },
      {
        deep: !1
      }
    ), ue(
      () => t.formData,
      (k, x) => {
        l("update:modelValue", k);
      },
      {
        deep: !0
      }
    );
    function f() {
      t.layout = pe(i, "layout"), a = Object.assign({}, a, i.meta), t.meta = a, t.formData = Object.assign({}, i.modelValue), r(t.formData, i.meta.properties), t.context = new Be(), t.validate = new qe(p, t);
    }
    function r(k, x) {
      Object.keys(x).forEach((N) => {
        const j = x[N];
        if (j.type !== "null")
          switch (j.type) {
            case Y.Object:
              k[N] = k[N] || {}, r(k[N], j.properties);
              break;
            case Y.Array:
              k[N] = k[N] || [];
              break;
            case Y.Boolean:
              break;
            default:
              k[N] = k[N] || void 0;
              break;
          }
      });
    }
    function m(k) {
      return t.context.getContext(k);
    }
    async function h() {
      return await t.validate.runValidateForm();
    }
    function g(k) {
      const x = t.context.getContext("/");
      x && (x.value = k, l("update:modelValue", t.formData));
    }
    function _() {
      l("form-reset", re(t.formData)), g({});
    }
    async function P() {
      u.value = !0;
      const k = await h();
      u.value = !1, l("form-submit", {
        valid: k,
        data: k ? re(t.formData) : void 0
      });
    }
    return fe(() => {
      d.all.clear();
    }), o({
      getContext: m,
      validate: h,
      reset: g,
      clearForm: _,
      submitForm: P
    }), (k, x) => {
      const N = $("a-button"), j = $("a-space"), X = $("a-form-item"), ae = $("a-form");
      return y(), S("div", bt, [
        w(ae, {
          class: te(["v", {
            v__inline: n.layout === "inline",
            v__horizontal: n.layout === "horizontal"
          }]),
          layout: n.layout
        }, {
          default: v(() => [
            w(ke, {
              id: "/",
              meta: e(a)
            }, F({ _: 2 }, [
              H(e(s), (oe) => ({
                name: oe,
                fn: v((de) => [
                  O(k.$slots, oe, Z(ee({ ...de })))
                ])
              }))
            ]), 1032, ["meta"]),
            n.button === "default" ? (y(), C(X, {
              key: 0,
              wrapperCol: e(c),
              class: "v__default-submit-button"
            }, {
              default: v(() => [
                w(j, null, {
                  default: v(() => [
                    w(N, {
                      type: "danger",
                      onClick: _
                    }, {
                      default: v(() => [
                        W(" \u91CD\u7F6E ")
                      ]),
                      _: 1
                    }),
                    w(N, {
                      type: "primary",
                      onClick: P,
                      loading: e(u)
                    }, {
                      default: v(() => [
                        W(" \u63D0\u4EA4 ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["wrapperCol"])) : n.button === "custom" ? O(k.$slots, "button", {
              key: 1,
              loading: e(u),
              clearForm: _,
              submitForm: P
            }) : (y(), S(q, { key: 2 }, [], 64))
          ]),
          _: 3
        }, 8, ["layout", "class"])
      ]);
    };
  }
}), kt = { class: "v__label-text" }, Ot = {
  key: 0,
  class: "v__optional"
}, Ct = ["innerHTML"], $t = {
  key: 0,
  class: "ant-form-item-explain-error"
}, wt = { name: "v-wrapper" }, K = /* @__PURE__ */ I({
  ...wt,
  props: {
    id: null,
    show: { type: Boolean },
    meta: null
  },
  setup(n) {
    const o = n, { globalProperties: l } = he(), i = E("state"), a = i.context.getContext(o.id), u = b(() => Object.assign({}, i.ui, o.meta.ui)), t = b(() => Object.assign({}, i.ui, o.meta.ui).optionalHelp), s = b(() => i.layout.value === "vertical" || i.layout.value === "inline" ? void 0 : { span: u.value.spanLabel }), p = b(() => i.layout.value === "vertical" || i.layout.value === "inline" ? void 0 : { span: u.value.spanControl, offset: u.value.offsetControl || 0 }), d = b({
      get() {
        return a.error.value;
      },
      set(m) {
        a.error.value = m;
      }
    }), { appContext: c } = V(), f = ne(c);
    f.on(`${le}-${i._formId}`, r), fe(() => {
      f.off(`${le}-${i._formId}`, r);
    });
    function r(m) {
      m.id === o.id && (d.value = m.error ? m.error.message : void 0);
    }
    return (m, h) => {
      const g = $("a-tooltip"), _ = $("a-form-item");
      return y(), C(_, {
        labelCol: e(s),
        wrapperCol: e(p),
        required: e(u).showRequired,
        class: te({ "ant-form-item-has-error": e(d) })
      }, F({
        label: v(() => [
          J("span", kt, U(n.meta.title), 1),
          e(u).optional || e(t) ? (y(), S("span", Ot, [
            W(U(e(u).optional) + " ", 1),
            e(t) ? (y(), C(g, {
              key: 0,
              title: e(t).text,
              placement: e(t).placement,
              trigger: e(t).trigger,
              overlayStyle: e(t).overlayStyle,
              mouseEnterDelay: e(t).mouseEnterDelay,
              mouseLeaveDelay: e(t).mouseLeaveDelay,
              overlayClassName: e(t).overlayClassName
            }, {
              default: v(() => [
                e(t).icon ? (y(), C(me(e(l).$antIcons[e(t).icon]), { key: 0 })) : z("", !0)
              ]),
              _: 1
            }, 8, ["title", "placement", "trigger", "overlayStyle", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName"])) : z("", !0)
          ])) : z("", !0)
        ]),
        default: v(() => [
          O(m.$slots, "default"),
          e(d) ? (y(), S("div", $t, U(e(d)), 1)) : z("", !0)
        ]),
        _: 2
      }, [
        n.meta.description ? {
          name: "extra",
          fn: v(() => [
            J("div", {
              innerHTML: n.meta.description
            }, null, 8, Ct)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["labelCol", "wrapperCol", "required", "class"]);
    };
  }
});
class se {
  constructor(o, l, i, a) {
    A(this, "id");
    A(this, "state");
    A(this, "meta", T({}));
    A(this, "type");
    A(this, "ui", T({}));
    A(this, "error", T(void 0));
    A(this, "_value", T());
    A(this, "_initMetaValue");
    A(this, "appContext");
    if (this.constructor == se)
      throw new Error("Abstract classes can't be instantiated.");
    this.id = i, this.state = l, this.meta.value = a, this.type = a.ui && a.ui.component || a.type, this.ui.value = Object.assign({}, l.ui, a.ui), this.appContext = o, this.error.value = void 0, l.context.addContext(i, this), this._value.value = void 0, this._initMetaValue = this.getInitMetaValue();
  }
  get value() {
    return this._value.value;
  }
  set value(o) {
    if (this._value.value === o)
      return;
    this.setValue(o), ne(this.appContext).emit(`${xe}-${this.state._formId}`, {
      id: this.id,
      value: this._value.value
    }), this.state.updateObjProp(this.state.formData, this.id, this._value.value), this.state.validate.runValidationFormItem(this);
  }
  getInitMetaValue() {
    const o = this.id.split("/").filter((i) => i);
    let l = "";
    return o.reduce((i, a, u) => (u === o.length - 1 && (l = i[a]), i[a] || {}), this.state.formData), l;
  }
}
class Ke extends se {
  constructor(l, i, a, u) {
    super(l, i, a, u);
    A(this, "childMetaPairs");
    this.childMetaPairs = this.buildChildMetaPairs(a, u), i.context.addContext(a, this);
  }
  initValue() {
  }
  setValue() {
  }
  set value(l) {
    this.childMetaPairs.forEach(({ key: i, propertyName: a }) => {
      const u = this.state.context.getContext(i);
      u && (u.value = (l || {})[a]);
    });
  }
  buildChildMetaPairs(l, i) {
    const a = [];
    for (const u of Object.keys(i.properties || {})) {
      const t = l === "/" ? `/${u}` : `${l}/${u}`;
      a.push({
        key: t,
        propertyName: u,
        meta: i.properties[u]
      });
    }
    return a;
  }
}
const Nt = /* @__PURE__ */ I({
  __name: "Object",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, { slotsName: l } = ce(o.meta), i = E("state"), { appContext: a } = V(), u = new Ke(a, i, o.id, o.meta), t = b(() => u.ui.value || {}), s = b(() => Object.assign({}, i.ui.grid, t.value.grid).gutter), p = b(() => i.layout.value);
    function d(r) {
      return r.ui && r.ui.show;
    }
    function c(r) {
      if (p.value === "inline")
        return {};
      const m = r.meta.ui && r.meta.ui.grid || {};
      return Object.assign({}, i.ui.grid, t.value.grid, m);
    }
    const f = u.childMetaPairs;
    return (r, m) => {
      const h = $("a-col"), g = $("a-row");
      return y(), C(g, { gutter: e(s) }, {
        default: v(() => [
          (y(!0), S(q, null, H(e(f), (_, P) => (y(), C(h, {
            key: P,
            span: c(_).span,
            offset: c(_).offset,
            xs: c(_).xs,
            sm: c(_).sm,
            md: c(_).md,
            lg: c(_).lg,
            xl: c(_).xl,
            xxl: c(_).xxl,
            style: ve({ display: e(p) === "inline" ? "inline-block" : "block" })
          }, {
            default: v(() => [
              w(ke, {
                id: _.key,
                meta: _.meta,
                show: d(_.meta)
              }, F({ _: 2 }, [
                H(e(l), (k) => ({
                  name: k,
                  fn: v((x) => [
                    O(r.$slots, k, Z(ee({ ...x })))
                  ])
                }))
              ]), 1032, ["id", "meta", "show"])
            ]),
            _: 2
          }, 1032, ["span", "offset", "xs", "sm", "md", "lg", "xl", "xxl", "style"]))), 128))
        ]),
        _: 3
      }, 8, ["gutter"]);
    };
  }
});
class B extends se {
  constructor(l, i, a, u) {
    var t;
    super(l, i, a, u);
    A(this, "open");
    this.initValue(), this.meta.value && (this.open = ((t = this.meta.value.ui) == null ? void 0 : t.open) || !1);
  }
  initValue() {
    this._initMetaValue ? this.value = this._initMetaValue : this.meta.value.default && (this.value = this.meta.value.default);
  }
  setValue(l) {
    this._value.value = l || void 0;
  }
}
function R(n, o) {
  const l = T({});
  return Object.keys(o.value).forEach((a) => {
    n.indexOf(a) > -1 && (l.value[a] = pe(o.value, a));
  }), { bindings: l };
}
const Vt = /* @__PURE__ */ I({
  __name: "String",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new B(i, l, o.id, o.meta), { bindings: u } = R(Object.keys(nt.props), a.ui), t = b(() => a.ui.value || {}), s = b({
      get() {
        return a.value;
      },
      set(d) {
        a.value = d;
      }
    });
    function p() {
      t.value.change && t.value.change(e(s));
    }
    return (d, c) => {
      const f = $("a-input");
      return y(), C(K, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          w(f, D(e(u), {
            defaultValue: n.meta.defaultValue,
            disabled: n.meta.readOnly,
            maxLength: n.meta.maxLength,
            value: e(s),
            "onUpdate:value": c[0] || (c[0] = (r) => M(s) ? s.value = r : null),
            onChange: p
          }), F({ _: 2 }, [
            e(t).slotNameOfPrefix ? {
              name: "prefix",
              fn: v(() => [
                O(d.$slots, e(t).slotNameOfPrefix)
              ]),
              key: "0"
            } : void 0,
            e(t).slotNameOfSuffix ? {
              name: "suffix",
              fn: v(() => [
                O(d.$slots, e(t).slotNameOfSuffix)
              ]),
              key: "1"
            } : void 0,
            e(t).slotNameOfAddonBefore ? {
              name: "addonBefore",
              fn: v(() => [
                O(d.$slots, e(t).slotNameOfAddonBefore)
              ]),
              key: "2"
            } : void 0,
            e(t).slotNameOfAddonAfter ? {
              name: "addonAfter",
              fn: v(() => [
                O(d.$slots, e(t).slotNameOfAddonAfter)
              ]),
              key: "3"
            } : void 0
          ]), 1040, ["defaultValue", "disabled", "maxLength", "value"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
});
class Ge extends se {
  constructor(o, l, i, a) {
    super(o, l, i, a), this.initValue();
  }
  initValue() {
    typeof this._initMetaValue < "u" ? this.value = this._initMetaValue : typeof this.meta.value.default == "boolean" && (this.value = this.meta.value.default);
  }
  setValue(o) {
    this._value.value = o || !1;
  }
}
const It = /* @__PURE__ */ I({
  __name: "Boolean",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new Ge(i, l, o.id, o.meta), { bindings: u } = R(Object.keys(at.props), a.ui), t = b(() => a.ui.value || {}), s = b({
      get() {
        return a.value;
      },
      set(d) {
        a.value = d || !1;
      }
    });
    function p() {
      t.value.change && t.value.change(e(s));
    }
    return (d, c) => {
      const f = $("a-switch");
      return y(), C(K, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          w(f, D({
            class: "v__boolean",
            checked: e(s),
            "onUpdate:checked": c[0] || (c[0] = (r) => M(s) ? s.value = r : null)
          }, e(u), {
            disabled: n.meta.readOnly,
            onChange: p
          }), F({ _: 2 }, [
            e(t).slotNameOfCheckedChildren ? {
              name: "checkedChildren",
              fn: v(() => [
                O(d.$slots, e(t).slotNameOfCheckedChildren)
              ]),
              key: "0"
            } : void 0,
            e(t).slotNameOfUnCheckedChildren ? {
              name: "unCheckedChildren",
              fn: v(() => [
                O(d.$slots, e(t).slotNameOfUnCheckedChildren)
              ]),
              key: "1"
            } : void 0
          ]), 1040, ["checked", "disabled"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), Et = /* @__PURE__ */ I({
  __name: "AutoComplete",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new B(i, l, o.id, o.meta), { bindings: u } = R(Object.keys(ot.props), a.ui), t = b(() => a.ui.value || {}), s = b({
      get() {
        return a.value;
      },
      set(f) {
        a.value = f || void 0;
      }
    });
    function p(f) {
      t.value.change && t.value.change(e(f));
    }
    function d(f) {
      t.value.search && t.value.search(f, e(s));
    }
    function c(f, r) {
      t.value.select && t.value.select(e(f), r);
    }
    return (f, r) => {
      const m = $("a-auto-complete");
      return y(), C(K, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          w(m, D(e(u), {
            disabled: n.meta.readOnly,
            value: e(s),
            "onUpdate:value": r[0] || (r[0] = (h) => M(s) ? s.value = h : null),
            onChange: p,
            onSearch: d,
            onSelect: c
          }), F({ _: 2 }, [
            e(t).slotNameOfOption ? {
              name: "option",
              fn: v((h) => [
                O(f.$slots, e(t).slotNameOfOption, Z(ee(h)))
              ]),
              key: "0"
            } : void 0,
            e(t).slotNameOfDefault ? {
              name: "default",
              fn: v(() => [
                O(f.$slots, e(t).slotNameOfDefault)
              ]),
              key: "1"
            } : void 0
          ]), 1040, ["disabled", "value"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), jt = /* @__PURE__ */ I({
  __name: "Checkbox",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new B(i, l, o.id, o.meta), { bindings: u } = R(Object.keys(lt.props), a.ui), t = b(() => a.ui.value || {}), s = b({
      get() {
        return a.value;
      },
      set(d) {
        a.value = d;
      }
    });
    function p() {
      t.value.change && t.value.change(e(s));
    }
    return (d, c) => {
      const f = $("a-checkbox-group"), r = $("a-checkbox"), m = $("a-col"), h = $("a-row");
      return y(), C(K, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          e(t).span ? (y(), C(f, {
            key: 1,
            value: e(s),
            "onUpdate:value": c[1] || (c[1] = (g) => M(s) ? s.value = g : null),
            disabled: n.meta.readOnly,
            onChange: p,
            class: "v__checkbox"
          }, {
            default: v(() => [
              w(h, null, {
                default: v(() => [
                  (y(!0), S(q, null, H(n.meta.enum, (g, _) => (y(), C(m, {
                    class: "v__text-left",
                    span: e(t).span,
                    key: _
                  }, {
                    default: v(() => [
                      w(r, {
                        value: g.value || g,
                        disabled: g.disabled || !1
                      }, {
                        default: v(() => [
                          W(U(g.label || g), 1)
                        ]),
                        _: 2
                      }, 1032, ["value", "disabled"])
                    ]),
                    _: 2
                  }, 1032, ["span"]))), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["value", "disabled"])) : (y(), C(f, D({
            key: 0,
            class: "v__checkbox",
            value: e(s),
            "onUpdate:value": c[0] || (c[0] = (g) => M(s) ? s.value = g : null)
          }, e(u), {
            disabled: n.meta.readOnly,
            options: n.meta.enum,
            onChange: p
          }), null, 16, ["value", "disabled", "options"]))
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
}), St = /* @__PURE__ */ I({
  __name: "Date",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new B(i, l, o.id, o.meta);
    let u = {}, t = {};
    if (a.ui.value.type === "range") {
      const { bindings: r } = R(Object.keys(st.props), a.ui);
      u = r;
    } else {
      const { bindings: r } = R(Object.keys(it.props), a.ui);
      t = r;
    }
    const s = b(() => a.ui.value || {}), p = b({
      get() {
        return a.value;
      },
      set(r) {
        a.value = r;
      }
    });
    function d() {
      s.value.change && s.value.change(e(p));
    }
    function c(r) {
      s.value.ok && s.value.ok(r);
    }
    function f(r, m, h) {
      s.value.calendarChange && s.value.calendarChange(r, m, h);
    }
    return (r, m) => {
      const h = $("a-range-picker"), g = $("a-date-picker");
      return y(), C(K, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          e(s).type === "range" ? (y(), C(h, D({
            key: 0,
            class: "v__date",
            value: e(p),
            "onUpdate:value": m[0] || (m[0] = (_) => M(p) ? p.value = _ : null)
          }, e(u), {
            disabled: n.meta.readOnly,
            onCalendarChange: f,
            onOk: c,
            onChange: d
          }), F({ _: 2 }, [
            e(s).slotNameOfSuffixIcon ? {
              name: "suffixIcon",
              fn: v(() => [
                O(r.$slots, e(s).slotNameOfSuffixIcon)
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["value", "disabled"])) : z("", !0),
          e(s).type !== "range" ? (y(), C(g, D({
            key: 1,
            class: "v__date",
            value: e(p),
            "onUpdate:value": m[1] || (m[1] = (_) => M(p) ? p.value = _ : null)
          }, e(t), {
            disabled: n.meta.readOnly,
            onOk: c,
            onChange: d
          }), F({ _: 2 }, [
            e(s).slotNameOfSuffixIcon ? {
              name: "suffixIcon",
              fn: v(() => [
                O(r.$slots, e(s).slotNameOfSuffixIcon)
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["value", "disabled"])) : z("", !0)
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), Dt = /* @__PURE__ */ I({
  __name: "Time",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new B(i, l, o.id, o.meta);
    let u = {}, t = {};
    if (a.ui.value.type === "range") {
      const { bindings: r } = R(
        Object.keys(ut.props),
        a.ui
      );
      u = r;
    } else {
      const { bindings: r } = R(Object.keys(rt.props), a.ui);
      t = r;
    }
    const s = b(() => a.ui.value || {}), p = b({
      get() {
        return a.value;
      },
      set(r) {
        a.value = r;
      }
    });
    function d(r, m) {
      s.value.change && s.value.change(r, m);
    }
    function c(r) {
      s.value.ok && s.value.ok(r);
    }
    function f(r, m, h) {
      s.value.calendarChange && s.value.calendarChange(r, m, h);
    }
    return (r, m) => {
      const h = $("a-time-range-picker"), g = $("a-time-picker");
      return y(), C(K, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          e(s).type === "range" ? (y(), C(h, D({
            key: 0,
            class: "v__time",
            value: e(p),
            "onUpdate:value": m[0] || (m[0] = (_) => M(p) ? p.value = _ : null),
            open: e(s).open,
            "onUpdate:open": m[1] || (m[1] = (_) => e(s).open = _)
          }, e(u), {
            disabled: n.meta.readOnly,
            onCalendarChange: f,
            onOk: c,
            onChange: d
          }), F({ _: 2 }, [
            e(s).slotNameOfRenderExtraFooter ? {
              name: "renderExtraFooter",
              fn: v(() => [
                O(r.$slots, e(s).slotNameOfRenderExtraFooter)
              ]),
              key: "0"
            } : void 0,
            e(s).slotNameOfSuffixIcon ? {
              name: "suffixIcon",
              fn: v(() => [
                O(r.$slots, e(s).slotNameOfSuffixIcon)
              ]),
              key: "1"
            } : void 0,
            e(s).slotNameOfClearIcon ? {
              name: "clearIcon",
              fn: v(() => [
                O(r.$slots, e(s).slotNameOfClearIcon)
              ]),
              key: "2"
            } : void 0
          ]), 1040, ["value", "open", "disabled"])) : (y(), C(g, D({
            key: 1,
            class: "v__time",
            value: e(p),
            "onUpdate:value": m[2] || (m[2] = (_) => M(p) ? p.value = _ : null),
            open: e(s).open,
            "onUpdate:open": m[3] || (m[3] = (_) => e(s).open = _)
          }, e(t), {
            disabled: n.meta.readOnly,
            onOk: c,
            onChange: d
          }), F({ _: 2 }, [
            e(s).slotNameOfRenderExtraFooter ? {
              name: "renderExtraFooter",
              fn: v(() => [
                O(r.$slots, e(s).slotNameOfRenderExtraFooter)
              ]),
              key: "0"
            } : void 0,
            e(s).slotNameOfSuffixIcon ? {
              name: "suffixIcon",
              fn: v(() => [
                O(r.$slots, e(s).slotNameOfSuffixIcon)
              ]),
              key: "1"
            } : void 0,
            e(s).slotNameOfClearIcon ? {
              name: "clearIcon",
              fn: v(() => [
                O(r.$slots, e(s).slotNameOfClearIcon)
              ]),
              key: "2"
            } : void 0
          ]), 1040, ["value", "open", "disabled"]))
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), Fe = /* @__PURE__ */ I({
  __name: "Number",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new B(i, l, o.id, o.meta), { bindings: u } = R(Object.keys(ct.props), a.ui), t = b(() => a.ui.value || {}), s = b({
      get() {
        return a.value;
      },
      set(g) {
        a.value = g;
      }
    });
    let p = T(-1 / 0), d = T(1 / 0), c = T(1), f = T((g) => g), r = T((g) => g);
    m();
    function m() {
      const {
        minimum: g,
        exclusiveMinimum: _,
        maximum: P,
        exclusiveMaximum: k,
        multipleOf: x,
        type: N
      } = a.meta.value;
      c.value = x || 1, typeof g < "u" && (p.value = _ ? g + c.value : g), typeof P < "u" && (d.value = k ? P - c.value : P), N === "integer" && (p.value = Math.trunc(p.value), d.value = Math.trunc(d.value), c.value = Math.trunc(c.value)), t.value.prefix != null && (t.value.formatter = (j) => j == null ? "" : `${t.value.prefix} ${j}`, t.value.parser = (j) => j.replace(`${t.value.prefix} `, "")), t.value.unit != null && (t.value.formatter = (j) => j == null ? "" : `${j} ${t.value.unit}`, t.value.parser = (j) => j.replace(` ${t.value.unit}`, "")), t.value.formatter && (f.value = t.value.formatter), t.value.parser && (r.value = t.value.parser);
    }
    function h(g) {
      s.value = a.meta.value.type === Y.Integer ? Math.floor(g) : g, t.value.change && t.value.change(e(s));
    }
    return (g, _) => {
      const P = $("a-input-number");
      return y(), C(K, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          w(P, D({
            class: "v__number",
            id: n.id,
            value: e(s),
            "onUpdate:value": _[0] || (_[0] = (k) => M(s) ? s.value = k : null)
          }, e(u), {
            disabled: n.meta.readOnly,
            min: e(p),
            max: e(d),
            step: e(c),
            formatter: e(f),
            parser: e(r),
            class: { "v__input-number-hidden-step": e(t).hideStep },
            onChange: _[1] || (_[1] = (k) => h(k))
          }), F({ _: 2 }, [
            e(t).slotNameOfAddonAfter ? {
              name: "addonAfter",
              fn: v(() => [
                O(g.$slots, e(t).slotNameOfAddonAfter)
              ]),
              key: "0"
            } : void 0,
            e(t).slotNameOfAddonBefore ? {
              name: "addonBefore",
              fn: v(() => [
                O(g.$slots, e(t).slotNameOfAddonBefore)
              ]),
              key: "1"
            } : void 0,
            e(t).slotNameOfPrefix ? {
              name: "prefix",
              fn: v(() => [
                O(g.$slots, e(t).slotNameOfPrefix)
              ]),
              key: "2"
            } : void 0
          ]), 1040, ["id", "value", "disabled", "min", "max", "step", "formatter", "parser", "class"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
});
class Mt extends se {
  constructor(l, i, a, u) {
    super(l, i, a, u);
    A(this, "ids", T([]));
    this.initValue();
  }
  setValue() {
  }
  initValue() {
    var l, i;
    if (((l = this._initMetaValue) == null ? void 0 : l.length) > 0)
      this.value = this._initMetaValue;
    else if (((i = e(this.meta).default) == null ? void 0 : i.length) > 0) {
      const a = e(this.meta).default;
      a.forEach(() => this.add(!1)), setTimeout(() => {
        a.forEach((u, t) => {
          const s = this.state.context.getContext(
            `${this.id}/${t}`
          );
          s.value = u;
        });
      }), this.validate();
    }
  }
  get value() {
    return this.getPathValue(this.state.formData, this.id) || [];
  }
  set value(l) {
    if (this.value.length === 0 && (l == null ? void 0 : l.length) === 0 || !Array.isArray(l) && l != null)
      return;
    const i = _e(l), a = e(this.ids).length;
    for (let u = 0; u < a; u++)
      this.remove(a - u - 1, !1);
    i && i.length && (i.forEach(() => this.add(!1)), et(() => {
      i.forEach((u, t) => {
        const s = this.state.context.getContext(
          `${this.id}/${t}`
        );
        s.value = u;
      });
    })), this.validate();
  }
  validate() {
    return this.state.validate.runValidationFormItem(this);
  }
  getPathValue(l, i) {
    const a = i.split("/").filter((t) => t);
    let u = _e(l);
    for (let t = 0; t < a.length; t++) {
      const s = a[t];
      u = u[s];
    }
    return u;
  }
  getEmptyData() {
    const l = {}, i = e(this.meta).items.properties;
    return Object.keys(i).forEach((a) => {
      switch (i[a].type) {
        case "object":
          l[a] = {};
          break;
        case "array":
          l[a] = [];
          break;
        default:
          l[a] = void 0;
          break;
      }
    }), l;
  }
  add(l = !0) {
    const i = `${this.id}/${e(this.ids).length}`, a = this.getEmptyData();
    return this.state.updateObjProp(this.state.formData, i, a), this.ids.value.push({ key: Le() }), l && this.validate(), i;
  }
  remove(l, i = !0) {
    this.ids.value.splice(l, 1);
    const a = this.id.split("/").filter((s) => !!s);
    a.reduce((s, p, d) => (d === a.length - 1 && s[p].splice(l, 1), s[p]), this.state.formData);
    const u = [];
    for (const s of this.state.context.getMap().keys())
      new RegExp(`^/?${this.id}/`).test(s) && u.push(s);
    for (let s = l + 1; s < e(this.ids).length + 1; s++) {
      const p = new RegExp(`^(/?${this.id}/)${s}`);
      u.filter((d) => p.test(d)).forEach((d) => {
        const c = this.state.context.getContext(d), f = d.replace(p, (r, m) => `${m}${s - 1}`);
        if (c.id = f, c.childMetaPairs) {
          const r = c.buildChildMetaPairs(
            f,
            e(c.meta)
          );
          c.childMetaPairs.forEach((m, h) => {
            m.key = r[h].key;
          });
        }
        this.state.context.addContext(f, c);
      });
    }
    const t = new RegExp(`^/?${this.id}/${e(this.ids).length}`);
    u.filter((s) => t.test(s)).forEach((s) => {
      this.state.context.removeContext(s);
    }), i && this.validate();
  }
}
const Pt = { class: "v__optional" }, At = { class: "v__array-add" }, Ft = { class: "ant-form-item-control" }, Rt = ["onClick"], Tt = {
  key: 0,
  class: "ant-form-item-extra"
}, Ut = {
  key: 1,
  class: "ant-form-item-explain-error"
}, Bt = /* @__PURE__ */ I({
  __name: "Array",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { globalProperties: i } = he(), { appContext: a } = V(), u = new Mt(a, l, o.id, o.meta), t = ne(a), s = b(() => e(u.ui) || {}), p = b(() => Object.assign({}, l.ui, o.meta.ui).optionalHelp);
    b({
      get() {
        return u.value;
      },
      set(x) {
        u.value = x || [];
      }
    });
    const d = b({
      get() {
        return e(u.error);
      },
      set(x) {
        u.error.value = x;
      }
    }), c = b(() => o.meta.readOnly), f = b(() => e(c) || o.meta.maxItems != null && e(u.ids).length >= o.meta.maxItems), r = b(() => {
      const x = o.meta.minItems;
      return !(e(c) || x != null && e(u.ids).length <= x);
    }), m = T(8), h = T("");
    Te(() => {
      var X;
      t.on(`${le}-${l._formId}`, g);
      const { grid: x, removable: N, removeTitle: j } = e(s);
      m.value = (X = x == null ? void 0 : x.arraySpan) != null ? X : 8, h.value = N === !1 ? null : j;
    }), fe(() => {
      t.off(`${le}-${l._formId}`, g);
    });
    function g(x) {
      x.id === o.id && (d.value = x.error ? x.error.message : void 0);
    }
    function _(x) {
      return `${o.id}/${x}`;
    }
    function P() {
      var N, j;
      const x = u.add();
      (j = (N = e(s)).add) == null || j.call(N, x);
    }
    function k(x) {
      var N, j;
      u.remove(x), (j = (N = e(s)).remove) == null || j.call(N, x);
    }
    return (x, N) => {
      const j = $("a-tooltip"), X = $("a-button"), ae = $("a-col"), oe = $("delete-outlined"), de = $("a-card"), Ce = $("a-row"), Je = $("a-form-item");
      return y(), C(Je, null, {
        default: v(() => [
          w(Ce, null, {
            default: v(() => [
              n.meta.title ? (y(), C(ae, {
                key: 0,
                class: "ant-form-item-label",
                span: e(s).spanLabel
              }, {
                default: v(() => [
                  J("label", {
                    class: te({ "ant-form-item-required": e(s).showRequired })
                  }, [
                    W(U(n.meta.title) + " ", 1),
                    J("span", Pt, [
                      W(U(e(s).optional) + " ", 1),
                      e(p) ? (y(), C(j, {
                        key: 0,
                        title: e(p).text,
                        placement: e(p).placement,
                        trigger: e(p).trigger,
                        overlayStyle: e(p).overlayStyle,
                        overlayClassName: e(p).overlayClassName,
                        mouseEnterDelay: e(p).mouseEnterDelay,
                        mouseLeaveDelay: e(p).mouseLeaveDelay
                      }, {
                        default: v(() => [
                          e(p).icon ? (y(), C(me(e(i).$antIcons[e(p).icon]), { key: 0 })) : z("", !0)
                        ]),
                        _: 1
                      }, 8, ["title", "placement", "trigger", "overlayStyle", "overlayClassName", "mouseEnterDelay", "mouseLeaveDelay"])) : z("", !0)
                    ])
                  ], 2),
                  J("div", At, [
                    w(X, {
                      type: e(s).addType || "dashed",
                      disabled: e(f),
                      onClick: P
                    }, {
                      default: v(() => [
                        W(U(e(s).addTitle || "\u6DFB\u52A0"), 1)
                      ]),
                      _: 1
                    }, 8, ["type", "disabled"])
                  ])
                ]),
                _: 1
              }, 8, ["span"])) : z("", !0),
              w(ae, {
                class: "ant-form-item-control-wrapper",
                span: e(s).spanControl,
                offset: e(s).offsetControl
              }, {
                default: v(() => [
                  J("div", Ft, [
                    w(Ce, { class: "v__array-container" }, {
                      default: v(() => [
                        (y(!0), S(q, null, H(e(u).ids.value, (Ye, $e) => (y(), C(ae, {
                          key: Ye.key,
                          span: m.value,
                          class: "v__array-item"
                        }, {
                          default: v(() => [
                            w(de, null, {
                              default: v(() => [
                                w(ke, {
                                  id: _($e),
                                  meta: n.meta.items
                                }, null, 8, ["id", "meta"]),
                                e(r) ? (y(), S("span", {
                                  key: 0,
                                  class: "v__array-remove",
                                  onClick: (Rn) => k($e)
                                }, [
                                  w(oe)
                                ], 8, Rt)) : z("", !0)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["span"]))), 128))
                      ]),
                      _: 1
                    }),
                    n.meta.description ? (y(), S("div", Tt, U(n.meta.description), 1)) : z("", !0),
                    e(d) ? (y(), S("div", Ut, U(e(d)), 1)) : z("", !0)
                  ])
                ]),
                _: 1
              }, 8, ["span", "offset"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}), Lt = { class: "v__label-text" }, zt = ["innerHTML"], Ht = ["textContent"], qt = ["innerHTML"], Kt = /* @__PURE__ */ I({
  __name: "Text",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new B(i, l, o.id, o.meta), u = b(() => a.ui.value || {}), t = b(() => l.layout.value === "vertical" || l.layout.value === "inline" ? void 0 : { span: u.value.spanLabel }), s = b(() => l.layout.value === "vertical" || l.layout.value === "inline" ? void 0 : { span: u.value.spanControl, offset: u.value.offsetControl || 0 }), p = b(
      () => ze(e(u).text) ? e(u).text() : e(u).text
    );
    return (d, c) => {
      const f = $("a-form-item");
      return y(), S("div", null, [
        w(f, {
          labelCol: e(t),
          wrapperCol: e(s),
          class: te({ "no-label": !n.meta.title })
        }, F({
          default: v(() => [
            e(u).slotNameOfDefault ? O(d.$slots, e(u).slotNameOfDefault, { key: 0 }, void 0, !0) : (y(), S(q, { key: 1 }, [
              e(u).html ? (y(), S("span", {
                key: 0,
                innerHTML: e(u).html,
                class: "v__content-text"
              }, null, 8, zt)) : (y(), S("span", {
                key: 1,
                textContent: U(e(p)),
                class: "v__content-text"
              }, null, 8, Ht))
            ], 64))
          ]),
          _: 2
        }, [
          n.meta.title ? {
            name: "label",
            fn: v(() => [
              J("span", Lt, U(n.meta.title), 1)
            ]),
            key: "0"
          } : void 0,
          n.meta.description ? {
            name: "extra",
            fn: v(() => [
              J("div", {
                innerHTML: n.meta.description
              }, null, 8, qt)
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["labelCol", "wrapperCol", "class"])
      ]);
    };
  }
});
const ge = (n, o) => {
  const l = n.__vccOpts || n;
  for (const [i, a] of o)
    l[i] = a;
  return l;
}, Gt = /* @__PURE__ */ ge(Kt, [["__scopeId", "data-v-c98847ae"]]), Wt = /* @__PURE__ */ I({
  __name: "Textarea",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new B(i, l, o.id, o.meta), { bindings: u } = R(Object.keys(dt.props), a.ui), t = b(() => a.ui.value || {}), s = b({
      get() {
        return a.value;
      },
      set(m) {
        a.value = m;
      }
    }), p = T(!0);
    Te(() => {
      e(t).autoSize != null && (p.value = e(t).autoSize);
    });
    function d() {
      var m, h;
      (h = (m = e(t)).change) == null || h.call(m, e(s));
    }
    function c(m) {
      var h, g;
      (g = (h = e(t)).focus) == null || g.call(h, m);
    }
    function f(m) {
      var h, g;
      (g = (h = e(t)).blur) == null || g.call(h, m);
    }
    function r(m) {
      var h, g;
      (g = (h = e(t)).pressEnter) == null || g.call(h, m);
    }
    return (m, h) => {
      const g = $("a-textarea");
      return y(), C(K, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          w(g, D(e(u), {
            autoSize: p.value,
            defaultValue: n.meta.defaultValue,
            disabled: n.meta.readOnly,
            maxlength: n.meta.maxLength,
            value: e(s),
            "onUpdate:value": h[0] || (h[0] = (_) => M(s) ? s.value = _ : null),
            onChange: d,
            onFocus: c,
            onBlur: f,
            onPressEnter: r
          }), null, 16, ["autoSize", "defaultValue", "disabled", "maxlength", "value"])
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
});
class ie extends se {
  constructor(o, l, i, a) {
    super(o, l, i, a), this.initValue();
  }
  initValue() {
    this._initMetaValue ? this.value = this._initMetaValue : e(this.meta).default && (this.value = e(this.meta).default);
  }
  setValue(o) {
    switch (this.type) {
      case "slider":
        this._value.value = yt(o) || Oe(o) ? o : void 0;
        break;
      default:
        this._value.value = o || void 0;
        break;
    }
  }
}
const Jt = /* @__PURE__ */ I({
  __name: "Slider",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new ie(i, l, o.id, o.meta), { bindings: u } = R(Object.keys(mt.props), a.ui), t = b(() => a.ui.value || {}), s = b({
      get() {
        return a.value;
      },
      set(r) {
        t.value.range ? a.value = r || [] : a.value = Oe(r) ? r : void 0;
      }
    }), p = b(() => t.value.tipFormatter === null);
    function d(r) {
      const { tipFormatter: m } = t.value;
      return m ? m(r) : `${r}`;
    }
    function c(r) {
      var m, h;
      (h = (m = e(t)).change) == null || h.call(m, r);
    }
    function f(r) {
      var m, h;
      (h = (m = e(t)).afterChange) == null || h.call(m, r);
    }
    return (r, m) => {
      const h = $("a-slider");
      return y(), C(K, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          w(h, D(e(u), {
            disabled: n.meta.readOnly,
            min: n.meta.minimum || 0,
            max: n.meta.maximum || 100,
            step: n.meta.multipleOf || 1,
            tipFormatter: e(p) ? null : d,
            value: e(s),
            "onUpdate:value": m[0] || (m[0] = (g) => M(s) ? s.value = g : null),
            onChange: c,
            onAfterChange: f
          }), F({ _: 2 }, [
            e(t).slotNameOfMark ? {
              name: "mark",
              fn: v((g) => [
                O(r.$slots, e(t).slotNameOfMark, Z(ee(g)))
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["disabled", "min", "max", "step", "tipFormatter", "value"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), Yt = /* @__PURE__ */ I({
  __name: "Rate",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new ie(i, l, o.id, o.meta), { bindings: u } = R(Object.keys(ft.props), a.ui), t = b(() => a.ui.value || {}), s = b({
      get() {
        return a.value;
      },
      set(c) {
        a.value = c;
      }
    });
    function p(c) {
      var f, r;
      (r = (f = e(t)).change) == null || r.call(f, c);
    }
    function d(c) {
      var f, r;
      (r = (f = e(t)).hoverChange) == null || r.call(f, c);
    }
    return (c, f) => {
      const r = $("a-rate");
      return y(), C(K, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          w(r, D(e(u), {
            disabled: n.meta.readOnly,
            count: n.meta.maximum || 5,
            value: e(s),
            "onUpdate:value": f[0] || (f[0] = (m) => M(s) ? s.value = m : null),
            onChange: p,
            onHoverChange: d
          }), F({ _: 2 }, [
            e(t).slotNameOfCharacter ? {
              name: "character",
              fn: v(() => [
                O(c.$slots, e(t).slotNameOfCharacter)
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["disabled", "count", "value"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), Qt = /* @__PURE__ */ I({
  __name: "Tag",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new ie(i, l, o.id, o.meta), u = T([]), t = b(() => a.ui.value || {}), s = b({
      get() {
        return a.value;
      },
      set(f) {
        t.value.range ? a.value = f || [] : a.value = f;
      }
    });
    ue(() => e(a.meta).enum, c, { immediate: !0 });
    function p(f, r) {
      var m, h, g, _;
      f.disabled || (f.checked = r, d(), (h = (m = e(t)).checkedChange) == null || h.call(m, r), (_ = (g = e(t)).change) == null || _.call(g, re(e(s))));
    }
    function d() {
      const f = e(u).filter((r) => r.checked).map((r) => r.value);
      s.value = f.length ? f : void 0;
    }
    function c(f) {
      let r = e(f);
      r == null || !Array.isArray(r) || r.length === 0 || (typeof r[0] != "object" && (r = r.map((m) => ({
        label: m,
        value: m
      }))), r.forEach((m) => {
        m.checked = (s.value || []).indexOf(m.value) > -1;
      }), r.forEach((m) => m.disabled = o.meta.readOnly), u.value = r);
    }
    return (f, r) => {
      const m = $("a-checkable-tag");
      return y(), C(K, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          (y(!0), S(q, null, H(u.value, (h) => (y(), C(m, {
            key: h.value,
            class: te({ disabled: h.disabled }),
            checked: h.checked,
            onChange: (g) => p(h, g)
          }, {
            default: v(() => [
              J("span", null, U(h.label), 1)
            ]),
            _: 2
          }, 1032, ["class", "checked", "onChange"]))), 128))
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
});
const Xt = /* @__PURE__ */ ge(Qt, [["__scopeId", "data-v-56211880"]]), Zt = /* @__PURE__ */ I({
  __name: "Cascader",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new B(i, l, o.id, o.meta), { bindings: u } = R(Object.keys(vt.props), a.ui), t = b(() => a.ui.value || {}), s = b({
      get() {
        return a.value;
      },
      set(m) {
        a.value = m;
      }
    });
    function p(m, h) {
      var g, _;
      (_ = (g = e(t)).change) == null || _.call(g, m, h);
    }
    function d(m) {
      var h, g;
      (g = (h = e(t)).dropdownVisibleChange) == null || g.call(h, m);
    }
    function c(m) {
      var h, g;
      (g = (h = e(t)).search) == null || g.call(h, m);
    }
    function f(m) {
      var h, g;
      (g = (h = e(t)).blur) == null || g.call(h, m);
    }
    function r(m) {
      var h, g;
      (g = (h = e(t)).focus) == null || g.call(h, m);
    }
    return (m, h) => {
      const g = $("a-cascader");
      return y(), C(K, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          w(g, D(e(u), {
            disabled: n.meta.readOnly,
            options: n.meta.enum,
            value: e(s),
            "onUpdate:value": h[0] || (h[0] = (_) => M(s) ? s.value = _ : null),
            onChange: p,
            onDropdownVisibleChange: d,
            onSearch: c,
            onBlur: f,
            onFocus: r
          }), F({ _: 2 }, [
            e(t).slotNameOfDefault ? {
              name: "default",
              fn: v(() => [
                J("span", null, [
                  O(m.$slots, e(t).slotNameOfDefault)
                ])
              ]),
              key: "0"
            } : void 0,
            e(t).slotNameOfSuffixIcon ? {
              name: "suffixIcon",
              fn: v(() => [
                O(m.$slots, e(t).slotNameOfSuffixIcon)
              ]),
              key: "1"
            } : void 0,
            e(t).slotNameOfDisplayRender ? {
              name: "displayRender",
              fn: v((_) => [
                O(m.$slots, e(t).slotNameOfDisplayRender, Z(ee(_)))
              ]),
              key: "2"
            } : void 0
          ]), 1040, ["disabled", "options", "value"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), en = /* @__PURE__ */ I({
  __name: "Radio",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new B(i, l, o.id, o.meta), { bindings: u } = R(Object.keys(pt.props), a.ui), t = b(() => a.ui.value || {}), s = b({
      get() {
        return a.value;
      },
      set(d) {
        a.value = d;
      }
    });
    function p() {
      t.value.change && t.value.change(e(s));
    }
    return (d, c) => {
      const f = $("a-radio-group");
      return y(), C(K, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          w(f, D({
            class: { "v__radio-vertical": e(t).direction === "vertical" }
          }, e(u), {
            value: e(s),
            "onUpdate:value": c[0] || (c[0] = (r) => M(s) ? s.value = r : null),
            disabled: n.meta.readOnly,
            onChange: p
          }), null, 16, ["class", "value", "disabled"])
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
}), tn = /* @__PURE__ */ I({
  __name: "Select",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new B(i, l, o.id, o.meta), { bindings: u } = R(Object.keys(ht.props), a.ui), t = b(() => a.ui.value || {}), s = b({
      get() {
        return a.value;
      },
      set(x) {
        a.value = x;
      }
    });
    function p(x, N) {
      e(t).change && e(t).change(x, N);
    }
    function d() {
      e(t).blur && e(t).blur();
    }
    function c(x, N) {
      e(t).deselect && e(t).deselect(x, N);
    }
    function f(x) {
      e(t).dropdownVisibleChange && e(t).dropdownVisibleChange(x);
    }
    function r() {
      e(t).focus && e(t).focus();
    }
    function m() {
      e(t).inputKeyDown && e(t).inputKeyDown();
    }
    function h() {
      e(t).mouseenter && e(t).mouseenter();
    }
    function g() {
      e(t).mouseleave && e(t).mouseleave();
    }
    function _() {
      e(t).popupScroll && e(t).popupScroll();
    }
    function P(x) {
      e(t).search && e(t).search(x);
    }
    function k(x, N) {
      e(t).select && e(t).select(x, N);
    }
    return (x, N) => {
      const j = $("a-select");
      return y(), C(K, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          w(j, D({
            value: e(s),
            "onUpdate:value": N[0] || (N[0] = (X) => M(s) ? s.value = X : null)
          }, e(u), {
            disabled: n.meta.readOnly,
            onBlur: d,
            onDeselect: c,
            onFocus: r,
            onInputKeydown: m,
            onMouseenter: h,
            onMouseleave: g,
            onPopupScroll: _,
            onSearch: P,
            onSelect: k,
            onDropdownVisibleChange: f,
            onChange: p
          }), F({
            default: v(() => [
              e(t).slotNameOfSelectDefault ? O(x.$slots, e(t).slotNameOfSelectDefault, { key: 0 }) : z("", !0)
            ]),
            _: 2
          }, [
            e(t).slotNameOfClearIcon ? {
              name: "clearIcon",
              fn: v(() => [
                O(x.$slots, e(t).slotNameOfClearIcon)
              ]),
              key: "0"
            } : void 0,
            e(t).slotNameOfDropdownRender ? {
              name: "dropdownRender",
              fn: v(() => [
                O(x.$slots, e(t).slotNameOfDropdownRender)
              ]),
              key: "1"
            } : void 0,
            e(t).slotNameOfMaxTagPlaceholder ? {
              name: "maxTagPlaceholder",
              fn: v(() => [
                O(x.$slots, e(t).slotNameOfMaxTagPlaceholder)
              ]),
              key: "2"
            } : void 0,
            e(t).slotNameOfMenuItemSelectedIcon ? {
              name: "menuItemSelectedIcon",
              fn: v(() => [
                O(x.$slots, e(t).slotNameOfMenuItemSelectedIcon)
              ]),
              key: "3"
            } : void 0,
            e(t).slotNameOfNotFoundContent ? {
              name: "notFoundContent",
              fn: v(() => [
                O(x.$slots, e(t).slotNameOfNotFoundContent)
              ]),
              key: "4"
            } : void 0,
            e(t).slotNameOfOption ? {
              name: "option",
              fn: v((X) => [
                O(x.$slots, e(t).slotNameOfOption, Z(ee(X)))
              ]),
              key: "5"
            } : void 0,
            e(t).slotNameOfPlaceholder ? {
              name: "placeholder",
              fn: v(() => [
                O(x.$slots, e(t).slotNameOfPlaceholder)
              ]),
              key: "6"
            } : void 0,
            e(t).slotNameOfRemoveIcon ? {
              name: "removeIcon",
              fn: v(() => [
                O(x.$slots, e(t).slotNameOfRemoveIcon)
              ]),
              key: "7"
            } : void 0,
            e(t).slotNameOfSuffixIcon ? {
              name: "suffixIcon",
              fn: v(() => [
                O(x.$slots, e(t).slotNameOfSuffixIcon)
              ]),
              key: "8"
            } : void 0,
            e(t).slotNameOfTagRender ? {
              name: "tagRender",
              fn: v(() => [
                O(x.$slots, e(t).slotNameOfTagRender)
              ]),
              key: "9"
            } : void 0
          ]), 1040, ["value", "disabled"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
});
function L(n, o, l) {
  n.component(o, l);
}
function nn(n) {
  L(n, "v-object", Nt), L(n, "v-string", Vt), L(n, "v-boolean", It), L(n, "v-array", Bt), L(n, "v-autocomplete", Et), L(n, "v-checkbox", jt), L(n, "v-date", St), L(n, "v-number", Fe), L(n, "v-integer", Fe), L(n, "v-time", Dt), L(n, "v-text", Gt), L(n, "v-radio", en), L(n, "v-textarea", Wt), L(n, "v-slider", Jt), L(n, "v-rate", Yt), L(n, "v-tag", Xt), L(n, "v-select", tn), L(n, "v-cascader", Zt);
}
const an = [xt, K];
function on(n) {
  an.forEach((o) => {
    n.component(o.name, o);
  }), nn(n);
}
const ln = {
  installFormly: on
}, We = /* @__PURE__ */ I({
  __name: "ElFormlyItem",
  props: {
    id: null,
    show: { type: Boolean, default: !0 },
    meta: null
  },
  setup(n) {
    const o = n;
    let l = T(!0);
    const { slotsName: i } = ce(o.meta), a = E("state"), u = b(() => `v-${o.meta.ui && o.meta.ui.component || o.meta.type}`), t = b(() => a.layout);
    s();
    function s() {
      if (!o.meta.type)
        throw new Error(
          "Form item type must be one of these: number, string, boolean, array, object"
        );
      l.value = o.show, p(l.value, o.id);
      const { visibleIf: d } = Ue(), { appContext: c } = V();
      ne(c).on(`${xe}-${a._formId}`, (r) => {
        let m = d(a.context, o.meta, l.value, {
          id: r.id,
          value: r.value
        });
        m !== l.value && (l.value = m, p(l.value, o.id));
      });
    }
    function p(d, c) {
      d ? a._ignoreErrorIds = a._ignoreErrorIds.filter((f) => f !== c) : a._ignoreErrorIds.indexOf(c) === -1 && a._ignoreErrorIds.push(c);
    }
    return (d, c) => (y(), S("div", {
      style: ve({ display: e(t) === "inline" ? "inline-block" : "block" })
    }, [
      e(l) ? (y(), C(me(e(u)), {
        key: 0,
        id: n.id,
        meta: n.meta
      }, F({ _: 2 }, [
        H(e(i), (f) => ({
          name: f,
          fn: v((r) => [
            O(d.$slots, f, Z(ee({ ...r })))
          ])
        }))
      ]), 1032, ["id", "meta"])) : z("", !0)
    ], 4));
  }
}), sn = { class: "v__formly" }, un = { name: "v-formly-v3" }, rn = /* @__PURE__ */ I({
  ...un,
  props: {
    modelValue: null,
    layout: { default: "horizontal" },
    button: null,
    meta: null
  },
  emits: ["update:modelValue", "form-reset", "form-submit"],
  setup(n, { expose: o, emit: l }) {
    const i = n;
    if (!i.meta || typeof i.meta.properties > "u")
      throw new Error("Invalid Schema");
    let a = { type: Y.Object }, u = T(!1);
    const t = new He();
    Re("state", t);
    const { slotsName: s } = ce(i.meta), { appContext: p } = V(), d = ne(p);
    f();
    const c = b(() => i.layout === "inline");
    ue(
      () => i.modelValue,
      (k, x) => {
        JSON.stringify(k) !== JSON.stringify(x) && g(k);
      },
      {
        deep: !1
      }
    ), ue(
      () => t.formData,
      (k, x) => {
        l("update:modelValue", k);
      },
      {
        deep: !0
      }
    );
    function f() {
      t.layout = pe(i, "layout"), a = Object.assign({}, a, i.meta), t.meta = a, t.formData = Object.assign({}, i.modelValue), r(t.formData, i.meta.properties), t.context = new Be(), t.validate = new qe(p, t);
    }
    function r(k, x) {
      Object.keys(x).forEach((N) => {
        const j = x[N];
        if (j.type !== "null")
          switch (j.type) {
            case Y.Object:
              k[N] = k[N] || {}, r(k[N], j.properties);
              break;
            case Y.Array:
              k[N] = k[N] || [];
              break;
            case Y.Boolean:
              break;
            default:
              k[N] = k[N] || void 0;
              break;
          }
      });
    }
    function m(k) {
      return t.context.getContext(k);
    }
    async function h() {
      return await t.validate.runValidateForm();
    }
    function g(k) {
      const x = t.context.getContext("/");
      x && (x.value = k, l("update:modelValue", t.formData));
    }
    function _() {
      l("form-reset", re(t.formData)), g({});
    }
    async function P() {
      u.value = !0;
      const k = await h();
      u.value = !1, l("form-submit", {
        valid: k,
        data: k ? re(t.formData) : void 0
      });
    }
    return fe(() => {
      d.all.clear();
    }), o({
      getContext: m,
      validate: h,
      reset: g,
      clearForm: _,
      submitForm: P
    }), (k, x) => {
      const N = $("el-button"), j = $("el-space"), X = $("el-form-item"), ae = $("el-form");
      return y(), S("div", sn, [
        w(ae, {
          class: te(["v", {
            v__inline: e(c),
            v__horizontal: n.layout === "horizontal"
          }]),
          inline: e(c),
          "label-width": e(c) ? null : "120px",
          "label-position": n.layout === "vertical" ? "top" : "right"
        }, {
          default: v(() => [
            w(We, {
              id: "/",
              meta: e(a)
            }, F({ _: 2 }, [
              H(e(s), (oe) => ({
                name: oe,
                fn: v((de) => [
                  O(k.$slots, oe, Z(ee({ ...de })))
                ])
              }))
            ]), 1032, ["meta"]),
            n.button === "default" ? (y(), C(X, {
              key: 0,
              class: "v__default-submit-button"
            }, {
              default: v(() => [
                w(j, null, {
                  default: v(() => [
                    w(N, {
                      type: "danger",
                      onClick: _
                    }, {
                      default: v(() => [
                        W(" \u91CD\u7F6E ")
                      ]),
                      _: 1
                    }),
                    w(N, {
                      type: "primary",
                      onClick: P,
                      loading: e(u)
                    }, {
                      default: v(() => [
                        W(" \u63D0\u4EA4 ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : n.button === "custom" ? O(k.$slots, "button", {
              key: 1,
              loading: e(u),
              clearForm: _,
              submitForm: P
            }) : (y(), S(q, { key: 2 }, [], 64))
          ]),
          _: 3
        }, 8, ["inline", "label-width", "label-position", "class"])
      ]);
    };
  }
}), cn = ["title"], dn = {
  key: 0,
  class: "v__optional"
}, mn = ["innerHTML"], fn = { name: "v-wrapper" }, vn = /* @__PURE__ */ I({
  ...fn,
  props: {
    id: null,
    show: { type: Boolean },
    meta: null
  },
  setup(n) {
    const o = n, { globalProperties: l } = he(), i = E("state"), a = i.context.getContext(o.id), u = b(() => Object.assign({}, i.ui, o.meta.ui)), t = b(() => Object.assign({}, i.ui, o.meta.ui).optionalHelp), s = b({
      get() {
        return a.error.value;
      },
      set(f) {
        a.error.value = f;
      }
    }), { appContext: p } = V(), d = ne(p);
    d.on(`${le}-${i._formId}`, c), fe(() => {
      d.off(`${le}-${i._formId}`, c);
    });
    function c(f) {
      f.id === o.id && (s.value = f.error ? f.error.message : void 0);
    }
    return (f, r) => {
      const m = $("el-icon"), h = $("el-tooltip"), g = $("el-form-item");
      return y(), C(g, {
        required: e(u).showRequired,
        error: e(s),
        size: e(u).size,
        class: te([{ "no-label": !n.meta.title }])
      }, F({
        default: v(() => [
          O(f.$slots, "default", {}, void 0, !0),
          n.meta.description ? (y(), S("div", {
            key: 0,
            innerHTML: n.meta.description
          }, null, 8, mn)) : z("", !0)
        ]),
        _: 2
      }, [
        n.meta.title ? {
          name: "label",
          fn: v(() => [
            J("span", {
              class: "v__label-text",
              title: n.meta.title
            }, U(n.meta.title), 9, cn),
            e(u).optional || e(t) ? (y(), S("span", dn, [
              W(U(e(u).optional) + " ", 1),
              e(t).icon ? (y(), C(h, D({ key: 0 }, e(t), {
                placement: e(t).placement || "top"
              }), {
                default: v(() => [
                  w(m, null, {
                    default: v(() => [
                      (y(), C(me(e(l).$elIcons[e(t).icon])))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 16, ["placement"])) : z("", !0)
            ])) : z("", !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["required", "error", "size", "class"]);
    };
  }
});
const Q = /* @__PURE__ */ ge(vn, [["__scopeId", "data-v-fd574d86"]]), pn = /* @__PURE__ */ I({
  __name: "Object",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, { slotsName: l } = ce(o.meta), i = E("state"), { appContext: a } = V(), u = new Ke(a, i, o.id, o.meta), t = b(() => u.ui.value || {}), s = b(() => p.value === "inline" ? 0 : Object.assign({}, i.ui.grid, t.value.grid).gutter), p = b(() => i.layout.value);
    function d(r) {
      return r.ui && r.ui.show;
    }
    function c(r) {
      if (p.value === "inline")
        return { span: null };
      const m = r.meta.ui && r.meta.ui.grid || {};
      return Object.assign({}, i.ui.grid, t.value.grid, m);
    }
    const f = u.childMetaPairs;
    return (r, m) => {
      const h = $("el-col"), g = $("el-row");
      return y(), C(g, { gutter: e(s) }, {
        default: v(() => [
          (y(!0), S(q, null, H(e(f), (_, P) => (y(), C(h, {
            key: P,
            span: c(_).span,
            offset: c(_).offset,
            xs: c(_).xs,
            sm: c(_).sm,
            md: c(_).md,
            lg: c(_).lg,
            xl: c(_).xl,
            xxl: c(_).xxl,
            style: ve({ display: e(p) === "inline" ? "inline-block" : "block" })
          }, {
            default: v(() => [
              w(We, {
                id: _.key,
                meta: _.meta,
                show: d(_.meta)
              }, F({ _: 2 }, [
                H(e(l), (k) => ({
                  name: k,
                  fn: v((x) => [
                    O(r.$slots, k, Z(ee({ ...x })))
                  ])
                }))
              ]), 1032, ["id", "meta", "show"])
            ]),
            _: 2
          }, 1032, ["span", "offset", "xs", "sm", "md", "lg", "xl", "xxl", "style"]))), 128))
        ]),
        _: 3
      }, 8, ["gutter"]);
    };
  }
}), hn = /* @__PURE__ */ I({
  __name: "String",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new B(i, l, o.id, o.meta), { bindings: u } = R(Object.keys(we.props), a.ui), t = b(() => a.ui.value || {}), s = b({
      get() {
        return a.value;
      },
      set(d) {
        a.value = d;
      }
    });
    function p(d) {
      t.value.change && t.value.change(d);
    }
    return (d, c) => (y(), C(Q, {
      id: n.id,
      meta: n.meta
    }, {
      default: v(() => [
        w(e(we), D(e(u), {
          disabled: n.meta.readOnly,
          minlength: n.meta.minLength,
          maxlength: n.meta.maxLength,
          modelValue: e(s),
          "onUpdate:modelValue": c[0] || (c[0] = (f) => M(s) ? s.value = f : null),
          onChange: p
        }), F({ _: 2 }, [
          e(t).slotNameOfPrefix ? {
            name: "prefix",
            fn: v(() => [
              O(d.$slots, e(t).slotNameOfPrefix)
            ]),
            key: "0"
          } : void 0,
          e(t).slotNameOfSuffix ? {
            name: "suffix",
            fn: v(() => [
              O(d.$slots, e(t).slotNameOfSuffix)
            ]),
            key: "1"
          } : void 0,
          e(t).slotNameOfPrepend ? {
            name: "prepend",
            fn: v(() => [
              O(d.$slots, e(t).slotNameOfPrepend)
            ]),
            key: "2"
          } : void 0,
          e(t).slotNameOfAppend ? {
            name: "append",
            fn: v(() => [
              O(d.$slots, e(t).slotNameOfAppend)
            ]),
            key: "3"
          } : void 0
        ]), 1040, ["disabled", "minlength", "maxlength", "modelValue"])
      ]),
      _: 3
    }, 8, ["id", "meta"]));
  }
}), gn = /* @__PURE__ */ I({
  __name: "Boolean",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new Ge(i, l, o.id, o.meta), { bindings: u } = R(Object.keys(Ne.props), a.ui), t = b(() => a.ui.value || {});
    u.value.style = pe(t.value, "style");
    const s = b({
      get() {
        return a.value;
      },
      set(d) {
        a.value = d || !1;
      }
    });
    function p(d) {
      t.value.change && t.value.change(d);
    }
    return (d, c) => (y(), C(Q, {
      id: n.id,
      meta: n.meta
    }, {
      default: v(() => [
        w(e(Ne), D({
          class: "v__boolean",
          modelValue: e(s),
          "onUpdate:modelValue": c[0] || (c[0] = (f) => M(s) ? s.value = f : null)
        }, e(u), {
          disabled: n.meta.readOnly,
          onChange: p
        }), null, 16, ["modelValue", "disabled"])
      ]),
      _: 1
    }, 8, ["id", "meta"]));
  }
}), yn = /* @__PURE__ */ I({
  __name: "AutoComplete",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new B(i, l, o.id, o.meta), { bindings: u } = R(Object.keys(Ve.props), a.ui), t = b(() => a.ui.value || {}), s = b({
      get() {
        return a.value;
      },
      set(c) {
        a.value = c || void 0;
      }
    });
    function p(c) {
      t.value.change && t.value.change(e(c));
    }
    function d(c) {
      t.value.select && t.value.select(c);
    }
    return (c, f) => (y(), C(Q, {
      id: n.id,
      meta: n.meta
    }, {
      default: v(() => [
        w(e(Ve), D(e(u), {
          disabled: n.meta.readOnly,
          modelValue: e(s),
          "onUpdate:modelValue": f[0] || (f[0] = (r) => M(s) ? s.value = r : null),
          onChange: p,
          onSelect: d
        }), F({ _: 2 }, [
          e(t).slotNameOfPrefix ? {
            name: "prefix",
            fn: v(() => [
              O(c.$slots, e(t).slotNameOfPrefix)
            ]),
            key: "0"
          } : void 0,
          e(t).slotNameOfSuffix ? {
            name: "suffix",
            fn: v(() => [
              O(c.$slots, e(t).slotNameOfSuffix)
            ]),
            key: "1"
          } : void 0,
          e(t).slotNameOfPrepend ? {
            name: "prepend",
            fn: v(() => [
              O(c.$slots, e(t).slotNameOfPrepend)
            ]),
            key: "2"
          } : void 0,
          e(t).slotNameOfAppend ? {
            name: "append",
            fn: v(() => [
              O(c.$slots, e(t).slotNameOfAppend)
            ]),
            key: "3"
          } : void 0,
          e(t).slotNameOfDefault ? {
            name: "default",
            fn: v((r) => [
              O(c.$slots, e(t).slotNameOfDefault, Z(ee(r)))
            ]),
            key: "4"
          } : void 0
        ]), 1040, ["disabled", "modelValue"])
      ]),
      _: 3
    }, 8, ["id", "meta"]));
  }
}), bn = /* @__PURE__ */ I({
  __name: "Checkbox",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new B(i, l, o.id, o.meta), u = b(() => a.ui.value || {});
    let t = T();
    if (u.value.group) {
      const { bindings: d } = R(
        Object.keys(Ie.props),
        a.ui
      );
      t.value = d.value;
    } else {
      const { bindings: d } = R(Object.keys(ye.props), a.ui);
      t.value = d.value;
    }
    const s = b({
      get() {
        return a.value;
      },
      set(d) {
        a.value = d;
      }
    });
    function p(d) {
      u.value.change && u.value.change(d);
    }
    return (d, c) => {
      const f = $("el-checkbox-button");
      return y(), C(Q, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          e(u).group ? (y(), C(e(Ie), D({
            key: 0,
            class: "v__checkbox",
            modelValue: e(s),
            "onUpdate:modelValue": c[0] || (c[0] = (r) => M(s) ? s.value = r : null)
          }, e(t), {
            disabled: n.meta.readOnly,
            onChange: p
          }), {
            default: v(() => [
              e(u).button ? (y(!0), S(q, { key: 0 }, H(e(u).options, (r, m) => (y(), C(f, {
                key: m,
                label: r.label
              }, {
                default: v(() => [
                  W(U(r.label), 1)
                ]),
                _: 2
              }, 1032, ["label"]))), 128)) : (y(!0), S(q, { key: 1 }, H(e(u).options, (r, m) => (y(), C(e(ye), {
                key: m,
                label: r.label,
                disabled: r.disabled
              }, {
                default: v(() => [
                  W(U(r.label), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 16, ["modelValue", "disabled"])) : (y(), C(e(ye), D({
            key: 1,
            class: "v__checkbox",
            modelValue: e(s),
            "onUpdate:modelValue": c[1] || (c[1] = (r) => M(s) ? s.value = r : null)
          }, e(t), {
            disabled: n.meta.readOnly,
            onChange: p
          }), null, 16, ["modelValue", "disabled"]))
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
}), _n = /* @__PURE__ */ I({
  __name: "Date",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new B(i, l, o.id, o.meta), { bindings: u } = R(Object.keys(Ee.props), a.ui), t = b(() => a.ui.value || {}), s = b({
      get() {
        return a.value;
      },
      set(d) {
        a.value = d;
      }
    });
    function p(d) {
      t.value.change && t.value.change(d);
    }
    return (d, c) => (y(), C(Q, {
      id: n.id,
      meta: n.meta
    }, {
      default: v(() => [
        w(e(Ee), D({
          modelValue: e(s),
          "onUpdate:modelValue": c[0] || (c[0] = (f) => M(s) ? s.value = f : null)
        }, e(u), {
          disabled: n.meta.readOnly,
          onChange: p
        }), F({ _: 2 }, [
          e(t).slotNameOfRangeSeparator ? {
            name: "range-separator",
            fn: v(() => [
              O(d.$slots, e(t).slotNameOfRangeSeparator)
            ]),
            key: "0"
          } : void 0,
          e(t).slotNameOfDefault ? {
            name: "default",
            fn: v((f) => [
              O(d.$slots, e(t).slotNameOfDefault, Z(ee(f)))
            ]),
            key: "1"
          } : void 0
        ]), 1040, ["modelValue", "disabled"])
      ]),
      _: 3
    }, 8, ["id", "meta"]));
  }
}), xn = /* @__PURE__ */ I({
  __name: "Time",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new B(i, l, o.id, o.meta), { bindings: u } = R(Object.keys(je.props), a.ui), t = b(() => a.ui.value || {}), s = b({
      get() {
        return a.value;
      },
      set(d) {
        a.value = d;
      }
    });
    function p(d) {
      t.value.change && t.value.change(d);
    }
    return (d, c) => (y(), C(Q, {
      id: n.id,
      meta: n.meta
    }, {
      default: v(() => [
        w(e(je), D({
          class: "v__time",
          modelValue: e(s),
          "onUpdate:modelValue": c[0] || (c[0] = (f) => M(s) ? s.value = f : null)
        }, e(u), {
          disabled: n.meta.readOnly,
          onChange: p
        }), null, 16, ["modelValue", "disabled"])
      ]),
      _: 1
    }, 8, ["id", "meta"]));
  }
}), kn = /* @__PURE__ */ I({
  __name: "Number",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new ie(i, l, o.id, o.meta), { bindings: u } = R(Object.keys(Se.props), a.ui), t = b(() => a.ui.value || {}), s = b({
      get() {
        return a.value;
      },
      set(d) {
        a.value = d;
      }
    });
    function p(d, c) {
      t.value.change && t.value.change(d, c);
    }
    return (d, c) => (y(), C(Q, {
      id: n.id,
      meta: n.meta
    }, {
      default: v(() => [
        w(e(Se), D({
          class: "v__number",
          modelValue: e(s),
          "onUpdate:modelValue": c[0] || (c[0] = (f) => M(s) ? s.value = f : null)
        }, e(u), {
          disabled: n.meta.readOnly,
          min: n.meta.minimum,
          max: n.meta.maximum,
          onChange: p
        }), null, 16, ["modelValue", "disabled", "min", "max"])
      ]),
      _: 1
    }, 8, ["id", "meta"]));
  }
}), On = { class: "v__label-text" }, Cn = ["innerHTML"], $n = ["textContent"], wn = /* @__PURE__ */ I({
  __name: "Text",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new B(i, l, o.id, o.meta), u = b(() => a.ui.value || {}), t = b(
      () => ze(e(u).text) ? e(u).text() : e(u).text
    );
    return (s, p) => {
      const d = $("el-form-item");
      return y(), S("div", null, [
        w(d, {
          class: te({ "no-label": !n.meta.title })
        }, F({
          default: v(() => [
            e(u).slotNameOfDefault ? O(s.$slots, e(u).slotNameOfDefault, { key: 0 }) : (y(), S(q, { key: 1 }, [
              e(u).html ? (y(), S("span", {
                key: 0,
                innerHTML: e(u).html,
                class: "v__content-text"
              }, null, 8, Cn)) : (y(), S("span", {
                key: 1,
                textContent: U(e(t)),
                class: "v__content-text"
              }, null, 8, $n))
            ], 64))
          ]),
          _: 2
        }, [
          n.meta.title ? {
            name: "label",
            fn: v(() => [
              J("span", On, U(n.meta.title), 1)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["class"])
      ]);
    };
  }
}), Nn = /* @__PURE__ */ I({
  __name: "Slider",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new ie(i, l, o.id, o.meta), { bindings: u } = R(Object.keys(De.props), a.ui), t = b(() => a.ui.value || {}), s = b({
      get() {
        return a.value;
      },
      set(c) {
        t.value.range ? a.value = c || [] : a.value = Oe(c) ? c : void 0;
      }
    });
    function p(c) {
      var f, r;
      (r = (f = e(t)).input) == null || r.call(f, c);
    }
    function d(c) {
      var f, r;
      (r = (f = e(t)).change) == null || r.call(f, c);
    }
    return (c, f) => (y(), C(Q, {
      id: n.id,
      meta: n.meta
    }, {
      default: v(() => [
        w(e(De), D(e(u), {
          disabled: n.meta.readOnly,
          min: n.meta.minimum || 0,
          max: n.meta.maximum || 100,
          step: n.meta.multipleOf || 1,
          modelValue: e(s),
          "onUpdate:modelValue": f[0] || (f[0] = (r) => M(s) ? s.value = r : null),
          onInput: p,
          onChange: d
        }), null, 16, ["disabled", "min", "max", "step", "modelValue"])
      ]),
      _: 1
    }, 8, ["id", "meta"]));
  }
}), Vn = /* @__PURE__ */ I({
  __name: "Rate",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new ie(i, l, o.id, o.meta), { bindings: u } = R(Object.keys(Me.props), a.ui), t = b(() => a.ui.value || {}), s = b({
      get() {
        return a.value;
      },
      set(d) {
        a.value = d;
      }
    });
    function p(d) {
      var c, f;
      (f = (c = e(t)).change) == null || f.call(c, d);
    }
    return (d, c) => (y(), C(Q, {
      id: n.id,
      meta: n.meta
    }, {
      default: v(() => [
        w(e(Me), D(e(u), {
          disabled: n.meta.readOnly,
          max: n.meta.maximum || 5,
          modelValue: e(s),
          "onUpdate:modelValue": c[0] || (c[0] = (f) => M(s) ? s.value = f : null),
          onChange: p
        }), null, 16, ["disabled", "max", "modelValue"])
      ]),
      _: 1
    }, 8, ["id", "meta"]));
  }
}), In = /* @__PURE__ */ I({
  __name: "Tag",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new ie(i, l, o.id, o.meta), u = T([]), t = b(() => a.ui.value || {}), s = b({
      get() {
        return a.value;
      },
      set(f) {
        t.value.range ? a.value = f || [] : a.value = f;
      }
    });
    ue(() => e(a.meta).enum, c, { immediate: !0 });
    function p(f, r) {
      var m, h, g, _;
      f.disabled || (f.checked = r, d(), (h = (m = e(t)).checkedChange) == null || h.call(m, r), (_ = (g = e(t)).change) == null || _.call(g, re(e(s))));
    }
    function d() {
      const f = e(u).filter((r) => r.checked).map((r) => r.value);
      s.value = f.length ? f : void 0;
    }
    function c(f) {
      let r = e(f);
      r == null || !Array.isArray(r) || r.length === 0 || (typeof r[0] != "object" && (r = r.map((m) => ({
        label: m,
        value: m
      }))), r.forEach((m) => {
        m.checked = (s.value || []).indexOf(m.value) > -1;
      }), r.forEach((m) => m.disabled = o.meta.readOnly), u.value = r);
    }
    return (f, r) => {
      const m = $("el-check-tag");
      return y(), C(Q, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          (y(!0), S(q, null, H(u.value, (h) => (y(), C(m, {
            key: h.value,
            class: te({ disabled: h.disabled }),
            checked: h.checked,
            onChange: (g) => p(h, g)
          }, {
            default: v(() => [
              J("span", null, U(h.label), 1)
            ]),
            _: 2
          }, 1032, ["class", "checked", "onChange"]))), 128))
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
});
const En = /* @__PURE__ */ ge(In, [["__scopeId", "data-v-19eb1c83"]]), jn = /* @__PURE__ */ I({
  __name: "Radio",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new B(i, l, o.id, o.meta), { bindings: u } = R(Object.keys(Pe.props), a.ui), t = b(() => a.ui.value || {}), s = b({
      get() {
        return a.value;
      },
      set(d) {
        a.value = d;
      }
    });
    function p(d) {
      t.value.change && t.value.change(d);
    }
    return (d, c) => {
      const f = $("el-radio-button"), r = $("el-radio");
      return y(), C(Q, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          w(e(Pe), D(e(u), {
            modelValue: e(s),
            "onUpdate:modelValue": c[0] || (c[0] = (m) => M(s) ? s.value = m : null),
            disabled: n.meta.readOnly,
            onChange: p
          }), F({
            default: v(() => [
              e(t).button ? (y(!0), S(q, { key: 0 }, H(e(t).options, (m, h) => (y(), C(f, {
                key: h,
                label: m.label,
                size: e(t).size,
                border: e(t).border,
                disabled: n.meta.readOnly || m.disabled
              }, {
                default: v(() => [
                  W(U(m.text || m.label), 1)
                ]),
                _: 2
              }, 1032, ["label", "size", "border", "disabled"]))), 128)) : (y(!0), S(q, { key: 1 }, H(e(t).options, (m, h) => (y(), C(r, {
                key: h,
                label: m.label,
                size: e(t).size,
                border: e(t).border,
                disabled: n.meta.readOnly || m.disabled
              }, {
                default: v(() => [
                  W(U(m.text || m.label), 1)
                ]),
                _: 2
              }, 1032, ["label", "size", "border", "disabled"]))), 128))
            ]),
            _: 2
          }, [
            e(t).slotNameOfDefault ? {
              name: "default",
              fn: v(() => [
                O(d.$slots, e(t).slotNameOfDefault)
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue", "disabled"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), Sn = /* @__PURE__ */ I({
  __name: "Select",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const o = n, l = E("state"), { appContext: i } = V(), a = new B(i, l, o.id, o.meta), { bindings: u } = R(Object.keys(Ae.props), a.ui), t = b(() => a.ui.value || {}), s = b({
      get() {
        return a.value;
      },
      set(h) {
        a.value = h;
      }
    });
    function p(h) {
      e(t).change && e(t).change(h);
    }
    function d() {
      e(t).blur && e(t).blur();
    }
    function c(h) {
      e(t).visibleChange && e(t).visibleChange(h);
    }
    function f() {
      e(t).focus && e(t).focus();
    }
    function r() {
      e(t).clear && e(t).clear();
    }
    function m(h) {
      e(t).select && e(t).removeTag(h);
    }
    return (h, g) => {
      const _ = $("el-option");
      return y(), C(Q, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          w(e(Ae), D({
            modelValue: e(s),
            "onUpdate:modelValue": g[0] || (g[0] = (P) => M(s) ? s.value = P : null)
          }, e(u), {
            disabled: n.meta.readOnly,
            onBlur: d,
            onFocus: f,
            onClear: r,
            onRemoveTag: m,
            onVisibleChange: c,
            onChange: p
          }), F({
            default: v(() => [
              (y(!0), S(q, null, H(e(t).options, (P, k) => (y(), C(_, {
                key: k,
                label: P.label,
                value: P.value,
                disabled: P.disabled
              }, null, 8, ["label", "value", "disabled"]))), 128))
            ]),
            _: 2
          }, [
            e(t).slotNameOfSelectDefault ? {
              name: "default",
              fn: v(() => [
                O(h.$slots, e(t).slotNameOfSelectDefault)
              ]),
              key: "0"
            } : void 0,
            e(t).slotNameOfPrefix ? {
              name: "prefix",
              fn: v(() => [
                O(h.$slots, e(t).slotNameOfPrefix)
              ]),
              key: "1"
            } : void 0,
            e(t).slotNameOfEmpty ? {
              name: "empty",
              fn: v(() => [
                O(h.$slots, e(t).slotNameOfEmpty)
              ]),
              key: "2"
            } : void 0
          ]), 1040, ["modelValue", "disabled"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
});
function G(n, o, l) {
  n.component(o, l);
}
function Dn(n) {
  G(n, "v-object", pn), G(n, "v-string", hn), G(n, "v-boolean", gn), G(n, "v-autocomplete", yn), G(n, "v-checkbox", bn), G(n, "v-date", _n), G(n, "v-number", kn), G(n, "v-time", xn), G(n, "v-text", wn), G(n, "v-radio", jn), G(n, "v-slider", Nn), G(n, "v-rate", Vn), G(n, "v-tag", En), G(n, "v-select", Sn);
}
const Mn = [rn, Q];
function Pn(n) {
  Mn.forEach((o) => {
    n.component(o.name, o);
  }), Dn(n);
}
const An = {
  installFormly: Pn
}, Fn = function(n, o) {
  if (n.config.globalProperties.emitter = Ze(), !o.lib || o.lib === "ant-design-vue")
    ln.installFormly(n);
  else if (o.lib === "element-plus")
    An.installFormly(n);
  else
    throw new Error("Unsupport lib");
  return n.config.globalProperties.$VFORMLY_OPTIONS = o, n;
}, qn = {
  install: Fn
};
export {
  qn as default
};
