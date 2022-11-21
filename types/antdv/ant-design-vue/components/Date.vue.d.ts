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
    readOnly: import("vue").Ref<any>;
    ui: import("vue").ComputedRef<import('../../types/meta').AnyObject>;
    value: import("vue").WritableComputedRef<any>;
    change: () => void;
    ok: (value: any) => void;
    calendarChange: (dates: any, dateStrings: any, info: any) => void;
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
        oh: import("vue").ComputedRef<any>;
        labelCol: import("vue").ComputedRef<{
            span: number;
        } | undefined>;
        wrapperCol: import("vue").ComputedRef<{
            span: number;
            offset: any;
        } | undefined>;
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
