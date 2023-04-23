import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      isShowFooter: true,
    },
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
    meta: {
      leading: true,
      text: "Hi, Thuan Nguyen",
      isShowFooter: true,
    },
    component: () =>
      // giúp chúng ta khi gọi tới cái view này mới được load ra chứ ko load ra ngay từ đầu, làm cho hệ thống nhanh hơn
      import(/* webpackChunkName: "register" */ "../views/profile.vue"),
  },
  {
    path: "/new-transaction",
    name: "newTransaction",
    meta: {
      text: "New Transaction",
      leading: true,
      isShowFooter: false,
    },
    component: () =>
      // giúp chúng ta khi gọi tới cái view này mới được load ra chứ ko load ra ngay từ đầu, làm cho hệ thống nhanh hơn
      import(/* webpackChunkName: "register" */ "../views/new-transaction.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
