import { StringMeta } from '../../core/meta/string.meta';
import type { Global } from '../../core/utils/global';
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
    rangeBindings: {};
    dateBindings: {};
    rangeDatePickerRef: import("vue").Ref<any>;
    datePickerRef: import("vue").Ref<any>;
    readOnly: import("vue").Ref<any>;
    ui: import("vue").ComputedRef<import('../../types/meta').AnyObject>;
    value: import("vue").WritableComputedRef<any>;
    toggleChange: (open: boolean) => void;
    confirmEvent: (date: Date | Date[]) => void;
    focus: (e: MouseEvent) => void;
    blur: () => void;
    DRangeDatePickerPro: import("vue").DefineComponent<{
        readonly format: {
            type: StringConstructor;
        };
        readonly showTime: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly size: {
            type: import("vue").PropType<import("vue-devui/types/input").InputSize>;
            default: string;
        };
        readonly disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly calendarRange: {
            type: import("vue").PropType<number[]>;
            default: number[];
        };
        readonly limitDateRange: {
            type: import("vue").PropType<Date[]>;
        };
        readonly type: {
            type: StringConstructor;
            default: string;
        };
        readonly modelValue: {
            readonly type: import("vue").PropType<(string | Date)[]>;
            readonly default: readonly ["", ""];
        };
        readonly placeholder: {
            readonly type: import("vue").PropType<string[]>;
            readonly default: readonly ["", ""];
        };
        readonly separator: {
            readonly type: StringConstructor;
            readonly default: "-";
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue" | "blur" | "focus" | "toggleChange" | "confirmEvent", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly format: {
            type: StringConstructor;
        };
        readonly showTime: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly size: {
            type: import("vue").PropType<import("vue-devui/types/input").InputSize>;
            default: string;
        };
        readonly disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly calendarRange: {
            type: import("vue").PropType<number[]>;
            default: number[];
        };
        readonly limitDateRange: {
            type: import("vue").PropType<Date[]>;
        };
        readonly type: {
            type: StringConstructor;
            default: string;
        };
        readonly modelValue: {
            readonly type: import("vue").PropType<(string | Date)[]>;
            readonly default: readonly ["", ""];
        };
        readonly placeholder: {
            readonly type: import("vue").PropType<string[]>;
            readonly default: readonly ["", ""];
        };
        readonly separator: {
            readonly type: StringConstructor;
            readonly default: "-";
        };
    }>>, {
        readonly type: string;
        readonly disabled: boolean;
        readonly size: import("vue-devui/types/input").InputSize;
        readonly separator: string;
        readonly placeholder: string[];
        readonly modelValue: (string | Date)[];
        readonly showTime: boolean;
        readonly calendarRange: number[];
    }>;
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
