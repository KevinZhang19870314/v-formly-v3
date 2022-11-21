import type { Global } from '../../core/utils/global';
import { StringMeta } from '../../core/meta/string.meta';
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
    context: StringMeta;
    ui: import("vue").ComputedRef<import('../../types/meta').AnyObject>;
    curBindings: import("vue").Ref<any>;
    readOnly: import("vue").Ref<any>;
    value: import("vue").WritableComputedRef<any>;
    change: (value: any) => void;
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
    ElCheckboxGroup: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
        readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | number)[]) | (() => (string | number)[]) | ((new (...args: any[]) => (string | number)[]) | (() => (string | number)[]))[], unknown, unknown, () => never[], boolean>;
        readonly disabled: BooleanConstructor;
        readonly min: NumberConstructor;
        readonly max: NumberConstructor;
        readonly size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly label: StringConstructor;
        readonly fill: StringConstructor;
        readonly textColor: StringConstructor;
        readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
        readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | number)[]) | (() => (string | number)[]) | ((new (...args: any[]) => (string | number)[]) | (() => (string | number)[]))[], unknown, unknown, () => never[], boolean>;
            readonly disabled: BooleanConstructor;
            readonly min: NumberConstructor;
            readonly max: NumberConstructor;
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly label: StringConstructor;
            readonly fill: StringConstructor;
            readonly textColor: StringConstructor;
            readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
            readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        }>> & {
            onChange?: ((val: import("element-plus").CheckboxValueType[]) => any) | undefined;
            "onUpdate:modelValue"?: ((val: import("element-plus").CheckboxValueType[]) => any) | undefined;
        }>>;
        emit: ((event: "update:modelValue", val: import("element-plus").CheckboxValueType[]) => void) & ((event: "change", val: import("element-plus").CheckboxValueType[]) => void);
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
        formItem: import("element-plus").FormItemContext | undefined;
        groupId: import("vue").Ref<string | undefined>;
        isLabeledByFormItem: import("vue").ComputedRef<boolean>;
        changeEvent: (value: import("element-plus").CheckboxValueType[]) => Promise<void>;
        modelValue: import("vue").WritableComputedRef<import("element-plus").CheckboxValueType[]>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (val: import("element-plus").CheckboxValueType[]) => boolean;
        change: (val: import("element-plus").CheckboxValueType[]) => boolean;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | number)[]) | (() => (string | number)[]) | ((new (...args: any[]) => (string | number)[]) | (() => (string | number)[]))[], unknown, unknown, () => never[], boolean>;
        readonly disabled: BooleanConstructor;
        readonly min: NumberConstructor;
        readonly max: NumberConstructor;
        readonly size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly label: StringConstructor;
        readonly fill: StringConstructor;
        readonly textColor: StringConstructor;
        readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
        readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    }>> & {
        onChange?: ((val: import("element-plus").CheckboxValueType[]) => any) | undefined;
        "onUpdate:modelValue"?: ((val: import("element-plus").CheckboxValueType[]) => any) | undefined;
    }, {
        readonly disabled: boolean;
        readonly modelValue: (string | number)[];
        readonly tag: string;
        readonly validateEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    }>>;
    ElCheckbox: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
        modelValue: {
            type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            default: undefined;
        };
        label: {
            type: (StringConstructor | BooleanConstructor | ObjectConstructor | NumberConstructor)[];
        };
        indeterminate: BooleanConstructor;
        disabled: BooleanConstructor;
        checked: BooleanConstructor;
        name: {
            type: StringConstructor;
            default: undefined;
        };
        trueLabel: {
            type: (StringConstructor | NumberConstructor)[];
            default: undefined;
        };
        falseLabel: {
            type: (StringConstructor | NumberConstructor)[];
            default: undefined;
        };
        id: {
            type: StringConstructor;
            default: undefined;
        };
        controls: {
            type: StringConstructor;
            default: undefined;
        };
        border: BooleanConstructor;
        size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        tabindex: (StringConstructor | NumberConstructor)[];
        validateEvent: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                default: undefined;
            };
            label: {
                type: (StringConstructor | BooleanConstructor | ObjectConstructor | NumberConstructor)[];
            };
            indeterminate: BooleanConstructor;
            disabled: BooleanConstructor;
            checked: BooleanConstructor;
            name: {
                type: StringConstructor;
                default: undefined;
            };
            trueLabel: {
                type: (StringConstructor | NumberConstructor)[];
                default: undefined;
            };
            falseLabel: {
                type: (StringConstructor | NumberConstructor)[];
                default: undefined;
            };
            id: {
                type: StringConstructor;
                default: undefined;
            };
            controls: {
                type: StringConstructor;
                default: undefined;
            };
            border: BooleanConstructor;
            size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            tabindex: (StringConstructor | NumberConstructor)[];
            validateEvent: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onChange?: ((val: import("element-plus").CheckboxValueType) => any) | undefined;
            "onUpdate:modelValue"?: ((val: import("element-plus").CheckboxValueType) => any) | undefined;
        }>>;
        slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        inputId: import("vue").Ref<string | undefined>;
        isLabeledByFormItem: import("vue").ComputedRef<boolean>;
        isChecked: import("vue").ComputedRef<boolean>;
        isDisabled: import("vue").ComputedRef<boolean>;
        isFocused: import("vue").Ref<boolean>;
        checkboxSize: import("vue").ComputedRef<"" | "small" | "default" | "large">;
        hasOwnLabel: import("vue").ComputedRef<boolean>;
        model: import("vue").WritableComputedRef<any>;
        handleChange: (e: Event) => void;
        onClickRoot: (e: MouseEvent) => Promise<void>;
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
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (val: import("element-plus").CheckboxValueType) => boolean;
        change: (val: import("element-plus").CheckboxValueType) => boolean;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            default: undefined;
        };
        label: {
            type: (StringConstructor | BooleanConstructor | ObjectConstructor | NumberConstructor)[];
        };
        indeterminate: BooleanConstructor;
        disabled: BooleanConstructor;
        checked: BooleanConstructor;
        name: {
            type: StringConstructor;
            default: undefined;
        };
        trueLabel: {
            type: (StringConstructor | NumberConstructor)[];
            default: undefined;
        };
        falseLabel: {
            type: (StringConstructor | NumberConstructor)[];
            default: undefined;
        };
        id: {
            type: StringConstructor;
            default: undefined;
        };
        controls: {
            type: StringConstructor;
            default: undefined;
        };
        border: BooleanConstructor;
        size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        tabindex: (StringConstructor | NumberConstructor)[];
        validateEvent: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        onChange?: ((val: import("element-plus").CheckboxValueType) => any) | undefined;
        "onUpdate:modelValue"?: ((val: import("element-plus").CheckboxValueType) => any) | undefined;
    }, {
        disabled: boolean;
        name: string;
        modelValue: string | number | boolean;
        validateEvent: boolean;
        id: string;
        border: boolean;
        indeterminate: boolean;
        checked: boolean;
        trueLabel: string | number;
        falseLabel: string | number;
        controls: string;
    }>> & {
        CheckboxButton: import("vue").DefineComponent<{
            modelValue: {
                type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                default: undefined;
            };
            label: {
                type: (StringConstructor | BooleanConstructor | ObjectConstructor | NumberConstructor)[];
            };
            indeterminate: BooleanConstructor;
            disabled: BooleanConstructor;
            checked: BooleanConstructor;
            name: {
                type: StringConstructor;
                default: undefined;
            };
            trueLabel: {
                type: (StringConstructor | NumberConstructor)[];
                default: undefined;
            };
            falseLabel: {
                type: (StringConstructor | NumberConstructor)[];
                default: undefined;
            };
            id: {
                type: StringConstructor;
                default: undefined;
            };
            controls: {
                type: StringConstructor;
                default: undefined;
            };
            border: BooleanConstructor;
            size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            tabindex: (StringConstructor | NumberConstructor)[];
            validateEvent: {
                type: BooleanConstructor;
                default: boolean;
            };
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                modelValue: {
                    type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                    default: undefined;
                };
                label: {
                    type: (StringConstructor | BooleanConstructor | ObjectConstructor | NumberConstructor)[];
                };
                indeterminate: BooleanConstructor;
                disabled: BooleanConstructor;
                checked: BooleanConstructor;
                name: {
                    type: StringConstructor;
                    default: undefined;
                };
                trueLabel: {
                    type: (StringConstructor | NumberConstructor)[];
                    default: undefined;
                };
                falseLabel: {
                    type: (StringConstructor | NumberConstructor)[];
                    default: undefined;
                };
                id: {
                    type: StringConstructor;
                    default: undefined;
                };
                controls: {
                    type: StringConstructor;
                    default: undefined;
                };
                border: BooleanConstructor;
                size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                tabindex: (StringConstructor | NumberConstructor)[];
                validateEvent: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & {
                onChange?: ((val: import("element-plus").CheckboxValueType) => any) | undefined;
                "onUpdate:modelValue"?: ((val: import("element-plus").CheckboxValueType) => any) | undefined;
            }>>;
            slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            isFocused: import("vue").Ref<boolean>;
            isChecked: import("vue").ComputedRef<boolean>;
            isDisabled: import("vue").ComputedRef<boolean>;
            checkboxButtonSize: import("vue").ComputedRef<"" | "small" | "default" | "large">;
            model: import("vue").WritableComputedRef<any>;
            handleChange: (e: Event) => void;
            checkboxGroup: ({
                modelValue?: import("vue").WritableComputedRef<any> | undefined;
                changeEvent?: ((...args: any) => any) | undefined;
            } & import("vue").ToRefs<Pick<import("element-plus").CheckboxGroupProps, "fill" | "size" | "disabled" | "validateEvent" | "min" | "max" | "textColor">>) | undefined;
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
            activeStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (val: import("element-plus").CheckboxValueType) => boolean;
            change: (val: import("element-plus").CheckboxValueType) => boolean;
        }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                default: undefined;
            };
            label: {
                type: (StringConstructor | BooleanConstructor | ObjectConstructor | NumberConstructor)[];
            };
            indeterminate: BooleanConstructor;
            disabled: BooleanConstructor;
            checked: BooleanConstructor;
            name: {
                type: StringConstructor;
                default: undefined;
            };
            trueLabel: {
                type: (StringConstructor | NumberConstructor)[];
                default: undefined;
            };
            falseLabel: {
                type: (StringConstructor | NumberConstructor)[];
                default: undefined;
            };
            id: {
                type: StringConstructor;
                default: undefined;
            };
            controls: {
                type: StringConstructor;
                default: undefined;
            };
            border: BooleanConstructor;
            size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            tabindex: (StringConstructor | NumberConstructor)[];
            validateEvent: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onChange?: ((val: import("element-plus").CheckboxValueType) => any) | undefined;
            "onUpdate:modelValue"?: ((val: import("element-plus").CheckboxValueType) => any) | undefined;
        }, {
            disabled: boolean;
            name: string;
            modelValue: string | number | boolean;
            validateEvent: boolean;
            id: string;
            border: boolean;
            indeterminate: boolean;
            checked: boolean;
            trueLabel: string | number;
            falseLabel: string | number;
            controls: string;
        }>;
        CheckboxGroup: import("vue").DefineComponent<{
            readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | number)[]) | (() => (string | number)[]) | ((new (...args: any[]) => (string | number)[]) | (() => (string | number)[]))[], unknown, unknown, () => never[], boolean>;
            readonly disabled: BooleanConstructor;
            readonly min: NumberConstructor;
            readonly max: NumberConstructor;
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly label: StringConstructor;
            readonly fill: StringConstructor;
            readonly textColor: StringConstructor;
            readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
            readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | number)[]) | (() => (string | number)[]) | ((new (...args: any[]) => (string | number)[]) | (() => (string | number)[]))[], unknown, unknown, () => never[], boolean>;
                readonly disabled: BooleanConstructor;
                readonly min: NumberConstructor;
                readonly max: NumberConstructor;
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly label: StringConstructor;
                readonly fill: StringConstructor;
                readonly textColor: StringConstructor;
                readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            }>> & {
                onChange?: ((val: import("element-plus").CheckboxValueType[]) => any) | undefined;
                "onUpdate:modelValue"?: ((val: import("element-plus").CheckboxValueType[]) => any) | undefined;
            }>>;
            emit: ((event: "update:modelValue", val: import("element-plus").CheckboxValueType[]) => void) & ((event: "change", val: import("element-plus").CheckboxValueType[]) => void);
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
            formItem: import("element-plus").FormItemContext | undefined;
            groupId: import("vue").Ref<string | undefined>;
            isLabeledByFormItem: import("vue").ComputedRef<boolean>;
            changeEvent: (value: import("element-plus").CheckboxValueType[]) => Promise<void>;
            modelValue: import("vue").WritableComputedRef<import("element-plus").CheckboxValueType[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (val: import("element-plus").CheckboxValueType[]) => boolean;
            change: (val: import("element-plus").CheckboxValueType[]) => boolean;
        }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | number)[]) | (() => (string | number)[]) | ((new (...args: any[]) => (string | number)[]) | (() => (string | number)[]))[], unknown, unknown, () => never[], boolean>;
            readonly disabled: BooleanConstructor;
            readonly min: NumberConstructor;
            readonly max: NumberConstructor;
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly label: StringConstructor;
            readonly fill: StringConstructor;
            readonly textColor: StringConstructor;
            readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
            readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        }>> & {
            onChange?: ((val: import("element-plus").CheckboxValueType[]) => any) | undefined;
            "onUpdate:modelValue"?: ((val: import("element-plus").CheckboxValueType[]) => any) | undefined;
        }, {
            readonly disabled: boolean;
            readonly modelValue: (string | number)[];
            readonly tag: string;
            readonly validateEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        }>;
    };
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
