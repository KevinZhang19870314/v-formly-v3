import { ref, unref, nextTick } from "vue";
import type { AnyObject, Meta } from "@/types/meta";
import type { Global } from "@/utils/global";
import type { AppContext } from "vue";
import { BaseMeta } from "./base.meta";
import { deepClone, UUID } from "@/utils/utils";
import type { StringMeta } from "./string.meta";
import type { ObjectMeta } from "./object.meta";
import type { NumberMeta } from "./number.meta";
import type { BooleanMeta } from "./boolean.meta";

type OneMeta = StringMeta | ObjectMeta | NumberMeta | BooleanMeta | ArrayMeta;

class ArrayMeta extends BaseMeta {
  public ids; // 当前数组包含的所有子项

  constructor(appContext: AppContext, state: Global, id: string, meta: Meta) {
    super(appContext, state, id, meta);
    this.ids = ref<Array<{ key: string }>>([]);
    this.initValue();
  }

  initValue() {
    if (!this.ids) return;
    if (this._initMetaValue?.length > 0) {
      this.value = this._initMetaValue;
    } else if (unref(this.meta).default?.length > 0) {
      const data = unref(this.meta).default;
      data.forEach(() => this.add(false));
      setTimeout(() => {
        data.forEach((item: any, index: number) => {
          const ctx = this.state.context!.getContext<ObjectMeta>(
            `${this.id}/${index}`
          );
          ctx.value = item;
        });
      });
      this.validate();
    }
  }

  get value() {
    return this.getPathValue(this.state.formData, this.id) || [];
  }

  set value(val) {
    // 避免重复校验
    if (this.value.length === 0 && val?.length === 0) return;
    // 只允许设置 null / undefined / Array 类型的值
    if (!Array.isArray(val) && val != null) return;
    const newVal = deepClone(val);
    const len = unref(this.ids).length;
    // 从后往前删除
    for (let i = 0; i < len; i++) {
      this.remove(len - i - 1, false);
    }
    if (newVal && newVal.length) {
      newVal.forEach(() => this.add(false));

      nextTick(() => {
        newVal.forEach((item: any, index: number) => {
          const ctx = this.state.context!.getContext<OneMeta>(
            `${this.id}/${index}`
          );
          ctx.value = item;
        });
      });
    }

    this.validate();
  }

  // 触发数组校验
  validate(): void {
    return this.state.validate.runValidationFormItem(this);
  }

  getPathValue(sourceData: any, path: string) {
    const props = path.split("/").filter((f) => f);
    let res = deepClone(sourceData);
    for (let i = 0; i < props.length; i++) {
      const key = props[i];
      res = res[key];
    }
    return res;
  }

  // 根据 meta.itmes properties 生成空对象
  getEmptyData(): AnyObject {
    const obj: AnyObject = {};
    const properties = unref(this.meta).items!.properties;
    Object.keys(properties).forEach((key) => {
      const meta = properties[key];
      switch (meta.type) {
        case "object":
          obj[key] = {};
          break;
        case "array":
          obj[key] = [];
          break;
        default:
          obj[key] = undefined;
          break;
      }
    });
    return obj;
  }

  // 在数组尾添加一个空对象
  add(validate: boolean = true): string {
    const id = `${this.id}/${unref(this.ids).length}`;
    const value = this.getEmptyData();
    this.state.updateObjProp(this.state.formData, id, value);
    this.ids.value.push({ key: UUID() });

    validate && this.validate();
    return id;
  }

  remove(index: number, validate: boolean = true): void {
    // update ids
    this.ids.value.splice(index, 1);
    // update formData
    const props = this.id.split("/").filter((f) => !!f);
    props.reduce((obj, key, idx) => {
      if (idx === props.length - 1) {
        obj[key].splice(index, 1);
      }
      return obj[key];
    }, this.state.formData as AnyObject);
    // update context
    const keys = [];
    for (const key of this.state.context!.getMap().keys()) {
      if (new RegExp(`^/?${this.id}/`).test(key)) {
        keys.push(key);
      }
    }
    for (let i = index + 1; i < unref(this.ids).length + 1; i++) {
      const regex = new RegExp(`^(/?${this.id}/)${i}`);
      keys
        .filter((key) => regex.test(key))
        .forEach((key) => {
          const ctx = this.state.context!.getContext<OneMeta>(key);
          const newKey = key.replace(regex, (match: any, p1: any) => {
            return `${p1}${i - 1}`;
          });
          ctx.id = newKey;
          // object 的 id 比较特殊,需要重新计算
          if ((ctx as ObjectMeta).childMetaPairs) {
            const newChildMetaPairs = (ctx as ObjectMeta).buildChildMetaPairs(
              newKey,
              unref(ctx.meta)
            );
            (ctx as ObjectMeta).childMetaPairs.forEach((item, idx) => {
              item.key = newChildMetaPairs[idx].key;
            });
          }
          this.state.context!.addContext(newKey, ctx);
        });
    }
    const regex = new RegExp(`^/?${this.id}/${unref(this.ids).length}`);
    keys
      .filter((key) => regex.test(key))
      .forEach((key) => {
        this.state.context!.removeContext(key);
      });

    validate && this.validate();
  }
}

export { ArrayMeta };
