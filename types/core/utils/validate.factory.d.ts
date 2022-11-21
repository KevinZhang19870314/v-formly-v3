import { type Meta } from '../../types/meta';
import { type AppContext } from "vue";
declare class ValidateFactory {
    private state;
    private _ajv;
    private _validate;
    appContext: AppContext;
    constructor(appContext: AppContext, state: any);
    runValidateForm(): Promise<boolean>;
    runValidationFormItem(context: any): Promise<boolean>;
    _ajvValidate(meta: Meta): any;
    _forceCompile(): void;
    _replaceReactiveToRawData(meta: Meta): void;
    _getAjvError(id: string, errors: any): any;
    _isAjvValid(): {
        valid: any;
        errors: any;
    };
    _validation(context: any, valid: boolean, errs: any): Promise<boolean>;
    _getCustomError(context: any): any;
    _getCustomAsyncError(context: any): Promise<any>;
    _replaceWithDefaultErrors(context: any, errors: any): void;
    _replaceWithCustomErrors(id: string, errors: any, customErrors: any): void;
    _removeIgnoreErrors(errors: any): any;
    _getId(error: any): string;
}
export { ValidateFactory };
