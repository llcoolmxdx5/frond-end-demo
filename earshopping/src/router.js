import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/list',
      meta: {
        title: '商品列表'
      },
      component: (resolve) => require(['./views/list.vue'], resolve)
    },
    {
      path: '/product/:id',
      meta: {
        title: '商品详情'
      },
      component: (resolve) => require(['./views/product.vue'], resolve)
    },
    {
      path: '*',
      redirect: '/list'
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})

router.afterEach((to, from, next) => {
  window.screenTop(0, 0)
})

export default router
