import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import homeRoute from "./modules/home";
import formRoute from "./modules/form";
import functionRoute from "./modules/function";
import { useRouteStore } from "../store/routes";
import type { App } from "vue";

const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/home",
  },
];

const asyncRoutes: RouteRecordRaw[] = [homeRoute, formRoute, functionRoute];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes, ...asyncRoutes],
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;

export function setupRouter(app: App) {
  app.use(router);

  const store = useRouteStore();
  store.appendRoute(asyncRoutes);
}
