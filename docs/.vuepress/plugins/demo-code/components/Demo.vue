<template>
  <div
    :class="['demo', { hover: hovering }]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <!-- 组件展示 -->
    <div class="demo-content">
      <component :is="component" />
    </div>
    <!-- 代码展示 -->
    <div ref="codeWrapRef" class="demo-show">
      <div
        ref="descRef"
        class="demo-show_desc"
        v-if="decodedInfo"
        v-html="decodedInfo"
      ></div>
      <div
        ref="codeRef"
        class="demo-show-code language-vue"
        v-html="decodedHlCode"
      ></div>
    </div>
    <!-- 切换按钮 -->
    <div
      ref="controlRef"
      :class="['demo-control', { fixed: fixedControl }]"
      :style="{ width: fixedControl ? `${controlWidth}px` : 'unset' }"
      @click="isExpanded = !isExpanded"
    >
      <transition name="arrow-slide">
        <i
          :class="[
            'demo-control-icon',
            isExpanded ? 'demo-control-icon_up' : 'demo-control-icon_down',
          ]"
        ></i>
      </transition>
      <transition name="text-slide">
        <span class="demo-control-tip" v-show="hovering">
          {{ isExpanded ? "隐藏" : "显示" }}
        </span>
      </transition>
      <span
        v-show="!copied"
        :class="['demo-control-copy', { copying: copied }]"
        @click.stop="onCopy"
      >
        {{ copiedText }}
      </span>
      <transition name="bounce">
        <span v-show="copied" class="demo-control-copy success">
          {{ copiedText }}
        </span>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
const timeoutIdMap = new Map();
</script>
<script setup lang="ts">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  unref,
  watch,
} from "vue";

const props = defineProps<{
  component: string;
  info: string;
  highlightCode: string;
  code: string;
}>();

// ref
const controlRef = ref<HTMLElement | null>(null);
const scrollParentRef = ref<Document | null>(null);
const codeWrapRef = ref<HTMLElement | null>(null);
const descRef = ref<HTMLElement | null>(null);
const codeRef = ref<HTMLElement | null>(null);

const hovering = ref<boolean>(false); // 鼠标是否移入
const isExpanded = ref<boolean>(false); // 代码是否展开
const fixedControl = ref<boolean>(false); // 操作栏是否固定
const controlWidth = ref<number>(0); // 操作栏固定时的宽度
const copied = ref<boolean>(false);

const decodedInfo = computed(() => decodeURIComponent(props.info));
const decodedHlCode = computed(() => decodeURIComponent(props.highlightCode));
const decodedCode = computed(() => decodeURIComponent(props.code));
const codeAreaHeight = computed(() => {
  if (decodedInfo.value) {
    return unref(descRef)!.clientHeight + unref(codeRef)!.clientHeight + 20;
  }
  return unref(codeRef)!.clientHeight;
});
const copiedText = computed(() => (unref(copied) ? "成功" : "复制"));

watch(isExpanded, (isExpanded) => {
  if (unref(codeWrapRef)) {
    unref(codeWrapRef)!.style.height = isExpanded
      ? `${unref(codeAreaHeight) + 1}px`
      : "0";
  }
  if (!isExpanded) {
    fixedControl.value = false;
    removeScrollHandler();
  }
  setTimeout(() => {
    scrollParentRef.value = document;
    unref(scrollParentRef)?.addEventListener("scroll", scrollHandler);
    scrollHandler();
  }, 200);
});

onMounted(() => {
  nextTick(() => {
    controlWidth.value = unref(codeRef)!.offsetWidth;
  });
});
onBeforeUnmount(() => {
  removeScrollHandler();
});

function onCopy(e) {
  if (unref(copied)) return;
  try {
    navigator.clipboard.writeText(unref(decodedCode));
    copied.value = true;
    const el = e.target;
    clearTimeout(timeoutIdMap.get(el));
    const timeoutId = setTimeout(() => {
      el.blur();
      timeoutIdMap.delete(el);
      copied.value = false;
    }, 1500);
    timeoutIdMap.set(el, timeoutId);
  } catch (err) {
    console.error("复制代码失败");
  }
}
function scrollHandler() {
  if (unref(codeWrapRef)) {
    const { top, bottom, left } = unref(codeWrapRef)!.getBoundingClientRect();
    const height = document.documentElement.clientHeight;
    fixedControl.value = bottom > height && top + 44 <= height;
    unref(controlRef)!.style.left = unref(fixedControl) ? `${left}px` : "0";
  }
}
function removeScrollHandler() {
  unref(scrollParentRef)?.removeEventListener("scroll", scrollHandler);
}
</script>

<style lang="scss" scoped>
.demo {
  margin: 10px 0;
  border: solid 1px var(--c-border);
  border-radius: 3px;
  transition: 0.2s;

  &.hover {
    box-shadow: var(--vp-shadow-2);
    .demo-control {
      color: var(--c-brand);
    }
    .demo-control-icon {
      transform: translateX(-40px);
    }
  }

  code {
    font-family: var(--font-family-code);
  }
}

.demo-content {
  padding: 24px;
}

.demo-show {
  position: relative;
  border-top: solid 1px var(--c-border);
  background-color: var(--code-bg-color);
  overflow: hidden;
  height: 0;
  transition: height 0.2s;

  :deep(pre) {
    margin: 0 !important;
    padding: 1.25rem 1.5rem;
    background-color: inherit !important;
  }

  .demo-show_desc {
    border: solid 1px var(--c-border);
    border-radius: 3px;
    padding: 20px;
    box-sizing: border-box;
    line-height: 22px;
    color: var(--c-text);
    word-break: break-word;
    margin: 10px;
    background-color: var(--c-bg-light);
  }

  .demo-show-code {
    margin-bottom: 0 !important;
  }
}

.demo-control {
  border-top: 1px solid var(--c-border);
  height: 44px;
  box-sizing: border-box;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-align: center;
  margin-top: -1px;
  color: var(--c-bg-arrow);
  background: var(--c-bg);
  cursor: pointer;
  position: relative;

  &.fixed {
    position: fixed;
    bottom: 0;
    z-index: 999;
    border-radius: 0;
  }

  & > span {
    position: absolute;
    transform: translateX(-30px);
    font-size: 14px;
    line-height: 44px;
    transition: 0.3s;
    display: inline-block;
  }

  & .text-slide-enter,
  & .text-slide-leave-active {
    opacity: 0;
    transform: translateX(10px);
  }
}
.demo-control-icon {
  display: inline-block;
  position: absolute;
  top: 50%;
  font-size: 16px;
  line-height: 44px;
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
.demo-control-copy {
  right: 0px;
  color: var(--c-brand);

  &.success {
    color: var(--c-danger);
  }
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>

<style>
:root {
  --vp-shadow-2: 0 0 8px 0 rgba(232, 237, 250, 0.6),
    0 2px 4px 0 rgba(232, 237, 250, 0.5); /* 悬浮阴影*/
}
</style>
