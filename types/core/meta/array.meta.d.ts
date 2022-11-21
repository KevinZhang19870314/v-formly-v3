import type { AnyObject, Meta } from '../../types/meta';
import type { Global } from '../../core/utils/global';
import type { AppContext } from "vue";
import { BaseMeta } from "./base.meta";
declare class ArrayMeta extends BaseMeta {
    ids: import("vue").Ref<{
        key: string;
    }[]>;
    constructor(appContext: AppContext, state: Global, id: string, meta: Meta);
    setValue(): void;
    initValue(): void;
    get value(): any;
    set value(val: any);
    validate(): void;
    getPathValue(sourceData: any, path: string): any;
    getEmptyData(): AnyObject;
    add(validate?: boolean): string;
    remove(index: number, validate?: boolean): void;
}
export { ArrayMeta };
