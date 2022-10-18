import type { Meta } from "@/types/meta";
import Ajv from "ajv";
import { FORM_ERROR_CHANGE } from "./consts";

class ValidateFactory {
  private state: any;
  private _ajv;
  private _validate: any;

  constructor(state: any) {
    this.state = state;
    this._ajv = new Ajv(state.ajvOptions);
    this._validate = null;
  }

  async runValidateForm() {
    const { valid, errors } = this._isAjvValid();
    const contexts = this.state.context.getContexts();
    const instances = contexts.values();
    let isValid = true;
    for (const instance of instances) {
      isValid = (await this._validation(instance, valid, errors)) && isValid;
    }

    return isValid;
  }

  async runValidationFormItem(context: any) {
    const { valid, errors } = this._isAjvValid();
    const isValid = await this._validation(context, valid, errors);
    return isValid;
  }

  _ajvValidate(meta: Meta) {
    if (this._validate) return this._validate;

    this._validate = this._ajv.compile(meta);
    return this._validate;
  }

  _getAjvError(id: string, errors: any) {
    let _error = undefined;
    for (let i = 0; i < errors.length; i++) {
      const error = errors[i];
      const _id = this._getId(error);
      if (id === _id) {
        _error = error;
        break;
      }
    }

    return _error;
  }

  _isAjvValid() {
    const validate = this._ajvValidate(this.state.meta);
    const valid = validate(this.state.formData || {});

    return { valid, errors: validate.errors };
  }

  async _validation(context: any, valid: boolean, errs: any) {
    let errors = [];
    const ERROR_CHANGE = `${FORM_ERROR_CHANGE}-${this.state._formId}`;
    if (!valid) {
      const customErrors = this._getCustomError(context);
      const customAsyncErrors = await this._getCustomAsyncError(context);
      const cusErrors = [...customErrors, ...customAsyncErrors];
      this._replaceWithDefaultErrors(context, errs);
      this._replaceWithCustomErrors(context.id, errs, cusErrors);
      const ingoreKeywords = this.state.ui.ingoreKeywords || [];
      errors = errs.filter(
        (f: any) => ingoreKeywords.indexOf(f.keyword) === -1
      );
      errors = this._removeIgnoreErrors(errors);
      const error = this._getAjvError(context.id, errors);
      // TODO: replace with mitt lib
      //   Vue.bus.emit(ERROR_CHANGE, {
      //     id: context.id,
      //     error: error,
      //   });

      return error ? false : true;
    } else {
      // TODO: replace with mitt lib
      //   Vue.bus.emit(ERROR_CHANGE, {
      //     id: context.id,
      //     error: undefined,
      //   });

      return true;
    }
  }

  _getCustomError(context: any) {
    const validator = context.meta.ui && context.meta.ui.validator;
    if (!validator) return [];

    return validator(context.value);
  }

  async _getCustomAsyncError(context: any) {
    const validatorAsync = context.meta.ui && context.meta.ui.validatorAsync;
    if (!validatorAsync) return [];

    return await validatorAsync(context.value);
  }

  _replaceWithDefaultErrors(context: any, errors: any) {
    if (!errors || errors.length === 0) return;

    const localErrors = (context.meta.ui && context.meta.ui.errors) || {};
    const globalErrors = Object.assign({}, this.state.ui.errors, localErrors);
    const keywords = Object.keys(globalErrors);
    if (keywords && keywords.length > 0) {
      errors.forEach((error: any) => {
        if (keywords.indexOf(error.keyword) > -1) {
          error.message = globalErrors[error.keyword];
        }
      });
    }
  }

  _replaceWithCustomErrors(id: string, errors: any, customErrors: any) {
    customErrors.forEach((err: any) => {
      const cur = errors.find(
        (f: any) => f.keyword === err.keyword && this._getId(f) === id
      );
      if (cur) {
        cur.message = err.message;
      }
    });
  }

  _removeIgnoreErrors(errors: any) {
    const ids = this.state._ignoreErrorIds;
    if (!ids || ids.length === 0) return errors;

    const errs = errors.filter((f: any) => ids.indexOf(this._getId(f)) === -1);

    return errs;
  }

  _getId(error: any) {
    const hasMissingProperty = error.params && error.params.missingProperty;
    if (hasMissingProperty) {
      return `${error.instancePath}/${error.params.missingProperty}`;
    }

    return `${error.instancePath}`;
  }
}

export { ValidateFactory };
