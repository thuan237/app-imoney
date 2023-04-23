import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/index.vue"),
  },
  {
    path: "/register",
    name: "register",
    meta: {
      layout: "auth",
    },
    component: () =>
      // giúp chúng ta khi gọi tới cái view này mới được load ra chứ ko load ra ngay từ đầu, làm cho hệ thống nhanh hơn
      import(/* webpackChunkName: "register" */ "../views/register.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      layout: "auth",
    },
    component: () =>
      // giúp chúng ta khi gọi tới cái view này mới được load ra chứ ko load ra ngay từ đầu, làm cho hệ thống nhanh hơn
      import(/* webpackChunkName: "register" */ "../views/login.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      // giúp chúng ta khi gọi tới cái view này mới được load ra chứ ko load ra ngay từ đầu, làm cho hệ thống nhanh hơn
      import(/* webpackChunkName: "register" */ "../views/profile.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
