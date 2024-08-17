import {RouteRecordRaw, createWebHistory, createRouter} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/views/home.vue")
  }
]

const basePath = import.meta.env.VITE_BASE_PATH

const router = createRouter({
  history: createWebHistory(basePath),
  routes
})

export default router
