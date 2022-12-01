<template>
  <d-sub-menu :key="menu.path" :title="menu.meta?.title">
    <template #icon>
      <i :class="menu.meta?.icon"></i>
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
  </d-sub-menu>
</template>
<script setup lang="ts">
import type { GetArrayItemType } from "../../router/type";
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
