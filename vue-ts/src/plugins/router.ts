import Vue from "vue"
import VueRouter, { Route } from "vue-router"
import Home from "../pages/Home.vue";
import Goods from '../pages/Goods.vue'
import User from '../pages/User.vue'
import Login from '../pages/Login.vue'
import NoPage from '../pages/NoPage.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    component: Home
  },
  { path: '/goods', component: Goods },
  { path: '/user', component: User },
  // {
  //   path: '/user',
  //   component: User,
  //   beforeEnter: (to: Route, from: Route, next: Function) => {
  //     console.log('独享前置守卫')
  //   }
  // },
  { path: '/login', component: Login },
  { path: '/reg', component: () => import('../pages/Reg.vue') },
  { path: '/Detail', component: (r: any) => { require(['../pages/Reg.vue'], r) } },
  { path: '/', redirect: '/home' },
  { path: '*', component: NoPage }
]

const router = new VueRouter({
  mode: "history",
  routes
})

// router.beforeEach((to, from, next) => {
//   console.log('全局前置守卫')
//   next()
// })

// router.afterEach((to, from) => {
//   console.log('全局后置守卫')
// })

export default router;