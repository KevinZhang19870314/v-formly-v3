<template>
  <a-layout-sider
    v-model:collapsed="getCollapsed"
    class="layout-sidebar layout-sidebar--fixed"
    :trigger="null"
    collapsible
    collapsed-width="56"
    width="228"
    theme="light"
  >
    <Menu />
  </a-layout-sider>
</template>

<script setup lang="ts">
import { useCollapsed } from "../useCollapsed";

import Menu from "./Menu.vue";

const { getCollapsed } = useCollapsed();
</script>

<style scoped lang="less">
.layout-sidebar {
  &--fixed {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 20;
  }
}
</style>
