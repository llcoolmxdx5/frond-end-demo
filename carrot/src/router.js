import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Rule from './views/Rule.vue'
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
      path: '/rule',
      name: 'Rule',
      component: Rule
    },
    {
      path: '/history',
      name: 'History',
      component: History
    }
  ]
})
