<template>
  <d-menu-item
    :key="parentPath ? `${parentPath}/${menu.path}` : menu.path"
    @click="handleClick(menu.path, menu.name!)"
  >
    <template #icon>
      <i :class="menu.meta?.icon"></i>
    </template>
    <span>{{ menu.meta!.title }}</span>
  </d-menu-item>
</template>
<script setup lang="ts">
import type { GetArrayItemType } from "../../router/type";
import type { RouteRecordRaw } from "vue-router";
import { useRouter } from "vue-router";

interface Props {
  menu: GetArrayItemType<RouteRecordRaw[]>;
  parentPath?: string;
  currentDepth?: number;
}

const props = defineProps<Props>();
const router = useRouter();

function handleClick(path: string, name: any) {
  const routeMeta = props.menu.meta;
  const params = (routeMeta?.routeParams ?? {}) as any;
  const query = (routeMeta?.routeQuery ?? {}) as any;
  props.currentDepth && (path = `${props.parentPath}/${path}`);
  // 如果带有params，使用name
  if (params) {
    router.push({
      name,
      params,
      query,
    });
  } else {
    router.push({
      path,
      params,
      query,
    });
  }
}
</script>
