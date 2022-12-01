import type { Global } from '../../core/utils/global';
import { ArrayMeta } from '../../core/meta/array.meta';
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
    context: ArrayMeta;
    emitter: any;
    ui: import("vue").ComputedRef<import('../../types/meta').AnyObject>;
    value: import("vue").WritableComputedRef<any>;
    error: import("vue").WritableComputedRef<undefined>;
    readOnly: import("vue").Ref<any>;
    addDisabled: import("vue").ComputedRef<any>;
    showRemove: import("vue").ComputedRef<boolean>;
    arraySpan: import("vue").Ref<number>;
    removeTitle: import("vue").Ref<string>;
    formErrorChangeCallback: (err: any) => void;
    generateId: (i: number) => string;
    addItem: () => void;
    removeItem: (i: number) => void;
    VFormlyV3Item: import("vue").DefineComponent<{
        id: {
            type: StringConstructor;
            required: true;
        };
        show: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        meta: {
            type: null;
            required: true;
        };
    }, {
        props: any;
        visible: import("vue").Ref<boolean>;
        slotsName: string[];
        state: any;
        currentComponent: import("vue").ComputedRef<string>;
        layout: import("vue").ComputedRef<any>;
        onCreated: () => void;
        applyIgnoreErrors: (visible: boolean, id: string) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        id: {
            type: StringConstructor;
            required: true;
        };
        show: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
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
