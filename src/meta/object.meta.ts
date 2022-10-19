import type { Meta } from "@/types/meta";
import { BaseMeta } from "./base.meta";

class ObjectMeta extends BaseMeta {
  public childMetaPairs;
  public id;
  public meta;
  constructor(state: any, id: string, meta: Meta) {
    super(state, id, meta);
    this.id = id;
    this.meta = meta;

    this.childMetaPairs = this.buildChildMetaPairs(id, meta);

    state.context.addContext(id, this);
  }

  set value(val: any) {
    this.childMetaPairs.forEach(({ key, propertyName }) => {
      const ctx = this.state.context.getContext(key);
      ctx.value = (val || {})[propertyName];
    });
  }

  /**
   * 构造结构数据给Object循环使用
   * @param {String} id 每个组件实例的唯一id，构造成json-schema中的`instancePath + '/' + params.missingProperty`
   * @param {Object} meta json-schema的某个层级的schema
   * @returns 返回构造后的数据给Object使用
   */
  buildChildMetaPairs(id: string, meta: Meta) {
    const results = [];
    for (const key of Object.keys(meta.properties || {})) {
      const keyVal = id === "/" ? `/${key}` : `${id}/${key}`;
      results.push({
        key: keyVal,
        propertyName: key,
        meta: meta.properties![key],
      });
    }

    return results;
  }
}

export { ObjectMeta };
