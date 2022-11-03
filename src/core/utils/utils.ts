/**
 * len 长度
 * radix 基数（进制数）
 */
export function UUID(len: number = 8, radix: number = 10): string {
  const chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  const _radix = radix || chars.length;
  const uuid = [];

  if (len) {
    // Compact form
    for (let i = 0; i < len; i++) {
      uuid[i] = chars[0 | (Math.random() * _radix)];
    }
  } else {
    // rfc4122, version 4 form
    let r;

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
    uuid[14] = "4";

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (let i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16);
        uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return uuid.join("");
}

export function deepClone(obj: any) {
  if (obj === undefined) return undefined;
  if (obj === null) return null;
  const clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    (key) =>
      (clone[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
  );
  if (Array.isArray(obj)) {
    clone.length = obj.length;
    return Array.from(clone);
  }
  return clone;
}

export const isArray = Array.isArray;
export const isFunction = (val: unknown): val is Function =>
  typeof val === "function";
export const isString = (val: unknown): val is string =>
  typeof val === "string";
export const isNumber = (val: unknown): val is number =>
  typeof val === "number";
export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === "object";
