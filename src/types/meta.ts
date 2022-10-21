export interface Meta {
  type?: MetaType;
  properties?: AnyObject;
  items?: AnyObject;
  ui?: AnyObject;
  [key: string]: any;
}

export enum MetaType {
  Object = "object",
  Array = "array",
  Boolean = "boolean",
  Integer = "integer",
}

export type AnyObject = { [key: string]: any };
