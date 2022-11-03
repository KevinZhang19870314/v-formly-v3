<template>
  <el-menu-item :index="key" @click="handleClick(menu.path, menu.name!)">
    <el-icon>
      <component :is="menu.meta?.icon" />
    </el-icon>
    <template #title>
      {{ menu.meta!.title }}
    </template>
  </el-menu-item>
</template>
<script setup lang="ts">
import type { GetArrayItemType } from "@/element-plus/examples/router/type";
import { computed } from "vue";
import type { RouteRecordRaw } from "vue-router";
import { useRouter } from "vue-router";

interface Props {
  menu: GetArrayItemType<RouteRecordRaw[]>;
  parentPath?: string;
  currentDepth?: number;
}

const props = defineProps<Props>();
const router = useRouter();

const key = computed(() => {
  const { parentPath, menu } = props;
  return parentPath ? `${parentPath}/${menu.path}` : menu.path;
});

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
