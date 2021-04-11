import Vue from 'vue'
import App from './layouts/App.vue'
import router from './plugins/router'
import './plugins/axios'
import store from './plugins/vuex';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
