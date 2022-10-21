var ve = Object.defineProperty;
var pe = (t, e, a) => e in t ? ve(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[e] = a;
var y = (t, e, a) => (pe(t, typeof e != "symbol" ? e + "" : e, a), a);
import { defineComponent as N, ref as F, inject as A, computed as b, getCurrentInstance as $, openBlock as _, createElementBlock as D, normalizeStyle as ie, unref as s, createBlock as k, resolveDynamicComponent as re, createSlots as V, renderList as T, withCtx as m, renderSlot as O, normalizeProps as Y, guardReactiveProps as Q, createCommentVNode as M, provide as he, watch as X, onBeforeUnmount as le, resolveComponent as I, createVNode as j, normalizeClass as ue, createTextVNode as J, Fragment as ne, createElementVNode as ge, toDisplayString as W, mergeProps as B, isRef as P } from "vue";
import _e from "ajv";
import { Input as ye, Switch as be, AutoComplete as Ce, CheckboxGroup as Oe, RangePicker as ke, DatePicker as xe, TimeRangePicker as Ie, TimePicker as Ee } from "ant-design-vue";
function G(t) {
  return t.config.globalProperties.emitter;
}
var S = /* @__PURE__ */ ((t) => (t.Object = "object", t.Array = "array", t.Boolean = "boolean", t))(S || {});
function ae(t) {
  const e = [], a = "slotName";
  return t && !t.type && (t.type = S.Object), Z(t, e, a), { slotsName: e };
}
function Z(t, e, a) {
  switch (t.type) {
    case S.Object:
      Object.keys(t.properties).forEach((i) => {
        const n = t.properties[i];
        Z(n, e, a);
      });
      break;
    case S.Array:
      Object.keys(t.items.properties).forEach((i) => {
        const n = t.items.properties[i];
        Z(n, e, a);
      });
      break;
    default:
      if (t.ui) {
        const i = Object.keys(t.ui).filter(
          (n) => n.startsWith(a)
        );
        i && i.length > 0 && i.forEach((n) => {
          e.push(t.ui[n]);
        });
      }
      break;
  }
}
function we() {
  return { visibleIf: je };
}
function je(t, e, a, i) {
  if (!e.ui || !e.ui.visibleIf)
    return a;
  const n = Object.keys(e.ui.visibleIf)[0], r = e.ui.visibleIf[n];
  return i = i || {}, typeof r != "function" || n !== i.id ? a : r.call(null, t, i.id, i.value);
}
const ce = "form-value-change", ee = "form-error-change", de = /* @__PURE__ */ N({
  __name: "FormlyItem",
  props: {
    id: null,
    show: { type: Boolean, default: !0 },
    meta: null
  },
  setup(t) {
    const e = t;
    let a = F(!0);
    const { slotsName: i } = ae(e.meta), n = A("state"), r = b(() => `v-${e.meta.ui && e.meta.ui.component || e.meta.type}`), o = b(() => n.layout);
    l();
    function l() {
      if (!e.meta.type)
        throw new Error(
          "Form item type must be one of these: number, string, boolean, array, object"
        );
      a.value = e.show, p(a.value, e.id);
      const { visibleIf: c } = we(), { appContext: d } = $();
      G(d).on(`${ce}-${n._formId}`, (u) => {
        a.value = c(n.context, e.meta, a.value, {
          id: u.id,
          value: u.value
        });
        const f = n.context.getContext(e.id);
        f && p(a.value, f.id);
      });
    }
    function p(c, d) {
      c ? n._ignoreErrorIds = n._ignoreErrorIds.filter((v) => v !== d) : n._ignoreErrorIds.indexOf(d) === -1 && n._ignoreErrorIds.push(d);
    }
    return (c, d) => (_(), D("div", {
      style: ie({ display: s(o) === "inline" ? "inline-block" : "block" })
    }, [
      s(a) ? (_(), k(re(s(r)), {
        key: 0,
        id: t.id,
        meta: t.meta
      }, V({ _: 2 }, [
        T(s(i), (v) => ({
          name: v,
          fn: m((u) => [
            O(c.$slots, v, Y(Q({ ...u })))
          ])
        }))
      ]), 1032, ["id", "meta"])) : M("", !0)
    ], 4));
  }
});
class $e {
  constructor() {
    y(this, "_map", /* @__PURE__ */ new Map());
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
}
function Ve(t = 8, e = 10) {
  const a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), i = e || a.length, n = [];
  if (t)
    for (let r = 0; r < t; r++)
      n[r] = a[0 | Math.random() * i];
  else {
    let r;
    n[8] = n[13] = n[18] = n[23] = "-", n[14] = "4";
    for (let o = 0; o < 36; o++)
      n[o] || (r = 0 | Math.random() * 16, n[o] = a[o == 19 ? r & 3 | 8 : r]);
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
    (a) => e[a] = typeof t[a] == "object" ? te(t[a]) : t[a]
  ), Array.isArray(t) ? (e.length = t.length, Array.from(e)) : e;
}
function fe() {
  const { appContext: t } = $(), e = t.config.globalProperties;
  return {
    appContext: t,
    globalProperties: e
  };
}
class Ne {
  constructor() {
    y(this, "_formId", Ve(4));
    y(this, "_ignoreErrorIds", []);
    y(this, "_context");
    y(this, "_layout", "horizontal");
    y(this, "_ajvOptions", {
      allErrors: !0,
      strict: !1,
      loopEnum: 50
    });
    y(this, "_formData", F({}));
    y(this, "_meta", {});
    y(this, "_ui", {
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
    y(this, "_validate");
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
  updateObjProp(e, a, i) {
    const [n, ...r] = a.split("/").filter((o) => o);
    r.length ? this.updateObjProp(e[n], r.join("/"), i) : e && (e[n] = i);
  }
  _applyUseOptions() {
    const { globalProperties: e } = fe(), a = e.$VFORMLY_OPTIONS;
    !a || typeof a != "object" || (this.ui = a.ui);
  }
}
class Pe {
  constructor(e, a) {
    y(this, "state");
    y(this, "_ajv");
    y(this, "_validate");
    y(this, "appContext");
    this.state = a, this._ajv = new _e(a.ajvOptions), this._validate = null, this.appContext = e;
  }
  async runValidateForm() {
    const { valid: e, errors: a } = this._isAjvValid(), n = this.state.context.getContexts().values();
    let r = !0;
    for (const o of n)
      r = await this._validation(o, e, a) && r;
    return r;
  }
  async runValidationFormItem(e) {
    const { valid: a, errors: i } = this._isAjvValid();
    return await this._validation(e, a, i);
  }
  _ajvValidate(e) {
    return this._validate ? this._validate : (this._validate = this._ajv.compile(e), this._validate);
  }
  _getAjvError(e, a) {
    let i;
    for (let n = 0; n < a.length; n++) {
      const r = a[n], o = this._getId(r);
      if (e === o) {
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
  async _validation(e, a, i) {
    let n = [];
    const r = `${ee}-${this.state._formId}`, o = G(this.appContext);
    if (a)
      return o.emit(r, {
        id: e.id,
        error: void 0
      }), !0;
    {
      const l = this._getCustomError(e), p = await this._getCustomAsyncError(e), c = [...l, ...p];
      this._replaceWithDefaultErrors(e, i), this._replaceWithCustomErrors(e.id, i, c);
      const d = this.state.ui.ingoreKeywords || [];
      n = i.filter(
        (u) => d.indexOf(u.keyword) === -1
      ), n = this._removeIgnoreErrors(n);
      const v = this._getAjvError(e.id, n);
      return o.emit(r, {
        id: e.id,
        error: v
      }), !v;
    }
  }
  _getCustomError(e) {
    const a = e.meta.ui && e.meta.ui.validator;
    return a ? a(e.value) : [];
  }
  async _getCustomAsyncError(e) {
    const a = e.meta.ui && e.meta.ui.validatorAsync;
    return a ? await a(e.value) : [];
  }
  _replaceWithDefaultErrors(e, a) {
    if (!a || a.length === 0)
      return;
    const i = e.meta.ui && e.meta.ui.errors || {}, n = Object.assign({}, this.state.ui.errors, i), r = Object.keys(n);
    r && r.length > 0 && a.forEach((o) => {
      r.indexOf(o.keyword) > -1 && (o.message = n[o.keyword]);
    });
  }
  _replaceWithCustomErrors(e, a, i) {
    i.forEach((n) => {
      const r = a.find(
        (o) => o.keyword === n.keyword && this._getId(o) === e
      );
      r && (r.message = n.message);
    });
  }
  _removeIgnoreErrors(e) {
    const a = this.state._ignoreErrorIds;
    return !a || a.length === 0 ? e : e.filter((n) => a.indexOf(this._getId(n)) === -1);
  }
  _getId(e) {
    return e.params && e.params.missingProperty ? `${e.instancePath ? e.instancePath : ""}/${e.params.missingProperty}` : `${e.instancePath}`;
  }
}
const Ae = { class: "v__formly" }, Me = { name: "v-formly" }, Fe = /* @__PURE__ */ N({
  ...Me,
  props: {
    modelValue: null,
    layout: { default: "horizontal" },
    button: null,
    meta: null
  },
  emits: ["update:modelValue", "form-reset", "form-submit"],
  setup(t, { expose: e, emit: a }) {
    const i = t;
    if (!i.meta || typeof i.meta.properties > "u")
      throw new Error("Invalid Schema");
    let n = { type: S.Object }, r = F(!1);
    const o = new Ne();
    he("state", o);
    const { slotsName: l } = ae(i.meta), { appContext: p } = $(), c = G(p);
    v();
    const d = b(() => {
      const g = Object.assign({}, o.ui);
      return i.layout === "vertical" ? null : { span: g.spanControl, offset: g.spanLabel };
    });
    X(
      () => i.modelValue,
      (g, E) => {
        JSON.stringify(g) !== JSON.stringify(E) && C(g);
      },
      {
        deep: !1
      }
    ), X(
      () => o.formData,
      (g, E) => {
        a("update:modelValue", g);
      },
      {
        deep: !0
      }
    );
    function v() {
      o.layout = i.layout, n = Object.assign({}, n, i.meta), o.meta = n, o.formData = Object.assign({}, i.modelValue), u(o.formData, i.meta.properties), o.context = new $e(), o.validate = new Pe(p, o);
    }
    function u(g, E) {
      Object.keys(E).forEach((w) => {
        const H = E[w];
        if (H.type !== "null")
          switch (H.type) {
            case S.Object:
              g[w] = g[w] || {}, u(g[w], H.properties);
              break;
            case S.Array:
              g[w] = g[w] || [];
              break;
            case S.Boolean:
              break;
            default:
              g[w] = g[w] || void 0;
              break;
          }
      });
    }
    function f(g) {
      return o.context.getContext(g);
    }
    async function x() {
      return await o.validate.runValidateForm();
    }
    function C(g) {
      const E = o.context.getContext("/");
      E && (E.value = g, a("update:modelValue", o.formData));
    }
    function h() {
      a("form-reset", te(o.formData)), C({});
    }
    async function z() {
      r.value = !0;
      const g = await x();
      r.value = !1, a("form-submit", {
        valid: g,
        data: g ? te(o.formData) : void 0
      });
    }
    return le(() => {
      c.all.clear();
    }), e({
      getContext: f,
      validate: x,
      reset: C,
      clearForm: h,
      submitForm: z
    }), (g, E) => {
      const w = I("a-button"), H = I("a-space"), oe = I("a-form");
      return _(), D("div", Ae, [
        j(oe, {
          class: ue(["v", {
            v__inline: t.layout === "inline",
            v__horizontal: t.layout === "horizontal"
          }]),
          layout: t.layout
        }, {
          default: m(() => [
            j(de, {
              id: "/",
              meta: s(n)
            }, V({ _: 2 }, [
              T(s(l), (se) => ({
                name: se,
                fn: m((me) => [
                  O(g.$slots, se, Y(Q({ ...me })))
                ])
              }))
            ]), 1032, ["meta"]),
            t.button === "default" ? (_(), k(oe, {
              key: 0,
              wrapperCol: s(d),
              class: "v__default-submit-button"
            }, {
              default: m(() => [
                j(H, null, {
                  default: m(() => [
                    j(w, {
                      type: "danger",
                      onClick: h
                    }, {
                      default: m(() => [
                        J(" \u91CD\u7F6E ")
                      ]),
                      _: 1
                    }),
                    j(w, {
                      type: "primary",
                      onClick: z,
                      loading: s(r)
                    }, {
                      default: m(() => [
                        J(" \u63D0\u4EA4 ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["wrapperCol"])) : t.button === "custom" ? O(g.$slots, "button", {
              key: 1,
              loading: s(r),
              clearForm: h,
              submitForm: z
            }) : (_(), D(ne, { key: 2 }, [], 64))
          ]),
          _: 3
        }, 8, ["layout", "class"])
      ]);
    };
  }
}), Se = { class: "v__label-text" }, De = {
  key: 0,
  class: "v__optional"
}, Be = ["innerHTML"], Re = {
  key: 1,
  class: "ant-form-item-explain-error"
}, Ue = { name: "v-wrapper" }, L = /* @__PURE__ */ N({
  ...Ue,
  props: {
    id: null,
    show: { type: Boolean },
    meta: null
  },
  setup(t) {
    const e = t, { globalProperties: a } = fe(), i = A("state"), n = i.context.getContext(e.id), r = b(() => Object.assign({}, i.ui, e.meta.ui)), o = b(() => Object.assign({}, i.ui, e.meta.ui).optionalHelp), l = b(() => i.layout === "vertical" || i.layout === "inline" ? void 0 : { span: r.value.spanLabel }), p = b(() => i.layout === "vertical" || i.layout === "inline" ? void 0 : { span: r.value.spanControl, offset: r.value.offsetControl || 0 }), c = b({
      get() {
        return n.error.value;
      },
      set(f) {
        n.error.value = f;
      }
    }), { appContext: d } = $(), v = G(d);
    v.on(`${ee}-${i._formId}`, u), le(() => {
      v.off(`${ee}-${i._formId}`, u);
    });
    function u(f) {
      f.id === e.id && (c.value = f.error ? f.error.message : void 0);
    }
    return (f, x) => {
      const C = I("a-tooltip"), h = I("a-form-item");
      return _(), k(h, {
        labelCol: s(l),
        wrapperCol: s(p),
        required: s(r).showRequired,
        class: ue({ "ant-form-item-has-error": s(c) })
      }, {
        label: m(() => [
          ge("span", Se, W(t.meta.title), 1),
          s(r).optional || s(o) ? (_(), D("span", De, [
            J(W(s(r).optional) + " ", 1),
            s(o) ? (_(), k(C, {
              key: 0,
              title: s(o).text,
              placement: s(o).placement,
              trigger: s(o).trigger,
              overlayStyle: s(o).overlayStyle,
              mouseEnterDelay: s(o).mouseEnterDelay,
              mouseLeaveDelay: s(o).mouseLeaveDelay,
              overlayClassName: s(o).overlayClassName
            }, {
              default: m(() => [
                s(o).icon ? (_(), k(re(s(a).$antIcons[s(o).icon]), { key: 0 })) : M("", !0)
              ]),
              _: 1
            }, 8, ["title", "placement", "trigger", "overlayStyle", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName"])) : M("", !0)
          ])) : M("", !0)
        ]),
        default: m(() => [
          O(f.$slots, "default"),
          t.meta.description ? (_(), D("div", {
            key: 0,
            class: "ant-form-extra",
            innerHTML: t.meta.description
          }, null, 8, Be)) : M("", !0),
          s(c) ? (_(), D("div", Re, W(s(c)), 1)) : M("", !0)
        ]),
        _: 3
      }, 8, ["labelCol", "wrapperCol", "required", "class"]);
    };
  }
});
class K {
  constructor(e, a, i, n) {
    y(this, "id");
    y(this, "state");
    y(this, "meta", F({}));
    y(this, "type");
    y(this, "ui", F({}));
    y(this, "error", F(void 0));
    y(this, "_value", F());
    y(this, "_initMetaValue");
    y(this, "appContext");
    if (this.constructor == K)
      throw new Error("Abstract classes can't be instantiated.");
    this.id = i, this.state = a, this.meta.value = n, this.type = n.ui && n.ui.component || n.type, this.ui.value = Object.assign({}, a.ui, n.ui), this.appContext = e, this.error.value = void 0, a.context.addContext(i, this), this._value.value = void 0, this._initMetaValue = this.getInitMetaValue(), this.initValue();
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
    this.setValue(e), G(this.appContext).emit(`${ce}-${this.state._formId}`, {
      id: this.id,
      value: this._value.value
    }), this.state.updateObjProp(this.state.formData, this.id, this._value.value), this.state.validate.runValidationFormItem(this);
  }
  getInitMetaValue() {
    const e = this.id.split("/").filter((i) => i);
    let a = "";
    return e.reduce((i, n, r) => (r === e.length - 1 && (a = i[n]), i[n] || {}), this.state.formData), a;
  }
}
class Le extends K {
  constructor(a, i, n, r) {
    super(a, i, n, r);
    y(this, "childMetaPairs");
    this.childMetaPairs = this.buildChildMetaPairs(n, r), i.context.addContext(n, this);
  }
  initValue() {
  }
  set value(a) {
    this.childMetaPairs.forEach(({ key: i, propertyName: n }) => {
      const r = this.state.context.getContext(i);
      r.value = (a || {})[n];
    });
  }
  buildChildMetaPairs(a, i) {
    const n = [];
    for (const r of Object.keys(i.properties || {})) {
      const o = a === "/" ? `/${r}` : `${a}/${r}`;
      n.push({
        key: o,
        propertyName: r,
        meta: i.properties[r]
      });
    }
    return n;
  }
}
const ze = /* @__PURE__ */ N({
  __name: "Object",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, { slotsName: a } = ae(e.meta), i = A("state"), { appContext: n } = $(), r = new Le(n, i, e.id, e.meta), o = b(() => r.ui.value || {}), l = b(() => Object.assign({}, i.ui.grid, o.value.grid).gutter), p = b(() => i.layout);
    function c(u) {
      return u.ui && u.ui.show;
    }
    function d(u) {
      if (p.value === "inline")
        return {};
      const f = u.meta.ui && u.meta.ui.grid || {};
      return Object.assign({}, i.ui.grid, o.value.grid, f);
    }
    const v = r.childMetaPairs;
    return (u, f) => {
      const x = I("a-col"), C = I("a-row");
      return _(), k(C, { gutter: s(l) }, {
        default: m(() => [
          (_(!0), D(ne, null, T(s(v), (h, z) => (_(), k(x, {
            key: z,
            span: d(h).span,
            offset: d(h).offset,
            xs: d(h).xs,
            sm: d(h).sm,
            md: d(h).md,
            lg: d(h).lg,
            xl: d(h).xl,
            xxl: d(h).xxl,
            style: ie({ display: s(p) === "inline" ? "inline-block" : "block" })
          }, {
            default: m(() => [
              j(de, {
                id: h.key,
                meta: h.meta,
                show: c(h.meta)
              }, V({ _: 2 }, [
                T(s(a), (g) => ({
                  name: g,
                  fn: m((E) => [
                    O(u.$slots, g, Y(Q({ ...E })))
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
class q extends K {
  constructor(a, i, n, r) {
    var o;
    super(a, i, n, r);
    y(this, "open");
    this.meta.value && (this.open = ((o = this.meta.value.ui) == null ? void 0 : o.open) || !1);
  }
  initValue() {
    this._initMetaValue ? this.value = this._initMetaValue : this.meta.value.default && (this.value = this.meta.value.default);
  }
  setValue(a) {
    this._value.value = a || void 0;
  }
}
function R(t, e) {
  const a = F({});
  return X(
    () => e.value,
    (i, n) => {
      Object.keys(i).forEach((o) => {
        t.indexOf(o) > -1 && (a.value[o] = e.value[o]);
      });
    },
    {
      immediate: !0,
      deep: !0
    }
  ), { bindings: a };
}
const He = /* @__PURE__ */ N({
  __name: "String",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, a = A("state"), { appContext: i } = $(), n = new q(i, a, e.id, e.meta), { bindings: r } = R(Object.keys(ye.props), n.ui), o = b(() => n.ui.value || {}), l = b({
      get() {
        return n.value;
      },
      set(c) {
        n.value = c;
      }
    });
    function p() {
      o.value.change && o.value.change(s(l));
    }
    return (c, d) => {
      const v = I("a-input");
      return _(), k(L, {
        id: t.id,
        meta: t.meta
      }, {
        default: m(() => [
          j(v, B(s(r), {
            defaultValue: t.meta.defaultValue,
            disabled: t.meta.readOnly,
            maxLength: t.meta.maxLength,
            value: s(l),
            "onUpdate:value": d[0] || (d[0] = (u) => P(l) ? l.value = u : null),
            onChange: p
          }), V({ _: 2 }, [
            s(o).slotNameOfPrefix ? {
              name: "prefix",
              fn: m(() => [
                O(c.$slots, s(o).slotNameOfPrefix)
              ]),
              key: "0"
            } : void 0,
            s(o).slotNameOfSuffix ? {
              name: "suffix",
              fn: m(() => [
                O(c.$slots, s(o).slotNameOfSuffix)
              ]),
              key: "1"
            } : void 0,
            s(o).slotNameOfAddonBefore ? {
              name: "addonBefore",
              fn: m(() => [
                O(c.$slots, s(o).slotNameOfAddonBefore)
              ]),
              key: "2"
            } : void 0,
            s(o).slotNameOfAddonAfter ? {
              name: "addonAfter",
              fn: m(() => [
                O(c.$slots, s(o).slotNameOfAddonAfter)
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
class Te extends K {
  constructor(e, a, i, n) {
    super(e, a, i, n);
  }
  initValue() {
    typeof this._initMetaValue < "u" ? this.value = this._initMetaValue : typeof this.meta.value.default == "boolean" && (this.value = this.meta.value.default);
  }
  setValue(e) {
    this._value.value = e || !1;
  }
}
const Ge = /* @__PURE__ */ N({
  __name: "Boolean",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, a = A("state"), { appContext: i } = $(), n = new Te(i, a, e.id, e.meta), { bindings: r } = R(Object.keys(be.props), n.ui), o = b(() => n.ui.value || {}), l = b({
      get() {
        return n.value;
      },
      set(c) {
        n.value = c || !1;
      }
    });
    function p() {
      o.value.change && o.value.change(s(l));
    }
    return (c, d) => {
      const v = I("a-switch");
      return _(), k(L, {
        id: t.id,
        meta: t.meta
      }, {
        default: m(() => [
          j(v, B({
            class: "v__boolean",
            checked: s(l),
            "onUpdate:checked": d[0] || (d[0] = (u) => P(l) ? l.value = u : null)
          }, s(r), {
            disabled: t.meta.readOnly,
            onChange: p
          }), V({ _: 2 }, [
            s(o).slotNameOfCheckedChildren ? {
              name: "checkedChildren",
              fn: m(() => [
                O(c.$slots, s(o).slotNameOfCheckedChildren)
              ]),
              key: "0"
            } : void 0,
            s(o).slotNameOfUnCheckedChildren ? {
              name: "unCheckedChildren",
              fn: m(() => [
                O(c.$slots, s(o).slotNameOfUnCheckedChildren)
              ]),
              key: "1"
            } : void 0
          ]), 1040, ["checked", "disabled"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), Ke = /* @__PURE__ */ N({
  __name: "AutoComplete",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, a = A("state"), { appContext: i } = $(), n = new q(i, a, e.id, e.meta), { bindings: r } = R(Object.keys(Ce.props), n.ui), o = b(() => n.ui.value || {}), l = b({
      get() {
        return n.value;
      },
      set(v) {
        n.value = v || void 0;
      }
    });
    function p(v) {
      o.value.change && o.value.change(s(v));
    }
    function c(v) {
      o.value.search && o.value.search(v, s(l));
    }
    function d(v, u) {
      o.value.select && o.value.select(s(v), u);
    }
    return (v, u) => {
      const f = I("a-auto-complete");
      return _(), k(L, {
        id: t.id,
        meta: t.meta
      }, {
        default: m(() => [
          j(f, B(s(r), {
            disabled: t.meta.readOnly,
            value: s(l),
            "onUpdate:value": u[0] || (u[0] = (x) => P(l) ? l.value = x : null),
            onChange: p,
            onSearch: c,
            onSelect: d
          }), V({ _: 2 }, [
            s(o).slotNameOfOption ? {
              name: "option",
              fn: m((x) => [
                O(v.$slots, s(o).slotNameOfOption, Y(Q(x)))
              ]),
              key: "0"
            } : void 0,
            s(o).slotNameOfDefault ? {
              name: "default",
              fn: m(() => [
                O(v.$slots, s(o).slotNameOfDefault)
              ]),
              key: "1"
            } : void 0
          ]), 1040, ["disabled", "value"])
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), qe = /* @__PURE__ */ N({
  __name: "Checkbox",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, a = A("state"), { appContext: i } = $(), n = new q(i, a, e.id, e.meta), { bindings: r } = R(Object.keys(Oe.props), n.ui), o = b(() => n.ui.value || {}), l = b({
      get() {
        return n.value;
      },
      set(c) {
        n.value = c;
      }
    });
    function p() {
      o.value.change && o.value.change(s(l));
    }
    return (c, d) => {
      const v = I("a-checkbox-group"), u = I("a-checkbox"), f = I("a-col"), x = I("a-row");
      return _(), k(L, {
        id: t.id,
        meta: t.meta
      }, {
        default: m(() => [
          s(o).span ? (_(), k(v, {
            key: 1,
            value: s(l),
            "onUpdate:value": d[1] || (d[1] = (C) => P(l) ? l.value = C : null),
            disabled: t.meta.readOnly,
            onChange: p,
            class: "v__checkbox"
          }, {
            default: m(() => [
              j(x, null, {
                default: m(() => [
                  (_(!0), D(ne, null, T(t.meta.enum, (C, h) => (_(), k(f, {
                    class: "v__text-left",
                    span: s(o).span,
                    key: h
                  }, {
                    default: m(() => [
                      j(u, {
                        value: C.value || C,
                        disabled: C.disabled || !1
                      }, {
                        default: m(() => [
                          J(W(C.label || C), 1)
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
          }, 8, ["value", "disabled"])) : (_(), k(v, B({
            key: 0,
            class: "v__checkbox",
            value: s(l),
            "onUpdate:value": d[0] || (d[0] = (C) => P(l) ? l.value = C : null)
          }, s(r), {
            disabled: t.meta.readOnly,
            options: t.meta.enum,
            onChange: p
          }), null, 16, ["value", "disabled", "options"]))
        ]),
        _: 1
      }, 8, ["id", "meta"]);
    };
  }
}), We = /* @__PURE__ */ N({
  __name: "Date",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, a = A("state"), { appContext: i } = $(), n = new q(i, a, e.id, e.meta);
    let r = {}, o = {};
    if (n.ui.value.type === "range") {
      const { bindings: u } = R(Object.keys(ke.props), n.ui);
      r = u;
    } else {
      const { bindings: u } = R(Object.keys(xe.props), n.ui);
      o = u;
    }
    const l = b(() => n.ui.value || {}), p = b({
      get() {
        return n.value;
      },
      set(u) {
        n.value = u;
      }
    });
    function c() {
      l.value.change && l.value.change(s(p));
    }
    function d(u) {
      l.value.ok && l.value.ok(u);
    }
    function v(u, f, x) {
      l.value.calendarChange && l.value.calendarChange(u, f, x);
    }
    return (u, f) => {
      const x = I("a-range-picker"), C = I("a-date-picker");
      return _(), k(L, {
        id: t.id,
        meta: t.meta
      }, {
        default: m(() => [
          s(l).type === "range" ? (_(), k(x, B({
            key: 0,
            class: "v__date",
            value: s(p),
            "onUpdate:value": f[0] || (f[0] = (h) => P(p) ? p.value = h : null)
          }, s(r), {
            disabled: t.meta.readOnly,
            onCalendarChange: v,
            onOk: d,
            onChange: c
          }), V({ _: 2 }, [
            s(l).slotNameOfSuffixIcon ? {
              name: "suffixIcon",
              fn: m(() => [
                O(u.$slots, s(l).slotNameOfSuffixIcon)
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["value", "disabled"])) : M("", !0),
          s(l).type !== "range" ? (_(), k(C, B({
            key: 1,
            class: "v__date",
            value: s(p),
            "onUpdate:value": f[1] || (f[1] = (h) => P(p) ? p.value = h : null)
          }, s(o), {
            disabled: t.meta.readOnly,
            onOk: d,
            onChange: c
          }), V({ _: 2 }, [
            s(l).slotNameOfSuffixIcon ? {
              name: "suffixIcon",
              fn: m(() => [
                O(u.$slots, s(l).slotNameOfSuffixIcon)
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["value", "disabled"])) : M("", !0)
        ]),
        _: 3
      }, 8, ["id", "meta"]);
    };
  }
}), Je = /* @__PURE__ */ N({
  __name: "Time",
  props: {
    id: null,
    meta: null
  },
  setup(t) {
    const e = t, a = A("state"), { appContext: i } = $(), n = new q(i, a, e.id, e.meta);
    let r = {}, o = {};
    if (n.ui.value.type === "range") {
      const { bindings: u } = R(
        Object.keys(Ie.props),
        n.ui
      );
      r = u;
    } else {
      const { bindings: u } = R(Object.keys(Ee.props), n.ui);
      o = u;
    }
    const l = b(() => n.ui.value || {}), p = b({
      get() {
        return n.value;
      },
      set(u) {
        n.value = u;
      }
    });
    function c(u, f) {
      l.value.change && l.value.change(u, f);
    }
    function d(u) {
      l.value.ok && l.value.ok(u);
    }
    function v(u, f, x) {
      l.value.calendarChange && l.value.calendarChange(u, f, x);
    }
    return (u, f) => {
      const x = I("a-time-range-picker"), C = I("a-time-picker");
      return _(), k(L, {
        id: t.id,
        meta: t.meta
      }, {
        default: m(() => [
          s(l).type === "range" ? (_(), k(x, B({
            key: 0,
            class: "v__time",
            value: s(p),
            "onUpdate:value": f[0] || (f[0] = (h) => P(p) ? p.value = h : null),
            open: s(l).open,
            "onUpdate:open": f[1] || (f[1] = (h) => s(l).open = h)
          }, s(r), {
            disabled: t.meta.readOnly,
            onCalendarChange: v,
            onOk: d,
            onChange: c
          }), V({ _: 2 }, [
            s(l).slotNameOfRenderExtraFooter ? {
              name: "renderExtraFooter",
              fn: m(() => [
                O(u.$slots, s(l).slotNameOfRenderExtraFooter)
              ]),
              key: "0"
            } : void 0,
            s(l).slotNameOfSuffixIcon ? {
              name: "suffixIcon",
              fn: m(() => [
                O(u.$slots, s(l).slotNameOfSuffixIcon)
              ]),
              key: "1"
            } : void 0,
            s(l).slotNameOfClearIcon ? {
              name: "clearIcon",
              fn: m(() => [
                O(u.$slots, s(l).slotNameOfClearIcon)
              ]),
              key: "2"
            } : void 0
          ]), 1040, ["value", "open", "disabled"])) : (_(), k(C, B({
            key: 1,
            class: "v__time",
            value: s(p),
            "onUpdate:value": f[2] || (f[2] = (h) => P(p) ? p.value = h : null),
            open: s(l).open,
            "onUpdate:open": f[3] || (f[3] = (h) => s(l).open = h)
          }, s(o), {
            disabled: t.meta.readOnly,
            onOk: d,
            onChange: c
          }), V({ _: 2 }, [
            s(l).slotNameOfRenderExtraFooter ? {
              name: "renderExtraFooter",
              fn: m(() => [
                O(u.$slots, s(l).slotNameOfRenderExtraFooter)
              ]),
              key: "0"
            } : void 0,
            s(l).slotNameOfSuffixIcon ? {
              name: "suffixIcon",
              fn: m(() => [
                O(u.$slots, s(l).slotNameOfSuffixIcon)
              ]),
              key: "1"
            } : void 0,
            s(l).slotNameOfClearIcon ? {
              name: "clearIcon",
              fn: m(() => [
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
});
function U(t, e, a) {
  t.component(e, a);
}
function Ye(t) {
  U(t, "v-object", ze), U(t, "v-string", He), U(t, "v-boolean", Ge), U(t, "v-autocomplete", Ke), U(t, "v-checkbox", qe), U(t, "v-date", We), U(t, "v-time", Je);
}
const Qe = [Fe, L], Xe = function(t, e) {
  return Qe.forEach((a) => {
    t.component(a.name, a);
  }), Ye(t), t.config.globalProperties.$VFORMLY_OPTIONS = e, t;
}, at = {
  install: Xe
};
export {
  K as BaseMeta,
  ce as FORM_VALUE_CHANGE,
  at as default,
  Xe as install,
  U as registerFormComponent
};
