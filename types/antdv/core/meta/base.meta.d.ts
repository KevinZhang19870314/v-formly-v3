import type { AnyObject, Meta } from '../../types/meta';
import type { Global } from '../../core/utils/global';
import { type AppContext } from "vue";
declare abstract class BaseMeta {
    id: string;
    state: Global;
    meta: import("vue").Ref<{
        [x: string]: any;
        type?: import('../../types/meta').MetaType | undefined;
        properties?: AnyObject | undefined;
        items?: AnyObject | undefined;
        ui?: AnyObject | undefined;
    }>;
    type: any;
    ui: import("vue").Ref<AnyObject>;
    error: import("vue").Ref<undefined>;
    _value: import("vue").Ref<any>;
    _initMetaValue: any;
    appContext: AppContext;
    constructor(appContext: AppContext, state: Global, id: string, meta: Meta);
    abstract initValue(): void;
    abstract setValue(val: any): void;
    get value(): any;
    set value(val: any);
    /**
     * v-formly-v3 中通过v-model传入的组件初始值
     * @returns 组件初始值
     */
    getInitMetaValue(): string;
}
export { BaseMeta };
