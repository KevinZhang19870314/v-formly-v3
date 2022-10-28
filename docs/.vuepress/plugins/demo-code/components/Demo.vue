<template>
  <div
    :class="['demo', hover && 'demo-hover']"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <!-- 组件展示 -->
    <div class="demo-slot">
      <component :is="component" />
    </div>
    <!-- 代码展示 -->
    <div class="demo-show" v-show="isExpanded">
      <div
        class="demo-show_desc"
        v-show="decodedInfo"
        v-html="decodedInfo"
      ></div>
      <div class="demo-show-copy" @click.stop="onCopy"></div>
      <div class="demo-show-code language-vue" v-html="decodedHlCode"></div>
    </div>
    <!-- 切换按钮 -->
    <div class="demo-control" @click="onClickControl">
      <transition name="arrow-slide">
        <i
          :class="[
            'demo-control-icon',
            isExpanded ? 'demo-control-icon_up' : 'demo-control-icon_down',
          ]"
        ></i>
      </transition>
      <transition name="text-slide">
        <span class="demo-control-tip" v-show="hover">
          {{ isExpanded ? "隐藏代码" : "显示代码" }}
        </span>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
const timeoutIdMap = new Map();
</script>
<script setup lang="ts">
import { computed, ref, unref } from "vue";

const props = defineProps<{
  component: string;
  info: string;
  highlightCode: string;
  code: string;
}>();
const decodedInfo = computed(() => decodeURIComponent(props.info));
const decodedHlCode = computed(() => decodeURIComponent(props.highlightCode));
const decodedCode = computed(() => decodeURIComponent(props.code));

const hover = ref(true); // 鼠标是否移入
const isExpanded = ref(false); // 代码是否展开
const onClickControl = () => {
  isExpanded.value = !isExpanded.value;
  hover.value = isExpanded.value;
};
const onCopy = async (e) => {
  try {
    navigator.clipboard.writeText(unref(decodedCode));
    const el = e.target;
    el.classList.add("demo-show-copied");
    clearTimeout(timeoutIdMap.get(el));
    const timeoutId = setTimeout(() => {
      el.classList.remove("demo-show-copied");
      el.blur();
      timeoutIdMap.delete(el);
    }, 2000);
    timeoutIdMap.set(el, timeoutId);
  } catch (err) {
    console.error("复制代码失败");
  }
};
</script>

<style scoped>
.demo {
  margin: 10px 0;
  border: solid 1px var(--vp-c-divider-light);
  border-radius: 3px;
  transition: 0.2s;
}
.demo-hover {
  box-shadow: var(--vp-shadow-2);
}
.demo-hover .demo-control {
  color: var(--vp-c-brand);
}
.demo-hover .demo-control-icon {
  transform: translateX(-40px);
}
.demo-slot {
  box-sizing: border-box;
  padding: 24px;
  transition: 0.2s;
  overflow: auto;
}
.demo-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  align-items: center;
}
.demo-show {
  position: relative;
  border-top: solid 1px var(--vp-c-divider-light);
  background-color: var(--vp-code-block-bg);
}
.demo-show_desc {
  border: solid 1px var(--vp-c-divider-light);
  border-radius: 3px;
  padding: 20px;
  box-sizing: border-box;
  line-height: 26px;
  color: var(--vp-c-text-2);
  word-break: break-word;
  margin: 10px 10px 6px 10px;
  background-color: var(--vp-c-bg-soft);
}
.demo-show-code {
  margin-bottom: 0 !important;
}
.demo-show-copy {
  position: absolute;
  right: 8px;
  z-index: 2;
  display: block;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 40px;
  height: 40px;
  background-color: var(--vp-code-block-bg);
  cursor: pointer;
  background-image: var(--vp-icon-copy);
  background-position: 50%;
  background-size: 20px;
  background-repeat: no-repeat;
  transition: opacity 0.25s;
}
.demo-show-copied {
  border-radius: 0 4px 4px 0;
  background-color: var(--vp-code-copy-code-hover-bg);
  background-image: var(--vp-icon-copied);
}
.demo-show-copied:before {
  position: relative;
  left: -65px;
  display: block;
  border-radius: 4px 0 0 4px;
  padding-top: 8px;
  width: 64px;
  height: 40px;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: var(--vp-code-copy-code-active-text);
  background-color: var(--vp-code-copy-code-hover-bg);
  white-space: nowrap;
  content: "Copied";
}
.demo-show :deep(pre) {
  margin: 0 !important;
  padding: 1.25rem 1.5rem;
  background-color: inherit !important;
}
.demo-control {
  border-top: 1px solid var(--vp-c-divider-light);
  height: 44px;
  box-sizing: border-box;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-align: center;
  margin-top: -1px;
  color: var(--vp-c-gray-light-2);
  cursor: pointer;
  position: relative;
}
.demo-control-icon {
  display: inline-block;
  position: absolute;
  top: 50%;
  font-size: 16px;
  transition: 0.3s;
}
.demo-control-icon_up:before {
  content: "";
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-bottom: 7px solid;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -8.5px;
  margin-left: -6px;
}
.demo-control-icon_down:before {
  content: "";
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-top: 7.5px solid;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -2px;
  margin-left: -6px;
}
.demo-control-tip {
  position: absolute;
  transform: translateX(-30px);
  font-size: 14px;
  line-height: 44px;
  font-weight: 500;
  transition: 0.3s;
  display: inline-block;
}
.demo .text-slide-enter,
.demo .text-slide-leave-active {
  opacity: 0;
  transform: translateX(10px);
}
</style>

<style>
:root {
  --vp-code-block-bg: #292d3e;
  --vp-code-copy-code-hover-bg: rgba(255, 255, 255, 0.05);
  --vp-code-copy-code-active-text: rgba(235, 235, 235, 0.6);
  --vp-c-divider-light: rgba(60, 60, 60, 0.12); /* 边框颜色 */
  --vp-shadow-2: 0 3px 12px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.07); /* 悬浮阴影*/
  --vp-c-brand: #42b883; /*控制按钮悬浮时的文字颜色*/
  --vp-c-text-2: rgba(60, 60, 60, 0.7); /* desc文字颜色 */
  --vp-c-bg-soft: #f9f9f9; /*desc框背景色*/
  --vp-c-gray-light-2: #c7c7c7; /* 文字颜色 */
  --vp-icon-copy: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' height='20' width='20' stroke='rgba(128,128,128,1)' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2'/%3E%3C/svg%3E");
  --vp-icon-copied: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' height='20' width='20' stroke='rgba(128,128,128,1)' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4'/%3E%3C/svg%3E");
}
</style>
