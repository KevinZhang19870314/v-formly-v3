import type { Meta } from '../../types/meta';
export declare function useVisibleIf(): {
    visibleIf: typeof visibleIfFunc;
};
/**
 * 根据visibleIf函数判断是否需要隐藏被触发方组件
 * @param {Object} context 全局context
 * @param {Object} meta 被触发方组件meta
 * @param {Boolean} visible 被触发方组件当前是否可见
 * @param {Object} change 触发方组件的change事件数据 { id: xxx, value: xxx }
 * @returns 是否隐藏
 */
declare function visibleIfFunc(context: Object, meta: Meta, visible: boolean, change: {
    id: string;
    value: any;
}): any;
export {};
