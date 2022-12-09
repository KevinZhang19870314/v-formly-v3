var Ce = Object.defineProperty;
var Ve = (o, e, a) => e in o ? Ce(o, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[e] = a;
var $ = (o, e, a) => (Ve(o, typeof e != "symbol" ? e + "" : e, a), a);
import we from "mitt";
import { ref as N, getCurrentInstance as P, isRef as A, defineComponent as C, inject as M, computed as O, openBlock as x, createElementBlock as F, normalizeStyle as ie, unref as n, createBlock as w, resolveDynamicComponent as $e, createSlots as L, renderList as K, withCtx as g, renderSlot as E, normalizeProps as ne, guardReactiveProps as ae, createCommentVNode as ce, provide as Ee, watch as te, toRef as I, onBeforeUnmount as de, resolveComponent as V, createVNode as j, normalizeClass as oe, createTextVNode as J, Fragment as G, toRaw as re, createElementVNode as H, withDirectives as ge, toDisplayString as W, vShow as ye, reactive as je, mergeProps as D, nextTick as Ie, onMounted as Ne } from "vue";
import Pe from "ajv";
import { Input as Me, Switch as Re, AutoComplete as Ae, CheckboxGroup as De, DRangeDatePickerPro as _e, DatePickerPro as Te, TimePicker as Fe, InputNumber as Se, Textarea as Ue, Slider as Be, Rate as Le, RadioGroup as ze, Select as Ke } from "vue-devui";
const be = "form-value-change", Q = "form-error-change";
function Y(o) {
  return o.config.globalProperties.emitter;
}
class q {
  constructor(e, a, l, t) {
    $(this, "id");
    $(this, "state");
    $(this, "meta", N({}));
    $(this, "type");
    $(this, "ui", N({}));
    $(this, "error", N(void 0));
    $(this, "_value", N());
    $(this, "_initMetaValue");
    $(this, "appContext");
    if (this.constructor == q)
      throw new Error("Abstract classes can't be instantiated.");
    this.id = l, this.state = a, this.meta.value = t, this.type = t.ui && t.ui.component || t.type, this.ui.value = Object.assign({}, a.ui, t.ui), this.appContext = e, this.error.value = void 0, a.context.addContext(l, this), this._value.value = void 0, this._initMetaValue = this.getInitMetaValue();
  }
  get value() {
    return this._value.value;
  }
  set value(e) {
    if (this._value.value === e)
      return;
    this.setValue(e), Y(this.appContext).emit(`${be}-${this.state._formId}`, {
      id: this.id,
      value: this._value.value
    }), this.state.updateObjProp(this.state.formData, this.id, this._value.value), this.state.validate.runValidationFormItem(this);
  }
  getInitMetaValue() {
    const e = this.id.split("/").filter((l) => l);
    let a = "";
    return e.reduce((l, t, i) => (i === e.length - 1 && (a = l[t]), l[t] || {}), this.state.formData), a;
  }
}
var B = /* @__PURE__ */ ((o) => (o.Object = "object", o.Array = "array", o.Boolean = "boolean", o.Integer = "integer", o))(B || {});
class He {
  constructor() {
    $(this, "_map", /* @__PURE__ */ new Map());
  }
  addContext(e, a) {
    this._map.set(e, a);
  }
  removeContext(e) {
    this._map.delete(e);
  }
  getContext(e) {
    return this._map.get(e);
  }
  getContexts() {
    return this._map;
  }
  getMap() {
    return this._map;
  }
}
function xe(o = 8, e = 10) {
  const a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), l = e || a.length, t = [];
  if (o)
    for (let i = 0; i < o; i++)
      t[i] = a[0 | Math.random() * l];
  else {
    let i;
    t[8] = t[13] = t[18] = t[23] = "-", t[14] = "4";
    for (let c = 0; c < 36; c++)
      t[c] || (i = 0 | Math.random() * 16, t[c] = a[c == 19 ? i & 3 | 8 : i]);
  }
  return t.join("");
}
function X(o) {
  if (o === void 0)
    return;
  if (o === null)
    return null;
  const e = Object.assign({}, o);
  return Object.keys(e).forEach(
    (a) => e[a] = typeof o[a] == "object" ? X(o[a]) : o[a]
  ), Array.isArray(o) ? (e.length = o.length, Array.from(e)) : e;
}
const Ge = Array.isArray, We = (o) => typeof o == "function", Oe = (o) => typeof o == "number", qe = (o) => o !== null && typeof o == "object";
function Je() {
  const { appContext: o } = P(), e = o.config.globalProperties;
  return {
    appContext: o,
    globalProperties: e
  };
}
class Ye {
  constructor() {
    $(this, "_formId", xe(4));
    $(this, "_ignoreErrorIds", []);
    $(this, "_context");
    $(this, "_layout", N("horizontal"));
    $(this, "_ajvOptions", {
      allErrors: !0,
      strict: !1,
      loopEnum: 50
    });
    $(this, "_formData", N({}));
    $(this, "_meta", {});
    $(this, "_ui", {
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
    $(this, "_validate");
    this._applyUseOptions();
  }
  get context() {
    return this._context;
  }
  set context(e) {
    this._context = e;
  }
  get layout() {
    return this._layout;
  }
  set layout(e) {
    this._layout = e;
  }
  get ajvOptions() {
    return this._ajvOptions;
  }
  set ajvOptions(e) {
    this._ajvOptions = e;
  }
  get formData() {
    return this._formData.value;
  }
  set formData(e) {
    this._formData.value = e;
  }
  get meta() {
    return this._meta;
  }
  set meta(e) {
    this._meta = e;
  }
  get ui() {
    return this._ui;
  }
  set ui(e) {
    this._ui = Object.assign({}, this._ui, e);
  }
  get validate() {
    return this._validate;
  }
  set validate(e) {
    this._validate = e;
  }
  updateObjProp(e, a, l) {
    const [t, ...i] = a.split("/").filter((c) => c);
    i.length ? this.updateObjProp(e[t], i.join("/"), l) : e && (e[t] = l);
  }
  _applyUseOptions() {
    const { globalProperties: e } = Je(), a = e.$VFORMLY_OPTIONS;
    !a || typeof a != "object" || (this.ui = a.ui);
  }
}
class Qe {
  constructor(e, a) {
    $(this, "state");
    $(this, "_ajv");
    $(this, "_validate");
    $(this, "appContext");
    this.state = a, this._ajv = new Pe(a.ajvOptions), this._validate = null, this.appContext = e;
  }
  async runValidateForm() {
    const { valid: e, errors: a } = this._isAjvValid(), t = this.state.context.getContexts().values();
    let i = !0;
    for (const c of t)
      i = await this._validation(c, e, a) && i;
    return i;
  }
  async runValidationFormItem(e) {
    const { valid: a, errors: l } = this._isAjvValid();
    return await this._validation(e, a, l);
  }
  _ajvValidate(e) {
    if (this._validate)
      return this._validate;
    const a = X(e);
    return this._replaceReactiveToRawData(a), this._validate = this._ajv.compile(a), this._validate;
  }
  _forceCompile() {
    const e = X(this.state.meta);
    this._replaceReactiveToRawData(e), this._validate = this._ajv.compile(e);
  }
  _replaceReactiveToRawData(e) {
    var t;
    let a, l;
    switch (e.type) {
      case B.Object:
        a = Object.values(e.properties), a.forEach((i) => {
          this._replaceReactiveToRawData(i);
        });
        break;
      case B.Array:
        l = Object.keys(e), l.forEach((i) => {
          A(e[i]) && (e[i] = e[i]._value);
        }), a = Object.values((t = e.items) == null ? void 0 : t.properties), a.forEach((i) => {
          this._replaceReactiveToRawData(i);
        });
        break;
      default:
        l = Object.keys(e), l.forEach((i) => {
          A(e[i]) && (e[i] = e[i]._value);
        });
        break;
    }
  }
  _getAjvError(e, a) {
    let l;
    for (let t = 0; t < a.length; t++) {
      const i = a[t], c = this._getId(i);
      if (e === c) {
        l = i;
        break;
      }
    }
    return l;
  }
  _isAjvValid() {
    const e = this._ajvValidate(this.state.meta);
    return { valid: e(this.state.formData || {}), errors: e.errors };
  }
  async _validation(e, a, l) {
    let t = [];
    const i = `${Q}-${this.state._formId}`, c = Y(this.appContext);
    if (a)
      return c.emit(i, {
        id: e.id,
        error: void 0
      }), !0;
    {
      const d = this._getCustomError(e), u = await this._getCustomAsyncError(e), p = [...d, ...u];
      this._replaceWithDefaultErrors(e, l), this._replaceWithCustomErrors(e.id, l, p);
      const f = this.state.ui.ingoreKeywords || [];
      t = l.filter(
        (_) => f.indexOf(_.keyword) === -1
      ), t = this._removeIgnoreErrors(t);
      const m = this._getAjvError(e.id, t);
      return c.emit(i, {
        id: e.id,
        error: m
      }), !m;
    }
  }
  _getCustomError(e) {
    var l, t;
    const a = (t = (l = e.ui) == null ? void 0 : l.value) == null ? void 0 : t.validator;
    return a ? a(e.value) : [];
  }
  async _getCustomAsyncError(e) {
    var l, t;
    const a = (t = (l = e.ui) == null ? void 0 : l.value) == null ? void 0 : t.validatorAsync;
    return a ? await a(e.value) : [];
  }
  _replaceWithDefaultErrors(e, a) {
    var c, d;
    if (!a || a.length === 0)
      return;
    const l = ((d = (c = e.ui) == null ? void 0 : c.value) == null ? void 0 : d.errors) || {}, t = Object.assign({}, this.state.ui.errors, l), i = Object.keys(t);
    i && i.length > 0 && a.forEach((u) => {
      i.indexOf(u.keyword) > -1 && (u.message = t[u.keyword]);
    });
  }
  _replaceWithCustomErrors(e, a, l) {
    l.forEach((t) => {
      const i = a.find(
        (c) => c.keyword === t.keyword && this._getId(c) === e
      );
      i && (i.message = t.message);
    });
  }
  _removeIgnoreErrors(e) {
    const a = this.state._ignoreErrorIds;
    return !a || a.length === 0 ? e : e.filter((t) => a.indexOf(this._getId(t)) === -1);
  }
  _getId(e) {
    return e.params && e.params.missingProperty ? `${e.instancePath ? e.instancePath : ""}/${e.params.missingProperty}` : `${e.instancePath}`;
  }
}
function me(o) {
  const e = [], a = "slotName";
  return o && !o.type && (o.type = B.Object), ue(o, e, a), { slotsName: e };
}
function ue(o, e, a) {
  switch (o.type) {
    case B.Object:
      Object.keys(o.properties).forEach((l) => {
        const t = o.properties[l];
        ue(t, e, a);
      });
      break;
    case B.Array:
      Object.keys(o.items.properties).forEach((l) => {
        const t = o.items.properties[l];
        ue(t, e, a);
      });
      break;
    default:
      if (o.ui) {
        const l = Object.keys(o.ui).filter(
          (t) => t.startsWith(a)
        );
        l && l.length > 0 && l.forEach((t) => {
          e.push(o.ui[t]);
        });
      }
      break;
  }
}
function Xe() {
  return { visibleIf: Ze };
}
function Ze(o, e, a, l) {
  if (!e.ui || !e.ui.visibleIf)
    return a;
  const t = Object.keys(e.ui.visibleIf)[0], i = e.ui.visibleIf[t];
  return l = l || {}, typeof i != "function" || t !== l.id ? a : i.call(null, o, l.id, l.value);
}
const et = C({
  name: "v-formly-v3-item"
}), fe = /* @__PURE__ */ C({
  ...et,
  props: {
    id: null,
    show: { type: Boolean, default: !0 },
    meta: null
  },
  setup(o) {
    const e = o;
    let a = N(!0);
    const { slotsName: l } = me(e.meta), t = M("state"), i = O(() => `v-${e.meta.ui && e.meta.ui.component || e.meta.type}`), c = O(() => t.layout);
    d();
    function d() {
      if (!e.meta.type)
        throw new Error(
          "Form item type must be one of these: number, string, boolean, array, object"
        );
      a.value = e.show, u(a.value, e.id);
      const { visibleIf: p } = Xe(), { appContext: f } = P();
      Y(f).on(`${be}-${t._formId}`, (_) => {
        let v = p(t.context, e.meta, a.value, {
          id: _.id,
          value: _.value
        });
        v !== a.value && (a.value = v, u(a.value, e.id));
      });
    }
    function u(p, f) {
      p ? t._ignoreErrorIds = t._ignoreErrorIds.filter((m) => m !== f) : t._ignoreErrorIds.indexOf(f) === -1 && t._ignoreErrorIds.push(f);
    }
    return (p, f) => (x(), F("div", {
      style: ie({ display: n(c) === "inline" ? "inline-block" : "block" })
    }, [
      n(a) ? (x(), w($e(n(i)), {
        key: 0,
        id: o.id,
        meta: o.meta
      }, L({ _: 2 }, [
        K(n(l), (m) => ({
          name: m,
          fn: g((_) => [
            E(p.$slots, m, ne(ae({ ..._ })))
          ])
        }))
      ]), 1032, ["id", "meta"])) : ce("", !0)
    ], 4));
  }
}), tt = { class: "v__formly" }, nt = { name: "v-formly-v3" }, at = /* @__PURE__ */ C({
  ...nt,
  props: {
    modelValue: null,
    layout: { default: "horizontal" },
    button: null,
    meta: null
  },
  emits: ["update:modelValue", "form-reset", "form-submit"],
  setup(o, { expose: e, emit: a }) {
    const l = o;
    if (!l.meta || typeof l.meta.properties > "u")
      throw new Error("Invalid Schema");
    let t = { type: B.Object }, i = N(!1);
    const c = new Ye();
    Ee("state", c);
    const { slotsName: d } = me(l.meta), { appContext: u } = P(), p = Y(u);
    f(), O(() => {
      const s = Object.assign({}, c.ui);
      return l.layout === "vertical" ? null : { span: s.spanControl, offset: s.spanLabel };
    }), te(
      () => l.modelValue,
      (s, h) => {
        JSON.stringify(s) !== JSON.stringify(h) && y(s);
      },
      {
        deep: !1
      }
    ), te(
      () => c.formData,
      (s, h) => {
        a("update:modelValue", s);
      },
      {
        deep: !0
      }
    );
    function f() {
      c.layout = I(l, "layout"), t = Object.assign({}, t, l.meta), c.meta = t, c.formData = Object.assign({}, l.modelValue), m(c.formData, l.meta.properties), c.context = new He(), c.validate = new Qe(u, c);
    }
    function m(s, h) {
      Object.keys(h).forEach((k) => {
        const T = h[k];
        if (T.type !== "null")
          switch (T.type) {
            case B.Object:
              s[k] = s[k] || {}, m(s[k], T.properties);
              break;
            case B.Array:
              s[k] = s[k] || [];
              break;
            case B.Boolean:
              break;
            default:
              s[k] = s[k] || void 0;
              break;
          }
      });
    }
    function _(s) {
      return c.context.getContext(s);
    }
    async function v() {
      return await c.validate.runValidateForm();
    }
    function y(s) {
      const h = c.context.getContext("/");
      h && (h.value = s, a("update:modelValue", c.formData));
    }
    function b() {
      a("form-reset", re(c.formData)), y({});
    }
    async function r() {
      i.value = !0;
      const s = await v();
      i.value = !1, a("form-submit", {
        valid: s,
        data: s ? re(c.formData) : void 0
      });
    }
    return de(() => {
      p.all.clear();
    }), e({
      getContext: _,
      validate: v,
      reset: y,
      clearForm: b,
      submitForm: r
    }), (s, h) => {
      const k = V("d-button"), T = V("d-form-operation"), se = V("d-form");
      return x(), F("div", tt, [
        j(se, {
          class: oe(["v", {
            v__inline: o.layout === "inline",
            v__horizontal: o.layout === "horizontal"
          }]),
          layout: o.layout,
          "label-size": "lg",
          "label-align": "end",
          "message-type": "text"
        }, {
          default: g(() => [
            j(fe, {
              id: "/",
              meta: n(t)
            }, L({ _: 2 }, [
              K(n(d), (ee) => ({
                name: ee,
                fn: g((le) => [
                  E(s.$slots, ee, ne(ae({ ...le })))
                ])
              }))
            ]), 1032, ["meta"]),
            o.button === "default" ? (x(), w(T, {
              key: 0,
              class: "v__default-submit-button"
            }, {
              default: g(() => [
                j(k, {
                  variant: "solid",
                  color: "danger",
                  onClick: b,
                  style: { "margin-right": "8px" }
                }, {
                  default: g(() => [
                    J(" \u91CD\u7F6E ")
                  ]),
                  _: 1
                }),
                j(k, {
                  variant: "solid",
                  color: "primary",
                  onClick: r,
                  loading: n(i)
                }, {
                  default: g(() => [
                    J(" \u63D0\u4EA4 ")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ]),
              _: 1
            })) : o.button === "custom" ? E(s.$slots, "button", {
              key: 1,
              loading: n(i),
              clearForm: b,
              submitForm: r
            }) : (x(), F(G, { key: 2 }, [], 64))
          ]),
          _: 3
        }, 8, ["layout", "class"])
      ]);
    };
  }
}), ot = { class: "control-wrapper" }, st = { class: "control-slot" }, lt = { name: "v-wrapper" }, it = /* @__PURE__ */ C({
  ...lt,
  props: {
    id: null,
    show: { type: Boolean },
    meta: null
  },
  setup(o) {
    const e = o, a = M("state"), l = a.context.getContext(e.id), t = O(() => Object.assign({}, a.ui, e.meta.ui)), i = O({
      get() {
        return l.error.value;
      },
      set(p) {
        l.error.value = p;
      }
    }), { appContext: c } = P(), d = Y(c);
    d.on(`${Q}-${a._formId}`, u), de(() => {
      d.off(`${Q}-${a._formId}`, u);
    });
    function u(p) {
      p.id === e.id && (i.value = p.error ? p.error.message : void 0);
    }
    return (p, f) => {
      const m = V("d-form-item");
      return x(), w(m, {
        label: o.meta.title,
        "help-tips": n(t).optional,
        "extra-info": o.meta.description,
        class: oe({ "show-required": n(t).showRequired })
      }, {
        default: g(() => [
          H("div", ot, [
            H("div", st, [
              E(p.$slots, "default", { error: n(i) }, void 0, !0)
            ]),
            ge(H("div", { class: "error-message" }, W(n(i)), 513), [
              [ye, n(i)]
            ])
          ])
        ]),
        _: 3
      }, 8, ["label", "help-tips", "extra-info", "class"]);
    };
  }
});
const Z = (o, e) => {
  const a = o.__vccOpts || o;
  for (const [l, t] of e)
    a[l] = t;
  return a;
}, S = /* @__PURE__ */ Z(it, [["__scopeId", "data-v-2142e340"]]);
class rt extends q {
  constructor(a, l, t, i) {
    super(a, l, t, i);
    $(this, "childMetaPairs");
    this.childMetaPairs = this.buildChildMetaPairs(t, i), l.context.addContext(t, this);
  }
  initValue() {
  }
  setValue() {
  }
  set value(a) {
    this.childMetaPairs.forEach(({ key: l, propertyName: t }) => {
      const i = this.state.context.getContext(l);
      i && (i.value = (a || {})[t]);
    });
  }
  buildChildMetaPairs(a, l) {
    const t = [];
    for (const i of Object.keys(l.properties || {})) {
      const c = a === "/" ? `/${i}` : `${a}/${i}`;
      t.push({
        key: c,
        propertyName: i,
        meta: l.properties[i]
      });
    }
    return t;
  }
}
const ut = C({
  name: "v-object"
}), ct = /* @__PURE__ */ C({
  ...ut,
  props: {
    id: null,
    meta: null
  },
  setup(o) {
    const e = o, { slotsName: a } = me(e.meta), l = M("state"), { appContext: t } = P(), i = new rt(t, l, e.id, e.meta), c = O(() => i.ui.value || {}), d = O(() => Object.assign({}, l.ui.grid, c.value.grid).gutter), u = O(() => l.layout.value), p = je({
      "margin-left": `-${d.value / 2}px`,
      "margin-right": `-${d.value / 2}px`
    });
    function f(v) {
      return v.ui && v.ui.show;
    }
    function m(v) {
      if (u.value === "inline")
        return {};
      const y = v.meta.ui && v.meta.ui.grid || {};
      return Object.assign({}, l.ui.grid, c.value.grid, y);
    }
    const _ = i.childMetaPairs;
    return (v, y) => {
      const b = V("d-col"), r = V("d-row");
      return x(), w(r, {
        gutter: n(d),
        wrap: "",
        style: ie(p)
      }, {
        default: g(() => [
          (x(!0), F(G, null, K(n(_), (s, h) => (x(), w(b, {
            key: h,
            span: m(s).span,
            offset: m(s).offset,
            xs: m(s).xs,
            sm: m(s).sm,
            md: m(s).md,
            lg: m(s).lg,
            xl: m(s).xl,
            xxl: m(s).xxl,
            style: ie({ display: n(u) === "inline" ? "inline-block" : "block" })
          }, {
            default: g(() => [
              j(fe, {
                id: s.key,
                meta: s.meta,
                show: f(s.meta)
              }, L({ _: 2 }, [
                K(n(a), (k) => ({
                  name: k,
                  fn: g((T) => [
                    E(v.$slots, k, ne(ae({ ...T })))
                  ])
                }))
              ]), 1032, ["id", "meta", "show"])
            ]),
            _: 2
          }, 1032, ["span", "offset", "xs", "sm", "md", "lg", "xl", "xxl", "style"]))), 128))
        ]),
        _: 3
      }, 8, ["gutter", "style"]);
    };
  }
});
function U(o, e) {
  const a = N({});
  return Object.keys(e.value).forEach((t) => {
    o.indexOf(t) > -1 && (a.value[t] = I(e.value, t));
  }), { bindings: a };
}
class z extends q {
  constructor(a, l, t, i) {
    var c;
    super(a, l, t, i);
    $(this, "open");
    this.initValue(), this.meta.value && (this.open = ((c = this.meta.value.ui) == null ? void 0 : c.open) || !1);
  }
  initValue() {
    this._initMetaValue ? this.value = this._initMetaValue : this.meta.value.default && (this.value = this.meta.value.default);
  }
  setValue(a) {
    this._value.value = a || void 0;
  }
}
const dt = C({
  name: "v-string"
}), mt = /* @__PURE__ */ C({
  ...dt,
  props: {
    id: null,
    meta: null
  },
  setup(o) {
    const e = o, a = M("state"), { appContext: l } = P(), t = new z(l, a, e.id, e.meta), { bindings: i } = U(Object.keys(Me.props), t.ui), c = I(e.meta, "readOnly"), d = I(e.meta, "maxLength"), u = O(() => t.ui.value || {}), p = O({
      get() {
        return t.value;
      },
      set(r) {
        t.value = r;
      }
    });
    function f() {
      var r, s;
      (s = (r = n(u)).change) == null || s.call(r, n(p));
    }
    function m(r) {
      var s, h;
      (h = (s = n(u)).input) == null || h.call(s, r);
    }
    function _() {
      var r, s;
      (s = (r = n(u)).clear) == null || s.call(r);
    }
    function v(r) {
      var s, h;
      (h = (s = n(u)).focus) == null || h.call(s, r);
    }
    function y(r) {
      var s, h;
      (h = (s = n(u)).blur) == null || h.call(s, r);
    }
    function b(r) {
      var s, h;
      (h = (s = n(u)).keydown) == null || h.call(s, r);
    }
    return (r, s) => {
      const h = V("d-input");
      return x(), w(S, {
        id: o.id,
        meta: o.meta
      }, {
        default: g(({ error: k }) => [
          j(h, D(n(i), {
            modelValue: n(p),
            "onUpdate:modelValue": s[0] || (s[0] = (T) => A(p) ? p.value = T : null),
            maxlength: n(d),
            error: !!k,
            disabled: n(c),
            onFocus: v,
            onBlur: y,
            onKeydown: b,
            onClear: _,
            onInput: m,
            onChange: f
          }), L({ _: 2 }, [
            n(u).slotNameOfPrefix ? {
              name: "prefix",
              fn: g(() => [
                E(r.$slots, n(u).slotNameOfPrefix)
              ]),
              key: "0"
            } : void 0,
            n(u).slotNameOfSuffix ? {
              name: "suffix",
              fn: g(() => [
                E(r.$slots, n(u).slotNameOfSuffix)
              ]),
              key: "1"
            } : void 0,
            n(u).slotNameOfPrepend ? {
              name: "prepend",
              fn: g(() => [
                E(r.$slots, n(u).slotNameOfPrepend)
              ]),
              key: "2"
            } : void 0,
            n(u).slotNameOfAppend ? {
              name: "append",
              fn: g(() => [
                E(r.$slots, n(u).slotNameOfAppend)
              ]),
              key: "3"
            } : void 0
          ]), 1040, ["modelValue", "maxlength", "error", "disabled"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
});
class ft extends q {
  constructor(e, a, l, t) {
    super(e, a, l, t), this.initValue();
  }
  initValue() {
    typeof this._initMetaValue < "u" ? this.value = this._initMetaValue : typeof this.meta.value.default == "boolean" && (this.value = this.meta.value.default);
  }
  setValue(e) {
    this._value.value = e || !1;
  }
}
const pt = C({
  name: "v-boolean"
}), vt = /* @__PURE__ */ C({
  ...pt,
  props: {
    id: null,
    meta: null
  },
  setup(o) {
    const e = o, a = M("state"), { appContext: l } = P(), t = new ft(l, a, e.id, e.meta), { bindings: i } = U(Object.keys(Re.props), t.ui), c = I(e.meta, "readOnly"), d = O(() => t.ui.value || {}), u = O({
      get() {
        return t.value;
      },
      set(f) {
        t.value = f || !1;
      }
    });
    function p() {
      var f, m;
      (m = (f = n(d)).change) == null || m.call(f, n(u));
    }
    return (f, m) => {
      const _ = V("d-switch");
      return x(), w(S, {
        id: o.id,
        meta: o.meta
      }, {
        default: g(() => [
          j(_, D({
            class: "v__boolean",
            modelValue: n(u),
            "onUpdate:modelValue": m[0] || (m[0] = (v) => A(u) ? u.value = v : null)
          }, n(i), {
            disabled: n(c),
            onChange: p
          }), L({ _: 2 }, [
            n(d).slotNameOfCheckedContent ? {
              name: "checkedContent",
              fn: g(() => [
                E(f.$slots, n(d).slotNameOfCheckedContent)
              ]),
              key: "0"
            } : void 0,
            n(d).slotNameOfUnCheckedContent ? {
              name: "uncheckedContent",
              fn: g(() => [
                E(f.$slots, n(d).slotNameOfUnCheckedContent)
              ]),
              key: "1"
            } : void 0
          ]), 1040, ["modelValue", "disabled"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), _t = C({
  name: "v-autocomplete"
}), ht = /* @__PURE__ */ C({
  ..._t,
  props: {
    id: null,
    meta: null
  },
  setup(o) {
    const e = o, a = M("state"), { appContext: l } = P(), t = new z(l, a, e.id, e.meta), { bindings: i } = U(Object.keys(Ae.props), t.ui), c = I(e.meta, "readOnly"), d = N();
    Object.assign(t, { autoCompleteRef: d });
    const u = O(() => t.ui.value || {}), p = O({
      get() {
        return t.value;
      },
      set(f) {
        t.value = f || void 0;
      }
    });
    return (f, m) => {
      const _ = V("d-auto-complete");
      return x(), w(S, {
        id: o.id,
        meta: o.meta
      }, {
        default: g(() => [
          j(_, D({
            ref_key: "autoCompleteRef",
            ref: d,
            modelValue: n(p),
            "onUpdate:modelValue": m[0] || (m[0] = (v) => A(p) ? p.value = v : null)
          }, n(i), { disabled: n(c) }), L({ _: 2 }, [
            n(u).slotNameOfItem ? {
              name: "item",
              fn: g((v) => [
                E(f.$slots, n(u).slotNameOfItem, ne(ae(v)))
              ]),
              key: "0"
            } : void 0,
            n(u).slotNameOfNothing ? {
              name: "nothing",
              fn: g((v) => [
                E(f.$slots, n(u).slotNameOfNothing, { keyword: v })
              ]),
              key: "1"
            } : void 0,
            n(u).slotNameOfSearching ? {
              name: "searching",
              fn: g((v) => [
                E(f.$slots, n(u).slotNameOfSearching, { keyword: v })
              ]),
              key: "2"
            } : void 0,
            n(u).slotNameOfPrefix ? {
              name: "prefix",
              fn: g(() => [
                E(f.$slots, n(u).slotNameOfPrefix)
              ]),
              key: "3"
            } : void 0,
            n(u).slotNameOfSuffix ? {
              name: "suffix",
              fn: g(() => [
                E(f.$slots, n(u).slotNameOfSuffix)
              ]),
              key: "4"
            } : void 0,
            n(u).slotNameOfPrepend ? {
              name: "prepend",
              fn: g(() => [
                E(f.$slots, n(u).slotNameOfPrepend)
              ]),
              key: "5"
            } : void 0,
            n(u).slotNameOfAppend ? {
              name: "append",
              fn: g(() => [
                E(f.$slots, n(u).slotNameOfAppend)
              ]),
              key: "6"
            } : void 0
          ]), 1040, ["modelValue", "disabled"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), gt = C({
  name: "v-checkbox"
}), yt = /* @__PURE__ */ C({
  ...gt,
  props: {
    id: null,
    meta: null
  },
  setup(o) {
    const e = o, a = M("state"), { appContext: l } = P(), t = new z(l, a, e.id, e.meta), { bindings: i } = U(Object.keys(De.props), t.ui), c = I(e.meta, "readOnly"), d = O(() => t.ui.value || {}), u = O({
      get() {
        return t.value || [];
      },
      set(f) {
        t.value = f.length > 0 ? f : void 0;
      }
    });
    function p() {
      var f, m;
      (m = (f = n(d)).change) == null || m.call(f, n(u));
    }
    return (f, m) => {
      const _ = V("d-checkbox-group"), v = V("d-checkbox"), y = V("d-col"), b = V("d-row");
      return x(), w(S, {
        id: o.id,
        meta: o.meta
      }, {
        default: g(() => [
          n(d).span ? (x(), w(_, D({
            key: 1,
            class: "v__checkbox",
            modelValue: n(u),
            "onUpdate:modelValue": m[1] || (m[1] = (r) => A(u) ? u.value = r : null)
          }, n(i), {
            disabled: n(c),
            onChange: p
          }), {
            default: g(() => [
              j(b, { wrap: "" }, {
                default: g(() => [
                  (x(!0), F(G, null, K(o.meta.enum, (r, s) => (x(), w(y, {
                    class: "v__text-left",
                    span: n(d).span,
                    key: s
                  }, {
                    default: g(() => [
                      j(v, {
                        value: r.value || r,
                        disabled: r.disabled || !1
                      }, {
                        default: g(() => [
                          J(W(r.label || r), 1)
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
          }, 16, ["modelValue", "disabled"])) : (x(), w(_, D({
            key: 0,
            class: "v__checkbox",
            direction: "row",
            modelValue: n(u),
            "onUpdate:modelValue": m[0] || (m[0] = (r) => A(u) ? u.value = r : null)
          }, n(i), {
            disabled: n(c),
            options: o.meta.enum,
            onChange: p
          }), null, 16, ["modelValue", "disabled", "options"]))
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
}), bt = C({
  name: "v-date"
}), xt = /* @__PURE__ */ C({
  ...bt,
  props: {
    id: null,
    meta: null
  },
  setup(o) {
    const e = o, a = M("state"), { appContext: l } = P(), t = new z(l, a, e.id, e.meta);
    let i = {}, c = {};
    if (t.ui.value.pickerType === "range") {
      const { bindings: r } = U(
        Object.keys(_e.props),
        t.ui
      );
      i = r;
    } else {
      const { bindings: r } = U(
        Object.keys(Te.props),
        t.ui
      );
      c = r;
    }
    const d = N(), u = N();
    Object.assign(t, { rangeDatePickerRef: d, datePickerRef: u });
    const p = I(e.meta, "readOnly"), f = O(() => t.ui.value || {}), m = O({
      get() {
        return t.value;
      },
      set(r) {
        t.value = r;
      }
    });
    function _(r) {
      var s, h;
      (h = (s = n(f)).toggleChange) == null || h.call(s, r);
    }
    function v(r) {
      var s, h;
      (h = (s = n(f)).confirmEvent) == null || h.call(s, r);
    }
    function y(r) {
      var s, h;
      (h = (s = n(f)).focus) == null || h.call(s, r);
    }
    function b() {
      var r, s;
      (s = (r = n(f)).blur) == null || s.call(r);
    }
    return (r, s) => {
      const h = V("d-date-picker-pro");
      return x(), w(S, {
        id: o.id,
        meta: o.meta
      }, {
        default: g(() => [
          n(f).pickerType === "range" ? (x(), w(n(_e), D({
            key: 0,
            ref_key: "rangeDatePickerRef",
            ref: d,
            class: "v__date",
            modelValue: n(m),
            "onUpdate:modelValue": s[0] || (s[0] = (k) => A(m) ? m.value = k : null)
          }, n(i), {
            disabled: n(p),
            onToggleChange: _,
            onConfirmEvent: v,
            onFocus: y,
            onBlur: b
          }), L({ _: 2 }, [
            n(f).slotNameOfRightArea ? {
              name: "rightArea",
              fn: g(() => [
                E(r.$slots, n(f).slotNameOfRightArea)
              ]),
              key: "0"
            } : void 0,
            n(f).slotNameOfFooter ? {
              name: "footer",
              fn: g(() => [
                E(r.$slots, n(f).slotNameOfFooter)
              ]),
              key: "1"
            } : void 0
          ]), 1040, ["modelValue", "disabled"])) : (x(), w(h, D({
            key: 1,
            ref_key: "datePickerRef",
            ref: u,
            class: "v__date",
            modelValue: n(m),
            "onUpdate:modelValue": s[1] || (s[1] = (k) => A(m) ? m.value = k : null)
          }, n(c), {
            disabled: n(p),
            onToggleChange: _,
            onConfirmEvent: v,
            onFocus: y,
            onBlur: b
          }), L({ _: 2 }, [
            n(f).slotNameOfRightArea ? {
              name: "rightArea",
              fn: g(() => [
                E(r.$slots, n(f).slotNameOfRightArea)
              ]),
              key: "0"
            } : void 0,
            n(f).slotNameOfFooter ? {
              name: "footer",
              fn: g(() => [
                E(r.$slots, n(f).slotNameOfFooter)
              ]),
              key: "1"
            } : void 0
          ]), 1040, ["modelValue", "disabled"]))
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), Ot = C({
  name: "v-time"
}), kt = /* @__PURE__ */ C({
  ...Ot,
  props: {
    id: null,
    meta: null
  },
  setup(o) {
    const e = o, a = M("state"), { appContext: l } = P(), t = new z(l, a, e.id, e.meta);
    let i = N(null), c = {};
    const { bindings: d } = U(Object.keys(Fe.props), t.ui);
    c = d;
    const u = I(e.meta, "readOnly"), p = O(() => t.ui.value || {}), f = O({
      get() {
        return t.value;
      },
      set(_) {
        t.value = _;
      }
    });
    function m(_) {
      var v, y;
      (y = (v = n(p)).change) == null || y.call(v, _);
    }
    return (_, v) => {
      const y = V("d-time-picker");
      return x(), w(S, {
        id: o.id,
        meta: o.meta
      }, {
        default: g(() => [
          j(y, D({
            ref_key: "timePickerRef",
            ref: i,
            class: "v__time",
            modelValue: n(f),
            "onUpdate:modelValue": v[0] || (v[0] = (b) => A(f) ? f.value = b : null)
          }, n(c), {
            disabled: n(u),
            onChange: m
          }), L({ _: 2 }, [
            n(p).slotNameOfCustomViewTemplate ? {
              name: "customViewTemplate",
              fn: g(() => [
                E(_.$slots, n(p).slotNameOfCustomViewTemplate, { ref: n(i) })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue", "disabled"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), Ct = C({
  name: "v-number"
}), Vt = /* @__PURE__ */ C({
  ...Ct,
  props: {
    id: null,
    meta: null
  },
  setup(o) {
    const e = o, a = M("state"), { appContext: l } = P(), t = new z(l, a, e.id, e.meta), { bindings: i } = U(Object.keys(Se.props), t.ui), c = I(e.meta, "readOnly"), d = O(() => t.ui.value || {}), u = O({
      get() {
        return t.value;
      },
      set(y) {
        t.value = y;
      }
    });
    let p = N(-1 / 0), f = N(1 / 0), m = N(1);
    _();
    function _() {
      const {
        minimum: y,
        exclusiveMinimum: b,
        maximum: r,
        exclusiveMaximum: s,
        multipleOf: h,
        type: k
      } = t.meta.value;
      m.value = h || 1, typeof y < "u" && (p.value = b ? y + m.value : y), typeof r < "u" && (f.value = s ? r - m.value : r), k === "integer" && (p.value = Math.trunc(p.value), f.value = Math.trunc(f.value), m.value = Math.trunc(m.value));
    }
    function v(y) {
      u.value = t.meta.value.type === B.Integer ? Math.floor(y) : y, d.value.change && d.value.change(n(u));
    }
    return (y, b) => {
      const r = V("d-input-number");
      return x(), w(S, {
        id: o.id,
        meta: o.meta
      }, {
        default: g(() => [
          j(r, D({
            class: "v__number",
            modelValue: n(u),
            "onUpdate:modelValue": b[0] || (b[0] = (s) => A(u) ? u.value = s : null)
          }, n(i), {
            disabled: n(c),
            min: n(p),
            max: n(f),
            step: n(m),
            class: { "hidden-step": n(d).hideStep },
            onChange: b[1] || (b[1] = (s) => v(s))
          }), null, 16, ["modelValue", "disabled", "min", "max", "step", "class"])
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
});
const he = /* @__PURE__ */ Z(Vt, [["__scopeId", "data-v-4ad3983a"]]);
class wt extends q {
  constructor(a, l, t, i) {
    super(a, l, t, i);
    $(this, "ids", N([]));
    this.initValue();
  }
  setValue() {
  }
  initValue() {
    var a, l;
    if (((a = this._initMetaValue) == null ? void 0 : a.length) > 0)
      this.value = this._initMetaValue;
    else if (((l = n(this.meta).default) == null ? void 0 : l.length) > 0) {
      const t = n(this.meta).default;
      t.forEach(() => this.add(!1)), setTimeout(() => {
        t.forEach((i, c) => {
          const d = this.state.context.getContext(
            `${this.id}/${c}`
          );
          d.value = i;
        });
      }), this.validate();
    }
  }
  get value() {
    return this.getPathValue(this.state.formData, this.id) || [];
  }
  set value(a) {
    if (this.value.length === 0 && (a == null ? void 0 : a.length) === 0 || !Array.isArray(a) && a != null)
      return;
    const l = X(a), t = n(this.ids).length;
    for (let i = 0; i < t; i++)
      this.remove(t - i - 1, !1);
    l && l.length && (l.forEach(() => this.add(!1)), Ie(() => {
      l.forEach((i, c) => {
        const d = this.state.context.getContext(
          `${this.id}/${c}`
        );
        d.value = i;
      });
    })), this.validate();
  }
  validate() {
    return this.state.validate.runValidationFormItem(this);
  }
  getPathValue(a, l) {
    const t = l.split("/").filter((c) => c);
    let i = X(a);
    for (let c = 0; c < t.length; c++) {
      const d = t[c];
      i = i[d];
    }
    return i;
  }
  getEmptyData() {
    const a = {}, l = n(this.meta).items.properties;
    return Object.keys(l).forEach((t) => {
      switch (l[t].type) {
        case "object":
          a[t] = {};
          break;
        case "array":
          a[t] = [];
          break;
        default:
          a[t] = void 0;
          break;
      }
    }), a;
  }
  add(a = !0) {
    const l = `${this.id}/${n(this.ids).length}`, t = this.getEmptyData();
    return this.state.updateObjProp(this.state.formData, l, t), this.ids.value.push({ key: xe() }), a && this.validate(), l;
  }
  remove(a, l = !0) {
    this.ids.value.splice(a, 1);
    const t = this.id.split("/").filter((d) => !!d);
    t.reduce((d, u, p) => (p === t.length - 1 && d[u].splice(a, 1), d[u]), this.state.formData);
    const i = [];
    for (const d of this.state.context.getMap().keys())
      new RegExp(`^/?${this.id}/`).test(d) && i.push(d);
    for (let d = a + 1; d < n(this.ids).length + 1; d++) {
      const u = new RegExp(`^(/?${this.id}/)${d}`);
      i.filter((p) => u.test(p)).forEach((p) => {
        const f = this.state.context.getContext(p), m = p.replace(u, (_, v) => `${v}${d - 1}`);
        if (f.id = m, f.childMetaPairs) {
          const _ = f.buildChildMetaPairs(
            m,
            n(f.meta)
          );
          f.childMetaPairs.forEach((v, y) => {
            v.key = _[y].key;
          });
        }
        this.state.context.addContext(m, f);
      });
    }
    const c = new RegExp(`^/?${this.id}/${n(this.ids).length}`);
    i.filter((d) => c.test(d)).forEach((d) => {
      this.state.context.removeContext(d);
    }), l && this.validate();
  }
}
const $t = { class: "control-wrapper" }, Et = { class: "v__array-add" }, jt = ["onClick"], It = C({
  name: "v-array"
}), Nt = /* @__PURE__ */ C({
  ...It,
  props: {
    id: null,
    meta: null
  },
  setup(o) {
    const e = o, a = M("state"), { appContext: l } = P(), t = new wt(l, a, e.id, e.meta), i = Y(l), c = O(() => n(t.ui) || {});
    O({
      get() {
        return t.value;
      },
      set(s) {
        t.value = s || [];
      }
    });
    const d = O({
      get() {
        return n(t.error);
      },
      set(s) {
        t.error.value = s;
      }
    }), u = I(e.meta, "readOnly"), p = O(() => n(u) || e.meta.maxItems != null && n(t.ids).length >= e.meta.maxItems), f = O(() => {
      const s = e.meta.minItems;
      return !(n(u) || s != null && n(t.ids).length <= s);
    }), m = N(8), _ = N("");
    Ne(() => {
      var T;
      i.on(`${Q}-${a._formId}`, v);
      const { grid: s, removable: h, removeTitle: k } = n(c);
      m.value = (T = s == null ? void 0 : s.arraySpan) != null ? T : 8, _.value = h === !1 ? null : k;
    }), de(() => {
      i.off(`${Q}-${a._formId}`, v);
    });
    function v(s) {
      s.id === e.id && (d.value = s.error ? s.error.message : void 0);
    }
    function y(s) {
      return `${e.id}/${s}`;
    }
    function b() {
      var h, k;
      const s = t.add();
      (k = (h = n(c)).add) == null || k.call(h, s);
    }
    function r(s) {
      var h, k;
      t.remove(s), (k = (h = n(c)).remove) == null || k.call(h, s);
    }
    return (s, h) => {
      const k = V("d-button"), T = V("d-card"), se = V("d-col"), ee = V("d-row"), le = V("d-form-item");
      return x(), w(le, {
        label: o.meta.title,
        "help-tips": n(c).optional,
        "extra-info": o.meta.description,
        class: oe({ "show-required": n(c).showRequired })
      }, {
        default: g(() => [
          H("div", $t, [
            H("div", Et, [
              j(k, {
                variant: n(c).addType,
                disabled: n(p),
                onClick: b
              }, {
                default: g(() => [
                  J(W(n(c).addTitle || "\u6DFB\u52A0"), 1)
                ]),
                _: 1
              }, 8, ["variant", "disabled"])
            ]),
            j(ee, {
              class: "v__array-container",
              wrap: ""
            }, {
              default: g(() => [
                (x(!0), F(G, null, K(n(t).ids.value, (ke, ve) => (x(), w(se, {
                  key: ke.key,
                  span: m.value,
                  class: "v__array-item"
                }, {
                  default: g(() => [
                    j(T, { shadow: "never" }, {
                      content: g(() => [
                        j(fe, {
                          id: y(ve),
                          meta: o.meta.items
                        }, null, 8, ["id", "meta"]),
                        n(f) ? (x(), F("span", {
                          key: 0,
                          class: "v__array-remove",
                          onClick: (on) => r(ve)
                        }, [
                          j(k, {
                            icon: "delete",
                            shape: "circle",
                            title: "Delete"
                          })
                        ], 8, jt)) : ce("", !0)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["span"]))), 128))
              ]),
              _: 1
            }),
            ge(H("div", { class: "error-message" }, W(n(d)), 513), [
              [ye, n(d)]
            ])
          ])
        ]),
        _: 1
      }, 8, ["label", "help-tips", "extra-info", "class"]);
    };
  }
});
const Pt = /* @__PURE__ */ Z(Nt, [["__scopeId", "data-v-5d1e9900"]]), Mt = ["innerHTML"], Rt = ["textContent"], At = ["innerHTML"], Dt = C({
  name: "v-text"
}), Tt = /* @__PURE__ */ C({
  ...Dt,
  props: {
    id: null,
    meta: null
  },
  setup(o) {
    const e = o, a = M("state"), { appContext: l } = P(), t = new z(l, a, e.id, e.meta), i = O(() => t.ui.value || {}), c = O(
      () => We(n(i).text) ? n(i).text() : n(i).text
    );
    return (d, u) => {
      const p = V("d-form-item");
      return x(), F("div", null, [
        j(p, {
          label: o.meta.title
        }, L({
          default: g(() => [
            n(i).slotNameOfDefault ? E(d.$slots, n(i).slotNameOfDefault, { key: 0 }, void 0, !0) : (x(), F(G, { key: 1 }, [
              n(i).html ? (x(), F("span", {
                key: 0,
                innerHTML: n(i).html,
                class: "v__content-text"
              }, null, 8, Mt)) : (x(), F("span", {
                key: 1,
                textContent: W(n(c)),
                class: "v__content-text"
              }, null, 8, Rt))
            ], 64))
          ]),
          _: 2
        }, [
          o.meta.description ? {
            name: "extra",
            fn: g(() => [
              H("div", {
                innerHTML: o.meta.description,
                class: "v__description"
              }, null, 8, At)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["label"])
      ]);
    };
  }
});
const Ft = /* @__PURE__ */ Z(Tt, [["__scopeId", "data-v-36d4d8fd"]]), St = C({
  name: "v-textarea"
}), Ut = /* @__PURE__ */ C({
  ...St,
  props: {
    id: null,
    meta: null
  },
  setup(o) {
    const e = o, a = M("state"), { appContext: l } = P(), t = new z(l, a, e.id, e.meta), { bindings: i } = U(Object.keys(Ue.props), t.ui), c = I(e.meta, "readOnly"), d = I(e.meta, "maxLength"), u = O(() => t.ui.value || {}), p = O({
      get() {
        return t.value;
      },
      set(b) {
        t.value = b;
      }
    });
    function f(b) {
      var r, s;
      (s = (r = n(u)).change) == null || s.call(r, n(b));
    }
    function m(b) {
      var r, s;
      (s = (r = n(u)).update) == null || s.call(r, n(b));
    }
    function _(b) {
      var r, s;
      (s = (r = n(u)).focus) == null || s.call(r, b);
    }
    function v(b) {
      var r, s;
      (s = (r = n(u)).blur) == null || s.call(r, b);
    }
    function y(b) {
      var r, s;
      (s = (r = n(u)).keydown) == null || s.call(r, b);
    }
    return (b, r) => {
      const s = V("d-textarea");
      return x(), w(S, {
        id: o.id,
        meta: o.meta
      }, {
        default: g(({ error: h }) => [
          j(s, D(n(i), {
            error: !!h,
            disabled: n(c),
            maxlength: n(d),
            rows: n(u).rows,
            modelValue: n(p),
            "onUpdate:modelValue": r[0] || (r[0] = (k) => A(p) ? p.value = k : null),
            onUpdate: m,
            onChange: f,
            onFocus: _,
            onBlur: v,
            onKeydown: y
          }), null, 16, ["error", "disabled", "maxlength", "rows", "modelValue"])
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
});
class pe extends q {
  constructor(e, a, l, t) {
    super(e, a, l, t), this.initValue();
  }
  initValue() {
    this._initMetaValue ? this.value = this._initMetaValue : n(this.meta).default && (this.value = n(this.meta).default);
  }
  setValue(e) {
    switch (this.type) {
      case "slider":
        this._value.value = Ge(e) || Oe(e) ? e : void 0;
        break;
      default:
        this._value.value = e || void 0;
        break;
    }
  }
}
function Bt(o, e) {
  te(o, () => {
    e.validate._forceCompile();
  });
}
const Lt = C({
  name: "v-slider"
}), zt = /* @__PURE__ */ C({
  ...Lt,
  props: {
    id: null,
    meta: null
  },
  setup(o) {
    const e = o, a = M("state"), { appContext: l } = P(), t = new pe(l, a, e.id, e.meta), { bindings: i } = U(Object.keys(Be.props), t.ui), c = I(e.meta, "readOnly"), d = I(e.meta, "minimum"), u = I(e.meta, "maximum"), p = I(e.meta, "multipleOf");
    Bt([d, u, p], a);
    const f = O(() => t.ui.value || {}), m = O({
      get() {
        return t.value;
      },
      set(_) {
        f.value.range ? t.value = _ || [] : t.value = Oe(_) ? _ : void 0;
      }
    });
    return (_, v) => {
      const y = V("d-slider");
      return x(), w(S, {
        id: o.id,
        meta: o.meta
      }, {
        default: g(() => [
          j(y, D(n(i), {
            disabled: n(c),
            min: n(d) || 0,
            max: n(u) || 100,
            step: n(p) || 1,
            modelValue: n(m),
            "onUpdate:modelValue": v[0] || (v[0] = (b) => A(m) ? m.value = b : null)
          }), null, 16, ["disabled", "min", "max", "step", "modelValue"])
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
}), Kt = C({
  name: "v-rate"
}), Ht = /* @__PURE__ */ C({
  ...Kt,
  props: {
    id: null,
    meta: null
  },
  setup(o) {
    const e = o, a = M("state"), { appContext: l } = P(), t = new pe(l, a, e.id, e.meta), { bindings: i } = U(Object.keys(Le.props), t.ui), c = I(e.meta, "readOnly"), d = O(() => t.ui.value || {}), u = O({
      get() {
        return t.value;
      },
      set(f) {
        t.value = f;
      }
    });
    function p(f) {
      var m, _;
      (_ = (m = n(d)).change) == null || _.call(m, f);
    }
    return (f, m) => {
      const _ = V("d-rate");
      return x(), w(S, {
        id: o.id,
        meta: o.meta
      }, {
        default: g(() => [
          j(_, D(n(i), {
            read: n(c),
            count: o.meta.maximum || 5,
            modelValue: n(u),
            "onUpdate:modelValue": m[0] || (m[0] = (v) => A(u) ? u.value = v : null),
            onChange: p
          }), null, 16, ["read", "count", "modelValue"])
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
}), Gt = C({
  name: "v-tag"
}), Wt = /* @__PURE__ */ C({
  ...Gt,
  props: {
    id: null,
    meta: null
  },
  setup(o) {
    const e = o, a = M("state"), { appContext: l } = P(), t = new pe(l, a, e.id, e.meta), i = I(e.meta, "readOnly"), c = N([]), d = O(() => t.ui.value || {}), u = O({
      get() {
        return t.value;
      },
      set(_) {
        d.value.range ? t.value = _ || [] : t.value = _;
      }
    });
    te(() => n(t.meta).enum, m, { immediate: !0 });
    function p(_, v) {
      var y, b, r, s;
      _.disabled || (_.checked = v, f(), (b = (y = n(d)).checkedChange) == null || b.call(y, v), (s = (r = n(d)).change) == null || s.call(r, re(n(u))));
    }
    function f() {
      const _ = n(c).filter((v) => v.checked).map((v) => v.value);
      u.value = _.length ? _ : void 0;
    }
    function m(_) {
      let v = n(_);
      v == null || !Array.isArray(v) || v.length === 0 || (typeof v[0] != "object" && (v = v.map((y) => ({
        label: y,
        value: y
      }))), v.forEach((y) => {
        y.checked = (u.value || []).indexOf(y.value) > -1;
      }), v.forEach((y) => y.disabled = e.meta.readOnly), c.value = v);
    }
    return (_, v) => {
      const y = V("d-tag");
      return x(), w(S, {
        id: o.id,
        meta: o.meta
      }, {
        default: g(() => [
          (x(!0), F(G, null, K(c.value, (b) => (x(), w(y, {
            key: b.value,
            type: "primary",
            class: oe({ disabled: b.disabled || n(i) }),
            checked: b.checked,
            onClick: () => p(b, !b.checked)
          }, {
            default: g(() => [
              H("span", null, W(b.label), 1)
            ]),
            _: 2
          }, 1032, ["class", "checked", "onClick"]))), 128))
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
});
const qt = /* @__PURE__ */ Z(Wt, [["__scopeId", "data-v-7c567630"]]), Jt = C({
  name: "v-radio"
}), Yt = /* @__PURE__ */ C({
  ...Jt,
  props: {
    id: null,
    meta: null
  },
  setup(o) {
    const e = o, a = M("state"), { appContext: l } = P(), t = new z(l, a, e.id, e.meta), { bindings: i } = U(Object.keys(ze.props), t.ui), c = I(e.meta, "readOnly"), d = O(() => t.ui.value || {}), u = O(() => (n(d).options || []).map((m) => qe(m) ? Object.assign(m, { disabled: m.disabled || !1 }) : { label: m, value: m, disabled: !1 })), p = O({
      get() {
        return t.value;
      },
      set(m) {
        t.value = m;
      }
    });
    function f() {
      var m, _;
      (_ = (m = n(d)).change) == null || _.call(m, n(p));
    }
    return (m, _) => {
      const v = V("d-radio-button"), y = V("d-radio"), b = V("d-radio-group");
      return x(), w(S, {
        id: o.id,
        meta: o.meta
      }, {
        default: g(() => [
          j(b, D({
            direction: "row",
            disabled: n(c)
          }, n(i), {
            modelValue: n(p),
            "onUpdate:modelValue": _[0] || (_[0] = (r) => A(p) ? p.value = r : null),
            onChange: f
          }), {
            default: g(() => [
              n(d).optionType === "button" ? (x(!0), F(G, { key: 0 }, K(n(u), (r) => (x(), w(v, {
                key: r.value,
                value: r.value,
                disabled: r.disabled
              }, {
                default: g(() => [
                  J(W(r.label), 1)
                ]),
                _: 2
              }, 1032, ["value", "disabled"]))), 128)) : (x(!0), F(G, { key: 1 }, K(n(u), (r) => (x(), w(y, {
                key: r.value,
                value: r.value,
                disabled: r.disabled
              }, {
                default: g(() => [
                  J(W(r.label), 1)
                ]),
                _: 2
              }, 1032, ["value", "disabled"]))), 128))
            ]),
            _: 1
          }, 16, ["disabled", "modelValue"])
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
}), Qt = C({
  name: "v-select"
}), Xt = /* @__PURE__ */ C({
  ...Qt,
  props: {
    id: null,
    meta: null
  },
  setup(o) {
    const e = o, a = M("state"), { appContext: l } = P(), t = new z(l, a, e.id, e.meta), { bindings: i } = U(Object.keys(Ke.props), t.ui), c = I(e.meta, "readOnly"), d = O(() => t.ui.value || {}), u = O({
      get() {
        return t.value;
      },
      set(r) {
        t.value = r;
      }
    }), p = O(() => ["slotNameOfDefault", "slotNameOfEmpty"].some((s) => !!n(d)[`${s}`]));
    function f(r) {
      var s, h;
      (h = (s = n(d)).valueChange) == null || h.call(s, r);
    }
    function m(r) {
      var s, h;
      (h = (s = n(d)).toggleChange) == null || h.call(s, r);
    }
    function _(r) {
      var s, h;
      (h = (s = n(d)).blur) == null || h.call(s, r);
    }
    function v(r) {
      var s, h;
      (h = (s = n(d)).focus) == null || h.call(s, r);
    }
    function y() {
      var r, s;
      (s = (r = n(d)).clear) == null || s.call(r);
    }
    function b(r) {
      var s, h;
      (h = (s = n(d)).removeTag) == null || h.call(s, r);
    }
    return (r, s) => {
      const h = V("d-select");
      return x(), w(S, {
        id: o.id,
        meta: o.meta
      }, {
        default: g(() => [
          n(p) ? (x(), w(h, D({
            key: 0,
            modelValue: n(u),
            "onUpdate:modelValue": s[0] || (s[0] = (k) => A(u) ? u.value = k : null)
          }, n(i), {
            disabled: n(c),
            onBlur: _,
            onFocus: v,
            onClear: y,
            onRemoveTag: b,
            onToggleChange: m,
            onValueChange: f
          }), L({
            default: g(() => [
              n(d).slotNameOfDefault ? E(r.$slots, n(d).slotNameOfDefault, { key: 0 }) : ce("", !0)
            ]),
            _: 2
          }, [
            n(d).slotNameOfEmpty ? {
              name: "empty",
              fn: g(() => [
                E(r.$slots, n(d).slotNameOfEmpty)
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue", "disabled"])) : (x(), w(h, D({
            key: 1,
            modelValue: n(u),
            "onUpdate:modelValue": s[1] || (s[1] = (k) => A(u) ? u.value = k : null)
          }, n(i), {
            disabled: n(c),
            onBlur: _,
            onFocus: v,
            onClear: y,
            onRemoveTag: b,
            onToggleChange: m,
            onValueChange: f
          }), null, 16, ["modelValue", "disabled"]))
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
});
function R(o, e, a) {
  o.component(e, a);
}
function Zt(o) {
  R(o, "v-object", ct), R(o, "v-string", mt), R(o, "v-boolean", vt), R(o, "v-array", Pt), R(o, "v-autocomplete", ht), R(o, "v-checkbox", yt), R(o, "v-date", xt), R(o, "v-number", he), R(o, "v-integer", he), R(o, "v-time", kt), R(o, "v-text", Ft), R(o, "v-radio", Yt), R(o, "v-textarea", Ut), R(o, "v-slider", zt), R(o, "v-rate", Ht), R(o, "v-tag", qt), R(o, "v-select", Xt);
}
const en = [at, S];
function tn(o) {
  en.forEach((e) => {
    o.component(e.name, e);
  }), Zt(o);
}
const nn = { installFormly: tn };
const an = function(o, e) {
  if (o.config.globalProperties.emitter = we(), !e.lib || e.lib === "devui")
    nn.installFormly(o);
  else
    throw new Error("Unsupport lib");
  return o.config.globalProperties.$VFORMLY_OPTIONS = e, o;
}, dn = { install: an };
export {
  q as BaseMeta,
  be as FORM_VALUE_CHANGE,
  dn as default,
  tn as installFormly,
  R as registerFormComponent
};
