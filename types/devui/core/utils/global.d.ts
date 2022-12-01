import type { FormItemContext } from "./context";
declare class Global {
    _formId: string;
    _ignoreErrorIds: never[];
    private _context;
    private _layout;
    private _ajvOptions;
    _formData: import("vue").Ref<{}>;
    private _meta;
    private _ui;
    private _validate;
    constructor();
    get context(): FormItemContext | undefined;
    set context(val: FormItemContext | undefined);
    get layout(): import("vue").Ref<string>;
    set layout(val: import("vue").Ref<string>);
    get ajvOptions(): {
        allErrors: boolean;
        strict: boolean;
        loopEnum: number;
    };
    set ajvOptions(val: {
        allErrors: boolean;
        strict: boolean;
        loopEnum: number;
    });
    get formData(): {};
    set formData(val: {});
    get meta(): {};
    set meta(val: {});
    get ui(): {
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
    };
    set ui(val: {
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
    });
    get validate(): any;
    set validate(val: any);
    updateObjProp(obj: any, propPath: string, value: any): void;
    _applyUseOptions(): void;
}
export { Global };
