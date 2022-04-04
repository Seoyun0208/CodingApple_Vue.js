import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List.vue";
import Main from "./components/Main.vue";
import Detail from "./components/Detail.vue";
import Notfound from "./components/Notfound.vue";
import Author from "./components/Author.vue";
import Comment from "./components/Comment.vue";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/detail/:id(\\d+)",
    component: Detail,
    children: [
      {
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      },
    ],
  },
  {
    path: "/:anything(.*)",
    component: Notfound,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 