import type { Meta } from '../../types/meta';
import type { Global } from '../../core/utils/global';
import type { AppContext } from "vue";
import { BaseMeta } from "./base.meta";
declare class ObjectMeta extends BaseMeta {
    childMetaPairs: {
        key: string;
        propertyName: string;
        meta: any;
    }[];
    constructor(appContext: AppContext, state: Global, id: string, meta: Meta);
    initValue(): void;
    setValue(): void;
    set value(val: any);
    /**
     * 构造结构数据给Object循环使用
     * @param {String} id 每个组件实例的唯一id，构造成json-schema中的`instancePath + '/' + params.missingProperty`
     * @param {Object} meta json-schema的某个层级的schema
     * @returns 返回构造后的数据给Object使用
     */
    buildChildMetaPairs(id: string, meta: Meta): {
        key: string;
        propertyName: string;
        meta: any;
    }[];
}
export { ObjectMeta };
