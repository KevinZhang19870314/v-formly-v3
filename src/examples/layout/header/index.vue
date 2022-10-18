<template>
  <a-layout-header :class="getHeaderClass">
    <div class="header-left">
      <SiderTrigger class="layout-header-action" />
      <Breadcrumb />
    </div>
  </a-layout-header>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCollapsed } from "../useCollapsed";

import SiderTrigger from "./SiderTrigger.vue";
import Breadcrumb from "./Breadcrumb.vue";

const { getCollapsed } = useCollapsed();

const getHeaderClass = computed(() => {
  return {
    "layout-header": true,
    "layout-header--fixed": true,
    "layout-header--light": true,
    "layout-header--collapsed": getCollapsed.value,
  };
});
</script>

<style lang="less">
.layout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition-property: all cubic-bezier(0.4, 0, 0.2, 1) 200ms;
  padding-right: 0;
  padding-left: var(--sidebar-width);
  height: var(--header-height);
  line-height: var(--header-height);

  .header-left {
    height: 100%;
    display: flex;
    align-items: center;
  }

  &--light {
    background: #fff;
  }

  &--fixed {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
  }

  &--collapsed {
    padding-left: var(--sidebar-collapsed-width);
  }

  &-action {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
    height: 100%;
    font-size: 1rem;
    line-height: 1.5rem;
    cursor: pointer;
    transition: color cubic-bezier(0.4, 0, 0.2, 1) 150ms;
  }
}
</style>
