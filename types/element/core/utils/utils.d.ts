/**
 * len 长度
 * radix 基数（进制数）
 */
export declare function UUID(len?: number, radix?: number): string;
export declare function deepClone(obj: any): any;
export declare const isArray: (arg: any) => arg is any[];
export declare const isFunction: (val: unknown) => val is Function;
export declare const isString: (val: unknown) => val is string;
export declare const isNumber: (val: unknown) => val is number;
export declare const isObject: (val: unknown) => val is Record<any, any>;
