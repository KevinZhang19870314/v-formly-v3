import type { Global } from '../../core/utils/global';
import { type ComponentInternalInstance } from "vue";
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
    bindings: any;
    panelBindings: any;
    readOnly: import("vue").Ref<any>;
    ui: import("vue").ComputedRef<import('../../types/meta').AnyObject>;
    isPanel: import("vue").ComputedRef<boolean>;
    value: import("vue").WritableComputedRef<any>;
    change: (value: any) => void;
    visibleChange: (visible: boolean) => void;
    expandChange: (data: any[]) => void;
    removeTag: (data: any[]) => void;
    blur: (e: FocusEvent) => void;
    focus: (e: FocusEvent) => void;
    ElCascader: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
        size: {
            type: import("vue").PropType<"" | "small" | "default" | "large">;
            validator: (val: string) => val is "" | "small" | "default" | "large";
        };
        placeholder: {
            type: StringConstructor;
        };
        disabled: BooleanConstructor;
        clearable: BooleanConstructor;
        filterable: BooleanConstructor;
        filterMethod: {
            type: import("vue").PropType<(node: import("element-plus/es/components/cascader-panel/src/node").default, keyword: string) => boolean>;
            default: (node: import("element-plus/es/components/cascader-panel/src/node").default, keyword: string) => boolean;
        };
        separator: {
            type: StringConstructor;
            default: string;
        };
        showAllLevels: {
            type: BooleanConstructor;
            default: boolean;
        };
        collapseTags: BooleanConstructor;
        collapseTagsTooltip: {
            type: BooleanConstructor;
            default: boolean;
        };
        debounce: {
            type: NumberConstructor;
            default: number;
        };
        beforeFilter: {
            type: import("vue").PropType<(value: string) => boolean | Promise<any>>;
            default: () => boolean;
        };
        popperClass: {
            type: StringConstructor;
            default: string;
        };
        teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        tagType: {
            default: string;
            type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "success" | "warning" | "info" | "danger", unknown>>;
            required: false;
            validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        validateEvent: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelValue: import("vue").PropType<import("element-plus/es/components/cascader-panel/src/node").CascaderValue>;
        options: {
            type: import("vue").PropType<import("element-plus").CascaderOption[]>;
            default: () => import("element-plus").CascaderOption[];
        };
        props: {
            type: import("vue").PropType<import("element-plus").CascaderProps>;
            default: () => import("element-plus").CascaderProps;
        };
    }, {
        popperOptions: Partial<import("element-plus").Options>;
        tooltipRef: import("vue").Ref<({
            $: ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                disabled: boolean;
                trigger: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>) | ((new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>))[], unknown, unknown>;
                placement: import("element-plus/es/utils").EpPropMergeType<StringConstructor, import("element-plus").Placement, unknown>;
                offset: number;
                effect: string;
                showAfter: number;
                hideAfter: number;
                boundariesPadding: number;
                fallbackPlacements: import("element-plus").Placement[];
                gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                popperOptions: Partial<import("element-plus").Options>;
                strategy: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
                enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                focusOnShow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                trapping: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                stopPopperMouseEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                visible: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown>;
                pure: boolean;
                virtualTriggering: boolean;
                appendTo: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>;
                content: string;
                rawContent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                transition: string;
                teleported: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                persistent: boolean;
                open: boolean;
                role: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
                triggerKeys: string[];
                arrowOffset: number;
                showArrow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                showArrow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
                arrowOffset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
                disabled: BooleanConstructor;
                trigger: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>) | ((new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
                triggerKeys: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
                virtualRef: {
                    readonly type: import("vue").PropType<import("element-plus").Measurable>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                virtualTriggering: BooleanConstructor;
                onMouseenter: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                onMouseleave: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                onClick: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                onKeydown: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                onFocus: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                onBlur: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                onContextmenu: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                id: StringConstructor;
                open: BooleanConstructor;
                appendTo: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown, string, boolean>;
                content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                rawContent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                persistent: BooleanConstructor;
                ariaLabel: StringConstructor;
                visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
                transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
                teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                style: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                className: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                pure: BooleanConstructor;
                focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                popperClass: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                popperStyle: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                referenceEl: {
                    readonly type: import("vue").PropType<HTMLElement>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                triggerTargetEl: {
                    readonly type: import("vue").PropType<HTMLElement>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                zIndex: NumberConstructor;
                boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
                "onUpdate:visible": {
                    readonly type: import("vue").PropType<(val: boolean) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
            }>> & {
                [x: `on${string}`]: ((...args: any[]) => any) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "disabled" | "placement" | "teleported" | "popperOptions" | "strategy" | "effect" | "persistent" | "open" | "showArrow" | "arrowOffset" | "trigger" | "triggerKeys" | "virtualTriggering" | "appendTo" | "content" | "rawContent" | "visible" | "transition" | "enterable" | "pure" | "focusOnShow" | "trapping" | "stopPopperMouseEvent" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "offset" | "showAfter" | "hideAfter" | "role">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                showArrow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
                arrowOffset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
                disabled: BooleanConstructor;
                trigger: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>) | ((new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
                triggerKeys: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
                virtualRef: {
                    readonly type: import("vue").PropType<import("element-plus").Measurable>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                virtualTriggering: BooleanConstructor;
                onMouseenter: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                onMouseleave: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                onClick: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                onKeydown: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                onFocus: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                onBlur: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                onContextmenu: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                id: StringConstructor;
                open: BooleanConstructor;
                appendTo: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown, string, boolean>;
                content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                rawContent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                persistent: BooleanConstructor;
                ariaLabel: StringConstructor;
                visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
                transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
                teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                style: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                className: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                pure: BooleanConstructor;
                focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                popperClass: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                popperStyle: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                referenceEl: {
                    readonly type: import("vue").PropType<HTMLElement>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                triggerTargetEl: {
                    readonly type: import("vue").PropType<HTMLElement>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                zIndex: NumberConstructor;
                boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
                "onUpdate:visible": {
                    readonly type: import("vue").PropType<(val: boolean) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
            }>> & {
                [x: `on${string}`]: ((...args: any[]) => any) | undefined;
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    showArrow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
                    arrowOffset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
                    disabled: BooleanConstructor;
                    trigger: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>) | ((new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
                    triggerKeys: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
                    virtualRef: {
                        readonly type: import("vue").PropType<import("element-plus").Measurable>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    virtualTriggering: BooleanConstructor;
                    onMouseenter: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    onMouseleave: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    onClick: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    onKeydown: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    onFocus: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    onBlur: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    onContextmenu: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    id: StringConstructor;
                    open: BooleanConstructor;
                    appendTo: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown, string, boolean>;
                    content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                    rawContent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    persistent: BooleanConstructor;
                    ariaLabel: StringConstructor;
                    visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
                    transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
                    teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    style: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    className: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                    enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    pure: BooleanConstructor;
                    focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    popperClass: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    popperStyle: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    referenceEl: {
                        readonly type: import("vue").PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    triggerTargetEl: {
                        readonly type: import("vue").PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    zIndex: NumberConstructor;
                    boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                    gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                    placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                    popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                    strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                    showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
                    "onUpdate:visible": {
                        readonly type: import("vue").PropType<(val: boolean) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
                }>> & {
                    [x: `on${string}`]: ((...args: any[]) => any) | undefined;
                }>>;
                emit: (event: string, ...args: any[]) => void;
                id: import("vue").Ref<string>;
                popperRef: import("vue").Ref<any>;
                contentRef: import("vue").Ref<any>;
                updatePopper: () => void;
                open: import("vue").Ref<boolean>;
                toggleReason: import("vue").Ref<Event | undefined>;
                show: (event?: Event | undefined) => void;
                hide: (event?: Event | undefined) => void;
                hasUpdateHandler: import("vue").ComputedRef<boolean>;
                onOpen: (event?: Event | undefined) => void;
                onClose: (event?: Event | undefined) => void;
                controlled: import("vue").ComputedRef<boolean>;
                isFocusInsideContent: () => boolean | undefined;
                ElPopper: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                    readonly role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
                    }>> & {
                        [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    triggerRef: import("vue").Ref<HTMLElement | undefined>;
                    popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                    contentRef: import("vue").Ref<HTMLElement | undefined>;
                    referenceRef: import("vue").Ref<HTMLElement | undefined>;
                    role: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>>;
                    popperProvides: import("element-plus").ElPopperInjectionContext;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
                }>>, {
                    readonly role: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
                }>> & Record<string, any>;
                ElPopperArrow: import("vue").DefineComponent<{
                    readonly arrowOffset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly arrowOffset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
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
                    arrowOffset: import("vue").Ref<number | undefined>;
                    arrowRef: import("vue").Ref<HTMLElement | undefined>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly arrowOffset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
                }>>, {
                    readonly arrowOffset: number;
                }>;
                ElTooltipTrigger: import("vue").DefineComponent<{
                    readonly disabled: BooleanConstructor;
                    readonly trigger: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>) | ((new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
                    readonly triggerKeys: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
                    readonly virtualRef: {
                        readonly type: import("vue").PropType<import("element-plus").Measurable>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly virtualTriggering: BooleanConstructor;
                    readonly onMouseenter: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onMouseleave: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onClick: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onKeydown: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onFocus: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onBlur: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onContextmenu: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly id: StringConstructor;
                    readonly open: BooleanConstructor;
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly disabled: BooleanConstructor;
                        readonly trigger: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>) | ((new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
                        readonly triggerKeys: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
                        readonly virtualRef: {
                            readonly type: import("vue").PropType<import("element-plus").Measurable>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly virtualTriggering: BooleanConstructor;
                        readonly onMouseenter: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly onMouseleave: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly onClick: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly onKeydown: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly onFocus: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly onBlur: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly onContextmenu: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly id: StringConstructor;
                        readonly open: BooleanConstructor;
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
                    controlled: import("vue").Ref<boolean>;
                    id: import("vue").Ref<string>;
                    open: import("vue").Ref<boolean>;
                    onOpen: (e?: Event | undefined) => void;
                    onClose: (e?: Event | undefined) => void;
                    onToggle: (e: Event) => void;
                    triggerRef: any;
                    stopWhenControlledOrDisabled: () => true | undefined;
                    trigger: import("vue").Ref<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>) | ((new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>))[], unknown, unknown>>;
                    onMouseenter: (event: Event) => void;
                    onMouseleave: (event: Event) => void;
                    onClick: (event: Event) => void;
                    onFocus: (event: Event) => void;
                    onBlur: (event: Event) => void;
                    onContextMenu: (event: Event) => void;
                    onKeydown: (event: KeyboardEvent) => void;
                    ElPopperTrigger: import("vue").DefineComponent<{
                        readonly virtualRef: {
                            readonly type: import("vue").PropType<import("element-plus").Measurable>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly virtualTriggering: BooleanConstructor;
                        readonly onMouseenter: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly onMouseleave: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly onClick: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly onKeydown: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly onFocus: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly onBlur: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly onContextmenu: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly id: StringConstructor;
                        readonly open: BooleanConstructor;
                    }, {
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly virtualRef: {
                                readonly type: import("vue").PropType<import("element-plus").Measurable>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly virtualTriggering: BooleanConstructor;
                            readonly onMouseenter: {
                                readonly type: import("vue").PropType<(e: Event) => void>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly onMouseleave: {
                                readonly type: import("vue").PropType<(e: Event) => void>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly onClick: {
                                readonly type: import("vue").PropType<(e: Event) => void>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly onKeydown: {
                                readonly type: import("vue").PropType<(e: Event) => void>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly onFocus: {
                                readonly type: import("vue").PropType<(e: Event) => void>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly onBlur: {
                                readonly type: import("vue").PropType<(e: Event) => void>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly onContextmenu: {
                                readonly type: import("vue").PropType<(e: Event) => void>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly id: StringConstructor;
                            readonly open: BooleanConstructor;
                        }>> & {
                            [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        role: import("vue").ComputedRef<string>;
                        triggerRef: import("vue").Ref<import("element-plus").Measurable | undefined>;
                        ariaControls: import("vue").ComputedRef<string | undefined>;
                        ariaDescribedby: import("vue").ComputedRef<string | undefined>;
                        ariaHaspopup: import("vue").ComputedRef<string | undefined>;
                        ariaExpanded: import("vue").ComputedRef<string | undefined>;
                        virtualTriggerAriaStopWatch: undefined;
                        ElOnlyChild: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                            [key: string]: any;
                        }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        readonly virtualRef: {
                            readonly type: import("vue").PropType<import("element-plus").Measurable>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly virtualTriggering: BooleanConstructor;
                        readonly onMouseenter: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly onMouseleave: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly onClick: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly onKeydown: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly onFocus: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly onBlur: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly onContextmenu: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly id: StringConstructor;
                        readonly open: BooleanConstructor;
                    }>>, {
                        readonly virtualTriggering: boolean;
                        readonly open: boolean;
                    }>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly disabled: BooleanConstructor;
                    readonly trigger: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>) | ((new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
                    readonly triggerKeys: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
                    readonly virtualRef: {
                        readonly type: import("vue").PropType<import("element-plus").Measurable>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly virtualTriggering: BooleanConstructor;
                    readonly onMouseenter: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onMouseleave: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onClick: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onKeydown: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onFocus: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onBlur: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onContextmenu: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly id: StringConstructor;
                    readonly open: BooleanConstructor;
                }>>, {
                    readonly disabled: boolean;
                    readonly trigger: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>) | ((new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>))[], unknown, unknown>;
                    readonly virtualTriggering: boolean;
                    readonly open: boolean;
                    readonly triggerKeys: string[];
                }>;
                ElTooltipContent: import("vue").DefineComponent<{
                    readonly appendTo: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown, string, boolean>;
                    readonly content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                    readonly rawContent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly persistent: BooleanConstructor;
                    readonly ariaLabel: StringConstructor;
                    readonly visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
                    readonly transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
                    readonly teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly disabled: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly id: StringConstructor;
                    readonly style: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly className: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                    readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly pure: BooleanConstructor;
                    readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly popperClass: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly popperStyle: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly referenceEl: {
                        readonly type: import("vue").PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly triggerTargetEl: {
                        readonly type: import("vue").PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly virtualTriggering: BooleanConstructor;
                    readonly zIndex: NumberConstructor;
                    readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                    readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                    readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                    readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                    readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                    readonly showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    readonly hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly appendTo: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown, string, boolean>;
                        readonly content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                        readonly rawContent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly persistent: BooleanConstructor;
                        readonly ariaLabel: StringConstructor;
                        readonly visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
                        readonly transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
                        readonly teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly disabled: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly id: StringConstructor;
                        readonly style: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly className: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                        readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly pure: BooleanConstructor;
                        readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly popperClass: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly popperStyle: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly referenceEl: {
                            readonly type: import("vue").PropType<HTMLElement>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly triggerTargetEl: {
                            readonly type: import("vue").PropType<HTMLElement>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly virtualTriggering: BooleanConstructor;
                        readonly zIndex: NumberConstructor;
                        readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                        readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                        readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                        readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                        readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                        readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                        readonly showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                        readonly hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
                    }>> & {
                        [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    contentRef: any;
                    destroyed: import("vue").Ref<boolean>;
                    controlled: import("vue").Ref<boolean>;
                    id: import("vue").Ref<string>;
                    open: import("vue").Ref<boolean>;
                    trigger: import("vue").Ref<import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>>;
                    onClose: (e?: Event | undefined) => void;
                    onOpen: (e?: Event | undefined) => void;
                    onShow: () => void;
                    onHide: () => void;
                    onBeforeShow: () => void;
                    onBeforeHide: () => void;
                    persistentRef: import("vue").ComputedRef<boolean>;
                    shouldRender: import("vue").ComputedRef<boolean>;
                    shouldShow: import("vue").ComputedRef<boolean>;
                    contentStyle: import("vue").ComputedRef<any>;
                    ariaHidden: import("vue").ComputedRef<boolean>;
                    onTransitionLeave: () => void;
                    stopWhenControlled: () => true | undefined;
                    onContentEnter: (event: unknown) => void;
                    onContentLeave: (event: unknown) => void;
                    onBeforeEnter: () => void;
                    onBeforeLeave: () => void;
                    onAfterShow: () => void;
                    onBlur: () => void;
                    stopHandle: (() => void) | undefined;
                    ElPopperContent: import("vue").DefineComponent<{
                        readonly id: StringConstructor;
                        readonly style: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly className: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                        readonly visible: BooleanConstructor;
                        readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly pure: BooleanConstructor;
                        readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly popperClass: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly popperStyle: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly referenceEl: {
                            readonly type: import("vue").PropType<HTMLElement>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly triggerTargetEl: {
                            readonly type: import("vue").PropType<HTMLElement>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                        readonly virtualTriggering: BooleanConstructor;
                        readonly zIndex: NumberConstructor;
                        readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                        readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                        readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                        readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                        readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                        readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                    }, {
                        emit: ((event: "focus") => void) & ((event: "close") => void) & ((event: "blur") => void) & ((event: "mouseleave", evt: MouseEvent) => void) & ((event: "mouseenter", evt: MouseEvent) => void);
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly id: StringConstructor;
                            readonly style: {
                                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly className: {
                                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                            readonly visible: BooleanConstructor;
                            readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly pure: BooleanConstructor;
                            readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                            readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                            readonly popperClass: {
                                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly popperStyle: {
                                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly referenceEl: {
                                readonly type: import("vue").PropType<HTMLElement>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly triggerTargetEl: {
                                readonly type: import("vue").PropType<HTMLElement>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                            readonly virtualTriggering: BooleanConstructor;
                            readonly zIndex: NumberConstructor;
                            readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                            readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                            readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                            readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                            readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                            readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                        }>> & {
                            onClose?: (() => any) | undefined;
                            onFocus?: (() => any) | undefined;
                            onBlur?: (() => any) | undefined;
                            onMouseleave?: ((evt: MouseEvent) => any) | undefined;
                            onMouseenter?: ((evt: MouseEvent) => any) | undefined;
                        }>>;
                        popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                        contentRef: import("vue").Ref<HTMLElement | undefined>;
                        triggerRef: import("vue").Ref<import("element-plus").Measurable | undefined>;
                        role: import("vue").ComputedRef<string>;
                        formItemContext: import("element-plus").FormItemContext | undefined;
                        nextZIndex: () => number;
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
                        popperContentRef: import("vue").Ref<HTMLElement | undefined>;
                        focusStartRef: import("vue").Ref<HTMLElement | "first" | "container">;
                        arrowRef: import("vue").Ref<HTMLElement | undefined>;
                        arrowOffset: import("vue").Ref<number | undefined>;
                        contentZIndex: import("vue").Ref<number>;
                        trapped: import("vue").Ref<boolean>;
                        triggerTargetAriaStopWatch: undefined;
                        computedReference: import("vue").ComputedRef<import("element-plus").Measurable | undefined>;
                        contentStyle: import("vue").ComputedRef<any>;
                        contentClass: import("vue").ComputedRef<(string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[] | undefined)[]>;
                        ariaModal: import("vue").ComputedRef<string | undefined>;
                        createPopperInstance: ({ referenceEl, popperContentEl, arrowEl, }: import("element-plus").CreatePopperInstanceParams) => import("@popperjs/core").Instance;
                        updatePopper: (shouldUpdateZIndex?: boolean | undefined) => void;
                        togglePopperAlive: () => void;
                        onFocusAfterTrapped: () => void;
                        onFocusAfterReleased: (event: CustomEvent<any>) => void;
                        onFocusInTrap: (event: FocusEvent) => void;
                        onFocusoutPrevented: (event: CustomEvent<any>) => void;
                        onReleaseRequested: () => void;
                        ElFocusTrap: import("vue").DefineComponent<{
                            loop: BooleanConstructor;
                            trapped: BooleanConstructor;
                            focusTrapEl: import("vue").PropType<HTMLElement>;
                            focusStartEl: {
                                type: import("vue").PropType<HTMLElement | "first" | "container">;
                                default: string;
                            };
                        }, {
                            onKeydown: (e: KeyboardEvent) => void;
                        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focusAfterTrapped" | "focusAfterReleased" | "focusin" | "focusout" | "focusout-prevented" | "release-requested")[], "focusAfterTrapped" | "focusAfterReleased" | "focusin" | "focusout" | "focusout-prevented" | "release-requested", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                            loop: BooleanConstructor;
                            trapped: BooleanConstructor;
                            focusTrapEl: import("vue").PropType<HTMLElement>;
                            focusStartEl: {
                                type: import("vue").PropType<HTMLElement | "first" | "container">;
                                default: string;
                            };
                        }>> & {
                            onFocusAfterTrapped?: ((...args: any[]) => any) | undefined;
                            onFocusAfterReleased?: ((...args: any[]) => any) | undefined;
                            onFocusin?: ((...args: any[]) => any) | undefined;
                            onFocusout?: ((...args: any[]) => any) | undefined;
                            "onFocusout-prevented"?: ((...args: any[]) => any) | undefined;
                            "onRelease-requested"?: ((...args: any[]) => any) | undefined;
                        }, {
                            loop: boolean;
                            trapped: boolean;
                            focusStartEl: HTMLElement | "first" | "container";
                        }>;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                        mouseenter: (evt: MouseEvent) => boolean;
                        mouseleave: (evt: MouseEvent) => boolean;
                        focus: () => boolean;
                        blur: () => boolean;
                        close: () => boolean;
                    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        readonly id: StringConstructor;
                        readonly style: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly className: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                        readonly visible: BooleanConstructor;
                        readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly pure: BooleanConstructor;
                        readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly popperClass: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly popperStyle: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly referenceEl: {
                            readonly type: import("vue").PropType<HTMLElement>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly triggerTargetEl: {
                            readonly type: import("vue").PropType<HTMLElement>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                        readonly virtualTriggering: BooleanConstructor;
                        readonly zIndex: NumberConstructor;
                        readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                        readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                        readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                        readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                        readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                        readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                    }>> & {
                        onClose?: (() => any) | undefined;
                        onFocus?: (() => any) | undefined;
                        onBlur?: (() => any) | undefined;
                        onMouseleave?: ((evt: MouseEvent) => any) | undefined;
                        onMouseenter?: ((evt: MouseEvent) => any) | undefined;
                    }, {
                        readonly placement: import("element-plus/es/utils").EpPropMergeType<StringConstructor, import("element-plus").Placement, unknown>;
                        readonly offset: number;
                        readonly effect: string;
                        readonly boundariesPadding: number;
                        readonly fallbackPlacements: import("element-plus").Placement[];
                        readonly gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                        readonly popperOptions: Partial<import("element-plus").Options>;
                        readonly strategy: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
                        readonly enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                        readonly focusOnShow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                        readonly trapping: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                        readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                        readonly ariaLabel: string;
                        readonly visible: boolean;
                        readonly pure: boolean;
                        readonly virtualTriggering: boolean;
                    }>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly appendTo: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown, string, boolean>;
                    readonly content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                    readonly rawContent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly persistent: BooleanConstructor;
                    readonly ariaLabel: StringConstructor;
                    readonly visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
                    readonly transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
                    readonly teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly disabled: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly id: StringConstructor;
                    readonly style: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly className: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                    readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly pure: BooleanConstructor;
                    readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly popperClass: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly popperStyle: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly referenceEl: {
                        readonly type: import("vue").PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly triggerTargetEl: {
                        readonly type: import("vue").PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly virtualTriggering: BooleanConstructor;
                    readonly zIndex: NumberConstructor;
                    readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                    readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                    readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                    readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                    readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                    readonly showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    readonly hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
                }>>, {
                    readonly placement: import("element-plus/es/utils").EpPropMergeType<StringConstructor, import("element-plus").Placement, unknown>;
                    readonly offset: number;
                    readonly effect: string;
                    readonly showAfter: number;
                    readonly hideAfter: number;
                    readonly boundariesPadding: number;
                    readonly fallbackPlacements: import("element-plus").Placement[];
                    readonly gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly popperOptions: Partial<import("element-plus").Options>;
                    readonly strategy: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
                    readonly enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly focusOnShow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly trapping: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly visible: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown>;
                    readonly pure: boolean;
                    readonly virtualTriggering: boolean;
                    readonly appendTo: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>;
                    readonly content: string;
                    readonly rawContent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly transition: string;
                    readonly teleported: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly persistent: boolean;
                }>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
                disabled: boolean;
                trigger: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>) | ((new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>))[], unknown, unknown>;
                placement: import("element-plus/es/utils").EpPropMergeType<StringConstructor, import("element-plus").Placement, unknown>;
                offset: number;
                effect: string;
                showAfter: number;
                hideAfter: number;
                boundariesPadding: number;
                fallbackPlacements: import("element-plus").Placement[];
                gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                popperOptions: Partial<import("element-plus").Options>;
                strategy: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
                enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                focusOnShow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                trapping: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                stopPopperMouseEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                visible: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown>;
                pure: boolean;
                virtualTriggering: boolean;
                appendTo: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>;
                content: string;
                rawContent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                transition: string;
                teleported: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                persistent: boolean;
                open: boolean;
                role: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
                triggerKeys: string[];
                arrowOffset: number;
                showArrow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            }> & {
                beforeCreate?: (() => void) | (() => void)[] | undefined;
                created?: (() => void) | (() => void)[] | undefined;
                beforeMount?: (() => void) | (() => void)[] | undefined;
                mounted?: (() => void) | (() => void)[] | undefined;
                beforeUpdate?: (() => void) | (() => void)[] | undefined;
                updated?: (() => void) | (() => void)[] | undefined;
                activated?: (() => void) | (() => void)[] | undefined;
                deactivated?: (() => void) | (() => void)[] | undefined;
                beforeDestroy?: (() => void) | (() => void)[] | undefined;
                beforeUnmount?: (() => void) | (() => void)[] | undefined;
                destroyed?: (() => void) | (() => void)[] | undefined;
                unmounted?: (() => void) | (() => void)[] | undefined;
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{
            showArrow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
            arrowOffset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
            disabled: BooleanConstructor;
            trigger: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>) | ((new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
            triggerKeys: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
            virtualRef: {
                readonly type: import("vue").PropType<import("element-plus").Measurable>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            virtualTriggering: BooleanConstructor;
            onMouseenter: {
                readonly type: import("vue").PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            onMouseleave: {
                readonly type: import("vue").PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            onClick: {
                readonly type: import("vue").PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            onKeydown: {
                readonly type: import("vue").PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            onFocus: {
                readonly type: import("vue").PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            onBlur: {
                readonly type: import("vue").PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            onContextmenu: {
                readonly type: import("vue").PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            id: StringConstructor;
            open: BooleanConstructor;
            appendTo: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown, string, boolean>;
            content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            rawContent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            persistent: BooleanConstructor;
            ariaLabel: StringConstructor;
            visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
            transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
            teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            style: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            className: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
            enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            pure: BooleanConstructor;
            focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            popperClass: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            popperStyle: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            referenceEl: {
                readonly type: import("vue").PropType<HTMLElement>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            triggerTargetEl: {
                readonly type: import("vue").PropType<HTMLElement>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            zIndex: NumberConstructor;
            boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
            gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
            placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
            popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
            strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
            showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
            "onUpdate:visible": {
                readonly type: import("vue").PropType<(val: boolean) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
        }>> & {
            [x: `on${string}`]: ((...args: any[]) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<{
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                showArrow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
                arrowOffset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
                disabled: BooleanConstructor;
                trigger: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>) | ((new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
                triggerKeys: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
                virtualRef: {
                    readonly type: import("vue").PropType<import("element-plus").Measurable>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                virtualTriggering: BooleanConstructor;
                onMouseenter: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                onMouseleave: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                onClick: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                onKeydown: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                onFocus: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                onBlur: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                onContextmenu: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                id: StringConstructor;
                open: BooleanConstructor;
                appendTo: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown, string, boolean>;
                content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                rawContent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                persistent: BooleanConstructor;
                ariaLabel: StringConstructor;
                visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
                transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
                teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                style: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                className: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                pure: BooleanConstructor;
                focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                popperClass: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                popperStyle: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                referenceEl: {
                    readonly type: import("vue").PropType<HTMLElement>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                triggerTargetEl: {
                    readonly type: import("vue").PropType<HTMLElement>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                zIndex: NumberConstructor;
                boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
                "onUpdate:visible": {
                    readonly type: import("vue").PropType<(val: boolean) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
            }>> & {
                [x: `on${string}`]: ((...args: any[]) => any) | undefined;
            }>>;
            emit: (event: string, ...args: any[]) => void;
            id: import("vue").Ref<string>;
            popperRef: import("vue").Ref<any>;
            contentRef: import("vue").Ref<any>;
            updatePopper: () => void;
            open: import("vue").Ref<boolean>;
            toggleReason: import("vue").Ref<Event | undefined>;
            show: (event?: Event | undefined) => void;
            hide: (event?: Event | undefined) => void;
            hasUpdateHandler: import("vue").ComputedRef<boolean>;
            onOpen: (event?: Event | undefined) => void;
            onClose: (event?: Event | undefined) => void;
            controlled: import("vue").ComputedRef<boolean>;
            isFocusInsideContent: () => boolean | undefined;
            ElPopper: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                readonly role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
                }>> & {
                    [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                triggerRef: import("vue").Ref<HTMLElement | undefined>;
                popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                contentRef: import("vue").Ref<HTMLElement | undefined>;
                referenceRef: import("vue").Ref<HTMLElement | undefined>;
                role: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>>;
                popperProvides: import("element-plus").ElPopperInjectionContext;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
            }>>, {
                readonly role: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            }>> & Record<string, any>;
            ElPopperArrow: import("vue").DefineComponent<{
                readonly arrowOffset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly arrowOffset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
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
                arrowOffset: import("vue").Ref<number | undefined>;
                arrowRef: import("vue").Ref<HTMLElement | undefined>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly arrowOffset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
            }>>, {
                readonly arrowOffset: number;
            }>;
            ElTooltipTrigger: import("vue").DefineComponent<{
                readonly disabled: BooleanConstructor;
                readonly trigger: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>) | ((new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
                readonly triggerKeys: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
                readonly virtualRef: {
                    readonly type: import("vue").PropType<import("element-plus").Measurable>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly virtualTriggering: BooleanConstructor;
                readonly onMouseenter: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly onMouseleave: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly onClick: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly onKeydown: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly onFocus: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly onBlur: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly onContextmenu: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly id: StringConstructor;
                readonly open: BooleanConstructor;
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly disabled: BooleanConstructor;
                    readonly trigger: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>) | ((new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
                    readonly triggerKeys: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
                    readonly virtualRef: {
                        readonly type: import("vue").PropType<import("element-plus").Measurable>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly virtualTriggering: BooleanConstructor;
                    readonly onMouseenter: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onMouseleave: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onClick: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onKeydown: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onFocus: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onBlur: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onContextmenu: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly id: StringConstructor;
                    readonly open: BooleanConstructor;
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
                controlled: import("vue").Ref<boolean>;
                id: import("vue").Ref<string>;
                open: import("vue").Ref<boolean>;
                onOpen: (e?: Event | undefined) => void;
                onClose: (e?: Event | undefined) => void;
                onToggle: (e: Event) => void;
                triggerRef: any;
                stopWhenControlledOrDisabled: () => true | undefined;
                trigger: import("vue").Ref<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>) | ((new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>))[], unknown, unknown>>;
                onMouseenter: (event: Event) => void;
                onMouseleave: (event: Event) => void;
                onClick: (event: Event) => void;
                onFocus: (event: Event) => void;
                onBlur: (event: Event) => void;
                onContextMenu: (event: Event) => void;
                onKeydown: (event: KeyboardEvent) => void;
                ElPopperTrigger: import("vue").DefineComponent<{
                    readonly virtualRef: {
                        readonly type: import("vue").PropType<import("element-plus").Measurable>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly virtualTriggering: BooleanConstructor;
                    readonly onMouseenter: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onMouseleave: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onClick: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onKeydown: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onFocus: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onBlur: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onContextmenu: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly id: StringConstructor;
                    readonly open: BooleanConstructor;
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly virtualRef: {
                            readonly type: import("vue").PropType<import("element-plus").Measurable>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly virtualTriggering: BooleanConstructor;
                        readonly onMouseenter: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly onMouseleave: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly onClick: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly onKeydown: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly onFocus: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly onBlur: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly onContextmenu: {
                            readonly type: import("vue").PropType<(e: Event) => void>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly id: StringConstructor;
                        readonly open: BooleanConstructor;
                    }>> & {
                        [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    role: import("vue").ComputedRef<string>;
                    triggerRef: import("vue").Ref<import("element-plus").Measurable | undefined>;
                    ariaControls: import("vue").ComputedRef<string | undefined>;
                    ariaDescribedby: import("vue").ComputedRef<string | undefined>;
                    ariaHaspopup: import("vue").ComputedRef<string | undefined>;
                    ariaExpanded: import("vue").ComputedRef<string | undefined>;
                    virtualTriggerAriaStopWatch: undefined;
                    ElOnlyChild: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly virtualRef: {
                        readonly type: import("vue").PropType<import("element-plus").Measurable>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly virtualTriggering: BooleanConstructor;
                    readonly onMouseenter: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onMouseleave: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onClick: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onKeydown: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onFocus: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onBlur: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly onContextmenu: {
                        readonly type: import("vue").PropType<(e: Event) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly id: StringConstructor;
                    readonly open: BooleanConstructor;
                }>>, {
                    readonly virtualTriggering: boolean;
                    readonly open: boolean;
                }>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly disabled: BooleanConstructor;
                readonly trigger: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>) | ((new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>))[], unknown, unknown, "hover", boolean>;
                readonly triggerKeys: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
                readonly virtualRef: {
                    readonly type: import("vue").PropType<import("element-plus").Measurable>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly virtualTriggering: BooleanConstructor;
                readonly onMouseenter: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly onMouseleave: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly onClick: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly onKeydown: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly onFocus: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly onBlur: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly onContextmenu: {
                    readonly type: import("vue").PropType<(e: Event) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly id: StringConstructor;
                readonly open: BooleanConstructor;
            }>>, {
                readonly disabled: boolean;
                readonly trigger: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>) | ((new (...args: any[]) => "focus" | "hover" | "click" | "contextmenu" | import("element-plus").TooltipTriggerType[]) | (() => import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>))[], unknown, unknown>;
                readonly virtualTriggering: boolean;
                readonly open: boolean;
                readonly triggerKeys: string[];
            }>;
            ElTooltipContent: import("vue").DefineComponent<{
                readonly appendTo: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown, string, boolean>;
                readonly content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly rawContent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly persistent: BooleanConstructor;
                readonly ariaLabel: StringConstructor;
                readonly visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
                readonly transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
                readonly teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly disabled: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly id: StringConstructor;
                readonly style: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly className: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly pure: BooleanConstructor;
                readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly popperClass: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly popperStyle: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly referenceEl: {
                    readonly type: import("vue").PropType<HTMLElement>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly triggerTargetEl: {
                    readonly type: import("vue").PropType<HTMLElement>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly virtualTriggering: BooleanConstructor;
                readonly zIndex: NumberConstructor;
                readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                readonly showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                readonly hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly appendTo: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown, string, boolean>;
                    readonly content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                    readonly rawContent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly persistent: BooleanConstructor;
                    readonly ariaLabel: StringConstructor;
                    readonly visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
                    readonly transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
                    readonly teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly disabled: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly id: StringConstructor;
                    readonly style: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly className: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                    readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly pure: BooleanConstructor;
                    readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly popperClass: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly popperStyle: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly referenceEl: {
                        readonly type: import("vue").PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly triggerTargetEl: {
                        readonly type: import("vue").PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly virtualTriggering: BooleanConstructor;
                    readonly zIndex: NumberConstructor;
                    readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                    readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                    readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                    readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                    readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                    readonly showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    readonly hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
                }>> & {
                    [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                contentRef: any;
                destroyed: import("vue").Ref<boolean>;
                controlled: import("vue").Ref<boolean>;
                id: import("vue").Ref<string>;
                open: import("vue").Ref<boolean>;
                trigger: import("vue").Ref<import("element-plus/es/utils").Arrayable<import("element-plus").TooltipTriggerType>>;
                onClose: (e?: Event | undefined) => void;
                onOpen: (e?: Event | undefined) => void;
                onShow: () => void;
                onHide: () => void;
                onBeforeShow: () => void;
                onBeforeHide: () => void;
                persistentRef: import("vue").ComputedRef<boolean>;
                shouldRender: import("vue").ComputedRef<boolean>;
                shouldShow: import("vue").ComputedRef<boolean>;
                contentStyle: import("vue").ComputedRef<any>;
                ariaHidden: import("vue").ComputedRef<boolean>;
                onTransitionLeave: () => void;
                stopWhenControlled: () => true | undefined;
                onContentEnter: (event: unknown) => void;
                onContentLeave: (event: unknown) => void;
                onBeforeEnter: () => void;
                onBeforeLeave: () => void;
                onAfterShow: () => void;
                onBlur: () => void;
                stopHandle: (() => void) | undefined;
                ElPopperContent: import("vue").DefineComponent<{
                    readonly id: StringConstructor;
                    readonly style: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly className: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                    readonly visible: BooleanConstructor;
                    readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly pure: BooleanConstructor;
                    readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly popperClass: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly popperStyle: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly referenceEl: {
                        readonly type: import("vue").PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly triggerTargetEl: {
                        readonly type: import("vue").PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                    readonly virtualTriggering: BooleanConstructor;
                    readonly zIndex: NumberConstructor;
                    readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                    readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                    readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                    readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                    readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                }, {
                    emit: ((event: "focus") => void) & ((event: "close") => void) & ((event: "blur") => void) & ((event: "mouseleave", evt: MouseEvent) => void) & ((event: "mouseenter", evt: MouseEvent) => void);
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly id: StringConstructor;
                        readonly style: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly className: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                        readonly visible: BooleanConstructor;
                        readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly pure: BooleanConstructor;
                        readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly popperClass: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly popperStyle: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly referenceEl: {
                            readonly type: import("vue").PropType<HTMLElement>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly triggerTargetEl: {
                            readonly type: import("vue").PropType<HTMLElement>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                        readonly virtualTriggering: BooleanConstructor;
                        readonly zIndex: NumberConstructor;
                        readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                        readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                        readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                        readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                        readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                        readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                    }>> & {
                        onClose?: (() => any) | undefined;
                        onFocus?: (() => any) | undefined;
                        onBlur?: (() => any) | undefined;
                        onMouseleave?: ((evt: MouseEvent) => any) | undefined;
                        onMouseenter?: ((evt: MouseEvent) => any) | undefined;
                    }>>;
                    popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                    contentRef: import("vue").Ref<HTMLElement | undefined>;
                    triggerRef: import("vue").Ref<import("element-plus").Measurable | undefined>;
                    role: import("vue").ComputedRef<string>;
                    formItemContext: import("element-plus").FormItemContext | undefined;
                    nextZIndex: () => number;
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
                    popperContentRef: import("vue").Ref<HTMLElement | undefined>;
                    focusStartRef: import("vue").Ref<HTMLElement | "first" | "container">;
                    arrowRef: import("vue").Ref<HTMLElement | undefined>;
                    arrowOffset: import("vue").Ref<number | undefined>;
                    contentZIndex: import("vue").Ref<number>;
                    trapped: import("vue").Ref<boolean>;
                    triggerTargetAriaStopWatch: undefined;
                    computedReference: import("vue").ComputedRef<import("element-plus").Measurable | undefined>;
                    contentStyle: import("vue").ComputedRef<any>;
                    contentClass: import("vue").ComputedRef<(string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[] | undefined)[]>;
                    ariaModal: import("vue").ComputedRef<string | undefined>;
                    createPopperInstance: ({ referenceEl, popperContentEl, arrowEl, }: import("element-plus").CreatePopperInstanceParams) => import("@popperjs/core").Instance;
                    updatePopper: (shouldUpdateZIndex?: boolean | undefined) => void;
                    togglePopperAlive: () => void;
                    onFocusAfterTrapped: () => void;
                    onFocusAfterReleased: (event: CustomEvent<any>) => void;
                    onFocusInTrap: (event: FocusEvent) => void;
                    onFocusoutPrevented: (event: CustomEvent<any>) => void;
                    onReleaseRequested: () => void;
                    ElFocusTrap: import("vue").DefineComponent<{
                        loop: BooleanConstructor;
                        trapped: BooleanConstructor;
                        focusTrapEl: import("vue").PropType<HTMLElement>;
                        focusStartEl: {
                            type: import("vue").PropType<HTMLElement | "first" | "container">;
                            default: string;
                        };
                    }, {
                        onKeydown: (e: KeyboardEvent) => void;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focusAfterTrapped" | "focusAfterReleased" | "focusin" | "focusout" | "focusout-prevented" | "release-requested")[], "focusAfterTrapped" | "focusAfterReleased" | "focusin" | "focusout" | "focusout-prevented" | "release-requested", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        loop: BooleanConstructor;
                        trapped: BooleanConstructor;
                        focusTrapEl: import("vue").PropType<HTMLElement>;
                        focusStartEl: {
                            type: import("vue").PropType<HTMLElement | "first" | "container">;
                            default: string;
                        };
                    }>> & {
                        onFocusAfterTrapped?: ((...args: any[]) => any) | undefined;
                        onFocusAfterReleased?: ((...args: any[]) => any) | undefined;
                        onFocusin?: ((...args: any[]) => any) | undefined;
                        onFocusout?: ((...args: any[]) => any) | undefined;
                        "onFocusout-prevented"?: ((...args: any[]) => any) | undefined;
                        "onRelease-requested"?: ((...args: any[]) => any) | undefined;
                    }, {
                        loop: boolean;
                        trapped: boolean;
                        focusStartEl: HTMLElement | "first" | "container";
                    }>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    mouseenter: (evt: MouseEvent) => boolean;
                    mouseleave: (evt: MouseEvent) => boolean;
                    focus: () => boolean;
                    blur: () => boolean;
                    close: () => boolean;
                }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly id: StringConstructor;
                    readonly style: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly className: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                    readonly visible: BooleanConstructor;
                    readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly pure: BooleanConstructor;
                    readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly popperClass: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly popperStyle: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly referenceEl: {
                        readonly type: import("vue").PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly triggerTargetEl: {
                        readonly type: import("vue").PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                    readonly virtualTriggering: BooleanConstructor;
                    readonly zIndex: NumberConstructor;
                    readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                    readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                    readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                    readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                    readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                }>> & {
                    onClose?: (() => any) | undefined;
                    onFocus?: (() => any) | undefined;
                    onBlur?: (() => any) | undefined;
                    onMouseleave?: ((evt: MouseEvent) => any) | undefined;
                    onMouseenter?: ((evt: MouseEvent) => any) | undefined;
                }, {
                    readonly placement: import("element-plus/es/utils").EpPropMergeType<StringConstructor, import("element-plus").Placement, unknown>;
                    readonly offset: number;
                    readonly effect: string;
                    readonly boundariesPadding: number;
                    readonly fallbackPlacements: import("element-plus").Placement[];
                    readonly gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly popperOptions: Partial<import("element-plus").Options>;
                    readonly strategy: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
                    readonly enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly focusOnShow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly trapping: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly ariaLabel: string;
                    readonly visible: boolean;
                    readonly pure: boolean;
                    readonly virtualTriggering: boolean;
                }>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly appendTo: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown, string, boolean>;
                readonly content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly rawContent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly persistent: BooleanConstructor;
                readonly ariaLabel: StringConstructor;
                readonly visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown, null, boolean>;
                readonly transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
                readonly teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly disabled: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly id: StringConstructor;
                readonly style: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly className: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly pure: BooleanConstructor;
                readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly popperClass: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly popperStyle: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly referenceEl: {
                    readonly type: import("vue").PropType<HTMLElement>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly triggerTargetEl: {
                    readonly type: import("vue").PropType<HTMLElement>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly virtualTriggering: BooleanConstructor;
                readonly zIndex: NumberConstructor;
                readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                readonly showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                readonly hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
            }>>, {
                readonly placement: import("element-plus/es/utils").EpPropMergeType<StringConstructor, import("element-plus").Placement, unknown>;
                readonly offset: number;
                readonly effect: string;
                readonly showAfter: number;
                readonly hideAfter: number;
                readonly boundariesPadding: number;
                readonly fallbackPlacements: import("element-plus").Placement[];
                readonly gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly popperOptions: Partial<import("element-plus").Options>;
                readonly strategy: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
                readonly enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly focusOnShow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly trapping: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly visible: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | ((new (...args: any[]) => boolean) | (() => boolean | null))[], unknown, unknown>;
                readonly pure: boolean;
                readonly virtualTriggering: boolean;
                readonly appendTo: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>;
                readonly content: string;
                readonly rawContent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly transition: string;
                readonly teleported: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly persistent: boolean;
            }>;
        }> & import("vue").ComponentCustomProperties) | null>;
        popperPaneRef: import("vue").ComputedRef<any>;
        input: import("vue").Ref<({
            $: ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                readonly type: string;
                readonly disabled: boolean;
                readonly label: string;
                readonly modelValue: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown>;
                readonly validateEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly id: string;
                readonly autosize: import("element-plus").InputAutoSize;
                readonly autocomplete: string;
                readonly readonly: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly clearable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly showPassword: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly showWordLimit: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly containerRole: string;
                readonly tabindex: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly inputStyle: import("vue").StyleValue;
            }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                readonly id: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly disabled: BooleanConstructor;
                readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
                readonly resize: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "horizontal" | "vertical" | "none" | "both", unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly autosize: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean | {
                    minRows?: number | undefined;
                    maxRows?: number | undefined;
                }) | (() => import("element-plus").InputAutoSize) | ((new (...args: any[]) => boolean | {
                    minRows?: number | undefined;
                    maxRows?: number | undefined;
                }) | (() => import("element-plus").InputAutoSize))[], unknown, unknown, false, boolean>;
                readonly autocomplete: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
                readonly formatter: {
                    readonly type: import("vue").PropType<Function>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly parser: {
                    readonly type: import("vue").PropType<Function>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly placeholder: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly form: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly readonly: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly clearable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly showPassword: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly showWordLimit: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly suffixIcon: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly prefixIcon: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly containerRole: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly tabindex: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
                readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly inputStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
            }>> & {
                onChange?: ((value: string) => any) | undefined;
                "onUpdate:modelValue"?: ((value: string) => any) | undefined;
                onInput?: ((value: string) => any) | undefined;
                onFocus?: ((evt: FocusEvent) => any) | undefined;
                onBlur?: ((evt: FocusEvent) => any) | undefined;
                onClear?: (() => any) | undefined;
                onMouseleave?: ((evt: MouseEvent) => any) | undefined;
                onMouseenter?: ((evt: MouseEvent) => any) | undefined;
                onKeydown?: ((evt: Event | KeyboardEvent) => any) | undefined;
                onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
                onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
                onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "modelValue" | "type" | "id" | "disabled" | "autosize" | "autocomplete" | "readonly" | "clearable" | "showPassword" | "showWordLimit" | "containerRole" | "label" | "tabindex" | "validateEvent" | "inputStyle">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $emit: ((event: "update:modelValue", value: string) => void) & ((event: "change", value: string) => void) & ((event: "input", value: string) => void) & ((event: "focus", evt: FocusEvent) => void) & ((event: "blur", evt: FocusEvent) => void) & ((event: "clear") => void) & ((event: "mouseleave", evt: MouseEvent) => void) & ((event: "mouseenter", evt: MouseEvent) => void) & ((event: "keydown", evt: Event | KeyboardEvent) => void) & ((event: "compositionstart", evt: CompositionEvent) => void) & ((event: "compositionupdate", evt: CompositionEvent) => void) & ((event: "compositionend", evt: CompositionEvent) => void);
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                readonly id: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly disabled: BooleanConstructor;
                readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
                readonly resize: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "horizontal" | "vertical" | "none" | "both", unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly autosize: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean | {
                    minRows?: number | undefined;
                    maxRows?: number | undefined;
                }) | (() => import("element-plus").InputAutoSize) | ((new (...args: any[]) => boolean | {
                    minRows?: number | undefined;
                    maxRows?: number | undefined;
                }) | (() => import("element-plus").InputAutoSize))[], unknown, unknown, false, boolean>;
                readonly autocomplete: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
                readonly formatter: {
                    readonly type: import("vue").PropType<Function>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly parser: {
                    readonly type: import("vue").PropType<Function>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly placeholder: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly form: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly readonly: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly clearable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly showPassword: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly showWordLimit: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly suffixIcon: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly prefixIcon: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly containerRole: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly tabindex: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
                readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly inputStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
            }>> & {
                onChange?: ((value: string) => any) | undefined;
                "onUpdate:modelValue"?: ((value: string) => any) | undefined;
                onInput?: ((value: string) => any) | undefined;
                onFocus?: ((evt: FocusEvent) => any) | undefined;
                onBlur?: ((evt: FocusEvent) => any) | undefined;
                onClear?: (() => any) | undefined;
                onMouseleave?: ((evt: MouseEvent) => any) | undefined;
                onMouseenter?: ((evt: MouseEvent) => any) | undefined;
                onKeydown?: ((evt: Event | KeyboardEvent) => any) | undefined;
                onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
                onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
                onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly id: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly disabled: BooleanConstructor;
                    readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
                    readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
                    readonly resize: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "horizontal" | "vertical" | "none" | "both", unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly autosize: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean | {
                        minRows?: number | undefined;
                        maxRows?: number | undefined;
                    }) | (() => import("element-plus").InputAutoSize) | ((new (...args: any[]) => boolean | {
                        minRows?: number | undefined;
                        maxRows?: number | undefined;
                    }) | (() => import("element-plus").InputAutoSize))[], unknown, unknown, false, boolean>;
                    readonly autocomplete: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
                    readonly formatter: {
                        readonly type: import("vue").PropType<Function>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly parser: {
                        readonly type: import("vue").PropType<Function>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly placeholder: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly form: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly readonly: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly clearable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly showPassword: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly showWordLimit: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly suffixIcon: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly prefixIcon: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly containerRole: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                    readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                    readonly tabindex: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
                    readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly inputStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
                }>> & {
                    onChange?: ((value: string) => any) | undefined;
                    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
                    onInput?: ((value: string) => any) | undefined;
                    onFocus?: ((evt: FocusEvent) => any) | undefined;
                    onBlur?: ((evt: FocusEvent) => any) | undefined;
                    onClear?: (() => any) | undefined;
                    onMouseleave?: ((evt: MouseEvent) => any) | undefined;
                    onMouseenter?: ((evt: MouseEvent) => any) | undefined;
                    onKeydown?: ((evt: Event | KeyboardEvent) => any) | undefined;
                    onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
                    onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
                    onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
                }>>;
                emit: ((event: "update:modelValue", value: string) => void) & ((event: "change", value: string) => void) & ((event: "input", value: string) => void) & ((event: "focus", evt: FocusEvent) => void) & ((event: "blur", evt: FocusEvent) => void) & ((event: "clear") => void) & ((event: "mouseleave", evt: MouseEvent) => void) & ((event: "mouseenter", evt: MouseEvent) => void) & ((event: "keydown", evt: Event | KeyboardEvent) => void) & ((event: "compositionstart", evt: CompositionEvent) => void) & ((event: "compositionupdate", evt: CompositionEvent) => void) & ((event: "compositionend", evt: CompositionEvent) => void);
                rawAttrs: {
                    [x: string]: unknown;
                };
                slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                containerAttrs: import("vue").ComputedRef<Record<string, unknown>>;
                attrs: import("vue").ComputedRef<Record<string, unknown>>;
                form: import("element-plus").FormContext | undefined;
                formItem: import("element-plus").FormItemContext | undefined;
                inputId: import("vue").Ref<string | undefined>;
                inputSize: import("vue").ComputedRef<"" | "small" | "default" | "large">;
                inputDisabled: import("vue").ComputedRef<boolean>;
                nsInput: {
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
                nsTextarea: {
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
                input: import("vue").ShallowRef<HTMLInputElement | undefined>;
                textarea: import("vue").ShallowRef<HTMLTextAreaElement | undefined>;
                focused: import("vue").Ref<boolean>;
                hovering: import("vue").Ref<boolean>;
                isComposing: import("vue").Ref<boolean>;
                passwordVisible: import("vue").Ref<boolean>;
                countStyle: import("vue").Ref<import("vue").StyleValue | undefined>;
                textareaCalcStyle: import("vue").ShallowRef<import("vue").StyleValue>;
                _ref: import("vue").ComputedRef<HTMLInputElement | HTMLTextAreaElement | undefined>;
                needStatusIcon: import("vue").ComputedRef<boolean>;
                validateState: import("vue").ComputedRef<"" | "error" | "success" | "validating">;
                validateIcon: import("vue").ComputedRef<"" | import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
                passwordIcon: import("vue").ComputedRef<import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
                containerStyle: import("vue").ComputedRef<import("vue").StyleValue>;
                textareaStyle: import("vue").ComputedRef<import("vue").StyleValue>;
                nativeInputValue: import("vue").ComputedRef<string>;
                showClear: import("vue").ComputedRef<boolean>;
                showPwdVisible: import("vue").ComputedRef<boolean>;
                isWordLimitVisible: import("vue").ComputedRef<boolean>;
                textLength: import("vue").ComputedRef<number>;
                inputExceed: import("vue").ComputedRef<boolean>;
                suffixVisible: import("vue").ComputedRef<boolean>;
                recordCursor: () => void;
                setCursor: () => void;
                resizeTextarea: () => void;
                setNativeInputValue: () => void;
                handleInput: (event: Event) => Promise<void>;
                handleChange: (event: Event) => void;
                handleCompositionStart: (event: CompositionEvent) => void;
                handleCompositionUpdate: (event: CompositionEvent) => void;
                handleCompositionEnd: (event: CompositionEvent) => void;
                handlePasswordVisible: () => void;
                focus: () => Promise<void>;
                blur: () => void | undefined;
                handleFocus: (event: FocusEvent) => void;
                handleBlur: (event: FocusEvent) => void;
                handleMouseLeave: (evt: MouseEvent) => void;
                handleMouseEnter: (evt: MouseEvent) => void;
                handleKeydown: (evt: KeyboardEvent) => void;
                select: () => void;
                clear: () => void;
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
                CircleClose: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                NOOP: () => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "update:modelValue": (value: string) => boolean;
                input: (value: string) => boolean;
                change: (value: string) => boolean;
                focus: (evt: FocusEvent) => boolean;
                blur: (evt: FocusEvent) => boolean;
                clear: () => boolean;
                mouseleave: (evt: MouseEvent) => boolean;
                mouseenter: (evt: MouseEvent) => boolean;
                keydown: (evt: Event | KeyboardEvent) => boolean;
                compositionstart: (evt: CompositionEvent) => boolean;
                compositionupdate: (evt: CompositionEvent) => boolean;
                compositionend: (evt: CompositionEvent) => boolean;
            }, string, {
                readonly type: string;
                readonly disabled: boolean;
                readonly label: string;
                readonly modelValue: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown>;
                readonly validateEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly id: string;
                readonly autosize: import("element-plus").InputAutoSize;
                readonly autocomplete: string;
                readonly readonly: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly clearable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly showPassword: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly showWordLimit: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly containerRole: string;
                readonly tabindex: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly inputStyle: import("vue").StyleValue;
            }> & {
                beforeCreate?: (() => void) | (() => void)[] | undefined;
                created?: (() => void) | (() => void)[] | undefined;
                beforeMount?: (() => void) | (() => void)[] | undefined;
                mounted?: (() => void) | (() => void)[] | undefined;
                beforeUpdate?: (() => void) | (() => void)[] | undefined;
                updated?: (() => void) | (() => void)[] | undefined;
                activated?: (() => void) | (() => void)[] | undefined;
                deactivated?: (() => void) | (() => void)[] | undefined;
                beforeDestroy?: (() => void) | (() => void)[] | undefined;
                beforeUnmount?: (() => void) | (() => void)[] | undefined;
                destroyed?: (() => void) | (() => void)[] | undefined;
                unmounted?: (() => void) | (() => void)[] | undefined;
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{
            readonly id: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
            readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
            readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
            readonly resize: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "horizontal" | "vertical" | "none" | "both", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly autosize: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean | {
                minRows?: number | undefined;
                maxRows?: number | undefined;
            }) | (() => import("element-plus").InputAutoSize) | ((new (...args: any[]) => boolean | {
                minRows?: number | undefined;
                maxRows?: number | undefined;
            }) | (() => import("element-plus").InputAutoSize))[], unknown, unknown, false, boolean>;
            readonly autocomplete: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
            readonly formatter: {
                readonly type: import("vue").PropType<Function>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly parser: {
                readonly type: import("vue").PropType<Function>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly placeholder: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly form: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly readonly: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly clearable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly showPassword: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly showWordLimit: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly suffixIcon: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly prefixIcon: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly containerRole: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly tabindex: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
            readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly inputStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
        }>> & {
            onChange?: ((value: string) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            onInput?: ((value: string) => any) | undefined;
            onFocus?: ((evt: FocusEvent) => any) | undefined;
            onBlur?: ((evt: FocusEvent) => any) | undefined;
            onClear?: (() => any) | undefined;
            onMouseleave?: ((evt: MouseEvent) => any) | undefined;
            onMouseenter?: ((evt: MouseEvent) => any) | undefined;
            onKeydown?: ((evt: Event | KeyboardEvent) => any) | undefined;
            onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
            onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
            onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<{
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly id: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly disabled: BooleanConstructor;
                readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
                readonly resize: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "horizontal" | "vertical" | "none" | "both", unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly autosize: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => boolean | {
                    minRows?: number | undefined;
                    maxRows?: number | undefined;
                }) | (() => import("element-plus").InputAutoSize) | ((new (...args: any[]) => boolean | {
                    minRows?: number | undefined;
                    maxRows?: number | undefined;
                }) | (() => import("element-plus").InputAutoSize))[], unknown, unknown, false, boolean>;
                readonly autocomplete: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
                readonly formatter: {
                    readonly type: import("vue").PropType<Function>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly parser: {
                    readonly type: import("vue").PropType<Function>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly placeholder: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly form: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly readonly: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly clearable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly showPassword: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly showWordLimit: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly suffixIcon: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly prefixIcon: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly containerRole: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly label: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly tabindex: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
                readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly inputStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
            }>> & {
                onChange?: ((value: string) => any) | undefined;
                "onUpdate:modelValue"?: ((value: string) => any) | undefined;
                onInput?: ((value: string) => any) | undefined;
                onFocus?: ((evt: FocusEvent) => any) | undefined;
                onBlur?: ((evt: FocusEvent) => any) | undefined;
                onClear?: (() => any) | undefined;
                onMouseleave?: ((evt: MouseEvent) => any) | undefined;
                onMouseenter?: ((evt: MouseEvent) => any) | undefined;
                onKeydown?: ((evt: Event | KeyboardEvent) => any) | undefined;
                onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
                onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
                onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
            }>>;
            emit: ((event: "update:modelValue", value: string) => void) & ((event: "change", value: string) => void) & ((event: "input", value: string) => void) & ((event: "focus", evt: FocusEvent) => void) & ((event: "blur", evt: FocusEvent) => void) & ((event: "clear") => void) & ((event: "mouseleave", evt: MouseEvent) => void) & ((event: "mouseenter", evt: MouseEvent) => void) & ((event: "keydown", evt: Event | KeyboardEvent) => void) & ((event: "compositionstart", evt: CompositionEvent) => void) & ((event: "compositionupdate", evt: CompositionEvent) => void) & ((event: "compositionend", evt: CompositionEvent) => void);
            rawAttrs: {
                [x: string]: unknown;
            };
            slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            containerAttrs: import("vue").ComputedRef<Record<string, unknown>>;
            attrs: import("vue").ComputedRef<Record<string, unknown>>;
            form: import("element-plus").FormContext | undefined;
            formItem: import("element-plus").FormItemContext | undefined;
            inputId: import("vue").Ref<string | undefined>;
            inputSize: import("vue").ComputedRef<"" | "small" | "default" | "large">;
            inputDisabled: import("vue").ComputedRef<boolean>;
            nsInput: {
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
            nsTextarea: {
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
            input: import("vue").ShallowRef<HTMLInputElement | undefined>;
            textarea: import("vue").ShallowRef<HTMLTextAreaElement | undefined>;
            focused: import("vue").Ref<boolean>;
            hovering: import("vue").Ref<boolean>;
            isComposing: import("vue").Ref<boolean>;
            passwordVisible: import("vue").Ref<boolean>;
            countStyle: import("vue").Ref<import("vue").StyleValue | undefined>;
            textareaCalcStyle: import("vue").ShallowRef<import("vue").StyleValue>;
            _ref: import("vue").ComputedRef<HTMLInputElement | HTMLTextAreaElement | undefined>;
            needStatusIcon: import("vue").ComputedRef<boolean>;
            validateState: import("vue").ComputedRef<"" | "error" | "success" | "validating">;
            validateIcon: import("vue").ComputedRef<"" | import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
            passwordIcon: import("vue").ComputedRef<import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
            containerStyle: import("vue").ComputedRef<import("vue").StyleValue>;
            textareaStyle: import("vue").ComputedRef<import("vue").StyleValue>;
            nativeInputValue: import("vue").ComputedRef<string>;
            showClear: import("vue").ComputedRef<boolean>;
            showPwdVisible: import("vue").ComputedRef<boolean>;
            isWordLimitVisible: import("vue").ComputedRef<boolean>;
            textLength: import("vue").ComputedRef<number>;
            inputExceed: import("vue").ComputedRef<boolean>;
            suffixVisible: import("vue").ComputedRef<boolean>;
            recordCursor: () => void;
            setCursor: () => void;
            resizeTextarea: () => void;
            setNativeInputValue: () => void;
            handleInput: (event: Event) => Promise<void>;
            handleChange: (event: Event) => void;
            handleCompositionStart: (event: CompositionEvent) => void;
            handleCompositionUpdate: (event: CompositionEvent) => void;
            handleCompositionEnd: (event: CompositionEvent) => void;
            handlePasswordVisible: () => void;
            focus: () => Promise<void>;
            blur: () => void | undefined;
            handleFocus: (event: FocusEvent) => void;
            handleBlur: (event: FocusEvent) => void;
            handleMouseLeave: (evt: MouseEvent) => void;
            handleMouseEnter: (evt: MouseEvent) => void;
            handleKeydown: (evt: KeyboardEvent) => void;
            select: () => void;
            clear: () => void;
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
            CircleClose: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            NOOP: () => void;
        }> & import("vue").ComponentCustomProperties) | null>;
        tagWrapper: import("vue").Ref<null>;
        panel: import("vue").Ref<({
            $: ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                props: import("element-plus").CascaderProps;
                border: boolean;
                options: import("element-plus").CascaderOption[];
            }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                border: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                renderLabel: import("vue").PropType<import("element-plus/es/components/cascader-panel/src/node").RenderLabel>;
                modelValue: import("vue").PropType<import("element-plus/es/components/cascader-panel/src/node").CascaderValue>;
                options: {
                    type: import("vue").PropType<import("element-plus").CascaderOption[]>;
                    default: () => import("element-plus").CascaderOption[];
                };
                props: {
                    type: import("vue").PropType<import("element-plus").CascaderProps>;
                    default: () => import("element-plus").CascaderProps;
                };
            }>> & {
                onChange?: ((...args: any[]) => any) | undefined;
                onClose?: ((...args: any[]) => any) | undefined;
                "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
                "onExpand-change"?: ((...args: any[]) => any) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "props" | "border" | "options">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $emit: (event: "update:modelValue" | "change" | "close" | "expand-change", ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                border: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                renderLabel: import("vue").PropType<import("element-plus/es/components/cascader-panel/src/node").RenderLabel>;
                modelValue: import("vue").PropType<import("element-plus/es/components/cascader-panel/src/node").CascaderValue>;
                options: {
                    type: import("vue").PropType<import("element-plus").CascaderOption[]>;
                    default: () => import("element-plus").CascaderOption[];
                };
                props: {
                    type: import("vue").PropType<import("element-plus").CascaderProps>;
                    default: () => import("element-plus").CascaderProps;
                };
            }>> & {
                onChange?: ((...args: any[]) => any) | undefined;
                onClose?: ((...args: any[]) => any) | undefined;
                "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
                "onExpand-change"?: ((...args: any[]) => any) | undefined;
            }, {
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
                menuList: import("vue").Ref<any[]>;
                menus: import("vue").Ref<{
                    readonly uid: number;
                    readonly level: number;
                    readonly value: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue;
                    readonly label: string;
                    readonly pathNodes: any[];
                    readonly pathValues: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue[];
                    readonly pathLabels: string[];
                    childrenData: {
                        [x: string]: unknown;
                        label?: string | undefined;
                        value?: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue | undefined;
                        children?: any[] | undefined;
                        disabled?: boolean | undefined;
                        leaf?: boolean | undefined;
                    }[] | undefined;
                    children: any[];
                    text: string;
                    loaded: boolean;
                    checked: boolean;
                    indeterminate: boolean;
                    loading: boolean;
                    readonly data: {
                        [x: string]: unknown;
                        label?: string | undefined;
                        value?: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue | undefined;
                        children?: any[] | undefined;
                        disabled?: boolean | undefined;
                        leaf?: boolean | undefined;
                    } | null;
                    readonly config: {
                        expandTrigger: import("element-plus").ExpandTrigger;
                        multiple: boolean;
                        checkStrictly: boolean;
                        emitPath: boolean;
                        lazy: boolean;
                        lazyLoad: import("element-plus/es/components/cascader-panel/src/node").LazyLoad;
                        value: string;
                        label: string;
                        children: string;
                        disabled: string | import("element-plus/es/components/cascader-panel/src/node").isDisabled;
                        leaf: string | import("element-plus/es/components/cascader-panel/src/node").isLeaf;
                        hoverThreshold: number;
                    };
                    readonly parent?: any;
                    readonly root: boolean;
                    readonly isDisabled: boolean;
                    readonly isLeaf: boolean;
                    readonly valueByOption: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue | import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue[];
                    appendChild: (childData: import("element-plus").CascaderOption) => import("element-plus/es/components/cascader-panel/src/node").default;
                    calcText: (allLevels: boolean, separator: string) => string;
                    broadcast: (event: string, ...args: unknown[]) => void;
                    emit: (event: string, ...args: unknown[]) => void;
                    onParentCheck: (checked: boolean) => void;
                    onChildCheck: () => void;
                    setCheckState: (checked: boolean) => void;
                    doCheck: (checked: boolean) => void;
                }[][]>;
                checkedNodes: import("vue").Ref<{
                    readonly uid: number;
                    readonly level: number;
                    readonly value: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue;
                    readonly label: string;
                    readonly pathNodes: any[];
                    readonly pathValues: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue[];
                    readonly pathLabels: string[];
                    childrenData: {
                        [x: string]: unknown;
                        label?: string | undefined;
                        value?: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue | undefined;
                        children?: any[] | undefined;
                        disabled?: boolean | undefined;
                        leaf?: boolean | undefined;
                    }[] | undefined;
                    children: any[];
                    text: string;
                    loaded: boolean;
                    checked: boolean;
                    indeterminate: boolean;
                    loading: boolean;
                    readonly data: {
                        [x: string]: unknown;
                        label?: string | undefined;
                        value?: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue | undefined;
                        children?: any[] | undefined;
                        disabled?: boolean | undefined;
                        leaf?: boolean | undefined;
                    } | null;
                    readonly config: {
                        expandTrigger: import("element-plus").ExpandTrigger;
                        multiple: boolean;
                        checkStrictly: boolean;
                        emitPath: boolean;
                        lazy: boolean;
                        lazyLoad: import("element-plus/es/components/cascader-panel/src/node").LazyLoad;
                        value: string;
                        label: string;
                        children: string;
                        disabled: string | import("element-plus/es/components/cascader-panel/src/node").isDisabled;
                        leaf: string | import("element-plus/es/components/cascader-panel/src/node").isLeaf;
                        hoverThreshold: number;
                    };
                    readonly parent?: any;
                    readonly root: boolean;
                    readonly isDisabled: boolean;
                    readonly isLeaf: boolean;
                    readonly valueByOption: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue | import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue[];
                    appendChild: (childData: import("element-plus").CascaderOption) => import("element-plus/es/components/cascader-panel/src/node").default;
                    calcText: (allLevels: boolean, separator: string) => string;
                    broadcast: (event: string, ...args: unknown[]) => void;
                    emit: (event: string, ...args: unknown[]) => void;
                    onParentCheck: (checked: boolean) => void;
                    onChildCheck: () => void;
                    setCheckState: (checked: boolean) => void;
                    doCheck: (checked: boolean) => void;
                }[]>;
                handleKeyDown: (e: KeyboardEvent) => void;
                handleCheckChange: (node: import("element-plus/es/components/cascader-panel/src/node").default, checked: boolean, emitClose?: boolean | undefined) => void;
                getFlattedNodes: (leafOnly: boolean) => import("element-plus/es/components/cascader-panel/src/node").default[] | undefined;
                getCheckedNodes: (leafOnly: boolean) => import("element-plus/es/components/cascader-panel/src/node").default[] | undefined;
                clearCheckedNodes: () => void;
                calculateCheckedValue: () => void;
                scrollToExpandingNode: () => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "close" | "expand-change")[], string, {
                props: import("element-plus").CascaderProps;
                border: boolean;
                options: import("element-plus").CascaderOption[];
            }> & {
                beforeCreate?: (() => void) | (() => void)[] | undefined;
                created?: (() => void) | (() => void)[] | undefined;
                beforeMount?: (() => void) | (() => void)[] | undefined;
                mounted?: (() => void) | (() => void)[] | undefined;
                beforeUpdate?: (() => void) | (() => void)[] | undefined;
                updated?: (() => void) | (() => void)[] | undefined;
                activated?: (() => void) | (() => void)[] | undefined;
                deactivated?: (() => void) | (() => void)[] | undefined;
                beforeDestroy?: (() => void) | (() => void)[] | undefined;
                beforeUnmount?: (() => void) | (() => void)[] | undefined;
                destroyed?: (() => void) | (() => void)[] | undefined;
                unmounted?: (() => void) | (() => void)[] | undefined;
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{
            border: {
                type: BooleanConstructor;
                default: boolean;
            };
            renderLabel: import("vue").PropType<import("element-plus/es/components/cascader-panel/src/node").RenderLabel>;
            modelValue: import("vue").PropType<import("element-plus/es/components/cascader-panel/src/node").CascaderValue>;
            options: {
                type: import("vue").PropType<import("element-plus").CascaderOption[]>;
                default: () => import("element-plus").CascaderOption[];
            };
            props: {
                type: import("vue").PropType<import("element-plus").CascaderProps>;
                default: () => import("element-plus").CascaderProps;
            };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            onClose?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            "onExpand-change"?: ((...args: any[]) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<{
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
            menuList: import("vue").Ref<any[]>;
            menus: import("vue").Ref<{
                readonly uid: number;
                readonly level: number;
                readonly value: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue;
                readonly label: string;
                readonly pathNodes: any[];
                readonly pathValues: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue[];
                readonly pathLabels: string[];
                childrenData: {
                    [x: string]: unknown;
                    label?: string | undefined;
                    value?: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue | undefined;
                    children?: any[] | undefined;
                    disabled?: boolean | undefined;
                    leaf?: boolean | undefined;
                }[] | undefined;
                children: any[];
                text: string;
                loaded: boolean;
                checked: boolean;
                indeterminate: boolean;
                loading: boolean;
                readonly data: {
                    [x: string]: unknown;
                    label?: string | undefined;
                    value?: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue | undefined;
                    children?: any[] | undefined;
                    disabled?: boolean | undefined;
                    leaf?: boolean | undefined;
                } | null;
                readonly config: {
                    expandTrigger: import("element-plus").ExpandTrigger;
                    multiple: boolean;
                    checkStrictly: boolean;
                    emitPath: boolean;
                    lazy: boolean;
                    lazyLoad: import("element-plus/es/components/cascader-panel/src/node").LazyLoad;
                    value: string;
                    label: string;
                    children: string;
                    disabled: string | import("element-plus/es/components/cascader-panel/src/node").isDisabled;
                    leaf: string | import("element-plus/es/components/cascader-panel/src/node").isLeaf;
                    hoverThreshold: number;
                };
                readonly parent?: any;
                readonly root: boolean;
                readonly isDisabled: boolean;
                readonly isLeaf: boolean;
                readonly valueByOption: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue | import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue[];
                appendChild: (childData: import("element-plus").CascaderOption) => import("element-plus/es/components/cascader-panel/src/node").default;
                calcText: (allLevels: boolean, separator: string) => string;
                broadcast: (event: string, ...args: unknown[]) => void;
                emit: (event: string, ...args: unknown[]) => void;
                onParentCheck: (checked: boolean) => void;
                onChildCheck: () => void;
                setCheckState: (checked: boolean) => void;
                doCheck: (checked: boolean) => void;
            }[][]>;
            checkedNodes: import("vue").Ref<{
                readonly uid: number;
                readonly level: number;
                readonly value: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue;
                readonly label: string;
                readonly pathNodes: any[];
                readonly pathValues: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue[];
                readonly pathLabels: string[];
                childrenData: {
                    [x: string]: unknown;
                    label?: string | undefined;
                    value?: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue | undefined;
                    children?: any[] | undefined;
                    disabled?: boolean | undefined;
                    leaf?: boolean | undefined;
                }[] | undefined;
                children: any[];
                text: string;
                loaded: boolean;
                checked: boolean;
                indeterminate: boolean;
                loading: boolean;
                readonly data: {
                    [x: string]: unknown;
                    label?: string | undefined;
                    value?: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue | undefined;
                    children?: any[] | undefined;
                    disabled?: boolean | undefined;
                    leaf?: boolean | undefined;
                } | null;
                readonly config: {
                    expandTrigger: import("element-plus").ExpandTrigger;
                    multiple: boolean;
                    checkStrictly: boolean;
                    emitPath: boolean;
                    lazy: boolean;
                    lazyLoad: import("element-plus/es/components/cascader-panel/src/node").LazyLoad;
                    value: string;
                    label: string;
                    children: string;
                    disabled: string | import("element-plus/es/components/cascader-panel/src/node").isDisabled;
                    leaf: string | import("element-plus/es/components/cascader-panel/src/node").isLeaf;
                    hoverThreshold: number;
                };
                readonly parent?: any;
                readonly root: boolean;
                readonly isDisabled: boolean;
                readonly isLeaf: boolean;
                readonly valueByOption: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue | import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue[];
                appendChild: (childData: import("element-plus").CascaderOption) => import("element-plus/es/components/cascader-panel/src/node").default;
                calcText: (allLevels: boolean, separator: string) => string;
                broadcast: (event: string, ...args: unknown[]) => void;
                emit: (event: string, ...args: unknown[]) => void;
                onParentCheck: (checked: boolean) => void;
                onChildCheck: () => void;
                setCheckState: (checked: boolean) => void;
                doCheck: (checked: boolean) => void;
            }[]>;
            handleKeyDown: (e: KeyboardEvent) => void;
            handleCheckChange: (node: import("element-plus/es/components/cascader-panel/src/node").default, checked: boolean, emitClose?: boolean | undefined) => void;
            getFlattedNodes: (leafOnly: boolean) => import("element-plus/es/components/cascader-panel/src/node").default[] | undefined;
            getCheckedNodes: (leafOnly: boolean) => import("element-plus/es/components/cascader-panel/src/node").default[] | undefined;
            clearCheckedNodes: () => void;
            calculateCheckedValue: () => void;
            scrollToExpandingNode: () => void;
        }> & import("vue").ComponentCustomProperties) | null>;
        suggestionPanel: import("vue").Ref<({
            $: ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                readonly tag: string;
                readonly height: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly always: boolean;
                readonly maxHeight: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly wrapStyle: import("vue").StyleValue;
                readonly wrapClass: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewClass: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewStyle: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
                readonly minSize: number;
                readonly native: boolean;
                readonly noresize: boolean;
            }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly native: BooleanConstructor;
                readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
                readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
                readonly noresize: BooleanConstructor;
                readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                readonly always: BooleanConstructor;
                readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
            }>> & {
                onScroll?: ((args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => any) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "tag" | "height" | "maxHeight" | "native" | "wrapStyle" | "wrapClass" | "viewClass" | "viewStyle" | "noresize" | "always" | "minSize">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $emit: (event: "scroll", args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly native: BooleanConstructor;
                readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
                readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
                readonly noresize: BooleanConstructor;
                readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                readonly always: BooleanConstructor;
                readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
            }>> & {
                onScroll?: ((args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => any) | undefined;
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                    readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                    readonly native: BooleanConstructor;
                    readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
                    readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                    readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                    readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
                    readonly noresize: BooleanConstructor;
                    readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                    readonly always: BooleanConstructor;
                    readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
                }>> & {
                    onScroll?: ((args_0: {
                        scrollTop: number;
                        scrollLeft: number;
                    }) => any) | undefined;
                }>>;
                emit: (event: "scroll", args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => void;
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
                stopResizeObserver: undefined;
                stopResizeListener: undefined;
                scrollbar$: import("vue").Ref<HTMLDivElement | undefined>;
                wrap$: import("vue").Ref<HTMLDivElement | undefined>;
                resize$: import("vue").Ref<HTMLElement | undefined>;
                sizeWidth: import("vue").Ref<string>;
                sizeHeight: import("vue").Ref<string>;
                barRef: import("vue").Ref<({
                    $: ComponentInternalInstance;
                    $data: {};
                    $props: Partial<{
                        readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                        readonly ratioX: number;
                        readonly ratioY: number;
                    }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly width: StringConstructor;
                        readonly height: StringConstructor;
                        readonly ratioX: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                        readonly ratioY: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                    }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "always" | "ratioX" | "ratioY">;
                    $attrs: {
                        [x: string]: unknown;
                    };
                    $refs: {
                        [x: string]: unknown;
                    };
                    $slots: Readonly<{
                        [name: string]: import("vue").Slot | undefined;
                    }>;
                    $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                    $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                    $emit: (event: string, ...args: any[]) => void;
                    $el: any;
                    $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly width: StringConstructor;
                        readonly height: StringConstructor;
                        readonly ratioX: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                        readonly ratioY: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                    }>>, {
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly width: StringConstructor;
                            readonly height: StringConstructor;
                            readonly ratioX: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                            readonly ratioY: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                        }>> & {
                            [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        moveX: import("vue").Ref<number>;
                        moveY: import("vue").Ref<number>;
                        handleScroll: (wrap: HTMLDivElement) => void;
                        Thumb: import("vue").DefineComponent<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }, {
                            COMPONENT_NAME: string;
                            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                                readonly vertical: BooleanConstructor;
                                readonly size: StringConstructor;
                                readonly move: NumberConstructor;
                                readonly ratio: {
                                    readonly type: import("vue").PropType<number>;
                                    readonly required: true;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly always: BooleanConstructor;
                            }>> & {
                                [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                            }>>;
                            scrollbar: import("element-plus").ScrollbarContext;
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
                            instance: import("vue").Ref<HTMLDivElement | undefined>;
                            thumb: import("vue").Ref<HTMLDivElement | undefined>;
                            thumbState: import("vue").Ref<{
                                X?: number | undefined;
                                Y?: number | undefined;
                            }>;
                            visible: import("vue").Ref<boolean>;
                            cursorDown: boolean;
                            cursorLeave: boolean;
                            originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                            bar: import("vue").ComputedRef<{
                                readonly offset: "offsetHeight";
                                readonly scroll: "scrollTop";
                                readonly scrollSize: "scrollHeight";
                                readonly size: "height";
                                readonly key: "vertical";
                                readonly axis: "Y";
                                readonly client: "clientY";
                                readonly direction: "top";
                            } | {
                                readonly offset: "offsetWidth";
                                readonly scroll: "scrollLeft";
                                readonly scrollSize: "scrollWidth";
                                readonly size: "width";
                                readonly key: "horizontal";
                                readonly axis: "X";
                                readonly client: "clientX";
                                readonly direction: "left";
                            }>;
                            thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                            offsetRatio: import("vue").ComputedRef<number>;
                            clickThumbHandler: (e: MouseEvent) => void;
                            clickTrackHandler: (e: MouseEvent) => void;
                            startDrag: (e: MouseEvent) => void;
                            mouseMoveDocumentHandler: (e: MouseEvent) => void;
                            mouseUpDocumentHandler: () => void;
                            mouseMoveScrollbarHandler: () => void;
                            mouseLeaveScrollbarHandler: () => void;
                            restoreOnselectstart: () => void;
                        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }>>, {
                            readonly vertical: boolean;
                            readonly always: boolean;
                        }>;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                        readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                        readonly ratioX: number;
                        readonly ratioY: number;
                    }> & {
                        beforeCreate?: (() => void) | (() => void)[] | undefined;
                        created?: (() => void) | (() => void)[] | undefined;
                        beforeMount?: (() => void) | (() => void)[] | undefined;
                        mounted?: (() => void) | (() => void)[] | undefined;
                        beforeUpdate?: (() => void) | (() => void)[] | undefined;
                        updated?: (() => void) | (() => void)[] | undefined;
                        activated?: (() => void) | (() => void)[] | undefined;
                        deactivated?: (() => void) | (() => void)[] | undefined;
                        beforeDestroy?: (() => void) | (() => void)[] | undefined;
                        beforeUnmount?: (() => void) | (() => void)[] | undefined;
                        destroyed?: (() => void) | (() => void)[] | undefined;
                        unmounted?: (() => void) | (() => void)[] | undefined;
                        renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                    };
                    $forceUpdate: () => void;
                    $nextTick: typeof import("vue").nextTick;
                    $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                } & Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly width: StringConstructor;
                    readonly height: StringConstructor;
                    readonly ratioX: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                    readonly ratioY: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                }>> & import("vue").ShallowUnwrapRef<{
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly width: StringConstructor;
                        readonly height: StringConstructor;
                        readonly ratioX: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                        readonly ratioY: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                    }>> & {
                        [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    moveX: import("vue").Ref<number>;
                    moveY: import("vue").Ref<number>;
                    handleScroll: (wrap: HTMLDivElement) => void;
                    Thumb: import("vue").DefineComponent<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }, {
                        COMPONENT_NAME: string;
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }>> & {
                            [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        scrollbar: import("element-plus").ScrollbarContext;
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
                        instance: import("vue").Ref<HTMLDivElement | undefined>;
                        thumb: import("vue").Ref<HTMLDivElement | undefined>;
                        thumbState: import("vue").Ref<{
                            X?: number | undefined;
                            Y?: number | undefined;
                        }>;
                        visible: import("vue").Ref<boolean>;
                        cursorDown: boolean;
                        cursorLeave: boolean;
                        originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                        bar: import("vue").ComputedRef<{
                            readonly offset: "offsetHeight";
                            readonly scroll: "scrollTop";
                            readonly scrollSize: "scrollHeight";
                            readonly size: "height";
                            readonly key: "vertical";
                            readonly axis: "Y";
                            readonly client: "clientY";
                            readonly direction: "top";
                        } | {
                            readonly offset: "offsetWidth";
                            readonly scroll: "scrollLeft";
                            readonly scrollSize: "scrollWidth";
                            readonly size: "width";
                            readonly key: "horizontal";
                            readonly axis: "X";
                            readonly client: "clientX";
                            readonly direction: "left";
                        }>;
                        thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                        offsetRatio: import("vue").ComputedRef<number>;
                        clickThumbHandler: (e: MouseEvent) => void;
                        clickTrackHandler: (e: MouseEvent) => void;
                        startDrag: (e: MouseEvent) => void;
                        mouseMoveDocumentHandler: (e: MouseEvent) => void;
                        mouseUpDocumentHandler: () => void;
                        mouseMoveScrollbarHandler: () => void;
                        mouseLeaveScrollbarHandler: () => void;
                        restoreOnselectstart: () => void;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>>, {
                        readonly vertical: boolean;
                        readonly always: boolean;
                    }>;
                }> & import("vue").ComponentCustomProperties) | undefined>;
                ratioY: import("vue").Ref<number>;
                ratioX: import("vue").Ref<number>;
                SCOPE: string;
                style: import("vue").ComputedRef<import("vue").StyleValue>;
                handleScroll: () => void;
                scrollTo: (arg1: unknown, arg2?: number | undefined) => void;
                setScrollTop: (value: number) => void;
                setScrollLeft: (value: number) => void;
                update: () => void;
                Bar: import("vue").DefineComponent<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly width: StringConstructor;
                    readonly height: StringConstructor;
                    readonly ratioX: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                    readonly ratioY: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly width: StringConstructor;
                        readonly height: StringConstructor;
                        readonly ratioX: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                        readonly ratioY: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                    }>> & {
                        [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    moveX: import("vue").Ref<number>;
                    moveY: import("vue").Ref<number>;
                    handleScroll: (wrap: HTMLDivElement) => void;
                    Thumb: import("vue").DefineComponent<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }, {
                        COMPONENT_NAME: string;
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }>> & {
                            [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        scrollbar: import("element-plus").ScrollbarContext;
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
                        instance: import("vue").Ref<HTMLDivElement | undefined>;
                        thumb: import("vue").Ref<HTMLDivElement | undefined>;
                        thumbState: import("vue").Ref<{
                            X?: number | undefined;
                            Y?: number | undefined;
                        }>;
                        visible: import("vue").Ref<boolean>;
                        cursorDown: boolean;
                        cursorLeave: boolean;
                        originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                        bar: import("vue").ComputedRef<{
                            readonly offset: "offsetHeight";
                            readonly scroll: "scrollTop";
                            readonly scrollSize: "scrollHeight";
                            readonly size: "height";
                            readonly key: "vertical";
                            readonly axis: "Y";
                            readonly client: "clientY";
                            readonly direction: "top";
                        } | {
                            readonly offset: "offsetWidth";
                            readonly scroll: "scrollLeft";
                            readonly scrollSize: "scrollWidth";
                            readonly size: "width";
                            readonly key: "horizontal";
                            readonly axis: "X";
                            readonly client: "clientX";
                            readonly direction: "left";
                        }>;
                        thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                        offsetRatio: import("vue").ComputedRef<number>;
                        clickThumbHandler: (e: MouseEvent) => void;
                        clickTrackHandler: (e: MouseEvent) => void;
                        startDrag: (e: MouseEvent) => void;
                        mouseMoveDocumentHandler: (e: MouseEvent) => void;
                        mouseUpDocumentHandler: () => void;
                        mouseMoveScrollbarHandler: () => void;
                        mouseLeaveScrollbarHandler: () => void;
                        restoreOnselectstart: () => void;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>>, {
                        readonly vertical: boolean;
                        readonly always: boolean;
                    }>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly width: StringConstructor;
                    readonly height: StringConstructor;
                    readonly ratioX: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                    readonly ratioY: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                }>>, {
                    readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly ratioX: number;
                    readonly ratioY: number;
                }>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                scroll: ({ scrollTop, scrollLeft, }: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => boolean;
            }, string, {
                readonly tag: string;
                readonly height: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly always: boolean;
                readonly maxHeight: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly wrapStyle: import("vue").StyleValue;
                readonly wrapClass: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewClass: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewStyle: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
                readonly minSize: number;
                readonly native: boolean;
                readonly noresize: boolean;
            }> & {
                beforeCreate?: (() => void) | (() => void)[] | undefined;
                created?: (() => void) | (() => void)[] | undefined;
                beforeMount?: (() => void) | (() => void)[] | undefined;
                mounted?: (() => void) | (() => void)[] | undefined;
                beforeUpdate?: (() => void) | (() => void)[] | undefined;
                updated?: (() => void) | (() => void)[] | undefined;
                activated?: (() => void) | (() => void)[] | undefined;
                deactivated?: (() => void) | (() => void)[] | undefined;
                beforeDestroy?: (() => void) | (() => void)[] | undefined;
                beforeUnmount?: (() => void) | (() => void)[] | undefined;
                destroyed?: (() => void) | (() => void)[] | undefined;
                unmounted?: (() => void) | (() => void)[] | undefined;
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{
            readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly native: BooleanConstructor;
            readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
            readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
            readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
            readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
            readonly noresize: BooleanConstructor;
            readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
            readonly always: BooleanConstructor;
            readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
        }>> & {
            onScroll?: ((args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<{
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly native: BooleanConstructor;
                readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
                readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
                readonly noresize: BooleanConstructor;
                readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                readonly always: BooleanConstructor;
                readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
            }>> & {
                onScroll?: ((args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => any) | undefined;
            }>>;
            emit: (event: "scroll", args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => void;
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
            stopResizeObserver: undefined;
            stopResizeListener: undefined;
            scrollbar$: import("vue").Ref<HTMLDivElement | undefined>;
            wrap$: import("vue").Ref<HTMLDivElement | undefined>;
            resize$: import("vue").Ref<HTMLElement | undefined>;
            sizeWidth: import("vue").Ref<string>;
            sizeHeight: import("vue").Ref<string>;
            barRef: import("vue").Ref<({
                $: ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly ratioX: number;
                    readonly ratioY: number;
                }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly width: StringConstructor;
                    readonly height: StringConstructor;
                    readonly ratioX: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                    readonly ratioY: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "always" | "ratioX" | "ratioY">;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $emit: (event: string, ...args: any[]) => void;
                $el: any;
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly width: StringConstructor;
                    readonly height: StringConstructor;
                    readonly ratioX: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                    readonly ratioY: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                }>>, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly width: StringConstructor;
                        readonly height: StringConstructor;
                        readonly ratioX: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                        readonly ratioY: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                    }>> & {
                        [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    moveX: import("vue").Ref<number>;
                    moveY: import("vue").Ref<number>;
                    handleScroll: (wrap: HTMLDivElement) => void;
                    Thumb: import("vue").DefineComponent<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }, {
                        COMPONENT_NAME: string;
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }>> & {
                            [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        scrollbar: import("element-plus").ScrollbarContext;
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
                        instance: import("vue").Ref<HTMLDivElement | undefined>;
                        thumb: import("vue").Ref<HTMLDivElement | undefined>;
                        thumbState: import("vue").Ref<{
                            X?: number | undefined;
                            Y?: number | undefined;
                        }>;
                        visible: import("vue").Ref<boolean>;
                        cursorDown: boolean;
                        cursorLeave: boolean;
                        originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                        bar: import("vue").ComputedRef<{
                            readonly offset: "offsetHeight";
                            readonly scroll: "scrollTop";
                            readonly scrollSize: "scrollHeight";
                            readonly size: "height";
                            readonly key: "vertical";
                            readonly axis: "Y";
                            readonly client: "clientY";
                            readonly direction: "top";
                        } | {
                            readonly offset: "offsetWidth";
                            readonly scroll: "scrollLeft";
                            readonly scrollSize: "scrollWidth";
                            readonly size: "width";
                            readonly key: "horizontal";
                            readonly axis: "X";
                            readonly client: "clientX";
                            readonly direction: "left";
                        }>;
                        thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                        offsetRatio: import("vue").ComputedRef<number>;
                        clickThumbHandler: (e: MouseEvent) => void;
                        clickTrackHandler: (e: MouseEvent) => void;
                        startDrag: (e: MouseEvent) => void;
                        mouseMoveDocumentHandler: (e: MouseEvent) => void;
                        mouseUpDocumentHandler: () => void;
                        mouseMoveScrollbarHandler: () => void;
                        mouseLeaveScrollbarHandler: () => void;
                        restoreOnselectstart: () => void;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>>, {
                        readonly vertical: boolean;
                        readonly always: boolean;
                    }>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                    readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly ratioX: number;
                    readonly ratioY: number;
                }> & {
                    beforeCreate?: (() => void) | (() => void)[] | undefined;
                    created?: (() => void) | (() => void)[] | undefined;
                    beforeMount?: (() => void) | (() => void)[] | undefined;
                    mounted?: (() => void) | (() => void)[] | undefined;
                    beforeUpdate?: (() => void) | (() => void)[] | undefined;
                    updated?: (() => void) | (() => void)[] | undefined;
                    activated?: (() => void) | (() => void)[] | undefined;
                    deactivated?: (() => void) | (() => void)[] | undefined;
                    beforeDestroy?: (() => void) | (() => void)[] | undefined;
                    beforeUnmount?: (() => void) | (() => void)[] | undefined;
                    destroyed?: (() => void) | (() => void)[] | undefined;
                    unmounted?: (() => void) | (() => void)[] | undefined;
                    renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof import("vue").nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{
                readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly width: StringConstructor;
                readonly height: StringConstructor;
                readonly ratioX: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                readonly ratioY: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
            }>> & import("vue").ShallowUnwrapRef<{
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly width: StringConstructor;
                    readonly height: StringConstructor;
                    readonly ratioX: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                    readonly ratioY: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                }>> & {
                    [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                moveX: import("vue").Ref<number>;
                moveY: import("vue").Ref<number>;
                handleScroll: (wrap: HTMLDivElement) => void;
                Thumb: import("vue").DefineComponent<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }, {
                    COMPONENT_NAME: string;
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>> & {
                        [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("element-plus").ScrollbarContext;
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
                    instance: import("vue").Ref<HTMLDivElement | undefined>;
                    thumb: import("vue").Ref<HTMLDivElement | undefined>;
                    thumbState: import("vue").Ref<{
                        X?: number | undefined;
                        Y?: number | undefined;
                    }>;
                    visible: import("vue").Ref<boolean>;
                    cursorDown: boolean;
                    cursorLeave: boolean;
                    originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                    bar: import("vue").ComputedRef<{
                        readonly offset: "offsetHeight";
                        readonly scroll: "scrollTop";
                        readonly scrollSize: "scrollHeight";
                        readonly size: "height";
                        readonly key: "vertical";
                        readonly axis: "Y";
                        readonly client: "clientY";
                        readonly direction: "top";
                    } | {
                        readonly offset: "offsetWidth";
                        readonly scroll: "scrollLeft";
                        readonly scrollSize: "scrollWidth";
                        readonly size: "width";
                        readonly key: "horizontal";
                        readonly axis: "X";
                        readonly client: "clientX";
                        readonly direction: "left";
                    }>;
                    thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                    offsetRatio: import("vue").ComputedRef<number>;
                    clickThumbHandler: (e: MouseEvent) => void;
                    clickTrackHandler: (e: MouseEvent) => void;
                    startDrag: (e: MouseEvent) => void;
                    mouseMoveDocumentHandler: (e: MouseEvent) => void;
                    mouseUpDocumentHandler: () => void;
                    mouseMoveScrollbarHandler: () => void;
                    mouseLeaveScrollbarHandler: () => void;
                    restoreOnselectstart: () => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }>>, {
                    readonly vertical: boolean;
                    readonly always: boolean;
                }>;
            }> & import("vue").ComponentCustomProperties) | undefined>;
            ratioY: import("vue").Ref<number>;
            ratioX: import("vue").Ref<number>;
            SCOPE: string;
            style: import("vue").ComputedRef<import("vue").StyleValue>;
            handleScroll: () => void;
            scrollTo: (arg1: unknown, arg2?: number | undefined) => void;
            setScrollTop: (value: number) => void;
            setScrollLeft: (value: number) => void;
            update: () => void;
            Bar: import("vue").DefineComponent<{
                readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly width: StringConstructor;
                readonly height: StringConstructor;
                readonly ratioX: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                readonly ratioY: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly width: StringConstructor;
                    readonly height: StringConstructor;
                    readonly ratioX: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                    readonly ratioY: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                }>> & {
                    [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                moveX: import("vue").Ref<number>;
                moveY: import("vue").Ref<number>;
                handleScroll: (wrap: HTMLDivElement) => void;
                Thumb: import("vue").DefineComponent<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }, {
                    COMPONENT_NAME: string;
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>> & {
                        [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("element-plus").ScrollbarContext;
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
                    instance: import("vue").Ref<HTMLDivElement | undefined>;
                    thumb: import("vue").Ref<HTMLDivElement | undefined>;
                    thumbState: import("vue").Ref<{
                        X?: number | undefined;
                        Y?: number | undefined;
                    }>;
                    visible: import("vue").Ref<boolean>;
                    cursorDown: boolean;
                    cursorLeave: boolean;
                    originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                    bar: import("vue").ComputedRef<{
                        readonly offset: "offsetHeight";
                        readonly scroll: "scrollTop";
                        readonly scrollSize: "scrollHeight";
                        readonly size: "height";
                        readonly key: "vertical";
                        readonly axis: "Y";
                        readonly client: "clientY";
                        readonly direction: "top";
                    } | {
                        readonly offset: "offsetWidth";
                        readonly scroll: "scrollLeft";
                        readonly scrollSize: "scrollWidth";
                        readonly size: "width";
                        readonly key: "horizontal";
                        readonly axis: "X";
                        readonly client: "clientX";
                        readonly direction: "left";
                    }>;
                    thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                    offsetRatio: import("vue").ComputedRef<number>;
                    clickThumbHandler: (e: MouseEvent) => void;
                    clickTrackHandler: (e: MouseEvent) => void;
                    startDrag: (e: MouseEvent) => void;
                    mouseMoveDocumentHandler: (e: MouseEvent) => void;
                    mouseUpDocumentHandler: () => void;
                    mouseMoveScrollbarHandler: () => void;
                    mouseLeaveScrollbarHandler: () => void;
                    restoreOnselectstart: () => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }>>, {
                    readonly vertical: boolean;
                    readonly always: boolean;
                }>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly width: StringConstructor;
                readonly height: StringConstructor;
                readonly ratioX: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
                readonly ratioY: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
            }>>, {
                readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly ratioX: number;
                readonly ratioY: number;
            }>;
        }> & import("vue").ComponentCustomProperties) | null>;
        popperVisible: import("vue").Ref<boolean>;
        inputHover: import("vue").Ref<boolean>;
        inputPlaceholder: import("vue").ComputedRef<string>;
        currentPlaceholder: import("vue").ComputedRef<string>;
        filtering: import("vue").Ref<boolean>;
        presentText: import("vue").ComputedRef<string>;
        checkedValue: import("vue").WritableComputedRef<import("element-plus").CascaderValue>;
        inputValue: import("vue").Ref<string>;
        searchInputValue: import("vue").Ref<string>;
        presentTags: import("vue").Ref<import("element-plus").Tag[]>;
        allPresentTags: import("vue").Ref<import("element-plus").Tag[]>;
        suggestions: import("vue").Ref<import("element-plus/es/components/cascader-panel/src/node").default[]>;
        isDisabled: import("vue").ComputedRef<boolean | undefined>;
        isOnComposition: import("vue").Ref<boolean>;
        realSize: import("vue").ComputedRef<"" | "small" | "default" | "large">;
        tagSize: import("vue").ComputedRef<"small" | "default">;
        multiple: import("vue").ComputedRef<boolean>;
        readonly: import("vue").ComputedRef<boolean>;
        clearBtnVisible: import("vue").ComputedRef<boolean>;
        nsCascader: {
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
        nsInput: {
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
        t: import("element-plus").Translator;
        togglePopperVisible: (visible?: boolean | undefined) => void;
        hideSuggestionPanel: () => void;
        deleteTag: (tag: import("element-plus").Tag) => void;
        focusFirstNode: () => void;
        getCheckedNodes: (leafOnly: boolean) => import("element-plus/es/components/cascader-panel/src/node").default[] | undefined;
        handleExpandChange: (value: import("element-plus").CascaderValue) => void;
        handleKeyDown: (e: KeyboardEvent) => void;
        handleComposition: (event: CompositionEvent) => void;
        handleClear: () => void;
        handleSuggestionClick: (node: import("element-plus/es/components/cascader-panel/src/node").default) => void;
        handleSuggestionKeyDown: (e: KeyboardEvent) => void;
        handleDelete: () => void;
        handleInput: (val: string, e?: KeyboardEvent | undefined) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "focus" | "blur" | "visible-change" | "remove-tag" | "expand-change")[], "update:modelValue" | "change" | "focus" | "blur" | "visible-change" | "remove-tag" | "expand-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        size: {
            type: import("vue").PropType<"" | "small" | "default" | "large">;
            validator: (val: string) => val is "" | "small" | "default" | "large";
        };
        placeholder: {
            type: StringConstructor;
        };
        disabled: BooleanConstructor;
        clearable: BooleanConstructor;
        filterable: BooleanConstructor;
        filterMethod: {
            type: import("vue").PropType<(node: import("element-plus/es/components/cascader-panel/src/node").default, keyword: string) => boolean>;
            default: (node: import("element-plus/es/components/cascader-panel/src/node").default, keyword: string) => boolean;
        };
        separator: {
            type: StringConstructor;
            default: string;
        };
        showAllLevels: {
            type: BooleanConstructor;
            default: boolean;
        };
        collapseTags: BooleanConstructor;
        collapseTagsTooltip: {
            type: BooleanConstructor;
            default: boolean;
        };
        debounce: {
            type: NumberConstructor;
            default: number;
        };
        beforeFilter: {
            type: import("vue").PropType<(value: string) => boolean | Promise<any>>;
            default: () => boolean;
        };
        popperClass: {
            type: StringConstructor;
            default: string;
        };
        teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        tagType: {
            default: string;
            type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "success" | "warning" | "info" | "danger", unknown>>;
            required: false;
            validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        validateEvent: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelValue: import("vue").PropType<import("element-plus/es/components/cascader-panel/src/node").CascaderValue>;
        options: {
            type: import("vue").PropType<import("element-plus").CascaderOption[]>;
            default: () => import("element-plus").CascaderOption[];
        };
        props: {
            type: import("vue").PropType<import("element-plus").CascaderProps>;
            default: () => import("element-plus").CascaderProps;
        };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onFocus?: ((...args: any[]) => any) | undefined;
        onBlur?: ((...args: any[]) => any) | undefined;
        "onExpand-change"?: ((...args: any[]) => any) | undefined;
        "onVisible-change"?: ((...args: any[]) => any) | undefined;
        "onRemove-tag"?: ((...args: any[]) => any) | undefined;
    }, {
        separator: string;
        disabled: boolean;
        validateEvent: boolean;
        debounce: number;
        props: import("element-plus").CascaderProps;
        popperClass: string;
        teleported: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        clearable: boolean;
        options: import("element-plus").CascaderOption[];
        filterable: boolean;
        filterMethod: (node: import("element-plus/es/components/cascader-panel/src/node").default, keyword: string) => boolean;
        showAllLevels: boolean;
        collapseTags: boolean;
        collapseTagsTooltip: boolean;
        beforeFilter: (value: string) => boolean | Promise<any>;
        tagType: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "success" | "warning" | "info" | "danger", unknown>;
    }>>;
    ElCascaderPanel: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
        border: {
            type: BooleanConstructor;
            default: boolean;
        };
        renderLabel: import("vue").PropType<import("element-plus/es/components/cascader-panel/src/node").RenderLabel>;
        modelValue: import("vue").PropType<import("element-plus/es/components/cascader-panel/src/node").CascaderValue>;
        options: {
            type: import("vue").PropType<import("element-plus").CascaderOption[]>;
            default: () => import("element-plus").CascaderOption[];
        };
        props: {
            type: import("vue").PropType<import("element-plus").CascaderProps>;
            default: () => import("element-plus").CascaderProps;
        };
    }, {
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
        menuList: import("vue").Ref<any[]>;
        menus: import("vue").Ref<{
            readonly uid: number;
            readonly level: number;
            readonly value: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue;
            readonly label: string;
            readonly pathNodes: any[];
            readonly pathValues: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue[];
            readonly pathLabels: string[];
            childrenData: {
                [x: string]: unknown;
                label?: string | undefined;
                value?: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue | undefined;
                children?: any[] | undefined;
                disabled?: boolean | undefined;
                leaf?: boolean | undefined;
            }[] | undefined;
            children: any[];
            text: string;
            loaded: boolean;
            checked: boolean;
            indeterminate: boolean;
            loading: boolean;
            readonly data: {
                [x: string]: unknown;
                label?: string | undefined;
                value?: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue | undefined;
                children?: any[] | undefined;
                disabled?: boolean | undefined;
                leaf?: boolean | undefined;
            } | null;
            readonly config: {
                expandTrigger: import("element-plus").ExpandTrigger;
                multiple: boolean;
                checkStrictly: boolean;
                emitPath: boolean;
                lazy: boolean;
                lazyLoad: import("element-plus/es/components/cascader-panel/src/node").LazyLoad;
                value: string;
                label: string;
                children: string;
                disabled: string | import("element-plus/es/components/cascader-panel/src/node").isDisabled;
                leaf: string | import("element-plus/es/components/cascader-panel/src/node").isLeaf;
                hoverThreshold: number;
            };
            readonly parent?: any;
            readonly root: boolean;
            readonly isDisabled: boolean;
            readonly isLeaf: boolean;
            readonly valueByOption: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue | import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue[];
            appendChild: (childData: import("element-plus").CascaderOption) => import("element-plus/es/components/cascader-panel/src/node").default;
            calcText: (allLevels: boolean, separator: string) => string;
            broadcast: (event: string, ...args: unknown[]) => void;
            emit: (event: string, ...args: unknown[]) => void;
            onParentCheck: (checked: boolean) => void;
            onChildCheck: () => void;
            setCheckState: (checked: boolean) => void;
            doCheck: (checked: boolean) => void;
        }[][]>;
        checkedNodes: import("vue").Ref<{
            readonly uid: number;
            readonly level: number;
            readonly value: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue;
            readonly label: string;
            readonly pathNodes: any[];
            readonly pathValues: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue[];
            readonly pathLabels: string[];
            childrenData: {
                [x: string]: unknown;
                label?: string | undefined;
                value?: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue | undefined;
                children?: any[] | undefined;
                disabled?: boolean | undefined;
                leaf?: boolean | undefined;
            }[] | undefined;
            children: any[];
            text: string;
            loaded: boolean;
            checked: boolean;
            indeterminate: boolean;
            loading: boolean;
            readonly data: {
                [x: string]: unknown;
                label?: string | undefined;
                value?: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue | undefined;
                children?: any[] | undefined;
                disabled?: boolean | undefined;
                leaf?: boolean | undefined;
            } | null;
            readonly config: {
                expandTrigger: import("element-plus").ExpandTrigger;
                multiple: boolean;
                checkStrictly: boolean;
                emitPath: boolean;
                lazy: boolean;
                lazyLoad: import("element-plus/es/components/cascader-panel/src/node").LazyLoad;
                value: string;
                label: string;
                children: string;
                disabled: string | import("element-plus/es/components/cascader-panel/src/node").isDisabled;
                leaf: string | import("element-plus/es/components/cascader-panel/src/node").isLeaf;
                hoverThreshold: number;
            };
            readonly parent?: any;
            readonly root: boolean;
            readonly isDisabled: boolean;
            readonly isLeaf: boolean;
            readonly valueByOption: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue | import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue[];
            appendChild: (childData: import("element-plus").CascaderOption) => import("element-plus/es/components/cascader-panel/src/node").default;
            calcText: (allLevels: boolean, separator: string) => string;
            broadcast: (event: string, ...args: unknown[]) => void;
            emit: (event: string, ...args: unknown[]) => void;
            onParentCheck: (checked: boolean) => void;
            onChildCheck: () => void;
            setCheckState: (checked: boolean) => void;
            doCheck: (checked: boolean) => void;
        }[]>;
        handleKeyDown: (e: KeyboardEvent) => void;
        handleCheckChange: (node: import("element-plus/es/components/cascader-panel/src/node").default, checked: boolean, emitClose?: boolean | undefined) => void;
        getFlattedNodes: (leafOnly: boolean) => import("element-plus/es/components/cascader-panel/src/node").default[] | undefined;
        getCheckedNodes: (leafOnly: boolean) => import("element-plus/es/components/cascader-panel/src/node").default[] | undefined;
        clearCheckedNodes: () => void;
        calculateCheckedValue: () => void;
        scrollToExpandingNode: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "close" | "expand-change")[], "update:modelValue" | "change" | "close" | "expand-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        border: {
            type: BooleanConstructor;
            default: boolean;
        };
        renderLabel: import("vue").PropType<import("element-plus/es/components/cascader-panel/src/node").RenderLabel>;
        modelValue: import("vue").PropType<import("element-plus/es/components/cascader-panel/src/node").CascaderValue>;
        options: {
            type: import("vue").PropType<import("element-plus").CascaderOption[]>;
            default: () => import("element-plus").CascaderOption[];
        };
        props: {
            type: import("vue").PropType<import("element-plus").CascaderProps>;
            default: () => import("element-plus").CascaderProps;
        };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        onClose?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        "onExpand-change"?: ((...args: any[]) => any) | undefined;
    }, {
        props: import("element-plus").CascaderProps;
        border: boolean;
        options: import("element-plus").CascaderOption[];
    }>>;
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
