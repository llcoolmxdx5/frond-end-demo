import Vue from 'vue'
import ElementUI from 'element-ui'
import Icon from 'vue-awesome/components/Icon'
import VueCookies from 'vue-cookies'
import Vue2Filters from 'vue2-filters'
import 'babel-polyfill'
import 'element-ui/lib/theme-chalk/index.css'
import 'vue-awesome/icons'
import '@/plugins/axios'
import '@/plugins/chatime'
import '@/plugins/font-awesome'

import App from './App.vue'
import router from './router'
import { createStore } from './store'

Vue.use(Vue2Filters)
Vue.use(ElementUI, { size: 'small' })
Vue.component('icon', Icon)
Vue.use(require('vue-moment'))
Vue.use(VueCookies)

const store = createStore()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.config.devtools = true
Vue.config.productionTip = true
