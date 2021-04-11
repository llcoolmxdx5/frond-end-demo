import Vue from 'vue'
import Icon from 'vue-awesome/components/Icon'
import VueCookies from 'vue-cookies'
import Vue2Filters from 'vue2-filters'
import 'babel-polyfill'
import 'vue-awesome/icons'
import '@/plugins/axios'
import '@/plugins/chatime'
import '@/plugins/font-awesome'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


import App from './App.vue'
import router from './router'
import { createStore } from './store'

Vue.use(Vue2Filters)
Vue.component('icon', Icon)
Vue.use(require('vue-moment'))
Vue.use(VueCookies)
Vue.use(MintUI)

const store = createStore()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.config.devtools = true
Vue.config.productionTip = true
