var Ne = Object.defineProperty;
var Ee = (n, a, s) => a in n ? Ne(n, a, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[a] = s;
var N = (n, a, s) => (Ee(n, typeof a != "symbol" ? a + "" : a, s), s);
import Ve from "mitt";
import { defineComponent as j, ref as M, inject as S, computed as b, getCurrentInstance as V, openBlock as x, createElementBlock as A, normalizeStyle as _e, unref as e, createBlock as $, resolveDynamicComponent as ce, createSlots as P, renderList as J, withCtx as m, renderSlot as C, normalizeProps as Y, guardReactiveProps as Q, createCommentVNode as L, provide as je, watch as le, toRef as be, onBeforeUnmount as de, resolveComponent as k, createVNode as E, normalizeClass as ne, createTextVNode as W, Fragment as Z, toRaw as ie, createElementVNode as q, toDisplayString as z, mergeProps as T, isRef as F, nextTick as Me, onMounted as xe } from "vue";
import Se from "ajv";
import { Input as De, Switch as Pe, AutoComplete as Ae, CheckboxGroup as Fe, RangePicker as Re, DatePicker as Te, TimeRangePicker as Be, TimePicker as Ue, InputNumber as Le, Textarea as ze, Slider as He, Rate as Ke, Cascader as qe, RadioGroup as Ge, Select as We } from "ant-design-vue";
function ee(n) {
  return n.config.globalProperties.emitter;
}
var G = /* @__PURE__ */ ((n) => (n.Object = "object", n.Array = "array", n.Boolean = "boolean", n.Integer = "integer", n))(G || {});
function me(n) {
  const a = [], s = "slotName";
  return n && !n.type && (n.type = G.Object), re(n, a, s), { slotsName: a };
}
function re(n, a, s) {
  switch (n.type) {
    case G.Object:
      Object.keys(n.properties).forEach((i) => {
        const o = n.properties[i];
        re(o, a, s);
      });
      break;
    case G.Array:
      Object.keys(n.items.properties).forEach((i) => {
        const o = n.items.properties[i];
        re(o, a, s);
      });
      break;
    default:
      if (n.ui) {
        const i = Object.keys(n.ui).filter(
          (o) => o.startsWith(s)
        );
        i && i.length > 0 && i.forEach((o) => {
          a.push(n.ui[o]);
        });
      }
      break;
  }
}
function Je() {
  return { visibleIf: Ye };
}
function Ye(n, a, s, i) {
  if (!a.ui || !a.ui.visibleIf)
    return s;
  const o = Object.keys(a.ui.visibleIf)[0], r = a.ui.visibleIf[o];
  return i = i || {}, typeof r != "function" || o !== i.id ? s : r.call(null, n, i.id, i.value);
}
const Ce = "form-value-change", ae = "form-error-change", fe = /* @__PURE__ */ j({
  __name: "AFormlyItem",
  props: {
    id: null,
    show: { type: Boolean, default: !0 },
    meta: null
  },
  setup(n) {
    const a = n;
    let s = M(!0);
    const { slotsName: i } = me(a.meta), o = S("state"), r = b(() => `v-${a.meta.ui && a.meta.ui.component || a.meta.type}`), t = b(() => o.layout);
    l();
    function l() {
      if (!a.meta.type)
        throw new Error(
          "Form item type must be one of these: number, string, boolean, array, object"
        );
      s.value = a.show, f(s.value, a.id);
      const { visibleIf: g } = Je(), { appContext: v } = V();
      ee(v).on(`${Ce}-${o._formId}`, (u) => {
        let c = g(o.context, a.meta, s.value, {
          id: u.id,
          value: u.value
        });
        c !== s.value && (s.value = c, f(s.value, a.id));
      });
    }
    function f(g, v) {
      g ? o._ignoreErrorIds = o._ignoreErrorIds.filter((p) => p !== v) : o._ignoreErrorIds.indexOf(v) === -1 && o._ignoreErrorIds.push(v);
    }
    return (g, v) => (x(), A("div", {
      style: _e({ display: e(t) === "inline" ? "inline-block" : "block" })
    }, [
      e(s) ? (x(), $(ce(e(r)), {
        key: 0,
        id: n.id,
        meta: n.meta
      }, P({ _: 2 }, [
        J(e(i), (p) => ({
          name: p,
          fn: m((u) => [
            C(g.$slots, p, Y(Q({ ...u })))
          ])
        }))
      ]), 1032, ["id", "meta"])) : L("", !0)
    ], 4));
  }
});
class Qe {
  constructor() {
    N(this, "_map", /* @__PURE__ */ new Map());
  }
  addContext(a, s) {
    this._map.set(a, s);
  }
  removeContext(a) {
    this._map.delete(a);
  }
  getContext(a) {
    return this._map.get(a);
  }
  getContexts() {
    return this._map;
  }
  getMap() {
    return this._map;
  }
}
function Oe(n = 8, a = 10) {
  const s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), i = a || s.length, o = [];
  if (n)
    for (let r = 0; r < n; r++)
      o[r] = s[0 | Math.random() * i];
  else {
    let r;
    o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4";
    for (let t = 0; t < 36; t++)
      o[t] || (r = 0 | Math.random() * 16, o[t] = s[t == 19 ? r & 3 | 8 : r]);
  }
  return o.join("");
}
function ue(n) {
  if (n === void 0)
    return;
  if (n === null)
    return null;
  const a = Object.assign({}, n);
  return Object.keys(a).forEach(
    (s) => a[s] = typeof n[s] == "object" ? ue(n[s]) : n[s]
  ), Array.isArray(n) ? (a.length = n.length, Array.from(a)) : a;
}
const Xe = Array.isArray, Ze = (n) => typeof n == "function", ke = (n) => typeof n == "number";
function ve() {
  const { appContext: n } = V(), a = n.config.globalProperties;
  return {
    appContext: n,
    globalProperties: a
  };
}
class et {
  constructor() {
    N(this, "_formId", Oe(4));
    N(this, "_ignoreErrorIds", []);
    N(this, "_context");
    N(this, "_layout", M("horizontal"));
    N(this, "_ajvOptions", {
      allErrors: !0,
      strict: !1,
      loopEnum: 50
    });
    N(this, "_formData", M({}));
    N(this, "_meta", {});
    N(this, "_ui", {
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
    N(this, "_validate");
    this._applyUseOptions();
  }
  get context() {
    return this._context;
  }
  set context(a) {
    this._context = a;
  }
  get layout() {
    return this._layout;
  }
  set layout(a) {
    this._layout = a;
  }
  get ajvOptions() {
    return this._ajvOptions;
  }
  set ajvOptions(a) {
    this._ajvOptions = a;
  }
  get formData() {
    return this._formData.value;
  }
  set formData(a) {
    this._formData.value = a;
  }
  get meta() {
    return this._meta;
  }
  set meta(a) {
    this._meta = a;
  }
  get ui() {
    return this._ui;
  }
  set ui(a) {
    this._ui = Object.assign({}, this._ui, a);
  }
  get validate() {
    return this._validate;
  }
  set validate(a) {
    this._validate = a;
  }
  updateObjProp(a, s, i) {
    const [o, ...r] = s.split("/").filter((t) => t);
    r.length ? this.updateObjProp(a[o], r.join("/"), i) : a && (a[o] = i);
  }
  _applyUseOptions() {
    const { globalProperties: a } = ve(), s = a.$VFORMLY_OPTIONS;
    !s || typeof s != "object" || (this.ui = s.ui);
  }
}
class tt {
  constructor(a, s) {
    N(this, "state");
    N(this, "_ajv");
    N(this, "_validate");
    N(this, "appContext");
    this.state = s, this._ajv = new Se(s.ajvOptions), this._validate = null, this.appContext = a;
  }
  async runValidateForm() {
    const { valid: a, errors: s } = this._isAjvValid(), o = this.state.context.getContexts().values();
    let r = !0;
    for (const t of o)
      r = await this._validation(t, a, s) && r;
    return r;
  }
  async runValidationFormItem(a) {
    const { valid: s, errors: i } = this._isAjvValid();
    return await this._validation(a, s, i);
  }
  _ajvValidate(a) {
    return this._validate ? this._validate : (this._validate = this._ajv.compile(a), this._validate);
  }
  _getAjvError(a, s) {
    let i;
    for (let o = 0; o < s.length; o++) {
      const r = s[o], t = this._getId(r);
      if (a === t) {
        i = r;
        break;
      }
    }
    return i;
  }
  _isAjvValid() {
    const a = this._ajvValidate(this.state.meta);
    return { valid: a(this.state.formData || {}), errors: a.errors };
  }
  async _validation(a, s, i) {
    let o = [];
    const r = `${ae}-${this.state._formId}`, t = ee(this.appContext);
    if (s)
      return t.emit(r, {
        id: a.id,
        error: void 0
      }), !0;
    {
      const l = this._getCustomError(a), f = await this._getCustomAsyncError(a), g = [...l, ...f];
      this._replaceWithDefaultErrors(a, i), this._replaceWithCustomErrors(a.id, i, g);
      const v = this.state.ui.ingoreKeywords || [];
      o = i.filter(
        (u) => v.indexOf(u.keyword) === -1
      ), o = this._removeIgnoreErrors(o);
      const p = this._getAjvError(a.id, o);
      return t.emit(r, {
        id: a.id,
        error: p
      }), !p;
    }
  }
  _getCustomError(a) {
    var i, o;
    const s = (o = (i = a.ui) == null ? void 0 : i.value) == null ? void 0 : o.validator;
    return s ? s(a.value) : [];
  }
  async _getCustomAsyncError(a) {
    var i, o;
    const s = (o = (i = a.ui) == null ? void 0 : i.value) == null ? void 0 : o.validatorAsync;
    return s ? await s(a.value) : [];
  }
  _replaceWithDefaultErrors(a, s) {
    var t, l;
    if (!s || s.length === 0)
      return;
    const i = ((l = (t = a.ui) == null ? void 0 : t.value) == null ? void 0 : l.errors) || {}, o = Object.assign({}, this.state.ui.errors, i), r = Object.keys(o);
    r && r.length > 0 && s.forEach((f) => {
      r.indexOf(f.keyword) > -1 && (f.message = o[f.keyword]);
    });
  }
  _replaceWithCustomErrors(a, s, i) {
    i.forEach((o) => {
      const r = s.find(
        (t) => t.keyword === o.keyword && this._getId(t) === a
      );
      r && (r.message = o.message);
    });
  }
  _removeIgnoreErrors(a) {
    const s = this.state._ignoreErrorIds;
    return !s || s.length === 0 ? a : a.filter((o) => s.indexOf(this._getId(o)) === -1);
  }
  _getId(a) {
    return a.params && a.params.missingProperty ? `${a.instancePath ? a.instancePath : ""}/${a.params.missingProperty}` : `${a.instancePath}`;
  }
}
const at = { class: "v__formly" }, nt = { name: "v-formly-v3" }, ot = /* @__PURE__ */ j({
  ...nt,
  props: {
    modelValue: null,
    layout: { default: "horizontal" },
    button: null,
    meta: null
  },
  emits: ["update:modelValue", "form-reset", "form-submit"],
  setup(n, { expose: a, emit: s }) {
    const i = n;
    if (!i.meta || typeof i.meta.properties > "u")
      throw new Error("Invalid Schema");
    let o = { type: G.Object }, r = M(!1);
    const t = new et();
    je("state", t);
    const { slotsName: l } = me(i.meta), { appContext: f } = V(), g = ee(f);
    p();
    const v = b(() => {
      const O = Object.assign({}, t.ui);
      return i.layout === "vertical" ? null : { span: O.spanControl, offset: O.spanLabel };
    });
    le(
      () => i.modelValue,
      (O, y) => {
        JSON.stringify(O) !== JSON.stringify(y) && d(O);
      },
      {
        deep: !1
      }
    ), le(
      () => t.formData,
      (O, y) => {
        s("update:modelValue", O);
      },
      {
        deep: !0
      }
    );
    function p() {
      t.layout = be(i, "layout"), o = Object.assign({}, o, i.meta), t.meta = o, t.formData = Object.assign({}, i.modelValue), u(t.formData, i.meta.properties), t.context = new Qe(), t.validate = new tt(f, t);
    }
    function u(O, y) {
      Object.keys(y).forEach((w) => {
        const I = y[w];
        if (I.type !== "null")
          switch (I.type) {
            case G.Object:
              O[w] = O[w] || {}, u(O[w], I.properties);
              break;
            case G.Array:
              O[w] = O[w] || [];
              break;
            case G.Boolean:
              break;
            default:
              O[w] = O[w] || void 0;
              break;
          }
      });
    }
    function c(O) {
      return t.context.getContext(O);
    }
    async function h() {
      return await t.validate.runValidateForm();
    }
    function d(O) {
      const y = t.context.getContext("/");
      y && (y.value = O, s("update:modelValue", t.formData));
    }
    function _() {
      s("form-reset", ie(t.formData)), d({});
    }
    async function R() {
      r.value = !0;
      const O = await h();
      r.value = !1, s("form-submit", {
        valid: O,
        data: O ? ie(t.formData) : void 0
      });
    }
    return de(() => {
      g.all.clear();
    }), a({
      getContext: c,
      validate: h,
      reset: d,
      clearForm: _,
      submitForm: R
    }), (O, y) => {
      const w = k("a-button"), I = k("a-space"), K = k("a-form-item"), te = k("a-form");
      return x(), A("div", at, [
        E(te, {
          class: ne(["v", {
            v__inline: n.layout === "inline",
            v__horizontal: n.layout === "horizontal"
          }]),
          layout: n.layout
        }, {
          default: m(() => [
            E(fe, {
              id: "/",
              meta: e(o)
            }, P({ _: 2 }, [
              J(e(l), (oe) => ({
                name: oe,
                fn: m((se) => [
                  C(O.$slots, oe, Y(Q({ ...se })))
                ])
              }))
            ]), 1032, ["meta"]),
            n.button === "default" ? (x(), $(K, {
              key: 0,
              wrapperCol: e(v),
              class: "v__default-submit-button"
            }, {
              default: m(() => [
                E(I, null, {
                  default: m(() => [
                    E(w, {
                      type: "danger",
                      onClick: _
                    }, {
                      default: m(() => [
                        W(" \u91CD\u7F6E ")
                      ]),
                      _: 1
                    }),
                    E(w, {
                      type: "primary",
                      onClick: R,
                      loading: e(r)
                    }, {
                      default: m(() => [
                        W(" \u63D0\u4EA4 ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["wrapperCol"])) : n.button === "custom" ? C(O.$slots, "button", {
              key: 1,
              loading: e(r),
              clearForm: _,
              submitForm: R
            }) : (x(), A(Z, { key: 2 }, [], 64))
          ]),
          _: 3
        }, 8, ["layout", "class"])
      ]);
    };
  }
}), st = { class: "v__label-text" }, lt = {
  key: 0,
  class: "v__optional"
}, it = ["innerHTML"], rt = {
  key: 0,
  class: "ant-form-item-explain-error"
}, ut = { name: "v-wrapper" }, U = /* @__PURE__ */ j({
  ...ut,
  props: {
    id: null,
    show: { type: Boolean },
    meta: null
  },
  setup(n) {
    const a = n, { globalProperties: s } = ve(), i = S("state"), o = i.context.getContext(a.id), r = b(() => Object.assign({}, i.ui, a.meta.ui)), t = b(() => Object.assign({}, i.ui, a.meta.ui).optionalHelp), l = b(() => i.layout.value === "vertical" || i.layout.value === "inline" ? void 0 : { span: r.value.spanLabel }), f = b(() => i.layout.value === "vertical" || i.layout.value === "inline" ? void 0 : { span: r.value.spanControl, offset: r.value.offsetControl || 0 }), g = b({
      get() {
        return o.error.value;
      },
      set(c) {
        o.error.value = c;
      }
    }), { appContext: v } = V(), p = ee(v);
    p.on(`${ae}-${i._formId}`, u), de(() => {
      p.off(`${ae}-${i._formId}`, u);
    });
    function u(c) {
      c.id === a.id && (g.value = c.error ? c.error.message : void 0);
    }
    return (c, h) => {
      const d = k("a-tooltip"), _ = k("a-form-item");
      return x(), $(_, {
        labelCol: e(l),
        wrapperCol: e(f),
        required: e(r).showRequired,
        class: ne({ "ant-form-item-has-error": e(g) })
      }, P({
        label: m(() => [
          q("span", st, z(n.meta.title), 1),
          e(r).optional || e(t) ? (x(), A("span", lt, [
            W(z(e(r).optional) + " ", 1),
            e(t) ? (x(), $(d, {
              key: 0,
              title: e(t).text,
              placement: e(t).placement,
              trigger: e(t).trigger,
              overlayStyle: e(t).overlayStyle,
              mouseEnterDelay: e(t).mouseEnterDelay,
              mouseLeaveDelay: e(t).mouseLeaveDelay,
              overlayClassName: e(t).overlayClassName
            }, {
              default: m(() => [
                e(t).icon ? (x(), $(ce(e(s).$antIcons[e(t).icon]), { key: 0 })) : L("", !0)
              ]),
              _: 1
            }, 8, ["title", "placement", "trigger", "overlayStyle", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName"])) : L("", !0)
          ])) : L("", !0)
        ]),
        default: m(() => [
          C(c.$slots, "default"),
          e(g) ? (x(), A("div", rt, z(e(g)), 1)) : L("", !0)
        ]),
        _: 2
      }, [
        n.meta.description ? {
          name: "extra",
          fn: m(() => [
            q("div", {
              innerHTML: n.meta.description
            }, null, 8, it)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["labelCol", "wrapperCol", "required", "class"]);
    };
  }
});
class X {
  constructor(a, s, i, o) {
    N(this, "id");
    N(this, "state");
    N(this, "meta", M({}));
    N(this, "type");
    N(this, "ui", M({}));
    N(this, "error", M(void 0));
    N(this, "_value", M());
    N(this, "_initMetaValue");
    N(this, "appContext");
    if (this.constructor == X)
      throw new Error("Abstract classes can't be instantiated.");
    this.id = i, this.state = s, this.meta.value = o, this.type = o.ui && o.ui.component || o.type, this.ui.value = Object.assign({}, s.ui, o.ui), this.appContext = a, this.error.value = void 0, s.context.addContext(i, this), this._value.value = void 0, this._initMetaValue = this.getInitMetaValue();
  }
  get value() {
    return this._value.value;
  }
  set value(a) {
    if (this._value.value === a)
      return;
    this.setValue(a), ee(this.appContext).emit(`${Ce}-${this.state._formId}`, {
      id: this.id,
      value: this._value.value
    }), this.state.updateObjProp(this.state.formData, this.id, this._value.value), this.state.validate.runValidationFormItem(this);
  }
  getInitMetaValue() {
    const a = this.id.split("/").filter((i) => i);
    let s = "";
    return a.reduce((i, o, r) => (r === a.length - 1 && (s = i[o]), i[o] || {}), this.state.formData), s;
  }
}
class ct extends X {
  constructor(s, i, o, r) {
    super(s, i, o, r);
    N(this, "childMetaPairs");
    this.childMetaPairs = this.buildChildMetaPairs(o, r), i.context.addContext(o, this);
  }
  initValue() {
  }
  setValue() {
  }
  set value(s) {
    this.childMetaPairs.forEach(({ key: i, propertyName: o }) => {
      const r = this.state.context.getContext(i);
      r && (r.value = (s || {})[o]);
    });
  }
  buildChildMetaPairs(s, i) {
    const o = [];
    for (const r of Object.keys(i.properties || {})) {
      const t = s === "/" ? `/${r}` : `${s}/${r}`;
      o.push({
        key: t,
        propertyName: r,
        meta: i.properties[r]
      });
    }
    return o;
  }
}
const dt = /* @__PURE__ */ j({
  __name: "Object",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const a = n, { slotsName: s } = me(a.meta), i = S("state"), { appContext: o } = V(), r = new ct(o, i, a.id, a.meta), t = b(() => r.ui.value || {}), l = b(() => Object.assign({}, i.ui.grid, t.value.grid).gutter), f = b(() => i.layout.value);
    function g(u) {
      return u.ui && u.ui.show;
    }
    function v(u) {
      if (f.value === "inline")
        return {};
      const c = u.meta.ui && u.meta.ui.grid || {};
      return Object.assign({}, i.ui.grid, t.value.grid, c);
    }
    const p = r.childMetaPairs;
    return (u, c) => {
      const h = k("a-col"), d = k("a-row");
      return x(), $(d, { gutter: e(l) }, {
        default: m(() => [
          (x(!0), A(Z, null, J(e(p), (_, R) => (x(), $(h, {
            key: R,
            span: v(_).span,
            offset: v(_).offset,
            xs: v(_).xs,
            sm: v(_).sm,
            md: v(_).md,
            lg: v(_).lg,
            xl: v(_).xl,
            xxl: v(_).xxl,
            style: _e({ display: e(f) === "inline" ? "inline-block" : "block" })
          }, {
            default: m(() => [
              E(fe, {
                id: _.key,
                meta: _.meta,
                show: g(_.meta)
              }, P({ _: 2 }, [
                J(e(s), (O) => ({
                  name: O,
                  fn: m((y) => [
                    C(u.$slots, O, Y(Q({ ...y })))
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
class H extends X {
  constructor(s, i, o, r) {
    var t;
    super(s, i, o, r);
    N(this, "open");
    this.initValue(), this.meta.value && (this.open = ((t = this.meta.value.ui) == null ? void 0 : t.open) || !1);
  }
  initValue() {
    this._initMetaValue ? this.value = this._initMetaValue : this.meta.value.default && (this.value = this.meta.value.default);
  }
  setValue(s) {
    this._value.value = s || void 0;
  }
}
function B(n, a) {
  const s = M({});
  return Object.keys(a.value).forEach((o) => {
    n.indexOf(o) > -1 && (s.value[o] = be(a.value, o));
  }), { bindings: s };
}
const mt = /* @__PURE__ */ j({
  __name: "String",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const a = n, s = S("state"), { appContext: i } = V(), o = new H(i, s, a.id, a.meta), { bindings: r } = B(Object.keys(De.props), o.ui), t = b(() => o.ui.value || {}), l = b({
      get() {
        return o.value;
      },
      set(g) {
        o.value = g;
      }
    });
    function f() {
      t.value.change && t.value.change(e(l));
    }
    return (g, v) => {
      const p = k("a-input");
      return x(), $(U, {
        id: n.id,
        meta: n.meta
      }, {
        default: m(() => [
          E(p, T(e(r), {
            defaultValue: n.meta.defaultValue,
            disabled: n.meta.readOnly,
            maxLength: n.meta.maxLength,
            value: e(l),
            "onUpdate:value": v[0] || (v[0] = (u) => F(l) ? l.value = u : null),
            onChange: f
          }), P({ _: 2 }, [
            e(t).slotNameOfPrefix ? {
              name: "prefix",
              fn: m(() => [
                C(g.$slots, e(t).slotNameOfPrefix)
              ]),
              key: "0"
            } : void 0,
            e(t).slotNameOfSuffix ? {
              name: "suffix",
              fn: m(() => [
                C(g.$slots, e(t).slotNameOfSuffix)
              ]),
              key: "1"
            } : void 0,
            e(t).slotNameOfAddonBefore ? {
              name: "addonBefore",
              fn: m(() => [
                C(g.$slots, e(t).slotNameOfAddonBefore)
              ]),
              key: "2"
            } : void 0,
            e(t).slotNameOfAddonAfter ? {
              name: "addonAfter",
              fn: m(() => [
                C(g.$slots, e(t).slotNameOfAddonAfter)
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
class ft extends X {
  constructor(a, s, i, o) {
    super(a, s, i, o), this.initValue();
  }
  initValue() {
    typeof this._initMetaValue < "u" ? this.value = this._initMetaValue : typeof this.meta.value.default == "boolean" && (this.value = this.meta.value.default);
  }
  setValue(a) {
    this._value.value = a || !1;
  }
}
const vt = /* @__PURE__ */ j({
  __name: "Boolean",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const a = n, s = S("state"), { appContext: i } = V(), o = new ft(i, s, a.id, a.meta), { bindings: r } = B(Object.keys(Pe.props), o.ui), t = b(() => o.ui.value || {}), l = b({
      get() {
        return o.value;
      },
      set(g) {
        o.value = g || !1;
      }
    });
    function f() {
      t.value.change && t.value.change(e(l));
    }
    return (g, v) => {
      const p = k("a-switch");
      return x(), $(U, {
        id: n.id,
        meta: n.meta
      }, {
        default: m(() => [
          E(p, T({
            class: "v__boolean",
            checked: e(l),
            "onUpdate:checked": v[0] || (v[0] = (u) => F(l) ? l.value = u : null)
          }, e(r), {
            disabled: n.meta.readOnly,
            onChange: f
          }), P({ _: 2 }, [
            e(t).slotNameOfCheckedChildren ? {
              name: "checkedChildren",
              fn: m(() => [
                C(g.$slots, e(t).slotNameOfCheckedChildren)
              ]),
              key: "0"
            } : void 0,
            e(t).slotNameOfUnCheckedChildren ? {
              name: "unCheckedChildren",
              fn: m(() => [
                C(g.$slots, e(t).slotNameOfUnCheckedChildren)
              ]),
              key: "1"
            } : void 0
          ]), 1040, ["checked", "disabled"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), pt = /* @__PURE__ */ j({
  __name: "AutoComplete",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const a = n, s = S("state"), { appContext: i } = V(), o = new H(i, s, a.id, a.meta), { bindings: r } = B(Object.keys(Ae.props), o.ui), t = b(() => o.ui.value || {}), l = b({
      get() {
        return o.value;
      },
      set(p) {
        o.value = p || void 0;
      }
    });
    function f(p) {
      t.value.change && t.value.change(e(p));
    }
    function g(p) {
      t.value.search && t.value.search(p, e(l));
    }
    function v(p, u) {
      t.value.select && t.value.select(e(p), u);
    }
    return (p, u) => {
      const c = k("a-auto-complete");
      return x(), $(U, {
        id: n.id,
        meta: n.meta
      }, {
        default: m(() => [
          E(c, T(e(r), {
            disabled: n.meta.readOnly,
            value: e(l),
            "onUpdate:value": u[0] || (u[0] = (h) => F(l) ? l.value = h : null),
            onChange: f,
            onSearch: g,
            onSelect: v
          }), P({ _: 2 }, [
            e(t).slotNameOfOption ? {
              name: "option",
              fn: m((h) => [
                C(p.$slots, e(t).slotNameOfOption, Y(Q(h)))
              ]),
              key: "0"
            } : void 0,
            e(t).slotNameOfDefault ? {
              name: "default",
              fn: m(() => [
                C(p.$slots, e(t).slotNameOfDefault)
              ]),
              key: "1"
            } : void 0
          ]), 1040, ["disabled", "value"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), ht = /* @__PURE__ */ j({
  __name: "Checkbox",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const a = n, s = S("state"), { appContext: i } = V(), o = new H(i, s, a.id, a.meta), { bindings: r } = B(Object.keys(Fe.props), o.ui), t = b(() => o.ui.value || {}), l = b({
      get() {
        return o.value;
      },
      set(g) {
        o.value = g;
      }
    });
    function f() {
      t.value.change && t.value.change(e(l));
    }
    return (g, v) => {
      const p = k("a-checkbox-group"), u = k("a-checkbox"), c = k("a-col"), h = k("a-row");
      return x(), $(U, {
        id: n.id,
        meta: n.meta
      }, {
        default: m(() => [
          e(t).span ? (x(), $(p, {
            key: 1,
            value: e(l),
            "onUpdate:value": v[1] || (v[1] = (d) => F(l) ? l.value = d : null),
            disabled: n.meta.readOnly,
            onChange: f,
            class: "v__checkbox"
          }, {
            default: m(() => [
              E(h, null, {
                default: m(() => [
                  (x(!0), A(Z, null, J(n.meta.enum, (d, _) => (x(), $(c, {
                    class: "v__text-left",
                    span: e(t).span,
                    key: _
                  }, {
                    default: m(() => [
                      E(u, {
                        value: d.value || d,
                        disabled: d.disabled || !1
                      }, {
                        default: m(() => [
                          W(z(d.label || d), 1)
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
          }, 8, ["value", "disabled"])) : (x(), $(p, T({
            key: 0,
            class: "v__checkbox",
            value: e(l),
            "onUpdate:value": v[0] || (v[0] = (d) => F(l) ? l.value = d : null)
          }, e(r), {
            disabled: n.meta.readOnly,
            options: n.meta.enum,
            onChange: f
          }), null, 16, ["value", "disabled", "options"]))
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
}), gt = /* @__PURE__ */ j({
  __name: "Date",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const a = n, s = S("state"), { appContext: i } = V(), o = new H(i, s, a.id, a.meta);
    let r = {}, t = {};
    if (o.ui.value.type === "range") {
      const { bindings: u } = B(Object.keys(Re.props), o.ui);
      r = u;
    } else {
      const { bindings: u } = B(Object.keys(Te.props), o.ui);
      t = u;
    }
    const l = b(() => o.ui.value || {}), f = b({
      get() {
        return o.value;
      },
      set(u) {
        o.value = u;
      }
    });
    function g() {
      l.value.change && l.value.change(e(f));
    }
    function v(u) {
      l.value.ok && l.value.ok(u);
    }
    function p(u, c, h) {
      l.value.calendarChange && l.value.calendarChange(u, c, h);
    }
    return (u, c) => {
      const h = k("a-range-picker"), d = k("a-date-picker");
      return x(), $(U, {
        id: n.id,
        meta: n.meta
      }, {
        default: m(() => [
          e(l).type === "range" ? (x(), $(h, T({
            key: 0,
            class: "v__date",
            value: e(f),
            "onUpdate:value": c[0] || (c[0] = (_) => F(f) ? f.value = _ : null)
          }, e(r), {
            disabled: n.meta.readOnly,
            onCalendarChange: p,
            onOk: v,
            onChange: g
          }), P({ _: 2 }, [
            e(l).slotNameOfSuffixIcon ? {
              name: "suffixIcon",
              fn: m(() => [
                C(u.$slots, e(l).slotNameOfSuffixIcon)
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["value", "disabled"])) : L("", !0),
          e(l).type !== "range" ? (x(), $(d, T({
            key: 1,
            class: "v__date",
            value: e(f),
            "onUpdate:value": c[1] || (c[1] = (_) => F(f) ? f.value = _ : null)
          }, e(t), {
            disabled: n.meta.readOnly,
            onOk: v,
            onChange: g
          }), P({ _: 2 }, [
            e(l).slotNameOfSuffixIcon ? {
              name: "suffixIcon",
              fn: m(() => [
                C(u.$slots, e(l).slotNameOfSuffixIcon)
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["value", "disabled"])) : L("", !0)
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), yt = /* @__PURE__ */ j({
  __name: "Time",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const a = n, s = S("state"), { appContext: i } = V(), o = new H(i, s, a.id, a.meta);
    let r = {}, t = {};
    if (o.ui.value.type === "range") {
      const { bindings: u } = B(
        Object.keys(Be.props),
        o.ui
      );
      r = u;
    } else {
      const { bindings: u } = B(Object.keys(Ue.props), o.ui);
      t = u;
    }
    const l = b(() => o.ui.value || {}), f = b({
      get() {
        return o.value;
      },
      set(u) {
        o.value = u;
      }
    });
    function g(u, c) {
      l.value.change && l.value.change(u, c);
    }
    function v(u) {
      l.value.ok && l.value.ok(u);
    }
    function p(u, c, h) {
      l.value.calendarChange && l.value.calendarChange(u, c, h);
    }
    return (u, c) => {
      const h = k("a-time-range-picker"), d = k("a-time-picker");
      return x(), $(U, {
        id: n.id,
        meta: n.meta
      }, {
        default: m(() => [
          e(l).type === "range" ? (x(), $(h, T({
            key: 0,
            class: "v__time",
            value: e(f),
            "onUpdate:value": c[0] || (c[0] = (_) => F(f) ? f.value = _ : null),
            open: e(l).open,
            "onUpdate:open": c[1] || (c[1] = (_) => e(l).open = _)
          }, e(r), {
            disabled: n.meta.readOnly,
            onCalendarChange: p,
            onOk: v,
            onChange: g
          }), P({ _: 2 }, [
            e(l).slotNameOfRenderExtraFooter ? {
              name: "renderExtraFooter",
              fn: m(() => [
                C(u.$slots, e(l).slotNameOfRenderExtraFooter)
              ]),
              key: "0"
            } : void 0,
            e(l).slotNameOfSuffixIcon ? {
              name: "suffixIcon",
              fn: m(() => [
                C(u.$slots, e(l).slotNameOfSuffixIcon)
              ]),
              key: "1"
            } : void 0,
            e(l).slotNameOfClearIcon ? {
              name: "clearIcon",
              fn: m(() => [
                C(u.$slots, e(l).slotNameOfClearIcon)
              ]),
              key: "2"
            } : void 0
          ]), 1040, ["value", "open", "disabled"])) : (x(), $(d, T({
            key: 1,
            class: "v__time",
            value: e(f),
            "onUpdate:value": c[2] || (c[2] = (_) => F(f) ? f.value = _ : null),
            open: e(l).open,
            "onUpdate:open": c[3] || (c[3] = (_) => e(l).open = _)
          }, e(t), {
            disabled: n.meta.readOnly,
            onOk: v,
            onChange: g
          }), P({ _: 2 }, [
            e(l).slotNameOfRenderExtraFooter ? {
              name: "renderExtraFooter",
              fn: m(() => [
                C(u.$slots, e(l).slotNameOfRenderExtraFooter)
              ]),
              key: "0"
            } : void 0,
            e(l).slotNameOfSuffixIcon ? {
              name: "suffixIcon",
              fn: m(() => [
                C(u.$slots, e(l).slotNameOfSuffixIcon)
              ]),
              key: "1"
            } : void 0,
            e(l).slotNameOfClearIcon ? {
              name: "clearIcon",
              fn: m(() => [
                C(u.$slots, e(l).slotNameOfClearIcon)
              ]),
              key: "2"
            } : void 0
          ]), 1040, ["value", "open", "disabled"]))
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), ye = /* @__PURE__ */ j({
  __name: "Number",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const a = n, s = S("state"), { appContext: i } = V(), o = new H(i, s, a.id, a.meta), { bindings: r } = B(Object.keys(Le.props), o.ui), t = b(() => o.ui.value || {}), l = b({
      get() {
        return o.value;
      },
      set(d) {
        o.value = d;
      }
    });
    let f = M(-1 / 0), g = M(1 / 0), v = M(1), p = M((d) => d), u = M((d) => d);
    c();
    function c() {
      const {
        minimum: d,
        exclusiveMinimum: _,
        maximum: R,
        exclusiveMaximum: O,
        multipleOf: y,
        type: w
      } = o.meta.value;
      v.value = y || 1, typeof d < "u" && (f.value = _ ? d + v.value : d), typeof R < "u" && (g.value = O ? R - v.value : R), w === "integer" && (f.value = Math.trunc(f.value), g.value = Math.trunc(g.value), v.value = Math.trunc(v.value)), t.value.prefix != null && (t.value.formatter = (I) => I == null ? "" : `${t.value.prefix} ${I}`, t.value.parser = (I) => I.replace(`${t.value.prefix} `, "")), t.value.unit != null && (t.value.formatter = (I) => I == null ? "" : `${I} ${t.value.unit}`, t.value.parser = (I) => I.replace(` ${t.value.unit}`, "")), t.value.formatter && (p.value = t.value.formatter), t.value.parser && (u.value = t.value.parser);
    }
    function h(d) {
      l.value = o.meta.value.type === G.Integer ? Math.floor(d) : d, t.value.change && t.value.change(e(l));
    }
    return (d, _) => {
      const R = k("a-input-number");
      return x(), $(U, {
        id: n.id,
        meta: n.meta
      }, {
        default: m(() => [
          E(R, T({
            class: "v__number",
            id: n.id,
            value: e(l),
            "onUpdate:value": _[0] || (_[0] = (O) => F(l) ? l.value = O : null)
          }, e(r), {
            disabled: n.meta.readOnly,
            min: e(f),
            max: e(g),
            step: e(v),
            formatter: e(p),
            parser: e(u),
            class: { "v__input-number-hidden-step": e(t).hideStep },
            onChange: _[1] || (_[1] = (O) => h(O))
          }), P({ _: 2 }, [
            e(t).slotNameOfAddonAfter ? {
              name: "addonAfter",
              fn: m(() => [
                C(d.$slots, e(t).slotNameOfAddonAfter)
              ]),
              key: "0"
            } : void 0,
            e(t).slotNameOfAddonBefore ? {
              name: "addonBefore",
              fn: m(() => [
                C(d.$slots, e(t).slotNameOfAddonBefore)
              ]),
              key: "1"
            } : void 0,
            e(t).slotNameOfPrefix ? {
              name: "prefix",
              fn: m(() => [
                C(d.$slots, e(t).slotNameOfPrefix)
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
class _t extends X {
  constructor(s, i, o, r) {
    super(s, i, o, r);
    N(this, "ids", M([]));
    this.initValue();
  }
  setValue() {
  }
  initValue() {
    var s, i;
    if (((s = this._initMetaValue) == null ? void 0 : s.length) > 0)
      this.value = this._initMetaValue;
    else if (((i = e(this.meta).default) == null ? void 0 : i.length) > 0) {
      const o = e(this.meta).default;
      o.forEach(() => this.add(!1)), setTimeout(() => {
        o.forEach((r, t) => {
          const l = this.state.context.getContext(
            `${this.id}/${t}`
          );
          l.value = r;
        });
      }), this.validate();
    }
  }
  get value() {
    return this.getPathValue(this.state.formData, this.id) || [];
  }
  set value(s) {
    if (this.value.length === 0 && (s == null ? void 0 : s.length) === 0 || !Array.isArray(s) && s != null)
      return;
    const i = ue(s), o = e(this.ids).length;
    for (let r = 0; r < o; r++)
      this.remove(o - r - 1, !1);
    i && i.length && (i.forEach(() => this.add(!1)), Me(() => {
      i.forEach((r, t) => {
        const l = this.state.context.getContext(
          `${this.id}/${t}`
        );
        l.value = r;
      });
    })), this.validate();
  }
  validate() {
    return this.state.validate.runValidationFormItem(this);
  }
  getPathValue(s, i) {
    const o = i.split("/").filter((t) => t);
    let r = ue(s);
    for (let t = 0; t < o.length; t++) {
      const l = o[t];
      r = r[l];
    }
    return r;
  }
  getEmptyData() {
    const s = {}, i = e(this.meta).items.properties;
    return Object.keys(i).forEach((o) => {
      switch (i[o].type) {
        case "object":
          s[o] = {};
          break;
        case "array":
          s[o] = [];
          break;
        default:
          s[o] = void 0;
          break;
      }
    }), s;
  }
  add(s = !0) {
    const i = `${this.id}/${e(this.ids).length}`, o = this.getEmptyData();
    return this.state.updateObjProp(this.state.formData, i, o), this.ids.value.push({ key: Oe() }), s && this.validate(), i;
  }
  remove(s, i = !0) {
    this.ids.value.splice(s, 1);
    const o = this.id.split("/").filter((l) => !!l);
    o.reduce((l, f, g) => (g === o.length - 1 && l[f].splice(s, 1), l[f]), this.state.formData);
    const r = [];
    for (const l of this.state.context.getMap().keys())
      new RegExp(`^/?${this.id}/`).test(l) && r.push(l);
    for (let l = s + 1; l < e(this.ids).length + 1; l++) {
      const f = new RegExp(`^(/?${this.id}/)${l}`);
      r.filter((g) => f.test(g)).forEach((g) => {
        const v = this.state.context.getContext(g), p = g.replace(f, (u, c) => `${c}${l - 1}`);
        if (v.id = p, v.childMetaPairs) {
          const u = v.buildChildMetaPairs(
            p,
            e(v.meta)
          );
          v.childMetaPairs.forEach((c, h) => {
            c.key = u[h].key;
          });
        }
        this.state.context.addContext(p, v);
      });
    }
    const t = new RegExp(`^/?${this.id}/${e(this.ids).length}`);
    r.filter((l) => t.test(l)).forEach((l) => {
      this.state.context.removeContext(l);
    }), i && this.validate();
  }
}
const bt = { class: "v__optional" }, xt = { class: "v__array-add" }, Ct = { class: "ant-form-item-control" }, Ot = ["onClick"], kt = {
  key: 0,
  class: "ant-form-item-extra"
}, $t = {
  key: 1,
  class: "ant-form-item-explain-error"
}, wt = /* @__PURE__ */ j({
  __name: "Array",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const a = n, s = S("state"), { globalProperties: i } = ve(), { appContext: o } = V(), r = new _t(o, s, a.id, a.meta), t = ee(o), l = b(() => e(r.ui) || {}), f = b(() => Object.assign({}, s.ui, a.meta.ui).optionalHelp);
    b({
      get() {
        return r.value;
      },
      set(y) {
        r.value = y || [];
      }
    });
    const g = b({
      get() {
        return e(r.error);
      },
      set(y) {
        r.error.value = y;
      }
    }), v = b(() => a.meta.readOnly), p = b(() => e(v) || a.meta.maxItems != null && e(r.ids).length >= a.meta.maxItems), u = b(() => {
      const y = a.meta.minItems;
      return !(e(v) || y != null && e(r.ids).length <= y);
    }), c = M(8), h = M("");
    xe(() => {
      var K;
      t.on(`${ae}-${s._formId}`, d);
      const { grid: y, removable: w, removeTitle: I } = e(l);
      c.value = (K = y == null ? void 0 : y.arraySpan) != null ? K : 8, h.value = w === !1 ? null : I;
    }), de(() => {
      t.off(`${ae}-${s._formId}`, d);
    });
    function d(y) {
      y.id === a.id && (g.value = y.error ? y.error.message : void 0);
    }
    function _(y) {
      return `${a.id}/${y}`;
    }
    function R() {
      var w, I;
      const y = r.add();
      (I = (w = e(l)).add) == null || I.call(w, y);
    }
    function O(y) {
      var w, I;
      r.remove(y), (I = (w = e(l)).remove) == null || I.call(w, y);
    }
    return (y, w) => {
      const I = k("a-tooltip"), K = k("a-button"), te = k("a-col"), oe = k("delete-outlined"), se = k("a-card"), he = k("a-row"), we = k("a-form-item");
      return x(), $(we, null, {
        default: m(() => [
          E(he, null, {
            default: m(() => [
              n.meta.title ? (x(), $(te, {
                key: 0,
                class: "ant-form-item-label",
                span: e(l).spanLabel
              }, {
                default: m(() => [
                  q("label", {
                    class: ne({ "ant-form-item-required": e(l).showRequired })
                  }, [
                    W(z(n.meta.title) + " ", 1),
                    q("span", bt, [
                      W(z(e(l).optional) + " ", 1),
                      e(f) ? (x(), $(I, {
                        key: 0,
                        title: e(f).text,
                        placement: e(f).placement,
                        trigger: e(f).trigger,
                        overlayStyle: e(f).overlayStyle,
                        overlayClassName: e(f).overlayClassName,
                        mouseEnterDelay: e(f).mouseEnterDelay,
                        mouseLeaveDelay: e(f).mouseLeaveDelay
                      }, {
                        default: m(() => [
                          e(f).icon ? (x(), $(ce(e(i).$antIcons[e(f).icon]), { key: 0 })) : L("", !0)
                        ]),
                        _: 1
                      }, 8, ["title", "placement", "trigger", "overlayStyle", "overlayClassName", "mouseEnterDelay", "mouseLeaveDelay"])) : L("", !0)
                    ])
                  ], 2),
                  q("div", xt, [
                    E(K, {
                      type: e(l).addType || "dashed",
                      disabled: e(p),
                      onClick: R
                    }, {
                      default: m(() => [
                        W(z(e(l).addTitle || "\u6DFB\u52A0"), 1)
                      ]),
                      _: 1
                    }, 8, ["type", "disabled"])
                  ])
                ]),
                _: 1
              }, 8, ["span"])) : L("", !0),
              E(te, {
                class: "ant-form-item-control-wrapper",
                span: e(l).spanControl,
                offset: e(l).offsetControl
              }, {
                default: m(() => [
                  q("div", Ct, [
                    E(he, { class: "v__array-container" }, {
                      default: m(() => [
                        (x(!0), A(Z, null, J(e(r).ids.value, (Ie, ge) => (x(), $(te, {
                          key: Ie.key,
                          span: c.value,
                          class: "v__array-item"
                        }, {
                          default: m(() => [
                            E(se, null, {
                              default: m(() => [
                                E(fe, {
                                  id: _(ge),
                                  meta: n.meta.items
                                }, null, 8, ["id", "meta"]),
                                e(u) ? (x(), A("span", {
                                  key: 0,
                                  class: "v__array-remove",
                                  onClick: (qt) => O(ge)
                                }, [
                                  E(oe)
                                ], 8, Ot)) : L("", !0)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["span"]))), 128))
                      ]),
                      _: 1
                    }),
                    n.meta.description ? (x(), A("div", kt, z(n.meta.description), 1)) : L("", !0),
                    e(g) ? (x(), A("div", $t, z(e(g)), 1)) : L("", !0)
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
}), It = { class: "v__label-text" }, Nt = ["innerHTML"], Et = ["textContent"], Vt = ["innerHTML"], jt = /* @__PURE__ */ j({
  __name: "Text",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const a = n, s = S("state"), { appContext: i } = V(), o = new H(i, s, a.id, a.meta), r = b(() => o.ui.value || {}), t = b(() => s.layout.value === "vertical" || s.layout.value === "inline" ? void 0 : { span: r.value.spanLabel }), l = b(() => s.layout.value === "vertical" || s.layout.value === "inline" ? void 0 : { span: r.value.spanControl, offset: r.value.offsetControl || 0 }), f = b(
      () => Ze(e(r).text) ? e(r).text() : e(r).text
    );
    return (g, v) => {
      const p = k("a-form-item");
      return x(), A("div", null, [
        E(p, {
          labelCol: e(t),
          wrapperCol: e(l),
          class: ne({ "no-label": !n.meta.title })
        }, P({
          default: m(() => [
            e(r).slotNameOfDefault ? C(g.$slots, e(r).slotNameOfDefault, { key: 0 }, void 0, !0) : (x(), A(Z, { key: 1 }, [
              e(r).html ? (x(), A("span", {
                key: 0,
                innerHTML: e(r).html,
                class: "v__content-text"
              }, null, 8, Nt)) : (x(), A("span", {
                key: 1,
                textContent: z(e(f)),
                class: "v__content-text"
              }, null, 8, Et))
            ], 64))
          ]),
          _: 2
        }, [
          n.meta.title ? {
            name: "label",
            fn: m(() => [
              q("span", It, z(n.meta.title), 1)
            ]),
            key: "0"
          } : void 0,
          n.meta.description ? {
            name: "extra",
            fn: m(() => [
              q("div", {
                innerHTML: n.meta.description
              }, null, 8, Vt)
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["labelCol", "wrapperCol", "class"])
      ]);
    };
  }
});
const $e = (n, a) => {
  const s = n.__vccOpts || n;
  for (const [i, o] of a)
    s[i] = o;
  return s;
}, Mt = /* @__PURE__ */ $e(jt, [["__scopeId", "data-v-c98847ae"]]), St = /* @__PURE__ */ j({
  __name: "Textarea",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const a = n, s = S("state"), { appContext: i } = V(), o = new H(i, s, a.id, a.meta), { bindings: r } = B(Object.keys(ze.props), o.ui), t = b(() => o.ui.value || {}), l = b({
      get() {
        return o.value;
      },
      set(c) {
        o.value = c;
      }
    }), f = M(!0);
    xe(() => {
      e(t).autoSize != null && (f.value = e(t).autoSize);
    });
    function g() {
      var c, h;
      (h = (c = e(t)).change) == null || h.call(c, e(l));
    }
    function v(c) {
      var h, d;
      (d = (h = e(t)).focus) == null || d.call(h, c);
    }
    function p(c) {
      var h, d;
      (d = (h = e(t)).blur) == null || d.call(h, c);
    }
    function u(c) {
      var h, d;
      (d = (h = e(t)).pressEnter) == null || d.call(h, c);
    }
    return (c, h) => {
      const d = k("a-textarea");
      return x(), $(U, {
        id: n.id,
        meta: n.meta
      }, {
        default: m(() => [
          E(d, T(e(r), {
            autoSize: f.value,
            defaultValue: n.meta.defaultValue,
            disabled: n.meta.readOnly,
            maxlength: n.meta.maxLength,
            value: e(l),
            "onUpdate:value": h[0] || (h[0] = (_) => F(l) ? l.value = _ : null),
            onChange: g,
            onFocus: v,
            onBlur: p,
            onPressEnter: u
          }), null, 16, ["autoSize", "defaultValue", "disabled", "maxlength", "value"])
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
});
class pe extends X {
  constructor(a, s, i, o) {
    super(a, s, i, o), this.initValue();
  }
  initValue() {
    this._initMetaValue ? this.value = this._initMetaValue : e(this.meta).default && (this.value = e(this.meta).default);
  }
  setValue(a) {
    switch (this.type) {
      case "slider":
        this._value.value = Xe(a) || ke(a) ? a : void 0;
        break;
      default:
        this._value.value = a || void 0;
        break;
    }
  }
}
const Dt = /* @__PURE__ */ j({
  __name: "Slider",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const a = n, s = S("state"), { appContext: i } = V(), o = new pe(i, s, a.id, a.meta), { bindings: r } = B(Object.keys(He.props), o.ui), t = b(() => o.ui.value || {}), l = b({
      get() {
        return o.value;
      },
      set(u) {
        t.value.range ? o.value = u || [] : o.value = ke(u) ? u : void 0;
      }
    }), f = b(() => t.value.tipFormatter === null);
    function g(u) {
      const { tipFormatter: c } = t.value;
      return c ? c(u) : `${u}`;
    }
    function v(u) {
      var c, h;
      (h = (c = e(t)).change) == null || h.call(c, u);
    }
    function p(u) {
      var c, h;
      (h = (c = e(t)).afterChange) == null || h.call(c, u);
    }
    return (u, c) => {
      const h = k("a-slider");
      return x(), $(U, {
        id: n.id,
        meta: n.meta
      }, {
        default: m(() => [
          E(h, T(e(r), {
            disabled: n.meta.readOnly,
            min: n.meta.minimum || 0,
            max: n.meta.maximum || 100,
            step: n.meta.multipleOf || 1,
            tipFormatter: e(f) ? null : g,
            value: e(l),
            "onUpdate:value": c[0] || (c[0] = (d) => F(l) ? l.value = d : null),
            onChange: v,
            onAfterChange: p
          }), P({ _: 2 }, [
            e(t).slotNameOfMark ? {
              name: "mark",
              fn: m((d) => [
                C(u.$slots, e(t).slotNameOfMark, Y(Q(d)))
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["disabled", "min", "max", "step", "tipFormatter", "value"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), Pt = /* @__PURE__ */ j({
  __name: "Rate",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const a = n, s = S("state"), { appContext: i } = V(), o = new pe(i, s, a.id, a.meta), { bindings: r } = B(Object.keys(Ke.props), o.ui), t = b(() => o.ui.value || {}), l = b({
      get() {
        return o.value;
      },
      set(v) {
        o.value = v;
      }
    });
    function f(v) {
      var p, u;
      (u = (p = e(t)).change) == null || u.call(p, v);
    }
    function g(v) {
      var p, u;
      (u = (p = e(t)).hoverChange) == null || u.call(p, v);
    }
    return (v, p) => {
      const u = k("a-rate");
      return x(), $(U, {
        id: n.id,
        meta: n.meta
      }, {
        default: m(() => [
          E(u, T(e(r), {
            disabled: n.meta.readOnly,
            count: n.meta.maximum || 5,
            value: e(l),
            "onUpdate:value": p[0] || (p[0] = (c) => F(l) ? l.value = c : null),
            onChange: f,
            onHoverChange: g
          }), P({ _: 2 }, [
            e(t).slotNameOfCharacter ? {
              name: "character",
              fn: m(() => [
                C(v.$slots, e(t).slotNameOfCharacter)
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["disabled", "count", "value"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), At = /* @__PURE__ */ j({
  __name: "Tag",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const a = n, s = S("state"), { appContext: i } = V(), o = new pe(i, s, a.id, a.meta), r = M([]), t = b(() => o.ui.value || {}), l = b({
      get() {
        return o.value;
      },
      set(p) {
        t.value.range ? o.value = p || [] : o.value = p;
      }
    });
    le(() => e(o.meta).enum, v, { immediate: !0 });
    function f(p, u) {
      var c, h, d, _;
      p.disabled || (p.checked = u, g(), (h = (c = e(t)).checkedChange) == null || h.call(c, u), (_ = (d = e(t)).change) == null || _.call(d, ie(e(l))));
    }
    function g() {
      const p = e(r).filter((u) => u.checked).map((u) => u.value);
      l.value = p.length ? p : void 0;
    }
    function v(p) {
      let u = e(p);
      u == null || !Array.isArray(u) || u.length === 0 || (typeof u[0] != "object" && (u = u.map((c) => ({
        label: c,
        value: c
      }))), u.forEach((c) => {
        c.checked = (l.value || []).indexOf(c.value) > -1;
      }), u.forEach((c) => c.disabled = a.meta.readOnly), r.value = u);
    }
    return (p, u) => {
      const c = k("a-checkable-tag");
      return x(), $(U, {
        id: n.id,
        meta: n.meta
      }, {
        default: m(() => [
          (x(!0), A(Z, null, J(r.value, (h) => (x(), $(c, {
            key: h.value,
            class: ne({ disabled: h.disabled }),
            checked: h.checked,
            onChange: (d) => f(h, d)
          }, {
            default: m(() => [
              q("span", null, z(h.label), 1)
            ]),
            _: 2
          }, 1032, ["class", "checked", "onChange"]))), 128))
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
});
const Ft = /* @__PURE__ */ $e(At, [["__scopeId", "data-v-56211880"]]), Rt = /* @__PURE__ */ j({
  __name: "Cascader",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const a = n, s = S("state"), { appContext: i } = V(), o = new H(i, s, a.id, a.meta), { bindings: r } = B(Object.keys(qe.props), o.ui), t = b(() => o.ui.value || {}), l = b({
      get() {
        return o.value;
      },
      set(c) {
        o.value = c;
      }
    });
    function f(c, h) {
      var d, _;
      (_ = (d = e(t)).change) == null || _.call(d, c, h);
    }
    function g(c) {
      var h, d;
      (d = (h = e(t)).dropdownVisibleChange) == null || d.call(h, c);
    }
    function v(c) {
      var h, d;
      (d = (h = e(t)).search) == null || d.call(h, c);
    }
    function p(c) {
      var h, d;
      (d = (h = e(t)).blur) == null || d.call(h, c);
    }
    function u(c) {
      var h, d;
      (d = (h = e(t)).focus) == null || d.call(h, c);
    }
    return (c, h) => {
      const d = k("a-cascader");
      return x(), $(U, {
        id: n.id,
        meta: n.meta
      }, {
        default: m(() => [
          E(d, T(e(r), {
            disabled: n.meta.readOnly,
            options: n.meta.enum,
            value: e(l),
            "onUpdate:value": h[0] || (h[0] = (_) => F(l) ? l.value = _ : null),
            onChange: f,
            onDropdownVisibleChange: g,
            onSearch: v,
            onBlur: p,
            onFocus: u
          }), P({ _: 2 }, [
            e(t).slotNameOfDefault ? {
              name: "default",
              fn: m(() => [
                q("span", null, [
                  C(c.$slots, e(t).slotNameOfDefault)
                ])
              ]),
              key: "0"
            } : void 0,
            e(t).slotNameOfSuffixIcon ? {
              name: "suffixIcon",
              fn: m(() => [
                C(c.$slots, e(t).slotNameOfSuffixIcon)
              ]),
              key: "1"
            } : void 0,
            e(t).slotNameOfDisplayRender ? {
              name: "displayRender",
              fn: m((_) => [
                C(c.$slots, e(t).slotNameOfDisplayRender, Y(Q(_)))
              ]),
              key: "2"
            } : void 0
          ]), 1040, ["disabled", "options", "value"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), Tt = /* @__PURE__ */ j({
  __name: "Radio",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const a = n, s = S("state"), { appContext: i } = V(), o = new H(i, s, a.id, a.meta), { bindings: r } = B(Object.keys(Ge.props), o.ui), t = b(() => o.ui.value || {}), l = b({
      get() {
        return o.value;
      },
      set(g) {
        o.value = g;
      }
    });
    function f() {
      t.value.change && t.value.change(e(l));
    }
    return (g, v) => {
      const p = k("a-radio-group");
      return x(), $(U, {
        id: n.id,
        meta: n.meta
      }, {
        default: m(() => [
          E(p, T({
            class: { "v__radio-vertical": e(t).direction === "vertical" }
          }, e(r), {
            value: e(l),
            "onUpdate:value": v[0] || (v[0] = (u) => F(l) ? l.value = u : null),
            disabled: n.meta.readOnly,
            onChange: f
          }), null, 16, ["class", "value", "disabled"])
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
}), Bt = /* @__PURE__ */ j({
  __name: "Select",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const a = n, s = S("state"), { appContext: i } = V(), o = new H(i, s, a.id, a.meta), { bindings: r } = B(Object.keys(We.props), o.ui), t = b(() => o.ui.value || {}), l = b({
      get() {
        return o.value;
      },
      set(y) {
        o.value = y;
      }
    });
    function f(y, w) {
      e(t).change && e(t).change(y, w);
    }
    function g() {
      e(t).blur && e(t).blur();
    }
    function v(y, w) {
      e(t).deselect && e(t).deselect(y, w);
    }
    function p(y) {
      e(t).dropdownVisibleChange && e(t).dropdownVisibleChange(y);
    }
    function u() {
      e(t).focus && e(t).focus();
    }
    function c() {
      e(t).inputKeyDown && e(t).inputKeyDown();
    }
    function h() {
      e(t).mouseenter && e(t).mouseenter();
    }
    function d() {
      e(t).mouseleave && e(t).mouseleave();
    }
    function _() {
      e(t).popupScroll && e(t).popupScroll();
    }
    function R(y) {
      e(t).search && e(t).search(y);
    }
    function O(y, w) {
      e(t).select && e(t).select(y, w);
    }
    return (y, w) => {
      const I = k("a-select");
      return x(), $(U, {
        id: n.id,
        meta: n.meta
      }, {
        default: m(() => [
          E(I, T({
            value: e(l),
            "onUpdate:value": w[0] || (w[0] = (K) => F(l) ? l.value = K : null)
          }, e(r), {
            disabled: n.meta.readOnly,
            onBlur: g,
            onDeselect: v,
            onFocus: u,
            onInputKeydown: c,
            onMouseenter: h,
            onMouseleave: d,
            onPopupScroll: _,
            onSearch: R,
            onSelect: O,
            onDropdownVisibleChange: p,
            onChange: f
          }), P({
            default: m(() => [
              e(t).slotNameOfSelectDefault ? C(y.$slots, e(t).slotNameOfSelectDefault, { key: 0 }) : L("", !0)
            ]),
            _: 2
          }, [
            e(t).slotNameOfClearIcon ? {
              name: "clearIcon",
              fn: m(() => [
                C(y.$slots, e(t).slotNameOfClearIcon)
              ]),
              key: "0"
            } : void 0,
            e(t).slotNameOfDropdownRender ? {
              name: "dropdownRender",
              fn: m(() => [
                C(y.$slots, e(t).slotNameOfDropdownRender)
              ]),
              key: "1"
            } : void 0,
            e(t).slotNameOfMaxTagPlaceholder ? {
              name: "maxTagPlaceholder",
              fn: m(() => [
                C(y.$slots, e(t).slotNameOfMaxTagPlaceholder)
              ]),
              key: "2"
            } : void 0,
            e(t).slotNameOfMenuItemSelectedIcon ? {
              name: "menuItemSelectedIcon",
              fn: m(() => [
                C(y.$slots, e(t).slotNameOfMenuItemSelectedIcon)
              ]),
              key: "3"
            } : void 0,
            e(t).slotNameOfNotFoundContent ? {
              name: "notFoundContent",
              fn: m(() => [
                C(y.$slots, e(t).slotNameOfNotFoundContent)
              ]),
              key: "4"
            } : void 0,
            e(t).slotNameOfOption ? {
              name: "option",
              fn: m((K) => [
                C(y.$slots, e(t).slotNameOfOption, Y(Q(K)))
              ]),
              key: "5"
            } : void 0,
            e(t).slotNameOfPlaceholder ? {
              name: "placeholder",
              fn: m(() => [
                C(y.$slots, e(t).slotNameOfPlaceholder)
              ]),
              key: "6"
            } : void 0,
            e(t).slotNameOfRemoveIcon ? {
              name: "removeIcon",
              fn: m(() => [
                C(y.$slots, e(t).slotNameOfRemoveIcon)
              ]),
              key: "7"
            } : void 0,
            e(t).slotNameOfSuffixIcon ? {
              name: "suffixIcon",
              fn: m(() => [
                C(y.$slots, e(t).slotNameOfSuffixIcon)
              ]),
              key: "8"
            } : void 0,
            e(t).slotNameOfTagRender ? {
              name: "tagRender",
              fn: m(() => [
                C(y.$slots, e(t).slotNameOfTagRender)
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
function D(n, a, s) {
  n.component(a, s);
}
function Ut(n) {
  D(n, "v-object", dt), D(n, "v-string", mt), D(n, "v-boolean", vt), D(n, "v-array", wt), D(n, "v-autocomplete", pt), D(n, "v-checkbox", ht), D(n, "v-date", gt), D(n, "v-number", ye), D(n, "v-integer", ye), D(n, "v-time", yt), D(n, "v-text", Mt), D(n, "v-radio", Tt), D(n, "v-textarea", St), D(n, "v-slider", Dt), D(n, "v-rate", Pt), D(n, "v-tag", Ft), D(n, "v-select", Bt), D(n, "v-cascader", Rt);
}
const Lt = [ot, U];
function zt(n) {
  Lt.forEach((a) => {
    n.component(a.name, a);
  }), Ut(n);
}
const Ht = {
  installFormly: zt
}, Kt = function(n, a) {
  if (n.config.globalProperties.emitter = Ve(), !a.lib || a.lib === "ant-design-vue")
    Ht.installFormly(n);
  else
    throw new Error("Unsupport lib");
  return n.config.globalProperties.$VFORMLY_OPTIONS = a, n;
}, Xt = {
  install: Kt
};
export {
  Xt as default
};