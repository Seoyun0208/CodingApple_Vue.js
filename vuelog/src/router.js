import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List.vue";
import Main from "./components/Main.vue";

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Main,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 