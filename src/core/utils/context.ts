class FormItemContext {
  private _map = new Map();

  constructor() {}

  addContext<T>(id: string, instance: T) {
    this._map.set(id, instance);
  }

  removeContext(id: string) {
    this._map.delete(id);
  }

  getContext<T>(id: string): T {
    return this._map.get(id);
  }

  getContexts() {
    return this._map;
  }

  getMap() {
    return this._map;
  }
}

export { FormItemContext };
