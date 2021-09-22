import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import History from './views/history.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/history',
      name: 'History',
      component: History
    }
  ]
})