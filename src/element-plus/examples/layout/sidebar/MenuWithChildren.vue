<template>
  <a-sub-menu :key="menu.path">
    <template #icon>
      <component :is="menu.meta?.icon" />
    </template>
    <template #title>
      {{ menu.meta?.title }}
    </template>
    <template
      v-for="subMenu in menu.children"
      :key="menu.path + '/' + subMenu.path"
    >
      <menu-with-children
        v-if="subMenu.children"
        :parent-path="parentPath + '/' + subMenu.path"
        :menu="subMenu"
        :current-depth="currentDepth + 1"
      />
      <menu-item
        v-else
        :menu="subMenu"
        :parent-path="currentDepth > 1 ? parentPath : menu.path"
        :current-depth="currentDepth + 1"
      />
    </template>
  </a-sub-menu>
</template>
<script setup lang="ts">
import type { GetArrayItemType } from "@/examples/router/type";
import type { RouteRecordRaw } from "vue-router";
import MenuItem from "./MenuItem.vue";

interface Props {
  menu: GetArrayItemType<RouteRecordRaw[]>;
  parentPath: string;
  // 当前的深度，用于计算 key
  currentDepth: number;
}

const props = defineProps<Props>();
</script>
