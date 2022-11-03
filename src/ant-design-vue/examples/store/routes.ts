import { defineStore } from "pinia";
import type { RouteRecordRaw } from "vue-router";

interface RouteState {
  routes: RouteRecordRaw[];
}

export const useRouteStore = defineStore("routes", {
  state: (): RouteState => ({
    routes: [],
  }),
  getters: {
    getRoutes: (state) => {
      return state.routes;
    },
  },
  actions: {
    appendRoute(route: RouteRecordRaw[]): void {
      this.routes.push(...route);
    },
  },
});
