var Pe = Object.defineProperty;
var Me = (t, e, o) => e in t ? Pe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var x = (t, e, o) => (Me(t, typeof e != "symbol" ? e + "" : e, o), o);
import Ae from "mitt";
import { defineComponent as E, ref as U, inject as w, computed as b, getCurrentInstance as V, openBlock as p, createElementBlock as j, normalizeStyle as xe, unref as l, createBlock as y, resolveDynamicComponent as Oe, createSlots as B, renderList as z, withCtx as f, renderSlot as O, normalizeProps as J, guardReactiveProps as Y, createCommentVNode as X, provide as De, watch as ne, toRef as se, onBeforeUnmount as ke, resolveComponent as I, createVNode as C, normalizeClass as Z, createTextVNode as W, Fragment as T, toRaw as ae, createElementVNode as ie, toDisplayString as L, mergeProps as P, isRef as A } from "vue";
import Fe from "ajv";
import { ElInput as ce, ElSwitch as de, ElAutocomplete as me, ElCheckboxGroup as fe, ElCheckbox as te, ElDatePicker as ve, ElTimePicker as pe, ElInputNumber as he, ElSlider as be, ElRate as ge, ElRadioGroup as _e, ElSelect as ye } from "element-plus";
function Q(t) {
  return t.config.globalProperties.emitter;
}
var H = /* @__PURE__ */ ((t) => (t.Object = "object", t.Array = "array", t.Boolean = "boolean", t.Integer = "integer", t))(H || {});
function ue(t) {
  const e = [], o = "slotName";
  return t && !t.type && (t.type = H.Object), le(t, e, o), { slotsName: e };
}
function le(t, e, o) {
  switch (t.type) {
    case H.Object:
      Object.keys(t.properties).forEach((s) => {
        const n = t.properties[s];
        le(n, e, o);
      });
      break;
    case H.Array:
      Object.keys(t.items.properties).forEach((s) => {
        const n = t.items.properties[s];
        le(n, e, o);
      });
      break;
    default:
      if (t.ui) {
        const s = Object.keys(t.ui).filter(
          (n) => n.startsWith(o)
        );
        s && s.length > 0 && s.forEach((n) => {
          e.push(t.ui[n]);
        });
      }
      break;
  }
}
function Se() {
  return { visibleIf: Re };
}
function Re(t, e, o, s) {
  if (!e.ui || !e.ui.visibleIf)
    return o;
  const n = Object.keys(e.ui.visibleIf)[0], i = e.ui.visibleIf[n];
  return s = s || {}, typeof i != "function" || n !== s.id ? o : i.call(null, t, s.id, s.value);
}
const Ce = "form-value-change", oe = "form-error-change", Ve = /* @__PURE__ */ E({
  __name: "ElFormlyItem",
  props: {
    id: null,
    show: { type: Boolean, default: !0 },
    meta: null
  },
  setup(t) {
    const e = t;
    let o = U(!0);
    const { slotsName: s } = ue(e.meta), n = w("state"), i = b(() => `v-${e.meta.ui && e.meta.ui.component || e.meta.type}`), a = b(() => n.layout);
    d();
    function d() {
      if (!e.meta.type)
        throw new Error(
          "Form item type must be one of these: number, string, boolean, array, object"
        );
      o.value = e.show, v(o.value, e.id);
      const { visibleIf: r } = Se(), { appContext: u } = V();
      Q(u).on(`${Ce}-${n._formId}`, (m) => {
        let h = r(n.context, e.meta, o.value, {
          id: m.id,
          value: m.value
        });
        h !== o.value && (o.value = h, v(o.value, e.id));
      });
    }
    function v(r, u) {
      r ? n._ignoreErrorIds = n._ignoreErrorIds.filter((c) => c !== u) : n._ignoreErrorIds.indexOf(u) === -1 && n._ignoreErrorIds.push(u);
    }
    return (r, u) => (p(), j("div", {
      style: xe({ display: l(a) === "inline" ? "inline-block" : "block" })
    }, [
      l(o) ? (p(), y(Oe(l(i)), {
        key: 0,
        id: t.id,
        meta: t.meta
      }, B({ _: 2 }, [
        z(l(s), (c) => ({
          name: c,
          fn: f((m) => [
            O(r.$slots, c, J(Y({ ...m })))
          ])
        }))
      ]), 1032, ["id", "meta"])) : X("", !0)
    ], 4));
  }
});
class Ue {
  constructor() {
    x(this, "_map", /* @__PURE__ */ new Map());
  }
  addContext(e, o) {
    this._map.set(e, o);
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
function ze(t = 8, e = 10) {
  const o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), s = e || o.length, n = [];
  if (t)
    for (let i = 0; i < t; i++)
      n[i] = o[0 | Math.random() * s];
  else {
    let i;
    n[8] = n[13] = n[18] = n[23] = "-", n[14] = "4";
    for (let a = 0; a < 36; a++)
      n[a] || (i = 0 | Math.random() * 16, n[a] = o[a == 19 ? i & 3 | 8 : i]);
  }
  return n.join("");
}
const Be = Array.isArray, Te = (t) => typeof t == "function", Ee = (t) => typeof t == "number";
function je() {
  const { appContext: t } = V(), e = t.config.globalProperties;
  return {
    appContext: t,
    globalProperties: e
  };
}
class Le {
  constructor() {
    x(this, "_formId", ze(4));
    x(this, "_ignoreErrorIds", []);
    x(this, "_context");
    x(this, "_layout", U("horizontal"));
    x(this, "_ajvOptions", {
      allErrors: !0,
      strict: !1,
      loopEnum: 50
    });
    x(this, "_formData", U({}));
    x(this, "_meta", {});
    x(this, "_ui", {
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
    x(this, "_validate");
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
  updateObjProp(e, o, s) {
    const [n, ...i] = o.split("/").filter((a) => a);
    i.length ? this.updateObjProp(e[n], i.join("/"), s) : e && (e[n] = s);
  }
  _applyUseOptions() {
    const { globalProperties: e } = je(), o = e.$VFORMLY_OPTIONS;
    !o || typeof o != "object" || (this.ui = o.ui);
  }
}
class He {
  constructor(e, o) {
    x(this, "state");
    x(this, "_ajv");
    x(this, "_validate");
    x(this, "appContext");
    this.state = o, this._ajv = new Fe(o.ajvOptions), this._validate = null, this.appContext = e;
  }
  async runValidateForm() {
    const { valid: e, errors: o } = this._isAjvValid(), n = this.state.context.getContexts().values();
    let i = !0;
    for (const a of n)
      i = await this._validation(a, e, o) && i;
    return i;
  }
  async runValidationFormItem(e) {
    const { valid: o, errors: s } = this._isAjvValid();
    return await this._validation(e, o, s);
  }
  _ajvValidate(e) {
    return this._validate ? this._validate : (this._validate = this._ajv.compile(e), this._validate);
  }
  _getAjvError(e, o) {
    let s;
    for (let n = 0; n < o.length; n++) {
      const i = o[n], a = this._getId(i);
      if (e === a) {
        s = i;
        break;
      }
    }
    return s;
  }
  _isAjvValid() {
    const e = this._ajvValidate(this.state.meta);
    return { valid: e(this.state.formData || {}), errors: e.errors };
  }
  async _validation(e, o, s) {
    let n = [];
    const i = `${oe}-${this.state._formId}`, a = Q(this.appContext);
    if (o)
      return a.emit(i, {
        id: e.id,
        error: void 0
      }), !0;
    {
      const d = this._getCustomError(e), v = await this._getCustomAsyncError(e), r = [...d, ...v];
      this._replaceWithDefaultErrors(e, s), this._replaceWithCustomErrors(e.id, s, r);
      const u = this.state.ui.ingoreKeywords || [];
      n = s.filter(
        (m) => u.indexOf(m.keyword) === -1
      ), n = this._removeIgnoreErrors(n);
      const c = this._getAjvError(e.id, n);
      return a.emit(i, {
        id: e.id,
        error: c
      }), !c;
    }
  }
  _getCustomError(e) {
    var s, n;
    const o = (n = (s = e.ui) == null ? void 0 : s.value) == null ? void 0 : n.validator;
    return o ? o(e.value) : [];
  }
  async _getCustomAsyncError(e) {
    var s, n;
    const o = (n = (s = e.ui) == null ? void 0 : s.value) == null ? void 0 : n.validatorAsync;
    return o ? await o(e.value) : [];
  }
  _replaceWithDefaultErrors(e, o) {
    var a, d;
    if (!o || o.length === 0)
      return;
    const s = ((d = (a = e.ui) == null ? void 0 : a.value) == null ? void 0 : d.errors) || {}, n = Object.assign({}, this.state.ui.errors, s), i = Object.keys(n);
    i && i.length > 0 && o.forEach((v) => {
      i.indexOf(v.keyword) > -1 && (v.message = n[v.keyword]);
    });
  }
  _replaceWithCustomErrors(e, o, s) {
    s.forEach((n) => {
      const i = o.find(
        (a) => a.keyword === n.keyword && this._getId(a) === e
      );
      i && (i.message = n.message);
    });
  }
  _removeIgnoreErrors(e) {
    const o = this.state._ignoreErrorIds;
    return !o || o.length === 0 ? e : e.filter((n) => o.indexOf(this._getId(n)) === -1);
  }
  _getId(e) {
    return e.params && e.params.missingProperty ? `${e.instancePath ? e.instancePath : ""}/${e.params.missingProperty}` : `${e.instancePath}`;
  }
}
const Ge = { class: "v__formly" }, We = { name: "v-formly-v3" }, Ke = /* @__PURE__ */ E({
  ...We,
  props: {
    modelValue: null,
    layout: { default: "horizontal" },
    button: null,
    meta: null
  },
  emits: ["update:modelValue", "form-reset", "form-submit"],
  setup(t, { expose: e, emit: o }) {
    const s = t;
    if (!s.meta || typeof s.meta.properties > "u")
      throw new Error("Invalid Schema");
    let n = { type: H.Object }, i = U(!1);
    const a = new Le();
    De("state", a);
    const { slotsName: d } = ue(s.meta), { appContext: v } = V(), r = Q(v);
    c();
    const u = b(() => s.layout === "inline");
    ne(
      () => s.modelValue,
      (_, S) => {
        JSON.stringify(_) !== JSON.stringify(S) && $(_);
      },
      {
        deep: !1
      }
    ), ne(
      () => a.formData,
      (_, S) => {
        o("update:modelValue", _);
      },
      {
        deep: !0
      }
    );
    function c() {
      a.layout = se(s, "layout"), n = Object.assign({}, n, s.meta), a.meta = n, a.formData = Object.assign({}, s.modelValue), m(a.formData, s.meta.properties), a.context = new Ue(), a.validate = new He(v, a);
    }
    function m(_, S) {
      Object.keys(S).forEach((R) => {
        const q = S[R];
        if (q.type !== "null")
          switch (q.type) {
            case H.Object:
              _[R] = _[R] || {}, m(_[R], q.properties);
              break;
            case H.Array:
              _[R] = _[R] || [];
              break;
            case H.Boolean:
              break;
            default:
              _[R] = _[R] || void 0;
              break;
          }
      });
    }
    function h(_) {
      return a.context.getContext(_);
    }
    async function g() {
      return await a.validate.runValidateForm();
    }
    function $(_) {
      const S = a.context.getContext("/");
      S && (S.value = _, o("update:modelValue", a.formData));
    }
    function k() {
      o("form-reset", ae(a.formData)), $({});
    }
    async function F() {
      i.value = !0;
      const _ = await g();
      i.value = !1, o("form-submit", {
        valid: _,
        data: _ ? ae(a.formData) : void 0
      });
    }
    return ke(() => {
      r.all.clear();
    }), e({
      getContext: h,
      validate: g,
      reset: $,
      clearForm: k,
      submitForm: F
    }), (_, S) => {
      const R = I("el-button"), q = I("el-space"), $e = I("el-form-item"), Ie = I("el-form");
      return p(), j("div", Ge, [
        C(Ie, {
          class: Z(["v", {
            v__inline: l(u),
            v__horizontal: t.layout === "horizontal"
          }]),
          inline: l(u),
          "label-width": l(u) ? null : "120px",
          "label-position": t.layout === "vertical" ? "top" : "right"
        }, {
          default: f(() => [
            C(Ve, {
              id: "/",
              meta: l(n)
            }, B({ _: 2 }, [
              z(l(d), (re) => ({
                name: re,
                fn: f((Ne) => [
                  O(_.$slots, re, J(Y({ ...Ne })))
                ])
              }))
            ]), 1032, ["meta"]),
            t.button === "default" ? (p(), y($e, {
              key: 0,
              class: "v__default-submit-button"
            }, {
              default: f(() => [
                C(q, null, {
                  default: f(() => [
                    C(R, {
                      type: "danger",
                      onClick: k
                    }, {
                      default: f(() => [
                        W(" \u91CD\u7F6E ")
                      ]),
                      _: 1
                    }),
                    C(R, {
                      type: "primary",
                      onClick: F,
                      loading: l(i)
                    }, {
                      default: f(() => [
                        W(" \u63D0\u4EA4 ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : t.button === "custom" ? O(_.$slots, "button", {
              key: 1,
              loading: l(i),
              clearForm: k,
              submitForm: F
            }) : (p(), j(T, { key: 2 }, [], 64))
          ]),
          _: 3
        }, 8, ["inline", "label-width", "label-position", "class"])
      ]);
    };
  }
}), qe = ["title"], Je = {
  key: 0,
  class: "v__optional"
}, Ye = ["innerHTML"], Qe = { name: "v-wrapper" }, Xe = /* @__PURE__ */ E({
  ...Qe,
  props: {
    id: null,
    show: { type: Boolean },
    meta: null
  },
  setup(t) {
    const e = t, { globalProperties: o } = je(), s = w("state"), n = s.context.getContext(e.id), i = b(() => Object.assign({}, s.ui, e.meta.ui)), a = b(() => Object.assign({}, s.ui, e.meta.ui).optionalHelp), d = b({
      get() {
        return n.error.value;
      },
      set(c) {
        n.error.value = c;
      }
    }), { appContext: v } = V(), r = Q(v);
    r.on(`${oe}-${s._formId}`, u), ke(() => {
      r.off(`${oe}-${s._formId}`, u);
    });
    function u(c) {
      c.id === e.id && (d.value = c.error ? c.error.message : void 0);
    }
    return (c, m) => {
      const h = I("el-icon"), g = I("el-tooltip"), $ = I("el-form-item");
      return p(), y($, {
        required: l(i).showRequired,
        error: l(d),
        size: l(i).size,
        class: Z([{ "no-label": !t.meta.title }])
      }, B({
        default: f(() => [
          O(c.$slots, "default", {}, void 0, !0),
          t.meta.description ? (p(), j("div", {
            key: 0,
            innerHTML: t.meta.description
          }, null, 8, Ye)) : X("", !0)
        ]),
        _: 2
      }, [
        t.meta.title ? {
          name: "label",
          fn: f(() => [
            ie("span", {
              class: "v__label-text",
              title: t.meta.title
            }, L(t.meta.title), 9, qe),
            l(i).optional || l(a) ? (p(), j("span", Je, [
              W(L(l(i).optional) + " ", 1),
              l(a).icon ? (p(), y(g, P({ key: 0 }, l(a), {
                placement: l(a).placement || "top"
              }), {
                default: f(() => [
                  C(h, null, {
                    default: f(() => [
                      (p(), y(Oe(l(o).$elIcons[l(a).icon])))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 16, ["placement"])) : X("", !0)
            ])) : X("", !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["required", "error", "size", "class"]);
    };
  }
});
const we = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [s, n] of e)
    o[s] = n;
  return o;
}, M = /* @__PURE__ */ we(Xe, [["__scopeId", "data-v-fd574d86"]]);
class K {
  constructor(e, o, s, n) {
    x(this, "id");
    x(this, "state");
    x(this, "meta", U({}));
    x(this, "type");
    x(this, "ui", U({}));
    x(this, "error", U(void 0));
    x(this, "_value", U());
    x(this, "_initMetaValue");
    x(this, "appContext");
    if (this.constructor == K)
      throw new Error("Abstract classes can't be instantiated.");
    this.id = s, this.state = o, this.meta.value = n, this.type = n.ui && n.ui.component || n.type, this.ui.value = Object.assign({}, o.ui, n.ui), this.appContext = e, this.error.value = void 0, o.context.addContext(s, this), this._value.value = void 0, this._initMetaValue = this.getInitMetaValue();
  }
  get value() {
    return this._value.value;
  }
  set value(e) {
    if (this._value.value === e)
      return;
    this.setValue(e), Q(this.appContext).emit(`${Ce}-${this.state._formId}`, {
      id: this.id,
      value: this._value.value
    }), this.state.updateObjProp(this.state.formData, this.id, this._value.value), this.state.validate.runValidationFormItem(this);
  }
  getInitMetaValue() {
    const e = this.id.split("/").filter((s) => s);
    let o = "";
    return e.reduce((s, n, i) => (i === e.length - 1 && (o = s[n]), s[n] || {}), this.state.formData), o;
  }
}
class Ze extends K {
  constructor(o, s, n, i) {
    super(o, s, n, i);
    x(this, "childMetaPairs");
    this.childMetaPairs = this.buildChildMetaPairs(n, i), s.context.addContext(n, this);
  }
  initValue() {
  }
  setValue() {
  }
  set value(o) {
    this.childMetaPairs.forEach(({ key: s, propertyName: n }) => {
      const i = this.state.context.getContext(s);
      i && (i.value = (o || {})[n]);
    });
  }
  buildChildMetaPairs(o, s) {
    const n = [];
    for (const i of Object.keys(s.properties || {})) {
      const a = o === "/" ? `/${i}` : `${o}/${i}`;
      n.push({
        key: a,
        propertyName: i,
        meta: s.properties[i]
      });
    }
    return n;
  }
}
const et = /* @__PURE__ */ E({
  __name: "Object",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, { slotsName: o } = ue(e.meta), s = w("state"), { appContext: n } = V(), i = new Ze(n, s, e.id, e.meta), a = b(() => i.ui.value || {}), d = b(() => v.value === "inline" ? 0 : Object.assign({}, s.ui.grid, a.value.grid).gutter), v = b(() => s.layout.value);
    function r(m) {
      return m.ui && m.ui.show;
    }
    function u(m) {
      if (v.value === "inline")
        return { span: null };
      const h = m.meta.ui && m.meta.ui.grid || {};
      return Object.assign({}, s.ui.grid, a.value.grid, h);
    }
    const c = i.childMetaPairs;
    return (m, h) => {
      const g = I("el-col"), $ = I("el-row");
      return p(), y($, { gutter: l(d) }, {
        default: f(() => [
          (p(!0), j(T, null, z(l(c), (k, F) => (p(), y(g, {
            key: F,
            span: u(k).span,
            offset: u(k).offset,
            xs: u(k).xs,
            sm: u(k).sm,
            md: u(k).md,
            lg: u(k).lg,
            xl: u(k).xl,
            xxl: u(k).xxl,
            style: xe({ display: l(v) === "inline" ? "inline-block" : "block" })
          }, {
            default: f(() => [
              C(Ve, {
                id: k.key,
                meta: k.meta,
                show: r(k.meta)
              }, B({ _: 2 }, [
                z(l(o), (_) => ({
                  name: _,
                  fn: f((S) => [
                    O(m.$slots, _, J(Y({ ...S })))
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
class G extends K {
  constructor(o, s, n, i) {
    var a;
    super(o, s, n, i);
    x(this, "open");
    this.initValue(), this.meta.value && (this.open = ((a = this.meta.value.ui) == null ? void 0 : a.open) || !1);
  }
  initValue() {
    this._initMetaValue ? this.value = this._initMetaValue : this.meta.value.default && (this.value = this.meta.value.default);
  }
  setValue(o) {
    this._value.value = o || void 0;
  }
}
function D(t, e) {
  const o = U({});
  return Object.keys(e.value).forEach((n) => {
    t.indexOf(n) > -1 && (o.value[n] = se(e.value, n));
  }), { bindings: o };
}
const tt = /* @__PURE__ */ E({
  __name: "String",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, o = w("state"), { appContext: s } = V(), n = new G(s, o, e.id, e.meta), { bindings: i } = D(Object.keys(ce.props), n.ui), a = b(() => n.ui.value || {}), d = b({
      get() {
        return n.value;
      },
      set(r) {
        n.value = r;
      }
    });
    function v(r) {
      a.value.change && a.value.change(r);
    }
    return (r, u) => (p(), y(M, {
      id: t.id,
      meta: t.meta
    }, {
      default: f(() => [
        C(l(ce), P(l(i), {
          disabled: t.meta.readOnly,
          minlength: t.meta.minLength,
          maxlength: t.meta.maxLength,
          modelValue: l(d),
          "onUpdate:modelValue": u[0] || (u[0] = (c) => A(d) ? d.value = c : null),
          onChange: v
        }), B({ _: 2 }, [
          l(a).slotNameOfPrefix ? {
            name: "prefix",
            fn: f(() => [
              O(r.$slots, l(a).slotNameOfPrefix)
            ]),
            key: "0"
          } : void 0,
          l(a).slotNameOfSuffix ? {
            name: "suffix",
            fn: f(() => [
              O(r.$slots, l(a).slotNameOfSuffix)
            ]),
            key: "1"
          } : void 0,
          l(a).slotNameOfPrepend ? {
            name: "prepend",
            fn: f(() => [
              O(r.$slots, l(a).slotNameOfPrepend)
            ]),
            key: "2"
          } : void 0,
          l(a).slotNameOfAppend ? {
            name: "append",
            fn: f(() => [
              O(r.$slots, l(a).slotNameOfAppend)
            ]),
            key: "3"
          } : void 0
        ]), 1040, ["disabled", "minlength", "maxlength", "modelValue"])
      ]),
      _: 3
    }, 8, ["id", "meta"]));
  }
});
class nt extends K {
  constructor(e, o, s, n) {
    super(e, o, s, n), this.initValue();
  }
  initValue() {
    typeof this._initMetaValue < "u" ? this.value = this._initMetaValue : typeof this.meta.value.default == "boolean" && (this.value = this.meta.value.default);
  }
  setValue(e) {
    this._value.value = e || !1;
  }
}
const at = /* @__PURE__ */ E({
  __name: "Boolean",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, o = w("state"), { appContext: s } = V(), n = new nt(s, o, e.id, e.meta), { bindings: i } = D(Object.keys(de.props), n.ui), a = b(() => n.ui.value || {});
    i.value.style = se(a.value, "style");
    const d = b({
      get() {
        return n.value;
      },
      set(r) {
        n.value = r || !1;
      }
    });
    function v(r) {
      a.value.change && a.value.change(r);
    }
    return (r, u) => (p(), y(M, {
      id: t.id,
      meta: t.meta
    }, {
      default: f(() => [
        C(l(de), P({
          class: "v__boolean",
          modelValue: l(d),
          "onUpdate:modelValue": u[0] || (u[0] = (c) => A(d) ? d.value = c : null)
        }, l(i), {
          disabled: t.meta.readOnly,
          onChange: v
        }), null, 16, ["modelValue", "disabled"])
      ]),
      _: 1
    }, 8, ["id", "meta"]));
  }
}), lt = /* @__PURE__ */ E({
  __name: "AutoComplete",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, o = w("state"), { appContext: s } = V(), n = new G(s, o, e.id, e.meta), { bindings: i } = D(Object.keys(me.props), n.ui), a = b(() => n.ui.value || {}), d = b({
      get() {
        return n.value;
      },
      set(u) {
        n.value = u || void 0;
      }
    });
    function v(u) {
      a.value.change && a.value.change(l(u));
    }
    function r(u) {
      a.value.select && a.value.select(u);
    }
    return (u, c) => (p(), y(M, {
      id: t.id,
      meta: t.meta
    }, {
      default: f(() => [
        C(l(me), P(l(i), {
          disabled: t.meta.readOnly,
          modelValue: l(d),
          "onUpdate:modelValue": c[0] || (c[0] = (m) => A(d) ? d.value = m : null),
          onChange: v,
          onSelect: r
        }), B({ _: 2 }, [
          l(a).slotNameOfPrefix ? {
            name: "prefix",
            fn: f(() => [
              O(u.$slots, l(a).slotNameOfPrefix)
            ]),
            key: "0"
          } : void 0,
          l(a).slotNameOfSuffix ? {
            name: "suffix",
            fn: f(() => [
              O(u.$slots, l(a).slotNameOfSuffix)
            ]),
            key: "1"
          } : void 0,
          l(a).slotNameOfPrepend ? {
            name: "prepend",
            fn: f(() => [
              O(u.$slots, l(a).slotNameOfPrepend)
            ]),
            key: "2"
          } : void 0,
          l(a).slotNameOfAppend ? {
            name: "append",
            fn: f(() => [
              O(u.$slots, l(a).slotNameOfAppend)
            ]),
            key: "3"
          } : void 0,
          l(a).slotNameOfDefault ? {
            name: "default",
            fn: f((m) => [
              O(u.$slots, l(a).slotNameOfDefault, J(Y(m)))
            ]),
            key: "4"
          } : void 0
        ]), 1040, ["disabled", "modelValue"])
      ]),
      _: 3
    }, 8, ["id", "meta"]));
  }
}), ot = /* @__PURE__ */ E({
  __name: "Checkbox",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, o = w("state"), { appContext: s } = V(), n = new G(s, o, e.id, e.meta), i = b(() => n.ui.value || {});
    let a = U();
    if (i.value.group) {
      const { bindings: r } = D(
        Object.keys(fe.props),
        n.ui
      );
      a.value = r.value;
    } else {
      const { bindings: r } = D(Object.keys(te.props), n.ui);
      a.value = r.value;
    }
    const d = b({
      get() {
        return n.value;
      },
      set(r) {
        n.value = r;
      }
    });
    function v(r) {
      i.value.change && i.value.change(r);
    }
    return (r, u) => {
      const c = I("el-checkbox-button");
      return p(), y(M, {
        id: t.id,
        meta: t.meta
      }, {
        default: f(() => [
          l(i).group ? (p(), y(l(fe), P({
            key: 0,
            class: "v__checkbox",
            modelValue: l(d),
            "onUpdate:modelValue": u[0] || (u[0] = (m) => A(d) ? d.value = m : null)
          }, l(a), {
            disabled: t.meta.readOnly,
            onChange: v
          }), {
            default: f(() => [
              l(i).button ? (p(!0), j(T, { key: 0 }, z(l(i).options, (m, h) => (p(), y(c, {
                key: h,
                label: m.label
              }, {
                default: f(() => [
                  W(L(m.label), 1)
                ]),
                _: 2
              }, 1032, ["label"]))), 128)) : (p(!0), j(T, { key: 1 }, z(l(i).options, (m, h) => (p(), y(l(te), {
                key: h,
                label: m.label,
                disabled: m.disabled
              }, {
                default: f(() => [
                  W(L(m.label), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 16, ["modelValue", "disabled"])) : (p(), y(l(te), P({
            key: 1,
            class: "v__checkbox",
            modelValue: l(d),
            "onUpdate:modelValue": u[1] || (u[1] = (m) => A(d) ? d.value = m : null)
          }, l(a), {
            disabled: t.meta.readOnly,
            onChange: v
          }), null, 16, ["modelValue", "disabled"]))
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
}), st = /* @__PURE__ */ E({
  __name: "Date",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, o = w("state"), { appContext: s } = V(), n = new G(s, o, e.id, e.meta), { bindings: i } = D(Object.keys(ve.props), n.ui), a = b(() => n.ui.value || {}), d = b({
      get() {
        return n.value;
      },
      set(r) {
        n.value = r;
      }
    });
    function v(r) {
      a.value.change && a.value.change(r);
    }
    return (r, u) => (p(), y(M, {
      id: t.id,
      meta: t.meta
    }, {
      default: f(() => [
        C(l(ve), P({
          modelValue: l(d),
          "onUpdate:modelValue": u[0] || (u[0] = (c) => A(d) ? d.value = c : null)
        }, l(i), {
          disabled: t.meta.readOnly,
          onChange: v
        }), B({ _: 2 }, [
          l(a).slotNameOfRangeSeparator ? {
            name: "range-separator",
            fn: f(() => [
              O(r.$slots, l(a).slotNameOfRangeSeparator)
            ]),
            key: "0"
          } : void 0,
          l(a).slotNameOfDefault ? {
            name: "default",
            fn: f((c) => [
              O(r.$slots, l(a).slotNameOfDefault, J(Y(c)))
            ]),
            key: "1"
          } : void 0
        ]), 1040, ["modelValue", "disabled"])
      ]),
      _: 3
    }, 8, ["id", "meta"]));
  }
}), it = /* @__PURE__ */ E({
  __name: "Time",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, o = w("state"), { appContext: s } = V(), n = new G(s, o, e.id, e.meta), { bindings: i } = D(Object.keys(pe.props), n.ui), a = b(() => n.ui.value || {}), d = b({
      get() {
        return n.value;
      },
      set(r) {
        n.value = r;
      }
    });
    function v(r) {
      a.value.change && a.value.change(r);
    }
    return (r, u) => (p(), y(M, {
      id: t.id,
      meta: t.meta
    }, {
      default: f(() => [
        C(l(pe), P({
          class: "v__time",
          modelValue: l(d),
          "onUpdate:modelValue": u[0] || (u[0] = (c) => A(d) ? d.value = c : null)
        }, l(i), {
          disabled: t.meta.readOnly,
          onChange: v
        }), null, 16, ["modelValue", "disabled"])
      ]),
      _: 1
    }, 8, ["id", "meta"]));
  }
});
class ee extends K {
  constructor(e, o, s, n) {
    super(e, o, s, n), this.initValue();
  }
  initValue() {
    this._initMetaValue ? this.value = this._initMetaValue : l(this.meta).default && (this.value = l(this.meta).default);
  }
  setValue(e) {
    switch (this.type) {
      case "slider":
        this._value.value = Be(e) || Ee(e) ? e : void 0;
        break;
      default:
        this._value.value = e || void 0;
        break;
    }
  }
}
const ut = /* @__PURE__ */ E({
  __name: "Number",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, o = w("state"), { appContext: s } = V(), n = new ee(s, o, e.id, e.meta), { bindings: i } = D(Object.keys(he.props), n.ui), a = b(() => n.ui.value || {}), d = b({
      get() {
        return n.value;
      },
      set(r) {
        n.value = r;
      }
    });
    function v(r, u) {
      a.value.change && a.value.change(r, u);
    }
    return (r, u) => (p(), y(M, {
      id: t.id,
      meta: t.meta
    }, {
      default: f(() => [
        C(l(he), P({
          class: "v__number",
          modelValue: l(d),
          "onUpdate:modelValue": u[0] || (u[0] = (c) => A(d) ? d.value = c : null)
        }, l(i), {
          disabled: t.meta.readOnly,
          min: t.meta.minimum,
          max: t.meta.maximum,
          onChange: v
        }), null, 16, ["modelValue", "disabled", "min", "max"])
      ]),
      _: 1
    }, 8, ["id", "meta"]));
  }
}), rt = { class: "v__label-text" }, ct = ["innerHTML"], dt = ["textContent"], mt = /* @__PURE__ */ E({
  __name: "Text",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, o = w("state"), { appContext: s } = V(), n = new G(s, o, e.id, e.meta), i = b(() => n.ui.value || {}), a = b(
      () => Te(l(i).text) ? l(i).text() : l(i).text
    );
    return (d, v) => {
      const r = I("el-form-item");
      return p(), j("div", null, [
        C(r, {
          class: Z({ "no-label": !t.meta.title })
        }, B({
          default: f(() => [
            l(i).slotNameOfDefault ? O(d.$slots, l(i).slotNameOfDefault, { key: 0 }) : (p(), j(T, { key: 1 }, [
              l(i).html ? (p(), j("span", {
                key: 0,
                innerHTML: l(i).html,
                class: "v__content-text"
              }, null, 8, ct)) : (p(), j("span", {
                key: 1,
                textContent: L(l(a)),
                class: "v__content-text"
              }, null, 8, dt))
            ], 64))
          ]),
          _: 2
        }, [
          t.meta.title ? {
            name: "label",
            fn: f(() => [
              ie("span", rt, L(t.meta.title), 1)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["class"])
      ]);
    };
  }
}), ft = /* @__PURE__ */ E({
  __name: "Slider",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, o = w("state"), { appContext: s } = V(), n = new ee(s, o, e.id, e.meta), { bindings: i } = D(Object.keys(be.props), n.ui), a = b(() => n.ui.value || {}), d = b({
      get() {
        return n.value;
      },
      set(u) {
        a.value.range ? n.value = u || [] : n.value = Ee(u) ? u : void 0;
      }
    });
    function v(u) {
      var c, m;
      (m = (c = l(a)).input) == null || m.call(c, u);
    }
    function r(u) {
      var c, m;
      (m = (c = l(a)).change) == null || m.call(c, u);
    }
    return (u, c) => (p(), y(M, {
      id: t.id,
      meta: t.meta
    }, {
      default: f(() => [
        C(l(be), P(l(i), {
          disabled: t.meta.readOnly,
          min: t.meta.minimum || 0,
          max: t.meta.maximum || 100,
          step: t.meta.multipleOf || 1,
          modelValue: l(d),
          "onUpdate:modelValue": c[0] || (c[0] = (m) => A(d) ? d.value = m : null),
          onInput: v,
          onChange: r
        }), null, 16, ["disabled", "min", "max", "step", "modelValue"])
      ]),
      _: 1
    }, 8, ["id", "meta"]));
  }
}), vt = /* @__PURE__ */ E({
  __name: "Rate",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, o = w("state"), { appContext: s } = V(), n = new ee(s, o, e.id, e.meta), { bindings: i } = D(Object.keys(ge.props), n.ui), a = b(() => n.ui.value || {}), d = b({
      get() {
        return n.value;
      },
      set(r) {
        n.value = r;
      }
    });
    function v(r) {
      var u, c;
      (c = (u = l(a)).change) == null || c.call(u, r);
    }
    return (r, u) => (p(), y(M, {
      id: t.id,
      meta: t.meta
    }, {
      default: f(() => [
        C(l(ge), P(l(i), {
          disabled: t.meta.readOnly,
          max: t.meta.maximum || 5,
          modelValue: l(d),
          "onUpdate:modelValue": u[0] || (u[0] = (c) => A(d) ? d.value = c : null),
          onChange: v
        }), null, 16, ["disabled", "max", "modelValue"])
      ]),
      _: 1
    }, 8, ["id", "meta"]));
  }
}), pt = /* @__PURE__ */ E({
  __name: "Tag",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, o = w("state"), { appContext: s } = V(), n = new ee(s, o, e.id, e.meta), i = U([]), a = b(() => n.ui.value || {}), d = b({
      get() {
        return n.value;
      },
      set(c) {
        a.value.range ? n.value = c || [] : n.value = c;
      }
    });
    ne(() => l(n.meta).enum, u, { immediate: !0 });
    function v(c, m) {
      var h, g, $, k;
      c.disabled || (c.checked = m, r(), (g = (h = l(a)).checkedChange) == null || g.call(h, m), (k = ($ = l(a)).change) == null || k.call($, ae(l(d))));
    }
    function r() {
      const c = l(i).filter((m) => m.checked).map((m) => m.value);
      d.value = c.length ? c : void 0;
    }
    function u(c) {
      let m = l(c);
      m == null || !Array.isArray(m) || m.length === 0 || (typeof m[0] != "object" && (m = m.map((h) => ({
        label: h,
        value: h
      }))), m.forEach((h) => {
        h.checked = (d.value || []).indexOf(h.value) > -1;
      }), m.forEach((h) => h.disabled = e.meta.readOnly), i.value = m);
    }
    return (c, m) => {
      const h = I("el-check-tag");
      return p(), y(M, {
        id: t.id,
        meta: t.meta
      }, {
        default: f(() => [
          (p(!0), j(T, null, z(i.value, (g) => (p(), y(h, {
            key: g.value,
            class: Z({ disabled: g.disabled }),
            checked: g.checked,
            onChange: ($) => v(g, $)
          }, {
            default: f(() => [
              ie("span", null, L(g.label), 1)
            ]),
            _: 2
          }, 1032, ["class", "checked", "onChange"]))), 128))
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
});
const ht = /* @__PURE__ */ we(pt, [["__scopeId", "data-v-19eb1c83"]]), bt = /* @__PURE__ */ E({
  __name: "Radio",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, o = w("state"), { appContext: s } = V(), n = new G(s, o, e.id, e.meta), { bindings: i } = D(Object.keys(_e.props), n.ui), a = b(() => n.ui.value || {}), d = b({
      get() {
        return n.value;
      },
      set(r) {
        n.value = r;
      }
    });
    function v(r) {
      a.value.change && a.value.change(r);
    }
    return (r, u) => {
      const c = I("el-radio-button"), m = I("el-radio");
      return p(), y(M, {
        id: t.id,
        meta: t.meta
      }, {
        default: f(() => [
          C(l(_e), P(l(i), {
            modelValue: l(d),
            "onUpdate:modelValue": u[0] || (u[0] = (h) => A(d) ? d.value = h : null),
            disabled: t.meta.readOnly,
            onChange: v
          }), B({
            default: f(() => [
              l(a).button ? (p(!0), j(T, { key: 0 }, z(l(a).options, (h, g) => (p(), y(c, {
                key: g,
                label: h.label,
                size: l(a).size,
                border: l(a).border,
                disabled: t.meta.readOnly || h.disabled
              }, {
                default: f(() => [
                  W(L(h.text || h.label), 1)
                ]),
                _: 2
              }, 1032, ["label", "size", "border", "disabled"]))), 128)) : (p(!0), j(T, { key: 1 }, z(l(a).options, (h, g) => (p(), y(m, {
                key: g,
                label: h.label,
                size: l(a).size,
                border: l(a).border,
                disabled: t.meta.readOnly || h.disabled
              }, {
                default: f(() => [
                  W(L(h.text || h.label), 1)
                ]),
                _: 2
              }, 1032, ["label", "size", "border", "disabled"]))), 128))
            ]),
            _: 2
          }, [
            l(a).slotNameOfDefault ? {
              name: "default",
              fn: f(() => [
                O(r.$slots, l(a).slotNameOfDefault)
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue", "disabled"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), gt = /* @__PURE__ */ E({
  __name: "Select",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, o = w("state"), { appContext: s } = V(), n = new G(s, o, e.id, e.meta), { bindings: i } = D(Object.keys(ye.props), n.ui), a = b(() => n.ui.value || {}), d = b({
      get() {
        return n.value;
      },
      set(g) {
        n.value = g;
      }
    });
    function v(g) {
      l(a).change && l(a).change(g);
    }
    function r() {
      l(a).blur && l(a).blur();
    }
    function u(g) {
      l(a).visibleChange && l(a).visibleChange(g);
    }
    function c() {
      l(a).focus && l(a).focus();
    }
    function m() {
      l(a).clear && l(a).clear();
    }
    function h(g) {
      l(a).select && l(a).removeTag(g);
    }
    return (g, $) => {
      const k = I("el-option");
      return p(), y(M, {
        id: t.id,
        meta: t.meta
      }, {
        default: f(() => [
          C(l(ye), P({
            modelValue: l(d),
            "onUpdate:modelValue": $[0] || ($[0] = (F) => A(d) ? d.value = F : null)
          }, l(i), {
            disabled: t.meta.readOnly,
            onBlur: r,
            onFocus: c,
            onClear: m,
            onRemoveTag: h,
            onVisibleChange: u,
            onChange: v
          }), B({
            default: f(() => [
              (p(!0), j(T, null, z(l(a).options, (F, _) => (p(), y(k, {
                key: _,
                label: F.label,
                value: F.value,
                disabled: F.disabled
              }, null, 8, ["label", "value", "disabled"]))), 128))
            ]),
            _: 2
          }, [
            l(a).slotNameOfSelectDefault ? {
              name: "default",
              fn: f(() => [
                O(g.$slots, l(a).slotNameOfSelectDefault)
              ]),
              key: "0"
            } : void 0,
            l(a).slotNameOfPrefix ? {
              name: "prefix",
              fn: f(() => [
                O(g.$slots, l(a).slotNameOfPrefix)
              ]),
              key: "1"
            } : void 0,
            l(a).slotNameOfEmpty ? {
              name: "empty",
              fn: f(() => [
                O(g.$slots, l(a).slotNameOfEmpty)
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
function N(t, e, o) {
  t.component(e, o);
}
function _t(t) {
  N(t, "v-object", et), N(t, "v-string", tt), N(t, "v-boolean", at), N(t, "v-autocomplete", lt), N(t, "v-checkbox", ot), N(t, "v-date", st), N(t, "v-number", ut), N(t, "v-time", it), N(t, "v-text", mt), N(t, "v-radio", bt), N(t, "v-slider", ft), N(t, "v-rate", vt), N(t, "v-tag", ht), N(t, "v-select", gt);
}
const yt = [Ke, M];
function xt(t) {
  yt.forEach((e) => {
    t.component(e.name, e);
  }), _t(t);
}
const Ot = {
  installFormly: xt
}, kt = function(t, e) {
  if (t.config.globalProperties.emitter = Ae(), e.lib === "element-plus")
    Ot.installFormly(t);
  else
    throw new Error("Unsupport lib");
  return t.config.globalProperties.$VFORMLY_OPTIONS = e, t;
}, $t = {
  install: kt
};
export {
  $t as default
};
