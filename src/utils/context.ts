class FormItemContext {
  private _map = new Map();

  constructor() {}

  addContext(id: string, instance: any) {
    this._map.set(id, instance);
  }

  removeContext(id: string) {
    this._map.delete(id);
  }

  getContext(id: string) {
    return this._map.get(id);
  }

  getContexts() {
    return this._map;
  }
}

export { FormItemContext };
