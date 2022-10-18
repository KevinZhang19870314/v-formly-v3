<template>
  <div class="layout-content">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-slide" mode="out-in" appear>
        <!-- <keep-alive> -->
        <component :is="Component" :key="route.fullPath" />
        <!-- </keep-alive> -->
      </transition>
    </router-view>
  </div>
</template>

<style scoped lang="less">
.layout-content {
  min-height: calc(100vh - var(--header-height));
  padding: 24px;
}

/* fade-slide */
.fade-slide-leave-active,
.fade-slide-enter-active {
  transition: all 0.3s;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
