var Se = Object.defineProperty;
var Ue = (a, e, s) => e in a ? Se(a, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : a[e] = s;
var $ = (a, e, s) => (Ue(a, typeof e != "symbol" ? e + "" : e, s), s);
import Be from "mitt";
import { defineComponent as k, ref as z, inject as D, computed as x, getCurrentInstance as M, openBlock as b, createElementBlock as P, normalizeStyle as Me, unref as t, createBlock as C, resolveDynamicComponent as fe, createSlots as B, renderList as L, withCtx as p, renderSlot as w, normalizeProps as Y, guardReactiveProps as Q, createCommentVNode as J, isRef as R, provide as He, watch as ie, toRef as j, onBeforeUnmount as ve, resolveComponent as I, createVNode as E, normalizeClass as se, createTextVNode as K, Fragment as G, toRaw as de, createElementVNode as X, toDisplayString as H, mergeProps as F, nextTick as Le, onMounted as qe } from "vue";
import Ge from "ajv";
import { ElInput as ye, ElSwitch as xe, ElAutocomplete as Oe, ElCheckboxGroup as ke, ElCheckbox as ce, ElDatePicker as Ce, ElTimePicker as Ve, ElInputNumber as $e, ElSlider as Ee, ElRate as we, ElCascader as je, ElCascaderPanel as Ie, ElRadioGroup as Ne, ElSelect as Pe } from "element-plus";
function te(a) {
  return a.config.globalProperties.emitter;
}
var q = /* @__PURE__ */ ((a) => (a.Object = "object", a.Array = "array", a.Boolean = "boolean", a.Integer = "integer", a))(q || {});
function pe(a) {
  const e = [], s = "slotName";
  return a && !a.type && (a.type = q.Object), me(a, e, s), { slotsName: e };
}
function me(a, e, s) {
  switch (a.type) {
    case q.Object:
      Object.keys(a.properties).forEach((l) => {
        const n = a.properties[l];
        me(n, e, s);
      });
      break;
    case q.Array:
      Object.keys(a.items.properties).forEach((l) => {
        const n = a.items.properties[l];
        me(n, e, s);
      });
      break;
    default:
      if (a.ui) {
        const l = Object.keys(a.ui).filter(
          (n) => n.startsWith(s)
        );
        l && l.length > 0 && l.forEach((n) => {
          e.push(a.ui[n]);
        });
      }
      break;
  }
}
function Ke() {
  return { visibleIf: We };
}
function We(a, e, s, l) {
  if (!e.ui || !e.ui.visibleIf)
    return s;
  const n = Object.keys(e.ui.visibleIf)[0], o = e.ui.visibleIf[n];
  return l = l || {}, typeof o != "function" || n !== l.id ? s : o.call(null, a, l.id, l.value);
}
const De = "form-value-change", ne = "form-error-change", Je = k({
  name: "v-formly-v3-item"
}), he = /* @__PURE__ */ k({
  ...Je,
  props: {
    id: null,
    show: { type: Boolean, default: !0 },
    meta: null
  },
  setup(a) {
    const e = a;
    let s = z(!0);
    const { slotsName: l } = pe(e.meta), n = D("state"), o = x(() => `v-${e.meta.ui && e.meta.ui.component || e.meta.type}`), r = x(() => n.layout);
    i();
    function i() {
      if (!e.meta.type)
        throw new Error(
          "Form item type must be one of these: number, string, boolean, array, object"
        );
      s.value = e.show, c(s.value, e.id);
      const { visibleIf: _ } = Ke(), { appContext: u } = M();
      te(u).on(`${De}-${n._formId}`, (m) => {
        let f = _(n.context, e.meta, s.value, {
          id: m.id,
          value: m.value
        });
        f !== s.value && (s.value = f, c(s.value, e.id));
      });
    }
    function c(_, u) {
      _ ? n._ignoreErrorIds = n._ignoreErrorIds.filter((d) => d !== u) : n._ignoreErrorIds.indexOf(u) === -1 && n._ignoreErrorIds.push(u);
    }
    return (_, u) => (b(), P("div", {
      style: Me({ display: t(r) === "inline" ? "inline-block" : "block" })
    }, [
      t(s) ? (b(), C(fe(t(o)), {
        key: 0,
        id: a.id,
        meta: a.meta
      }, B({ _: 2 }, [
        L(t(l), (d) => ({
          name: d,
          fn: p((m) => [
            w(_.$slots, d, Y(Q({ ...m })))
          ])
        }))
      ]), 1032, ["id", "meta"])) : J("", !0)
    ], 4));
  }
});
class Ye {
  constructor() {
    $(this, "_map", /* @__PURE__ */ new Map());
  }
  addContext(e, s) {
    this._map.set(e, s);
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
function Ae(a = 8, e = 10) {
  const s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), l = e || s.length, n = [];
  if (a)
    for (let o = 0; o < a; o++)
      n[o] = s[0 | Math.random() * l];
  else {
    let o;
    n[8] = n[13] = n[18] = n[23] = "-", n[14] = "4";
    for (let r = 0; r < 36; r++)
      n[r] || (o = 0 | Math.random() * 16, n[r] = s[r == 19 ? o & 3 | 8 : o]);
  }
  return n.join("");
}
function ae(a) {
  if (a === void 0)
    return;
  if (a === null)
    return null;
  const e = Object.assign({}, a);
  return Object.keys(e).forEach(
    (s) => e[s] = typeof a[s] == "object" ? ae(a[s]) : a[s]
  ), Array.isArray(a) ? (e.length = a.length, Array.from(e)) : e;
}
const Qe = Array.isArray, Xe = (a) => typeof a == "function", Re = (a) => typeof a == "number";
function _e() {
  const { appContext: a } = M(), e = a.config.globalProperties;
  return {
    appContext: a,
    globalProperties: e
  };
}
class Ze {
  constructor() {
    $(this, "_formId", Ae(4));
    $(this, "_ignoreErrorIds", []);
    $(this, "_context");
    $(this, "_layout", z("horizontal"));
    $(this, "_ajvOptions", {
      allErrors: !0,
      strict: !1,
      loopEnum: 50
    });
    $(this, "_formData", z({}));
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
  updateObjProp(e, s, l) {
    const [n, ...o] = s.split("/").filter((r) => r);
    o.length ? this.updateObjProp(e[n], o.join("/"), l) : e && (e[n] = l);
  }
  _applyUseOptions() {
    const { globalProperties: e } = _e(), s = e.$VFORMLY_OPTIONS;
    !s || typeof s != "object" || (this.ui = s.ui);
  }
}
class et {
  constructor(e, s) {
    $(this, "state");
    $(this, "_ajv");
    $(this, "_validate");
    $(this, "appContext");
    this.state = s, this._ajv = new Ge(s.ajvOptions), this._validate = null, this.appContext = e;
  }
  async runValidateForm() {
    const { valid: e, errors: s } = this._isAjvValid(), n = this.state.context.getContexts().values();
    let o = !0;
    for (const r of n)
      o = await this._validation(r, e, s) && o;
    return o;
  }
  async runValidationFormItem(e) {
    const { valid: s, errors: l } = this._isAjvValid();
    return await this._validation(e, s, l);
  }
  _ajvValidate(e) {
    if (this._validate)
      return this._validate;
    const s = ae(e);
    return this._replaceReactiveToRawData(s), this._validate = this._ajv.compile(s), this._validate;
  }
  _forceCompile() {
    const e = ae(this.state.meta);
    this._replaceReactiveToRawData(e), this._validate = this._ajv.compile(e);
  }
  _replaceReactiveToRawData(e) {
    var n;
    let s, l;
    switch (e.type) {
      case q.Object:
        s = Object.values(e.properties), s.forEach((o) => {
          this._replaceReactiveToRawData(o);
        });
        break;
      case q.Array:
        l = Object.keys(e), l.forEach((o) => {
          R(e[o]) && (e[o] = e[o]._value);
        }), s = Object.values((n = e.items) == null ? void 0 : n.properties), s.forEach((o) => {
          this._replaceReactiveToRawData(o);
        });
        break;
      default:
        l = Object.keys(e), l.forEach((o) => {
          R(e[o]) && (e[o] = e[o]._value);
        });
        break;
    }
  }
  _getAjvError(e, s) {
    let l;
    for (let n = 0; n < s.length; n++) {
      const o = s[n], r = this._getId(o);
      if (e === r) {
        l = o;
        break;
      }
    }
    return l;
  }
  _isAjvValid() {
    const e = this._ajvValidate(this.state.meta);
    return { valid: e(this.state.formData || {}), errors: e.errors };
  }
  async _validation(e, s, l) {
    let n = [];
    const o = `${ne}-${this.state._formId}`, r = te(this.appContext);
    if (s)
      return r.emit(o, {
        id: e.id,
        error: void 0
      }), !0;
    {
      const i = this._getCustomError(e), c = await this._getCustomAsyncError(e), _ = [...i, ...c];
      this._replaceWithDefaultErrors(e, l), this._replaceWithCustomErrors(e.id, l, _);
      const u = this.state.ui.ingoreKeywords || [];
      n = l.filter(
        (m) => u.indexOf(m.keyword) === -1
      ), n = this._removeIgnoreErrors(n);
      const d = this._getAjvError(e.id, n);
      return r.emit(o, {
        id: e.id,
        error: d
      }), !d;
    }
  }
  _getCustomError(e) {
    var l, n;
    const s = (n = (l = e.ui) == null ? void 0 : l.value) == null ? void 0 : n.validator;
    return s ? s(e.value) : [];
  }
  async _getCustomAsyncError(e) {
    var l, n;
    const s = (n = (l = e.ui) == null ? void 0 : l.value) == null ? void 0 : n.validatorAsync;
    return s ? await s(e.value) : [];
  }
  _replaceWithDefaultErrors(e, s) {
    var r, i;
    if (!s || s.length === 0)
      return;
    const l = ((i = (r = e.ui) == null ? void 0 : r.value) == null ? void 0 : i.errors) || {}, n = Object.assign({}, this.state.ui.errors, l), o = Object.keys(n);
    o && o.length > 0 && s.forEach((c) => {
      o.indexOf(c.keyword) > -1 && (c.message = n[c.keyword]);
    });
  }
  _replaceWithCustomErrors(e, s, l) {
    l.forEach((n) => {
      const o = s.find(
        (r) => r.keyword === n.keyword && this._getId(r) === e
      );
      o && (o.message = n.message);
    });
  }
  _removeIgnoreErrors(e) {
    const s = this.state._ignoreErrorIds;
    return !s || s.length === 0 ? e : e.filter((n) => s.indexOf(this._getId(n)) === -1);
  }
  _getId(e) {
    return e.params && e.params.missingProperty ? `${e.instancePath ? e.instancePath : ""}/${e.params.missingProperty}` : `${e.instancePath}`;
  }
}
const tt = { class: "v__formly" }, nt = { name: "v-formly-v3" }, at = /* @__PURE__ */ k({
  ...nt,
  props: {
    modelValue: null,
    layout: { default: "horizontal" },
    button: null,
    meta: null
  },
  emits: ["update:modelValue", "form-reset", "form-submit"],
  setup(a, { expose: e, emit: s }) {
    const l = a;
    if (!l.meta || typeof l.meta.properties > "u")
      throw new Error("Invalid Schema");
    let n = { type: q.Object }, o = z(!1);
    const r = new Ze();
    He("state", r);
    const { slotsName: i } = pe(l.meta), { appContext: c } = M(), _ = te(c);
    d();
    const u = x(() => l.layout === "inline");
    ie(
      () => l.modelValue,
      (h, v) => {
        JSON.stringify(h) !== JSON.stringify(v) && y(h);
      },
      {
        deep: !1
      }
    ), ie(
      () => r.formData,
      (h, v) => {
        s("update:modelValue", h);
      },
      {
        deep: !0
      }
    );
    function d() {
      r.layout = j(l, "layout"), n = Object.assign({}, n, l.meta), r.meta = n, r.formData = Object.assign({}, l.modelValue), m(r.formData, l.meta.properties), r.context = new Ye(), r.validate = new et(c, r);
    }
    function m(h, v) {
      Object.keys(v).forEach((N) => {
        const T = v[N];
        if (T.type !== "null")
          switch (T.type) {
            case q.Object:
              h[N] = h[N] || {}, m(h[N], T.properties);
              break;
            case q.Array:
              h[N] = h[N] || [];
              break;
            case q.Boolean:
              break;
            default:
              h[N] = h[N] || void 0;
              break;
          }
      });
    }
    function f(h) {
      return r.context.getContext(h);
    }
    async function g() {
      return await r.validate.runValidateForm();
    }
    function y(h) {
      const v = r.context.getContext("/");
      v && (v.value = h, s("update:modelValue", r.formData));
    }
    function O() {
      s("form-reset", de(r.formData)), y({});
    }
    async function V() {
      o.value = !0;
      const h = await g();
      o.value = !1, s("form-submit", {
        valid: h,
        data: h ? de(r.formData) : void 0
      });
    }
    return ve(() => {
      _.all.clear();
    }), e({
      getContext: f,
      validate: g,
      reset: y,
      clearForm: O,
      submitForm: V
    }), (h, v) => {
      const N = I("el-button"), T = I("el-space"), ee = I("el-form-item"), le = I("el-form");
      return b(), P("div", tt, [
        E(le, {
          class: se(["v", {
            v__inline: t(u),
            v__horizontal: a.layout === "horizontal"
          }]),
          inline: t(u),
          "label-width": t(u) ? null : "120px",
          "label-position": a.layout === "vertical" ? "top" : "right"
        }, {
          default: p(() => [
            E(he, {
              id: "/",
              meta: t(n)
            }, B({ _: 2 }, [
              L(t(i), (oe) => ({
                name: oe,
                fn: p((ue) => [
                  w(h.$slots, oe, Y(Q({ ...ue })))
                ])
              }))
            ]), 1032, ["meta"]),
            a.button === "default" ? (b(), C(ee, {
              key: 0,
              class: "v__default-submit-button"
            }, {
              default: p(() => [
                E(T, null, {
                  default: p(() => [
                    E(N, {
                      type: "danger",
                      onClick: O
                    }, {
                      default: p(() => [
                        K(" \u91CD\u7F6E ")
                      ]),
                      _: 1
                    }),
                    E(N, {
                      type: "primary",
                      onClick: V,
                      loading: t(o)
                    }, {
                      default: p(() => [
                        K(" \u63D0\u4EA4 ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : a.button === "custom" ? w(h.$slots, "button", {
              key: 1,
              loading: t(o),
              clearForm: O,
              submitForm: V
            }) : (b(), P(G, { key: 2 }, [], 64))
          ]),
          _: 3
        }, 8, ["inline", "label-width", "label-position", "class"])
      ]);
    };
  }
}), st = ["title"], lt = {
  key: 0,
  class: "v__optional"
}, ot = ["innerHTML"], it = { name: "v-wrapper" }, rt = /* @__PURE__ */ k({
  ...it,
  props: {
    id: null,
    show: { type: Boolean },
    meta: null
  },
  setup(a) {
    const e = a, { globalProperties: s } = _e(), l = D("state"), n = l.context.getContext(e.id), o = x(() => Object.assign({}, l.ui, e.meta.ui)), r = j(o.value, "size"), i = x(() => Object.assign({}, l.ui, e.meta.ui).optionalHelp), c = x({
      get() {
        return n.error.value;
      },
      set(m) {
        n.error.value = m;
      }
    }), { appContext: _ } = M(), u = te(_);
    u.on(`${ne}-${l._formId}`, d), ve(() => {
      u.off(`${ne}-${l._formId}`, d);
    });
    function d(m) {
      m.id === e.id && (c.value = m.error ? m.error.message : void 0);
    }
    return (m, f) => {
      const g = I("el-icon"), y = I("el-tooltip"), O = I("el-form-item");
      return b(), C(O, {
        required: t(o).showRequired,
        error: t(c),
        size: t(r),
        class: se([{ "no-label": !a.meta.title }])
      }, B({
        default: p(() => [
          w(m.$slots, "default", {}, void 0, !0),
          a.meta.description ? (b(), P("div", {
            key: 0,
            innerHTML: a.meta.description
          }, null, 8, ot)) : J("", !0)
        ]),
        _: 2
      }, [
        a.meta.title ? {
          name: "label",
          fn: p(() => [
            X("span", {
              class: "v__label-text",
              title: a.meta.title
            }, H(a.meta.title), 9, st),
            t(o).optional || t(i) ? (b(), P("span", lt, [
              K(H(t(o).optional) + " ", 1),
              t(i).icon ? (b(), C(y, F({ key: 0 }, t(i), {
                placement: t(i).placement || "top"
              }), {
                default: p(() => [
                  E(g, null, {
                    default: p(() => [
                      (b(), C(fe(t(s).$elIcons[t(i).icon])))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 16, ["placement"])) : J("", !0)
            ])) : J("", !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["required", "error", "size", "class"]);
    };
  }
});
const ge = (a, e) => {
  const s = a.__vccOpts || a;
  for (const [l, n] of e)
    s[l] = n;
  return s;
}, U = /* @__PURE__ */ ge(rt, [["__scopeId", "data-v-c400b7ff"]]);
class Z {
  constructor(e, s, l, n) {
    $(this, "id");
    $(this, "state");
    $(this, "meta", z({}));
    $(this, "type");
    $(this, "ui", z({}));
    $(this, "error", z(void 0));
    $(this, "_value", z());
    $(this, "_initMetaValue");
    $(this, "appContext");
    if (this.constructor == Z)
      throw new Error("Abstract classes can't be instantiated.");
    this.id = l, this.state = s, this.meta.value = n, this.type = n.ui && n.ui.component || n.type, this.ui.value = Object.assign({}, s.ui, n.ui), this.appContext = e, this.error.value = void 0, s.context.addContext(l, this), this._value.value = void 0, this._initMetaValue = this.getInitMetaValue();
  }
  get value() {
    return this._value.value;
  }
  set value(e) {
    if (this._value.value === e)
      return;
    this.setValue(e), te(this.appContext).emit(`${De}-${this.state._formId}`, {
      id: this.id,
      value: this._value.value
    }), this.state.updateObjProp(this.state.formData, this.id, this._value.value), this.state.validate.runValidationFormItem(this);
  }
  getInitMetaValue() {
    const e = this.id.split("/").filter((l) => l);
    let s = "";
    return e.reduce((l, n, o) => (o === e.length - 1 && (s = l[n]), l[n] || {}), this.state.formData), s;
  }
}
class ut extends Z {
  constructor(s, l, n, o) {
    super(s, l, n, o);
    $(this, "childMetaPairs");
    this.childMetaPairs = this.buildChildMetaPairs(n, o), l.context.addContext(n, this);
  }
  initValue() {
  }
  setValue() {
  }
  set value(s) {
    this.childMetaPairs.forEach(({ key: l, propertyName: n }) => {
      const o = this.state.context.getContext(l);
      o && (o.value = (s || {})[n]);
    });
  }
  buildChildMetaPairs(s, l) {
    const n = [];
    for (const o of Object.keys(l.properties || {})) {
      const r = s === "/" ? `/${o}` : `${s}/${o}`;
      n.push({
        key: r,
        propertyName: o,
        meta: l.properties[o]
      });
    }
    return n;
  }
}
const ct = k({
  name: "v-object"
}), dt = /* @__PURE__ */ k({
  ...ct,
  props: {
    id: null,
    meta: null
  },
  setup(a) {
    const e = a, { slotsName: s } = pe(e.meta), l = D("state"), { appContext: n } = M(), o = new ut(n, l, e.id, e.meta), r = x(() => o.ui.value || {}), i = x(() => c.value === "inline" ? 0 : Object.assign({}, l.ui.grid, r.value.grid).gutter), c = x(() => l.layout.value);
    function _(m) {
      return m.ui && m.ui.show;
    }
    function u(m) {
      if (c.value === "inline")
        return { span: null };
      const f = m.meta.ui && m.meta.ui.grid || {};
      return Object.assign({}, l.ui.grid, r.value.grid, f);
    }
    const d = o.childMetaPairs;
    return (m, f) => {
      const g = I("el-col"), y = I("el-row");
      return b(), C(y, { gutter: t(i) }, {
        default: p(() => [
          (b(!0), P(G, null, L(t(d), (O, V) => (b(), C(g, {
            key: V,
            span: u(O).span,
            offset: u(O).offset,
            xs: u(O).xs,
            sm: u(O).sm,
            md: u(O).md,
            lg: u(O).lg,
            xl: u(O).xl,
            xxl: u(O).xxl,
            style: Me({ display: t(c) === "inline" ? "inline-block" : "block" })
          }, {
            default: p(() => [
              E(he, {
                id: O.key,
                meta: O.meta,
                show: _(O.meta)
              }, B({ _: 2 }, [
                L(t(s), (h) => ({
                  name: h,
                  fn: p((v) => [
                    w(m.$slots, h, Y(Q({ ...v })))
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
class W extends Z {
  constructor(s, l, n, o) {
    var r;
    super(s, l, n, o);
    $(this, "open");
    this.initValue(), this.meta.value && (this.open = ((r = this.meta.value.ui) == null ? void 0 : r.open) || !1);
  }
  initValue() {
    this._initMetaValue ? this.value = this._initMetaValue : this.meta.value.default && (this.value = this.meta.value.default);
  }
  setValue(s) {
    this._value.value = s || void 0;
  }
}
function S(a, e) {
  const s = z({});
  return Object.keys(e.value).forEach((n) => {
    a.indexOf(n) > -1 && (s.value[n] = j(e.value, n));
  }), { bindings: s };
}
const mt = k({
  name: "v-string"
}), ft = /* @__PURE__ */ k({
  ...mt,
  props: {
    id: null,
    meta: null
  },
  setup(a) {
    const e = a, s = D("state"), { appContext: l } = M(), n = new W(l, s, e.id, e.meta);
    let { bindings: o } = S(Object.keys(ye.props), n.ui);
    const r = j(e.meta, "readOnly"), i = x(() => n.ui.value || {}), c = x({
      get() {
        return n.value;
      },
      set(d) {
        n.value = d;
      }
    });
    function _(d) {
      i.value.change && i.value.change(d);
    }
    function u(d) {
      i.value.input && i.value.input(d);
    }
    return (d, m) => (b(), C(U, {
      id: a.id,
      meta: a.meta
    }, {
      default: p(() => [
        E(t(ye), F(t(o), {
          disabled: t(r),
          minlength: a.meta.minLength,
          maxlength: a.meta.maxLength,
          modelValue: t(c),
          "onUpdate:modelValue": m[0] || (m[0] = (f) => R(c) ? c.value = f : null),
          onChange: _,
          onInput: u
        }), B({ _: 2 }, [
          t(i).slotNameOfPrefix ? {
            name: "prefix",
            fn: p(() => [
              w(d.$slots, t(i).slotNameOfPrefix)
            ]),
            key: "0"
          } : void 0,
          t(i).slotNameOfSuffix ? {
            name: "suffix",
            fn: p(() => [
              w(d.$slots, t(i).slotNameOfSuffix)
            ]),
            key: "1"
          } : void 0,
          t(i).slotNameOfPrepend ? {
            name: "prepend",
            fn: p(() => [
              w(d.$slots, t(i).slotNameOfPrepend)
            ]),
            key: "2"
          } : void 0,
          t(i).slotNameOfAppend ? {
            name: "append",
            fn: p(() => [
              w(d.$slots, t(i).slotNameOfAppend)
            ]),
            key: "3"
          } : void 0
        ]), 1040, ["disabled", "minlength", "maxlength", "modelValue"])
      ]),
      _: 3
    }, 8, ["id", "meta"]));
  }
});
class vt extends Z {
  constructor(e, s, l, n) {
    super(e, s, l, n), this.initValue();
  }
  initValue() {
    typeof this._initMetaValue < "u" ? this.value = this._initMetaValue : typeof this.meta.value.default == "boolean" && (this.value = this.meta.value.default);
  }
  setValue(e) {
    this._value.value = e || !1;
  }
}
const pt = k({
  name: "v-boolean"
}), ht = /* @__PURE__ */ k({
  ...pt,
  props: {
    id: null,
    meta: null
  },
  setup(a) {
    const e = a, s = D("state"), { appContext: l } = M(), n = new vt(l, s, e.id, e.meta), { bindings: o } = S(Object.keys(xe.props), n.ui), r = j(e.meta, "readOnly"), i = x(() => n.ui.value || {});
    o.value.style = j(i.value, "style");
    const c = x({
      get() {
        return n.value;
      },
      set(u) {
        n.value = u || !1;
      }
    });
    function _(u) {
      i.value.change && i.value.change(u);
    }
    return (u, d) => (b(), C(U, {
      id: a.id,
      meta: a.meta
    }, {
      default: p(() => [
        E(t(xe), F({
          class: "v__boolean",
          modelValue: t(c),
          "onUpdate:modelValue": d[0] || (d[0] = (m) => R(c) ? c.value = m : null)
        }, t(o), {
          disabled: t(r),
          onChange: _
        }), null, 16, ["modelValue", "disabled"])
      ]),
      _: 1
    }, 8, ["id", "meta"]));
  }
}), _t = k({
  name: "v-autocomplete"
}), gt = /* @__PURE__ */ k({
  ..._t,
  props: {
    id: null,
    meta: null
  },
  setup(a) {
    const e = a, s = D("state"), { appContext: l } = M(), n = new W(l, s, e.id, e.meta), { bindings: o } = S(Object.keys(Oe.props), n.ui), r = j(e.meta, "readOnly"), i = x(() => n.ui.value || {}), c = x({
      get() {
        return n.value;
      },
      set(d) {
        n.value = d || void 0;
      }
    });
    function _(d) {
      i.value.change && i.value.change(t(d));
    }
    function u(d) {
      i.value.select && i.value.select(d);
    }
    return (d, m) => (b(), C(U, {
      id: a.id,
      meta: a.meta
    }, {
      default: p(() => [
        E(t(Oe), F(t(o), {
          disabled: t(r),
          modelValue: t(c),
          "onUpdate:modelValue": m[0] || (m[0] = (f) => R(c) ? c.value = f : null),
          onChange: _,
          onSelect: u
        }), B({ _: 2 }, [
          t(i).slotNameOfPrefix ? {
            name: "prefix",
            fn: p(() => [
              w(d.$slots, t(i).slotNameOfPrefix)
            ]),
            key: "0"
          } : void 0,
          t(i).slotNameOfSuffix ? {
            name: "suffix",
            fn: p(() => [
              w(d.$slots, t(i).slotNameOfSuffix)
            ]),
            key: "1"
          } : void 0,
          t(i).slotNameOfPrepend ? {
            name: "prepend",
            fn: p(() => [
              w(d.$slots, t(i).slotNameOfPrepend)
            ]),
            key: "2"
          } : void 0,
          t(i).slotNameOfAppend ? {
            name: "append",
            fn: p(() => [
              w(d.$slots, t(i).slotNameOfAppend)
            ]),
            key: "3"
          } : void 0,
          t(i).slotNameOfDefault ? {
            name: "default",
            fn: p((f) => [
              w(d.$slots, t(i).slotNameOfDefault, Y(Q(f)))
            ]),
            key: "4"
          } : void 0
        ]), 1040, ["disabled", "modelValue"])
      ]),
      _: 3
    }, 8, ["id", "meta"]));
  }
}), bt = k({
  name: "v-checkbox"
}), yt = /* @__PURE__ */ k({
  ...bt,
  props: {
    id: null,
    meta: null
  },
  setup(a) {
    const e = a, s = D("state"), { appContext: l } = M(), n = new W(l, s, e.id, e.meta), o = x(() => n.ui.value || {});
    let r = z();
    if (o.value.group) {
      const { bindings: u } = S(
        Object.keys(ke.props),
        n.ui
      );
      r.value = u.value;
    } else {
      const { bindings: u } = S(Object.keys(ce.props), n.ui);
      r.value = u.value;
    }
    const i = j(e.meta, "readOnly"), c = x({
      get() {
        return n.value;
      },
      set(u) {
        n.value = u;
      }
    });
    function _(u) {
      o.value.change && o.value.change(u);
    }
    return (u, d) => {
      const m = I("el-checkbox-button");
      return b(), C(U, {
        id: a.id,
        meta: a.meta
      }, {
        default: p(() => [
          t(o).group ? (b(), C(t(ke), F({
            key: 0,
            class: "v__checkbox",
            modelValue: t(c),
            "onUpdate:modelValue": d[0] || (d[0] = (f) => R(c) ? c.value = f : null)
          }, t(r), {
            disabled: t(i),
            onChange: _
          }), {
            default: p(() => [
              t(o).button ? (b(!0), P(G, { key: 0 }, L(t(o).options, (f, g) => (b(), C(m, {
                key: g,
                label: f.label
              }, {
                default: p(() => [
                  K(H(f.label), 1)
                ]),
                _: 2
              }, 1032, ["label"]))), 128)) : (b(!0), P(G, { key: 1 }, L(t(o).options, (f, g) => (b(), C(t(ce), {
                key: g,
                label: f.label,
                disabled: f.disabled
              }, {
                default: p(() => [
                  K(H(f.label), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 16, ["modelValue", "disabled"])) : (b(), C(t(ce), F({
            key: 1,
            class: "v__checkbox",
            modelValue: t(c),
            "onUpdate:modelValue": d[1] || (d[1] = (f) => R(c) ? c.value = f : null)
          }, t(r), {
            disabled: a.meta.readOnly,
            onChange: _
          }), null, 16, ["modelValue", "disabled"]))
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
}), xt = k({
  name: "v-date"
}), Ot = /* @__PURE__ */ k({
  ...xt,
  props: {
    id: null,
    meta: null
  },
  setup(a) {
    const e = a, s = D("state"), { appContext: l } = M(), n = new W(l, s, e.id, e.meta), { bindings: o } = S(Object.keys(Ce.props), n.ui), r = j(e.meta, "readOnly"), i = x(() => n.ui.value || {}), c = x({
      get() {
        return n.value;
      },
      set(u) {
        n.value = u;
      }
    });
    function _(u) {
      i.value.change && i.value.change(u);
    }
    return (u, d) => (b(), C(U, {
      id: a.id,
      meta: a.meta
    }, {
      default: p(() => [
        E(t(Ce), F({
          modelValue: t(c),
          "onUpdate:modelValue": d[0] || (d[0] = (m) => R(c) ? c.value = m : null)
        }, t(o), {
          disabled: t(r),
          onChange: _
        }), B({ _: 2 }, [
          t(i).slotNameOfRangeSeparator ? {
            name: "range-separator",
            fn: p(() => [
              w(u.$slots, t(i).slotNameOfRangeSeparator)
            ]),
            key: "0"
          } : void 0,
          t(i).slotNameOfDefault ? {
            name: "default",
            fn: p((m) => [
              X("span", null, [
                w(u.$slots, t(i).slotNameOfDefault, Y(Q(m)))
              ])
            ]),
            key: "1"
          } : void 0
        ]), 1040, ["modelValue", "disabled"])
      ]),
      _: 3
    }, 8, ["id", "meta"]));
  }
}), kt = k({
  name: "v-time"
}), Ct = /* @__PURE__ */ k({
  ...kt,
  props: {
    id: null,
    meta: null
  },
  setup(a) {
    const e = a, s = D("state"), { appContext: l } = M(), n = new W(l, s, e.id, e.meta), { bindings: o } = S(Object.keys(Ve.props), n.ui), r = j(e.meta, "readOnly"), i = x(() => n.ui.value || {}), c = x({
      get() {
        return n.value;
      },
      set(u) {
        n.value = u;
      }
    });
    function _(u) {
      i.value.change && i.value.change(u);
    }
    return (u, d) => (b(), C(U, {
      id: a.id,
      meta: a.meta
    }, {
      default: p(() => [
        E(t(Ve), F({
          class: "v__time",
          modelValue: t(c),
          "onUpdate:modelValue": d[0] || (d[0] = (m) => R(c) ? c.value = m : null)
        }, t(o), {
          disabled: t(r),
          onChange: _
        }), null, 16, ["modelValue", "disabled"])
      ]),
      _: 1
    }, 8, ["id", "meta"]));
  }
});
class re extends Z {
  constructor(e, s, l, n) {
    super(e, s, l, n), this.initValue();
  }
  initValue() {
    this._initMetaValue ? this.value = this._initMetaValue : t(this.meta).default && (this.value = t(this.meta).default);
  }
  setValue(e) {
    switch (this.type) {
      case "slider":
        this._value.value = Qe(e) || Re(e) ? e : void 0;
        break;
      default:
        this._value.value = e || void 0;
        break;
    }
  }
}
const Vt = k({
  name: "v-number"
}), $t = /* @__PURE__ */ k({
  ...Vt,
  props: {
    id: null,
    meta: null
  },
  setup(a) {
    const e = a, s = D("state"), { appContext: l } = M(), n = new re(l, s, e.id, e.meta), { bindings: o } = S(Object.keys($e.props), n.ui), r = j(e.meta, "readOnly"), i = j(e.meta, "minimum"), c = j(e.meta, "maximum"), _ = x(() => n.ui.value || {}), u = x({
      get() {
        return n.value;
      },
      set(m) {
        n.value = m;
      }
    });
    function d(m, f) {
      _.value.change && _.value.change(m, f);
    }
    return (m, f) => (b(), C(U, {
      id: a.id,
      meta: a.meta
    }, {
      default: p(() => [
        E(t($e), F({
          class: "v__number",
          modelValue: t(u),
          "onUpdate:modelValue": f[0] || (f[0] = (g) => R(u) ? u.value = g : null)
        }, t(o), {
          disabled: t(r),
          min: t(i),
          max: t(c),
          onChange: d
        }), null, 16, ["modelValue", "disabled", "min", "max"])
      ]),
      _: 1
    }, 8, ["id", "meta"]));
  }
});
class Et extends Z {
  constructor(s, l, n, o) {
    super(s, l, n, o);
    $(this, "ids", z([]));
    this.initValue();
  }
  setValue() {
  }
  initValue() {
    var s, l;
    if (((s = this._initMetaValue) == null ? void 0 : s.length) > 0)
      this.value = this._initMetaValue;
    else if (((l = t(this.meta).default) == null ? void 0 : l.length) > 0) {
      const n = t(this.meta).default;
      n.forEach(() => this.add(!1)), setTimeout(() => {
        n.forEach((o, r) => {
          const i = this.state.context.getContext(
            `${this.id}/${r}`
          );
          i.value = o;
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
    const l = ae(s), n = t(this.ids).length;
    for (let o = 0; o < n; o++)
      this.remove(n - o - 1, !1);
    l && l.length && (l.forEach(() => this.add(!1)), Le(() => {
      l.forEach((o, r) => {
        const i = this.state.context.getContext(
          `${this.id}/${r}`
        );
        i.value = o;
      });
    })), this.validate();
  }
  validate() {
    return this.state.validate.runValidationFormItem(this);
  }
  getPathValue(s, l) {
    const n = l.split("/").filter((r) => r);
    let o = ae(s);
    for (let r = 0; r < n.length; r++) {
      const i = n[r];
      o = o[i];
    }
    return o;
  }
  getEmptyData() {
    const s = {}, l = t(this.meta).items.properties;
    return Object.keys(l).forEach((n) => {
      switch (l[n].type) {
        case "object":
          s[n] = {};
          break;
        case "array":
          s[n] = [];
          break;
        default:
          s[n] = void 0;
          break;
      }
    }), s;
  }
  add(s = !0) {
    const l = `${this.id}/${t(this.ids).length}`, n = this.getEmptyData();
    return this.state.updateObjProp(this.state.formData, l, n), this.ids.value.push({ key: Ae() }), s && this.validate(), l;
  }
  remove(s, l = !0) {
    this.ids.value.splice(s, 1);
    const n = this.id.split("/").filter((i) => !!i);
    n.reduce((i, c, _) => (_ === n.length - 1 && i[c].splice(s, 1), i[c]), this.state.formData);
    const o = [];
    for (const i of this.state.context.getMap().keys())
      new RegExp(`^/?${this.id}/`).test(i) && o.push(i);
    for (let i = s + 1; i < t(this.ids).length + 1; i++) {
      const c = new RegExp(`^(/?${this.id}/)${i}`);
      o.filter((_) => c.test(_)).forEach((_) => {
        const u = this.state.context.getContext(_), d = _.replace(c, (m, f) => `${f}${i - 1}`);
        if (u.id = d, u.childMetaPairs) {
          const m = u.buildChildMetaPairs(
            d,
            t(u.meta)
          );
          u.childMetaPairs.forEach((f, g) => {
            f.key = m[g].key;
          });
        }
        this.state.context.addContext(d, u);
      });
    }
    const r = new RegExp(`^/?${this.id}/${t(this.ids).length}`);
    o.filter((i) => r.test(i)).forEach((i) => {
      this.state.context.removeContext(i);
    }), l && this.validate();
  }
}
/*! Element Plus Icons Vue v2.0.10 */
var wt = (a, e) => {
  let s = a.__vccOpts || a;
  for (let [l, n] of e)
    s[l] = n;
  return s;
}, jt = {
  name: "Delete"
}, It = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Nt = /* @__PURE__ */ X("path", {
  fill: "currentColor",
  d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
}, null, -1), Pt = [
  Nt
];
function Mt(a, e, s, l, n, o) {
  return b(), P("svg", It, Pt);
}
var Dt = /* @__PURE__ */ wt(jt, [["render", Mt], ["__file", "delete.vue"]]);
const At = ["title"], Rt = {
  key: 0,
  class: "v__optional"
}, Ft = { class: "v__array-add" }, Tt = ["onClick"], zt = k({
  name: "v-array"
}), St = /* @__PURE__ */ k({
  ...zt,
  props: {
    id: null,
    meta: null
  },
  setup(a) {
    const e = a, s = D("state"), { globalProperties: l } = _e(), { appContext: n } = M(), o = new Et(n, s, e.id, e.meta), r = te(n), i = x(() => t(o.ui) || {}), c = x(() => Object.assign({}, s.ui, e.meta.ui).optionalHelp);
    x({
      get() {
        return o.value;
      },
      set(v) {
        o.value = v || [];
      }
    });
    const _ = x({
      get() {
        return t(o.error);
      },
      set(v) {
        o.error.value = v;
      }
    }), u = j(e.meta, "readOnly"), d = x(() => t(u) || e.meta.maxItems != null && t(o.ids).length >= e.meta.maxItems), m = x(() => {
      const v = e.meta.minItems;
      return !(t(u) || v != null && t(o.ids).length <= v);
    }), f = z(8), g = z("");
    qe(() => {
      var ee;
      r.on(`${ne}-${s._formId}`, y);
      const { grid: v, removable: N, removeTitle: T } = t(i);
      f.value = (ee = v == null ? void 0 : v.arraySpan) != null ? ee : 8, g.value = N === !1 ? null : T;
    }), ve(() => {
      r.off(`${ne}-${s._formId}`, y);
    });
    function y(v) {
      v.id === e.id && (_.value = v.error ? v.error.message : void 0);
    }
    function O(v) {
      return `${e.id}/${v}`;
    }
    function V() {
      var N, T;
      const v = o.add();
      (T = (N = t(i)).add) == null || T.call(N, v);
    }
    function h(v) {
      var N, T;
      o.remove(v), (T = (N = t(i)).remove) == null || T.call(N, v);
    }
    return (v, N) => {
      const T = I("el-icon"), ee = I("el-tooltip"), le = I("el-button"), oe = I("el-card"), ue = I("el-col"), Fe = I("el-row"), Te = I("el-form-item");
      return b(), C(Te, {
        required: t(i).showRequired,
        error: t(_),
        size: t(i).size,
        class: se([{ "no-label": !a.meta.title }])
      }, B({
        default: p(() => [
          X("div", Ft, [
            E(le, {
              type: t(i).addType,
              disabled: t(d),
              onClick: V
            }, {
              default: p(() => [
                K(H(t(i).addTitle || "\u6DFB\u52A0"), 1)
              ]),
              _: 1
            }, 8, ["type", "disabled"])
          ]),
          E(Fe, {
            class: "v__array-container",
            gutter: 16
          }, {
            default: p(() => [
              (b(!0), P(G, null, L(t(o).ids.value, (ze, be) => (b(), C(ue, {
                key: ze.key,
                span: f.value,
                class: "v__array-item"
              }, {
                default: p(() => [
                  E(oe, { shadow: "never" }, {
                    default: p(() => [
                      E(he, {
                        id: O(be),
                        meta: a.meta.items
                      }, null, 8, ["id", "meta"]),
                      t(m) ? (b(), P("span", {
                        key: 0,
                        class: "v__array-remove",
                        onClick: (fn) => h(be)
                      }, [
                        E(le, {
                          icon: t(Dt),
                          circle: ""
                        }, null, 8, ["icon"])
                      ], 8, Tt)) : J("", !0)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["span"]))), 128))
            ]),
            _: 1
          })
        ]),
        _: 2
      }, [
        a.meta.title ? {
          name: "label",
          fn: p(() => [
            X("span", {
              class: "v__label-text",
              title: a.meta.title
            }, H(a.meta.title), 9, At),
            t(i).optional || t(c) ? (b(), P("span", Rt, [
              K(H(t(i).optional) + " ", 1),
              t(c).icon ? (b(), C(ee, F({ key: 0 }, t(c), {
                placement: t(c).placement || "top"
              }), {
                default: p(() => [
                  E(T, null, {
                    default: p(() => [
                      (b(), C(fe(t(l).$elIcons[t(c).icon])))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 16, ["placement"])) : J("", !0)
            ])) : J("", !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["required", "error", "size", "class"]);
    };
  }
});
const Ut = /* @__PURE__ */ ge(St, [["__scopeId", "data-v-09ce9ceb"]]), Bt = { class: "v__label-text" }, Ht = ["innerHTML"], Lt = ["textContent"], qt = k({
  name: "v-text"
}), Gt = /* @__PURE__ */ k({
  ...qt,
  props: {
    id: null,
    meta: null
  },
  setup(a) {
    const e = a, s = D("state"), { appContext: l } = M(), n = new W(l, s, e.id, e.meta), o = x(() => n.ui.value || {}), r = x(
      () => Xe(t(o).text) ? t(o).text() : t(o).text
    );
    return (i, c) => {
      const _ = I("el-form-item");
      return b(), P("div", null, [
        E(_, {
          class: se({ "no-label": !a.meta.title })
        }, B({
          default: p(() => [
            t(o).slotNameOfDefault ? w(i.$slots, t(o).slotNameOfDefault, { key: 0 }) : (b(), P(G, { key: 1 }, [
              t(o).html ? (b(), P("span", {
                key: 0,
                innerHTML: t(o).html,
                class: "v__content-text"
              }, null, 8, Ht)) : (b(), P("span", {
                key: 1,
                textContent: H(t(r)),
                class: "v__content-text"
              }, null, 8, Lt))
            ], 64))
          ]),
          _: 2
        }, [
          a.meta.title ? {
            name: "label",
            fn: p(() => [
              X("span", Bt, H(a.meta.title), 1)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["class"])
      ]);
    };
  }
});
function Kt(a, e) {
  ie(a, () => {
    e.validate._forceCompile();
  });
}
const Wt = k({
  name: "v-slider"
}), Jt = /* @__PURE__ */ k({
  ...Wt,
  props: {
    id: null,
    meta: null
  },
  setup(a) {
    const e = a, s = D("state"), { appContext: l } = M(), n = new re(l, s, e.id, e.meta), { bindings: o } = S(Object.keys(Ee.props), n.ui), r = j(e.meta, "readOnly"), i = j(e.meta, "minimum"), c = j(e.meta, "maximum"), _ = j(e.meta, "multipleOf");
    Kt([i, c, _], s);
    const u = x(() => n.ui.value || {}), d = x({
      get() {
        return n.value;
      },
      set(g) {
        u.value.range ? n.value = g || [] : n.value = Re(g) ? g : void 0;
      }
    });
    function m(g) {
      var y, O;
      (O = (y = t(u)).input) == null || O.call(y, g);
    }
    function f(g) {
      var y, O;
      (O = (y = t(u)).change) == null || O.call(y, g);
    }
    return (g, y) => (b(), C(U, {
      id: a.id,
      meta: a.meta
    }, {
      default: p(() => [
        E(t(Ee), F(t(o), {
          disabled: t(r),
          min: t(i) || 0,
          max: t(c) || 100,
          step: t(_) || 1,
          modelValue: t(d),
          "onUpdate:modelValue": y[0] || (y[0] = (O) => R(d) ? d.value = O : null),
          onInput: m,
          onChange: f
        }), null, 16, ["disabled", "min", "max", "step", "modelValue"])
      ]),
      _: 1
    }, 8, ["id", "meta"]));
  }
}), Yt = k({
  name: "v-rate"
}), Qt = /* @__PURE__ */ k({
  ...Yt,
  props: {
    id: null,
    meta: null
  },
  setup(a) {
    const e = a, s = D("state"), { appContext: l } = M(), n = new re(l, s, e.id, e.meta), { bindings: o } = S(Object.keys(we.props), n.ui), r = j(e.meta, "readOnly"), i = x(() => n.ui.value || {}), c = x({
      get() {
        return n.value;
      },
      set(u) {
        n.value = u;
      }
    });
    function _(u) {
      var d, m;
      (m = (d = t(i)).change) == null || m.call(d, u);
    }
    return (u, d) => (b(), C(U, {
      id: a.id,
      meta: a.meta
    }, {
      default: p(() => [
        E(t(we), F(t(o), {
          disabled: t(r),
          max: a.meta.maximum || 5,
          modelValue: t(c),
          "onUpdate:modelValue": d[0] || (d[0] = (m) => R(c) ? c.value = m : null),
          onChange: _
        }), null, 16, ["disabled", "max", "modelValue"])
      ]),
      _: 1
    }, 8, ["id", "meta"]));
  }
}), Xt = k({
  name: "v-tag"
}), Zt = /* @__PURE__ */ k({
  ...Xt,
  props: {
    id: null,
    meta: null
  },
  setup(a) {
    const e = a, s = D("state"), { appContext: l } = M(), n = new re(l, s, e.id, e.meta), o = j(e.meta, "readOnly"), r = z([]), i = x(() => n.ui.value || {}), c = x({
      get() {
        return n.value;
      },
      set(m) {
        i.value.range ? n.value = m || [] : n.value = m;
      }
    });
    ie(() => t(n.meta).enum, d, { immediate: !0 });
    function _(m, f) {
      var g, y, O, V;
      m.disabled || (m.checked = f, u(), (y = (g = t(i)).checkedChange) == null || y.call(g, f), (V = (O = t(i)).change) == null || V.call(O, de(t(c))));
    }
    function u() {
      const m = t(r).filter((f) => f.checked).map((f) => f.value);
      c.value = m.length ? m : void 0;
    }
    function d(m) {
      let f = t(m);
      f == null || !Array.isArray(f) || f.length === 0 || (typeof f[0] != "object" && (f = f.map((g) => ({
        label: g,
        value: g
      }))), f.forEach((g) => {
        g.checked = (c.value || []).indexOf(g.value) > -1;
      }), f.forEach((g) => g.disabled = e.meta.readOnly), r.value = f);
    }
    return (m, f) => {
      const g = I("el-check-tag");
      return b(), C(U, {
        id: a.id,
        meta: a.meta
      }, {
        default: p(() => [
          (b(!0), P(G, null, L(r.value, (y) => (b(), C(g, {
            key: y.value,
            class: se({ disabled: y.disabled || t(o) }),
            checked: y.checked,
            onChange: (O) => _(y, O)
          }, {
            default: p(() => [
              X("span", null, H(y.label), 1)
            ]),
            _: 2
          }, 1032, ["class", "checked", "onChange"]))), 128))
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
});
const en = /* @__PURE__ */ ge(Zt, [["__scopeId", "data-v-880329a9"]]), tn = k({
  name: "v-cascader"
}), nn = /* @__PURE__ */ k({
  ...tn,
  props: {
    id: null,
    meta: null
  },
  setup(a) {
    const e = a, s = D("state"), { appContext: l } = M(), n = new W(l, s, e.id, e.meta), { bindings: o } = S(Object.keys(je.props), n.ui), r = S(
      Object.keys(Ie.props),
      n.ui
    ).bindings, i = j(e.meta, "readOnly"), c = x(() => n.ui.value || {}), _ = x(() => t(c).type === "panel"), u = x({
      get() {
        return n.value;
      },
      set(V) {
        n.value = V;
      }
    });
    function d(V) {
      var h, v;
      (v = (h = t(c)).change) == null || v.call(h, V);
    }
    function m(V) {
      var h, v;
      (v = (h = t(c)).visibleChange) == null || v.call(h, V);
    }
    function f(V) {
      var h, v;
      (v = (h = t(c)).expandChange) == null || v.call(h, V);
    }
    function g(V) {
      var h, v;
      (v = (h = t(c)).removeTag) == null || v.call(h, V);
    }
    function y(V) {
      var h, v;
      (v = (h = t(c)).blur) == null || v.call(h, V);
    }
    function O(V) {
      var h, v;
      (v = (h = t(c)).focus) == null || v.call(h, V);
    }
    return (V, h) => (b(), C(U, {
      id: a.id,
      meta: a.meta
    }, {
      default: p(() => [
        t(_) ? (b(), C(t(Ie), F({ key: 0 }, t(r), {
          disabled: t(i),
          options: a.meta.enum,
          modelValue: t(u),
          "onUpdate:modelValue": h[0] || (h[0] = (v) => R(u) ? u.value = v : null),
          onChange: d,
          onExpandChange: f
        }), B({ _: 2 }, [
          t(c).slotNameOfDefault ? {
            name: "default",
            fn: p((v) => [
              w(V.$slots, t(c).slotNameOfDefault, Y(Q(v)))
            ]),
            key: "0"
          } : void 0
        ]), 1040, ["disabled", "options", "modelValue"])) : (b(), C(t(je), F({ key: 1 }, t(o), {
          disabled: t(i),
          options: a.meta.enum,
          modelValue: t(u),
          "onUpdate:modelValue": h[1] || (h[1] = (v) => R(u) ? u.value = v : null),
          onChange: d,
          onVisibleChange: m,
          onExpandChange: f,
          onRemoveTag: g,
          onBlur: y,
          onFocus: O
        }), B({ _: 2 }, [
          t(c).slotNameOfDefault ? {
            name: "default",
            fn: p((v) => [
              w(V.$slots, t(c).slotNameOfDefault, Y(Q(v)))
            ]),
            key: "0"
          } : void 0
        ]), 1040, ["disabled", "options", "modelValue"]))
      ]),
      _: 3
    }, 8, ["id", "meta"]));
  }
}), an = k({
  name: "v-radio"
}), sn = /* @__PURE__ */ k({
  ...an,
  props: {
    id: null,
    meta: null
  },
  setup(a) {
    const e = a, s = D("state"), { appContext: l } = M(), n = new W(l, s, e.id, e.meta), { bindings: o } = S(Object.keys(Ne.props), n.ui), r = j(e.meta, "readOnly"), i = x(() => n.ui.value || {}), c = x({
      get() {
        return n.value;
      },
      set(u) {
        n.value = u;
      }
    });
    function _(u) {
      i.value.change && i.value.change(u);
    }
    return (u, d) => {
      const m = I("el-radio-button"), f = I("el-radio");
      return b(), C(U, {
        id: a.id,
        meta: a.meta
      }, {
        default: p(() => [
          E(t(Ne), F(t(o), {
            modelValue: t(c),
            "onUpdate:modelValue": d[0] || (d[0] = (g) => R(c) ? c.value = g : null),
            disabled: t(r),
            onChange: _
          }), B({
            default: p(() => [
              t(i).button ? (b(!0), P(G, { key: 0 }, L(t(i).options, (g, y) => (b(), C(m, {
                key: y,
                label: g.label,
                size: t(i).size,
                border: t(i).border,
                disabled: a.meta.readOnly || g.disabled
              }, {
                default: p(() => [
                  K(H(g.text || g.label), 1)
                ]),
                _: 2
              }, 1032, ["label", "size", "border", "disabled"]))), 128)) : (b(!0), P(G, { key: 1 }, L(t(i).options, (g, y) => (b(), C(f, {
                key: y,
                label: g.label,
                size: t(i).size,
                border: t(i).border,
                disabled: a.meta.readOnly || g.disabled
              }, {
                default: p(() => [
                  K(H(g.text || g.label), 1)
                ]),
                _: 2
              }, 1032, ["label", "size", "border", "disabled"]))), 128))
            ]),
            _: 2
          }, [
            t(i).slotNameOfDefault ? {
              name: "default",
              fn: p(() => [
                w(u.$slots, t(i).slotNameOfDefault)
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue", "disabled"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), ln = k({
  name: "v-select"
}), on = /* @__PURE__ */ k({
  ...ln,
  props: {
    id: null,
    meta: null
  },
  setup(a) {
    const e = a, s = D("state"), { appContext: l } = M(), n = new W(l, s, e.id, e.meta), { bindings: o } = S(Object.keys(Pe.props), n.ui), r = j(e.meta, "readOnly"), i = x(() => n.ui.value || {}), c = x({
      get() {
        return n.value;
      },
      set(y) {
        n.value = y;
      }
    });
    function _(y) {
      t(i).change && t(i).change(y);
    }
    function u() {
      t(i).blur && t(i).blur();
    }
    function d(y) {
      t(i).visibleChange && t(i).visibleChange(y);
    }
    function m() {
      t(i).focus && t(i).focus();
    }
    function f() {
      t(i).clear && t(i).clear();
    }
    function g(y) {
      t(i).select && t(i).removeTag(y);
    }
    return (y, O) => {
      const V = I("el-option");
      return b(), C(U, {
        id: a.id,
        meta: a.meta
      }, {
        default: p(() => [
          E(t(Pe), F({
            modelValue: t(c),
            "onUpdate:modelValue": O[0] || (O[0] = (h) => R(c) ? c.value = h : null)
          }, t(o), {
            disabled: t(r),
            onBlur: u,
            onFocus: m,
            onClear: f,
            onRemoveTag: g,
            onVisibleChange: d,
            onChange: _
          }), B({
            default: p(() => [
              (b(!0), P(G, null, L(t(i).options, (h, v) => (b(), C(V, {
                key: v,
                label: h.label,
                value: h.value,
                disabled: h.disabled
              }, null, 8, ["label", "value", "disabled"]))), 128))
            ]),
            _: 2
          }, [
            t(i).slotNameOfSelectDefault ? {
              name: "default",
              fn: p(() => [
                w(y.$slots, t(i).slotNameOfSelectDefault)
              ]),
              key: "0"
            } : void 0,
            t(i).slotNameOfPrefix ? {
              name: "prefix",
              fn: p(() => [
                w(y.$slots, t(i).slotNameOfPrefix)
              ]),
              key: "1"
            } : void 0,
            t(i).slotNameOfEmpty ? {
              name: "empty",
              fn: p(() => [
                w(y.$slots, t(i).slotNameOfEmpty)
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
function A(a, e, s) {
  a.component(e, s);
}
function rn(a) {
  A(a, "v-object", dt), A(a, "v-string", ft), A(a, "v-boolean", ht), A(a, "v-array", Ut), A(a, "v-autocomplete", gt), A(a, "v-checkbox", yt), A(a, "v-date", Ot), A(a, "v-number", $t), A(a, "v-time", Ct), A(a, "v-text", Gt), A(a, "v-radio", sn), A(a, "v-slider", Jt), A(a, "v-rate", Qt), A(a, "v-tag", en), A(a, "v-select", on), A(a, "v-cascader", nn);
}
const un = [at, U];
function cn(a) {
  un.forEach((e) => {
    a.component(e.name, e);
  }), rn(a);
}
const dn = {
  installFormly: cn
};
const mn = function(a, e) {
  if (a.config.globalProperties.emitter = Be(), e.lib === "element")
    dn.installFormly(a);
  else
    throw new Error("Unsupport lib");
  return a.config.globalProperties.$VFORMLY_OPTIONS = e, a;
}, bn = { install: mn };
export {
  Z as BaseMeta,
  De as FORM_VALUE_CHANGE,
  bn as default,
  cn as installFormly,
  A as registerFormComponent
};
