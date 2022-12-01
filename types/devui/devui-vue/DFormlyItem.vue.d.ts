declare const _sfc_main: import("vue").DefineComponent<{
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
export default _sfc_main;
