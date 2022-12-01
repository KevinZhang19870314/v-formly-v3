import type { Global } from '../../core/utils/global';
declare const _sfc_main: import("vue").DefineComponent<{
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
export default _sfc_main;
