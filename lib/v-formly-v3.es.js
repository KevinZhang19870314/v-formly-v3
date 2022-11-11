var Ne = Object.defineProperty;
var Ee = (n, t, o) => t in n ? Ne(n, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[t] = o;
var N = (n, t, o) => (Ee(n, typeof t != "symbol" ? t + "" : t, o), o);
import Ve from "mitt";
import { defineComponent as D, ref as S, inject as A, computed as O, getCurrentInstance as M, openBlock as b, createElementBlock as B, normalizeStyle as be, unref as e, createBlock as I, resolveDynamicComponent as de, createSlots as T, renderList as Q, withCtx as v, renderSlot as $, normalizeProps as X, guardReactiveProps as Z, createCommentVNode as H, isRef as F, provide as je, watch as ie, toRef as j, onBeforeUnmount as me, resolveComponent as w, createVNode as V, normalizeClass as se, createTextVNode as Y, Fragment as te, toRaw as ue, createElementVNode as W, toDisplayString as K, mergeProps as U, nextTick as Me, onMounted as Oe } from "vue";
import De from "ajv";
import { Input as Se, Switch as Ae, AutoComplete as Pe, CheckboxGroup as Re, RangePicker as Fe, DatePicker as Te, TimeRangePicker as Be, TimePicker as Ue, InputNumber as Le, Textarea as ze, Slider as He, Rate as Ke, Cascader as qe, RadioGroup as Ge, Select as We } from "ant-design-vue";
function ae(n) {
  return n.config.globalProperties.emitter;
}
var q = /* @__PURE__ */ ((n) => (n.Object = "object", n.Array = "array", n.Boolean = "boolean", n.Integer = "integer", n))(q || {});
function fe(n) {
  const t = [], o = "slotName";
  return n && !n.type && (n.type = q.Object), ce(n, t, o), { slotsName: t };
}
function ce(n, t, o) {
  switch (n.type) {
    case q.Object:
      Object.keys(n.properties).forEach((l) => {
        const a = n.properties[l];
        ce(a, t, o);
      });
      break;
    case q.Array:
      Object.keys(n.items.properties).forEach((l) => {
        const a = n.items.properties[l];
        ce(a, t, o);
      });
      break;
    default:
      if (n.ui) {
        const l = Object.keys(n.ui).filter(
          (a) => a.startsWith(o)
        );
        l && l.length > 0 && l.forEach((a) => {
          t.push(n.ui[a]);
        });
      }
      break;
  }
}
function Je() {
  return { visibleIf: Ye };
}
function Ye(n, t, o, l) {
  if (!t.ui || !t.ui.visibleIf)
    return o;
  const a = Object.keys(t.ui.visibleIf)[0], i = t.ui.visibleIf[a];
  return l = l || {}, typeof i != "function" || a !== l.id ? o : i.call(null, n, l.id, l.value);
}
const xe = "form-value-change", ne = "form-error-change", ve = /* @__PURE__ */ D({
  __name: "AFormlyItem",
  props: {
    id: null,
    show: { type: Boolean, default: !0 },
    meta: null
  },
  setup(n) {
    const t = n;
    let o = S(!0);
    const { slotsName: l } = fe(t.meta), a = A("state"), i = O(() => `v-${t.meta.ui && t.meta.ui.component || t.meta.type}`), u = O(() => a.layout);
    s();
    function s() {
      if (!t.meta.type)
        throw new Error(
          "Form item type must be one of these: number, string, boolean, array, object"
        );
      o.value = t.show, r(o.value, t.id);
      const { visibleIf: f } = Je(), { appContext: p } = M();
      ae(p).on(`${xe}-${a._formId}`, (m) => {
        let c = f(a.context, t.meta, o.value, {
          id: m.id,
          value: m.value
        });
        c !== o.value && (o.value = c, r(o.value, t.id));
      });
    }
    function r(f, p) {
      f ? a._ignoreErrorIds = a._ignoreErrorIds.filter((h) => h !== p) : a._ignoreErrorIds.indexOf(p) === -1 && a._ignoreErrorIds.push(p);
    }
    return (f, p) => (b(), B("div", {
      style: be({ display: e(u) === "inline" ? "inline-block" : "block" })
    }, [
      e(o) ? (b(), I(de(e(i)), {
        key: 0,
        id: n.id,
        meta: n.meta
      }, T({ _: 2 }, [
        Q(e(l), (h) => ({
          name: h,
          fn: v((m) => [
            $(f.$slots, h, X(Z({ ...m })))
          ])
        }))
      ]), 1032, ["id", "meta"])) : H("", !0)
    ], 4));
  }
});
class Qe {
  constructor() {
    N(this, "_map", /* @__PURE__ */ new Map());
  }
  addContext(t, o) {
    this._map.set(t, o);
  }
  removeContext(t) {
    this._map.delete(t);
  }
  getContext(t) {
    return this._map.get(t);
  }
  getContexts() {
    return this._map;
  }
  getMap() {
    return this._map;
  }
}
function Ce(n = 8, t = 10) {
  const o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), l = t || o.length, a = [];
  if (n)
    for (let i = 0; i < n; i++)
      a[i] = o[0 | Math.random() * l];
  else {
    let i;
    a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4";
    for (let u = 0; u < 36; u++)
      a[u] || (i = 0 | Math.random() * 16, a[u] = o[u == 19 ? i & 3 | 8 : i]);
  }
  return a.join("");
}
function oe(n) {
  if (n === void 0)
    return;
  if (n === null)
    return null;
  const t = Object.assign({}, n);
  return Object.keys(t).forEach(
    (o) => t[o] = typeof n[o] == "object" ? oe(n[o]) : n[o]
  ), Array.isArray(n) ? (t.length = n.length, Array.from(t)) : t;
}
const Xe = Array.isArray, Ze = (n) => typeof n == "function", ke = (n) => typeof n == "number";
function pe() {
  const { appContext: n } = M(), t = n.config.globalProperties;
  return {
    appContext: n,
    globalProperties: t
  };
}
class et {
  constructor() {
    N(this, "_formId", Ce(4));
    N(this, "_ignoreErrorIds", []);
    N(this, "_context");
    N(this, "_layout", S("horizontal"));
    N(this, "_ajvOptions", {
      allErrors: !0,
      strict: !1,
      loopEnum: 50
    });
    N(this, "_formData", S({}));
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
  set context(t) {
    this._context = t;
  }
  get layout() {
    return this._layout;
  }
  set layout(t) {
    this._layout = t;
  }
  get ajvOptions() {
    return this._ajvOptions;
  }
  set ajvOptions(t) {
    this._ajvOptions = t;
  }
  get formData() {
    return this._formData.value;
  }
  set formData(t) {
    this._formData.value = t;
  }
  get meta() {
    return this._meta;
  }
  set meta(t) {
    this._meta = t;
  }
  get ui() {
    return this._ui;
  }
  set ui(t) {
    this._ui = Object.assign({}, this._ui, t);
  }
  get validate() {
    return this._validate;
  }
  set validate(t) {
    this._validate = t;
  }
  updateObjProp(t, o, l) {
    const [a, ...i] = o.split("/").filter((u) => u);
    i.length ? this.updateObjProp(t[a], i.join("/"), l) : t && (t[a] = l);
  }
  _applyUseOptions() {
    const { globalProperties: t } = pe(), o = t.$VFORMLY_OPTIONS;
    !o || typeof o != "object" || (this.ui = o.ui);
  }
}
class tt {
  constructor(t, o) {
    N(this, "state");
    N(this, "_ajv");
    N(this, "_validate");
    N(this, "appContext");
    this.state = o, this._ajv = new De(o.ajvOptions), this._validate = null, this.appContext = t;
  }
  async runValidateForm() {
    const { valid: t, errors: o } = this._isAjvValid(), a = this.state.context.getContexts().values();
    let i = !0;
    for (const u of a)
      i = await this._validation(u, t, o) && i;
    return i;
  }
  async runValidationFormItem(t) {
    const { valid: o, errors: l } = this._isAjvValid();
    return await this._validation(t, o, l);
  }
  _ajvValidate(t) {
    if (this._validate)
      return this._validate;
    const o = oe(t);
    return this._replaceReactiveToRawData(o), this._validate = this._ajv.compile(o), this._validate;
  }
  _forceCompile() {
    const t = oe(this.state.meta);
    this._replaceReactiveToRawData(t), this._validate = this._ajv.compile(t);
  }
  _replaceReactiveToRawData(t) {
    var a;
    let o, l;
    switch (t.type) {
      case q.Object:
        o = Object.values(t.properties), o.forEach((i) => {
          this._replaceReactiveToRawData(i);
        });
        break;
      case q.Array:
        l = Object.keys(t), l.forEach((i) => {
          F(t[i]) && (t[i] = t[i]._value);
        }), o = Object.values((a = t.items) == null ? void 0 : a.properties), o.forEach((i) => {
          this._replaceReactiveToRawData(i);
        });
        break;
      default:
        l = Object.keys(t), l.forEach((i) => {
          F(t[i]) && (t[i] = t[i]._value);
        });
        break;
    }
  }
  _getAjvError(t, o) {
    let l;
    for (let a = 0; a < o.length; a++) {
      const i = o[a], u = this._getId(i);
      if (t === u) {
        l = i;
        break;
      }
    }
    return l;
  }
  _isAjvValid() {
    const t = this._ajvValidate(this.state.meta);
    return { valid: t(this.state.formData || {}), errors: t.errors };
  }
  async _validation(t, o, l) {
    let a = [];
    const i = `${ne}-${this.state._formId}`, u = ae(this.appContext);
    if (o)
      return u.emit(i, {
        id: t.id,
        error: void 0
      }), !0;
    {
      const s = this._getCustomError(t), r = await this._getCustomAsyncError(t), f = [...s, ...r];
      this._replaceWithDefaultErrors(t, l), this._replaceWithCustomErrors(t.id, l, f);
      const p = this.state.ui.ingoreKeywords || [];
      a = l.filter(
        (m) => p.indexOf(m.keyword) === -1
      ), a = this._removeIgnoreErrors(a);
      const h = this._getAjvError(t.id, a);
      return u.emit(i, {
        id: t.id,
        error: h
      }), !h;
    }
  }
  _getCustomError(t) {
    var l, a;
    const o = (a = (l = t.ui) == null ? void 0 : l.value) == null ? void 0 : a.validator;
    return o ? o(t.value) : [];
  }
  async _getCustomAsyncError(t) {
    var l, a;
    const o = (a = (l = t.ui) == null ? void 0 : l.value) == null ? void 0 : a.validatorAsync;
    return o ? await o(t.value) : [];
  }
  _replaceWithDefaultErrors(t, o) {
    var u, s;
    if (!o || o.length === 0)
      return;
    const l = ((s = (u = t.ui) == null ? void 0 : u.value) == null ? void 0 : s.errors) || {}, a = Object.assign({}, this.state.ui.errors, l), i = Object.keys(a);
    i && i.length > 0 && o.forEach((r) => {
      i.indexOf(r.keyword) > -1 && (r.message = a[r.keyword]);
    });
  }
  _replaceWithCustomErrors(t, o, l) {
    l.forEach((a) => {
      const i = o.find(
        (u) => u.keyword === a.keyword && this._getId(u) === t
      );
      i && (i.message = a.message);
    });
  }
  _removeIgnoreErrors(t) {
    const o = this.state._ignoreErrorIds;
    return !o || o.length === 0 ? t : t.filter((a) => o.indexOf(this._getId(a)) === -1);
  }
  _getId(t) {
    return t.params && t.params.missingProperty ? `${t.instancePath ? t.instancePath : ""}/${t.params.missingProperty}` : `${t.instancePath}`;
  }
}
const at = { class: "v__formly" }, nt = { name: "v-formly-v3" }, ot = /* @__PURE__ */ D({
  ...nt,
  props: {
    modelValue: null,
    layout: { default: "horizontal" },
    button: null,
    meta: null
  },
  emits: ["update:modelValue", "form-reset", "form-submit"],
  setup(n, { expose: t, emit: o }) {
    const l = n;
    if (!l.meta || typeof l.meta.properties > "u")
      throw new Error("Invalid Schema");
    let a = { type: q.Object }, i = S(!1);
    const u = new et();
    je("state", u);
    const { slotsName: s } = fe(l.meta), { appContext: r } = M(), f = ae(r);
    h();
    const p = O(() => {
      const x = Object.assign({}, u.ui);
      return l.layout === "vertical" ? null : { span: x.spanControl, offset: x.spanLabel };
    });
    ie(
      () => l.modelValue,
      (x, C) => {
        JSON.stringify(x) !== JSON.stringify(C) && _(x);
      },
      {
        deep: !1
      }
    ), ie(
      () => u.formData,
      (x, C) => {
        o("update:modelValue", x);
      },
      {
        deep: !0
      }
    );
    function h() {
      u.layout = j(l, "layout"), a = Object.assign({}, a, l.meta), u.meta = a, u.formData = Object.assign({}, l.modelValue), m(u.formData, l.meta.properties), u.context = new Qe(), u.validate = new tt(r, u);
    }
    function m(x, C) {
      Object.keys(C).forEach((k) => {
        const E = C[k];
        if (E.type !== "null")
          switch (E.type) {
            case q.Object:
              x[k] = x[k] || {}, m(x[k], E.properties);
              break;
            case q.Array:
              x[k] = x[k] || [];
              break;
            case q.Boolean:
              break;
            default:
              x[k] = x[k] || void 0;
              break;
          }
      });
    }
    function c(x) {
      return u.context.getContext(x);
    }
    async function g() {
      return await u.validate.runValidateForm();
    }
    function _(x) {
      const C = u.context.getContext("/");
      C && (C.value = x, o("update:modelValue", u.formData));
    }
    function d() {
      o("form-reset", ue(u.formData)), _({});
    }
    async function y() {
      i.value = !0;
      const x = await g();
      i.value = !1, o("form-submit", {
        valid: x,
        data: x ? ue(u.formData) : void 0
      });
    }
    return me(() => {
      f.all.clear();
    }), t({
      getContext: c,
      validate: g,
      reset: _,
      clearForm: d,
      submitForm: y
    }), (x, C) => {
      const k = w("a-button"), E = w("a-space"), P = w("a-form-item"), J = w("a-form");
      return b(), B("div", at, [
        V(J, {
          class: se(["v", {
            v__inline: n.layout === "inline",
            v__horizontal: n.layout === "horizontal"
          }]),
          layout: n.layout
        }, {
          default: v(() => [
            V(ve, {
              id: "/",
              meta: e(a)
            }, T({ _: 2 }, [
              Q(e(s), (le) => ({
                name: le,
                fn: v((re) => [
                  $(x.$slots, le, X(Z({ ...re })))
                ])
              }))
            ]), 1032, ["meta"]),
            n.button === "default" ? (b(), I(P, {
              key: 0,
              wrapperCol: e(p),
              class: "v__default-submit-button"
            }, {
              default: v(() => [
                V(E, null, {
                  default: v(() => [
                    V(k, {
                      type: "danger",
                      onClick: d
                    }, {
                      default: v(() => [
                        Y(" \u91CD\u7F6E ")
                      ]),
                      _: 1
                    }),
                    V(k, {
                      type: "primary",
                      onClick: y,
                      loading: e(i)
                    }, {
                      default: v(() => [
                        Y(" \u63D0\u4EA4 ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["wrapperCol"])) : n.button === "custom" ? $(x.$slots, "button", {
              key: 1,
              loading: e(i),
              clearForm: d,
              submitForm: y
            }) : (b(), B(te, { key: 2 }, [], 64))
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
}, ut = { name: "v-wrapper" }, z = /* @__PURE__ */ D({
  ...ut,
  props: {
    id: null,
    show: { type: Boolean },
    meta: null
  },
  setup(n) {
    const t = n, { globalProperties: o } = pe(), l = A("state"), a = l.context.getContext(t.id), i = O(() => Object.assign({}, l.ui, t.meta.ui)), u = O(() => Object.assign({}, l.ui, t.meta.ui).optionalHelp), s = O(() => l.layout.value === "vertical" || l.layout.value === "inline" ? void 0 : { span: i.value.spanLabel }), r = O(() => l.layout.value === "vertical" || l.layout.value === "inline" ? void 0 : { span: i.value.spanControl, offset: i.value.offsetControl || 0 }), f = O({
      get() {
        return a.error.value;
      },
      set(c) {
        a.error.value = c;
      }
    }), { appContext: p } = M(), h = ae(p);
    h.on(`${ne}-${l._formId}`, m), me(() => {
      h.off(`${ne}-${l._formId}`, m);
    });
    function m(c) {
      c.id === t.id && (f.value = c.error ? c.error.message : void 0);
    }
    return (c, g) => {
      const _ = w("a-tooltip"), d = w("a-form-item");
      return b(), I(d, {
        labelCol: e(s),
        wrapperCol: e(r),
        required: e(i).showRequired,
        class: se({ "ant-form-item-has-error": e(f) })
      }, T({
        label: v(() => [
          W("span", st, K(n.meta.title), 1),
          e(i).optional || e(u) ? (b(), B("span", lt, [
            Y(K(e(i).optional) + " ", 1),
            e(u) ? (b(), I(_, {
              key: 0,
              title: e(u).text,
              placement: e(u).placement,
              trigger: e(u).trigger,
              overlayStyle: e(u).overlayStyle,
              mouseEnterDelay: e(u).mouseEnterDelay,
              mouseLeaveDelay: e(u).mouseLeaveDelay,
              overlayClassName: e(u).overlayClassName
            }, {
              default: v(() => [
                e(u).icon ? (b(), I(de(e(o).$antIcons[e(u).icon]), { key: 0 })) : H("", !0)
              ]),
              _: 1
            }, 8, ["title", "placement", "trigger", "overlayStyle", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName"])) : H("", !0)
          ])) : H("", !0)
        ]),
        default: v(() => [
          $(c.$slots, "default"),
          e(f) ? (b(), B("div", rt, K(e(f)), 1)) : H("", !0)
        ]),
        _: 2
      }, [
        n.meta.description ? {
          name: "extra",
          fn: v(() => [
            W("div", {
              innerHTML: n.meta.description
            }, null, 8, it)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["labelCol", "wrapperCol", "required", "class"]);
    };
  }
});
class ee {
  constructor(t, o, l, a) {
    N(this, "id");
    N(this, "state");
    N(this, "meta", S({}));
    N(this, "type");
    N(this, "ui", S({}));
    N(this, "error", S(void 0));
    N(this, "_value", S());
    N(this, "_initMetaValue");
    N(this, "appContext");
    if (this.constructor == ee)
      throw new Error("Abstract classes can't be instantiated.");
    this.id = l, this.state = o, this.meta.value = a, this.type = a.ui && a.ui.component || a.type, this.ui.value = Object.assign({}, o.ui, a.ui), this.appContext = t, this.error.value = void 0, o.context.addContext(l, this), this._value.value = void 0, this._initMetaValue = this.getInitMetaValue();
  }
  get value() {
    return this._value.value;
  }
  set value(t) {
    if (this._value.value === t)
      return;
    this.setValue(t), ae(this.appContext).emit(`${xe}-${this.state._formId}`, {
      id: this.id,
      value: this._value.value
    }), this.state.updateObjProp(this.state.formData, this.id, this._value.value), this.state.validate.runValidationFormItem(this);
  }
  getInitMetaValue() {
    const t = this.id.split("/").filter((l) => l);
    let o = "";
    return t.reduce((l, a, i) => (i === t.length - 1 && (o = l[a]), l[a] || {}), this.state.formData), o;
  }
}
class ct extends ee {
  constructor(o, l, a, i) {
    super(o, l, a, i);
    N(this, "childMetaPairs");
    this.childMetaPairs = this.buildChildMetaPairs(a, i), l.context.addContext(a, this);
  }
  initValue() {
  }
  setValue() {
  }
  set value(o) {
    this.childMetaPairs.forEach(({ key: l, propertyName: a }) => {
      const i = this.state.context.getContext(l);
      i && (i.value = (o || {})[a]);
    });
  }
  buildChildMetaPairs(o, l) {
    const a = [];
    for (const i of Object.keys(l.properties || {})) {
      const u = o === "/" ? `/${i}` : `${o}/${i}`;
      a.push({
        key: u,
        propertyName: i,
        meta: l.properties[i]
      });
    }
    return a;
  }
}
const dt = /* @__PURE__ */ D({
  __name: "Object",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, { slotsName: o } = fe(t.meta), l = A("state"), { appContext: a } = M(), i = new ct(a, l, t.id, t.meta), u = O(() => i.ui.value || {}), s = O(() => Object.assign({}, l.ui.grid, u.value.grid).gutter), r = O(() => l.layout.value);
    function f(m) {
      return m.ui && m.ui.show;
    }
    function p(m) {
      if (r.value === "inline")
        return {};
      const c = m.meta.ui && m.meta.ui.grid || {};
      return Object.assign({}, l.ui.grid, u.value.grid, c);
    }
    const h = i.childMetaPairs;
    return (m, c) => {
      const g = w("a-col"), _ = w("a-row");
      return b(), I(_, { gutter: e(s) }, {
        default: v(() => [
          (b(!0), B(te, null, Q(e(h), (d, y) => (b(), I(g, {
            key: y,
            span: p(d).span,
            offset: p(d).offset,
            xs: p(d).xs,
            sm: p(d).sm,
            md: p(d).md,
            lg: p(d).lg,
            xl: p(d).xl,
            xxl: p(d).xxl,
            style: be({ display: e(r) === "inline" ? "inline-block" : "block" })
          }, {
            default: v(() => [
              V(ve, {
                id: d.key,
                meta: d.meta,
                show: f(d.meta)
              }, T({ _: 2 }, [
                Q(e(o), (x) => ({
                  name: x,
                  fn: v((C) => [
                    $(m.$slots, x, X(Z({ ...C })))
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
class G extends ee {
  constructor(o, l, a, i) {
    var u;
    super(o, l, a, i);
    N(this, "open");
    this.initValue(), this.meta.value && (this.open = ((u = this.meta.value.ui) == null ? void 0 : u.open) || !1);
  }
  initValue() {
    this._initMetaValue ? this.value = this._initMetaValue : this.meta.value.default && (this.value = this.meta.value.default);
  }
  setValue(o) {
    this._value.value = o || void 0;
  }
}
function L(n, t) {
  const o = S({});
  return Object.keys(t.value).forEach((a) => {
    n.indexOf(a) > -1 && (o.value[a] = j(t.value, a));
  }), { bindings: o };
}
const mt = /* @__PURE__ */ D({
  __name: "String",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = A("state"), { appContext: l } = M(), a = new G(l, o, t.id, t.meta), { bindings: i } = L(Object.keys(Se.props), a.ui), u = j(t.meta, "readOnly"), s = j(t.meta, "maxLength"), r = O(() => a.ui.value || {}), f = O({
      get() {
        return a.value;
      },
      set(h) {
        a.value = h;
      }
    });
    function p() {
      r.value.change && r.value.change(e(f));
    }
    return (h, m) => {
      const c = w("a-input");
      return b(), I(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          V(c, U(e(i), {
            defaultValue: n.meta.defaultValue,
            disabled: e(u),
            maxlength: e(s),
            value: e(f),
            "onUpdate:value": m[0] || (m[0] = (g) => F(f) ? f.value = g : null),
            onChange: p
          }), T({ _: 2 }, [
            e(r).slotNameOfPrefix ? {
              name: "prefix",
              fn: v(() => [
                $(h.$slots, e(r).slotNameOfPrefix)
              ]),
              key: "0"
            } : void 0,
            e(r).slotNameOfSuffix ? {
              name: "suffix",
              fn: v(() => [
                $(h.$slots, e(r).slotNameOfSuffix)
              ]),
              key: "1"
            } : void 0,
            e(r).slotNameOfAddonBefore ? {
              name: "addonBefore",
              fn: v(() => [
                $(h.$slots, e(r).slotNameOfAddonBefore)
              ]),
              key: "2"
            } : void 0,
            e(r).slotNameOfAddonAfter ? {
              name: "addonAfter",
              fn: v(() => [
                $(h.$slots, e(r).slotNameOfAddonAfter)
              ]),
              key: "3"
            } : void 0
          ]), 1040, ["defaultValue", "disabled", "maxlength", "value"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
});
class ft extends ee {
  constructor(t, o, l, a) {
    super(t, o, l, a), this.initValue();
  }
  initValue() {
    typeof this._initMetaValue < "u" ? this.value = this._initMetaValue : typeof this.meta.value.default == "boolean" && (this.value = this.meta.value.default);
  }
  setValue(t) {
    this._value.value = t || !1;
  }
}
const vt = /* @__PURE__ */ D({
  __name: "Boolean",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = A("state"), { appContext: l } = M(), a = new ft(l, o, t.id, t.meta), { bindings: i } = L(Object.keys(Ae.props), a.ui), u = j(t.meta, "readOnly"), s = O(() => a.ui.value || {}), r = O({
      get() {
        return a.value;
      },
      set(p) {
        a.value = p || !1;
      }
    });
    function f() {
      s.value.change && s.value.change(e(r));
    }
    return (p, h) => {
      const m = w("a-switch");
      return b(), I(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          V(m, U({
            class: "v__boolean",
            checked: e(r),
            "onUpdate:checked": h[0] || (h[0] = (c) => F(r) ? r.value = c : null)
          }, e(i), {
            disabled: e(u),
            onChange: f
          }), T({ _: 2 }, [
            e(s).slotNameOfCheckedChildren ? {
              name: "checkedChildren",
              fn: v(() => [
                $(p.$slots, e(s).slotNameOfCheckedChildren)
              ]),
              key: "0"
            } : void 0,
            e(s).slotNameOfUnCheckedChildren ? {
              name: "unCheckedChildren",
              fn: v(() => [
                $(p.$slots, e(s).slotNameOfUnCheckedChildren)
              ]),
              key: "1"
            } : void 0
          ]), 1040, ["checked", "disabled"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), pt = /* @__PURE__ */ D({
  __name: "AutoComplete",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = A("state"), { appContext: l } = M(), a = new G(l, o, t.id, t.meta), { bindings: i } = L(Object.keys(Pe.props), a.ui), u = j(t.meta, "readOnly"), s = O(() => a.ui.value || {}), r = O({
      get() {
        return a.value;
      },
      set(m) {
        a.value = m || void 0;
      }
    });
    function f(m) {
      s.value.change && s.value.change(e(m));
    }
    function p(m) {
      s.value.search && s.value.search(m, e(r));
    }
    function h(m, c) {
      s.value.select && s.value.select(e(m), c);
    }
    return (m, c) => {
      const g = w("a-auto-complete");
      return b(), I(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          V(g, U(e(i), {
            disabled: e(u),
            value: e(r),
            "onUpdate:value": c[0] || (c[0] = (_) => F(r) ? r.value = _ : null),
            onChange: f,
            onSearch: p,
            onSelect: h
          }), T({ _: 2 }, [
            e(s).slotNameOfOption ? {
              name: "option",
              fn: v((_) => [
                $(m.$slots, e(s).slotNameOfOption, X(Z(_)))
              ]),
              key: "0"
            } : void 0,
            e(s).slotNameOfDefault ? {
              name: "default",
              fn: v(() => [
                $(m.$slots, e(s).slotNameOfDefault)
              ]),
              key: "1"
            } : void 0
          ]), 1040, ["disabled", "value"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), ht = /* @__PURE__ */ D({
  __name: "Checkbox",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = A("state"), { appContext: l } = M(), a = new G(l, o, t.id, t.meta), { bindings: i } = L(Object.keys(Re.props), a.ui), u = j(t.meta, "readOnly"), s = O(() => a.ui.value || {}), r = O({
      get() {
        return a.value;
      },
      set(p) {
        a.value = p;
      }
    });
    function f() {
      s.value.change && s.value.change(e(r));
    }
    return (p, h) => {
      const m = w("a-checkbox-group"), c = w("a-checkbox"), g = w("a-col"), _ = w("a-row");
      return b(), I(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          e(s).span ? (b(), I(m, {
            key: 1,
            value: e(r),
            "onUpdate:value": h[1] || (h[1] = (d) => F(r) ? r.value = d : null),
            disabled: n.meta.readOnly,
            onChange: f,
            class: "v__checkbox"
          }, {
            default: v(() => [
              V(_, null, {
                default: v(() => [
                  (b(!0), B(te, null, Q(n.meta.enum, (d, y) => (b(), I(g, {
                    class: "v__text-left",
                    span: e(s).span,
                    key: y
                  }, {
                    default: v(() => [
                      V(c, {
                        value: d.value || d,
                        disabled: d.disabled || !1
                      }, {
                        default: v(() => [
                          Y(K(d.label || d), 1)
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
          }, 8, ["value", "disabled"])) : (b(), I(m, U({
            key: 0,
            class: "v__checkbox",
            value: e(r),
            "onUpdate:value": h[0] || (h[0] = (d) => F(r) ? r.value = d : null)
          }, e(i), {
            disabled: e(u),
            options: n.meta.enum,
            onChange: f
          }), null, 16, ["value", "disabled", "options"]))
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
}), gt = /* @__PURE__ */ D({
  __name: "Date",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = A("state"), { appContext: l } = M(), a = new G(l, o, t.id, t.meta);
    let i = {}, u = {};
    if (a.ui.value.type === "range") {
      const { bindings: c } = L(Object.keys(Fe.props), a.ui);
      i = c;
    } else {
      const { bindings: c } = L(Object.keys(Te.props), a.ui);
      u = c;
    }
    const s = j(t.meta, "readOnly"), r = O(() => a.ui.value || {}), f = O({
      get() {
        return a.value;
      },
      set(c) {
        a.value = c;
      }
    });
    function p() {
      r.value.change && r.value.change(e(f));
    }
    function h(c) {
      r.value.ok && r.value.ok(c);
    }
    function m(c, g, _) {
      r.value.calendarChange && r.value.calendarChange(c, g, _);
    }
    return (c, g) => {
      const _ = w("a-range-picker"), d = w("a-date-picker");
      return b(), I(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          e(r).type === "range" ? (b(), I(_, U({
            key: 0,
            class: "v__date",
            value: e(f),
            "onUpdate:value": g[0] || (g[0] = (y) => F(f) ? f.value = y : null)
          }, e(i), {
            disabled: e(s),
            onCalendarChange: m,
            onOk: h,
            onChange: p
          }), T({ _: 2 }, [
            e(r).slotNameOfSuffixIcon ? {
              name: "suffixIcon",
              fn: v(() => [
                $(c.$slots, e(r).slotNameOfSuffixIcon)
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["value", "disabled"])) : H("", !0),
          e(r).type !== "range" ? (b(), I(d, U({
            key: 1,
            class: "v__date",
            value: e(f),
            "onUpdate:value": g[1] || (g[1] = (y) => F(f) ? f.value = y : null)
          }, e(u), {
            disabled: n.meta.readOnly,
            onOk: h,
            onChange: p
          }), T({ _: 2 }, [
            e(r).slotNameOfSuffixIcon ? {
              name: "suffixIcon",
              fn: v(() => [
                $(c.$slots, e(r).slotNameOfSuffixIcon)
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["value", "disabled"])) : H("", !0)
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), _t = /* @__PURE__ */ D({
  __name: "Time",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = A("state"), { appContext: l } = M(), a = new G(l, o, t.id, t.meta);
    let i = {}, u = {};
    if (a.ui.value.type === "range") {
      const { bindings: c } = L(
        Object.keys(Be.props),
        a.ui
      );
      i = c;
    } else {
      const { bindings: c } = L(Object.keys(Ue.props), a.ui);
      u = c;
    }
    const s = j(t.meta, "readOnly"), r = O(() => a.ui.value || {}), f = O({
      get() {
        return a.value;
      },
      set(c) {
        a.value = c;
      }
    });
    function p(c, g) {
      r.value.change && r.value.change(c, g);
    }
    function h(c) {
      r.value.ok && r.value.ok(c);
    }
    function m(c, g, _) {
      r.value.calendarChange && r.value.calendarChange(c, g, _);
    }
    return (c, g) => {
      const _ = w("a-time-range-picker"), d = w("a-time-picker");
      return b(), I(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          e(r).type === "range" ? (b(), I(_, U({
            key: 0,
            class: "v__time",
            value: e(f),
            "onUpdate:value": g[0] || (g[0] = (y) => F(f) ? f.value = y : null),
            open: e(r).open,
            "onUpdate:open": g[1] || (g[1] = (y) => e(r).open = y)
          }, e(i), {
            disabled: e(s),
            onCalendarChange: m,
            onOk: h,
            onChange: p
          }), T({ _: 2 }, [
            e(r).slotNameOfRenderExtraFooter ? {
              name: "renderExtraFooter",
              fn: v(() => [
                $(c.$slots, e(r).slotNameOfRenderExtraFooter)
              ]),
              key: "0"
            } : void 0,
            e(r).slotNameOfSuffixIcon ? {
              name: "suffixIcon",
              fn: v(() => [
                $(c.$slots, e(r).slotNameOfSuffixIcon)
              ]),
              key: "1"
            } : void 0,
            e(r).slotNameOfClearIcon ? {
              name: "clearIcon",
              fn: v(() => [
                $(c.$slots, e(r).slotNameOfClearIcon)
              ]),
              key: "2"
            } : void 0
          ]), 1040, ["value", "open", "disabled"])) : (b(), I(d, U({
            key: 1,
            class: "v__time",
            value: e(f),
            "onUpdate:value": g[2] || (g[2] = (y) => F(f) ? f.value = y : null),
            open: e(r).open,
            "onUpdate:open": g[3] || (g[3] = (y) => e(r).open = y)
          }, e(u), {
            disabled: n.meta.readOnly,
            onOk: h,
            onChange: p
          }), T({ _: 2 }, [
            e(r).slotNameOfRenderExtraFooter ? {
              name: "renderExtraFooter",
              fn: v(() => [
                $(c.$slots, e(r).slotNameOfRenderExtraFooter)
              ]),
              key: "0"
            } : void 0,
            e(r).slotNameOfSuffixIcon ? {
              name: "suffixIcon",
              fn: v(() => [
                $(c.$slots, e(r).slotNameOfSuffixIcon)
              ]),
              key: "1"
            } : void 0,
            e(r).slotNameOfClearIcon ? {
              name: "clearIcon",
              fn: v(() => [
                $(c.$slots, e(r).slotNameOfClearIcon)
              ]),
              key: "2"
            } : void 0
          ]), 1040, ["value", "open", "disabled"]))
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), ye = /* @__PURE__ */ D({
  __name: "Number",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = A("state"), { appContext: l } = M(), a = new G(l, o, t.id, t.meta), { bindings: i } = L(Object.keys(Le.props), a.ui), u = j(t.meta, "readOnly"), s = O(() => a.ui.value || {}), r = O({
      get() {
        return a.value;
      },
      set(d) {
        a.value = d;
      }
    });
    let f = S(-1 / 0), p = S(1 / 0), h = S(1), m = S((d) => d), c = S((d) => d);
    g();
    function g() {
      const {
        minimum: d,
        exclusiveMinimum: y,
        maximum: x,
        exclusiveMaximum: C,
        multipleOf: k,
        type: E
      } = a.meta.value;
      h.value = k || 1, typeof d < "u" && (f.value = y ? d + h.value : d), typeof x < "u" && (p.value = C ? x - h.value : x), E === "integer" && (f.value = Math.trunc(f.value), p.value = Math.trunc(p.value), h.value = Math.trunc(h.value)), s.value.prefix != null && (s.value.formatter = (P) => P == null ? "" : `${s.value.prefix} ${P}`, s.value.parser = (P) => P.replace(`${s.value.prefix} `, "")), s.value.unit != null && (s.value.formatter = (P) => P == null ? "" : `${P} ${s.value.unit}`, s.value.parser = (P) => P.replace(` ${s.value.unit}`, "")), s.value.formatter && (m.value = s.value.formatter), s.value.parser && (c.value = s.value.parser);
    }
    function _(d) {
      r.value = a.meta.value.type === q.Integer ? Math.floor(d) : d, s.value.change && s.value.change(e(r));
    }
    return (d, y) => {
      const x = w("a-input-number");
      return b(), I(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          V(x, U({
            class: "v__number",
            id: n.id,
            value: e(r),
            "onUpdate:value": y[0] || (y[0] = (C) => F(r) ? r.value = C : null)
          }, e(i), {
            disabled: e(u),
            min: e(f),
            max: e(p),
            step: e(h),
            formatter: e(m),
            parser: e(c),
            class: { "v__input-number-hidden-step": e(s).hideStep },
            onChange: y[1] || (y[1] = (C) => _(C))
          }), T({ _: 2 }, [
            e(s).slotNameOfAddonAfter ? {
              name: "addonAfter",
              fn: v(() => [
                $(d.$slots, e(s).slotNameOfAddonAfter)
              ]),
              key: "0"
            } : void 0,
            e(s).slotNameOfAddonBefore ? {
              name: "addonBefore",
              fn: v(() => [
                $(d.$slots, e(s).slotNameOfAddonBefore)
              ]),
              key: "1"
            } : void 0,
            e(s).slotNameOfPrefix ? {
              name: "prefix",
              fn: v(() => [
                $(d.$slots, e(s).slotNameOfPrefix)
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
class yt extends ee {
  constructor(o, l, a, i) {
    super(o, l, a, i);
    N(this, "ids", S([]));
    this.initValue();
  }
  setValue() {
  }
  initValue() {
    var o, l;
    if (((o = this._initMetaValue) == null ? void 0 : o.length) > 0)
      this.value = this._initMetaValue;
    else if (((l = e(this.meta).default) == null ? void 0 : l.length) > 0) {
      const a = e(this.meta).default;
      a.forEach(() => this.add(!1)), setTimeout(() => {
        a.forEach((i, u) => {
          const s = this.state.context.getContext(
            `${this.id}/${u}`
          );
          s.value = i;
        });
      }), this.validate();
    }
  }
  get value() {
    return this.getPathValue(this.state.formData, this.id) || [];
  }
  set value(o) {
    if (this.value.length === 0 && (o == null ? void 0 : o.length) === 0 || !Array.isArray(o) && o != null)
      return;
    const l = oe(o), a = e(this.ids).length;
    for (let i = 0; i < a; i++)
      this.remove(a - i - 1, !1);
    l && l.length && (l.forEach(() => this.add(!1)), Me(() => {
      l.forEach((i, u) => {
        const s = this.state.context.getContext(
          `${this.id}/${u}`
        );
        s.value = i;
      });
    })), this.validate();
  }
  validate() {
    return this.state.validate.runValidationFormItem(this);
  }
  getPathValue(o, l) {
    const a = l.split("/").filter((u) => u);
    let i = oe(o);
    for (let u = 0; u < a.length; u++) {
      const s = a[u];
      i = i[s];
    }
    return i;
  }
  getEmptyData() {
    const o = {}, l = e(this.meta).items.properties;
    return Object.keys(l).forEach((a) => {
      switch (l[a].type) {
        case "object":
          o[a] = {};
          break;
        case "array":
          o[a] = [];
          break;
        default:
          o[a] = void 0;
          break;
      }
    }), o;
  }
  add(o = !0) {
    const l = `${this.id}/${e(this.ids).length}`, a = this.getEmptyData();
    return this.state.updateObjProp(this.state.formData, l, a), this.ids.value.push({ key: Ce() }), o && this.validate(), l;
  }
  remove(o, l = !0) {
    this.ids.value.splice(o, 1);
    const a = this.id.split("/").filter((s) => !!s);
    a.reduce((s, r, f) => (f === a.length - 1 && s[r].splice(o, 1), s[r]), this.state.formData);
    const i = [];
    for (const s of this.state.context.getMap().keys())
      new RegExp(`^/?${this.id}/`).test(s) && i.push(s);
    for (let s = o + 1; s < e(this.ids).length + 1; s++) {
      const r = new RegExp(`^(/?${this.id}/)${s}`);
      i.filter((f) => r.test(f)).forEach((f) => {
        const p = this.state.context.getContext(f), h = f.replace(r, (m, c) => `${c}${s - 1}`);
        if (p.id = h, p.childMetaPairs) {
          const m = p.buildChildMetaPairs(
            h,
            e(p.meta)
          );
          p.childMetaPairs.forEach((c, g) => {
            c.key = m[g].key;
          });
        }
        this.state.context.addContext(h, p);
      });
    }
    const u = new RegExp(`^/?${this.id}/${e(this.ids).length}`);
    i.filter((s) => u.test(s)).forEach((s) => {
      this.state.context.removeContext(s);
    }), l && this.validate();
  }
}
const bt = { class: "v__optional" }, Ot = { class: "v__array-add" }, xt = { class: "ant-form-item-control" }, Ct = ["onClick"], kt = {
  key: 0,
  class: "ant-form-item-extra"
}, $t = {
  key: 1,
  class: "ant-form-item-explain-error"
}, wt = /* @__PURE__ */ D({
  __name: "Array",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = A("state"), { globalProperties: l } = pe(), { appContext: a } = M(), i = new yt(a, o, t.id, t.meta), u = ae(a), s = O(() => e(i.ui) || {}), r = O(() => Object.assign({}, o.ui, t.meta.ui).optionalHelp);
    O({
      get() {
        return i.value;
      },
      set(C) {
        i.value = C || [];
      }
    });
    const f = O({
      get() {
        return e(i.error);
      },
      set(C) {
        i.error.value = C;
      }
    }), p = j(t.meta, "readOnly"), h = O(() => e(p) || t.meta.maxItems != null && e(i.ids).length >= t.meta.maxItems), m = O(() => {
      const C = t.meta.minItems;
      return !(e(p) || C != null && e(i.ids).length <= C);
    }), c = S(8), g = S("");
    Oe(() => {
      var P;
      u.on(`${ne}-${o._formId}`, _);
      const { grid: C, removable: k, removeTitle: E } = e(s);
      c.value = (P = C == null ? void 0 : C.arraySpan) != null ? P : 8, g.value = k === !1 ? null : E;
    }), me(() => {
      u.off(`${ne}-${o._formId}`, _);
    });
    function _(C) {
      C.id === t.id && (f.value = C.error ? C.error.message : void 0);
    }
    function d(C) {
      return `${t.id}/${C}`;
    }
    function y() {
      var k, E;
      const C = i.add();
      (E = (k = e(s)).add) == null || E.call(k, C);
    }
    function x(C) {
      var k, E;
      i.remove(C), (E = (k = e(s)).remove) == null || E.call(k, C);
    }
    return (C, k) => {
      const E = w("a-tooltip"), P = w("a-button"), J = w("a-col"), le = w("delete-outlined"), re = w("a-card"), ge = w("a-row"), we = w("a-form-item");
      return b(), I(we, null, {
        default: v(() => [
          V(ge, null, {
            default: v(() => [
              n.meta.title ? (b(), I(J, {
                key: 0,
                class: "ant-form-item-label",
                span: e(s).spanLabel
              }, {
                default: v(() => [
                  W("label", {
                    class: se({ "ant-form-item-required": e(s).showRequired })
                  }, [
                    Y(K(n.meta.title) + " ", 1),
                    W("span", bt, [
                      Y(K(e(s).optional) + " ", 1),
                      e(r) ? (b(), I(E, {
                        key: 0,
                        title: e(r).text,
                        placement: e(r).placement,
                        trigger: e(r).trigger,
                        overlayStyle: e(r).overlayStyle,
                        overlayClassName: e(r).overlayClassName,
                        mouseEnterDelay: e(r).mouseEnterDelay,
                        mouseLeaveDelay: e(r).mouseLeaveDelay
                      }, {
                        default: v(() => [
                          e(r).icon ? (b(), I(de(e(l).$antIcons[e(r).icon]), { key: 0 })) : H("", !0)
                        ]),
                        _: 1
                      }, 8, ["title", "placement", "trigger", "overlayStyle", "overlayClassName", "mouseEnterDelay", "mouseLeaveDelay"])) : H("", !0)
                    ])
                  ], 2),
                  W("div", Ot, [
                    V(P, {
                      type: e(s).addType || "dashed",
                      disabled: e(h),
                      onClick: y
                    }, {
                      default: v(() => [
                        Y(K(e(s).addTitle || "\u6DFB\u52A0"), 1)
                      ]),
                      _: 1
                    }, 8, ["type", "disabled"])
                  ])
                ]),
                _: 1
              }, 8, ["span"])) : H("", !0),
              V(J, {
                class: "ant-form-item-control-wrapper",
                span: e(s).spanControl,
                offset: e(s).offsetControl
              }, {
                default: v(() => [
                  W("div", xt, [
                    V(ge, { class: "v__array-container" }, {
                      default: v(() => [
                        (b(!0), B(te, null, Q(e(i).ids.value, (Ie, _e) => (b(), I(J, {
                          key: Ie.key,
                          span: c.value,
                          class: "v__array-item"
                        }, {
                          default: v(() => [
                            V(re, null, {
                              default: v(() => [
                                V(ve, {
                                  id: d(_e),
                                  meta: n.meta.items
                                }, null, 8, ["id", "meta"]),
                                e(m) ? (b(), B("span", {
                                  key: 0,
                                  class: "v__array-remove",
                                  onClick: (Gt) => x(_e)
                                }, [
                                  V(le)
                                ], 8, Ct)) : H("", !0)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["span"]))), 128))
                      ]),
                      _: 1
                    }),
                    n.meta.description ? (b(), B("div", kt, K(n.meta.description), 1)) : H("", !0),
                    e(f) ? (b(), B("div", $t, K(e(f)), 1)) : H("", !0)
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
}), It = { class: "v__label-text" }, Nt = ["innerHTML"], Et = ["textContent"], Vt = ["innerHTML"], jt = /* @__PURE__ */ D({
  __name: "Text",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = A("state"), { appContext: l } = M(), a = new G(l, o, t.id, t.meta), i = O(() => a.ui.value || {}), u = O(() => o.layout.value === "vertical" || o.layout.value === "inline" ? void 0 : { span: i.value.spanLabel }), s = O(() => o.layout.value === "vertical" || o.layout.value === "inline" ? void 0 : { span: i.value.spanControl, offset: i.value.offsetControl || 0 }), r = O(
      () => Ze(e(i).text) ? e(i).text() : e(i).text
    );
    return (f, p) => {
      const h = w("a-form-item");
      return b(), B("div", null, [
        V(h, {
          labelCol: e(u),
          wrapperCol: e(s),
          class: se({ "no-label": !n.meta.title })
        }, T({
          default: v(() => [
            e(i).slotNameOfDefault ? $(f.$slots, e(i).slotNameOfDefault, { key: 0 }, void 0, !0) : (b(), B(te, { key: 1 }, [
              e(i).html ? (b(), B("span", {
                key: 0,
                innerHTML: e(i).html,
                class: "v__content-text"
              }, null, 8, Nt)) : (b(), B("span", {
                key: 1,
                textContent: K(e(r)),
                class: "v__content-text"
              }, null, 8, Et))
            ], 64))
          ]),
          _: 2
        }, [
          n.meta.title ? {
            name: "label",
            fn: v(() => [
              W("span", It, K(n.meta.title), 1)
            ]),
            key: "0"
          } : void 0,
          n.meta.description ? {
            name: "extra",
            fn: v(() => [
              W("div", {
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
const $e = (n, t) => {
  const o = n.__vccOpts || n;
  for (const [l, a] of t)
    o[l] = a;
  return o;
}, Mt = /* @__PURE__ */ $e(jt, [["__scopeId", "data-v-c98847ae"]]), Dt = /* @__PURE__ */ D({
  __name: "Textarea",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = A("state"), { appContext: l } = M(), a = new G(l, o, t.id, t.meta), { bindings: i } = L(Object.keys(ze.props), a.ui), u = j(t.meta, "readOnly"), s = j(t.meta, "maxLength"), r = O(() => a.ui.value || {}), f = O({
      get() {
        return a.value;
      },
      set(_) {
        a.value = _;
      }
    }), p = S(!0);
    Oe(() => {
      e(r).autoSize != null && (p.value = e(r).autoSize);
    });
    function h() {
      var _, d;
      (d = (_ = e(r)).change) == null || d.call(_, e(f));
    }
    function m(_) {
      var d, y;
      (y = (d = e(r)).focus) == null || y.call(d, _);
    }
    function c(_) {
      var d, y;
      (y = (d = e(r)).blur) == null || y.call(d, _);
    }
    function g(_) {
      var d, y;
      (y = (d = e(r)).pressEnter) == null || y.call(d, _);
    }
    return (_, d) => {
      const y = w("a-textarea");
      return b(), I(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          V(y, U(e(i), {
            autoSize: p.value,
            defaultValue: n.meta.defaultValue,
            disabled: e(u),
            maxlength: e(s),
            value: e(f),
            "onUpdate:value": d[0] || (d[0] = (x) => F(f) ? f.value = x : null),
            onChange: h,
            onFocus: m,
            onBlur: c,
            onPressEnter: g
          }), null, 16, ["autoSize", "defaultValue", "disabled", "maxlength", "value"])
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
});
class he extends ee {
  constructor(t, o, l, a) {
    super(t, o, l, a), this.initValue();
  }
  initValue() {
    this._initMetaValue ? this.value = this._initMetaValue : e(this.meta).default && (this.value = e(this.meta).default);
  }
  setValue(t) {
    switch (this.type) {
      case "slider":
        this._value.value = Xe(t) || ke(t) ? t : void 0;
        break;
      default:
        this._value.value = t || void 0;
        break;
    }
  }
}
function St(n, t) {
  ie(n, () => {
    t.validate._forceCompile();
  });
}
const At = /* @__PURE__ */ D({
  __name: "Slider",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = A("state"), { appContext: l } = M(), a = new he(l, o, t.id, t.meta), { bindings: i } = L(Object.keys(He.props), a.ui), u = j(t.meta, "readOnly"), s = j(t.meta, "minimum"), r = j(t.meta, "maximum"), f = j(t.meta, "multipleOf");
    St([s, r, f], o);
    const p = O(() => a.ui.value || {}), h = O({
      get() {
        return a.value;
      },
      set(d) {
        p.value.range ? a.value = d || [] : a.value = ke(d) ? d : void 0;
      }
    }), m = O(() => p.value.tipFormatter === null);
    function c(d) {
      const { tipFormatter: y } = p.value;
      return y ? y(d) : `${d}`;
    }
    function g(d) {
      var y, x;
      (x = (y = e(p)).change) == null || x.call(y, d);
    }
    function _(d) {
      var y, x;
      (x = (y = e(p)).afterChange) == null || x.call(y, d);
    }
    return (d, y) => {
      const x = w("a-slider");
      return b(), I(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          V(x, U(e(i), {
            disabled: e(u),
            min: e(s) || 0,
            max: e(r) || 100,
            step: e(f) || 1,
            tipFormatter: e(m) ? null : c,
            value: e(h),
            "onUpdate:value": y[0] || (y[0] = (C) => F(h) ? h.value = C : null),
            onChange: g,
            onAfterChange: _
          }), T({ _: 2 }, [
            e(p).slotNameOfMark ? {
              name: "mark",
              fn: v((C) => [
                $(d.$slots, e(p).slotNameOfMark, X(Z(C)))
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["disabled", "min", "max", "step", "tipFormatter", "value"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), Pt = /* @__PURE__ */ D({
  __name: "Rate",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = A("state"), { appContext: l } = M(), a = new he(l, o, t.id, t.meta), { bindings: i } = L(Object.keys(Ke.props), a.ui), u = j(t.meta, "readOnly"), s = O(() => a.ui.value || {}), r = O({
      get() {
        return a.value;
      },
      set(h) {
        a.value = h;
      }
    });
    function f(h) {
      var m, c;
      (c = (m = e(s)).change) == null || c.call(m, h);
    }
    function p(h) {
      var m, c;
      (c = (m = e(s)).hoverChange) == null || c.call(m, h);
    }
    return (h, m) => {
      const c = w("a-rate");
      return b(), I(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          V(c, U(e(i), {
            disabled: e(u),
            count: n.meta.maximum || 5,
            value: e(r),
            "onUpdate:value": m[0] || (m[0] = (g) => F(r) ? r.value = g : null),
            onChange: f,
            onHoverChange: p
          }), T({ _: 2 }, [
            e(s).slotNameOfCharacter ? {
              name: "character",
              fn: v(() => [
                $(h.$slots, e(s).slotNameOfCharacter)
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["disabled", "count", "value"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), Rt = /* @__PURE__ */ D({
  __name: "Tag",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = A("state"), { appContext: l } = M(), a = new he(l, o, t.id, t.meta), i = j(t.meta, "readOnly"), u = S([]), s = O(() => a.ui.value || {}), r = O({
      get() {
        return a.value;
      },
      set(m) {
        s.value.range ? a.value = m || [] : a.value = m;
      }
    });
    ie(() => e(a.meta).enum, h, { immediate: !0 });
    function f(m, c) {
      var g, _, d, y;
      m.disabled || (m.checked = c, p(), (_ = (g = e(s)).checkedChange) == null || _.call(g, c), (y = (d = e(s)).change) == null || y.call(d, ue(e(r))));
    }
    function p() {
      const m = e(u).filter((c) => c.checked).map((c) => c.value);
      r.value = m.length ? m : void 0;
    }
    function h(m) {
      let c = e(m);
      c == null || !Array.isArray(c) || c.length === 0 || (typeof c[0] != "object" && (c = c.map((g) => ({
        label: g,
        value: g
      }))), c.forEach((g) => {
        g.checked = (r.value || []).indexOf(g.value) > -1;
      }), c.forEach((g) => g.disabled = t.meta.readOnly), u.value = c);
    }
    return (m, c) => {
      const g = w("a-checkable-tag");
      return b(), I(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          (b(!0), B(te, null, Q(u.value, (_) => (b(), I(g, {
            key: _.value,
            class: se({ disabled: _.disabled || e(i) }),
            checked: _.checked,
            onChange: (d) => f(_, d)
          }, {
            default: v(() => [
              W("span", null, K(_.label), 1)
            ]),
            _: 2
          }, 1032, ["class", "checked", "onChange"]))), 128))
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
});
const Ft = /* @__PURE__ */ $e(Rt, [["__scopeId", "data-v-de1191cf"]]), Tt = /* @__PURE__ */ D({
  __name: "Cascader",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = A("state"), { appContext: l } = M(), a = new G(l, o, t.id, t.meta), { bindings: i } = L(Object.keys(qe.props), a.ui), u = j(t.meta, "readOnly"), s = O(() => a.ui.value || {}), r = O({
      get() {
        return a.value;
      },
      set(g) {
        a.value = g;
      }
    });
    function f(g, _) {
      var d, y;
      (y = (d = e(s)).change) == null || y.call(d, g, _);
    }
    function p(g) {
      var _, d;
      (d = (_ = e(s)).dropdownVisibleChange) == null || d.call(_, g);
    }
    function h(g) {
      var _, d;
      (d = (_ = e(s)).search) == null || d.call(_, g);
    }
    function m(g) {
      var _, d;
      (d = (_ = e(s)).blur) == null || d.call(_, g);
    }
    function c(g) {
      var _, d;
      (d = (_ = e(s)).focus) == null || d.call(_, g);
    }
    return (g, _) => {
      const d = w("a-cascader");
      return b(), I(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          V(d, U(e(i), {
            disabled: e(u),
            options: n.meta.enum,
            value: e(r),
            "onUpdate:value": _[0] || (_[0] = (y) => F(r) ? r.value = y : null),
            onChange: f,
            onDropdownVisibleChange: p,
            onSearch: h,
            onBlur: m,
            onFocus: c
          }), T({ _: 2 }, [
            e(s).slotNameOfDefault ? {
              name: "default",
              fn: v(() => [
                W("span", null, [
                  $(g.$slots, e(s).slotNameOfDefault)
                ])
              ]),
              key: "0"
            } : void 0,
            e(s).slotNameOfSuffixIcon ? {
              name: "suffixIcon",
              fn: v(() => [
                $(g.$slots, e(s).slotNameOfSuffixIcon)
              ]),
              key: "1"
            } : void 0,
            e(s).slotNameOfDisplayRender ? {
              name: "displayRender",
              fn: v((y) => [
                $(g.$slots, e(s).slotNameOfDisplayRender, X(Z(y)))
              ]),
              key: "2"
            } : void 0
          ]), 1040, ["disabled", "options", "value"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), Bt = /* @__PURE__ */ D({
  __name: "Radio",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = A("state"), { appContext: l } = M(), a = new G(l, o, t.id, t.meta), { bindings: i } = L(Object.keys(Ge.props), a.ui), u = j(t.meta, "readOnly"), s = O(() => a.ui.value || {}), r = O({
      get() {
        return a.value;
      },
      set(p) {
        a.value = p;
      }
    });
    function f() {
      s.value.change && s.value.change(e(r));
    }
    return (p, h) => {
      const m = w("a-radio-group");
      return b(), I(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          V(m, U({
            class: { "v__radio-vertical": e(s).direction === "vertical" }
          }, e(i), {
            value: e(r),
            "onUpdate:value": h[0] || (h[0] = (c) => F(r) ? r.value = c : null),
            disabled: e(u),
            onChange: f
          }), null, 16, ["class", "value", "disabled"])
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
}), Ut = /* @__PURE__ */ D({
  __name: "Select",
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = A("state"), { appContext: l } = M(), a = new G(l, o, t.id, t.meta), { bindings: i } = L(Object.keys(We.props), a.ui), u = j(t.meta, "readOnly"), s = O(() => a.ui.value || {}), r = O({
      get() {
        return a.value;
      },
      set(k) {
        a.value = k;
      }
    });
    function f(k, E) {
      e(s).change && e(s).change(k, E);
    }
    function p() {
      e(s).blur && e(s).blur();
    }
    function h(k, E) {
      e(s).deselect && e(s).deselect(k, E);
    }
    function m(k) {
      e(s).dropdownVisibleChange && e(s).dropdownVisibleChange(k);
    }
    function c() {
      e(s).focus && e(s).focus();
    }
    function g() {
      e(s).inputKeyDown && e(s).inputKeyDown();
    }
    function _() {
      e(s).mouseenter && e(s).mouseenter();
    }
    function d() {
      e(s).mouseleave && e(s).mouseleave();
    }
    function y() {
      e(s).popupScroll && e(s).popupScroll();
    }
    function x(k) {
      e(s).search && e(s).search(k);
    }
    function C(k, E) {
      e(s).select && e(s).select(k, E);
    }
    return (k, E) => {
      const P = w("a-select");
      return b(), I(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          V(P, U({
            value: e(r),
            "onUpdate:value": E[0] || (E[0] = (J) => F(r) ? r.value = J : null)
          }, e(i), {
            disabled: e(u),
            onBlur: p,
            onDeselect: h,
            onFocus: c,
            onInputKeydown: g,
            onMouseenter: _,
            onMouseleave: d,
            onPopupScroll: y,
            onSearch: x,
            onSelect: C,
            onDropdownVisibleChange: m,
            onChange: f
          }), T({
            default: v(() => [
              e(s).slotNameOfSelectDefault ? $(k.$slots, e(s).slotNameOfSelectDefault, { key: 0 }) : H("", !0)
            ]),
            _: 2
          }, [
            e(s).slotNameOfClearIcon ? {
              name: "clearIcon",
              fn: v(() => [
                $(k.$slots, e(s).slotNameOfClearIcon)
              ]),
              key: "0"
            } : void 0,
            e(s).slotNameOfDropdownRender ? {
              name: "dropdownRender",
              fn: v(() => [
                $(k.$slots, e(s).slotNameOfDropdownRender)
              ]),
              key: "1"
            } : void 0,
            e(s).slotNameOfMaxTagPlaceholder ? {
              name: "maxTagPlaceholder",
              fn: v(() => [
                $(k.$slots, e(s).slotNameOfMaxTagPlaceholder)
              ]),
              key: "2"
            } : void 0,
            e(s).slotNameOfMenuItemSelectedIcon ? {
              name: "menuItemSelectedIcon",
              fn: v(() => [
                $(k.$slots, e(s).slotNameOfMenuItemSelectedIcon)
              ]),
              key: "3"
            } : void 0,
            e(s).slotNameOfNotFoundContent ? {
              name: "notFoundContent",
              fn: v(() => [
                $(k.$slots, e(s).slotNameOfNotFoundContent)
              ]),
              key: "4"
            } : void 0,
            e(s).slotNameOfOption ? {
              name: "option",
              fn: v((J) => [
                $(k.$slots, e(s).slotNameOfOption, X(Z(J)))
              ]),
              key: "5"
            } : void 0,
            e(s).slotNameOfPlaceholder ? {
              name: "placeholder",
              fn: v(() => [
                $(k.$slots, e(s).slotNameOfPlaceholder)
              ]),
              key: "6"
            } : void 0,
            e(s).slotNameOfRemoveIcon ? {
              name: "removeIcon",
              fn: v(() => [
                $(k.$slots, e(s).slotNameOfRemoveIcon)
              ]),
              key: "7"
            } : void 0,
            e(s).slotNameOfSuffixIcon ? {
              name: "suffixIcon",
              fn: v(() => [
                $(k.$slots, e(s).slotNameOfSuffixIcon)
              ]),
              key: "8"
            } : void 0,
            e(s).slotNameOfTagRender ? {
              name: "tagRender",
              fn: v(() => [
                $(k.$slots, e(s).slotNameOfTagRender)
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
function R(n, t, o) {
  n.component(t, o);
}
function Lt(n) {
  R(n, "v-object", dt), R(n, "v-string", mt), R(n, "v-boolean", vt), R(n, "v-array", wt), R(n, "v-autocomplete", pt), R(n, "v-checkbox", ht), R(n, "v-date", gt), R(n, "v-number", ye), R(n, "v-integer", ye), R(n, "v-time", _t), R(n, "v-text", Mt), R(n, "v-radio", Bt), R(n, "v-textarea", Dt), R(n, "v-slider", At), R(n, "v-rate", Pt), R(n, "v-tag", Ft), R(n, "v-select", Ut), R(n, "v-cascader", Tt);
}
const zt = [ot, z];
function Ht(n) {
  zt.forEach((t) => {
    n.component(t.name, t);
  }), Lt(n);
}
const Kt = {
  installFormly: Ht
};
const qt = function(n, t) {
  if (n.config.globalProperties.emitter = Ve(), !t.lib || t.lib === "antdv")
    Kt.installFormly(n);
  else
    throw new Error("Unsupport lib");
  return n.config.globalProperties.$VFORMLY_OPTIONS = t, n;
}, Zt = {
  install: qt
};
export {
  Zt as default
};
