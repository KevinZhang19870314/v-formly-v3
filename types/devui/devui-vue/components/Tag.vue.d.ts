import type { Tag } from '../../types/tag';
import type { Global } from '../../core/utils/global';
import { NumberMeta } from '../../core/meta/number.meta';
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
    context: NumberMeta;
    readOnly: import("vue").Ref<any>;
    tags: import("vue").Ref<{
        [x: string]: any;
        label?: string | undefined;
        value?: any;
        disabled?: boolean | undefined;
        checked?: boolean | undefined;
    }[]>;
    ui: import("vue").ComputedRef<import('../../types/meta').AnyObject>;
    value: import("vue").WritableComputedRef<any>;
    handleChange: (tag: Tag, checked: boolean) => void;
    updateValue: () => void;
    updateTags: (val: Tag[] | string[]) => void;
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
