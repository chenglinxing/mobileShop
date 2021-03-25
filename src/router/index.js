import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/login/index")
  },
  {
    path: "/",
    component: () => import("../components/layout"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/home/index")
      },
      {
        path: "/menu",
        name: "menu",
        meta: {
          keepAlive: false
        },
        component: () => import("../views/menu/index")
      },
      {
        path: "/shoppingCart",
        name: "shoppingCart",
        meta: {
          keepAlive: false
        },
        component: () => import("../views/shoppingCart/index")
      },
      {
        path: "/user",
        name: "user",
        component: () => import("../views/user/index")
      },
      {
        path: '/news',
        name: 'news',
        component: () => import("../views/news/index")
      }
    ]
  },
  {
    path: "/goodsList",
    name: "goodsList",
    component: () => import("../views/goodsList/index")
  },
  {
    path: "/goodsDetails",
    name: "goodsDetails",
    component: () => import("../views/goodsDetails/index")
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: '/dailylife/',
  routes
})

export default router
