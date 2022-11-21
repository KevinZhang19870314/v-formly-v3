import { BooleanMeta } from '../../core/meta/boolean.meta';
import type { Global } from '../../core/utils/global';
import { type ComponentInternalInstance } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        required: true;
    };
    meta: {
        type: null;
        required: true;
    };
}, {
    props: any;
    state: Global;
    appContext: import("vue").AppContext;
    context: BooleanMeta;
    bindings: any;
    readOnly: import("vue").Ref<any>;
    ui: import("vue").ComputedRef<import('../../types/meta').AnyObject>;
    value: import("vue").WritableComputedRef<any>;
    change: (value: string | number | boolean) => void;
    ElSwitch: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
        readonly modelValue: import("element-plus/es/utils").EpPropFinalized<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown, false, boolean>;
        readonly value: import("element-plus/es/utils").EpPropFinalized<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown, false, boolean>;
        readonly disabled: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly width: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
        readonly inlinePrompt: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly activeIcon: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly inactiveIcon: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly activeText: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly inactiveText: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly activeColor: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly inactiveColor: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly borderColor: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly activeValue: import("element-plus/es/utils").EpPropFinalized<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown, true, boolean>;
        readonly inactiveValue: import("element-plus/es/utils").EpPropFinalized<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown, false, boolean>;
        readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly id: StringConstructor;
        readonly loading: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly beforeChange: {
            readonly type: import("vue").PropType<() => boolean | Promise<boolean>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => "" | "small" | "default" | "large") | (() => "" | "small" | "default" | "large") | ((new (...args: any[]) => "" | "small" | "default" | "large") | (() => "" | "small" | "default" | "large"))[], unknown, "" | "small" | "default" | "large">>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly tabindex: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
    }, {
        COMPONENT_NAME: string;
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly modelValue: import("element-plus/es/utils").EpPropFinalized<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown, false, boolean>;
            readonly value: import("element-plus/es/utils").EpPropFinalized<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown, false, boolean>;
            readonly disabled: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly width: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly inlinePrompt: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly activeIcon: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly inactiveIcon: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly activeText: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly inactiveText: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly activeColor: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly inactiveColor: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly borderColor: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly activeValue: import("element-plus/es/utils").EpPropFinalized<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown, true, boolean>;
            readonly inactiveValue: import("element-plus/es/utils").EpPropFinalized<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown, false, boolean>;
            readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly id: StringConstructor;
            readonly loading: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly beforeChange: {
                readonly type: import("vue").PropType<() => boolean | Promise<boolean>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => "" | "small" | "default" | "large") | (() => "" | "small" | "default" | "large") | ((new (...args: any[]) => "" | "small" | "default" | "large") | (() => "" | "small" | "default" | "large"))[], unknown, "" | "small" | "default" | "large">>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly tabindex: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }>> & {
            onChange?: ((val: string | number | boolean) => any) | undefined;
            "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
            onInput?: ((val: string | number | boolean) => any) | undefined;
        }>>;
        emit: ((event: "update:modelValue", val: string | number | boolean) => void) & ((event: "change", val: string | number | boolean) => void) & ((event: "input", val: string | number | boolean) => void);
        vm: ComponentInternalInstance;
        formItem: import("element-plus").FormItemContext | undefined;
        switchSize: import("vue").ComputedRef<"" | "small" | "default" | "large">;
        ns: {
            namespace: import("vue").Ref<string>;
            b: (blockSuffix?: string | undefined) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        inputId: import("vue").Ref<string | undefined>;
        switchDisabled: import("vue").ComputedRef<boolean>;
        isControlled: import("vue").Ref<boolean>;
        input: import("vue").Ref<HTMLInputElement | undefined>;
        core: import("vue").Ref<HTMLSpanElement | undefined>;
        switchKls: import("vue").ComputedRef<string[]>;
        coreStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
        actualValue: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown>>;
        checked: import("vue").ComputedRef<boolean>;
        handleChange: () => void;
        switchValue: () => void;
        styles: import("vue").ComputedRef<Record<string, string>>;
        focus: () => void;
        ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly color: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly color: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }>> & {
                [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
            }>>;
            ns: {
                namespace: import("vue").Ref<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            style: import("vue").ComputedRef<import("vue").CSSProperties>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly color: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }>>, {}>> & Record<string, any>;
        Loading: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (val: string | number | boolean) => boolean;
        change: (val: string | number | boolean) => boolean;
        input: (val: string | number | boolean) => boolean;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly modelValue: import("element-plus/es/utils").EpPropFinalized<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown, false, boolean>;
        readonly value: import("element-plus/es/utils").EpPropFinalized<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown, false, boolean>;
        readonly disabled: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly width: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
        readonly inlinePrompt: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly activeIcon: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly inactiveIcon: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly activeText: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly inactiveText: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly activeColor: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly inactiveColor: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly borderColor: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly activeValue: import("element-plus/es/utils").EpPropFinalized<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown, true, boolean>;
        readonly inactiveValue: import("element-plus/es/utils").EpPropFinalized<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown, false, boolean>;
        readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly id: StringConstructor;
        readonly loading: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly beforeChange: {
            readonly type: import("vue").PropType<() => boolean | Promise<boolean>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => "" | "small" | "default" | "large") | (() => "" | "small" | "default" | "large") | ((new (...args: any[]) => "" | "small" | "default" | "large") | (() => "" | "small" | "default" | "large"))[], unknown, "" | "small" | "default" | "large">>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly tabindex: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
    }>> & {
        onChange?: ((val: string | number | boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
        onInput?: ((val: string | number | boolean) => any) | undefined;
    }, {
        readonly disabled: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly loading: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly name: string;
        readonly modelValue: import("element-plus/es/utils").EpPropMergeType<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown>;
        readonly validateEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly width: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly value: import("element-plus/es/utils").EpPropMergeType<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown>;
        readonly borderColor: string;
        readonly inlinePrompt: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly activeText: string;
        readonly inactiveText: string;
        readonly activeColor: string;
        readonly inactiveColor: string;
        readonly activeValue: import("element-plus/es/utils").EpPropMergeType<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown>;
        readonly inactiveValue: import("element-plus/es/utils").EpPropMergeType<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown>;
    }>> & Record<string, any>;
    VWrapper: import("vue").DefineComponent<{
        id: {
            type: StringConstructor;
            required: true;
        };
        show: {
            type: BooleanConstructor;
            required: false;
        };
        meta: {
            type: null;
            required: true;
        };
    }, {
        props: any;
        globalProperties: Record<string, any>;
        state: Global;
        context: any;
        ui: import("vue").ComputedRef<{
            ingoreKeywords: string[];
            spanLabel: number;
            spanControl: number;
            grid: {
                gutter: number;
                span: number;
            };
            errors: {
                required: string;
            };
        } & import('../../types/meta').AnyObject>;
        size: import("vue").Ref<any>;
        oh: import("vue").ComputedRef<any>;
        error: import("vue").WritableComputedRef<any>;
        appContext: import("vue").AppContext;
        emitter: any;
        formErrorChangeCallback: (err: any) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        id: {
            type: StringConstructor;
            required: true;
        };
        show: {
            type: BooleanConstructor;
            required: false;
        };
        meta: {
            type: null;
            required: true;
        };
    }>>, {
        show: boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        required: true;
    };
    meta: {
        type: null;
        required: true;
    };
}>>, {}>;
export default _sfc_main;
