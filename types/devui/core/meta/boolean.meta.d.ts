import type { Meta } from '../../types/meta';
import type { Global } from '../../core/utils/global';
import type { AppContext } from "vue";
import { BaseMeta } from "./base.meta";
declare class BooleanMeta extends BaseMeta {
    constructor(appContext: AppContext, state: Global, id: string, meta: Meta);
    initValue(): void;
    setValue(val: any): void;
}
export { BooleanMeta };
