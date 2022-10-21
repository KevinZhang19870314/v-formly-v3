var pe = Object.defineProperty;
var he = (t, e, o) => e in t ? pe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var b = (t, e, o) => (he(t, typeof e != "symbol" ? e + "" : e, o), o);
import { defineComponent as M, ref as j, inject as F, computed as C, getCurrentInstance as V, openBlock as _, createElementBlock as z, normalizeStyle as re, unref as s, createBlock as k, resolveDynamicComponent as le, createSlots as P, renderList as K, withCtx as f, renderSlot as O, normalizeProps as Y, guardReactiveProps as Q, createCommentVNode as L, provide as ge, watch as X, onBeforeUnmount as ue, resolveComponent as I, createVNode as N, normalizeClass as ce, createTextVNode as J, Fragment as ae, createElementVNode as ye, toDisplayString as W, mergeProps as U, isRef as S } from "vue";
import _e from "ajv";
import { Input as be, Switch as Ce, AutoComplete as Oe, CheckboxGroup as xe, RangePicker as ke, DatePicker as Ie, TimeRangePicker as $e, TimePicker as Ee, InputNumber as we } from "ant-design-vue";
import je from "mitt";
function T(t) {
  return t.config.globalProperties.emitter;
}
var B = /* @__PURE__ */ ((t) => (t.Object = "object", t.Array = "array", t.Boolean = "boolean", t.Integer = "integer", t))(B || {});
function ne(t) {
  const e = [], o = "slotName";
  return t && !t.type && (t.type = B.Object), Z(t, e, o), { slotsName: e };
}
function Z(t, e, o) {
  switch (t.type) {
    case B.Object:
      Object.keys(t.properties).forEach((i) => {
        const n = t.properties[i];
        Z(n, e, o);
      });
      break;
    case B.Array:
      Object.keys(t.items.properties).forEach((i) => {
        const n = t.items.properties[i];
        Z(n, e, o);
      });
      break;
    default:
      if (t.ui) {
        const i = Object.keys(t.ui).filter(
          (n) => n.startsWith(o)
        );
        i && i.length > 0 && i.forEach((n) => {
          e.push(t.ui[n]);
        });
      }
      break;
  }
}
function Ne() {
  return { visibleIf: Ve };
}
function Ve(t, e, o, i) {
  if (!e.ui || !e.ui.visibleIf)
    return o;
  const n = Object.keys(e.ui.visibleIf)[0], r = e.ui.visibleIf[n];
  return i = i || {}, typeof r != "function" || n !== i.id ? o : r.call(null, t, i.id, i.value);
}
const de = "form-value-change", ee = "form-error-change", fe = /* @__PURE__ */ M({
  __name: "FormlyItem",
  props: {
    id: null,
    show: { type: Boolean, default: !0 },
    meta: null
  },
  setup(t) {
    const e = t;
    let o = j(!0);
    const { slotsName: i } = ne(e.meta), n = F("state"), r = C(() => `v-${e.meta.ui && e.meta.ui.component || e.meta.type}`), a = C(() => n.layout);
    l();
    function l() {
      if (!e.meta.type)
        throw new Error(
          "Form item type must be one of these: number, string, boolean, array, object"
        );
      o.value = e.show, m(o.value, e.id);
      const { visibleIf: d } = Ne(), { appContext: c } = V();
      T(c).on(`${de}-${n._formId}`, (u) => {
        o.value = d(n.context, e.meta, o.value, {
          id: u.id,
          value: u.value
        });
        const v = n.context.getContext(e.id);
        v && m(o.value, v.id);
      });
    }
    function m(d, c) {
      d ? n._ignoreErrorIds = n._ignoreErrorIds.filter((p) => p !== c) : n._ignoreErrorIds.indexOf(c) === -1 && n._ignoreErrorIds.push(c);
    }
    return (d, c) => (_(), z("div", {
      style: re({ display: s(a) === "inline" ? "inline-block" : "block" })
    }, [
      s(o) ? (_(), k(le(s(r)), {
        key: 0,
        id: t.id,
        meta: t.meta
      }, P({ _: 2 }, [
        K(s(i), (p) => ({
          name: p,
          fn: f((u) => [
            O(d.$slots, p, Y(Q({ ...u })))
          ])
        }))
      ]), 1032, ["id", "meta"])) : L("", !0)
    ], 4));
  }
});
class Ae {
  constructor() {
    b(this, "_map", /* @__PURE__ */ new Map());
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
}
function Pe(t = 8, e = 10) {
  const o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), i = e || o.length, n = [];
  if (t)
    for (let r = 0; r < t; r++)
      n[r] = o[0 | Math.random() * i];
  else {
    let r;
    n[8] = n[13] = n[18] = n[23] = "-", n[14] = "4";
    for (let a = 0; a < 36; a++)
      n[a] || (r = 0 | Math.random() * 16, n[a] = o[a == 19 ? r & 3 | 8 : r]);
  }
  return n.join("");
}
function te(t) {
  if (t === void 0)
    return;
  if (t === null)
    return null;
  const e = Object.assign({}, t);
  return Object.keys(e).forEach(
    (o) => e[o] = typeof t[o] == "object" ? te(t[o]) : t[o]
  ), Array.isArray(t) ? (e.length = t.length, Array.from(e)) : e;
}
function me() {
  const { appContext: t } = V(), e = t.config.globalProperties;
  return {
    appContext: t,
    globalProperties: e
  };
}
class Me {
  constructor() {
    b(this, "_formId", Pe(4));
    b(this, "_ignoreErrorIds", []);
    b(this, "_context");
    b(this, "_layout", "horizontal");
    b(this, "_ajvOptions", {
      allErrors: !0,
      strict: !1,
      loopEnum: 50
    });
    b(this, "_formData", j({}));
    b(this, "_meta", {});
    b(this, "_ui", {
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
    b(this, "_validate");
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
  updateObjProp(e, o, i) {
    const [n, ...r] = o.split("/").filter((a) => a);
    r.length ? this.updateObjProp(e[n], r.join("/"), i) : e && (e[n] = i);
  }
  _applyUseOptions() {
    const { globalProperties: e } = me(), o = e.$VFORMLY_OPTIONS;
    !o || typeof o != "object" || (this.ui = o.ui);
  }
}
class Se {
  constructor(e, o) {
    b(this, "state");
    b(this, "_ajv");
    b(this, "_validate");
    b(this, "appContext");
    this.state = o, this._ajv = new _e(o.ajvOptions), this._validate = null, this.appContext = e;
  }
  async runValidateForm() {
    const { valid: e, errors: o } = this._isAjvValid(), n = this.state.context.getContexts().values();
    let r = !0;
    for (const a of n)
      r = await this._validation(a, e, o) && r;
    return r;
  }
  async runValidationFormItem(e) {
    const { valid: o, errors: i } = this._isAjvValid();
    return await this._validation(e, o, i);
  }
  _ajvValidate(e) {
    return this._validate ? this._validate : (this._validate = this._ajv.compile(e), this._validate);
  }
  _getAjvError(e, o) {
    let i;
    for (let n = 0; n < o.length; n++) {
      const r = o[n], a = this._getId(r);
      if (e === a) {
        i = r;
        break;
      }
    }
    return i;
  }
  _isAjvValid() {
    const e = this._ajvValidate(this.state.meta);
    return { valid: e(this.state.formData || {}), errors: e.errors };
  }
  async _validation(e, o, i) {
    let n = [];
    const r = `${ee}-${this.state._formId}`, a = T(this.appContext);
    if (o)
      return a.emit(r, {
        id: e.id,
        error: void 0
      }), !0;
    {
      const l = this._getCustomError(e), m = await this._getCustomAsyncError(e), d = [...l, ...m];
      this._replaceWithDefaultErrors(e, i), this._replaceWithCustomErrors(e.id, i, d);
      const c = this.state.ui.ingoreKeywords || [];
      n = i.filter(
        (u) => c.indexOf(u.keyword) === -1
      ), n = this._removeIgnoreErrors(n);
      const p = this._getAjvError(e.id, n);
      return a.emit(r, {
        id: e.id,
        error: p
      }), !p;
    }
  }
  _getCustomError(e) {
    const o = e.meta.ui && e.meta.ui.validator;
    return o ? o(e.value) : [];
  }
  async _getCustomAsyncError(e) {
    const o = e.meta.ui && e.meta.ui.validatorAsync;
    return o ? await o(e.value) : [];
  }
  _replaceWithDefaultErrors(e, o) {
    if (!o || o.length === 0)
      return;
    const i = e.meta.ui && e.meta.ui.errors || {}, n = Object.assign({}, this.state.ui.errors, i), r = Object.keys(n);
    r && r.length > 0 && o.forEach((a) => {
      r.indexOf(a.keyword) > -1 && (a.message = n[a.keyword]);
    });
  }
  _replaceWithCustomErrors(e, o, i) {
    i.forEach((n) => {
      const r = o.find(
        (a) => a.keyword === n.keyword && this._getId(a) === e
      );
      r && (r.message = n.message);
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
const Fe = { class: "v__formly" }, De = { name: "v-formly-v3" }, Be = /* @__PURE__ */ M({
  ...De,
  props: {
    modelValue: null,
    layout: { default: "horizontal" },
    button: null,
    meta: null
  },
  emits: ["update:modelValue", "form-reset", "form-submit"],
  setup(t, { expose: e, emit: o }) {
    const i = t;
    if (!i.meta || typeof i.meta.properties > "u")
      throw new Error("Invalid Schema");
    let n = { type: B.Object }, r = j(!1);
    const a = new Me();
    ge("state", a);
    const { slotsName: l } = ne(i.meta), { appContext: m } = V(), d = T(m);
    p();
    const c = C(() => {
      const y = Object.assign({}, a.ui);
      return i.layout === "vertical" ? null : { span: y.spanControl, offset: y.spanLabel };
    });
    X(
      () => i.modelValue,
      (y, E) => {
        JSON.stringify(y) !== JSON.stringify(E) && h(y);
      },
      {
        deep: !1
      }
    ), X(
      () => a.formData,
      (y, E) => {
        o("update:modelValue", y);
      },
      {
        deep: !0
      }
    );
    function p() {
      a.layout = i.layout, n = Object.assign({}, n, i.meta), a.meta = n, a.formData = Object.assign({}, i.modelValue), u(a.formData, i.meta.properties), a.context = new Ae(), a.validate = new Se(m, a);
    }
    function u(y, E) {
      Object.keys(E).forEach((w) => {
        const $ = E[w];
        if ($.type !== "null")
          switch ($.type) {
            case B.Object:
              y[w] = y[w] || {}, u(y[w], $.properties);
              break;
            case B.Array:
              y[w] = y[w] || [];
              break;
            case B.Boolean:
              break;
            default:
              y[w] = y[w] || void 0;
              break;
          }
      });
    }
    function v(y) {
      return a.context.getContext(y);
    }
    async function x() {
      return await a.validate.runValidateForm();
    }
    function h(y) {
      const E = a.context.getContext("/");
      E && (E.value = y, o("update:modelValue", a.formData));
    }
    function g() {
      o("form-reset", te(a.formData)), h({});
    }
    async function A() {
      r.value = !0;
      const y = await x();
      r.value = !1, o("form-submit", {
        valid: y,
        data: y ? te(a.formData) : void 0
      });
    }
    return ue(() => {
      d.all.clear();
    }), e({
      getContext: v,
      validate: x,
      reset: h,
      clearForm: g,
      submitForm: A
    }), (y, E) => {
      const w = I("a-button"), $ = I("a-space"), oe = I("a-form");
      return _(), z("div", Fe, [
        N(oe, {
          class: ce(["v", {
            v__inline: t.layout === "inline",
            v__horizontal: t.layout === "horizontal"
          }]),
          layout: t.layout
        }, {
          default: f(() => [
            N(fe, {
              id: "/",
              meta: s(n)
            }, P({ _: 2 }, [
              K(s(l), (se) => ({
                name: se,
                fn: f((ve) => [
                  O(y.$slots, se, Y(Q({ ...ve })))
                ])
              }))
            ]), 1032, ["meta"]),
            t.button === "default" ? (_(), k(oe, {
              key: 0,
              wrapperCol: s(c),
              class: "v__default-submit-button"
            }, {
              default: f(() => [
                N($, null, {
                  default: f(() => [
                    N(w, {
                      type: "danger",
                      onClick: g
                    }, {
                      default: f(() => [
                        J(" \u91CD\u7F6E ")
                      ]),
                      _: 1
                    }),
                    N(w, {
                      type: "primary",
                      onClick: A,
                      loading: s(r)
                    }, {
                      default: f(() => [
                        J(" \u63D0\u4EA4 ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["wrapperCol"])) : t.button === "custom" ? O(y.$slots, "button", {
              key: 1,
              loading: s(r),
              clearForm: g,
              submitForm: A
            }) : (_(), z(ae, { key: 2 }, [], 64))
          ]),
          _: 3
        }, 8, ["layout", "class"])
      ]);
    };
  }
}), Ue = { class: "v__label-text" }, Re = {
  key: 0,
  class: "v__optional"
}, Le = ["innerHTML"], ze = {
  key: 1,
  class: "ant-form-item-explain-error"
}, He = { name: "v-wrapper" }, H = /* @__PURE__ */ M({
  ...He,
  props: {
    id: null,
    show: { type: Boolean },
    meta: null
  },
  setup(t) {
    const e = t, { globalProperties: o } = me(), i = F("state"), n = i.context.getContext(e.id), r = C(() => Object.assign({}, i.ui, e.meta.ui)), a = C(() => Object.assign({}, i.ui, e.meta.ui).optionalHelp), l = C(() => i.layout === "vertical" || i.layout === "inline" ? void 0 : { span: r.value.spanLabel }), m = C(() => i.layout === "vertical" || i.layout === "inline" ? void 0 : { span: r.value.spanControl, offset: r.value.offsetControl || 0 }), d = C({
      get() {
        return n.error.value;
      },
      set(v) {
        n.error.value = v;
      }
    }), { appContext: c } = V(), p = T(c);
    p.on(`${ee}-${i._formId}`, u), ue(() => {
      p.off(`${ee}-${i._formId}`, u);
    });
    function u(v) {
      v.id === e.id && (d.value = v.error ? v.error.message : void 0);
    }
    return (v, x) => {
      const h = I("a-tooltip"), g = I("a-form-item");
      return _(), k(g, {
        labelCol: s(l),
        wrapperCol: s(m),
        required: s(r).showRequired,
        class: ce({ "ant-form-item-has-error": s(d) })
      }, {
        label: f(() => [
          ye("span", Ue, W(t.meta.title), 1),
          s(r).optional || s(a) ? (_(), z("span", Re, [
            J(W(s(r).optional) + " ", 1),
            s(a) ? (_(), k(h, {
              key: 0,
              title: s(a).text,
              placement: s(a).placement,
              trigger: s(a).trigger,
              overlayStyle: s(a).overlayStyle,
              mouseEnterDelay: s(a).mouseEnterDelay,
              mouseLeaveDelay: s(a).mouseLeaveDelay,
              overlayClassName: s(a).overlayClassName
            }, {
              default: f(() => [
                s(a).icon ? (_(), k(le(s(o).$antIcons[s(a).icon]), { key: 0 })) : L("", !0)
              ]),
              _: 1
            }, 8, ["title", "placement", "trigger", "overlayStyle", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName"])) : L("", !0)
          ])) : L("", !0)
        ]),
        default: f(() => [
          O(v.$slots, "default"),
          t.meta.description ? (_(), z("div", {
            key: 0,
            class: "ant-form-extra",
            innerHTML: t.meta.description
          }, null, 8, Le)) : L("", !0),
          s(d) ? (_(), z("div", ze, W(s(d)), 1)) : L("", !0)
        ]),
        _: 3
      }, 8, ["labelCol", "wrapperCol", "required", "class"]);
    };
  }
});
class q {
  constructor(e, o, i, n) {
    b(this, "id");
    b(this, "state");
    b(this, "meta", j({}));
    b(this, "type");
    b(this, "ui", j({}));
    b(this, "error", j(void 0));
    b(this, "_value", j());
    b(this, "_initMetaValue");
    b(this, "appContext");
    if (this.constructor == q)
      throw new Error("Abstract classes can't be instantiated.");
    this.id = i, this.state = o, this.meta.value = n, this.type = n.ui && n.ui.component || n.type, this.ui.value = Object.assign({}, o.ui, n.ui), this.appContext = e, this.error.value = void 0, o.context.addContext(i, this), this._value.value = void 0, this._initMetaValue = this.getInitMetaValue(), this.initValue();
  }
  setValue(e) {
    this._value.value = e || void 0;
  }
  get value() {
    return this._value.value;
  }
  set value(e) {
    if (this._value.value === e)
      return;
    this.setValue(e), T(this.appContext).emit(`${de}-${this.state._formId}`, {
      id: this.id,
      value: this._value.value
    }), this.state.updateObjProp(this.state.formData, this.id, this._value.value), this.state.validate.runValidationFormItem(this);
  }
  getInitMetaValue() {
    const e = this.id.split("/").filter((i) => i);
    let o = "";
    return e.reduce((i, n, r) => (r === e.length - 1 && (o = i[n]), i[n] || {}), this.state.formData), o;
  }
}
class Ge extends q {
  constructor(o, i, n, r) {
    super(o, i, n, r);
    b(this, "childMetaPairs");
    this.childMetaPairs = this.buildChildMetaPairs(n, r), i.context.addContext(n, this);
  }
  initValue() {
  }
  set value(o) {
    this.childMetaPairs.forEach(({ key: i, propertyName: n }) => {
      const r = this.state.context.getContext(i);
      r.value = (o || {})[n];
    });
  }
  buildChildMetaPairs(o, i) {
    const n = [];
    for (const r of Object.keys(i.properties || {})) {
      const a = o === "/" ? `/${r}` : `${o}/${r}`;
      n.push({
        key: a,
        propertyName: r,
        meta: i.properties[r]
      });
    }
    return n;
  }
}
const Ke = /* @__PURE__ */ M({
  __name: "Object",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, { slotsName: o } = ne(e.meta), i = F("state"), { appContext: n } = V(), r = new Ge(n, i, e.id, e.meta), a = C(() => r.ui.value || {}), l = C(() => Object.assign({}, i.ui.grid, a.value.grid).gutter), m = C(() => i.layout);
    function d(u) {
      return u.ui && u.ui.show;
    }
    function c(u) {
      if (m.value === "inline")
        return {};
      const v = u.meta.ui && u.meta.ui.grid || {};
      return Object.assign({}, i.ui.grid, a.value.grid, v);
    }
    const p = r.childMetaPairs;
    return (u, v) => {
      const x = I("a-col"), h = I("a-row");
      return _(), k(h, { gutter: s(l) }, {
        default: f(() => [
          (_(!0), z(ae, null, K(s(p), (g, A) => (_(), k(x, {
            key: A,
            span: c(g).span,
            offset: c(g).offset,
            xs: c(g).xs,
            sm: c(g).sm,
            md: c(g).md,
            lg: c(g).lg,
            xl: c(g).xl,
            xxl: c(g).xxl,
            style: re({ display: s(m) === "inline" ? "inline-block" : "block" })
          }, {
            default: f(() => [
              N(fe, {
                id: g.key,
                meta: g.meta,
                show: d(g.meta)
              }, P({ _: 2 }, [
                K(s(o), (y) => ({
                  name: y,
                  fn: f((E) => [
                    O(u.$slots, y, Y(Q({ ...E })))
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
class G extends q {
  constructor(o, i, n, r) {
    var a;
    super(o, i, n, r);
    b(this, "open");
    this.meta.value && (this.open = ((a = this.meta.value.ui) == null ? void 0 : a.open) || !1);
  }
  initValue() {
    this._initMetaValue ? this.value = this._initMetaValue : this.meta.value.default && (this.value = this.meta.value.default);
  }
  setValue(o) {
    this._value.value = o || void 0;
  }
}
function R(t, e) {
  const o = j({});
  return X(
    () => e.value,
    (i, n) => {
      Object.keys(i).forEach((a) => {
        t.indexOf(a) > -1 && (o.value[a] = e.value[a]);
      });
    },
    {
      immediate: !0,
      deep: !0
    }
  ), { bindings: o };
}
const Te = /* @__PURE__ */ M({
  __name: "String",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, o = F("state"), { appContext: i } = V(), n = new G(i, o, e.id, e.meta), { bindings: r } = R(Object.keys(be.props), n.ui), a = C(() => n.ui.value || {}), l = C({
      get() {
        return n.value;
      },
      set(d) {
        n.value = d;
      }
    });
    function m() {
      a.value.change && a.value.change(s(l));
    }
    return (d, c) => {
      const p = I("a-input");
      return _(), k(H, {
        id: t.id,
        meta: t.meta
      }, {
        default: f(() => [
          N(p, U(s(r), {
            defaultValue: t.meta.defaultValue,
            disabled: t.meta.readOnly,
            maxLength: t.meta.maxLength,
            value: s(l),
            "onUpdate:value": c[0] || (c[0] = (u) => S(l) ? l.value = u : null),
            onChange: m
          }), P({ _: 2 }, [
            s(a).slotNameOfPrefix ? {
              name: "prefix",
              fn: f(() => [
                O(d.$slots, s(a).slotNameOfPrefix)
              ]),
              key: "0"
            } : void 0,
            s(a).slotNameOfSuffix ? {
              name: "suffix",
              fn: f(() => [
                O(d.$slots, s(a).slotNameOfSuffix)
              ]),
              key: "1"
            } : void 0,
            s(a).slotNameOfAddonBefore ? {
              name: "addonBefore",
              fn: f(() => [
                O(d.$slots, s(a).slotNameOfAddonBefore)
              ]),
              key: "2"
            } : void 0,
            s(a).slotNameOfAddonAfter ? {
              name: "addonAfter",
              fn: f(() => [
                O(d.$slots, s(a).slotNameOfAddonAfter)
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
class qe extends q {
  constructor(e, o, i, n) {
    super(e, o, i, n);
  }
  initValue() {
    typeof this._initMetaValue < "u" ? this.value = this._initMetaValue : typeof this.meta.value.default == "boolean" && (this.value = this.meta.value.default);
  }
  setValue(e) {
    this._value.value = e || !1;
  }
}
const We = /* @__PURE__ */ M({
  __name: "Boolean",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, o = F("state"), { appContext: i } = V(), n = new qe(i, o, e.id, e.meta), { bindings: r } = R(Object.keys(Ce.props), n.ui), a = C(() => n.ui.value || {}), l = C({
      get() {
        return n.value;
      },
      set(d) {
        n.value = d || !1;
      }
    });
    function m() {
      a.value.change && a.value.change(s(l));
    }
    return (d, c) => {
      const p = I("a-switch");
      return _(), k(H, {
        id: t.id,
        meta: t.meta
      }, {
        default: f(() => [
          N(p, U({
            class: "v__boolean",
            checked: s(l),
            "onUpdate:checked": c[0] || (c[0] = (u) => S(l) ? l.value = u : null)
          }, s(r), {
            disabled: t.meta.readOnly,
            onChange: m
          }), P({ _: 2 }, [
            s(a).slotNameOfCheckedChildren ? {
              name: "checkedChildren",
              fn: f(() => [
                O(d.$slots, s(a).slotNameOfCheckedChildren)
              ]),
              key: "0"
            } : void 0,
            s(a).slotNameOfUnCheckedChildren ? {
              name: "unCheckedChildren",
              fn: f(() => [
                O(d.$slots, s(a).slotNameOfUnCheckedChildren)
              ]),
              key: "1"
            } : void 0
          ]), 1040, ["checked", "disabled"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), Je = /* @__PURE__ */ M({
  __name: "AutoComplete",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, o = F("state"), { appContext: i } = V(), n = new G(i, o, e.id, e.meta), { bindings: r } = R(Object.keys(Oe.props), n.ui), a = C(() => n.ui.value || {}), l = C({
      get() {
        return n.value;
      },
      set(p) {
        n.value = p || void 0;
      }
    });
    function m(p) {
      a.value.change && a.value.change(s(p));
    }
    function d(p) {
      a.value.search && a.value.search(p, s(l));
    }
    function c(p, u) {
      a.value.select && a.value.select(s(p), u);
    }
    return (p, u) => {
      const v = I("a-auto-complete");
      return _(), k(H, {
        id: t.id,
        meta: t.meta
      }, {
        default: f(() => [
          N(v, U(s(r), {
            disabled: t.meta.readOnly,
            value: s(l),
            "onUpdate:value": u[0] || (u[0] = (x) => S(l) ? l.value = x : null),
            onChange: m,
            onSearch: d,
            onSelect: c
          }), P({ _: 2 }, [
            s(a).slotNameOfOption ? {
              name: "option",
              fn: f((x) => [
                O(p.$slots, s(a).slotNameOfOption, Y(Q(x)))
              ]),
              key: "0"
            } : void 0,
            s(a).slotNameOfDefault ? {
              name: "default",
              fn: f(() => [
                O(p.$slots, s(a).slotNameOfDefault)
              ]),
              key: "1"
            } : void 0
          ]), 1040, ["disabled", "value"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), Ye = /* @__PURE__ */ M({
  __name: "Checkbox",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, o = F("state"), { appContext: i } = V(), n = new G(i, o, e.id, e.meta), { bindings: r } = R(Object.keys(xe.props), n.ui), a = C(() => n.ui.value || {}), l = C({
      get() {
        return n.value;
      },
      set(d) {
        n.value = d;
      }
    });
    function m() {
      a.value.change && a.value.change(s(l));
    }
    return (d, c) => {
      const p = I("a-checkbox-group"), u = I("a-checkbox"), v = I("a-col"), x = I("a-row");
      return _(), k(H, {
        id: t.id,
        meta: t.meta
      }, {
        default: f(() => [
          s(a).span ? (_(), k(p, {
            key: 1,
            value: s(l),
            "onUpdate:value": c[1] || (c[1] = (h) => S(l) ? l.value = h : null),
            disabled: t.meta.readOnly,
            onChange: m,
            class: "v__checkbox"
          }, {
            default: f(() => [
              N(x, null, {
                default: f(() => [
                  (_(!0), z(ae, null, K(t.meta.enum, (h, g) => (_(), k(v, {
                    class: "v__text-left",
                    span: s(a).span,
                    key: g
                  }, {
                    default: f(() => [
                      N(u, {
                        value: h.value || h,
                        disabled: h.disabled || !1
                      }, {
                        default: f(() => [
                          J(W(h.label || h), 1)
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
          }, 8, ["value", "disabled"])) : (_(), k(p, U({
            key: 0,
            class: "v__checkbox",
            value: s(l),
            "onUpdate:value": c[0] || (c[0] = (h) => S(l) ? l.value = h : null)
          }, s(r), {
            disabled: t.meta.readOnly,
            options: t.meta.enum,
            onChange: m
          }), null, 16, ["value", "disabled", "options"]))
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
}), Qe = /* @__PURE__ */ M({
  __name: "Date",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, o = F("state"), { appContext: i } = V(), n = new G(i, o, e.id, e.meta);
    let r = {}, a = {};
    if (n.ui.value.type === "range") {
      const { bindings: u } = R(Object.keys(ke.props), n.ui);
      r = u;
    } else {
      const { bindings: u } = R(Object.keys(Ie.props), n.ui);
      a = u;
    }
    const l = C(() => n.ui.value || {}), m = C({
      get() {
        return n.value;
      },
      set(u) {
        n.value = u;
      }
    });
    function d() {
      l.value.change && l.value.change(s(m));
    }
    function c(u) {
      l.value.ok && l.value.ok(u);
    }
    function p(u, v, x) {
      l.value.calendarChange && l.value.calendarChange(u, v, x);
    }
    return (u, v) => {
      const x = I("a-range-picker"), h = I("a-date-picker");
      return _(), k(H, {
        id: t.id,
        meta: t.meta
      }, {
        default: f(() => [
          s(l).type === "range" ? (_(), k(x, U({
            key: 0,
            class: "v__date",
            value: s(m),
            "onUpdate:value": v[0] || (v[0] = (g) => S(m) ? m.value = g : null)
          }, s(r), {
            disabled: t.meta.readOnly,
            onCalendarChange: p,
            onOk: c,
            onChange: d
          }), P({ _: 2 }, [
            s(l).slotNameOfSuffixIcon ? {
              name: "suffixIcon",
              fn: f(() => [
                O(u.$slots, s(l).slotNameOfSuffixIcon)
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["value", "disabled"])) : L("", !0),
          s(l).type !== "range" ? (_(), k(h, U({
            key: 1,
            class: "v__date",
            value: s(m),
            "onUpdate:value": v[1] || (v[1] = (g) => S(m) ? m.value = g : null)
          }, s(a), {
            disabled: t.meta.readOnly,
            onOk: c,
            onChange: d
          }), P({ _: 2 }, [
            s(l).slotNameOfSuffixIcon ? {
              name: "suffixIcon",
              fn: f(() => [
                O(u.$slots, s(l).slotNameOfSuffixIcon)
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["value", "disabled"])) : L("", !0)
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), Xe = /* @__PURE__ */ M({
  __name: "Time",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, o = F("state"), { appContext: i } = V(), n = new G(i, o, e.id, e.meta);
    let r = {}, a = {};
    if (n.ui.value.type === "range") {
      const { bindings: u } = R(
        Object.keys($e.props),
        n.ui
      );
      r = u;
    } else {
      const { bindings: u } = R(Object.keys(Ee.props), n.ui);
      a = u;
    }
    const l = C(() => n.ui.value || {}), m = C({
      get() {
        return n.value;
      },
      set(u) {
        n.value = u;
      }
    });
    function d(u, v) {
      l.value.change && l.value.change(u, v);
    }
    function c(u) {
      l.value.ok && l.value.ok(u);
    }
    function p(u, v, x) {
      l.value.calendarChange && l.value.calendarChange(u, v, x);
    }
    return (u, v) => {
      const x = I("a-time-range-picker"), h = I("a-time-picker");
      return _(), k(H, {
        id: t.id,
        meta: t.meta
      }, {
        default: f(() => [
          s(l).type === "range" ? (_(), k(x, U({
            key: 0,
            class: "v__time",
            value: s(m),
            "onUpdate:value": v[0] || (v[0] = (g) => S(m) ? m.value = g : null),
            open: s(l).open,
            "onUpdate:open": v[1] || (v[1] = (g) => s(l).open = g)
          }, s(r), {
            disabled: t.meta.readOnly,
            onCalendarChange: p,
            onOk: c,
            onChange: d
          }), P({ _: 2 }, [
            s(l).slotNameOfRenderExtraFooter ? {
              name: "renderExtraFooter",
              fn: f(() => [
                O(u.$slots, s(l).slotNameOfRenderExtraFooter)
              ]),
              key: "0"
            } : void 0,
            s(l).slotNameOfSuffixIcon ? {
              name: "suffixIcon",
              fn: f(() => [
                O(u.$slots, s(l).slotNameOfSuffixIcon)
              ]),
              key: "1"
            } : void 0,
            s(l).slotNameOfClearIcon ? {
              name: "clearIcon",
              fn: f(() => [
                O(u.$slots, s(l).slotNameOfClearIcon)
              ]),
              key: "2"
            } : void 0
          ]), 1040, ["value", "open", "disabled"])) : (_(), k(h, U({
            key: 1,
            class: "v__time",
            value: s(m),
            "onUpdate:value": v[2] || (v[2] = (g) => S(m) ? m.value = g : null),
            open: s(l).open,
            "onUpdate:open": v[3] || (v[3] = (g) => s(l).open = g)
          }, s(a), {
            disabled: t.meta.readOnly,
            onOk: c,
            onChange: d
          }), P({ _: 2 }, [
            s(l).slotNameOfRenderExtraFooter ? {
              name: "renderExtraFooter",
              fn: f(() => [
                O(u.$slots, s(l).slotNameOfRenderExtraFooter)
              ]),
              key: "0"
            } : void 0,
            s(l).slotNameOfSuffixIcon ? {
              name: "suffixIcon",
              fn: f(() => [
                O(u.$slots, s(l).slotNameOfSuffixIcon)
              ]),
              key: "1"
            } : void 0,
            s(l).slotNameOfClearIcon ? {
              name: "clearIcon",
              fn: f(() => [
                O(u.$slots, s(l).slotNameOfClearIcon)
              ]),
              key: "2"
            } : void 0
          ]), 1040, ["value", "open", "disabled"]))
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), ie = /* @__PURE__ */ M({
  __name: "Number",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, o = F("state"), { appContext: i } = V(), n = new G(i, o, e.id, e.meta), { bindings: r } = R(Object.keys(we.props), n.ui), a = C(() => n.ui.value || {}), l = C({
      get() {
        return n.value;
      },
      set(h) {
        n.value = h;
      }
    });
    let m = j(-1 / 0), d = j(1 / 0), c = j(1), p = j((h) => h), u = j((h) => h);
    v();
    function v() {
      const {
        minimum: h,
        exclusiveMinimum: g,
        maximum: A,
        exclusiveMaximum: y,
        multipleOf: E,
        type: w
      } = n.meta.value;
      c.value = E || 1, typeof h < "u" && (m.value = g ? h + c.value : h), typeof A < "u" && (d.value = y ? A - c.value : A), w === "integer" && (m.value = Math.trunc(m.value), d.value = Math.trunc(d.value), c.value = Math.trunc(c.value)), a.value.prefix != null && (a.value.formatter = ($) => $ == null ? "" : `${a.value.prefix} ${$}`, a.value.parser = ($) => $.replace(`${a.value.prefix} `, "")), a.value.unit != null && (a.value.formatter = ($) => $ == null ? "" : `${$} ${a.value.unit}`, a.value.parser = ($) => $.replace(` ${a.value.unit}`, "")), a.value.formatter && (p.value = a.value.formatter), a.value.parser && (u.value = a.value.parser);
    }
    function x(h) {
      l.value = n.meta.value.type === B.Integer ? Math.floor(h) : h, a.value.change && a.value.change(s(l));
    }
    return (h, g) => {
      const A = I("a-input-number");
      return _(), k(H, {
        id: t.id,
        meta: t.meta
      }, {
        default: f(() => [
          N(A, U({
            class: "v__number",
            id: t.id,
            value: s(l),
            "onUpdate:value": g[0] || (g[0] = (y) => S(l) ? l.value = y : null)
          }, s(r), {
            disabled: t.meta.readOnly,
            min: s(m),
            max: s(d),
            step: s(c),
            formatter: s(p),
            parser: s(u),
            class: { "v__input-number-hidden-step": s(a).hideStep },
            onChange: g[1] || (g[1] = (y) => x(y))
          }), P({ _: 2 }, [
            s(a).slotNameOfAddonAfter ? {
              name: "addonAfter",
              fn: f(() => [
                O(h.$slots, s(a).slotNameOfAddonAfter)
              ]),
              key: "0"
            } : void 0,
            s(a).slotNameOfAddonBefore ? {
              name: "addonBefore",
              fn: f(() => [
                O(h.$slots, s(a).slotNameOfAddonBefore)
              ]),
              key: "1"
            } : void 0,
            s(a).slotNameOfPrefix ? {
              name: "prefix",
              fn: f(() => [
                O(h.$slots, s(a).slotNameOfPrefix)
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
function D(t, e, o) {
  t.component(e, o);
}
function Ze(t) {
  D(t, "v-object", Ke), D(t, "v-string", Te), D(t, "v-boolean", We), D(t, "v-autocomplete", Je), D(t, "v-checkbox", Ye), D(t, "v-date", Qe), D(t, "v-number", ie), D(t, "v-integer", ie), D(t, "v-time", Xe);
}
const et = [Be, H], tt = function(t, e) {
  return t.config.globalProperties.emitter = je(), et.forEach((o) => {
    t.component(o.name, o);
  }), Ze(t), t.config.globalProperties.$VFORMLY_OPTIONS = e, t;
}, rt = {
  install: tt
};
export {
  q as BaseMeta,
  de as FORM_VALUE_CHANGE,
  rt as default,
  tt as install,
  D as registerFormComponent
};
