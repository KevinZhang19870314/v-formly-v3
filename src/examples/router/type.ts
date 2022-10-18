export type GetArrayItemType<T extends unknown[]> = T extends Array<infer S>
  ? S
  : never;
