declare class FormItemContext {
    private _map;
    constructor();
    addContext<T>(id: string, instance: T): void;
    removeContext(id: string): void;
    getContext<T>(id: string): T;
    getContexts(): Map<any, any>;
    getMap(): Map<any, any>;
}
export { FormItemContext };
