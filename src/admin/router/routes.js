import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [];

// export default new VueRouter({routes});
export default [
  {
    path: "/",
    component: () => import('templates/pages/about.vue'),
    meta: {
      title: "Блок «Обо мне»"
    }
  },
  {
    path: "/works",
    component: () => import('templates/pages/works.vue'),
    meta: {
      title: "Блок «Работы»"
    }
  },
  {
    path: "/reviews",
    component: () => import('templates/pages/reviews.vue'),
    meta: {
      title: "Блок «Работы»"
    }
  },
  {
    path: "/login",
    component: () => import('templates/pages/login.vue'),
    meta: {
      public: true
    }
  }
]
