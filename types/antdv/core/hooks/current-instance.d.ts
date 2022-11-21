export default function useCurrentInstance(): {
    appContext: import("vue").AppContext;
    globalProperties: Record<string, any>;
};
