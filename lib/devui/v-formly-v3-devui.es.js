var Ce = Object.defineProperty;
var Ve = (o, e, a) => e in o ? Ce(o, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[e] = a;
var w = (o, e, a) => (Ve(o, typeof e != "symbol" ? e + "" : e, a), a);
import $e from "mitt";
import { ref as j, getCurrentInstance as P, isRef as R, defineComponent as C, inject as M, computed as k, openBlock as x, createElementBlock as S, normalizeStyle as ie, unref as n, createBlock as $, resolveDynamicComponent as we, createSlots as z, renderList as H, withCtx as y, renderSlot as E, normalizeProps as ae, guardReactiveProps as oe, createCommentVNode as ce, provide as Ee, watch as ne, toRef as N, onBeforeUnmount as de, resolveComponent as V, createVNode as I, normalizeClass as se, createTextVNode as Y, Fragment as W, toRaw as re, createElementVNode as G, withDirectives as ge, toDisplayString as q, vShow as ye, reactive as je, mergeProps as D, nextTick as Ie, onMounted as Ne } from "vue";
import Pe from "ajv";
import { Input as Me, Switch as Ae, AutoComplete as Re, CheckboxGroup as De, DRangeDatePickerPro as _e, DatePickerPro as Te, TimePicker as Fe, InputNumber as Se, Textarea as Ue, Slider as Be, Rate as Le, RadioGroup as ze, Select as Ke } from "vue-devui";
const be = "form-value-change", Z = "form-error-change";
function Q(o) {
  return o.config.globalProperties.emitter;
}
class J {
  constructor(e, a, l, t) {
    w(this, "id");
    w(this, "state");
    w(this, "meta", j({}));
    w(this, "type");
    w(this, "ui", j({}));
    w(this, "error", j(void 0));
    w(this, "_value", j());
    w(this, "_initMetaValue");
    w(this, "appContext");
    if (this.constructor == J)
      throw new Error("Abstract classes can't be instantiated.");
    this.id = l, this.state = a, this.meta.value = t, this.type = t.ui && t.ui.component || t.type, this.ui.value = Object.assign({}, a.ui, t.ui), this.appContext = e, this.error.value = void 0, a.context.addContext(l, this), this._value.value = void 0, this._initMetaValue = this.getInitMetaValue();
  }
  get value() {
    return this._value.value;
  }
  set value(e) {
    if (this._value.value === e)
      return;
    this.setValue(e), Q(this.appContext).emit(`${be}-${this.state._formId}`, {
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
var L = /* @__PURE__ */ ((o) => (o.Object = "object", o.Array = "array", o.Boolean = "boolean", o.Integer = "integer", o))(L || {});
class He {
  constructor() {
    w(this, "_map", /* @__PURE__ */ new Map());
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
function ee(o) {
  if (o === void 0)
    return;
  if (o === null)
    return null;
  const e = Object.assign({}, o);
  return Object.keys(e).forEach(
    (a) => e[a] = typeof o[a] == "object" ? ee(o[a]) : o[a]
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
    w(this, "_formId", xe(4));
    w(this, "_ignoreErrorIds", []);
    w(this, "_context");
    w(this, "_layout", j("horizontal"));
    w(this, "_ajvOptions", {
      allErrors: !0,
      strict: !1,
      loopEnum: 50
    });
    w(this, "_formData", j({}));
    w(this, "_meta", {});
    w(this, "_ui", {
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
    w(this, "_validate");
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
    w(this, "state");
    w(this, "_ajv");
    w(this, "_validate");
    w(this, "appContext");
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
    const a = ee(e);
    return this._replaceReactiveToRawData(a), this._validate = this._ajv.compile(a), this._validate;
  }
  _forceCompile() {
    const e = ee(this.state.meta);
    this._replaceReactiveToRawData(e), this._validate = this._ajv.compile(e);
  }
  _replaceReactiveToRawData(e) {
    var t;
    let a, l;
    switch (e.type) {
      case L.Object:
        a = Object.values(e.properties), a.forEach((i) => {
          this._replaceReactiveToRawData(i);
        });
        break;
      case L.Array:
        l = Object.keys(e), l.forEach((i) => {
          R(e[i]) && (e[i] = e[i]._value);
        }), a = Object.values((t = e.items) == null ? void 0 : t.properties), a.forEach((i) => {
          this._replaceReactiveToRawData(i);
        });
        break;
      default:
        l = Object.keys(e), l.forEach((i) => {
          R(e[i]) && (e[i] = e[i]._value);
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
    const i = `${Z}-${this.state._formId}`, c = Q(this.appContext);
    if (a)
      return c.emit(i, {
        id: e.id,
        error: void 0
      }), !0;
    {
      const u = this._getCustomError(e), d = await this._getCustomAsyncError(e), _ = [...u, ...d];
      this._replaceWithDefaultErrors(e, l), this._replaceWithCustomErrors(e.id, l, _);
      const f = this.state.ui.ingoreKeywords || [];
      t = l.filter(
        (h) => f.indexOf(h.keyword) === -1
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
    var c, u;
    if (!a || a.length === 0)
      return;
    const l = ((u = (c = e.ui) == null ? void 0 : c.value) == null ? void 0 : u.errors) || {}, t = Object.assign({}, this.state.ui.errors, l), i = Object.keys(t);
    i && i.length > 0 && a.forEach((d) => {
      i.indexOf(d.keyword) > -1 && (d.message = t[d.keyword]);
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
  return o && !o.type && (o.type = L.Object), ue(o, e, a), { slotsName: e };
}
function ue(o, e, a) {
  switch (o.type) {
    case L.Object:
      Object.keys(o.properties).forEach((l) => {
        const t = o.properties[l];
        ue(t, e, a);
      });
      break;
    case L.Array:
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
    let a = j(!0);
    const { slotsName: l } = me(e.meta), t = M("state"), i = k(() => `v-${e.meta.ui && e.meta.ui.component || e.meta.type}`), c = k(() => t.layout);
    u();
    function u() {
      if (!e.meta.type)
        throw new Error(
          "Form item type must be one of these: number, string, boolean, array, object"
        );
      a.value = e.show, d(a.value, e.id);
      const { visibleIf: _ } = Xe(), { appContext: f } = P();
      Q(f).on(`${be}-${t._formId}`, (h) => {
        let p = _(t.context, e.meta, a.value, {
          id: h.id,
          value: h.value
        });
        p !== a.value && (a.value = p, d(a.value, e.id));
      });
    }
    function d(_, f) {
      _ ? t._ignoreErrorIds = t._ignoreErrorIds.filter((m) => m !== f) : t._ignoreErrorIds.indexOf(f) === -1 && t._ignoreErrorIds.push(f);
    }
    return (_, f) => (x(), S("div", {
      style: ie({ display: n(c) === "inline" ? "inline-block" : "block" })
    }, [
      n(a) ? (x(), $(we(n(i)), {
        key: 0,
        id: o.id,
        meta: o.meta
      }, z({ _: 2 }, [
        H(n(l), (m) => ({
          name: m,
          fn: y((h) => [
            E(_.$slots, m, ae(oe({ ...h })))
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
    let t = { type: L.Object }, i = j(!1);
    const c = new Ye();
    Ee("state", c);
    const { slotsName: u } = me(l.meta), { appContext: d } = P(), _ = Q(d);
    f(), k(() => {
      const s = Object.assign({}, c.ui);
      return l.layout === "vertical" ? null : { span: s.spanControl, offset: s.spanLabel };
    }), ne(
      () => l.modelValue,
      (s, g) => {
        JSON.stringify(s) !== JSON.stringify(g) && b(s);
      },
      {
        deep: !1
      }
    ), ne(
      () => c.formData,
      (s, g) => {
        a("update:modelValue", s);
      },
      {
        deep: !0
      }
    );
    function f() {
      c.layout = N(l, "layout"), t = Object.assign({}, t, l.meta), c.meta = t, c.formData = Object.assign({}, l.modelValue), m(c.formData, l.meta.properties), c.context = new He(), c.validate = new Qe(d, c);
    }
    function m(s, g) {
      Object.keys(g).forEach((O) => {
        const T = g[O];
        if (T.type !== "null")
          switch (T.type) {
            case L.Object:
              s[O] = s[O] || {}, m(s[O], T.properties);
              break;
            case L.Array:
              s[O] = s[O] || [];
              break;
            case L.Boolean:
              break;
            default:
              s[O] = s[O] || void 0;
              break;
          }
      });
    }
    function h(s) {
      return c.context.getContext(s);
    }
    async function p() {
      return await c.validate.runValidateForm();
    }
    function b(s) {
      const g = c.context.getContext("/");
      g && (g.value = s, a("update:modelValue", c.formData));
    }
    function v() {
      a("form-reset", re(c.formData)), b({});
    }
    async function r() {
      i.value = !0;
      const s = await p();
      i.value = !1, a("form-submit", {
        valid: s,
        data: s ? re(c.formData) : void 0
      });
    }
    return de(() => {
      _.all.clear();
    }), e({
      getContext: h,
      validate: p,
      reset: b,
      clearForm: v,
      submitForm: r
    }), (s, g) => {
      const O = V("d-button"), T = V("d-form-operation"), X = V("d-form");
      return x(), S("div", tt, [
        I(X, {
          class: se(["v", {
            v__inline: o.layout === "inline",
            v__horizontal: o.layout === "horizontal"
          }]),
          layout: o.layout,
          "label-size": "lg",
          "label-align": "end",
          "message-type": "text"
        }, {
          default: y(() => [
            I(fe, {
              id: "/",
              meta: n(t)
            }, z({ _: 2 }, [
              H(n(u), (F) => ({
                name: F,
                fn: y((le) => [
                  E(s.$slots, F, ae(oe({ ...le })))
                ])
              }))
            ]), 1032, ["meta"]),
            o.button === "default" ? (x(), $(T, {
              key: 0,
              class: "v__default-submit-button"
            }, {
              default: y(() => [
                I(O, {
                  variant: "solid",
                  color: "danger",
                  onClick: v,
                  style: { "margin-right": "8px" }
                }, {
                  default: y(() => [
                    Y(" \u91CD\u7F6E ")
                  ]),
                  _: 1
                }),
                I(O, {
                  variant: "solid",
                  color: "primary",
                  onClick: r,
                  loading: n(i)
                }, {
                  default: y(() => [
                    Y(" \u63D0\u4EA4 ")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ]),
              _: 1
            })) : o.button === "custom" ? E(s.$slots, "button", {
              key: 1,
              loading: n(i),
              clearForm: v,
              submitForm: r
            }) : (x(), S(W, { key: 2 }, [], 64))
          ]),
          _: 3
        }, 8, ["layout", "class"])
      ]);
    };
  }
}), ot = { class: "control-wrapper" }, st = { class: "control-slot" }, lt = C({
  name: "v-wrapper"
}), it = /* @__PURE__ */ C({
  ...lt,
  props: {
    id: null,
    show: { type: Boolean },
    meta: null
  },
  setup(o) {
    const e = o, a = M("state"), l = a.context.getContext(e.id), t = k(() => Object.assign({}, a.ui, e.meta.ui)), i = k({
      get() {
        return l.error.value;
      },
      set(_) {
        l.error.value = _;
      }
    }), { appContext: c } = P(), u = Q(c);
    u.on(`${Z}-${a._formId}`, d), de(() => {
      u.off(`${Z}-${a._formId}`, d);
    });
    function d(_) {
      _.id === e.id && (i.value = _.error ? _.error.message : void 0);
    }
    return (_, f) => {
      const m = V("d-form-item");
      return x(), $(m, {
        label: o.meta.title,
        "help-tips": n(t).optional,
        "extra-info": o.meta.description,
        class: se({ "show-required": n(t).showRequired })
      }, {
        default: y(() => [
          G("div", ot, [
            G("div", st, [
              E(_.$slots, "default", { error: n(i) }, void 0, !0)
            ]),
            ge(G("div", { class: "error-message" }, q(n(i)), 513), [
              [ye, n(i)]
            ])
          ])
        ]),
        _: 3
      }, 8, ["label", "help-tips", "extra-info", "class"]);
    };
  }
});
const te = (o, e) => {
  const a = o.__vccOpts || o;
  for (const [l, t] of e)
    a[l] = t;
  return a;
}, U = /* @__PURE__ */ te(it, [["__scopeId", "data-v-7af13b33"]]);
class rt extends J {
  constructor(a, l, t, i) {
    super(a, l, t, i);
    w(this, "childMetaPairs");
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
    const e = o, { slotsName: a } = me(e.meta), l = M("state"), { appContext: t } = P(), i = new rt(t, l, e.id, e.meta), c = k(() => i.ui.value || {}), u = k(() => Object.assign({}, l.ui.grid, c.value.grid).gutter), d = k(() => l.layout.value), _ = je({
      "margin-left": `-${u.value / 2}px`,
      "margin-right": `-${u.value / 2}px`
    });
    function f(p) {
      return p.ui && p.ui.show;
    }
    function m(p) {
      if (d.value === "inline")
        return {};
      const b = p.meta.ui && p.meta.ui.grid || {};
      return Object.assign({}, l.ui.grid, c.value.grid, b);
    }
    const h = i.childMetaPairs;
    return (p, b) => {
      const v = V("d-col"), r = V("d-row");
      return x(), $(r, {
        gutter: n(u),
        wrap: "",
        style: ie(_)
      }, {
        default: y(() => [
          (x(!0), S(W, null, H(n(h), (s, g) => (x(), $(v, {
            key: g,
            span: m(s).span,
            offset: m(s).offset,
            xs: m(s).xs,
            sm: m(s).sm,
            md: m(s).md,
            lg: m(s).lg,
            xl: m(s).xl,
            xxl: m(s).xxl,
            style: ie({ display: n(d) === "inline" ? "inline-block" : "block" })
          }, {
            default: y(() => [
              I(fe, {
                id: s.key,
                meta: s.meta,
                show: f(s.meta)
              }, z({ _: 2 }, [
                H(n(a), (O) => ({
                  name: O,
                  fn: y((T) => [
                    E(p.$slots, O, ae(oe({ ...T })))
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
function B(o, e) {
  const a = j({});
  return Object.keys(e.value).forEach((t) => {
    o.indexOf(t) > -1 && (a.value[t] = N(e.value, t));
  }), { bindings: a };
}
class K extends J {
  constructor(a, l, t, i) {
    var c;
    super(a, l, t, i);
    w(this, "open");
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
    const e = o, a = M("state"), { appContext: l } = P(), t = new K(l, a, e.id, e.meta), { bindings: i } = B(Object.keys(Me.props), t.ui), c = N(e.meta, "readOnly"), u = k(() => t.ui.value || {}), d = k({
      get() {
        return t.value;
      },
      set(v) {
        t.value = v;
      }
    });
    function _() {
      var v, r;
      (r = (v = n(u)).change) == null || r.call(v, n(d));
    }
    function f(v) {
      var r, s;
      (s = (r = n(u)).input) == null || s.call(r, v);
    }
    function m() {
      var v, r;
      (r = (v = n(u)).clear) == null || r.call(v);
    }
    function h(v) {
      var r, s;
      (s = (r = n(u)).focus) == null || s.call(r, v);
    }
    function p(v) {
      var r, s;
      (s = (r = n(u)).blur) == null || s.call(r, v);
    }
    function b(v) {
      var r, s;
      (s = (r = n(u)).keydown) == null || s.call(r, v);
    }
    return (v, r) => {
      const s = V("d-input");
      return x(), $(U, {
        id: o.id,
        meta: o.meta
      }, {
        default: y(({ error: g }) => [
          I(s, D(n(i), {
            modelValue: n(d),
            "onUpdate:modelValue": r[0] || (r[0] = (O) => R(d) ? d.value = O : null),
            error: !!g,
            disabled: n(c),
            onFocus: h,
            onBlur: p,
            onKeydown: b,
            onClear: m,
            onInput: f,
            onChange: _
          }), z({ _: 2 }, [
            n(u).slotNameOfPrefix ? {
              name: "prefix",
              fn: y(() => [
                E(v.$slots, n(u).slotNameOfPrefix)
              ]),
              key: "0"
            } : void 0,
            n(u).slotNameOfSuffix ? {
              name: "suffix",
              fn: y(() => [
                E(v.$slots, n(u).slotNameOfSuffix)
              ]),
              key: "1"
            } : void 0,
            n(u).slotNameOfPrepend ? {
              name: "prepend",
              fn: y(() => [
                E(v.$slots, n(u).slotNameOfPrepend)
              ]),
              key: "2"
            } : void 0,
            n(u).slotNameOfAppend ? {
              name: "append",
              fn: y(() => [
                E(v.$slots, n(u).slotNameOfAppend)
              ]),
              key: "3"
            } : void 0
          ]), 1040, ["modelValue", "error", "disabled"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
});
class ft extends J {
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
    const e = o, a = M("state"), { appContext: l } = P(), t = new ft(l, a, e.id, e.meta), { bindings: i } = B(Object.keys(Ae.props), t.ui), c = N(e.meta, "readOnly"), u = k(() => t.ui.value || {}), d = k({
      get() {
        return t.value;
      },
      set(f) {
        t.value = f || !1;
      }
    });
    function _() {
      var f, m;
      (m = (f = n(u)).change) == null || m.call(f, n(d));
    }
    return (f, m) => {
      const h = V("d-switch");
      return x(), $(U, {
        id: o.id,
        meta: o.meta
      }, {
        default: y(() => [
          I(h, D({
            class: "v__boolean",
            modelValue: n(d),
            "onUpdate:modelValue": m[0] || (m[0] = (p) => R(d) ? d.value = p : null)
          }, n(i), {
            disabled: n(c),
            onChange: _
          }), z({ _: 2 }, [
            n(u).slotNameOfCheckedContent ? {
              name: "checkedContent",
              fn: y(() => [
                E(f.$slots, n(u).slotNameOfCheckedContent)
              ]),
              key: "0"
            } : void 0,
            n(u).slotNameOfUnCheckedContent ? {
              name: "uncheckedContent",
              fn: y(() => [
                E(f.$slots, n(u).slotNameOfUnCheckedContent)
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
    const e = o, a = M("state"), { appContext: l } = P(), t = new K(l, a, e.id, e.meta), { bindings: i } = B(Object.keys(Re.props), t.ui), c = N(e.meta, "readOnly"), u = j();
    Object.assign(t, { autoCompleteRef: u });
    const d = k(() => t.ui.value || {}), _ = k({
      get() {
        return t.value;
      },
      set(f) {
        t.value = f || void 0;
      }
    });
    return (f, m) => {
      const h = V("d-auto-complete");
      return x(), $(U, {
        id: o.id,
        meta: o.meta
      }, {
        default: y(() => [
          I(h, D({
            ref_key: "autoCompleteRef",
            ref: u,
            modelValue: n(_),
            "onUpdate:modelValue": m[0] || (m[0] = (p) => R(_) ? _.value = p : null)
          }, n(i), { disabled: n(c) }), z({ _: 2 }, [
            n(d).slotNameOfItem ? {
              name: "item",
              fn: y((p) => [
                E(f.$slots, n(d).slotNameOfItem, ae(oe(p)))
              ]),
              key: "0"
            } : void 0,
            n(d).slotNameOfNothing ? {
              name: "nothing",
              fn: y((p) => [
                E(f.$slots, n(d).slotNameOfNothing, { keyword: p })
              ]),
              key: "1"
            } : void 0,
            n(d).slotNameOfSearching ? {
              name: "searching",
              fn: y((p) => [
                E(f.$slots, n(d).slotNameOfSearching, { keyword: p })
              ]),
              key: "2"
            } : void 0,
            n(d).slotNameOfPrefix ? {
              name: "prefix",
              fn: y(() => [
                E(f.$slots, n(d).slotNameOfPrefix)
              ]),
              key: "3"
            } : void 0,
            n(d).slotNameOfSuffix ? {
              name: "suffix",
              fn: y(() => [
                E(f.$slots, n(d).slotNameOfSuffix)
              ]),
              key: "4"
            } : void 0,
            n(d).slotNameOfPrepend ? {
              name: "prepend",
              fn: y(() => [
                E(f.$slots, n(d).slotNameOfPrepend)
              ]),
              key: "5"
            } : void 0,
            n(d).slotNameOfAppend ? {
              name: "append",
              fn: y(() => [
                E(f.$slots, n(d).slotNameOfAppend)
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
    const e = o, a = M("state"), { appContext: l } = P(), t = new K(l, a, e.id, e.meta), { bindings: i } = B(Object.keys(De.props), t.ui), c = N(e.meta, "readOnly"), u = k(() => t.ui.value || {}), d = k({
      get() {
        return t.value || [];
      },
      set(f) {
        t.value = f.length > 0 ? f : void 0;
      }
    });
    function _() {
      var f, m;
      (m = (f = n(u)).change) == null || m.call(f, n(d));
    }
    return (f, m) => {
      const h = V("d-checkbox-group"), p = V("d-checkbox"), b = V("d-col"), v = V("d-row");
      return x(), $(U, {
        id: o.id,
        meta: o.meta
      }, {
        default: y(() => [
          n(u).span ? (x(), $(h, D({
            key: 1,
            class: "v__checkbox",
            modelValue: n(d),
            "onUpdate:modelValue": m[1] || (m[1] = (r) => R(d) ? d.value = r : null)
          }, n(i), {
            disabled: n(c),
            onChange: _
          }), {
            default: y(() => [
              I(v, { wrap: "" }, {
                default: y(() => [
                  (x(!0), S(W, null, H(o.meta.enum, (r, s) => (x(), $(b, {
                    class: "v__text-left",
                    span: n(u).span,
                    key: s
                  }, {
                    default: y(() => [
                      I(p, {
                        value: r.value || r,
                        disabled: r.disabled || !1
                      }, {
                        default: y(() => [
                          Y(q(r.label || r), 1)
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
          }, 16, ["modelValue", "disabled"])) : (x(), $(h, D({
            key: 0,
            class: "v__checkbox",
            direction: "row",
            modelValue: n(d),
            "onUpdate:modelValue": m[0] || (m[0] = (r) => R(d) ? d.value = r : null)
          }, n(i), {
            disabled: n(c),
            options: o.meta.enum,
            onChange: _
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
    const e = o, a = M("state"), { appContext: l } = P(), t = new K(l, a, e.id, e.meta);
    let i = {}, c = {};
    if (t.ui.value.pickerType === "range") {
      const { bindings: r } = B(
        Object.keys(_e.props),
        t.ui
      );
      i = r;
    } else {
      const { bindings: r } = B(
        Object.keys(Te.props),
        t.ui
      );
      c = r;
    }
    const u = j(), d = j();
    Object.assign(t, { rangeDatePickerRef: u, datePickerRef: d });
    const _ = N(e.meta, "readOnly"), f = k(() => t.ui.value || {}), m = k({
      get() {
        return t.value;
      },
      set(r) {
        t.value = r;
      }
    });
    function h(r) {
      var s, g;
      (g = (s = n(f)).toggleChange) == null || g.call(s, r);
    }
    function p(r) {
      var s, g;
      (g = (s = n(f)).confirmEvent) == null || g.call(s, r);
    }
    function b(r) {
      var s, g;
      (g = (s = n(f)).focus) == null || g.call(s, r);
    }
    function v() {
      var r, s;
      (s = (r = n(f)).blur) == null || s.call(r);
    }
    return (r, s) => {
      const g = V("d-date-picker-pro");
      return x(), $(U, {
        id: o.id,
        meta: o.meta
      }, {
        default: y(() => [
          n(f).pickerType === "range" ? (x(), $(n(_e), D({
            key: 0,
            ref_key: "rangeDatePickerRef",
            ref: u,
            class: "v__date",
            modelValue: n(m),
            "onUpdate:modelValue": s[0] || (s[0] = (O) => R(m) ? m.value = O : null)
          }, n(i), {
            disabled: n(_),
            onToggleChange: h,
            onConfirmEvent: p,
            onFocus: b,
            onBlur: v
          }), z({ _: 2 }, [
            n(f).slotNameOfRightArea ? {
              name: "rightArea",
              fn: y(() => [
                E(r.$slots, n(f).slotNameOfRightArea)
              ]),
              key: "0"
            } : void 0,
            n(f).slotNameOfFooter ? {
              name: "footer",
              fn: y(() => [
                E(r.$slots, n(f).slotNameOfFooter)
              ]),
              key: "1"
            } : void 0
          ]), 1040, ["modelValue", "disabled"])) : (x(), $(g, D({
            key: 1,
            ref_key: "datePickerRef",
            ref: d,
            class: "v__date",
            modelValue: n(m),
            "onUpdate:modelValue": s[1] || (s[1] = (O) => R(m) ? m.value = O : null)
          }, n(c), {
            disabled: n(_),
            onToggleChange: h,
            onConfirmEvent: p,
            onFocus: b,
            onBlur: v
          }), z({ _: 2 }, [
            n(f).slotNameOfRightArea ? {
              name: "rightArea",
              fn: y(() => [
                E(r.$slots, n(f).slotNameOfRightArea)
              ]),
              key: "0"
            } : void 0,
            n(f).slotNameOfFooter ? {
              name: "footer",
              fn: y(() => [
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
    const e = o, a = M("state"), { appContext: l } = P(), t = new K(l, a, e.id, e.meta);
    let i = j(null), c = {};
    const { bindings: u } = B(Object.keys(Fe.props), t.ui);
    c = u;
    const d = N(e.meta, "readOnly"), _ = k(() => t.ui.value || {}), f = k({
      get() {
        return t.value;
      },
      set(p) {
        t.value = p;
      }
    });
    function m(p) {
      var b, v;
      (v = (b = n(_)).change) == null || v.call(b, p);
    }
    function h(p) {
      var b, v;
      (v = (b = n(_)).ok) == null || v.call(b, p);
    }
    return (p, b) => {
      const v = V("d-time-picker");
      return x(), $(U, {
        id: o.id,
        meta: o.meta
      }, {
        default: y(() => [
          I(v, D({
            ref_key: "timePicker",
            ref: i,
            class: "v__time",
            modelValue: n(f),
            "onUpdate:modelValue": b[0] || (b[0] = (r) => R(f) ? f.value = r : null)
          }, n(c), {
            disabled: n(d),
            onOk: h,
            onChange: m
          }), z({ _: 2 }, [
            n(_).slotNameOfCustomViewTemplate ? {
              name: "customViewTemplate",
              fn: y(() => [
                E(p.$slots, n(_).slotNameOfCustomViewTemplate, { ref: n(i) })
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
    const e = o, a = M("state"), { appContext: l } = P(), t = new K(l, a, e.id, e.meta), { bindings: i } = B(Object.keys(Se.props), t.ui), c = N(e.meta, "readOnly"), u = k(() => t.ui.value || {}), d = k({
      get() {
        return t.value;
      },
      set(r) {
        t.value = r;
      }
    });
    let _ = j(-1 / 0), f = j(1 / 0), m = j(1), h = j((r) => r), p = j((r) => r);
    b();
    function b() {
      const {
        minimum: r,
        exclusiveMinimum: s,
        maximum: g,
        exclusiveMaximum: O,
        multipleOf: T,
        type: X
      } = t.meta.value;
      m.value = T || 1, typeof r < "u" && (_.value = s ? r + m.value : r), typeof g < "u" && (f.value = O ? g - m.value : g), X === "integer" && (_.value = Math.trunc(_.value), f.value = Math.trunc(f.value), m.value = Math.trunc(m.value)), u.value.prefix != null && (u.value.formatter = (F) => F == null ? "" : `${u.value.prefix} ${F}`, u.value.parser = (F) => F.replace(`${u.value.prefix} `, "")), u.value.unit != null && (u.value.formatter = (F) => F == null ? "" : `${F} ${u.value.unit}`, u.value.parser = (F) => F.replace(` ${u.value.unit}`, "")), u.value.formatter && (h.value = u.value.formatter), u.value.parser && (p.value = u.value.parser);
    }
    function v(r) {
      d.value = t.meta.value.type === L.Integer ? Math.floor(r) : r, u.value.change && u.value.change(n(d));
    }
    return (r, s) => {
      const g = V("d-input-number");
      return x(), $(U, {
        id: o.id,
        meta: o.meta
      }, {
        default: y(() => [
          I(g, D({
            class: "v__number",
            modelValue: n(d),
            "onUpdate:modelValue": s[0] || (s[0] = (O) => R(d) ? d.value = O : null)
          }, n(i), {
            disabled: n(c),
            min: n(_),
            max: n(f),
            step: n(m),
            class: { "hidden-step": n(u).hideStep },
            onChange: s[1] || (s[1] = (O) => v(O))
          }), null, 16, ["modelValue", "disabled", "min", "max", "step", "class"])
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
});
const he = /* @__PURE__ */ te(Vt, [["__scopeId", "data-v-936d25e3"]]);
class $t extends J {
  constructor(a, l, t, i) {
    super(a, l, t, i);
    w(this, "ids", j([]));
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
          const u = this.state.context.getContext(
            `${this.id}/${c}`
          );
          u.value = i;
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
    const l = ee(a), t = n(this.ids).length;
    for (let i = 0; i < t; i++)
      this.remove(t - i - 1, !1);
    l && l.length && (l.forEach(() => this.add(!1)), Ie(() => {
      l.forEach((i, c) => {
        const u = this.state.context.getContext(
          `${this.id}/${c}`
        );
        u.value = i;
      });
    })), this.validate();
  }
  validate() {
    return this.state.validate.runValidationFormItem(this);
  }
  getPathValue(a, l) {
    const t = l.split("/").filter((c) => c);
    let i = ee(a);
    for (let c = 0; c < t.length; c++) {
      const u = t[c];
      i = i[u];
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
    const t = this.id.split("/").filter((u) => !!u);
    t.reduce((u, d, _) => (_ === t.length - 1 && u[d].splice(a, 1), u[d]), this.state.formData);
    const i = [];
    for (const u of this.state.context.getMap().keys())
      new RegExp(`^/?${this.id}/`).test(u) && i.push(u);
    for (let u = a + 1; u < n(this.ids).length + 1; u++) {
      const d = new RegExp(`^(/?${this.id}/)${u}`);
      i.filter((_) => d.test(_)).forEach((_) => {
        const f = this.state.context.getContext(_), m = _.replace(d, (h, p) => `${p}${u - 1}`);
        if (f.id = m, f.childMetaPairs) {
          const h = f.buildChildMetaPairs(
            m,
            n(f.meta)
          );
          f.childMetaPairs.forEach((p, b) => {
            p.key = h[b].key;
          });
        }
        this.state.context.addContext(m, f);
      });
    }
    const c = new RegExp(`^/?${this.id}/${n(this.ids).length}`);
    i.filter((u) => c.test(u)).forEach((u) => {
      this.state.context.removeContext(u);
    }), l && this.validate();
  }
}
const wt = { class: "control-wrapper" }, Et = { class: "v__array-add" }, jt = ["onClick"], It = C({
  name: "v-array"
}), Nt = /* @__PURE__ */ C({
  ...It,
  props: {
    id: null,
    meta: null
  },
  setup(o) {
    const e = o, a = M("state"), { appContext: l } = P(), t = new $t(l, a, e.id, e.meta), i = Q(l), c = k(() => n(t.ui) || {});
    k({
      get() {
        return t.value;
      },
      set(s) {
        t.value = s || [];
      }
    });
    const u = k({
      get() {
        return n(t.error);
      },
      set(s) {
        t.error.value = s;
      }
    }), d = N(e.meta, "readOnly"), _ = k(() => n(d) || e.meta.maxItems != null && n(t.ids).length >= e.meta.maxItems), f = k(() => {
      const s = e.meta.minItems;
      return !(n(d) || s != null && n(t.ids).length <= s);
    }), m = j(8), h = j("");
    Ne(() => {
      var T;
      i.on(`${Z}-${a._formId}`, p);
      const { grid: s, removable: g, removeTitle: O } = n(c);
      m.value = (T = s == null ? void 0 : s.arraySpan) != null ? T : 8, h.value = g === !1 ? null : O;
    }), de(() => {
      i.off(`${Z}-${a._formId}`, p);
    });
    function p(s) {
      s.id === e.id && (u.value = s.error ? s.error.message : void 0);
    }
    function b(s) {
      return `${e.id}/${s}`;
    }
    function v() {
      var g, O;
      const s = t.add();
      (O = (g = n(c)).add) == null || O.call(g, s);
    }
    function r(s) {
      var g, O;
      t.remove(s), (O = (g = n(c)).remove) == null || O.call(g, s);
    }
    return (s, g) => {
      const O = V("d-button"), T = V("d-card"), X = V("d-col"), F = V("d-row"), le = V("d-form-item");
      return x(), $(le, {
        label: o.meta.title,
        "help-tips": n(c).optional,
        "extra-info": o.meta.description,
        class: se({ "show-required": n(c).showRequired })
      }, {
        default: y(() => [
          G("div", wt, [
            G("div", Et, [
              I(O, {
                type: n(c).addType,
                disabled: n(_),
                onClick: v
              }, {
                default: y(() => [
                  Y(q(n(c).addTitle || "\u6DFB\u52A0"), 1)
                ]),
                _: 1
              }, 8, ["type", "disabled"])
            ]),
            I(F, {
              class: "v__array-container",
              wrap: ""
            }, {
              default: y(() => [
                (x(!0), S(W, null, H(n(t).ids.value, (ke, ve) => (x(), $(X, {
                  key: ke.key,
                  span: m.value,
                  class: "v__array-item"
                }, {
                  default: y(() => [
                    I(T, { shadow: "never" }, {
                      content: y(() => [
                        I(fe, {
                          id: b(ve),
                          meta: o.meta.items
                        }, null, 8, ["id", "meta"]),
                        n(f) ? (x(), S("span", {
                          key: 0,
                          class: "v__array-remove",
                          onClick: (on) => r(ve)
                        }, [
                          I(O, {
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
            ge(G("div", { class: "error-message" }, q(n(u)), 513), [
              [ye, n(u)]
            ])
          ])
        ]),
        _: 1
      }, 8, ["label", "help-tips", "extra-info", "class"]);
    };
  }
});
const Pt = /* @__PURE__ */ te(Nt, [["__scopeId", "data-v-1ae10066"]]), Mt = ["innerHTML"], At = ["textContent"], Rt = ["innerHTML"], Dt = C({
  name: "v-text"
}), Tt = /* @__PURE__ */ C({
  ...Dt,
  props: {
    id: null,
    meta: null
  },
  setup(o) {
    const e = o, a = M("state"), { appContext: l } = P(), t = new K(l, a, e.id, e.meta), i = k(() => t.ui.value || {}), c = k(
      () => We(n(i).text) ? n(i).text() : n(i).text
    );
    return (u, d) => {
      const _ = V("d-form-item");
      return x(), S("div", null, [
        I(_, {
          label: o.meta.title
        }, z({
          default: y(() => [
            n(i).slotNameOfDefault ? E(u.$slots, n(i).slotNameOfDefault, { key: 0 }, void 0, !0) : (x(), S(W, { key: 1 }, [
              n(i).html ? (x(), S("span", {
                key: 0,
                innerHTML: n(i).html,
                class: "v__content-text"
              }, null, 8, Mt)) : (x(), S("span", {
                key: 1,
                textContent: q(n(c)),
                class: "v__content-text"
              }, null, 8, At))
            ], 64))
          ]),
          _: 2
        }, [
          o.meta.description ? {
            name: "extra",
            fn: y(() => [
              G("div", {
                innerHTML: o.meta.description,
                class: "v__description"
              }, null, 8, Rt)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["label"])
      ]);
    };
  }
});
const Ft = /* @__PURE__ */ te(Tt, [["__scopeId", "data-v-36d4d8fd"]]), St = C({
  name: "v-textarea"
}), Ut = /* @__PURE__ */ C({
  ...St,
  props: {
    id: null,
    meta: null
  },
  setup(o) {
    const e = o, a = M("state"), { appContext: l } = P(), t = new K(l, a, e.id, e.meta), { bindings: i } = B(Object.keys(Ue.props), t.ui), c = N(e.meta, "readOnly"), u = N(e.meta, "maxLength"), d = k(() => t.ui.value || {}), _ = k({
      get() {
        return t.value;
      },
      set(v) {
        t.value = v;
      }
    });
    function f(v) {
      var r, s;
      (s = (r = n(d)).change) == null || s.call(r, n(v));
    }
    function m(v) {
      var r, s;
      (s = (r = n(d)).update) == null || s.call(r, n(v));
    }
    function h(v) {
      var r, s;
      (s = (r = n(d)).focus) == null || s.call(r, v);
    }
    function p(v) {
      var r, s;
      (s = (r = n(d)).blur) == null || s.call(r, v);
    }
    function b(v) {
      var r, s;
      (s = (r = n(d)).keydown) == null || s.call(r, v);
    }
    return (v, r) => {
      const s = V("d-textarea");
      return x(), $(U, {
        id: o.id,
        meta: o.meta
      }, {
        default: y(({ error: g }) => [
          I(s, D(n(i), {
            error: !!g,
            disabled: n(c),
            maxlength: n(u),
            rows: n(d).rows,
            modelValue: n(_),
            "onUpdate:modelValue": r[0] || (r[0] = (O) => R(_) ? _.value = O : null),
            onUpdate: m,
            onChange: f,
            onFocus: h,
            onBlur: p,
            onKeydown: b
          }), null, 16, ["error", "disabled", "maxlength", "rows", "modelValue"])
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
});
class pe extends J {
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
  ne(o, () => {
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
    const e = o, a = M("state"), { appContext: l } = P(), t = new pe(l, a, e.id, e.meta), { bindings: i } = B(Object.keys(Be.props), t.ui), c = N(e.meta, "readOnly"), u = N(e.meta, "minimum"), d = N(e.meta, "maximum"), _ = N(e.meta, "multipleOf");
    Bt([u, d, _], a);
    const f = k(() => t.ui.value || {}), m = k({
      get() {
        return t.value;
      },
      set(p) {
        f.value.range ? t.value = p || [] : t.value = Oe(p) ? p : void 0;
      }
    });
    function h(p) {
      var b, v;
      (v = (b = n(f)).change) == null || v.call(b, p);
    }
    return (p, b) => {
      const v = V("d-slider");
      return x(), $(U, {
        id: o.id,
        meta: o.meta
      }, {
        default: y(() => [
          I(v, D(n(i), {
            disabled: n(c),
            min: n(u) || 0,
            max: n(d) || 100,
            step: n(_) || 1,
            modelValue: n(m),
            "onUpdate:modelValue": b[0] || (b[0] = (r) => R(m) ? m.value = r : null),
            onChange: h
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
    const e = o, a = M("state"), { appContext: l } = P(), t = new pe(l, a, e.id, e.meta), { bindings: i } = B(Object.keys(Le.props), t.ui), c = N(e.meta, "readOnly"), u = k(() => t.ui.value || {}), d = k({
      get() {
        return t.value;
      },
      set(f) {
        t.value = f;
      }
    });
    function _(f) {
      var m, h;
      (h = (m = n(u)).change) == null || h.call(m, f);
    }
    return (f, m) => {
      const h = V("d-rate");
      return x(), $(U, {
        id: o.id,
        meta: o.meta
      }, {
        default: y(() => [
          I(h, D(n(i), {
            read: n(c),
            count: o.meta.maximum || 5,
            modelValue: n(d),
            "onUpdate:modelValue": m[0] || (m[0] = (p) => R(d) ? d.value = p : null),
            onChange: _
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
    const e = o, a = M("state"), { appContext: l } = P(), t = new pe(l, a, e.id, e.meta), i = N(e.meta, "readOnly"), c = j([]), u = k(() => t.ui.value || {}), d = k({
      get() {
        return t.value;
      },
      set(h) {
        u.value.range ? t.value = h || [] : t.value = h;
      }
    });
    ne(() => n(t.meta).enum, m, { immediate: !0 });
    function _(h, p) {
      var b, v, r, s;
      h.disabled || (h.checked = p, f(), (v = (b = n(u)).checkedChange) == null || v.call(b, p), (s = (r = n(u)).change) == null || s.call(r, re(n(d))));
    }
    function f() {
      const h = n(c).filter((p) => p.checked).map((p) => p.value);
      d.value = h.length ? h : void 0;
    }
    function m(h) {
      let p = n(h);
      p == null || !Array.isArray(p) || p.length === 0 || (typeof p[0] != "object" && (p = p.map((b) => ({
        label: b,
        value: b
      }))), p.forEach((b) => {
        b.checked = (d.value || []).indexOf(b.value) > -1;
      }), p.forEach((b) => b.disabled = e.meta.readOnly), c.value = p);
    }
    return (h, p) => {
      const b = V("d-tag");
      return x(), $(U, {
        id: o.id,
        meta: o.meta
      }, {
        default: y(() => [
          (x(!0), S(W, null, H(c.value, (v) => (x(), $(b, {
            key: v.value,
            type: "primary",
            class: se({ disabled: v.disabled || n(i) }),
            checked: v.checked,
            onClick: () => _(v, !v.checked)
          }, {
            default: y(() => [
              G("span", null, q(v.label), 1)
            ]),
            _: 2
          }, 1032, ["class", "checked", "onClick"]))), 128))
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
});
const qt = /* @__PURE__ */ te(Wt, [["__scopeId", "data-v-7c567630"]]), Jt = C({
  name: "v-radio"
}), Yt = /* @__PURE__ */ C({
  ...Jt,
  props: {
    id: null,
    meta: null
  },
  setup(o) {
    const e = o, a = M("state"), { appContext: l } = P(), t = new K(l, a, e.id, e.meta), { bindings: i } = B(Object.keys(ze.props), t.ui), c = N(e.meta, "readOnly"), u = k(() => t.ui.value || {}), d = k(() => (n(u).options || []).map((m) => qe(m) ? Object.assign(m, { disabled: m.disabled || !1 }) : { label: m, value: m, disabled: !1 })), _ = k({
      get() {
        return t.value;
      },
      set(m) {
        t.value = m;
      }
    });
    function f() {
      var m, h;
      (h = (m = n(u)).change) == null || h.call(m, n(_));
    }
    return (m, h) => {
      const p = V("d-radio-button"), b = V("d-radio"), v = V("d-radio-group");
      return x(), $(U, {
        id: o.id,
        meta: o.meta
      }, {
        default: y(() => [
          I(v, D({
            direction: "row",
            disabled: n(c)
          }, n(i), {
            modelValue: n(_),
            "onUpdate:modelValue": h[0] || (h[0] = (r) => R(_) ? _.value = r : null),
            onChange: f
          }), {
            default: y(() => [
              n(u).optionType === "button" ? (x(!0), S(W, { key: 0 }, H(n(d), (r) => (x(), $(p, {
                key: r.value,
                value: r.value,
                disabled: r.disabled
              }, {
                default: y(() => [
                  Y(q(r.label), 1)
                ]),
                _: 2
              }, 1032, ["value", "disabled"]))), 128)) : (x(!0), S(W, { key: 1 }, H(n(d), (r) => (x(), $(b, {
                key: r.value,
                value: r.value,
                disabled: r.disabled
              }, {
                default: y(() => [
                  Y(q(r.label), 1)
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
    const e = o, a = M("state"), { appContext: l } = P(), t = new K(l, a, e.id, e.meta), { bindings: i } = B(Object.keys(Ke.props), t.ui), c = N(e.meta, "readOnly"), u = k(() => t.ui.value || {}), d = k({
      get() {
        return t.value;
      },
      set(r) {
        t.value = r;
      }
    }), _ = k(() => ["slotNameOfDefault", "slotNameOfEmpty"].some((s) => !!n(u)[`${s}`]));
    function f(r) {
      var s, g;
      (g = (s = n(u)).valueChange) == null || g.call(s, r);
    }
    function m(r) {
      var s, g;
      (g = (s = n(u)).toggleChange) == null || g.call(s, r);
    }
    function h(r) {
      var s, g;
      (g = (s = n(u)).blur) == null || g.call(s, r);
    }
    function p(r) {
      var s, g;
      (g = (s = n(u)).focus) == null || g.call(s, r);
    }
    function b() {
      var r, s;
      (s = (r = n(u)).clear) == null || s.call(r);
    }
    function v(r) {
      var s, g;
      (g = (s = n(u)).removeTag) == null || g.call(s, r);
    }
    return (r, s) => {
      const g = V("d-select");
      return x(), $(U, {
        id: o.id,
        meta: o.meta
      }, {
        default: y(() => [
          n(_) ? (x(), $(g, D({
            key: 0,
            modelValue: n(d),
            "onUpdate:modelValue": s[0] || (s[0] = (O) => R(d) ? d.value = O : null)
          }, n(i), {
            disabled: n(c),
            onBlur: h,
            onFocus: p,
            onClear: b,
            onRemoveTag: v,
            onToggleChange: m,
            onValueChange: f
          }), z({
            default: y(() => [
              n(u).slotNameOfDefault ? E(r.$slots, n(u).slotNameOfDefault, { key: 0 }) : ce("", !0)
            ]),
            _: 2
          }, [
            n(u).slotNameOfEmpty ? {
              name: "empty",
              fn: y(() => [
                E(r.$slots, n(u).slotNameOfEmpty)
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue", "disabled"])) : (x(), $(g, D({
            key: 1,
            modelValue: n(d),
            "onUpdate:modelValue": s[1] || (s[1] = (O) => R(d) ? d.value = O : null)
          }, n(i), {
            disabled: n(c),
            onBlur: h,
            onFocus: p,
            onClear: b,
            onRemoveTag: v,
            onToggleChange: m,
            onValueChange: f
          }), null, 16, ["modelValue", "disabled"]))
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
});
function A(o, e, a) {
  o.component(e, a);
}
function Zt(o) {
  A(o, "v-object", ct), A(o, "v-string", mt), A(o, "v-boolean", vt), A(o, "v-array", Pt), A(o, "v-autocomplete", ht), A(o, "v-checkbox", yt), A(o, "v-date", xt), A(o, "v-number", he), A(o, "v-integer", he), A(o, "v-time", kt), A(o, "v-text", Ft), A(o, "v-radio", Yt), A(o, "v-textarea", Ut), A(o, "v-slider", zt), A(o, "v-rate", Ht), A(o, "v-tag", qt), A(o, "v-select", Xt);
}
const en = [at, U];
function tn(o) {
  en.forEach((e) => {
    o.component(e.name, e);
  }), Zt(o);
}
const nn = { installFormly: tn };
const an = function(o, e) {
  if (o.config.globalProperties.emitter = $e(), !e.lib || e.lib === "devui")
    nn.installFormly(o);
  else
    throw new Error("Unsupport lib");
  return o.config.globalProperties.$VFORMLY_OPTIONS = e, o;
}, dn = { install: an };
export {
  J as BaseMeta,
  be as FORM_VALUE_CHANGE,
  dn as default,
  tn as installFormly,
  A as registerFormComponent
};
