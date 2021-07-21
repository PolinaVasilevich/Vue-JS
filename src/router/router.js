import Main from "@/views/Main";
import PostPage from "@/views/PostPage";
import About from "@/views/About";
import PostIdPage from "@/views/PostIdPage";
import PostPageWithStore from "@/views/PostPageWithStore";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/posts",
    component: PostPage,
  },

  {
    path: "/about",
    component: About,
  },

  {
    path: "/posts/:id",
    component: PostIdPage,
  },

  {
    path: "/store",
    component: PostPageWithStore,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
