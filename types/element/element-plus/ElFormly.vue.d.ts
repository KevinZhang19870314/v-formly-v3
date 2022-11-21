import { type Meta } from '../types/meta';
import { Global } from '../core/utils/global';
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: null;
        required: false;
    };
    layout: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    button: {
        type: StringConstructor;
        required: false;
    };
    meta: {
        type: null;
        required: true;
    };
}, {
    props: any;
    emit: {
        (e: "update:modelValue", modelValue: Object): void;
        (e: "form-reset", value: Object): void;
        (e: "form-submit", value: Object): void;
    };
    objectMeta: Meta;
    loading: import("vue").Ref<boolean>;
    globalInstance: Global;
    slotsName: string[];
    appContext: import("vue").AppContext;
    emitter: any;
    isInline: import("vue").ComputedRef<boolean>;
    onCreated: () => void;
    initFormData: (fData: any, properties: any) => void;
    getContext: <T>(id: string) => T;
    validate: () => Promise<any>;
    reset: (data: any) => void;
    clearForm: () => void;
    submitForm: () => Promise<void>;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "form-reset" | "form-submit")[], "update:modelValue" | "form-reset" | "form-submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: null;
        required: false;
    };
    layout: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    button: {
        type: StringConstructor;
        required: false;
    };
    meta: {
        type: null;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onForm-reset"?: ((...args: any[]) => any) | undefined;
    "onForm-submit"?: ((...args: any[]) => any) | undefined;
}, {
    layout: string;
}>;
export default _sfc_main;
