import { ObjectMeta } from '../../core/meta/object.meta';
import type { Meta } from '../../types/meta';
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
    slotsName: string[];
    state: Global;
    appContext: import("vue").AppContext;
    context: ObjectMeta;
    ui: import("vue").ComputedRef<import('../../types/meta').AnyObject>;
    gutter: import("vue").ComputedRef<any>;
    layout: import("vue").ComputedRef<string>;
    visible: (meta: Meta) => any;
    grid: (item: any) => any;
    childMetaPairs: {
        key: string;
        propertyName: string;
        meta: any;
    }[];
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
