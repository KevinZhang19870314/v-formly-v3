var Ne = Object.defineProperty;
var Ee = (n, t, o) => t in n ? Ne(n, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[t] = o;
var E = (n, t, o) => (Ee(n, typeof t != "symbol" ? t + "" : t, o), o);
import Ve from "mitt";
import { defineComponent as w, ref as S, inject as P, computed as O, getCurrentInstance as D, openBlock as b, createElementBlock as B, normalizeStyle as be, unref as e, createBlock as N, resolveDynamicComponent as de, createSlots as T, renderList as Q, withCtx as v, renderSlot as $, normalizeProps as X, guardReactiveProps as Z, createCommentVNode as H, isRef as F, provide as je, watch as ie, toRef as M, onBeforeUnmount as me, resolveComponent as I, createVNode as j, normalizeClass as se, createTextVNode as Y, Fragment as te, toRaw as ue, createElementVNode as W, toDisplayString as K, mergeProps as U, nextTick as Me, onMounted as Oe } from "vue";
import De from "ajv";
import { Input as Se, Switch as Pe, AutoComplete as Ae, CheckboxGroup as Re, RangePicker as Fe, DatePicker as Te, TimeRangePicker as Be, TimePicker as Ue, InputNumber as Le, Textarea as ze, Slider as He, Rate as Ke, Cascader as qe, RadioGroup as Ge, Select as We } from "ant-design-vue";
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
const xe = "form-value-change", ne = "form-error-change", Qe = w({
  name: "v-formly-v3-item"
}), ve = /* @__PURE__ */ w({
  ...Qe,
  props: {
    id: null,
    show: { type: Boolean, default: !0 },
    meta: null
  },
  setup(n) {
    const t = n;
    let o = S(!0);
    const { slotsName: l } = fe(t.meta), a = P("state"), i = O(() => `v-${t.meta.ui && t.meta.ui.component || t.meta.type}`), u = O(() => a.layout);
    s();
    function s() {
      if (!t.meta.type)
        throw new Error(
          "Form item type must be one of these: number, string, boolean, array, object"
        );
      o.value = t.show, r(o.value, t.id);
      const { visibleIf: f } = Je(), { appContext: p } = D();
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
      e(o) ? (b(), N(de(e(i)), {
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
class Xe {
  constructor() {
    E(this, "_map", /* @__PURE__ */ new Map());
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
const Ze = Array.isArray, et = (n) => typeof n == "function", ke = (n) => typeof n == "number";
function pe() {
  const { appContext: n } = D(), t = n.config.globalProperties;
  return {
    appContext: n,
    globalProperties: t
  };
}
class tt {
  constructor() {
    E(this, "_formId", Ce(4));
    E(this, "_ignoreErrorIds", []);
    E(this, "_context");
    E(this, "_layout", S("horizontal"));
    E(this, "_ajvOptions", {
      allErrors: !0,
      strict: !1,
      loopEnum: 50
    });
    E(this, "_formData", S({}));
    E(this, "_meta", {});
    E(this, "_ui", {
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
    E(this, "_validate");
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
class at {
  constructor(t, o) {
    E(this, "state");
    E(this, "_ajv");
    E(this, "_validate");
    E(this, "appContext");
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
const nt = { class: "v__formly" }, ot = { name: "v-formly-v3" }, st = /* @__PURE__ */ w({
  ...ot,
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
    const u = new tt();
    je("state", u);
    const { slotsName: s } = fe(l.meta), { appContext: r } = D(), f = ae(r);
    h();
    const p = O(() => {
      const x = Object.assign({}, u.ui);
      return l.layout === "vertical" ? null : { span: x.spanControl, offset: x.spanLabel };
    });
    ie(
      () => l.modelValue,
      (x, C) => {
        JSON.stringify(x) !== JSON.stringify(C) && g(x);
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
      u.layout = M(l, "layout"), a = Object.assign({}, a, l.meta), u.meta = a, u.formData = Object.assign({}, l.modelValue), m(u.formData, l.meta.properties), u.context = new Xe(), u.validate = new at(r, u);
    }
    function m(x, C) {
      Object.keys(C).forEach((k) => {
        const V = C[k];
        if (V.type !== "null")
          switch (V.type) {
            case q.Object:
              x[k] = x[k] || {}, m(x[k], V.properties);
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
    async function _() {
      return await u.validate.runValidateForm();
    }
    function g(x) {
      const C = u.context.getContext("/");
      C && (C.value = x, o("update:modelValue", u.formData));
    }
    function d() {
      o("form-reset", ue(u.formData)), g({});
    }
    async function y() {
      i.value = !0;
      const x = await _();
      i.value = !1, o("form-submit", {
        valid: x,
        data: x ? ue(u.formData) : void 0
      });
    }
    return me(() => {
      f.all.clear();
    }), t({
      getContext: c,
      validate: _,
      reset: g,
      clearForm: d,
      submitForm: y
    }), (x, C) => {
      const k = I("a-button"), V = I("a-space"), A = I("a-form-item"), J = I("a-form");
      return b(), B("div", nt, [
        j(J, {
          class: se(["v", {
            v__inline: n.layout === "inline",
            v__horizontal: n.layout === "horizontal"
          }]),
          layout: n.layout
        }, {
          default: v(() => [
            j(ve, {
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
            n.button === "default" ? (b(), N(A, {
              key: 0,
              wrapperCol: e(p),
              class: "v__default-submit-button"
            }, {
              default: v(() => [
                j(V, null, {
                  default: v(() => [
                    j(k, {
                      type: "danger",
                      onClick: d
                    }, {
                      default: v(() => [
                        Y(" \u91CD\u7F6E ")
                      ]),
                      _: 1
                    }),
                    j(k, {
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
}), lt = { class: "v__label-text" }, it = {
  key: 0,
  class: "v__optional"
}, rt = ["innerHTML"], ut = {
  key: 0,
  class: "ant-form-item-explain-error"
}, ct = { name: "v-wrapper" }, z = /* @__PURE__ */ w({
  ...ct,
  props: {
    id: null,
    show: { type: Boolean },
    meta: null
  },
  setup(n) {
    const t = n, { globalProperties: o } = pe(), l = P("state"), a = l.context.getContext(t.id), i = O(() => Object.assign({}, l.ui, t.meta.ui)), u = O(() => Object.assign({}, l.ui, t.meta.ui).optionalHelp), s = O(() => l.layout.value === "vertical" || l.layout.value === "inline" ? void 0 : { span: i.value.spanLabel }), r = O(() => l.layout.value === "vertical" || l.layout.value === "inline" ? void 0 : { span: i.value.spanControl, offset: i.value.offsetControl || 0 }), f = O({
      get() {
        return a.error.value;
      },
      set(c) {
        a.error.value = c;
      }
    }), { appContext: p } = D(), h = ae(p);
    h.on(`${ne}-${l._formId}`, m), me(() => {
      h.off(`${ne}-${l._formId}`, m);
    });
    function m(c) {
      c.id === t.id && (f.value = c.error ? c.error.message : void 0);
    }
    return (c, _) => {
      const g = I("a-tooltip"), d = I("a-form-item");
      return b(), N(d, {
        labelCol: e(s),
        wrapperCol: e(r),
        required: e(i).showRequired,
        class: se({ "ant-form-item-has-error": e(f) })
      }, T({
        label: v(() => [
          W("span", lt, K(n.meta.title), 1),
          e(i).optional || e(u) ? (b(), B("span", it, [
            Y(K(e(i).optional) + " ", 1),
            e(u) ? (b(), N(g, {
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
                e(u).icon ? (b(), N(de(e(o).$antIcons[e(u).icon]), { key: 0 })) : H("", !0)
              ]),
              _: 1
            }, 8, ["title", "placement", "trigger", "overlayStyle", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName"])) : H("", !0)
          ])) : H("", !0)
        ]),
        default: v(() => [
          $(c.$slots, "default"),
          e(f) ? (b(), B("div", ut, K(e(f)), 1)) : H("", !0)
        ]),
        _: 2
      }, [
        n.meta.description ? {
          name: "extra",
          fn: v(() => [
            W("div", {
              innerHTML: n.meta.description
            }, null, 8, rt)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["labelCol", "wrapperCol", "required", "class"]);
    };
  }
});
class ee {
  constructor(t, o, l, a) {
    E(this, "id");
    E(this, "state");
    E(this, "meta", S({}));
    E(this, "type");
    E(this, "ui", S({}));
    E(this, "error", S(void 0));
    E(this, "_value", S());
    E(this, "_initMetaValue");
    E(this, "appContext");
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
class dt extends ee {
  constructor(o, l, a, i) {
    super(o, l, a, i);
    E(this, "childMetaPairs");
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
const mt = w({
  name: "v-object"
}), ft = /* @__PURE__ */ w({
  ...mt,
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, { slotsName: o } = fe(t.meta), l = P("state"), { appContext: a } = D(), i = new dt(a, l, t.id, t.meta), u = O(() => i.ui.value || {}), s = O(() => Object.assign({}, l.ui.grid, u.value.grid).gutter), r = O(() => l.layout.value);
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
      const _ = I("a-col"), g = I("a-row");
      return b(), N(g, { gutter: e(s) }, {
        default: v(() => [
          (b(!0), B(te, null, Q(e(h), (d, y) => (b(), N(_, {
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
              j(ve, {
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
    E(this, "open");
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
    n.indexOf(a) > -1 && (o.value[a] = M(t.value, a));
  }), { bindings: o };
}
const vt = w({
  name: "v-string"
}), pt = /* @__PURE__ */ w({
  ...vt,
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = P("state"), { appContext: l } = D(), a = new G(l, o, t.id, t.meta), { bindings: i } = L(Object.keys(Se.props), a.ui), u = M(t.meta, "readOnly"), s = M(t.meta, "maxLength"), r = O(() => a.ui.value || {}), f = O({
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
      const c = I("a-input");
      return b(), N(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          j(c, U(e(i), {
            defaultValue: n.meta.defaultValue,
            disabled: e(u),
            maxlength: e(s),
            value: e(f),
            "onUpdate:value": m[0] || (m[0] = (_) => F(f) ? f.value = _ : null),
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
class ht extends ee {
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
const _t = w({
  name: "v-boolean"
}), gt = /* @__PURE__ */ w({
  ..._t,
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = P("state"), { appContext: l } = D(), a = new ht(l, o, t.id, t.meta), { bindings: i } = L(Object.keys(Pe.props), a.ui), u = M(t.meta, "readOnly"), s = O(() => a.ui.value || {}), r = O({
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
      const m = I("a-switch");
      return b(), N(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          j(m, U({
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
}), yt = w({
  name: "v-autocomplete"
}), bt = /* @__PURE__ */ w({
  ...yt,
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = P("state"), { appContext: l } = D(), a = new G(l, o, t.id, t.meta), { bindings: i } = L(Object.keys(Ae.props), a.ui), u = M(t.meta, "readOnly"), s = O(() => a.ui.value || {}), r = O({
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
      const _ = I("a-auto-complete");
      return b(), N(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          j(_, U(e(i), {
            disabled: e(u),
            value: e(r),
            "onUpdate:value": c[0] || (c[0] = (g) => F(r) ? r.value = g : null),
            onChange: f,
            onSearch: p,
            onSelect: h
          }), T({ _: 2 }, [
            e(s).slotNameOfOption ? {
              name: "option",
              fn: v((g) => [
                $(m.$slots, e(s).slotNameOfOption, X(Z(g)))
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
}), Ot = w({
  name: "v-checkbox"
}), xt = /* @__PURE__ */ w({
  ...Ot,
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = P("state"), { appContext: l } = D(), a = new G(l, o, t.id, t.meta), { bindings: i } = L(Object.keys(Re.props), a.ui), u = M(t.meta, "readOnly"), s = O(() => a.ui.value || {}), r = O({
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
      const m = I("a-checkbox-group"), c = I("a-checkbox"), _ = I("a-col"), g = I("a-row");
      return b(), N(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          e(s).span ? (b(), N(m, {
            key: 1,
            value: e(r),
            "onUpdate:value": h[1] || (h[1] = (d) => F(r) ? r.value = d : null),
            disabled: n.meta.readOnly,
            onChange: f,
            class: "v__checkbox"
          }, {
            default: v(() => [
              j(g, null, {
                default: v(() => [
                  (b(!0), B(te, null, Q(n.meta.enum, (d, y) => (b(), N(_, {
                    class: "v__text-left",
                    span: e(s).span,
                    key: y
                  }, {
                    default: v(() => [
                      j(c, {
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
          }, 8, ["value", "disabled"])) : (b(), N(m, U({
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
}), Ct = w({
  name: "v-date"
}), kt = /* @__PURE__ */ w({
  ...Ct,
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = P("state"), { appContext: l } = D(), a = new G(l, o, t.id, t.meta);
    let i = {}, u = {};
    if (a.ui.value.type === "range") {
      const { bindings: c } = L(Object.keys(Fe.props), a.ui);
      i = c;
    } else {
      const { bindings: c } = L(Object.keys(Te.props), a.ui);
      u = c;
    }
    const s = M(t.meta, "readOnly"), r = O(() => a.ui.value || {}), f = O({
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
    function m(c, _, g) {
      r.value.calendarChange && r.value.calendarChange(c, _, g);
    }
    return (c, _) => {
      const g = I("a-range-picker"), d = I("a-date-picker");
      return b(), N(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          e(r).type === "range" ? (b(), N(g, U({
            key: 0,
            class: "v__date",
            value: e(f),
            "onUpdate:value": _[0] || (_[0] = (y) => F(f) ? f.value = y : null)
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
          e(r).type !== "range" ? (b(), N(d, U({
            key: 1,
            class: "v__date",
            value: e(f),
            "onUpdate:value": _[1] || (_[1] = (y) => F(f) ? f.value = y : null)
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
}), $t = w({
  name: "v-time"
}), wt = /* @__PURE__ */ w({
  ...$t,
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = P("state"), { appContext: l } = D(), a = new G(l, o, t.id, t.meta);
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
    const s = M(t.meta, "readOnly"), r = O(() => a.ui.value || {}), f = O({
      get() {
        return a.value;
      },
      set(c) {
        a.value = c;
      }
    });
    function p(c, _) {
      r.value.change && r.value.change(c, _);
    }
    function h(c) {
      r.value.ok && r.value.ok(c);
    }
    function m(c, _, g) {
      r.value.calendarChange && r.value.calendarChange(c, _, g);
    }
    return (c, _) => {
      const g = I("a-time-range-picker"), d = I("a-time-picker");
      return b(), N(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          e(r).type === "range" ? (b(), N(g, U({
            key: 0,
            class: "v__time",
            value: e(f),
            "onUpdate:value": _[0] || (_[0] = (y) => F(f) ? f.value = y : null),
            open: e(r).open,
            "onUpdate:open": _[1] || (_[1] = (y) => e(r).open = y)
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
          ]), 1040, ["value", "open", "disabled"])) : (b(), N(d, U({
            key: 1,
            class: "v__time",
            value: e(f),
            "onUpdate:value": _[2] || (_[2] = (y) => F(f) ? f.value = y : null),
            open: e(r).open,
            "onUpdate:open": _[3] || (_[3] = (y) => e(r).open = y)
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
}), It = w({
  name: "v-number"
}), ye = /* @__PURE__ */ w({
  ...It,
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = P("state"), { appContext: l } = D(), a = new G(l, o, t.id, t.meta), { bindings: i } = L(Object.keys(Le.props), a.ui), u = M(t.meta, "readOnly"), s = O(() => a.ui.value || {}), r = O({
      get() {
        return a.value;
      },
      set(d) {
        a.value = d;
      }
    });
    let f = S(-1 / 0), p = S(1 / 0), h = S(1), m = S((d) => d), c = S((d) => d);
    _();
    function _() {
      const {
        minimum: d,
        exclusiveMinimum: y,
        maximum: x,
        exclusiveMaximum: C,
        multipleOf: k,
        type: V
      } = a.meta.value;
      h.value = k || 1, typeof d < "u" && (f.value = y ? d + h.value : d), typeof x < "u" && (p.value = C ? x - h.value : x), V === "integer" && (f.value = Math.trunc(f.value), p.value = Math.trunc(p.value), h.value = Math.trunc(h.value)), s.value.prefix != null && (s.value.formatter = (A) => A == null ? "" : `${s.value.prefix} ${A}`, s.value.parser = (A) => A.replace(`${s.value.prefix} `, "")), s.value.unit != null && (s.value.formatter = (A) => A == null ? "" : `${A} ${s.value.unit}`, s.value.parser = (A) => A.replace(` ${s.value.unit}`, "")), s.value.formatter && (m.value = s.value.formatter), s.value.parser && (c.value = s.value.parser);
    }
    function g(d) {
      r.value = a.meta.value.type === q.Integer ? Math.floor(d) : d, s.value.change && s.value.change(e(r));
    }
    return (d, y) => {
      const x = I("a-input-number");
      return b(), N(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          j(x, U({
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
            onChange: y[1] || (y[1] = (C) => g(C))
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
class Nt extends ee {
  constructor(o, l, a, i) {
    super(o, l, a, i);
    E(this, "ids", S([]));
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
          p.childMetaPairs.forEach((c, _) => {
            c.key = m[_].key;
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
const Et = { class: "v__optional" }, Vt = { class: "v__array-add" }, jt = { class: "ant-form-item-control" }, Mt = ["onClick"], Dt = {
  key: 0,
  class: "ant-form-item-extra"
}, St = {
  key: 1,
  class: "ant-form-item-explain-error"
}, Pt = w({
  name: "v-array"
}), At = /* @__PURE__ */ w({
  ...Pt,
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = P("state"), { globalProperties: l } = pe(), { appContext: a } = D(), i = new Nt(a, o, t.id, t.meta), u = ae(a), s = O(() => e(i.ui) || {}), r = O(() => Object.assign({}, o.ui, t.meta.ui).optionalHelp);
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
    }), p = M(t.meta, "readOnly"), h = O(() => e(p) || t.meta.maxItems != null && e(i.ids).length >= t.meta.maxItems), m = O(() => {
      const C = t.meta.minItems;
      return !(e(p) || C != null && e(i.ids).length <= C);
    }), c = S(8), _ = S("");
    Oe(() => {
      var A;
      u.on(`${ne}-${o._formId}`, g);
      const { grid: C, removable: k, removeTitle: V } = e(s);
      c.value = (A = C == null ? void 0 : C.arraySpan) != null ? A : 8, _.value = k === !1 ? null : V;
    }), me(() => {
      u.off(`${ne}-${o._formId}`, g);
    });
    function g(C) {
      C.id === t.id && (f.value = C.error ? C.error.message : void 0);
    }
    function d(C) {
      return `${t.id}/${C}`;
    }
    function y() {
      var k, V;
      const C = i.add();
      (V = (k = e(s)).add) == null || V.call(k, C);
    }
    function x(C) {
      var k, V;
      i.remove(C), (V = (k = e(s)).remove) == null || V.call(k, C);
    }
    return (C, k) => {
      const V = I("a-tooltip"), A = I("a-button"), J = I("a-col"), le = I("delete-outlined"), re = I("a-card"), _e = I("a-row"), we = I("a-form-item");
      return b(), N(we, null, {
        default: v(() => [
          j(_e, null, {
            default: v(() => [
              n.meta.title ? (b(), N(J, {
                key: 0,
                class: "ant-form-item-label",
                span: e(s).spanLabel
              }, {
                default: v(() => [
                  W("label", {
                    class: se({ "ant-form-item-required": e(s).showRequired })
                  }, [
                    Y(K(n.meta.title) + " ", 1),
                    W("span", Et, [
                      Y(K(e(s).optional) + " ", 1),
                      e(r) ? (b(), N(V, {
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
                          e(r).icon ? (b(), N(de(e(l).$antIcons[e(r).icon]), { key: 0 })) : H("", !0)
                        ]),
                        _: 1
                      }, 8, ["title", "placement", "trigger", "overlayStyle", "overlayClassName", "mouseEnterDelay", "mouseLeaveDelay"])) : H("", !0)
                    ])
                  ], 2),
                  W("div", Vt, [
                    j(A, {
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
              j(J, {
                class: "ant-form-item-control-wrapper",
                span: e(s).spanControl,
                offset: e(s).offsetControl
              }, {
                default: v(() => [
                  W("div", jt, [
                    j(_e, { class: "v__array-container" }, {
                      default: v(() => [
                        (b(!0), B(te, null, Q(e(i).ids.value, (Ie, ge) => (b(), N(J, {
                          key: Ie.key,
                          span: c.value,
                          class: "v__array-item"
                        }, {
                          default: v(() => [
                            j(re, null, {
                              default: v(() => [
                                j(ve, {
                                  id: d(ge),
                                  meta: n.meta.items
                                }, null, 8, ["id", "meta"]),
                                e(m) ? (b(), B("span", {
                                  key: 0,
                                  class: "v__array-remove",
                                  onClick: (da) => x(ge)
                                }, [
                                  j(le)
                                ], 8, Mt)) : H("", !0)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["span"]))), 128))
                      ]),
                      _: 1
                    }),
                    n.meta.description ? (b(), B("div", Dt, K(n.meta.description), 1)) : H("", !0),
                    e(f) ? (b(), B("div", St, K(e(f)), 1)) : H("", !0)
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
}), Rt = { class: "v__label-text" }, Ft = ["innerHTML"], Tt = ["textContent"], Bt = ["innerHTML"], Ut = w({
  name: "v-text"
}), Lt = /* @__PURE__ */ w({
  ...Ut,
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = P("state"), { appContext: l } = D(), a = new G(l, o, t.id, t.meta), i = O(() => a.ui.value || {}), u = O(() => o.layout.value === "vertical" || o.layout.value === "inline" ? void 0 : { span: i.value.spanLabel }), s = O(() => o.layout.value === "vertical" || o.layout.value === "inline" ? void 0 : { span: i.value.spanControl, offset: i.value.offsetControl || 0 }), r = O(
      () => et(e(i).text) ? e(i).text() : e(i).text
    );
    return (f, p) => {
      const h = I("a-form-item");
      return b(), B("div", null, [
        j(h, {
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
              }, null, 8, Ft)) : (b(), B("span", {
                key: 1,
                textContent: K(e(r)),
                class: "v__content-text"
              }, null, 8, Tt))
            ], 64))
          ]),
          _: 2
        }, [
          n.meta.title ? {
            name: "label",
            fn: v(() => [
              W("span", Rt, K(n.meta.title), 1)
            ]),
            key: "0"
          } : void 0,
          n.meta.description ? {
            name: "extra",
            fn: v(() => [
              W("div", {
                innerHTML: n.meta.description
              }, null, 8, Bt)
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
}, zt = /* @__PURE__ */ $e(Lt, [["__scopeId", "data-v-5a8811dd"]]), Ht = w({
  name: "v-textarea"
}), Kt = /* @__PURE__ */ w({
  ...Ht,
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = P("state"), { appContext: l } = D(), a = new G(l, o, t.id, t.meta), { bindings: i } = L(Object.keys(ze.props), a.ui), u = M(t.meta, "readOnly"), s = M(t.meta, "maxLength"), r = O(() => a.ui.value || {}), f = O({
      get() {
        return a.value;
      },
      set(g) {
        a.value = g;
      }
    }), p = S(!0);
    Oe(() => {
      e(r).autoSize != null && (p.value = e(r).autoSize);
    });
    function h() {
      var g, d;
      (d = (g = e(r)).change) == null || d.call(g, e(f));
    }
    function m(g) {
      var d, y;
      (y = (d = e(r)).focus) == null || y.call(d, g);
    }
    function c(g) {
      var d, y;
      (y = (d = e(r)).blur) == null || y.call(d, g);
    }
    function _(g) {
      var d, y;
      (y = (d = e(r)).pressEnter) == null || y.call(d, g);
    }
    return (g, d) => {
      const y = I("a-textarea");
      return b(), N(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          j(y, U(e(i), {
            autoSize: p.value,
            defaultValue: n.meta.defaultValue,
            disabled: e(u),
            maxlength: e(s),
            value: e(f),
            "onUpdate:value": d[0] || (d[0] = (x) => F(f) ? f.value = x : null),
            onChange: h,
            onFocus: m,
            onBlur: c,
            onPressEnter: _
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
        this._value.value = Ze(t) || ke(t) ? t : void 0;
        break;
      default:
        this._value.value = t || void 0;
        break;
    }
  }
}
function qt(n, t) {
  ie(n, () => {
    t.validate._forceCompile();
  });
}
const Gt = w({
  name: "v-slider"
}), Wt = /* @__PURE__ */ w({
  ...Gt,
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = P("state"), { appContext: l } = D(), a = new he(l, o, t.id, t.meta), { bindings: i } = L(Object.keys(He.props), a.ui), u = M(t.meta, "readOnly"), s = M(t.meta, "minimum"), r = M(t.meta, "maximum"), f = M(t.meta, "multipleOf");
    qt([s, r, f], o);
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
    function _(d) {
      var y, x;
      (x = (y = e(p)).change) == null || x.call(y, d);
    }
    function g(d) {
      var y, x;
      (x = (y = e(p)).afterChange) == null || x.call(y, d);
    }
    return (d, y) => {
      const x = I("a-slider");
      return b(), N(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          j(x, U(e(i), {
            disabled: e(u),
            min: e(s) || 0,
            max: e(r) || 100,
            step: e(f) || 1,
            tipFormatter: e(m) ? null : c,
            value: e(h),
            "onUpdate:value": y[0] || (y[0] = (C) => F(h) ? h.value = C : null),
            onChange: _,
            onAfterChange: g
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
}), Jt = w({
  name: "v-rate"
}), Yt = /* @__PURE__ */ w({
  ...Jt,
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = P("state"), { appContext: l } = D(), a = new he(l, o, t.id, t.meta), { bindings: i } = L(Object.keys(Ke.props), a.ui), u = M(t.meta, "readOnly"), s = O(() => a.ui.value || {}), r = O({
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
      const c = I("a-rate");
      return b(), N(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          j(c, U(e(i), {
            disabled: e(u),
            count: n.meta.maximum || 5,
            value: e(r),
            "onUpdate:value": m[0] || (m[0] = (_) => F(r) ? r.value = _ : null),
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
}), Qt = w({
  name: "v-tag"
}), Xt = /* @__PURE__ */ w({
  ...Qt,
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = P("state"), { appContext: l } = D(), a = new he(l, o, t.id, t.meta), i = M(t.meta, "readOnly"), u = S([]), s = O(() => a.ui.value || {}), r = O({
      get() {
        return a.value;
      },
      set(m) {
        s.value.range ? a.value = m || [] : a.value = m;
      }
    });
    ie(() => e(a.meta).enum, h, { immediate: !0 });
    function f(m, c) {
      var _, g, d, y;
      m.disabled || (m.checked = c, p(), (g = (_ = e(s)).checkedChange) == null || g.call(_, c), (y = (d = e(s)).change) == null || y.call(d, ue(e(r))));
    }
    function p() {
      const m = e(u).filter((c) => c.checked).map((c) => c.value);
      r.value = m.length ? m : void 0;
    }
    function h(m) {
      let c = e(m);
      c == null || !Array.isArray(c) || c.length === 0 || (typeof c[0] != "object" && (c = c.map((_) => ({
        label: _,
        value: _
      }))), c.forEach((_) => {
        _.checked = (r.value || []).indexOf(_.value) > -1;
      }), c.forEach((_) => _.disabled = t.meta.readOnly), u.value = c);
    }
    return (m, c) => {
      const _ = I("a-checkable-tag");
      return b(), N(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          (b(!0), B(te, null, Q(u.value, (g) => (b(), N(_, {
            key: g.value,
            class: se({ disabled: g.disabled || e(i) }),
            checked: g.checked,
            onChange: (d) => f(g, d)
          }, {
            default: v(() => [
              W("span", null, K(g.label), 1)
            ]),
            _: 2
          }, 1032, ["class", "checked", "onChange"]))), 128))
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
});
const Zt = /* @__PURE__ */ $e(Xt, [["__scopeId", "data-v-11d9e5f4"]]), ea = w({
  name: "v-cascader"
}), ta = /* @__PURE__ */ w({
  ...ea,
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = P("state"), { appContext: l } = D(), a = new G(l, o, t.id, t.meta), { bindings: i } = L(Object.keys(qe.props), a.ui), u = M(t.meta, "readOnly"), s = O(() => a.ui.value || {}), r = O({
      get() {
        return a.value;
      },
      set(_) {
        a.value = _;
      }
    });
    function f(_, g) {
      var d, y;
      (y = (d = e(s)).change) == null || y.call(d, _, g);
    }
    function p(_) {
      var g, d;
      (d = (g = e(s)).dropdownVisibleChange) == null || d.call(g, _);
    }
    function h(_) {
      var g, d;
      (d = (g = e(s)).search) == null || d.call(g, _);
    }
    function m(_) {
      var g, d;
      (d = (g = e(s)).blur) == null || d.call(g, _);
    }
    function c(_) {
      var g, d;
      (d = (g = e(s)).focus) == null || d.call(g, _);
    }
    return (_, g) => {
      const d = I("a-cascader");
      return b(), N(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          j(d, U(e(i), {
            disabled: e(u),
            options: n.meta.enum,
            value: e(r),
            "onUpdate:value": g[0] || (g[0] = (y) => F(r) ? r.value = y : null),
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
                  $(_.$slots, e(s).slotNameOfDefault)
                ])
              ]),
              key: "0"
            } : void 0,
            e(s).slotNameOfSuffixIcon ? {
              name: "suffixIcon",
              fn: v(() => [
                $(_.$slots, e(s).slotNameOfSuffixIcon)
              ]),
              key: "1"
            } : void 0,
            e(s).slotNameOfDisplayRender ? {
              name: "displayRender",
              fn: v((y) => [
                $(_.$slots, e(s).slotNameOfDisplayRender, X(Z(y)))
              ]),
              key: "2"
            } : void 0
          ]), 1040, ["disabled", "options", "value"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), aa = w({
  name: "v-radio"
}), na = /* @__PURE__ */ w({
  ...aa,
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = P("state"), { appContext: l } = D(), a = new G(l, o, t.id, t.meta), { bindings: i } = L(Object.keys(Ge.props), a.ui), u = M(t.meta, "readOnly"), s = O(() => a.ui.value || {}), r = O({
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
      const m = I("a-radio-group");
      return b(), N(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          j(m, U({
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
}), oa = w({
  name: "v-select"
}), sa = /* @__PURE__ */ w({
  ...oa,
  props: {
    id: null,
    meta: null
  },
  setup(n) {
    const t = n, o = P("state"), { appContext: l } = D(), a = new G(l, o, t.id, t.meta), { bindings: i } = L(Object.keys(We.props), a.ui), u = M(t.meta, "readOnly"), s = O(() => a.ui.value || {}), r = O({
      get() {
        return a.value;
      },
      set(k) {
        a.value = k;
      }
    });
    function f(k, V) {
      e(s).change && e(s).change(k, V);
    }
    function p() {
      e(s).blur && e(s).blur();
    }
    function h(k, V) {
      e(s).deselect && e(s).deselect(k, V);
    }
    function m(k) {
      e(s).dropdownVisibleChange && e(s).dropdownVisibleChange(k);
    }
    function c() {
      e(s).focus && e(s).focus();
    }
    function _() {
      e(s).inputKeyDown && e(s).inputKeyDown();
    }
    function g() {
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
    function C(k, V) {
      e(s).select && e(s).select(k, V);
    }
    return (k, V) => {
      const A = I("a-select");
      return b(), N(z, {
        id: n.id,
        meta: n.meta
      }, {
        default: v(() => [
          j(A, U({
            value: e(r),
            "onUpdate:value": V[0] || (V[0] = (J) => F(r) ? r.value = J : null)
          }, e(i), {
            disabled: e(u),
            onBlur: p,
            onDeselect: h,
            onFocus: c,
            onInputKeydown: _,
            onMouseenter: g,
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
function la(n) {
  R(n, "v-object", ft), R(n, "v-string", pt), R(n, "v-boolean", gt), R(n, "v-array", At), R(n, "v-autocomplete", bt), R(n, "v-checkbox", xt), R(n, "v-date", kt), R(n, "v-number", ye), R(n, "v-integer", ye), R(n, "v-time", wt), R(n, "v-text", zt), R(n, "v-radio", na), R(n, "v-textarea", Kt), R(n, "v-slider", Wt), R(n, "v-rate", Yt), R(n, "v-tag", Zt), R(n, "v-select", sa), R(n, "v-cascader", ta);
}
const ia = [st, z];
function ra(n) {
  ia.forEach((t) => {
    n.component(t.name, t);
  }), la(n);
}
const ua = {
  installFormly: ra
};
const ca = function(n, t) {
  if (n.config.globalProperties.emitter = Ve(), !t.lib || t.lib === "antdv")
    ua.installFormly(n);
  else
    throw new Error("Unsupport lib");
  return n.config.globalProperties.$VFORMLY_OPTIONS = t, n;
}, _a = { install: ca };
export {
  ee as BaseMeta,
  xe as FORM_VALUE_CHANGE,
  _a as default,
  ra as installFormly,
  R as registerFormComponent
};
